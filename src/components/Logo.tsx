import { A } from "@solidjs/router"
import { Component } from "solid-js"

const Logo: Component = props => {
    return (
        <A href="/" class="flex items-center">
            <img
                src="/android-chrome-192x192.png"
                alt="Logo"
                class="w-10 h-10"
            />
            <div class="w-4"></div>
            <h1 class="text-4xl">FormBliss</h1>
        </A>
    )
}

export default Logo
