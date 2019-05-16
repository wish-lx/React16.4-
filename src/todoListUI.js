import React from 'react'
import { Input, Button, List} from 'antd'
class TodoListUI extends React.Component{
    render(){
        return (
            <div style={{marginTop:'20px', marginLeft: '20px'}}>
               <Input value={this.props.inputValue} 
               placeholder="Basic usage" 
               style={{width: 300,marginRight: 20}}
               onChange={this.props.handleOnChange}
               />
               <Button type="primary" onClick={this.props.bClick}>提交</Button>
               <List
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => ( 
                    <List.Item onClick={(index)=>{this.props.delete(index)}}> {item}</List.Item>
                )}
                style={{width: 300}}/>
            </div>
        )
    }
}
export default TodoListUI