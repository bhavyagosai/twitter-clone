import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { commentIncrementReducer } from './reducers/CommentsReducer';
import { listPostsReducer } from './reducers/PostsReducer';

const reducer = combineReducers({
  // this will contain our reducers
  postList: listPostsReducer,
  increaseComment: commentIncrementReducer,
  //   updatelikes: updateLikesReducer,
  //   updateComments: updateCommentsReducer,
});

const initialState = {
  posts: [
    {
      name: 'Marques Brownlee',
      username: 'MKBHD',
      date: '5h',
      profileImage:
        'https://pbs.twimg.com/profile_images/1468001914302390278/B_Xv_8gu_400x400.jpg',
      isVerified: true,
      text: 'But seriously the only way to guarantee meaningful positive change in the next 365 days around the sun is to exit your comfort zone and relentlessly attack your goals. That’s my plan, anyway. Good luck and Happy New Year! 🙌🏾',
      imageContent: null,
      youtubeEmbed: null,
      gifEmbed: null,
      comments: 365,
      likes: 1540,
      retweets: 25,
    },
    {
      name: 'Bhavya Gosai',
      username: 'bbsempaii',
      date: '3h',
      profileImage: 'https://i.imgur.com/iDJzduO.jpg',
      isVerified: false,
      text: 'Dammit, I am still not verified :(',
      imageContent: null,
      youtubeEmbed: null,
      gifEmbed: null,
      comments: 6,
      likes: 25,
      retweets: 2,
    },
    {
      name: 'Elon Musk',
      username: 'elonmusk',
      date: '15h',
      profileImage:
        'https://pbs.twimg.com/profile_images/1519444163284111361/WNafjuRf_400x400.jpg',
      isVerified: true,
      text: 'A+ for cinematography',
      imageContent: {
        image:
          'https://pbs.twimg.com/media/FXjlC-lXgAEfHYs?format=jpg&name=large',
        caption: null,
      },
      youtubeEmbed: null,
      gifEmbed: null,
      comments: 258,
      likes: 658,
      retweets: 12,
    },
    {
      name: 'BBC News (World)',
      username: 'BBCWorld',
      date: 'Jan 1',
      profileImage:
        'https://pbs.twimg.com/profile_images/1529107170448523264/q3VwEx38_400x400.jpg',
      isVerified: true,
      text: 'Satellites give clues about the coming global harvest',
      imageContent: {
        image:
          'https://pbs.twimg.com/card_img/1547732858592059393/CvjcMs3I?format=jpg&name=small',
        caption: {
          website: 'bbc.com',
          topic: 'Satellite gives clues about the coming global harvest',
          content:
            'With wheat at record high prices, importing countries hoping for increased supply may be disappointed.',
        },
      },
      youtubeEmbed: null,
      gifEmbed: null,
      comments: 18,
      likes: 269,
      retweets: 59,
    },
    {
      name: 'My Office',
      username: 'theoffice',
      date: 'Feb 21',
      profileImage:
        'https://pbs.twimg.com/profile_images/1202687416567549955/6e3GkoN6_400x400.jpg',
      isVerified: true,
      text: 'Michael is happy',
      imageContent: null,
      youtubeEmbed: null,
      gifEmbed: 'https://giphy.com/embed/bq1PRO9CLPHmURBvv2/video',
      comments: 78,
      likes: 2699,
      retweets: 254,
    },
    {
      name: 'Jaipal Jadeja',
      username: 'justjaipal',
      date: 'Dec 29',
      profileImage:
        'https://pbs.twimg.com/profile_images/1542735963793010689/idqU8vRp_400x400.jpg',
      isVerified: false,
      text: 'Hey guys! Checkout my new upload!',
      imageContent: null,
      youtubeEmbed: 'HZxjYzX3R7Y?list=TLPQMTUwNzIwMjLK15Vf4-N29w',
      gifEmbed: null,
      comments: 1,
      likes: 41,
      retweets: 2,
    },
    {
      name: 'Spotify',
      username: 'spotifymusic',
      date: '8s',
      profileImage:
        'https://pbs.twimg.com/profile_images/1013614110171250688/vrPUCDn2_400x400.jpg',
      isVerified: true,
      text: null,
      imageContent: {
        image:
          'https://pbs.twimg.com/media/FXquf_OUcAEmUxJ?format=jpg&name=900x900',
        caption: null,
      },
      youtubeEmbed: null,
      gifEmbed: null,
      comments: 1001,
      likes: 5542,
      retweets: 1520,
    },
    {
      name: 'I Stan Eminem',
      username: 'stangang',
      date: 'May 21',
      profileImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Eminem_%28cropped%29.jpg/300px-Eminem_%28cropped%29.jpg',
      isVerified: false,
      text: 'I wrote down my top 20 Eminem songs of all time in order. W or L? 🤔 What’s your top 5 Eminem songs? 👀',
      imageContent: {
        image:
          'https://pbs.twimg.com/media/FXvME7OVUAEmULA?format=jpg&name=large',
        caption: null,
      },
      youtubeEmbed: null,
      gifEmbed: null,
      comments: 145,
      likes: 8563,
      retweets: 45,
    },
  ],
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
