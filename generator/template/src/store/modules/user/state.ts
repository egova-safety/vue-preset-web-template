import flagwind from "flagwind-core";
import Type = flagwind.Type;

export default class UserState {
    // 用户id
    public id: string = "";
    // 用户名
    public name: string = "";
    // 用户登录名
    public username: string = "";
    // 权限列表
    public permissions: Array<any> = [];
    // 用户详情信息
    public detail: any = {};
    // 用户头像地址
    public photo: string = "";
}
