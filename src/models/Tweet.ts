export class Tweet {
    private _id: string;
    private _content: string;
    private _type: string;
  
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
reply(){

}
like(){

}
show(){

}
showReplies(){
    
}
}