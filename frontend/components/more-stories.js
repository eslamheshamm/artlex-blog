import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            summery={post.summery}
          />
        ))}
      </div>
    </section>
  )
}
