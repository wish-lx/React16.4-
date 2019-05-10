import React from 'react'
import PropTypes from 'prop-types'
class TodoItem extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
				const {content} = this.props
				const {text} = this.props
        return <div onClick={this.handleClick}>{text}-{content}</div>
    }
    handleClick() {
        const {deleteItem,index} = this.props
        deleteItem(index)
        // this.props.deleteItem(this.props.index)
    }

}
TodoItem.propTypes = {
	text: PropTypes.string.isRequired,
	content: PropTypes.string,
	deleteItem: PropTypes.func,
	index: PropTypes.number
}
TodoItem.defaultProps = {
	text: 'hello'
}
export default TodoItem 