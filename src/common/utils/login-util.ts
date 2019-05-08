import { View, Component } from "flagwind-web";
import Cookies from "js-cookie";

/**
 * 标签工具类
 *
 * @export
 * @class TagUtil
 */
export class LoginUtil {
    
  /**
   * 是否登录
   */
  public static isLogin(): boolean {
    return Cookies.get("access_token") !== undefined;
  }

  public static getRemeberLoginName(): string | undefined {
    let userName = Cookies.get("remember_login_name");
    return userName;
  }

  public static setRemeberLoginName(userName: string): void {
    if (userName) {
      Cookies.set("remember_login_name", userName);
    } else {
      Cookies.remove("remember_login_name");
    }
  }

}
