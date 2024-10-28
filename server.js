const experss = require('express')
const cors = require('cors') // 引入 cors
const app = experss()
const { addrbook } = require('./database/model')
app.use(experss.json())

app.use(cors()) // 使用 cors 中间件，允许所有跨域请求

// 查询
app.get('/getbook', async (req, res) => {
    try {
        const entries = await addrbook.findAll()
        res.status(200).json(entries)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// 新增
app.post('/addrbook', async (req, res) => {
    try {
        const newEntry = await addrbook.create(req.body)
        res.status(201).json(newEntry)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// 编辑
app.put('/addrbook/:id', async (req, res) => {
    try {
        const { id } = req.params

        const [updated] = await addrbook.update(req.body, {
            where: { id }
        })

        if (updated) {
            const updatedEntry = await addrbook.findByPk(id)
            res.status(200).json(updatedEntry)
        } else {
            res.status(404).json({ message: 'Entry not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// 删除
app.delete('/addrbook/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await addrbook.destroy({
            where: { id }
        })
        if (deleted) {
            res.status(200).json({ message: 'Entry deleted' })
        } else {
            res.status(404).json({ message: 'Entry not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.listen('3000', () => console.log('Server is running on port 3000'))