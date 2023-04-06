import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>

      <h1 className={inter.className}>Welcome to Next</h1>
    </>
  )
}
