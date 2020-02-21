
import flagwind from "flagwind-core";
import Vue from "vue";
import { component } from "flagwind-web";

export class EventBus extends flagwind.BroadcastManager {
    public id: string;
    public constructor(id: string) {
        super();
        this.id = id;
    }
}

@component
export class EventBusMixin extends Vue {

    public _eventNames: Array<string> = [];

    public get $eventNames() {
        if (this._eventNames === undefined) {
            this._eventNames = [];
        }
        return this._eventNames;
    }

    public $eventBus: flagwind.BroadcastManager | undefined;

    public $subscribe(uri: string, fn: Function, priority?: number) {
        this.$eventNames.push(uri);
        let contract = new flagwind.BroadcastContract(uri);
        if (priority !== undefined) {
            contract.priority = priority;
        }
        (this.$eventBus || flagwind.BroadcastManager.instance).register(contract, new VueReceiver(this, fn));
    }

    public $publish(uri: string, args?: any) {
        let map = new flagwind.Map<string, any>();
        if (args) {
            Object.keys(args).forEach(key => {
                map.set(key, args[key]);
            });
        }
        let broadcast = new flagwind.Broadcast(uri, map);

        let $this: any = this;
        do {
            let bus: flagwind.BroadcastManager = ($this.$eventBus || flagwind.BroadcastManager.instance);
            // let entries: flagwind.Map<string, any> = bus.receiverProvider._entries;
            if (bus.hasReceiver(broadcast.uri)) {
                bus.send(broadcast);
                break;
            } else {
                $this = $this.$parent;
            }
        }
        while ($this != null);
    }

    public destroyed() {
        let bus = (this.$eventBus || flagwind.BroadcastManager.instance);
        if (this.$eventNames && this.$eventNames.length > 0) {
            this.$eventNames.forEach(uri => {
                bus.unregister(new flagwind.BroadcastContract(uri));
            });
            console.info("局部eventBus自动销毁");
        }
    }
}

export class VueReceiver implements flagwind.IBroadcastReceiver {
    private target: any;
    private method: Function;

    public constructor(target: any, fn: Function) {
        this.target = target;
        this.method = fn;
    }
    public receive(context: flagwind.BroadcastContext): void {
        this.method.apply(this.target, [context.extras]);
    }
}
