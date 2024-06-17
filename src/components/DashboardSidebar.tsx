import { Component } from "solid-js"
import Logo from "./Logo"
import { A } from "@solidjs/router"
import { RiDesignBrushLine } from "solid-icons/ri"
import { VsChecklist } from "solid-icons/vs"

interface Props {}

const DashboardSidebar: Component<Props> = props => {
    return (
        <div class="bg-slate-100 flex flex-col px-4 w-[20%]">
            <div class="my-4">
                <Logo />
            </div>
            <ul class="flex-1 py-4 flex flex-col ">
                <A href="/dashboard">
                    <li class="bg-slate-200 p-4 rounded-md">
                        <button class="border-black text-xl flex items-center">
                            <VsChecklist />
                            <div class="w-2"></div>
                            Forms
                        </button>
                    </li>
                </A>
                <div class="h-4"></div>
                <A href="/dashboard/design">
                    <li class="bg-slate-200 p-4 rounded-md">
                        <button class=" border-black text-xl flex items-center">
                            <RiDesignBrushLine />
                            <div class="w-2"></div>
                            Design
                        </button>
                    </li>
                </A>
            </ul>
        </div>
    )
}

export default DashboardSidebar
