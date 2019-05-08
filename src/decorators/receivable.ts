import flagwind from "flagwind-core";

/**
 *
 * @param uri 标注当前类型是一个广播接收器。
 * @param options 可选参数
 */
export function receivable(uri: string, options: { isGlobal?: boolean; priority?: number } = { isGlobal: false, priority: 0 }) {
    if (!uri) {
        throw new flagwind.InvalidOperationException("The broadcast uri is empty.");
    }

    return function (target: any, name: any, descriptor: any) {

        let mounted = target.mounted;
        target.mounted = function () {
            if (this.$eventBus === undefined && (!options.isGlobal)) {
                this.$eventBus = new flagwind.BroadcastManager();
            }
            this.$subscribe(uri, descriptor.value, options.priority);
            if (mounted) {
                mounted.apply(this);
            }
        };
    };
}
