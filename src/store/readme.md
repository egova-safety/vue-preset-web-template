
# vuex使用说明

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

## 核心概念

### State

vuex中的数据源，我们需要保存的数据就保存在这里

### Getter

Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义vuex的Getter来获取，Getters 可以用于监听、state中的值的变化，返回计算后的结果

### Mutation

如果需要修改store中的值唯一的方法就是提交mutation来修改

### Action

Action 类似于 mutation，不同在于：

* Action 提交的是 mutation，而不是直接变更状态。
* Action 可以包含任意异步操作。

## 如何定义

请参考```store/modules/menu```实现

## 如何使用

接下来我们会以`store/modules/menu`为例来示例说明

### 修改状态

1. 在组件中可以用 this.$store 获取

    ```typescript
    export default class Demo extends View {

        public setLayerOptions(){
            this.$store.dispatch("menu/add", {
                title:"日志管理",
                path:"system/log",
            });
        }
    ```

## 获取状态

一般只会在vue组件中获取该参数，示例如下：

    ```typescript
    export default class Demo extends View {

        public get logMenu(){
            this.$store.getters("menu/item")("system/log");
        }
    ```
