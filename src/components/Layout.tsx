import { ParentComponent } from "solid-js"
import NavBar from "./NavBar"

const Layout: ParentComponent<{}> = props => {
    return (
        <div>
            <NavBar />
            <section class="py-[2rem] px-[4rem]">{props.children}</section>
        </div>
    )
}

export default Layout
