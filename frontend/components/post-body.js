import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'

export default function PostBody({ content }) {
  return (
    <article className="w-11/12 md:w-9/12  sm:mx-auto text-opacity-40  text-white prose-sm sm:text-xl my-16 sm:prose-lg break-words leading-7">
      <BlockContent blocks={content} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset="production" className={markdownStyles.markdown} />
    </article>
  )
}
