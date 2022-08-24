import { fetchAllPostsSlugs, fetchPost } from "../../src/api/api";
import styles from "./Blog.module.css";
const Blog = ({ post }) => {
  const {
    created_at,
    published_at,
    content: { title, content },
  } = post;
  return (
    <div className={styles.blog}>
      <h2>{title}</h2>
      <small>
        Published at {published_at?.split("T")[0] || created_at.split("T")[0]}
      </small>
      <p>{content}</p>
    </div>
  );
};

export default Blog;
//localhost:3000/blog/{slug} first

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const data = await fetchPost(slug);
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetchAllPostsSlugs();
  return {
    paths: data,
    fallback: false,
  };
};
