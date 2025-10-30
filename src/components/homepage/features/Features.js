import styles from './index.module.css';

const features = [
    {
        title: "Asset Injection",
        description: "Replace in-game assets like textures, sounds, shaders, and more with a simple drag and drop.",
    },
    {
        title: "Custom Events",
        description: "Code your own events and notes into the game and use them in your levels.",
    },
    {
        title: "Mod Menu",
        description: "Toggle and configure your mods with the Beatblock Plus in-game mod menu.",
    },
    {
        title: "Custom Languages",
        description: "Easily create translations for the game with a single file.",
    },
    {
        title: "Debug Console",
        description: "Use the debug console for quickly debugging your code.",
    },
]

export default function Features() {
    return (
        <section className={['center', styles.section].join(' ')}>
            <h1 className={['center', styles.tagline].join(' ')}>The complete toolkit for Beatblock mod development</h1>
            <div className={styles.features}>
            {features.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
            </div>
        </section>
    );
}

function Feature({ title, description }) {
    return (
        <div className={styles.feature}>
            <p className={styles.title}>{ title }</p>
            <p className={styles.description}>{ description }</p>
        </div>
    )
}
