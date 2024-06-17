import { A } from "@solidjs/router"
import { Component } from "solid-js"

const NavBar: Component<{}> = () => {
    return (
        <div class="flex justify-between items-center">
            <A href="/" class="flex items-center">
                <img
                    src="src/assets/android-chrome-512x512.png"
                    alt="Logo"
                    class="w-10 h-10"
                />
                <div class="w-4"></div>
                <h1 class="text-4xl">FormBliss</h1>
            </A>
            <ul class="flex">
                <li class="text-xl">
                    <A href="/dashboard">
                        <button class="bg-slate-700 text-white py-2 px-4 rounded-md">
                            Sign Up
                        </button>
                    </A>
                </li>
                <div class="w-10"></div>
                <li class="text-xl">
                    <A href="/dashboard">
                        <button class="bg-slate-700 text-white py-2 px-4 rounded-md">
                            Login
                        </button>
                    </A>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
