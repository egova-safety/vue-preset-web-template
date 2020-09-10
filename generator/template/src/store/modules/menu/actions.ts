import * as models from "@/models";
import { ActionTree, ActionContext } from "vuex";
import State from "./state";

export function save(store: ActionContext<State, any>, value: Array<any>): void {
    store.commit("SAVE", value);
}

export function remove(store: ActionContext<State, any>): void {
    store.commit("REMOVE");
}
export function hide(store: ActionContext<State, any>): void {
    store.commit("HIDE");
}
export default <ActionTree<State, any>>
    {
        hide,
        save,
        remove
    };