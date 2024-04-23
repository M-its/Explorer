import { Router } from "./router.js"

const router = new Router()

router.add("/", "./Explorer/spa-universe/pages/home.html", "home")
router.add("/exploration", "./pages/exploration.html", "exploration")
router.add("/universe", "./pages/universe.html", "universe")
router.add(404, "./pages/404.html", "404")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
