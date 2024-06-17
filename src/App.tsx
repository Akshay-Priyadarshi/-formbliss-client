import type { Component } from "solid-js"
import Home from "./pages/Home"
import { Router, Route } from "@solidjs/router"
import DashboardPage from "./pages/DashboardPage"

const App: Component = () => {
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/dashboard" component={DashboardPage} />
        </Router>
    )
}

export default App
