import { Link } from "react-router-dom";

const PostCard = (props) => {
  const {post}= props;
  return (
    <div>
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.body}</p>
          <Link to={`post/${post.id}`} className="btn btn-primary">
            View Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
