import { Router } from 'express'
const router = Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})

router.get('/about', (req, res) => {
  res.send('About birds')
})

router.put('/', (req, res) => {
  res.send('You can put data here')
})

router.post('/', (req, res) => {
  res.send('You can post data here')
})

router.delete('/', (req, res) => {
  res.send('You can delete data here')
})

export default router