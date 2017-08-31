import { combineReducers } from 'redux';
import LibraryReducer from './libraryReducer';
import SelectionReducer from './selectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});