import { useState } from 'react';
import '../index.css';

export default function OneNode({ text, isDone, deleteTodo, toggleTodoDone }) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentText, setCurrentText] = useState(text);

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        toggleEditMode();
    };

    return (
        <div className="onenode">
            {isEditing ? (
                <input type="text" value={currentText} onChange={(e) => setCurrentText(e.target.value)} />
            ) : (
                <span className={isDone ? 'strikethrough' : ''}>{currentText}</span>
            )}
            <input type="checkbox" checked={isDone} onChange={toggleTodoDone} />
            <button className="but" onClick={isEditing ? handleSave : toggleEditMode}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button className="but" onClick={deleteTodo}>Delete</button>
        </div>
    );
}
