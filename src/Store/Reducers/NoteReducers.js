const initialData = {
    list: [],
}

const NoteReducers = (state = initialData, action) => {

    const { id, data } = action.payload || [];

    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_NOTE":

            const newList = state.list.filter((item) => item.id !== id)
            console.log(newList);
            return {
                ...state,
                list: newList
            }
        default: return state;
    }
}

export default NoteReducers;