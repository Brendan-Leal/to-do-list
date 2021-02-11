"use strict";
const Todo = require("./todo");

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
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
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

  findByTitle(title) {
    title = title.toLowerCase();
    return this.filter(todo => todo.getTitle().toLowerCase() === title).first();
  }

  allDone() {
    return this.filter(todo => todo.isDone());    
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }

  markDone(title) {
    this.forEach(todo => {
      if (todo.title === title) {
        todo.markDone();
      }
    });
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}


let list = new TodoList("home items");
list.add(new Todo("Wash car"));
list.toString();
module.exports = TodoList;





