
import { MutationTree } from "vuex";
import flagwind from "flagwind-core";
import Type = flagwind.Type;
import UserState from "./state";
import { UserInfo } from "@/models";
import Cookies from "js-cookie";

export function save(state: UserState, userInfo: UserInfo): void {
    state.id = userInfo.user.id;
    state.name = userInfo.user.name;
    state.photo = userInfo.user.photo;
    state.username = userInfo.user.username;
    state.detail = userInfo.user;
    state.permissions = userInfo.permissions || [];
    Cookies.set("username", state.username);
    Cookies.set("personId", userInfo.user.personId || "");
    if(userInfo.access_token) {
        Cookies.set("access_token", userInfo.access_token);
    }
}
export function clear(state: UserState): void {
    state.id = "";
    state.name = "";
    state.username = "";
    state.photo = "";
    state.detail = {};
    state.permissions = [];
    Cookies.remove("username");
    Cookies.remove("personId");
    Cookies.remove("access_token");
}
export function logout(state: UserState): void {
    clear(state);
}
export default <MutationTree<UserState>>
{
    save,
    clear,
    logout
};
