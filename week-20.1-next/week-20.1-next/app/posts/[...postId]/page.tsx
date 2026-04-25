import axios from "axios";

export default async function Posts({
  params,
}: {
  params: {
    postId: string;
  };
}) {

  const Id = (await params).postId;
  return (
    <>
      <div>Blog {JSON.stringify(Id)}</div>
    </>
  );
}
