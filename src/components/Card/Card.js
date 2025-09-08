import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      <span>{title}</span>
      <button
        className={clsx(styles.favoriteButton, { [styles.active]: isFavorite })}
        onClick={handleFavoriteClick}
      >
        ★
      </button>
    </li>
  );
};

export default Card;
