import Vue from "vue";
import flagwind from "flagwind-core";
import { Spin } from "iview/types/spin";
import { LoadingBarConfig, Message, ModalInstance, Notice } from "iview";
import { WatchOptions, ComponentOptions } from "vue/types/options";
import { VNode, NormalizedScopedSlot } from "vue/types/vnode";


declare module 'vue/types/vue' {
    interface Vue {

        /**
         *
         * @param uri 格式如：catalog://tree-refresh
         * @param fn 订阅接受函数
         */
        $subscribe(uri: string, fn: Function): void;

        /**
         *
         * @param event  格式如：catalog://tree-refresh
         * @param data  发布的数据
         */
        $publish(uri: string, data?: Object): void;
    }
}
