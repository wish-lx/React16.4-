import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList';


// ReactDOM将组件挂载到页面的某个节点下
/* <App/> -->    JSX语法 */
// 所有标签都为JSX语法 ，所以必须引入React
// JSX语法中，如果我们要使用自己创建的组件，首字母必须大写
ReactDOM.render(<TodoList />, document.getElementById('root'));


