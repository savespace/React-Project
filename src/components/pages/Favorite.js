import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getAllCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const cards = useSelector(getAllCards).filter(card => card.isFavorite);

  if (!cards.length) return <Navigate to="/" />;

  return (
    <section className={styles.columns}>
      <h1 className={styles.heading}>Favorite</h1>
      <article className={styles.column}>
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
