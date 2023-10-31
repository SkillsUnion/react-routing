import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  return (
    <>
      <h1>Welcome back {params.username}</h1>
    </>
  );
}

export default User;
