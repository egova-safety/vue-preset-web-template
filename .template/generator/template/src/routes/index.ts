import { resolve } from "path";

export const appRouter = {
    name: "dashboard",
    path: "/",
    redirect: "/welcome",
    component: () => import("@/views/dashboard/index"),
    children: [
        {
            name: "welcome",
            path: "welcome",
            title: "首页",
            component: () => import("@/views/welcome/index")
        }
    ]
};

export const routes = [
    appRouter,
    {
        name: "login",
        path: "/login",
        title: "登录",
        component: () => import("@/views/login/index")
    },
    {
        name: "500",
        path: "/500",
        component: () => import("@/views/errors/500")
    },
    {
        name: "403",
        path: "/403",
        component: () => import("@/views/errors/403")
    },
    {
        name: "404",
        path: "/*",
        component: () => import("@/views/errors/404")
    }
];
