import Head from 'next/head'
import Link from 'next/link'
import LayoutBkp from '../../components/layoutbkp.js'

export default function FirstPost() {
    return (
        <LayoutBkp>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </LayoutBkp>
    )
}