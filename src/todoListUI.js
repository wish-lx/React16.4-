import React from 'react'
import { Input, Button, List} from 'antd'
// 无状态组件（如果一个组件里面只有一个render函数，则可以用无状态组件进行代替）
const TodoListUI = (props) => {
    return (
        <div style={{marginTop:'20px', marginLeft: '20px'}}>
        <Input value={props.inputValue} 
        placeholder="Basic usage" 
        style={{width: 300,marginRight: 20}}
        onChange={props.handleOnChange}
        />
        <Button type="primary" onClick={props.bClick}>提交</Button>
        <List
         bordered
         dataSource={props.list}
         renderItem={(item, index) => ( 
             <List.Item onClick={()=>{props.delete(index)}}> {item}</List.Item>
         )}
         style={{width: 300}}/>
     </div>
    )
}
// class TodoListUI extends React.Component{
//     render(){
//         return (
            
//         )
//     }
// }
export default TodoListUI