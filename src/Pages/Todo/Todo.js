import React from 'react';
import { useQuery } from 'react-query';
import InputBox from './InputBox';
import TodoList from './TodoList';

const Todo = () => {
    const url = `https://nameless-hollows-03971.herokuapp.com/todolist`
    const { data: toDoLists, isLoading, refetch } = useQuery("data", () => fetch(url).then(res => res.json()));

    return (
        <div>
            <InputBox
                refetch={refetch}
            ></InputBox>
            <TodoList
                toDoLists={toDoLists}
                isLoading={isLoading}
                refetch={refetch}
            ></TodoList>
        </div>
    );
};

export default Todo;