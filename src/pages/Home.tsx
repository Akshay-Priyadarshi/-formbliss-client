import { Component } from "solid-js"
import Layout from "../components/Layout"
import DynamicForm from "../components/DynamicForm"
import registrationForm from "../forms/registration.json"

const Home: Component<{}> = () => {
    return (
        <Layout>
            <DynamicForm form={registrationForm} />
        </Layout>
    )
}

export default Home
