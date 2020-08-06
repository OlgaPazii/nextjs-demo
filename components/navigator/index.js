import Link from "next/link";
import Head from "next/head";
import classes from './index.module.scss';

export default ({ children }) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Title from navigator</title>
      </Head>
      <nav>
        <Link href="/"><a>Main Page</a></Link>
        <Link href="/help"><a>Help Page</a></Link>
        <Link href="/table"><a>Table Page</a></Link>
      </nav>
      <main>
        {children}
      </main>

    </div>
  );
}