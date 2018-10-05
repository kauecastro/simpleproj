import jwt from 'jsonwebtoken';

const login = (req, res, next) => {
  const { username, password} = req.body

  if(!username || !password) 
    res.send({
      success: false,
      message: 'Username or password is incorrect.'
    })
  
  const token = jwt.sign({ data: 'foobar'}, process.env.SECRET, { expiresIn: '1h' });

  res.send(token)
}

const verify = (req, res, next) => {
  if(!req.headers.authorization)
    res.status(403)
      .json({error:'No credentials sent.'})
  
  jwt.verify(req.headers.authorization, process.env.SECRET, function(err, decoded) {
    if(err)
      res.status(200)
        .json({status: false, message:'Token is not valid.'})
    res.status(200)
      .json({status: true, message:'Token is valid.'})
  })
}

module.exports = { login, verify }