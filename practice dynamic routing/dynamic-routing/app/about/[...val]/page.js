export default async function Page({ params }) {
    const a= await params
    console.log(a);
  return <div>check console</div>;
}