import axios from "axios";

const getBlogs = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/",
  );
  return response.data;
};

export default async function Blogs() {
  const blogs = await getBlogs();

  return <div>{blogs.map((blog: TodoProps) => <Todo key={blog.id} title={blog.title} completed={blog.completed}/>)}</div>;
}

interface TodoProps {
    id?: string
    title: string; 
    completed: boolean; 
}

function Todo({ title, completed }: TodoProps) {
  return (
    <>
      <div className="m-4">{title} = {completed ? "Done" : "Not done"}</div>
    </>
  );
}
