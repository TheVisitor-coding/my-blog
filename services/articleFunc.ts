import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export const getPost = ({slug}: {slug: string}) => {
    const markdownFile = fs.readFileSync(path.join('_articles', `${slug}.mdx`), 'utf-8')

    const { data: frontMatter, content} = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}