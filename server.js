import http from 'http'
import express from 'express'
import app from './app.js'
import { createServer } from 'vite'

async function startServer() {
  try {
    const vite = await createServer({
      server: {
        middlewareMode: true,
      },
    })

    const server = express()

    // Add middleware
    server.use(app)
    server.use(vite.middlewares)

    // Start HTTP server
    const httpServer = http.createServer(server)
    const port = process.env.PORT || 3000
    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(1)
  }
}

startServer()