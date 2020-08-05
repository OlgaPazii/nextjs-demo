import Head from 'next/head';
import Navigator from '../components/navigator';

export default function Home() {
  const num = Math.floor(Math.random() * 100);
  return (
    <Navigator>

      <Head>
        <title>Main title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Updated by git push!
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          {num}
        </h1>
      </main>

    </Navigator>
  )
}
