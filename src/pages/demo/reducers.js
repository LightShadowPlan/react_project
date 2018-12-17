export function count (state = 1, action){
    switch (action.type) {
        case 'INCREASE' :
            return state + action.count
        case 'DECREASE' :
            return state - action.count
        case 'MULTIPLY' :
            return state * action.count
        case 'EXCEPT' :
            return parseInt(state / action.count)
        case 'RANDOM' :
            return state + parseInt(Math.random()*10)
        case 'DOUBLE' :
            return state * 2
        default :
            return state
    }
}
export function other (state = 1, action){
    switch (action.type) {
        default :
            return state
    }
}


