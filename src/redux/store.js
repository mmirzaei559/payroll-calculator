import { createStore } from 'redux'
import {formReducer} from './reducer'
export const store = createStore(formReducer)