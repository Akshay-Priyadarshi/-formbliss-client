import type { Component } from "solid-js"
import HomePage from "./pages/HomePage"
import { Router, Route } from "@solidjs/router"
import DashboardPage from "./pages/DashboardPage"
import DesignForm from "./components/DesignForm"
import ListForm from "./components/ListForm"

const App: Component = () => {
    return (
        <Router>
            <Route path="/" component={HomePage} />
            <Route path="/dashboard" component={DashboardPage}>
                <Route path="/design" component={DesignForm} />
                <Route path="/" component={ListForm} />
            </Route>
        </Router>
    )
}

export default App
