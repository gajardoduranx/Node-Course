import { readJSON } from "../../utils.js";
import { randomUUID } from "node:crypto";

const movies = readJSON("./movies.json");

export class MovieModel {
    static async getAll ({ genre }) {
        if(genre) {
            return movies.filter(movie => movie.genre.some(g => g.toLowerCase()) === genre.toLowerCase())
        }
        return movies;
    }

    static async getById ({ id }) {
        const movie = movies.find(movie => movie.id === id);
        return movie
    }

    static async create ({ data }) {
        const newMovie = {
            id: randomUUID(),
            ...data
        }
        movies.push(newMovie)

        return newMovie
    }

    static async update ({ id, data }) {
        const movieIndex = movies.findIndex(movie => movie.id == id)
        if (movieIndex === -1) return res.status(404).json({error: 'Movie not found'})

        movies[movieIndex] = {
            ...movies[movieIndex],
            ...data
        }
        
        return movies[movieIndex]
    }
    static async delete ({ id }) {
        const movieIndex = movies.findIndex(movie => movie.id === id)

        if (movieIndex === -1) {
            return res.status(404).json({ message: 'Movie not found' })
        }
        movies.splice(movieIndex, 1)

        return {message: 'Movie deleted successfully'}
    }
}