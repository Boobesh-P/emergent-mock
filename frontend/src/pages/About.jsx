import { motion } from \"framer-motion\";
import SignalFlow from \"../components/orchestration/SignalFlow\";
import { CONTACT, MAIL_HREF, TEL_HREF, WA_HREF } from \"../lib/contact\";

export default function About() {
    return (
        <div data-testid=\"about-page\" className=\"pt-[120px] pb-24\">
            {/* Hero */}
            <section className=\"relative pb-16\">
                <div className=\"absolute inset-0 bg-grid opacity-60\" aria-hidden />
                <div className=\"container-app relative\">
                    <span className=\"eyebrow\">About SapSynk</span>
                    <h1 className=\"hero-display text-navy mt-6 text-[40px] sm:text-[56px] md:text-[72px] max-w-[18ch]\">
                        We are the{\" \"}
                        <span className=\"italic-emphasis\">infrastructure</span>{\" \"}
                        that holds communication together.
                    </h1>
                    <p className=\"mt-8 max-w-2xl text-[17px] text-graphite leading-relaxed\">
                        SapSynk is a communication operations company. We build
                        the layer between your team and every contact reaching
                        them — answering, routing, confirming, and following up,
                        so the work doesn't fall to whoever happens to be free.
                    </p>
                    <div className=\"mt-12\">
                        <SignalFlow height={140} />
                    </div>
                </div>
            </section>

            {/* What is SapSynk */}
            <section className=\"py-16 bg-light\">
                <div className=\"container-app grid md:grid-cols-12 gap-10 items-start\">
                    <div className=\"md:col-span-5\">
                        <span className=\"eyebrow\">01 · What we are</span>
                        <h2 className=\"h2-display text-navy mt-5 text-[32px] md:text-[42px]\">
                            A productized communication{\" \"}
                            <span className=\"italic-emphasis\">
                                operations system.
                            </span>
                        </h2>
                    </div>
                    <div className=\"md:col-span-7 space-y-6 text-[16px] text-graphite leading-relaxed\">
                        <p>
                            SapSynk is not an AI agency, a chatbot platform, or
                            a generic automation tool. We deploy a structured
                            communication system — sized to your operations —
                            that prevents client leakage caused by communication
                            overload.
                        </p>
                        <p>
                            Today, that means appointment handling, inquiry
                            management, follow-ups, branch routing, and
                            continuity across channels. Tomorrow, it means the
                            communication orchestration layer underlying complex
                            business workflows.
                        </p>
                        <p>
                            We sell outcomes, not vocabulary. The work shows up
                            in the contacts you no longer lose.
                        </p>
                    </div>
                </div>
            </section>

            {/* How we think */}
            <section className=\"py-16\">
                <div className=\"container-app\">
                    <div className=\"grid md:grid-cols-12 gap-10 items-end mb-12\">
                        <div className=\"md:col-span-7\">
                            <span className=\"eyebrow\">
                                02 · How we think about communication
                            </span>
                            <h2 className=\"h2-display text-navy mt-5 text-[32px] md:text-[42px]\">
                                Communication is{\" \"}
                                <span className=\"italic-emphasis\">
                                    infrastructure
                                </span>{\" \"}
                                that everyone treats as activity.
                            </h2>
                        </div>
                    </div>

                    <div className=\"grid md:grid-cols-3 gap-5\">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={p.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.08,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className=\"card-soft\"
                                data-testid={`about-pillar-${p.num}`}
                            >
                                <p className=\"font-mono-label\">{p.num}</p>
                                <p className=\"mt-3 font-display text-navy text-[22px] tracking-tight\">
                                    {p.title}
                                </p>
                                <p className=\"mt-3 text-[14px] text-graphite leading-relaxed\">
                                    {p.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What we avoid */}
            <section className=\"py-16 bg-navy text-light relative overflow-hidden\">
                <div className=\"absolute inset-0 bg-grid-dark opacity-30\" aria-hidden />
                <div className=\"container-app relative grid md:grid-cols-12 gap-10 items-start\">
                    <div className=\"md:col-span-5\">
                        <span className=\"eyebrow !text-light/50\">
                            03 · What we never sound like
                        </span>
                        <h2 className=\"h2-display text-light mt-5 text-[32px] md:text-[42px]\">
                            Quiet confidence{\" \"}
                            <span className=\"italic-emphasis !text-purple\">
                                beats theatrics.
                            </span>
                        </h2>
                    </div>
                    <div className=\"md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[15px] text-light/80\">
                        {avoid.map((a, i) => (
                            <div
                                key={i}
                                className=\"flex items-center gap-3 py-2 border-b border-white/10\"
                            >
                                <span className=\"font-mono text-[11px] text-purple\">
                                    ×
                                </span>
                                <span>{a}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id=\"contact\" className=\"py-20 scroll-mt-24\">
                <div className=\"container-app\">
                    <div className=\"grid md:grid-cols-12 gap-10 items-start\">
                        <div className=\"md:col-span-5\">
                            <span className=\"eyebrow\">04 · Contact</span>
                            <h2 className=\"h2-display text-navy mt-5 text-[32px] md:text-[44px]\">
                                Reach the{\" \"}
                                <span className=\"italic-emphasis\">
                                    team directly.
                                </span>
                            </h2>
                            <p className=\"mt-5 max-w-md text-[15px] text-graphite leading-relaxed\">
                                No forms. No queue. We pick up where you are
                                most comfortable — phone, WhatsApp, or email.
                            </p>
                            <p className=\"mt-8 font-mono-label text-graphite\">
                                Based in {CONTACT.city}
                            </p>
                        </div>

                        <div className=\"md:col-span-7 grid sm:grid-cols-3 gap-4\">
                            <ContactCard
                                num=\"01\"
                                label=\"Direct call\"
                                value=\"+91 96884 17688\"
                                href={TEL_HREF}
                                testid=\"about-contact-call\"
                            />
                            <ContactCard
                                num=\"02\"
                                label=\"WhatsApp\"
                                value=\"Open chat\"
                                href={WA_HREF}
                                external
                                testid=\"about-contact-wa\"
                            />
                            <ContactCard
                                num=\"03\"
                                label=\"Email\"
                                value={CONTACT.email}
                                href={MAIL_HREF}
                                testid=\"about-contact-mail\"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const pillars = [
    {
        num: \"01\",
        title: \"Operationally first\",
        body: \"We lead with what changes for you — not how the underlying technology works. Outcomes beat architecture.\",
    },
    {
        num: \"02\",
        title: \"Extract, don't impose\",
        body: \"We draw out the operational pain that already exists, rather than declaring what you need. Questions reveal more than statements.\",
    },
    {
        num: \"03\",
        title: \"Human continuity\",
        body: \"SapSynk handles the operational load. Your team handles relationships. The line between them stays clear.\",
    },
    {
        num: \"04\",
        title: \"Specificity equals trust\",
        body: \"Vague claims erode credibility. Specific operational outcomes build it. We talk in moves, not slogans.\",
    },
    {
        num: \"05\",
        title: \"Voice as foundation\",
        body: \"Voice is moving from premium to continuous. Communication systems must connect deeply with the rest of the business.\",
    },
    {
        num: \"06\",
        title: \"Reliability over reach\",
        body: \"We do not chase verticals before we have earned them. Depth in one before width across many.\",
    },
];

const avoid = [
    \"AI buzzwords\",
    \"Futuristic hype\",
    \"Revolutionary claims\",
    \"Game-changing language\",
    \"Robotic, mechanical metaphors\",
    \"Cinematic startup theatrics\",
    \"Fake dashboards & metrics\",
    \"Disruption vocabulary\",
];

function ContactCard({ num, label, value, href, external, testid }) {
    return (
        <a
            href={href}
            target={external ? \"_blank\" : undefined}
            rel={external ? \"noreferrer\" : undefined}
            data-testid={testid}
            className=\"card-soft flex flex-col justify-between min-h-[180px] group\"
        >
            <p className=\"font-mono-label\">{num}</p>
            <div>
                <p className=\"mt-3 font-mono-label text-graphite\">{label}</p>
                <p className=\"mt-2 font-display text-navy text-[20px] tracking-tight\">
                    {value}
                </p>
                <span className=\"inline-flex items-center gap-2 mt-4 text-blue text-[13px] font-medium\">
                    Open{\" \"}
                    <span className=\"transition-transform duration-300 group-hover:translate-x-1\">
                        →
                    </span>
                </span>
            </div>
        </a>
    );
}
