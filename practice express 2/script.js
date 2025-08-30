import express from 'express';
import birds from './routes/birds.js';

const app = express();
const PORT = 3000;  

app.use('/birds', birds)

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/search', (req,res)=>{
    const term=req.query.term;
    res.send(`Search Results for ${term}`)
})

app.get('/user', (req, res)=>{
    res.json({
        name: 'Vidhi',
        age: 20,
        role: 'learning-web-dev'
    })
})

app.get('/user/:slug', (req, res)=>{
    res.send(`Hello ${req.params.slug}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});