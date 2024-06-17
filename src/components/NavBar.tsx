import { Component } from "solid-js"

const NavBar: Component<{}> = () => {
    return (
        <div class="flex justify-between">
            <button class="flex items-center">
                <img
                    src="src/assets/android-chrome-512x512.png"
                    alt="Logo"
                    class="w-6 h-6"
                />
                <div class="w-2"></div>
                <h1 class="text-2xl">FormBliss</h1>
            </button>
            <ul class="flex">
                <li class="ml-4 text-lg">
                    <button type="button">Sign Up</button>
                </li>
                <li class="ml-4 text-lg">
                    <button>Login</button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
