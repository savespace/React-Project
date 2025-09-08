import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { getListById, getColumnsByList } from '../../redux/store';

const List = () => {
  const { listId } = useParams();
  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));

  if (!listData) return <p>List not found</p>;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map(column => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
