import { ParentComponent } from "solid-js"
import NavBar from "./NavBar"

const ScreenLayout: ParentComponent<{}> = props => {
    return (
        <div class="flex flex-col h-[100vh]">
            <section class="flex-1">{props.children}</section>
        </div>
    )
}

export default ScreenLayout
