import { Link, useLoaderData } from "react-router-dom";
const Details = () => {
  const post = useLoaderData() || {};

  return (
    <div>
      <div>
        <div className="card">
          <div className="card-header">Details</div>
          <div className="card-body">
            <h5 className="card-title">{post?.title}</h5>
            <p className="card-text">{post?.body}</p>
            <Link to="/" className="btn btn-primary">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
