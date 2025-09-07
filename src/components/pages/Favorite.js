import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => (
  <div className={styles.container}>
    <PageTitle>Favorite</PageTitle>
    <p>Here you will find your favorite cards in the future.</p>
  </div>
);

export default Favorite;
