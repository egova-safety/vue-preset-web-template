import { component, watch, config, View } from "flagwind-web";
import Cookies from "js-cookie";

import "./index.scss";

@component({ template: require("./index.html") })
export default class Login extends View {

    private remember: boolean = false;
    // 用户名和密码的form对象
    private form: any = {
        userName: "",
        password: ""
    };

    private rules: any = {
        userName: [
            { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [
            { required: true, message: "密码不能为空", trigger: "blur" }
        ]
    };

    public onLogin(): void {
        (<any>this.$refs.loginForm).validate(async (valid: any) => {
            if (!valid) {
                this.$notice.warning({ title: "验证不通过" });
                return;
            }
            try {
                this.$router.push({ name: "main" });
            } catch (error) {
                this.$notice.error({ title: "调用服务异常" });
            }
        });
    }

    @watch("remember", { immediate: false })
    public onRememberChanged(nv: boolean, ov: boolean) {
        if (nv) {
            Cookies.set("remember_login_name", this.form.userName);
        }
    }

    protected mounted() {
        let userName = Cookies.get("remember_login_name");
        if (userName) {
            this.form.userName = userName;
        }
    }

}
