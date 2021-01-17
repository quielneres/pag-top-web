import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './Navbar'

const name = 'Ezequiell'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({children, home}) {
    return (
        <div >
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                      crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap" rel="stylesheet"/>
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <Navbar/>
            {/*<header className={styles.header}>*/}
            {/*    {home ? (*/}
            {/*        <>*/}
            {/*            <img*/}
            {/*                src="/images/profile.jpg"*/}
            {/*                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}*/}
            {/*                alt={name}*/}
            {/*            />*/}
            {/*            <h1 className={utilStyles.heading2Xl}>{name}</h1>*/}
            {/*        </>*/}
            {/*    ) : (*/}
            {/*        <>*/}
            {/*            <Link href="/">*/}
            {/*                <a>*/}
            {/*                    <img*/}
            {/*                        src="/images/profile.jpg"*/}
            {/*                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}*/}
            {/*                        alt={name}*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </Link>*/}
            {/*            <h2 className={utilStyles.headingLg}>*/}
            {/*                <Link href="/">*/}
            {/*                    <a className={utilStyles.colorInherit}>{name}</a>*/}
            {/*                </Link>*/}
            {/*            </h2>*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*</header>*/}
            <main className={styles.classMain}>{children}</main>
            {/*{!home && (*/}
            {/*    <div className={styles.backToHome}>*/}
            {/*        <Link href="/">*/}
            {/*            <a>← Back to home</a>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*)}*/}
            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/images/logo.png" alt="Vercel Logo" className="logo"/>
                </a>
            </footer>
            <style jsx>{`
                  footer {
                      width: 100%;
                      height: 100px;
                      border-top: 1px solid #eaeaea;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }

                    footer img {
                      margin-left: 0.5rem;
                    }

                    footer a {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }
                    
                    .logo {
                      width: 6em;
                    }
                    
                     a {
                      color: inherit;
                      text-decoration: none;
                    }

                    @media (max-width: 600px) {
                      .grid {
                        width: 100%;
                        flex-direction: column;
                      }
                    }
                  `}</style>
        </div>
    )
}