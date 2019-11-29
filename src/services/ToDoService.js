import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:4700`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTodos() {
    return apiClient.get('/todos')
  },
  getTodoById(id) {
    return apiClient.get('/todos/' + id)
  },
  postTodo(event) {
    return apiClient.post('/todos/', todo)
  }
}
