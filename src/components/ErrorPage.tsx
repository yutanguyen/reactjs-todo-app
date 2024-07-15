import { useRouteError } from "react-router-dom";

function ErrorPage() {
  // [ ] Add type
  const error: any = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/login">Move to Todo Page</a>
    </div>
  );
}

export default ErrorPage;
