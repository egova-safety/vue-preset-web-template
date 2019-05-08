import user from "./modules/user";
import Menu from "./modules/menu";

const modules = {
    user,
    menu: new Menu()
};

export default modules;
