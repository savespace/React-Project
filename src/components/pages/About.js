import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => (
  <div className={styles.container}>
    <PageTitle>About</PageTitle>
    <p>This is a simple To-do app built with React and Redux.</p>
  </div>
);

export default About;
