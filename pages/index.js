import Head from "next/head";
import { fetchAllPosts } from "../src/api/api";
import Article from "../src/components/Article/Article";
import Form from "../src/components/Form/Form";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>TadBlog</title>
        <meta name="description" content="Find the best web dev content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
      <div className={styles.articles}>
        {posts.map((post) => {
          return <Article key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await fetchAllPosts();
  return {
    props: {
      posts,
    },
  };
};
