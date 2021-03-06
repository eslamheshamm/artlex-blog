import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPostsForCreativity } from "../lib/api";
import CategorySection from "../components/categories";

import Head from "next/head";
export default function Creativity({ allPosts, preview }) {
  // const heroPost = allPosts[0]
  const posts = allPosts;
  console.log(allPosts);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Artlex Community</title>
        </Head>
        <Container>
          <CategorySection />

          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {posts && <MoreStories posts={posts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForCreativity(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
