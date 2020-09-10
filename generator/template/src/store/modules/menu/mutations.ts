import { MutationTree } from "vuex";
import flagwind from "flagwind-core";
import State from "./state";

export function SAVE(state: State, apps: Array<any>): void {
    state.items = apps;
}

export function HIDE(state: State): void {
    state.hide = true;
}

export function REMOVE(state: State): void {
    state.items = [];
}

export default <MutationTree<State>>
    {
        SAVE,
        REMOVE
    };