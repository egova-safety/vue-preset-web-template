import Cookies from "js-cookie";

const user = {
    state: {
        userProfile: {
            id: null,
            name: "",
            userName: "",
            departmentId: "",
            regionCode: ""
        }
    },
    mutations: {
        // 保存用户信息
        saveUser(state: { userProfile: any }, userInfo: any) {
            state.userProfile = { ...state.userProfile, ...userInfo };
            Cookies.set("username", userInfo.userName);
            if (userInfo.access_token) {
                Cookies.set("access_token", userInfo.access_token);
            }
        },
        // 清除用户信息
        clearUser(state: { userProfile: any }) {
            state.userProfile = {
                id: null,
                name: "",
                userName: "",
                departmentId: "",
                regionCode: ""
            };
            Cookies.remove("username");
            Cookies.remove("access_token");
            // Cookies.remove("xToken");
        },
        // 注销当前用户
        logout() {
            user.mutations.clearUser(user.state);
            // 清空打开的页面等数据，但是保存主题数据
            let theme = "";
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
        }
    }

};
export default user;
