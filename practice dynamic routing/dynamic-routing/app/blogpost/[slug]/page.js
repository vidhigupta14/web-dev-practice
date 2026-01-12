export default async function BlogPostPage({ params }) {
    // throw new Error('Failed to fetch data');
  const { slug } = await params;
  const languages=['javascript', 'python', 'java', 'csharp', 'ruby'];
  if(!languages.includes(slug)){
    return <div>Blog Post Not Found</div>;
  }
  return <div>Blog Post: {slug}</div>;
}
