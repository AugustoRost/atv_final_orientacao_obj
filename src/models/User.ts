import {Tweet} from './Tweet'
export class User {
    private followers: User[] = [];
    private tweets: Tweet[] = [];
    constructor(
        private id: string,
        private name: string,
        private username: string,
        private email: string,
        private password: string){}
        
private generateTweetId(): string {
    return Math.random().toString(36).substring(7);
}
get Tweet(): void{
    return this.Tweet;
}
sendTweet(content: string): void {
    const newTweet = new Tweet(this.generateTweetId(), content, "normal");
    this.tweets.push(newTweet);
    console.log(`${this.name} Tweet's sent`);
    
}
          
follow(userToFollow: User): void {
  this.addFollower(userToFollow);
  console.log(`${this.username} is now following ${userToFollow.username}`);
}

private addFollower(user: User): void {
  this.followers.push(user);
}
showFeed(): void {
  console.log(`${this.name} Feed:`);
  this.showTweets();

  this.followers.forEach((follower) => {
    follower.showTweets();
  });
}
showTweets(): void{
    this.tweets.forEach((tweet) => {
      console.log(`@${this.username}: ${tweet.content}
      `);
      
    });
}
}

