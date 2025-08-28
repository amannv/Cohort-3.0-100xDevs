import { useState, useEffect } from "react";

export function usePostTitle() {
const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post.title;
}

export function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url])

  useEffect(() => {
    setInterval(getDetails, 10 * 1000);
  }, []);

  return {data, loading};
}