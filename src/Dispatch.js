//派发器---事件调度中心----接受action    命令store修改

import { Dispatcher } from "flux";
import Store from "./Store";
//实例化派发器对象

var Dispatch = new Dispatcher();

Dispatch.register(action => {
  //判断一下action的类型
  switch (action.actionType) {
    case "ADD_TODO":
      //命令store添加数据---action.text---store-change
      Store.addtodoitem(action.text); //添加数据
      Store.changes(); //发出change事件
      break;
    case "RM_TODO":
      Store.removeTodoItem(action.text);
      Store.changes();
      break;
  }
});

export default Dispatch;
