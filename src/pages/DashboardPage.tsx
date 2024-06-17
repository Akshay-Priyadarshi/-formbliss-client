import { ParentComponent } from "solid-js"
import DashboardSidebar from "../components/DashboardSidebar"
import DasboardMain from "../components/DasboardMain"
import ScreenLayout from "../components/ScreenLayout"

const DashboardPage: ParentComponent = props => {
    return (
        <ScreenLayout>
            <div class="flex w-full h-full">
                <DashboardSidebar />
                <DasboardMain children={props.children} />
            </div>
        </ScreenLayout>
    )
}

export default DashboardPage
