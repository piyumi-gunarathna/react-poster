import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.post}>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
