import {User} from './models/User'
import {Tweet} from './models/Tweet'

const userJose = new User("jose", "jose00", "jose@gmail.com","1234batima");
const tweetJose01 = userJose.sendTweet("hello world!");
const tweetJose02 = userJose.sendTweet("hello");


const userMaria = new User("maria", "maria01", "maria@gmail.com","1234batima");
const tweetmaria01 = userMaria.sendTweet("eita");


const userPedro = new User("pedro", "pedro02", "pedro@gmail.com","1234batima");
const tweetpedro01 = userPedro.sendTweet("essa fera ai bicho")
tweetpedro01.like(userJose);
tweetpedro01.like(userMaria);
tweetpedro01.like(userPedro);


userJose.follow(userMaria);
userJose.follow(userPedro);
tweetJose01.like(userJose);
tweetpedro01.reply(userJose, "olar mundo");
userJose.showFeed()