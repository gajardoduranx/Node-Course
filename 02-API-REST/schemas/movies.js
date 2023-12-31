const z = require('zod')

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'Title must be a string',
        required_error: 'Title is required'
    }),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10).default(5),
    poster: z.string().url({
        message: 'Poster must be a valid URL'
    }),
    genre: z.array(
        z.enum(['Action', 'Drama', 'Comedy', 'Crime', 'Horror', 'Thriller', 'Fantasy', 'Documentary', 'Sci-Fi'])
    )
})
function validateMovie(movie) {
    return movieSchema.safeParse(movie)
}
function validatePartialMovie(input) {
    const partialMovieSchema = movieSchema.partial()
    return partialMovieSchema.safeParse(input)
}

module.exports = {
    validateMovie,
    validatePartialMovie
}