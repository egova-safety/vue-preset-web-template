// import { View, Component } from "flagwind-web";
// import { RouteConfig, Route } from 'vue-router';
// import Vue from "vue";
// import { PagePath } from '@/models';

// /**
//  * 标签工具类
//  * 
//  * @export
//  * @class TagUtil
//  */
// export class TagUtil {

//     /**
//      * 设置页面标题
//      * @param title 标题
//      */
//     public static title(title: string): void {
//         (<any>window).document.title = title;
//     }

//     /**
//      * 内包含
//      * @param arr 子集
//      * @param targetArr 父集
//      */
//     public static inOf(arr: Array<string>, targetArr: Array<string>): boolean {
//         let res = true;
//         arr.forEach(item => {
//             if (targetArr.indexOf(item) < 0) {
//                 res = false;
//             }
//         });
//         return res;
//     }

//     /**
//      * 包含
//      * @param ele 元素
//      * @param targetArr 集合
//      */
//     public static oneOf(ele: string, targetArr: Array<string>): boolean {
//         if (targetArr.indexOf(ele) >= 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     /**
//      * 判断当前路由是否为可访问路由
//      * @param itAccess 可访问路由列表
//      * @param currentAccess 当前路由
//      */
//     public static showThisRoute(itAccess: Array<string> | string, currentAccess: string) {
//         if (currentAccess === "*") return true;

//         if (typeof itAccess === "object" && Array.isArray(itAccess)) {
//             return TagUtil.oneOf(currentAccess, itAccess);
//         } else {
//             return itAccess === currentAccess;
//         }
//     }

//     public static getRoutesByName(parent: RouteConfig | undefined, name: string): RouteConfig[] | undefined {
//         if (!name || !parent) {
//             return undefined;
//         }

//         if (parent.name === name) {
//             return [parent];
//         }

//         if (parent.children == undefined || parent.children.length == 0) {
//             return undefined;
//         }

//         let routerObj;
//         for (let item of parent.children) {
//             routerObj = TagUtil.getRoutesByName(item, name);
//             if (routerObj) {
//                 routerObj.push(routerObj[routerObj.length - 1]);
//                 routerObj[routerObj.length - 2] = parent;
//                 return routerObj;
//             }
//         }
//         return undefined;
//     }

//     /**
//      * 根据名称查找路由对象
//      * @param routers  路由表
//      * @param name 路由名称
//      */
//     public static getRouterObjByName(routers: RouteConfig[] | undefined, name: string): any {
//         if (!name || !routers) {
//             return null;
//         }

//         let routerObj = null;
//         for (let item of routers) {
//             if (item.name === name) {
//                 return item;
//             }
//             routerObj = TagUtil.getRouterObjByName(item.children, name);
//             if (routerObj) {
//                 return routerObj;
//             }
//         }
//         return null;
//     }

//     public static handleTitle(vm: any, router: any) {
//         if (typeof router.title === "object") {
//             return vm.$t(router.title.i18n);
//         } else {
//             return router.title;
//         }
//     }
 
//     public static setCurrentPath(vm: Vue, name: string) {

//         const children = <RouteConfig[]>vm.$store.state.app.routers[0].children;
//         let scope : RouteConfig[] | undefined;
//         for (let router of children) {
//             scope = TagUtil.getRoutesByName(router, name);
//             if (scope) {
//                 break;
//             }
//         }

//         if (scope == undefined) {
//             throw new Error("未知路由");
//         }
 
//         let currentPathArr: PagePath[] = [];

//         let parent, current;
//         for (let route of scope) {
//             if (route && route.name && route.name.indexOf("_default") < 0) {
//                 current = {
//                     name: route.name,
//                     title: TagUtil.handleTitle(vm, route),
//                     path: parent != undefined ? (parent.path + "/" + route.path) : route.path
//                 };
//                 currentPathArr.push(current);
//                 parent = current;
//             }
//         }
 
//         vm.$store.commit("setCurrentPath", currentPathArr);
//         return currentPathArr;
//     }

//     public static openNewPage(vm: View, name: string, argu: any, query: any) {
//         let pageOpenedList = vm.$store.state.app.pageOpenedList;
//         let openedPageLen = pageOpenedList.length;
//         let i = 0;
//         let tagHasOpened = false;
//         while (i < openedPageLen) {
//             if (name === pageOpenedList[i].name) {
//                 vm.$store.commit("pageOpenedList", {
//                     index: i,
//                     argu: argu,
//                     query: query
//                 });
//                 tagHasOpened = true;
//                 break;
//             }
//             i++;
//         }

//         vm.$store.commit("setCurrentPageName", name);
//     }

//     public static toDefaultPage(routers: RouteConfig[], name: string, route: any, next:()=>void) {
//         let notHandle = true;
//         let currrentRoute = TagUtil.getRouterObjByName(routers, name);
//         if (currrentRoute && currrentRoute.children && currrentRoute.children.length > 0) {
//             route.replace({ name: currrentRoute.children[0].name });
//             notHandle = false;
//             next();
//         }
        
//         if (notHandle) {
//             next();
//         }
//     }

// }
