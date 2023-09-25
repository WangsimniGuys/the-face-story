export async function getServerSideProps() {
  return { props: { id: "123" } };
}

function Page({ id }: { id: string }) {
  return <div>{id}</div>;
}

export default Page;
