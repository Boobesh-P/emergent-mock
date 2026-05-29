"import { Link, NavLink, useLocation } from \"react-router-dom\";
import { useEffect, useState } from \"react\";

const navItems = [
    { to: \"/\", label: \"Home\", end: true },
    { to: \"/pricing\", label: \"Pricing\" },
    { to: \"/about\", label: \"About\" },
];

const SapSynkMark = ({ size = 28 }) => (
    <svg
        width={size}
        height={size}
        viewBox=\"0 0 32 32\"
        fill=\"none\"
        aria-label=\"SapSynk mark\"
    >
        <path
            d=\"M5 9 C 10 9, 14 13, 19 13 C 24 13, 27 11, 27 11\"
            stroke=\"#1B3A5C\"
            strokeWidth=\"2\"
            strokeLinecap=\"round\"
            fill=\"none\"
        />
        <path
            d=\"M5 16 C 10 16, 14 20, 19 20 C 24 20, 27 18, 27 18\"
            stroke=\"#0F6FBF\"
            strokeWidth=\"2\"
            strokeLinecap=\"round\"
            fill=\"none\"
        />
        <path
            d=\"M5 23 C 10 23, 14 27, 19 27 C 24 27, 27 25, 27 25\"
            stroke=\"#4A7FCB\"
            strokeWidth=\"2\"
            strokeLinecap=\"round\"
            fill=\"none\"
        />
    </svg>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener(\"scroll\", onScroll, { passive: true });
        return () => window.removeEventListener(\"scroll\", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <header
            data-testid=\"site-navbar\"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-op ${
                scrolled
                    ? \"bg-light/85 backdrop-blur-md border-b border-line\"
                    : \"bg-transparent border-b border-transparent\"
            }`}
        >
            <div className=\"container-app flex items-center justify-between h-[72px]\">
                <Link
                    to=\"/\"
                    data-testid=\"nav-logo\"
                    className=\"flex items-center gap-3 group\"
                >
                    <SapSynkMark size={26} />
                    <span className=\"font-display text-[20px] tracking-tighter text-navy\">
                        SapSynk
                    </span>
                </Link>

                <nav className=\"hidden md:flex items-center gap-1\">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            data-testid={`nav-link-${item.label.toLowerCase()}`}
                            className={({ isActive }) =>
                                `relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                                    isActive
                                        ? \"text-navy\"
                                        : \"text-graphite hover:text-navy\"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <span className=\"inline-flex flex-col items-center\">
                                    {item.label}
                                    <span
                                        className={`mt-1 h-[1px] transition-all duration-300 ease-op ${
                                            isActive
                                                ? \"w-4 bg-blue\"
                                                : \"w-0 bg-blue\"
                                        }`}
                                    />
                                </span>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className=\"hidden md:flex items-center gap-3\">
                    <a
                        href=\"tel:+919688417688\"
                        data-testid=\"nav-call-btn\"
                        className=\"font-mono-label hover:text-navy transition-colors\"
                    >
                        +91 96884 17688
                    </a>
                    <Link
                        to=\"/about\"
                        data-testid=\"nav-cta-btn\"
                        className=\"btn-primary !py-[10px] !px-4 !text-[13px]\"
                    >
                        Talk to us
                        <span aria-hidden>→</span>
                    </Link>
                </div>

                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label=\"Toggle menu\"
                    data-testid=\"nav-mobile-toggle\"
                    className=\"md:hidden p-2 rounded-md border border-line text-navy\"
                >
                    <svg
                        width=\"20\"
                        height=\"20\"
                        viewBox=\"0 0 24 24\"
                        fill=\"none\"
                        stroke=\"currentColor\"
                        strokeWidth=\"1.6\"
                    >
                        {open ? (
                            <path d=\"M6 6l12 12M18 6L6 18\" strokeLinecap=\"round\" />
                        ) : (
                            <>
                                <path d=\"M4 7h16\" strokeLinecap=\"round\" />
                                <path d=\"M4 12h16\" strokeLinecap=\"round\" />
                                <path d=\"M4 17h16\" strokeLinecap=\"round\" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {open && (
                <div
                    data-testid=\"nav-mobile-menu\"
                    className=\"md:hidden border-t border-line bg-light/95 backdrop-blur-md\"
                >
                    <div className=\"container-app py-4 flex flex-col gap-1\">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `px-3 py-3 rounded-md text-[15px] ${
                                        isActive
                                            ? \"bg-frost text-navy\"
                                            : \"text-graphite hover:bg-frost\"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <div className=\"flex gap-2 pt-3\">
                            <a
                                href=\"tel:+919688417688\"
                                data-testid=\"mobile-call-btn\"
                                className=\"btn-ghost flex-1 justify-center\"
                            >
                                Call
                            </a>
                            <a
                                href=\"https://wa.me/919688417688\"
                                target=\"_blank\"
                                rel=\"noreferrer\"
                                data-testid=\"mobile-wa-btn\"
                                className=\"btn-primary flex-1 justify-center\"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { SapSynkMark };
"