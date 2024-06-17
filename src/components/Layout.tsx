import { ParentComponent } from "solid-js"
import NavBar from "./NavBar"

const Layout: ParentComponent<{}> = props => {
    return (
        <div class="px-[6rem] py-[3rem]">
            <NavBar />
            <section class="py-[2rem]">{props.children}</section>
        </div>
    )
}

export default Layout
