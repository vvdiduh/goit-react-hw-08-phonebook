import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <main className={styles.wrapperTitleHomePage}>
      <div className={styles.wrap}>
        <h2 className={styles.titleHomePage}>Welcome to PhoneBook App</h2>
        <p className={styles.text}>
          This app is created by using React. Technology stack: React.js, React
          Router Dom, Redux Toolkit, Redux Persist, Axios and other.
        </p>
      </div>
    </main>
  );
};
export default HomePage;
