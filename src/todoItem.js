import React from 'react'
import PropTypes from 'prop-types'
class TodoItem extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
		}
		shouldComponentUpdate(nextProps, nextState){
			if(nextProps.content !== this.props.content) {
				return true
			}else {
				return false
			}
		}
    render() {
				const {content} = this.props
        return <div onClick={this.handleClick}>{content}</div>
    }
    handleClick() {
        const {deleteItem,index} = this.props
        deleteItem(index)
        // this.props.deleteItem(this.props.index)
    }

}
TodoItem.propTypes = {
	// text: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}
// TodoItem.defaultProps = {
// 	text: 'hello'
// }
export default TodoItem 