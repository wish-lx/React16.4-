import React, {Fragment} from 'react'
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
              <div className={this.state.show ? 'show' : 'hide'}>123</div>
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