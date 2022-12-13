const Note = require('../../models/note');
// const User = require('../../models/user')

module.exports = {
    create,
    index, 
    show
};



//  async function create(req, res) {
//     console.log(req)
//     const text = await Note.create(req.body)
//     console.log(req.body)
//     console.log(text, "text")

//     if(!text)
//         return res.status(400).json({message: 'no notes'})
        
//         res.json(text)
//       }


async function index(req, res) {
  const notes = await Note.find({user: req.user._id})
  res.json(notes);
}

async function show(req, res) {
  const note = await Note.findById(req.params.id);
  res.json(note)
}

async function create(req, res) {
  req.body.user = req.user._id
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch {
    res.status(404);
  }
}




// async function create(req, res) {
//   try {
//     // Add the user to the db
//     const user = await User.create(req.body);
//     const token = createJWT(user);
//     res.json(token);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }




    // console.log("create", req.body)
    

    // function create(req, res) {
//     req.body.user = req.user.name;
//     const note = new Note(req.body);
//     note.save(function, err) {
//         if (err) return res.redirect('/');
//         res.redirect
//     }
// }

// async function create(req, res) {
//     try {
//       // Add the user to the db
//       const note = await Note.create(req.body);
//     //   const token = createJWT(user);
//     //   res.json(token);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   }