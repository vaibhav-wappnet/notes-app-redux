
export const AddNote = (data, id) => {

    // const usedIds = new Set();

    // function generateUniqueId() {
    //   while (usedIds.has(noteId)) {
    //     ++noteId;
    //   }
    //   usedIds.add(noteId);
    //   return noteId++;
    // }
    // console.log(`new id : ${noteId}`);
    // generateUniqueId();

    // console.log(`noteId before adding : ${noteId}`);
    // console.log(`noteId after Adding : ${noteId}`)
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
