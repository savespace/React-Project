import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === '' || icon.trim() === '') return;
    dispatch(addColumn({ title, icon }));
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
