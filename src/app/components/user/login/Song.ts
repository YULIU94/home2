export class Song {
  name: String;
  date: Date;
  duration: number;


  constructor(name: String, duration: number) {
    this.name = name;
    this.duration = duration;
  }
}
