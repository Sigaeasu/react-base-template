const initialState = {
    isLoading: false,
    coffee: [],
  };
    
  export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
      case "_COFFEE":
        return {
          ...state,
          coffee: action.payload,
        };
      case "_LOADING_COFFEE":
        return {
          ...state,
          isLoading: action.payload
        };
      default:
        return state;
    }
  }