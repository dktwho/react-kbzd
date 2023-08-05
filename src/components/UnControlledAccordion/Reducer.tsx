const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

export type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state, collapsed: !state.collapsed};
        default:
            return state
    }
}