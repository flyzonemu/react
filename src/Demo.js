//view---用来进行数据展示
import React from "react";
class Demo extends React.Component {
  add() {
    this.props.name(this.refs.ipt.value);
    console.error("add:" + this.refs.ipt.value);
    this.refs.ipt.value = ""; //点击add把输入框里面的值传给顶层容器，并清空输入框
  }
  del(i) {
    console.error("delete:" + i);
    this.props.remove(i); //点击删除删除这一个
  }
  render() {
    var _this = this;
    return (
      <div>
        <h1>TodeList</h1>
        <input type="tezt" ref="ipt" />
        <button onClick={_this.add.bind(this)}>点击</button>
        {this.props.list.map((item, i) => {
          return (
            <div key={i}>
              {item}---<button onClick={_this.del.bind(_this, i)}>删除</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Demo;
