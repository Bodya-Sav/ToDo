import { useState } from 'react';

import Top from './form/Top'; 
import Middle from './form/Middle';
import Bottom from './form/Bottom';

import './index.css';

export default function ToDo() {
    const [todos, setTodos] = useState([]);
    const [node, setNode] = useState('');
    const [isAllChecked, setIsAllChecked] = useState(false); // Состояние для отслеживания состояния всех задач
    const [showCheckedOnly, setShowCheckedOnly] = useState(false); // Новое состояние для отображения только выполненных задач

    const addTodo = () => {
        if (node.trim() !== "") {
            setTodos([...todos, { text: node, isDone: false }]); // Добавляем объект задачи
            setNode("");
        }
    };

    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    const toggleTodoDone = (indexToToggle) => {
        setTodos(todos.map((todo, index) =>     
            index === indexToToggle ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    const countDone = todos.filter(todo => todo.isDone).length;
    const countExist = todos.length - countDone;

    // Логика для кнопки Check All
    const toggleCheckAll = () => {
        const allChecked = todos.every(todo => todo.isDone); // Проверка: все ли задачи выполнены
        const newTodos = todos.map(todo => ({ ...todo, isDone: !allChecked })); // Если все выполнены, снимаем отметки, иначе отмечаем все
        setTodos(newTodos);
        setIsAllChecked(!allChecked); // Обновляем состояние для кнопки
    };

    // Для кнопки Show Checked
    const toggleShowChecked = () => {
        setShowCheckedOnly(!showCheckedOnly); // Меняем состояние
    };



    return (
        <div className="todo">
            <Top node={node} setNode={setNode} addTodo={addTodo} isAllChecked={isAllChecked} toggleCheckAll={toggleCheckAll} toggleShowChecked={toggleShowChecked} showCheckedOnly={showCheckedOnly}/>
            <Middle todos={todos} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone} showCheckedOnly={showCheckedOnly}/>
            <Bottom countDone={countDone} countExist={countExist}/>
        </div>
    );
}
