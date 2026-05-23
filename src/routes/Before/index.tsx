import { Outlet } from "react-router-dom";
import CardProfile from "../../components/CardProfile";
import Header from "../../components/Header";

export default function Before() {

    return (
        <>
            <Header />
            <CardProfile />
            <Outlet />
        </>
    );
}