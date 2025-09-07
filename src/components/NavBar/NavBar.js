import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => (
  <nav className={styles.navbar}>
    <Container>
      <div className={styles.navbarInner}>
        <NavLink to="/" className={styles.logo}>
          <i className="fa fa-tasks"></i>
        </NavLink>
        <ul className={styles.menu}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/favorite">Favorite</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </Container>
  </nav>
);

export default NavBar;
