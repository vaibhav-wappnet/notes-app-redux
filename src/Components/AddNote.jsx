import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import * as Actions from "../Store/Actions/index"

const AddNote = () => {

	const [input, setInput] = useState('');
	const dispatch = useDispatch();

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
						}}
						className="p-2 m-2 text-white font-semibold rounded-md bg-blue-600 transition-all hover:shadow-xl">Add Note</button>
				</div>
			</div>
		</div>
	)
}

export default AddNote;