import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const TodoList = ({ toDoLists, isLoading, refetch }) => {

    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        const deleteData = window.confirm("Are you want delete the item?");
        if (deleteData) {
            fetch(`http://localhost:8000/todolist/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success(`Item Deleted Successfully`)
                    refetch();
                })
        }
    }

    return (
        <div className='w-2/4 mx-auto mt-4'>
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
                                    <td><button
                                        onClick={() => handleDelete(todo._id)}
                                        class="btn btn-sm btn-error text-white">Delete</button></td>
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