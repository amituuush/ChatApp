// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var shortid = require('shortid')
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
// const database = [
//   { name: 'Analytics', id: 0, users: ['Ryan','Nick'], messages: [{name: 'Ryan', message: 'ayyyyy'},{name: 'Nick', message: 'lmao'}]},
//   { name: 'Business', id: 1, users: ['Abdul'], messages: [{name: 'Abdul', message: 'ayy'}]},
//   { name: 'Design', id: 3, users: ['Jake'], messages: [{name: 'Jake', message: 'yo'}]},
//   { name: 'Engineering', id: 4, users: ['Mark'], messages: [{name: 'Mark', message: 'whatup'}]},
//   { name: 'HR', id: 5, users: ['Justin'], messages: [{name: 'Justin', message: 'heyoo'}]},
//   { name: 'Operations', id: 6, users: ['Jay'], messages: [{name: 'Jay', message: 'sup'}]}
// ]

const database = [
  {
    name: 'Tea Chats',
    id: 0,
    users: ['Ryan','Nick'],
    messages: [
      {name: 'Ryan', message: 'ayyyyy', id: 'gg35545', reaction: null},
      {name: 'Nick', message: 'lmao', id: 'yy35578', reaction: null}
    ]
  },
  {
    name: 'Coffee Chats',
    id: 1, users: ['Abdul'],
    messages: [
      {name: 'Abdul', message: 'ayy', id: 'ff35278', reaction: null}
    ]
  }
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

// new
const findRoomIndex = (roomId) => {
  const roomIndex = database.findIndex((room) => {
    return room.id === parseInt(roomId)
  })
  return roomIndex
}

// new
const findMessageIndex = (room, messageId) => {
  const messageIndex = room.messages.findIndex((message) => {
    return message.id === messageId
  })
  return messageIndex
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
    const rooms = database.map((room) => {
      return {name: room.name, id: room.id}
    })
    res.json(rooms);
});

router.get('/rooms/:roomId', function(req, res) {
  room = findRoom(req.params.roomId)
  if (room.error) {
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
      res.json(room.messages)
    }
  })
  .post(function(req, res) {
    room = findRoom(req.params.roomId)
    if (room.error) {
      console.log('Response:',room)
      res.json(room)
    } else if (!req.body.name || !req.body.message) {
      console.log('Response:',{error: 'request missing name or message'})
      res.json({error: 'request missing name or message'})
    } else {
      logUser(room, req.body.name)
      const reaction = req.body.reaction || null
      room.messages.push({name: req.body.name, message: req.body.message, id: shortid.generate(), reaction})
      console.log('Response:',{message: 'OK!'})
      res.json({message: 'OK!'})
    }
  })

  // new
  router.route('/rooms/:roomId/messages/:messageId')
    .post(function(req, res) {
      room = findRoom(req.params.roomId)
      if (room.error) {
        console.log('Response:',room)
        res.json(room)
      } else {
        messageIndex = findMessageIndex(room, req.params.messageId)
        if (messageIndex === -1){
          res.json({error: `a message with id ${req.params.messageId} does not exist`})
        } else {
          const roomIndex = findRoomIndex(req.params.roomId)
          console.log({roomIndex, messageIndex})
          if(req.body.name !== undefined) {
            database[roomIndex].messages[messageIndex].name = req.body.name
          }
          if(req.body.message !== undefined) {
            database[roomIndex].messages[messageIndex].message = req.body.message
          }
          if(req.body.reaction !== undefined) {
            database[roomIndex].messages[messageIndex].reaction = req.body.reaction;
            console.log('react:', database[roomIndex].messages[messageIndex].reaction);
          }
          res.json({message: 'OK!'})
        }
      }
    })

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`API running at localhost:${port}`);