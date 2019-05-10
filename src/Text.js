import React from 'react'
class Text extends React.Component{
    // 当父组件的render函数渲染之后，所有的子组件的render函数都会被重新渲染
    render(){
        console.log('text-render')
        return(
            <div>{this.props.content}</div>
        )
    }
}
export default Text