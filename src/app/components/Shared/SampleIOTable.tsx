import styles from './SampleIOTable.module.css'

interface SampleIOTableProps {
    input: string[];
    output: string[];
}

const SampleIOTable = ({
    input,
    output
}: SampleIOTableProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <p className={styles.title}>Input</p>
                <pre>
                    {input.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </pre>
            </div>
            <div className={styles.table}>
                <p className={styles.title}>Output</p>
                <pre>
                    {output.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </pre>
            </div>
        </div>
    )
}

export default SampleIOTable