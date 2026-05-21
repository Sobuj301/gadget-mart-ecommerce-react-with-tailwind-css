import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2>Something went wrong 😢</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;