const initState = {
    themeId: 1,
}


type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}


export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            let newState = {...state}
            newState.themeId = Number(action.id)
            return newState
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
