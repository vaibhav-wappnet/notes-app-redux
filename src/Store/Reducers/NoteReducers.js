const initialData = {
    list: [],
}

const NoteReducers = (state = initialData, action) => {

    const { id, data } = action.payload || {};

    console.log("id",id)
    console.log("data",data)

    // console.log(list);
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

        case "DELETE_ALL_NOTE":
            const deletedAll = localStorage.clear()
            return {
                list: deletedAll
            }
        default: return state;
    }
}

export default NoteReducers;