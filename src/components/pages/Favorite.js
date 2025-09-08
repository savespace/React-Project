import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getAllCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector(getAllCards).filter(card => card.isFavorite);

  if (!cards.length) return <Navigate to="/" />;

  return (
    <section className={styles.columns}>
      <article className={styles.column}>
        <h2 className={styles.title}>Favorite</h2>
        <ul className={styles.cards}>
          {cards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Favorite;
