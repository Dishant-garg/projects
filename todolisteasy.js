class Todo {
  constructor() {
    this.data = [];
  }
  add(todo) {
    this.data.push(todo);
  }
  remove(indexOfTodo) {
    this.data.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (this.data.length - 1 < index) {
      return;
    } else {
      this.data.splice(index, 1, updatedTodo);
    }
  }
  getAll() {
    return this.data;
  }
  get(indexOfTodo) {
    if (indexOfTodo > this.data.length - 1) {
      return null;
    } else {
      return this.data[indexOfTodo];
    }
  }
  clear() {
    this.data = [];
  }
}
