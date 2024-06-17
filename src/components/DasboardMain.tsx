import { ParentComponent } from "solid-js"

interface Props {}

const DasboardMain: ParentComponent<Props> = props => {
    return <div>{props.children}</div>
}

export default DasboardMain
