export class Router {
    routes = {}

    add(routeName, page, styleClass, cssPath) {
        this.routes[routeName] = { page, styleClass, cssPath }
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route.page)
            .then((data) => data.text())
            .then((html) => {
                const app = document.querySelector("#app")
                const page = document.querySelector("html")
                const cssLink = document.querySelector("#page-css")

                app.innerHTML = html
                page.className = route.styleClass
                cssLink.href = `./pages/${route.styleClass}.css`
            })
    }
}
