import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../Store/Actions/index"

const AddNote = () => {

	// console.log(localStorage);
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const list = useSelector((state) => state.NoteReducers.list)

	const [count, setCount] = useState(0);
	return (
		<div>
			<header className="my-3 text-2xl font-semibold">
				<h1>Notes App</h1>
			</header>
			<div className="flex-col flex justify-start items-center">
				<div className="form-container">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Add your Notes here..."
						className="py-2 px-5 m-2 border-2 rounded-md focus:outline-none focus:drop-shadow-xl"
					/>
					<button
						onClick={() => {
							input === ''
								?
								alert("Enter something to add it to Notes")
								:
								dispatch(Actions.AddNote(input, count + 1), setInput(''), setCount(0))
							// console.log(localStorage);
						}}
						className="p-2 m-2 capitalize text-white font-semibold rounded-md bg-blue-600 transition-all hover:shadow-xl">
						add note
					</button>
					<button
						onClick={() => {
							list.length === 0
								?
								alert("List Already Empty kya hi delete karoge bhai")
								:
								dispatch(Actions.DeleteAllNote(list), localStorage.clear())
						}}
						className="del-all p-2 capitalize text-white font-semibold rounded-md bg-red-600 transition-all hover:shadow-xl">
						delete all notes
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddNote;