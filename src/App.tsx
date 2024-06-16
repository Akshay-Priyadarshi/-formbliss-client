import type { Component } from "solid-js"
import DynamicForm from "./components/DynamicForm"
import registrationForm from "./forms/registration.json"

const App: Component = () => {
    return (
        <div class="flex items-center justify-center">
            <DynamicForm form={registrationForm} />
        </div>
    )
}

export default App
