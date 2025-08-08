import classNames from 'classnames/bind';
import styles from './Note.module.scss';

const cx = classNames.bind(styles);

function NoteForm({ setCurrentTile, setCurrentContent, onSave, onDelete }) {

    const handleInput = (e) => {
        setCurrentTile(e.target.value);
    };

    const handleArea = (e) => {
        setCurrentContent(e.target.value);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('btn-group')}>
                <button className={cx('save-btn')} onClick={onSave}>
                    Save
                </button>
                <button className={cx('delete-btn')} onClick={onDelete}>
                    Delete
                </button>
            </div>

            <input type="text" className={cx('title')} placeholder="Title" onChange={handleInput} />

            <textarea type="text" className={cx('content')} placeholder="Content" onChange={handleArea}></textarea>
        </div>
    );
}

export default NoteForm;
