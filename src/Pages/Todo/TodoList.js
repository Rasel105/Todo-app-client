import Loading from '../Shared/Loading';

const TodoList = ({ toDoLists, isLoading }) => {

    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/todolist/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return (
        <div className='w-2/4 mx-auto'>
            <h2>{toDoLists.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toDoLists.map((todo, index) =>
                                <tr key={todo._id}>
                                    <th>{index + 1}</th>
                                    <td>{todo.todoName}</td>
                                    <td>{todo.toDoDescription}</td>
                                    <td><button onClick={() => handleDelete(todo._id)} class="btn btn-sm btn-error text-white">Delete</button></td>
                                    <td><button class="btn btn-sm btn-accent text-white">Complete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;