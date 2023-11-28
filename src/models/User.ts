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
sendTweet(content: string, type: string): void {
    const newTweet = new Tweet(this.generateTweetId(), content, type);
    this.tweets.push(newTweet);
    console.log("Tweet sent");
    
}
          
follow(userToFollow: User): void {
    userToFollow.addFollower(this);
    console.log(`${this.username} is now following ${userToFollow.username}`);
  }

  private addFollower(user: User): void {
    this.followers.push(user);
  } 
showFeed(){

}
showTweets(){
    this.tweets.forEach((tweet) => {
      console.log(`@${this.username}: ${tweet.content}
      `);
    });
}
}

