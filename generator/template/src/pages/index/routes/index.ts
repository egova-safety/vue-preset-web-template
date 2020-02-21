import { resolve } from "path";

export const routes = [
    {
        name: "default",
        path: "/",
        redirect: "/welcome"
    },
    {
        name: "welcome",
        path: "/welcome",
        title: "欢迎",
        meta: { title: "欢迎" },
        component: () => import("@/pages/index/views/welcome/index")
    }
];