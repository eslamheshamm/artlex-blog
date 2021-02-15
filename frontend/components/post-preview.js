import CoverImage from './cover-image'
import Link from 'next/link'
import {imageBuilder} from '../lib/sanity'

export default function PostPreview({
  title,
  coverImage,
  summery,
  author,
  slug,
}) {
  return (
    <div className="mb-8 p-6 rounded-2xl bg-accent-shd2">
      
        <CoverImage slug={slug} title={title} imageObject={coverImage} url={imageBuilder(coverImage).url()} />
      <h3 className="text-3xl mt-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline font-bold text-2xl leading-6 text-white">{title}</a>
        </Link>
      </h3>
      {/* post date */}
      {/* <div className="text-lg mb-4">
        <Date dateString={date} />
      </div> */}
      <p className="text-white text-opacity-40 text-lg my-6">{summery}</p>

      {/* <Avatar name={author.name} picture={author.picture} /> */}
      <figure className="flex items-center my-4">
				<img src={`${author.picture}`} className="rounded-full  object-cover w-8 h-8 mr-4" />
				<figcaption className="text-white text-opacity-40 text-40 ">{author.name}</figcaption>
			</figure>
    </div>
  )
}
