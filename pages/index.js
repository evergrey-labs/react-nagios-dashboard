import Head from 'next/head'
import Image from 'next/image'
import TopCard from '../src/components/TopCard'
import BottomCard from '../src/components/BottomCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <TopCard />
          <BottomCard />
        </div>
      </main>
    </div>
  )
}
