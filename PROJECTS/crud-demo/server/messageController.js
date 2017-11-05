const Message = require('./messageModel');


const messageController = {};

messageController.getAllMessages = (req, res, next) => {
  Message.find({}, (err, result) => {
    res.json(result);
  })
}

messageController.createMessage = (req, res, next) => {
  // create a new message with a message and createdBy prop
  // if there is an error send an error
  // else send the message obj back to the browser
  console.log('Body-----', req.body)
  Message.create({message: req.body.message, createdBy: req.body.createdBy}, (err, result) => {
    if (err) {
      res.status(404).send('you have an error')
    } else {
      res.json(req.body);
    }
  });
}

messageController.getMessage = (req, res, next) => {
  // find a specific message
  // if an error send the error
  // else send the message obj back to the browser
  Message.findOne({_id: req.params.id}, (err, result) => {
    if (err) {
      return res.status(404).send('you have an error');
    } else {
      console.log('FOUND', result)
      return res.json(result);
    }
  });
}

messageController.updateMessage = (req, res, next) => {
  // find and update a specific message
  // if error send error
  // else update message and send back result
  Message.findOneAndUpdate(
    {_id: req.params.id},
    {$set: {message: "that was a much needed nap"}},
    {new: true},
    (err, result) => {
      console.log('update', result);
      if (err) {
        return res.status(404).send('you have an error');
      } else {
        return res.json(result);
      }
  });
}

messageController.deleteMessage = (req, res, next) => {
  // find and delete a spcific message
  // if error send error
  // else delete message and send back a comment that it's been deleted
  Message.findOneAndRemove(
    {createdBy: req.body.createdBy},
    (err, result) => {
      if (err) {
        return res.status(404).send('you have an error');
      } else {
        return res.send('Deleted: ' + result);
      }
    }
  )
}
module.exports = messageController;