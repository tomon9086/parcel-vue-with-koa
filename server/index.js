const Koa = require("koa")
const Router = require("koa-router")
const serve = require("koa-static")
const body = require("koa-body")
const logger = require("koa-logger")
const path = require("path")

const args = process.argv.slice(2)
const mode = args[0]	// undefined -> production mode

const app = new Koa()
const router = new Router()

router.get("/ping", async ctx => {
	ctx.body = "pong"
})

switch(mode) {
	case "debug":
		app.use(serve(path.resolve(__dirname, "../dist")))
		break
	default:
		app.use(serve(path.resolve(__dirname, "../build")))
}
app.use(logger())
app.use(router.routes())

const port = mode ? 2000 : 80
app.listen(port)
