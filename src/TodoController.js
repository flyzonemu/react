import React from "react";
import Demo from "./Demo";
import Action from "./Action";
import Dispatch from "./Dispatch";
import Store from "./Store";
class TodoController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: Store.getAll()
    };
    this.changeitem = this.changeitem.bind(this);
  }

  addTodo(text) {
    // text==视图容器里面的数据
    Dispatch.dispatch(Action.addTodos(text)); //派发器通过dispatch方法来接受actions里面的add方法
  }
  removeTodo(i) {
    Dispatch.dispatch(Action.rmTodos(i));
  }
  changeitem() {
    //调用setState的方法
    this.setState({ list: Store.getAll() });
  }
  componentDidMount() {
    Store.changelisten(this.changeitem);
  }

  render() {
    return (
      <div>
        <h1>顶层容器</h1>
        <Demo
          name={this.addTodo}
          list={this.state.list}
          remove={this.removeTodo}
        />
      </div>
    );
  }
}

export default TodoController;
