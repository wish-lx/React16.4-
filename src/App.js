import React, {Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css'
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list: []
        } 
        this.toggleClick = this.toggleClick.bind(this)
    }
    render(){
        return(
        <Fragment>
            <TransitionGroup>
            {
                this.state.list.map((item, index)=> {
                    return(
                        <CSSTransition
                        timeout={1000}
                        classNames="fade"
                        onEntered={(el)=>{el.style.color = 'red'}}
                        appear={true}
                        key={index}
                        > 
                         <div >{item}</div>
                     </CSSTransition>
                    ) 
                })
            }
            </TransitionGroup>
            <button onClick={this.toggleClick}>toggle</button>
        </Fragment>
        )
    }
    toggleClick(){
        this.setState((preState)=>{
            return{
                list: [...preState.list, 'item']
            }
        })
    }
}
export default App