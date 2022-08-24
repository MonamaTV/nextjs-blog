import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    baseURL: "https://api.storyblok.com/v2/cdn/stories",
    params: {
      token: "NVE0guy2vMQJ7ZLYgVKecAtt",
      version: "draft",
    },
    timeout: 5000,
  });
};

export const fetchAllPosts = async (per_page = 10, page = 1) => {
  try {
    const { data } = await axiosInstance().get("/", {
      params: {
        page,
        per_page,
      },
    });
    return data?.stories;
  } catch (error) {
    //error -> for debugging
    return null;
  }
};

export const fetchPost = async (slug) => {
  try {
    const { data } = await axiosInstance().get("/posts/" + slug);
    return data.story;
  } catch (error) {
    return null;
  }
};
//blog/{slug}
export const fetchAllPostsSlugs = async () => {
  const data = await fetchAllPosts();
  const slugs = data.map((post) => "/blog/" + post.slug);
  return slugs;
};

export const searchPosts = async (keyword) => {
  try {
    const { data } = await axiosInstance().get(
      "/?" + `filter_query[tags][like]=*${keyword}*`
    );
    return data.stories;
  } catch (error) {
    return null;
  }
};
