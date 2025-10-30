import styles from './index.module.css';

export default function Hero() {
  return (
    <section className={styles.fullscreensection}>
      <div className={styles.center}>
        <img className={styles.icon}
          src='/img/bbp.png'
          width={72 * 4}
          height={72 * 4}
        />
        <h1 className={styles.title}>Beatblock Plus</h1>
        <p className={styles.subtitle}>Unofficial Mod Loader for Beatblock</p>

        <a href="https://dps2004.github.io/freebeatblock/"
          className={[styles.button, styles.docs].join(' ')}
        >Documentation</a>

        <a href="https://github.com/BeatblockTools/BeatblockPlus/releases/latest"
          target='blank'
          className={[styles.button, styles.download].join(' ')}
        >Download</a>
      </div>
    </section>
  );
}
