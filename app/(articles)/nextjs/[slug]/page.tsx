import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost } from '@/services/articleFunc'

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('_articles'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

export default function article({params}: {params: {slug: string}}) {
    const article = getPost(params)

     return (
        <article className='flex flex-col gap-2'>
            <h1>{article.frontMatter.title}</h1>
            
            <MDXRemote source={article.content}/>
        </article>
    )

}