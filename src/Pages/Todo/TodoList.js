import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import Flip from 'react-reveal/Flip';

const TodoList = ({ toDoLists, isLoading, refetch }) => {
    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        const deleteData = window.confirm("Are you want delete the item?");
        if (deleteData) {
            fetch(`https://nameless-hollows-03971.herokuapp.com/todolist/${id}`, {
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

    const handleClick = (id) => {
        document.getElementById(`${id}`).style.textDecoration = "line-through";
        toast.success("Completed")
    }


    return (
        <div className='w-2/4 min-h-fit mx-auto mt-4'>
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
                                <Flip bottom>
                                    <tr id={todo._id}>
                                        <div className='absolute'><th className='z-20'>{index + 1}</th></div>
                                        <td>{todo.todoName}</td>
                                        <td>{todo.toDoDescription}</td>
                                        <div className='absolute'>
                                            <td><button
                                                onClick={() => handleDelete(todo._id)}
                                                class="btn btn-sm btn-error text-white">Delete</button>
                                            </td>
                                            <td className='relative z-20'>
                                                <button onClick={() => handleClick(todo._id)} class="btn btn-sm btn-accent text-white">Complete</button>
                                            </td>
                                        </div>
                                    </tr>
                                </Flip>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;