// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8088;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// logging middleware
router.use(function(req, res, next) {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query});
    next();
});

// Simple in memory 'database'
const database = [
  { name: 'Analytics', id: 0, users: ['Ryan','Nick'], messages: [{name: 'Ryan', message: 'ayyyyy'},{name: 'Nick', message: 'lmao'}]},
  { name: 'Business', id: 1, users: ['Abdul'], messages: [{name: 'Abdul', message: 'ayy'}]},
  { name: 'Design', id: 3, users: ['Jake'], messages: [{name: 'Jake', message: 'yo'}]},
  { name: 'Engineering', id: 4, users: ['Mark'], messages: [{name: 'Mark', message: 'whatup'}]},
  { name: 'HR', id: 5, users: ['Justin'], messages: [{name: 'Justin', message: 'heyoo'}]},
  { name: 'Operations', id: 6, users: ['Jay'], messages: [{name: 'Jay', message: 'sup'}]}
]


// Utility functions
const findRoom = (roomId) => {
  const room = database.find((room) => {
    return room.id === parseInt(roomId)
  })
  if (room === undefined){
    return {error: `a room with id ${roomId} does not exist`}
  }
  return room
}

const logUser = (room, username) => {
  const userNotLogged = !room.users.find((user) => {
    return user === username
  })

  if (userNotLogged) {
    room.users.push(username)
  }
}

// API Routes
router.get('/rooms', function(req, res) {
    console.log('hey');
    const rooms = database.map((room) => {
      return {name: room.name, id: room.id}
    })
    console.log('Response:', rooms)
    res.json(rooms);
});

router.get('/rooms/:roomId', function(req, res) {
  room = findRoom(req.params.roomId)
  if (room.error) {
    console.log('Response:',room)
    res.json(room)
  } else {
    console.log('Response:',{name: room.name, id: room.id, users: room.users})
    res.json({name: room.name, id: room.id, users: room.users});
  }
})

router.route('/rooms/:roomId/messages')
  .get(function(req, res) {
    room = findRoom(req.params.roomId)
    if (room.error) {
      console.log('Response:',room)
      res.json(room)
    } else {
      console.log('Response:',room.messages)
      res.json(room.messages);
    }
  })
  .post(function(req, res) {
    room = findRoom(req.params.roomId)
    if (room.error) {
      console.log('Response:',room)
      res.json(room)
    } else if (!req.body.name || !req.body.message) {
      console.log('Response:',{error: 'request missing name or message'})
      res.json({error: 'request missing name or message'});
    } else {
      logUser(room, req.body.name)
      room.messages.push({name: req.body.name, message: req.body.message})
      console.log('Response:',{message: 'OK!'})
      res.json({message: 'OK!'});
    }
  })

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`API running at localhost:${port}`);