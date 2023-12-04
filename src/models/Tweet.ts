import { User } from './User'
export class Tweet {
  private _id: string;
  private _content: string;
  private _type: string;
  private _likes: number = 0;
  private _likedBy: User[] = [];
  private _replies: Tweet[] = [];

  constructor(id: string, content: string, type?: string) {
      this._id = id;
      this._content = content;
      this._type = type;
  }

  get id(): string {
      return this._id;
  }

  get content(): string {
      return this._content;
  }

  get type(): string {
      return this._type;
  }

  reply(user: User, content: string) {
    const newReply = new Tweet(this.generateTweetId(), content, 'reply');
    this._replies.push(newReply);
    user.Tweet.push(newReply);
    console.log(`${user.username} reply`);
    
}

private generateTweetId(): string {
  return 'some_unique_id';
}
like(user: User) {

  if (!this._likedBy.includes(user)) {
      this._likes++;
      this._likedBy.push(user);
      console.log(`@${user.username} liked this tweet. Total likes: ${this._likes}`);
  } else {
      console.log(`User @${user.username} already liked this tweet`);
  }
 }
show(){
console.log(`${this.content}`);

}
showReplies():void {

}
}