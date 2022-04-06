import BlogLayout from "components/BlogLayout";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  return <BlogLayout>{JSON.stringify(router.query)}</BlogLayout>;
};

export default Blog;
