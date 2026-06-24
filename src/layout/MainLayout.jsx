import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const MainLayout = () => {
    const { pathname } = useLocation();
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.5,
            smoothWheel: true,
        });

        function raf(time) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        lenisRef.current?.scrollTo(0, { immediate: true }); // Lenis এর স্মুথ স্ক্রল রিসেট
    }, [pathname]);

    return (
        <div className="bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1220] dark:text-[#F9FAFB]">
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;