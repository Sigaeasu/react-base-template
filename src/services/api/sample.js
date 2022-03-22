/* eslint-disable import/no-anonymous-default-export */
import methods from '../methods'

// const END_POINT = 'api'

const coffee = () => methods.GET_API(`coffee/hot`)

export default {
    coffee
}