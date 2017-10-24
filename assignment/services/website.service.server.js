module.exports = function (app) {
  app.get('/api/website', findAllWebsites);

  var WEBSITES = [
    { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
    { _id: '234', name: 'Google', developerId: '456', description: 'Lorem' },
    { _id: '345', name: 'Wiki', developerId: '135', description: 'Lorem' },
    { _id: '456', name: 'NEU', developerId: '135', description: 'Lorem' },
    { _id: '567', name: 'NBA', developerId: '135', description: 'Lorem' },
    { _id: '678', name: 'ABC', developerId: '135', description: 'Lorem' }
  ];

  function findAllWebsites(req, res) {
    res.json(WEBSITES);
  }

};
