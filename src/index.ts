import {User} from './models/User'
import {Tweet} from './models/Tweet'

const userJose = new User("jose", "jose00", "jose@gmail.com","1234batima");
const userMaria = new User("maria", "maria01", "maria@gmail.com","1234batima");
const tweetJose01 = userJose.sendTweet("hello world!");
const tweetJose02 = userJose.sendTweet("hello");
const tweetmaria01 = userMaria.sendTweet("eita");
// console.log(userJose);

userJose.follow(userMaria);
 userJose.showFeed();
//  userJose.showTweets();
//  userMaria.showTweets();

tweetJose01.like(userJose);

tweetJose02.reply(userJose, "olar mundo");

tweetJose02.show()

tweetJose02.showReplies()