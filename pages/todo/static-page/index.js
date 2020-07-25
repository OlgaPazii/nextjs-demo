import Link from 'next/link';

// This function gets called at build time
export async function getStaticProps() {

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      num: Math.floor(Math.random() * 100),
      date: (new Date()).toISOString(),
    },
  }
}

export default function StaticPage(props) {
  return (
    <div>
      <h1>Todo first-page</h1>
      <Link href="/todo/second-page"><a>To the!</a></Link>
      {props.num}
      {props.date}
    </div>
  );
}