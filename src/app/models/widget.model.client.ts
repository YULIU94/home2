export class Widget {
  _id: String;
  type: String;
  size: Number;
  text: String;
  src: String;

  constructor(id: String, type: String, size: Number, text: String, src: String) {
    this._id = id;
    this.type = type;
    this.size = size;
    this.text = text;
    this.src = src;
  }
}
