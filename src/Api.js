import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export const load = (lig) => api.get('books', load)
export const loadGenres = () => api.get('genres')
export const saveBooks = (newBooks) => api.post('books', newBooks)
export const updateBooks = (books) => api.put('books/' + books.id, books)
export const loadBooksByGenre = (genre) => api.get('books?genre=' + genre)
export const deleteBooks = (id) => api.delete('books/' + id)
export const loadBooksById = (id) => api.get('books/' + id)
const apis = {
  load,
  loadGenres,
  saveBooks,
  loadBooksByGenre,
  deleteBooks,
  loadBooksById,
  updateBooks
}
export default apis
