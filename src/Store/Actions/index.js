
export const AddNote = (data, id) => {
    return {
        type: "ADD_NOTE",
        payload: {
            id: id,
            data: data
        }
    }
}


export const DeleteNote = (id) => {
    return {
        type: "DELETE_NOTE",
        payload: {
            id: id,
        }
    }
}
export const DeleteAllNote = (id) => {
    return {
        type: "DELETE_ALL_NOTE",
        payload: {
            id: id
        }
    }
}
