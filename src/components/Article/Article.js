import Link from "next/link";
import styles from "./Article.module.css";
const Article = ({ post }) => {
  const {
    created_at,
    published_at,
    slug,
    content: { title, excerpt },
  } = post;
  return (
    <div className={styles.article}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <small>
        Published date:{" "}
        {published_at?.split("T")[0] || created_at.split("T")[0]}
      </small>
      <Link href={"/blog/" + slug}>Read More</Link>
    </div>
  );
};

export default Article;
