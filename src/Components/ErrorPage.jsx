import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>This route is not found! Please use the give navigation bars</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}

export default ErrorPage;
