//active----动作层

var Action = {
  addTodos(text) {
    return {
      actionType: "ADD_TODO",
      text: text
    };
  },
  rmTodos(text) {
    return {
      actionType: "RM_TODO",
      text: text
    };
  }
};

export default Action;
