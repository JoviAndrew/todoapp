const initialState = {
  globalTask: [{
    taskid: '1',
    taskname: 'Swimming',
    taskdesc: `Swimming at dicky's`,
    taskdone: '123'
  }]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      return state.globalTask.push(action.payload)
    }
    default:
      return state
  }
}
