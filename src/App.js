import React, {Fragment} from 'react'
import { CSSTransition } from 'react-transition-group';
import './styles.css'
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            show: true
        } 
        this.toggleClick = this.toggleClick.bind(this)
    }
    render(){
        return(
        <Fragment>
            <CSSTransition
            in={this.state.show}
            timeout={1000}
            classNames="fade"
            onEntered={(el)=>{el.style.color = 'red'}}
            appear={true}
            >
              <div>123</div>
            </CSSTransition>
              <button onClick={this.toggleClick}>toggle</button>
        </Fragment>
        )
    }
    toggleClick(){
        this.setState({
           show: this.state.show ? false : true
        })
    }
}
export default App