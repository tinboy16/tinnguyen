import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CodeEditor from "@site/src/components/CodeEditor";


import styles from './index.module.css';


const code = `def foo():
    print("How much foo")
    print("would a foo bar bar")
    print("if a foo bar could bar foo?")
    
    
def bar():
    print("A foo bar would bar")
    print("as much foo as a foo bar could bar")
    print("if a foo bar could bar foo.")
    

foo()
print()
bar()
`


export default function Home() {
    return (
        <Layout title="Tín Nguyễn">
            <main>
                <div className={styles.heroContainer}>
                    <h1> Tài liệu của Tín Nguyễn ⏱️</h1>
                    <Link className={"button button--primary"} href={"docs/intro"}>Xem tài liệu</Link>
                    <div className={styles.codeEditorWrapper}>
                        <CodeEditor code={code} showButtons/>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
