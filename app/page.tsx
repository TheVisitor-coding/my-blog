import ListArticles from '@/components/articles/ListArticles'

export default function HomePage() {

  return (
    <main>
      <h1 className='text-5xl mb-12'>Blog</h1>

      <ListArticles />
    </main>
  );
}
