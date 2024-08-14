import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { toast } from 'react-toastify'

export const getPost = ({slug}: {slug: string}) => {
    const markdownFile = fs.readFileSync(path.join('_articles', `${slug}.mdx`), 'utf-8')

    const { data: frontMatter, content} = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export const getAllPosts = () => {
    const files = fs.readdirSync(path.join('_articles'))

    const posts = files.map((fileName) => {
        const fileContent = fs.readFileSync(path.join('_articles', fileName), 'utf-8')
        const { data: frontMatter } = matter(fileContent)

        return{
            meta: frontMatter,
            slug: fileName.replace('.mdx', '')
        }

    })

    return posts
}