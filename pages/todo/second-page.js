// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // Pass data to the page via props
  return {
    props: {
      serverSide: (new Date()).toISOString(),
    }
  }
}

export default function SecondPost(props) {
  return (
    <div>
      <h1> Todo Second - page </h1>
      {props.serverSide}
    </div>
  );
}