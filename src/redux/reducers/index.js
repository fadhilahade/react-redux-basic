import {combineReducers} from 'redux'
import Contacts from './contacts'
import ActiveContacts from './activeContact'

const rootReducer = combineReducers({
    contacts: Contacts,
    activeContact: ActiveContacts
})

export default rootReducer



