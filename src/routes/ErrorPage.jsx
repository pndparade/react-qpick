import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="page-error container">
      <h1>Ошибка!</h1>
      <p>Случилось что-то непредвиденное. <br />Пожалуйста, попробуйте снова.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}