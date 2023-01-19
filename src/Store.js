import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './Ducks/CounterSlice'
import todoReducer from './Ducks/TodoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
}
})