import {Tweet} from './Tweet'


export class User {
    private followers: string[] = [];
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
sendTweet(content: string, type: string): void {
    const newTweet = new Tweet(this.generateTweetId(), content, type);
    this.tweets.push(newTweet);
}
          
follow(){

} 
showFeed(){

}
showTweets(){

}
}

