import styles from './Terms.module.css';

export function Terms({ subtitle, content }) {
    return (
        <section className={styles.term_container}>
            <h4 className={styles.subtitle}>{subtitle}</h4>
            <p className={styles.content}>{content}</p>
        </section>
    );
}