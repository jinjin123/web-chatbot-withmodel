const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()

const { Nlp } = require('./packages/nlp/src');
const { fs } = require('./packages/request/src');
const trainnlp = require('./train-nlp');
const nlp = new Nlp({ languages: ['en'], threshold: 0.5 });
nlp.container.register('fs', fs);


app.use(cors())
app.use(express.json())

require('dotenv').config()


// const { GoogleGenerativeAI } = require('@google/generative-ai')

// const genAI = new GoogleGenerativeAI(process.env.API_KEY)

app.post('/gemini', async (req, res) => {
    // const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    console.log(req.body.message)
    // const chat = model.startChat({
    //     history: req.body.history
    // })
    // const msg = req.body.message
    // const result = await chat.sendMessage(msg)
    // const response = await result.response
    // const text = response.text()
    await trainnlp(nlp);
    const result = await nlp.process(req.body.message);
    // console.log(line)
    console.log(result.answer)
    res.send(result.answer)
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))