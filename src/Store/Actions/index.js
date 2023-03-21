let noteId = 0;
export const AddNote = (data) => {
    // console.log(`noteId before adding : ${noteId}`);
    // console.log(`noteId after Adding : ${noteId}`)
    return {
        type: "ADD_NOTE",
        payload: {
            id: ++noteId,
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
export const DeleteAllNote = () => {
    return {
        type: "DELETE_ALL_NOTE",
    }
}
