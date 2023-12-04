import { randomUUID } from 'crypto';

import {Tweet} from './Tweet'

export class User {
    private following: User[] = [];
    private tweets: Tweet[] = [];
    private static users: User[] = [];
    private id: string;
    private _likedTweets: Tweet[] = [];

    constructor(
        private name: string,
        private _username: string,
        private email: string,
        private password: string) {

        if (User.users.some(user => user._username === this._username)) {
            throw new Error(`Username '${this._username}' already exists. Please choose a different username.`);
        }
        this.id = randomUUID();
        User.users.push(this);
        console.log(`User ${this._username} created
        `);
        
    }
        
private generateTweetId(): string {
    return randomUUID();
}
get Tweet(): Tweet[] {
    return this.tweets;

}
get username(): string{
    return this._username;
}  

get likedTweets(): Tweet[] {
  return this._likedTweets;
}




sendTweet(content: string): Tweet {
    const newTweet = new Tweet(this.generateTweetId(), content, "normal");
    this.tweets.push(newTweet);
    console.log(`${this.name} Tweet's sent
    `);
    return newTweet;
}
          
follow(userToFollow: User): void {

  if (userToFollow === this) {
    console.log(`You can't follow yourself!
    `);
    return;
  }

  this.addFollower(userToFollow);
  console.log(`${this._username} is now following ${userToFollow._username}
  `);
}

private addFollower(user: User): void {
  this.following.push(user);
}
showFeed(): void {
  console.log(`${this.name} Feed:`);
  this.showTweets();

  this.following.forEach((follower) => {
    follower.showTweets();
  });
}
showTweets(): void{
    this.tweets.forEach((tweet) => {
      console.log(`@${this._username}: ${tweet.content}
      `);
      if (tweet.likes >= 2) {
				console.log(
					`[${tweet.likedBy[0].username} and other ${
						tweet.likedBy.length - 1
					} user liked this]`
				);
			} else if (tweet.likes === 1) {
				console.log(`[${tweet.likedBy[0].username} liked this]`);
			}
			if (tweet.replys.length !== 0) {
				tweet.showReplies();
			}
			console.log('---------------------');
		});
  
}
addLikedTweet(tweet: Tweet): void {
  this._likedTweets.push(tweet);
}
}