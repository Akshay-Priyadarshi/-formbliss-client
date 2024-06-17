import { A } from "@solidjs/router"
import { Component } from "solid-js"
import Logo from "./Logo"

const NavBar: Component<{}> = () => {
    return (
        <div class="flex justify-between items-center py-[2rem] px-[4rem]">
            <Logo />
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
