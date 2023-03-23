const initialData = {
    list: [],
    nextNoteId: 1
}

const NoteReducers = (state = initialData, action) => {

    const { id, data } = action.payload || {};

    console.log("list: ", state.list);

    switch (action.type) {
        case "ADD_NOTE":
            const newNote = { id: state.nextNoteId + 1, ...action.payload };
            const existingItem = state.list.find(item => item.id === newNote.id);
            if (existingItem) {
                let newId = state.nextNoteId + 1;
                while (state.list.some(item => item.id === newId)) {
                    newId++
                }
                newNote.id = newId;
            }
            return {
                ...state,
                list: [
                    ...state.list,
                    newNote
                ]
            }
        case "DELETE_NOTE":

            const newList = state.list.filter((item) => item.id !== id)
            console.log(newList);
            return {
                ...state,
                list: newList
            }

        case "DELETE_ALL_NOTE":
            return {
                ...state,
                list: []
            }
        default: return state;
    }
}

export default NoteReducers;