import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";

import * as Actions from "../Store/Actions/index"

const AddNote = () => {

	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	// const [count, setCount] = useState(0);
	// useEffect(() => {
	// 	const clickHandler = () => {
	// 		setCount(count + 1)
	// 	}
	// }, [count])

	// let noteId = 0;
	// console.log("dddd", noteId)

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
								dispatch(Actions.AddNote(input), setInput(''))
							// console.log(localStorage);
						}}
						className="p-2 m-2 capitalize text-white font-semibold rounded-md bg-blue-600 transition-all hover:shadow-xl">
						add note
					</button>
					<button
						// onClick={() => {
						// 	localStorage === null
						// 	?
						// 	alert("List Already Empty kya hi delete karoge bhai")
						// 	:
						// 	localStorage.clear()
						// 	console.log(localStorage);
						// }}
						className="del-all p-2 capitalize text-white font-semibold rounded-md bg-red-600 transition-all hover:shadow-xl">
						delete all notes
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddNote;