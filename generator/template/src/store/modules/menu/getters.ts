import * as models from "@/models";
import { GetterTree } from "vuex";
import State from "./state";

export function items(state: State): Array<any> {
    return state.items;
}

export function hide(state: State): boolean {
    return state.hide;
}

export function item(state: State): Function {
    return (name: string) => {
        return state.findItem(name);
    };
}

export default <GetterTree<State, any>>
    {
        items,
        item
    };