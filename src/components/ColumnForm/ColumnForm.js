import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title, icon });
        setTitle('');
        setIcon('');
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
        <label>
            <span className={styles.labelText}>Title:</span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        </label>

        <label>
            <span className={styles.labelText}>Icon:</span>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
        </label>

        <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
