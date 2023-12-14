import { Navbar } from "@components/navbar/navbarComponent";
import { Outlet } from "react-router-dom";

export function ParentComponent()  {
    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    );
}