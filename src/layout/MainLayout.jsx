import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

const MainLayout = () => {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 1,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);


    return (
        <div className="bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1220] dark:text-[#F9FAFB] ">
            <Navbar></Navbar>
            <main className="pt-16">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;