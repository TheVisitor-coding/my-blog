import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Home() {
  const files = fs.readdirSync(path.join('_articles'))

  const blogs = files.map((fileName) => {
    const fileContent = fs.readFileSync(path.join('_articles', fileName), 'utf-8')
    const { data: frontMatter } = matter(fileContent)

    return{
      meta: frontMatter,
      slug: fileName.replace('.mdx', '')
    }

  })
  return (
    <main>
      <h1 className='text-5xl mb-12'>Blog</h1>

      {
        blogs.map((blog) => (
          <article key={blog.slug} className='flex gap-1 flex-col'>
            <h2 className='text-xl'>{blog.meta.title}</h2>
            <p className=' font-light'>{blog.meta.description}</p>
            <Link href={`nextjs/${blog.slug}`} >
              <p className='hover:translate-x-2 transition-all mt-2'>Read more</p>
            </Link>
          </article>
        ))
      }
    </main>
  );
}
