import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Note.module.scss';
import NoteForm from './NoteForm';

const cx = classNames.bind(styles);

function NoteApp() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    const [isClick, setIsClick] = useState(false);
    const [currentTitle, setCurrentTile] = useState('');
    const [currentContent, setCurrentContent] = useState('');

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const handleAddBtn = () => {
        setIsClick(!isClick);
    };

    const handleSaveBtn = () => {
        console.log(currentTitle);
        
        if (currentTitle.trim()) {
            setNotes([...notes, currentTitle]);
            setCurrentTile('');
            setCurrentContent('');
            setIsClick(false);
        }
    };

    const handleDeleteBtn = () => {
        setNotes([]);
        setCurrentTile('');
        setCurrentContent('');
        setIsClick(false);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <button className={cx('add-btn')} onClick={handleAddBtn}>
                    {isClick ? 'Cancel' : '+Add note'}
                </button>
                <h1>Note Taking App</h1>
            </header>

            {isClick && (
                <NoteForm 
                    setCurrentTile={setCurrentTile}
                    setCurrentContent={setCurrentContent}
                    onSave={handleSaveBtn}
                    onDelete={handleDeleteBtn}
                />
            )}

            {!isClick && (
                <ul className={cx('list')}>
                    {notes.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NoteApp;
