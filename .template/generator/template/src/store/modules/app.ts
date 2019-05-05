// import { appRouter } from "@/routes/index";
// import { TagUtil } from "@/common";
// import Vue from "vue";
// import { PagePath } from '@/models';

// const app = {
//     state: {
//         cachePage: [],
//         openedSubmenuArr: [], // 要展开的菜单数组
//         menuTheme: "dark", // 主题
//         themeColor: "",
//         pageOpenedList: [{
//             title: "首页",
//             path: "",
//             name: "main"
//         }],
//         currentPageName: "",
//         currentPath:[], // 面包屑数组
//         routers: [
//             appRouter
//         ],
//         permissions: [],
//         menuList: [],
//         tagsList: [],
//         dontCache: ["text-editor", "artical-publish"]
//     },
//     mutations: {
//         // 设置权限
//         setPermissions(state: { permissions: any; }, list: never[]) {
//             state.permissions = list || [];
//         },
//         setTagsList(state: any, list: any) {
//             state = state || app.state;
//             state.tagsList.push(...list);
//         },
//         // 更换主题
//         changeMenuTheme(state:any, theme:string) {
//             state = state || app.state;
//             state.menuTheme = theme;
//         },
//         changeMainTheme(state:any, mainTheme:string) {
//             state = state || app.state;
//             state.themeColor = mainTheme;
//         },
//         addOpenSubmenu(state:any, name:string) {
//             state = state || app.state;
//             let hasThisName = false;
//             let isEmpty = false;
//             if (name.length === 0) {
//                 isEmpty = true;
//             }
//             if (JSON.stringify(state.openedSubmenuArr).indexOf(name) > -1) {
//                 hasThisName = true;
//             }
//             if ((!hasThisName) && (!isEmpty)) {
//                 state.openedSubmenuArr.push(name);
//             }
//         },
//         // 关闭页面
//         closePage(state:any, name:string) {
//             state = state || app.state;
//             state.openedSubmenuArr.forEach((item: string, index: any) => {
//                 if (item === name) {
//                     state.openedSubmenuArr.splice(index, 1);
//                 }
//             });
//         },

//         initCachepage(state:any) {
//             state = state || app.state;
//             if (localStorage.cachePage) {
//                 state.cachePage = JSON.parse(localStorage.cachePage);
//             }
//         },
//         // 移除某一个标签页面
//         removeTag(state:any, name: string) {
//             state = state || app.state;
//             state.pageOpenedList.map((item: PagePath, index: any) => {
//                 if (item.name === name) {
//                     state.pageOpenedList.splice(index, 1);
//                 }
//             });
//         },
//         pageOpenedList(state:any) {
//             state = state || app.state;
//             let len = state.currentPath.length;
//             if (len <= 1) {
//                 return state.pageOpenedList;
//             } else {
//                 let flag = false;
//                 for (let item of state.pageOpenedList) {
//                     if (item["name"].indexOf(state.currentPath[len - 1].name) > -1) {
//                         flag = true;
//                     }
//                 }
//                 if (!flag) {
//                     state.pageOpenedList.push(state.currentPath[len - 1]);
//                     localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
//                 }
//                 return state.pageOpenedList;
//             }
//         },
//         // 关闭所有标签页面
//         clearAllTags(state:any) {
//             state = state || app.state;
//             state.pageOpenedList.splice(1);
//             state.cachePage.length = 0;
//             localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
//         },
//         // 关闭其他标签页面
//         clearOtherTags(state:any, vm:Vue) {
//             state = state || app.state;
//             let currentName = vm.$route.name;
//             let currentIndex = 0;
//             state.pageOpenedList.forEach((item: PagePath, index: number) => {
//                 if (item.name === currentName) {
//                     currentIndex = index;
//                 }
//             });
//             if (currentIndex === 0) {
//                 state.pageOpenedList.splice(1);
//             } else {
//                 state.pageOpenedList.splice(currentIndex + 1);
//                 state.pageOpenedList.splice(1, currentIndex - 1);
//             }
//             let newCachepage = state.cachePage.filter((item: string) => {
//                 return item === currentName;
//             });
//             state.cachePage = newCachepage;
//             localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
//         },
//         // 设置打开的页面
//         setOpenedList(state:any) {
//             state = state || app.state;
//             state.pageOpenedList = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) : appRouter.children;
//         },
//         setCurrentPath(state:any, pathArr:PagePath[]) {
//             state = state || app.state;
//             state.currentPath = pathArr;
//         },
//         setCurrentPageName(state:any, name:string) {
//             state = state || app.state;
//             state.currentPageName = name;
//         },
//         clearOpenedSubmenu(state:any) {
//             state = state || app.state;
//             state.openedSubmenuArr.length = 0;
//         }

//     }
// };
// export default app;
