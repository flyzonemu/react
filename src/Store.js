//仓库--发出change事件

//Store==存储数据，执行修改数据的业务逻辑，发出change(emit)
import { EventEmitter } from "events";
//拷贝对象
import assign from "object-assign";
var Store = assign({}, EventEmitter.prototype, {
  Todos: [], //存储所有的数据
  addtodoitem(text) {
    //添加数据
    this.Todos.push(text);
  },
  removeTodoItem(text) {
    this.Todos.splice(text, 1);
  },
  changes() {
    //修改成功后发出change事件，类似于监听
    this.emit("change");
  },
  changelisten(callback) {
    this.on("change", callback);
  },
  getAll() {
    return this.Todos; //讲store里面的所有数据通过这个函数返回过来
  }
});
export default Store;
