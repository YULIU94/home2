export class Widget {
  _id: String;
  type: String;
  size: Number;
  text: String;
  url: String;
  position: Number;

  constructor(id: String, type: String, size: Number, text: String, url: String) {
    this._id = id;
    this.type = type;
    this.size = size;
    this.text = text;
    this.url = url;
  }
}
