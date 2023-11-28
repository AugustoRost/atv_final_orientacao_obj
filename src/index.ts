import {User} from './models/User'
import {Tweet} from './models/Tweet'

const user00 = new User("00", "jose", "jose00", "jose@gmail.com","1234batima");
const user01 = new User("01", "maria", "maria01", "maria@gmail.com","1234batima");

user00.sendTweet("hello world!", "normal");
user00.sendTweet("hello", "normal");
user01.sendTweet("eita", "normal");
console.log(user00);

 user00.showTweets();
 user01.showTweets();
