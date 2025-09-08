import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';
import styles from './ColumnForm.module.scss';

const ColumnForm = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title && icon) {
      dispatch(addColumn({ title, icon, listId }));
      setTitle('');
      setIcon('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Column title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Icon (np. book, film)"
        value={icon}
        onChange={e => setIcon(e.target.value)}
      />
      <button className={styles.addCardButton} type="submit">
        Add column
      </button>
    </form>
  );
};

export default ColumnForm;
