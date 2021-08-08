import Header from '../src/Components/Header';
import styles from '../styles/Home.module.css';
export default () => (
  <>
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>About Page</h1>
      </main>
    </div>
  </>
);
