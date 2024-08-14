import { getAllPosts } from '@/services/articleFunc'
import Link from 'next/link'


export default async function ListArticles() {

  const posts = await getAllPosts()

  return (
    <>
        {
            posts && (posts.map((post) => (
            <article key={post.slug} className='flex gap-1 flex-col'>
                <h2 className='text-xl'>{post.meta.title}</h2>
                <p className=' font-light'>{post.meta.description}</p>
                <Link href={`nextjs/${post.slug}`} >
                <p className='hover:translate-x-2 transition-all mt-2 text-purple-400'>Read more</p>
                </Link>
            </article>
            )))
        }
    </>
  )


}