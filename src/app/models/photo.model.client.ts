export class Photo {

  farm: String;
  server: String;
  id: String;
  secret: String;


  constructor(farm: String, server: String, id: String, secret: String) {
    this.farm = farm;
    this.server = server;
    this.id = id;
    this.secret = secret;
  }
}
