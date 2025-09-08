import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title && description) {
      dispatch(addList({ title, description }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="List title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className={styles.addListButton} type="submit">
        Add list
      </button>
    </form>
  );
};

export default ListForm;
