import Post from "./Post";
import classes from "./PostsList.module.css"

function PostsList() {
    return (
        <ul className={classes.posts}>
        <Post author="Piyumi" body="learning"/>
        <Post author="Piyumi1" body="learning.."/>
      </ul>
    );

}

export default PostsList;