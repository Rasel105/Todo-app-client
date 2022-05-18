import React, { useRef } from 'react';

const InputBox = () => {
    const name = useRef();
    const description = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const todoName = name.current.value;
        const toDoDescription = description.current.value;

        fetch('http://localhost:8000/todolist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ todoName, toDoDescription }),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                e.target.reset();
            })
    }

    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-lg mt-3">
            <div class="card-body">
                <h2 class="mb-2 text-2xl text-center">Todo App!</h2>
                <form onSubmit={handleSubmit}>
                    <input ref={name} type="text" placeholder="Todo name" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                    <input ref={description} type="text" placeholder="Description" class="input input-bordered input-accent w-full max-w-xs " />
                    <div class="card-actions justify-center">
                        <button class="btn btn-accent text-white mt-4">ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InputBox;