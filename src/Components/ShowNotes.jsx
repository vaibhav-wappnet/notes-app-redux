import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as Actions from '../Store/Actions/index'

const ShowNotes = () => {

    const dispatch = useDispatch();
    const list = useSelector((state) => state.NoteReducers.list)
    const sortedList = list.sort((a, b) => a.id - b.id);
    // console.log("list",list);

    return (
        <>
            <div>
                {console.log(localStorage)}
                {list.length === 0
                    ?
                    <div className="mt-4">
                        <p>There is nothing in your Notes...</p>
                        <p>Add your notes from <strong>Add Note </strong>section.</p>
                    </div>
                    :
                    <div className="notes m-4 flex flex-col flex-wrap justify-center items-center sm:flex-row md:flex-row gap-5">
                        {
                            sortedList.map((item) => {
                                return (
                                    <div div key={item.id} className="box rounded-md  transition-all  bg-slate-200" >
                                        <div className="card-title py-2 uppercase font-bold">
                                            <h1>Note {item.id}</h1>
                                        </div>
                                        <div className="card-body px-5 py-3 text-md h-content w-64">
                                            <h1>{item.data}</h1>
                                        </div>
                                        <div className="footer p-2">
                                            <button
                                                onClick={() => dispatch(Actions.DeleteNote(item.id))}
                                                className="p-2 text-white font-semibold rounded-md bg-red-600 transition-all hover:shadow-xl">Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div >
        </>
    )
}

export default ShowNotes;