import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Cars App</h1>
        </header>
    );
};

export {Header};