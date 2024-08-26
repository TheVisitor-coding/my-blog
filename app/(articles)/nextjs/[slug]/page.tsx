import fs from 'fs'
import path from 'path'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost } from '@/services/articleFunc'
import ProgressBar from '@/components/articles/ProgressBar'


export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('_articles'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

export default function ArticlePage({params}: {params: {slug: string}}) {
    const { frontMatter, content } = getPost(params)

     return (
        <>
        <ProgressBar />
        <article className='flex flex-col gap-2'>
            <h1>{frontMatter.title}</h1>
            
            <MDXRemote source={content}/>
        </article>
        </>
    )
}