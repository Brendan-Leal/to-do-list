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

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }
 
  isDone() {
    return this.done;
  }
   
  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
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

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(callback) {
    let filteredList = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) filteredList.add(todo);
    });

    return filteredList;
  }
}


let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1)
list.add(todo2)
list.add(todo3)
list.add(todo4)
list.add(todo5)
list.add(todo6)
todo1.markDone();
todo5.markDone();





