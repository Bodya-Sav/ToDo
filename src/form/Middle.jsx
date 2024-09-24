import '../index.css';
import OneNode from './OneNode';

export default function Middle({ todos, deleteTodo, toggleTodoDone, showCheckedOnly }) {
    return (
        <div className="middle">
            <div className="first">
                {todos
                        .filter(todo => !showCheckedOnly || todo.isDone) // Если режим показа включён, показываем только выполненные
                        .map((todo, index) =>
                            <OneNode key={index} text={todo.text} isDone={todo.isDone} deleteTodo={() => deleteTodo(index)} toggleTodoDone={() => toggleTodoDone(index)}/>
                        ) 
                    }
            </div>
        </div>
    );
}

