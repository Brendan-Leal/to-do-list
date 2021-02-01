// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}
// =======================================================================================

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(toDoObj) {
    if (toDoObj instanceof Todo) {
      this.todos.push(toDoObj)
    } else {
      let error = new TypeError("can only add ToDo objects");
      throw error;
    }
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.todos.length - 1];
  }

  itemAt(index) {
    if (!this.todos[index]) {
      throw new ReferenceError(`invalid index: ${index}`);
    }

    return this.todos[index];
  }

  markDoneAt(index) {

    this.itemAt(index).markDone()
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone()
  }

  isDone() {
    return this.todos.every(todo => todo.done === true);
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    if (this.itemAt(index)) {
      return this.todos.splice(index, 1)[0];
    }
  }

  toString() {
    console.log(`---- ${this.title} ----`);
    this.todos.forEach(todo => console.log(todo.toString()));
  }
}



