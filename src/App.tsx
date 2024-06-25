import type { Component } from "solid-js"
import HomePage from "./pages/HomePage"
import { Router, Route } from "@solidjs/router"
import DashboardPage from "./pages/DashboardPage"
import FormList from "./components/FormList"
import { QueryClientProvider } from "@tanstack/solid-query"
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools"
import axios from "axios"
import { queryClient } from "./clients/solidquery.client"
import Designer from "./components/Designer"
import FieldList from "./components/FieldList"
import FormDesigner from "./components/FormDesigner"

axios.defaults.baseURL = "http://localhost:8080"

const App: Component = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SolidQueryDevtools initialIsOpen />
            <Router>
                <Route path="/" component={HomePage} />
                <Route path="/dashboard" component={DashboardPage}>
                    <Route path="/fields" component={FieldList} />
                    <Route path="/forms" component={FormList} />
                    <Route path="/" component={Designer}>
                        <Route path="/:formId?" component={FormDesigner} />
                        <Route path="/:fieldId?" component={FormDesigner} />
                    </Route>
                </Route>
            </Router>
        </QueryClientProvider>
    )
}

export default App
