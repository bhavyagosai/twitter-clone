import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incrementComment } from '../redux/actions/CommentsAction';
import { listPosts } from '../redux/actions/PostsAction';
import { postArray } from '../utils/Arrays';
import FeedNavbar from './FeedComponents/FeedNavbar';
import TweetComponent from './FeedComponents/TweetComponent';
import Post from './FeedComponents/Post';

function Feed() {
  useEffect(() => {
    document.getElementById('editable').addEventListener('keydown', check);
    document.getElementById('editable').addEventListener('focusout', check2);
    return () => {
      document
        .getElementById('editable')
        .removeEventListener('keypress', check);
      document
        .getElementById('editable')
        .removeEventListener('focusout', check2);
    };
  }, []);

  const check = () => {
    document.getElementById('tweetButton').classList.remove('btn-disabled');
  };
  const check2 = () => {
    document.getElementById('tweetButton').classList.add('btn-disabled');
  };

  //   const dispatch = useDispatch();
  //   const postList = useSelector((state) => state.postList);
  //   const { posts, error: listError } = postList;
  //   const increaseComment = useSelector((state) => state.increaseComment);
  //   const { single, error: incrementError } = increaseComment;

  return (
    <>
      <FeedNavbar />
      <div class="mt-14" />
      <TweetComponent />

      {postArray ? (
        postArray?.map((post) => {
          return (
            <Post
              name={post.name}
              username={post.username}
              date={post.date}
              profileImage={post.profileImage}
              isVerified={post.isVerified}
              text={post.text}
              imageContent={post.imageContent}
              image={post.imageContent?.image}
              caption={post.imageContent?.caption}
              website={post.imageContent?.caption?.website}
              topic={post.imageContent?.caption?.topic}
              content={post.imageContent?.caption?.content}
              youtubeEmbed={post.youtubeEmbed}
              gifEmbed={post.gifEmbed}
              comments={post.comments}
              likes={post.likes}
              retweets={post.retweets}
            />
          );
        })
      ) : (
        <p>Error</p>
      )}
    </>
  );
}

export default Feed;
