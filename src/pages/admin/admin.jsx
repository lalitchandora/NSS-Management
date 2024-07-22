import { Outlet } from "react-router";
import NavAdmin from "../../components/NavAdmin";
import SidePanelAdmin from "../../components/SidePanelAdmin";

export default function Admin() {
    return (
        <div className="flex h-screen flex-col bg-slate-100">
            <NavAdmin />
            <div className="flex h-full">
                <SidePanelAdmin />
                <Outlet />
            </div>
        </div>
    );
}
