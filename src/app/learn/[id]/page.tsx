"use client"
import IDE from '../../components/Editor/IDE';
import ProblemHeader from '../../components/Header/ProblemHeader';
import SampleIOTable from '../../components/Shared/SampleIOTable';
import styles from './page.module.css'
import Split from 'react-split'
function editorPage() {
    return (
        <>
            <div className={styles.header}>
                <ProblemHeader />
            </div>
            <Split 
            className={styles.container}
            sizes={[50, 50]}
            minSize={100}
            expandToMin={false}
            gutterSize={5}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            color='#000000'
            >
                <div className={styles.problem} >
                    <div className={styles.block}>
                        <p className={styles.description}>
                            Chef and Chefina are playing with dice. In one turn, both of them roll their dice at once.They consider a turn to be good if the sum of the numbers on their dice is greater than 6. Given that in a particular turn Chef and Chefina got X and Y on their respective dice, find whether the turn was good.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.title}>Input Format</p>
                        <p className={styles.description}>
                            The first line of input will contain a single integer T, denoting the number of test cases.Each test case contains two space-separated integers X and Y — the numbers Chef and Chefina got on their respective dice.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.title}>Output Format</p>
                        <p className={styles.description}>
                            For each test case, output on a new line, YES, if the turn was good and NO otherwise.Each character of the output may be printed in either uppercase or lowercase. That is, the strings NO, no, nO, and No will be treated as equivalent.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.title}>Sample 1</p>
                        <SampleIOTable
                            input={[
                                '4',
                                '1 4',
                                '3 4',
                                '4 2',
                                '2 6'
                            ]}
                            output={[
                                'NO',
                                'YES',
                                'NO',
                                'YES'
                            ]}
                        />
                    </div>
                </div>
                <div className={styles.editor}>
                    <IDE />
                </div>
            </Split>
        </>
    )
}

export default editorPage