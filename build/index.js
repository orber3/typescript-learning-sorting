"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbers = new NumbersCollection([20 , 3 , 4, 0 , -1])
// numbers.sort()
// console.log("numbers" + numbers.data)
// const strings= new charCollection('ewwqeqw32')
// strings.sort()
// console.log(strings.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(555);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(33);
linkedList.sort();
linkedList.print();
