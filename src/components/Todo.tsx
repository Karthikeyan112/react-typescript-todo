import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { PayloadI } from '../store/actions/todoActionTypes';
import { editTodo, removeTodo, updateTodo } from '../store/actions/todoActions';

const Todo = ({ item }: { item: PayloadI }) => {
  const [itemName, setItemName] = useState(item.name);

  const dispatch = useDispatch();

  const removeItem = (id: string) => {
    dispatch(removeTodo(id));
  }

  const updateItem = (item: PayloadI) => {
    dispatch(updateTodo({ ...item, isEditable: false, name: itemName }))
  }

  const changeEdit = (id: string) => {
    dispatch(editTodo(id));
  }

  return (
    <div className='todos__item'>
      {item.isEditable ? <input type='text' value={itemName} onChange={(e) => setItemName(e.target.value)} /> : <p onDoubleClick={() => changeEdit(item.id)}>{item.name}</p>}
      {!item.isEditable ? <button className="todos__btn" onClick={() => removeItem(item.id)}>Delete</button> :
        <button className="todos__btn" onClick={() => updateItem(item)}>Update</button>}
    </div>
  )
}

export default Todo;

// (function() {
//   var a = b = 20;
// })()

// //console.log(a);
// console.log(b);

// let a = 20;

// function fn() {
//   console.log(a);
//   let a = 10;
// }

// fn();

// function fn(x) {
//   let sum = 7;

//   return function(function sum) {
//     return sum+a;
//   }
// }

// const retFn = fn();

// console.log(retFn(3))

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(((x) => {
//     return function() {
//     console.log('Index: ' + x + ', element: ' + arr[x]);
//     }
//   })(i), 0);
// }

// console.log(sum(4,5));
// console.log(sum(4)(5));

// function sum(a,b) {
//  if(b) {
//    return a + b;
//  }
//  return function(x) {
//    return a + x;
//  }
// }


// const val = sum(1,2).value;

// console.log(+sum(1,2));

// somenetwork issue.

// joining in 5 mins

// What is your mobile number ? 9715836160

// console.log(isPalindrome("Level"));                   // logs 'true'
// console.log(isPalindrome("levels"));                  // logs 'false'
// console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'

// function isPalindrome(str) {
//   const newStr = str.toLowerCase();
//   const halfLen = Math.floor(newStr.length/2);
//   let retVal = true;
//   for(let i = 0; i <=halfLen; i++) {
//     if(newStr[i] !== newStr[newStr.length-1-i]){
//       retVal = false;
//       break;
//     }
//   }

//   return retVal;
// }

// setState({
//   emp : ''
// })







