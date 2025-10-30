import styles from './index.module.css';

const contributors = [
    {
        name: 'erenkarakal',
        icon: 'erenkarakal.png',
        title: 'Lead Developer'
    },
    {
        name: 'Kakadu',
        icon: 'kakadu.png',
        title: 'Developer'
    },
    {
        name: 'cgytrus',
        icon: 'cgytrus.png',
        title: 'Contributor'
    }
]

export default function Contributors() {
    return (
        <section className={['center', styles.section].join(' ')}>
            <h1 className={['center', styles.tagline].join(' ')}>Built by the community, for the community</h1>
            <div className={styles.members}>
            {contributors.map((props, idx) => (
                <Contributor key={idx} {...props} />
            ))}
            </div>
        </section>
    );
}

function Contributor({ name, icon, title }) {
    return (
        <div className={ styles.contributor }>
            <img src={`./img/contributors/${icon}`} />
            <p className={styles.name}>{ name }</p>
            <p className={styles.title}>{ title }</p>
        </div>
    )
}
