import API_URL from '../../services'

const fetchCoffee = () => {
    return async (dispatch) => {
        dispatch({ type: "_LOADING_COFFEE", payload: true })
        try {
            const res = await API_URL.sample.coffee()
            dispatch({ type: "_COFFEE", payload: res })
            dispatch({ type: "_LOADING_COFFEE", payload: false })
        } catch (error) {
            dispatch({ type: "_ERROR", show: true, response: error.response })
            dispatch({ type: "_LOADING_COFFEE", payload: false })
        }
    }
};

export {
    fetchCoffee
}