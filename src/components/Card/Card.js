import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveClick = () => {
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      <span>{title}</span>
      <div>
        <button
          className={clsx(styles.favoriteButton, { [styles.active]: isFavorite })}
          onClick={handleFavoriteClick}
        >
          ★
        </button>
        <button className={styles.deleteButton} onClick={handleRemoveClick}>
          🗑
        </button>
      </div>
    </li>
  );
};

export default Card;
