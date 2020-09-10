import * as models from "@/models";
import flagwind from "flagwind-core";
import Type = flagwind.Type;

export default class State {
    /**
     * 获取所有菜单项列表。
     * @member
     * @returns Array<models.IMenuItem>
     */
    public items: Array<any> = new Array<any>();

    /**
     * 隐藏菜单
     */
    public hide: boolean = false;

    /**
     * 查找指定名称找菜单。
     * @param  {string} path 菜单路径字符串。
     * @returns models.IMenuItem 菜单项，如果未找到对应路径的菜单项则为 null。
     */
    public findItem(name: string, items: Array<any> = this.items): any {
        // 不允许查找根路径
        let result: any = undefined;

        for (let item of items) {
            if (item.name && item.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                result = item;

                break;
            }
            if (Type.isArray(item.children)) {
                result = this.findItem(name, item.children);

                if (result) {
                    break;
                }
            }
        }

        return result;
    }
}