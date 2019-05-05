import { component, watch, config, View } from "flagwind-web";

import "./index.scss";

@component({ template: require("./index.html") })
export default class Welcome extends View {
  
  protected mounted() {
    console.log("mounted");
  }
}
