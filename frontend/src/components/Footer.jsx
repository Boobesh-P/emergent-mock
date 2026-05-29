"import { Link } from \"react-router-dom\";
import { SapSynkMark } from \"./Navbar\";
import { CONTACT, MAIL_HREF, TEL_HREF, WA_HREF } from \"../lib/contact\";

export default function Footer() {
    return (
        <footer
            data-testid=\"site-footer\"
            className=\"relative bg-violet text-light noise overflow-hidden\"
        >
            <div className=\"container-app py-20 grid md:grid-cols-12 gap-12 relative z-10\">
                <div className=\"md:col-span-5\">
                    <div className=\"flex items-center gap-3\">
                        <SapSynkMark size={28} />
                        <span className=\"font-display text-[22px] tracking-tighter\">
                            SapSynk
                        </span>
                    </div>
                    <p className=\"mt-6 text-[15px] text-light/70 max-w-sm leading-relaxed\">
                        Communication operations infrastructure for businesses
                        that cannot afford to miss a client.
                    </p>
                    <p className=\"mt-8 font-mono-label text-light/50\">
                        {CONTACT.city}
                    </p>
                </div>

                <div className=\"md:col-span-3\">
                    <p className=\"font-mono-label text-light/50\">Navigate</p>
                    <ul className=\"mt-4 space-y-3 text-[15px]\">
                        <li>
                            <Link
                                to=\"/\"
                                data-testid=\"footer-link-home\"
                                className=\"hover:text-purple transition-colors\"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=\"/pricing\"
                                data-testid=\"footer-link-pricing\"
                                className=\"hover:text-purple transition-colors\"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=\"/about\"
                                data-testid=\"footer-link-about\"
                                className=\"hover:text-purple transition-colors\"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className=\"md:col-span-4\">
                    <p className=\"font-mono-label text-light/50\">Reach us</p>
                    <ul className=\"mt-4 space-y-3 text-[15px]\">
                        <li>
                            <a
                                href={TEL_HREF}
                                data-testid=\"footer-phone\"
                                className=\"flex items-center gap-3 group\"
                            >
                                <span className=\"font-mono text-[11px] text-light/40 group-hover:text-purple\">
                                    01
                                </span>
                                Direct call · +91 96884 17688
                            </a>
                        </li>
                        <li>
                            <a
                                href={WA_HREF}
                                target=\"_blank\"
                                rel=\"noreferrer\"
                                data-testid=\"footer-whatsapp\"
                                className=\"flex items-center gap-3 group\"
                            >
                                <span className=\"font-mono text-[11px] text-light/40 group-hover:text-purple\">
                                    02
                                </span>
                                WhatsApp chat
                            </a>
                        </li>
                        <li>
                            <a
                                href={MAIL_HREF}
                                data-testid=\"footer-email\"
                                className=\"flex items-center gap-3 group\"
                            >
                                <span className=\"font-mono text-[11px] text-light/40 group-hover:text-purple\">
                                    03
                                </span>
                                {CONTACT.email}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className=\"border-t border-white/10 relative z-10\">
                <div className=\"container-app py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3\">
                    <p className=\"font-mono-label text-light/40\">
                        © SapSynk — Communication operations infrastructure
                    </p>
                    <p className=\"font-mono-label text-light/40\">
                        Built for businesses that route every call
                    </p>
                </div>
            </div>
        </footer>
    );
}
"