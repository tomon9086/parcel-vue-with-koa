const Koa = require("koa")
const Router = require("koa-router")
const serve = require("koa-static")
const body = require("koa-body")
const logger = require("koa-logger")
const path = require("path")

const app = new Koa()
const router = new Router()

router.get("/ping", async ctx => {
	ctx.body = "pong"
})

// app.use(serve(path.resolve(__dirname, "public")))
app.use(serve(path.resolve(__dirname, "../dist")))
app.use(logger())
app.use(router.routes())

app.listen(2000)
