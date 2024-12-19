import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


const NotFoundPage = () => (
  <div>
    <h1>404 Not Found</h1>
    <Link to={AppRoute.Main}>Return to main page</Link>
  </div>
);

export default NotFoundPage;
