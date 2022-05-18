import React from 'react';

const InputBox = () => {
    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-xl mt-3">
            <div class="card-body">
                <h2 class="mb-2 text-2xl text-center">Todo App!</h2>
                <input type="text" placeholder="Todo name" class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder="Description" class="input input-bordered input-accent w-full max-w-xs" />
                <div class="card-actions justify-center">
                    <button class="btn btn-accent text-white mt-4">ADD</button>
                </div>
            </div>
        </div>
    );
};

export default InputBox;