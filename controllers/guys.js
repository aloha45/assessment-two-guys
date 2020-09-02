const Guy = require('../models/guy')

module.exports = {
    create,
    index,
    delete: deleteName,
    update,
    new: newGuy
}

function update(req, res) {
    req.body.sexy = !!req.body.sexy;
    Guy.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(() => {
        res.redirect('/guys')
    })
}

function newGuy(req, res) {
    res.render('new', {
        id: req.params.id
    })

}

function deleteName(req, res) {
    Guy.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/guys')
    })
}

function index(req, res) {
    Guy.find({})
    .then((guys) => {
        res.render('guys', { 
            title: 'Guy List',
            guys
         })
    })
}

function create(req, res) {
  req.body.sexy = !!req.body.sexy;
    Guy.create(req.body)
    .then(() => {
        res.redirect('/guys')
    })
}