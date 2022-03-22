import toast from 'react-hot-toast';

const initialState = {
    show: false,
    message: '',
    type: ''
};

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case "_ERROR":
            let message = ''
            if (action.show && action.response) {
                message = `${action.response.status}: ${action.response.data.message}`
            } else if (action.show) {
                message = 'Opps...! Something wrong.'
            } else {
                message = ''
            }

            return toast.error(message);
        case "_NOTIFICATION":
            return toast.success(action.message)
        default:
            return state;
    }
}