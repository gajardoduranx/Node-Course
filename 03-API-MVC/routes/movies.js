import { Router } from "express";
import { validateMovie, validatePartialMovie } from './schemas/movies.js' 
import { MovieModel } from "../models/movies.js";

const router = Router()

router.get('/', async (req, res) => {
    const { genre } = req.query 
    const movies = await MovieModel.getAll({ genre })
    res.json(movies)
}
)

router.get('/:id', async (req, res) => { // path-to-regexp
    const { id } = req.params
    const movie =  await MovieModel.getById({ id })
    if (movie) return res.json(movie)
    res.status(404).json({ error: 'Movie not found' })
})

router.post('/', async (req, res) => {
    
    const result = validateMovie(req.body)

    if(result.error) {
        // 422 Unprocessable Entity
        return res.status(400).json({error: JSON.parse(result.error.message)})
    }

    const newMovie = await MovieModel.create({ input: result.data })
    res.status(201).json(newMovie)

})

router.patch('/:id', async (req, res) => {
    const result = validatePartialMovie(req.body)

    if (!result.success) {
        return res.status(400).json({error: JSON.parse(result.error.message)})  
    }
    const { id } = req.params
    
    const updateMovie = await MovieModel.update({ id, data: result.data })

    return res.status(200).json(updateMovie)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    
    const movieDelete = await MovieModel.delete({ id })
  
    return res.json(movieDelete)
  })

export default router

