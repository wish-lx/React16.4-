const defaultState={
    inputValue: '',
    list: []
}
export default (state = defaultState, action)=> {
    // 接收state，action
    // console.log(state, action)
    if(action.type === 'type-input-value') { 
        // 对原始数据进行深拷贝，并且将传入的 action 的值赋值，并return给组件
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'add-item') { 
        // 对原始数据进行深拷贝，并且将传入的 action 的值赋值，并return给组件
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'delete-item') { 
        // 对原始数据进行深拷贝，并且将传入的 action 的值赋值，并return给组件
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}