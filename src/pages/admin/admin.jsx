import { Outlet } from "react-router";
import Nav from "../../components/Nav";
import SidePanelAdmin from "../../components/SidePanelAdmin";

export default function Admin() {
    return (
        <div className="flex h-screen flex-col bg-slate-100">
            <Nav />
            <div className="flex h-full">
                <SidePanelAdmin />
                <Outlet />
            </div>
        </div>
    );
}
