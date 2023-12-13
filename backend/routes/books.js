const express = require('express')
const Book = require('../models/BookModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET all books'})
})

router.get('/:id' , (req, res)=> {
    res.json({mssg: 'GET a single book'})
})

router.post('/',(req, res) => {

    const{title, datePublished, author} = req.body

    try {
        const book = Book.create({title, datePublished, author})
        res.status(200).json(book)
    } catch(error){
        res.status(400).json({error: error.message})

    }
    
})

router.delete('/:id',(req, res) => {
    res.json({mssg: 'DELETE a book'})
})

router.patch('/:id',(req, res) => {
    res.json({mssg: 'UPDATE a book'})
})

module.exports = router