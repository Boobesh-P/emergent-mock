"import { Link } from \"react-router-dom\";
import { motion } from \"framer-motion\";
import SignalFlow from \"../components/orchestration/SignalFlow\";
import RoutingDiagram from \"../components/orchestration/RoutingDiagram\";
import WorkflowSequence from \"../components/orchestration/WorkflowSequence\";
import { MAIL_HREF, TEL_HREF, WA_HREF } from \"../lib/contact\";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function Home() {
    return (
        <div data-testid=\"home-page\">
            {/* HERO */}
            <Hero />

            {/* WORKFLOW DEMONSTRATION */}
            <WorkflowDemo />

            {/* COMMUNICATION OVERLOAD PROBLEM */}
            <CommunicationOverload />

            {/* OPERATIONAL UNDERSTANDING */}
            <OperationalUnderstanding />

            {/* TRUST & RELIABILITY */}
            <TrustReliability />

            {/* DEPLOYMENT PROCESS */}
            <DeploymentProcess />

            {/* FINAL CTA */}
            <FinalCTA />
        </div>
    );
}

function Hero() {
    return (
        <section
            data-testid=\"hero-section\"
            className=\"relative pt-[140px] pb-[120px] overflow-hidden\"
        >
            <div className=\"absolute inset-0 bg-grid opacity-60\" aria-hidden />
            <div
                className=\"absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full\"
                style={{
                    background:
                        \"radial-gradient(closest-side, rgba(74,127,203,0.18), transparent 70%)\",
                }}
                aria-hidden
            />

            <div className=\"container-app relative\">
                <motion.div
                    variants={fadeUp}
                    initial=\"hidden\"
                    animate=\"show\"
                    custom={0}
                    className=\"eyebrow\"
                >
                    Communication operations infrastructure
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    initial=\"hidden\"
                    animate=\"show\"
                    custom={1}
                    className=\"hero-display text-navy mt-6 text-[44px] sm:text-[64px] md:text-[88px] max-w-[14ch]\"
                >
                    Never lose <span className=\"italic-emphasis\">clients</span>
                    {\" \"}to communication overload.
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial=\"hidden\"
                    animate=\"show\"
                    custom={2}
                    className=\"mt-8 max-w-xl text-[17px] text-graphite leading-relaxed\"
                >
                    SapSynk is the communication layer that holds your operations
                    together — answering, routing, confirming, and following up
                    on every contact, without asking your team to be in two
                    places at once.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    initial=\"hidden\"
                    animate=\"show\"
                    custom={3}
                    className=\"mt-10 flex flex-wrap items-center gap-3\"
                >
                    <a
                        href=\"#workflow-demo\"
                        data-testid=\"hero-watch-workflow\"
                        className=\"btn-primary\"
                    >
                        Watch Live Workflow
                        <ArrowDown />
                    </a>
                    <Link
                        to=\"/pricing\"
                        data-testid=\"hero-view-pricing\"
                        className=\"btn-ghost\"
                    >
                        View Pricing
                    </Link>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial=\"hidden\"
                    animate=\"show\"
                    custom={4}
                    className=\"mt-20 relative\"
                >
                    <SignalFlow height={200} />
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial=\"hidden\"
                    animate=\"show\"
                    custom={5}
                    className=\"mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl\"
                >
                    <HeroPillar
                        num=\"01\"
                        title=\"Operationally present\"
                        body=\"Functions in the background of every interaction — routes, confirms, follows up, escalates.\"
                    />
                    <HeroPillar
                        num=\"02\"
                        title=\"Quietly confident\"
                        body=\"No AI theatrics. The work shows up in outcomes, not vocabulary.\"
                    />
                    <HeroPillar
                        num=\"03\"
                        title=\"System-oriented\"
                        body=\"Thinks in workflows. Every event is part of a larger operational loop.\"
                    />
                </motion.div>
            </div>
        </section>
    );
}

function HeroPillar({ num, title, body }) {
    return (
        <div>
            <p className=\"font-mono-label\">{num}</p>
            <p className=\"mt-3 font-display text-navy text-[18px] tracking-tight\">
                {title}
            </p>
            <p className=\"mt-2 text-[14px] text-graphite leading-relaxed\">
                {body}
            </p>
        </div>
    );
}

function WorkflowDemo() {
    return (
        <section
            id=\"workflow-demo\"
            data-testid=\"workflow-demo-section\"
            className=\"py-24 bg-light scroll-mt-24\"
        >
            <div className=\"container-app\">
                <div className=\"grid md:grid-cols-12 gap-10 items-end mb-12\">
                    <div className=\"md:col-span-7\">
                        <span className=\"eyebrow\">Section · 01 · Workflow</span>
                        <h2 className=\"h2-display text-navy mt-5 text-[34px] md:text-[48px] max-w-[18ch]\">
                            One contact in.{\" \"}
                            <span className=\"italic-emphasis\">Every step</span>{\" \"}
                            handled.
                        </h2>
                    </div>
                    <div className=\"md:col-span-5\">
                        <p className=\"text-[15px] text-graphite leading-relaxed\">
                            A single inbound contact triggers a sequence the
                            front desk used to carry alone. SapSynk routes it
                            across the right channels, captures intent, updates
                            the records, and closes the loop.
                        </p>
                    </div>
                </div>

                <RoutingDiagram />
            </div>
        </section>
    );
}

function CommunicationOverload() {
    const points = [
        {
            num: \"01\",
            title: \"Missed calls compound\",
            body: \"Every unanswered ring is a client comparing you to the next option. The damage isn't the call — it's the comparison.\",
        },
        {
            num: \"02\",
            title: \"Peak hours have no overflow\",
            body: \"When the desk is full, communication has nowhere to go. Operations stall at exactly the moments you can't afford them to.\",
        },
        {
            num: \"03\",
            title: \"After-hours leakage\",
            body: \"Inquiry doesn't follow your hours. The contacts you miss between close and open never come back at 9am.\",
        },
        {
            num: \"04\",
            title: \"Multi-branch coordination\",
            body: \"Each branch handles its own threads, with no shared view. Routing, confirmations, and follow-ups fragment across teams.\",
        },
        {
            num: \"05\",
            title: \"Walk-ins and calls collide\",
            body: \"Floor activity and incoming communication share the same human. One of them is always being deprioritized.\",
        },
        {
            num: \"06\",
            title: \"Follow-ups slip\",
            body: \"Repeat business depends on continuity. Manual follow-ups depend on memory. Memory loses.\",
        },
    ];

    return (
        <section
            data-testid=\"overload-section\"
            className=\"py-24 bg-frost/60 border-y border-line\"
        >
            <div className=\"container-app\">
                <div className=\"max-w-3xl\">
                    <span className=\"eyebrow\">
                        Section · 02 · Communication overload
                    </span>
                    <h2 className=\"h2-display text-navy mt-5 text-[34px] md:text-[48px]\">
                        Communication isn't dropping because your team isn't
                        trying. It's dropping because{\" \"}
                        <span className=\"italic-emphasis\">
                            human throughput has a ceiling.
                        </span>
                    </h2>
                </div>

                <div className=\"mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5\">
                    {points.map((p, i) => (
                        <motion.div
                            key={p.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: \"-50px\" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.05,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className=\"card-soft\"
                            data-testid={`overload-card-${p.num}`}
                        >
                            <div className=\"flex items-center justify-between mb-4\">
                                <span className=\"font-mono-label\">{p.num}</span>
                                <span className=\"w-6 h-px bg-purple\" />
                            </div>
                            <p className=\"font-display text-navy text-[20px] tracking-tight\">
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
    );
}

function OperationalUnderstanding() {
    return (
        <section
            data-testid=\"operational-section\"
            className=\"py-24 bg-light\"
        >
            <div className=\"container-app\">
                <div className=\"grid md:grid-cols-12 gap-10 items-end mb-14\">
                    <div className=\"md:col-span-7\">
                        <span className=\"eyebrow\">
                            Section · 03 · Operational understanding
                        </span>
                        <h2 className=\"h2-display text-navy mt-5 text-[34px] md:text-[48px]\">
                            We don't replace the workflow you already run.{\" \"}
                            <span className=\"italic-emphasis\">
                                We hold the parts that drop.
                            </span>
                        </h2>
                    </div>
                    <div className=\"md:col-span-5\">
                        <p className=\"text-[15px] text-graphite leading-relaxed\">
                            Before any system gets deployed, we map the
                            communication shape of your operations — who picks
                            up, what they capture, where it gets recorded, and
                            which moments break first.
                        </p>
                    </div>
                </div>

                <WorkflowSequence />
            </div>
        </section>
    );
}

function TrustReliability() {
    const trust = [
        {
            num: \"01\",
            title: \"Demo-driven trust\",
            body: \"Trust is earned through workflow demonstration, not slogans. You see the system run on your scenarios before anything goes live.\",
        },
        {
            num: \"02\",
            title: \"Monitoring visibility\",
            body: \"Every action SapSynk takes is visible — logs, bookings, decisions, escalations. Nothing happens in a place you can't audit.\",
        },
        {
            num: \"03\",
            title: \"Fallback systems\",
            body: \"We design assuming failure is possible — not impossible. Every workflow has a defined fallback, not a hope.\",
        },
        {
            num: \"04\",
            title: \"Human escalation\",
            body: \"Anything outside SapSynk's defined operating envelope routes to your team — never executed blindly.\",
        },
        {
            num: \"05\",
            title: \"Low-risk deployment\",
            body: \"A 15-day validation window keeps deployment on your terms. The system proves itself in your operations before commitment compounds.\",
        },
    ];

    return (
        <section
            data-testid=\"trust-section\"
            className=\"py-24 bg-navy text-light relative overflow-hidden\"
        >
            <div className=\"absolute inset-0 bg-grid-dark opacity-40\" aria-hidden />
            <div
                className=\"absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full\"
                style={{
                    background:
                        \"radial-gradient(closest-side, rgba(74,127,203,0.20), transparent 70%)\",
                }}
                aria-hidden
            />

            <div className=\"container-app relative\">
                <div className=\"max-w-3xl\">
                    <span className=\"eyebrow !text-light/50\">
                        Section · 04 · Trust & reliability
                    </span>
                    <h2 className=\"h2-display text-light mt-5 text-[34px] md:text-[48px]\">
                        Reliability isn't claimed.{\" \"}
                        <span className=\"italic-emphasis !text-purple\">
                            It's the shape of the architecture.
                        </span>
                    </h2>
                </div>

                <div className=\"mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5\">
                    {trust.map((t, i) => (
                        <motion.div
                            key={t.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: \"-40px\" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.06,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className=\"rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple/50 transition-colors duration-300\"
                            data-testid={`trust-card-${t.num}`}
                        >
                            <p className=\"font-mono-label !text-purple\">
                                {t.num}
                            </p>
                            <p className=\"mt-3 font-display text-light text-[18px] tracking-tight\">
                                {t.title}
                            </p>
                            <p className=\"mt-3 text-[13px] text-light/70 leading-relaxed\">
                                {t.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DeploymentProcess() {
    const stages = [
        {
            tag: \"Day 01\",
            title: \"Documents & discovery\",
            body: \"Proposal, service agreement, and scope of work issued. Discovery begins — workflow questions, business understanding, integration map.\",
        },
        {
            tag: \"Week 01\",
            title: \"Build\",
            body: \"Workflow mapping, integrations, routing logic, and continuity rules are set up to match how your operations actually move.\",
        },
        {
            tag: \"End of Week 01\",
            title: \"Customer review\",
            body: \"End-to-end walkthrough on your scenarios. You see the system run before it touches production.\",
        },
        {
            tag: \"Week 02\",
            title: \"Testing & refinement\",
            body: \"Stress testing, edge cases, and refinement. Everything that can break is rehearsed before it can break for a client.\",
        },
        {
            tag: \"Deployment\",
            title: \"Managed support period\",
            body: \"The system goes live with a managed support window — calibrations, observations, and adjustments as your operations respond.\",
        },
    ];

    return (
        <section
            data-testid=\"deployment-section\"
            className=\"py-24 bg-light\"
        >
            <div className=\"container-app\">
                <div className=\"grid md:grid-cols-12 gap-10 items-end mb-14\">
                    <div className=\"md:col-span-7\">
                        <span className=\"eyebrow\">
                            Section · 05 · Deployment process
                        </span>
                        <h2 className=\"h2-display text-navy mt-5 text-[34px] md:text-[48px]\">
                            Predictable deployment.{\" \"}
                            <span className=\"italic-emphasis\">
                                Not a project of unknown length.
                            </span>
                        </h2>
                    </div>
                    <div className=\"md:col-span-5\">
                        <p className=\"text-[15px] text-graphite leading-relaxed\">
                            SapSynk is deployed on a fixed cadence so you know
                            exactly where you are at any point — from first
                            document to managed go-live.
                        </p>
                    </div>
                </div>

                <ol className=\"relative border-l border-line ml-2\">
                    {stages.map((s, i) => (
                        <motion.li
                            key={s.tag}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: \"-40px\" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.06,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className=\"pl-10 pb-10 relative\"
                            data-testid={`deployment-step-${i + 1}`}
                        >
                            <span className=\"absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-blue ring-4 ring-light\" />
                            <p className=\"font-mono-label text-blue\">{s.tag}</p>
                            <p className=\"mt-2 font-display text-navy text-[24px] tracking-tight\">
                                {s.title}
                            </p>
                            <p className=\"mt-3 max-w-2xl text-[15px] text-graphite leading-relaxed\">
                                {s.body}
                            </p>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

function FinalCTA() {
    return (
        <section
            data-testid=\"final-cta-section\"
            className=\"py-24 bg-violet text-light relative overflow-hidden\"
        >
            <div className=\"absolute inset-0 bg-grid-dark opacity-30\" aria-hidden />
            <div className=\"container-app relative\">
                <div className=\"grid md:grid-cols-12 gap-10 items-center\">
                    <div className=\"md:col-span-7\">
                        <span className=\"eyebrow !text-light/50\">
                            Move
                        </span>
                        <h2 className=\"h2-display text-light mt-5 text-[36px] md:text-[56px] max-w-[18ch]\">
                            Talk to the team{\" \"}
                            <span className=\"italic-emphasis !text-purple\">
                                that handles communication for a living.
                            </span>
                        </h2>
                        <p className=\"mt-6 max-w-xl text-[15px] text-light/70 leading-relaxed\">
                            We'll walk you through a workflow built around your
                            operations. No deck. No pitch. Just the system running
                            on your scenarios.
                        </p>
                    </div>

                    <div className=\"md:col-span-5\">
                        <div className=\"rounded-xl border border-white/10 bg-white/[0.03] p-6\">
                            <p className=\"font-mono-label !text-purple\">
                                Reach us
                            </p>
                            <div className=\"mt-5 space-y-3\">
                                <a
                                    href={TEL_HREF}
                                    data-testid=\"cta-call\"
                                    className=\"flex items-center justify-between border border-white/10 rounded-md px-4 py-4 hover:border-purple/60 transition-colors\"
                                >
                                    <span>
                                        <span className=\"block font-mono-label !text-light/40\">
                                            Direct call
                                        </span>
                                        <span className=\"block mt-1 text-[16px] font-medium\">
                                            +91 96884 17688
                                        </span>
                                    </span>
                                    <ArrowRight />
                                </a>
                                <a
                                    href={WA_HREF}
                                    target=\"_blank\"
                                    rel=\"noreferrer\"
                                    data-testid=\"cta-whatsapp\"
                                    className=\"flex items-center justify-between border border-white/10 rounded-md px-4 py-4 hover:border-purple/60 transition-colors\"
                                >
                                    <span>
                                        <span className=\"block font-mono-label !text-light/40\">
                                            WhatsApp chat
                                        </span>
                                        <span className=\"block mt-1 text-[16px] font-medium\">
                                            Open conversation
                                        </span>
                                    </span>
                                    <ArrowRight />
                                </a>
                                <a
                                    href={MAIL_HREF}
                                    data-testid=\"cta-email\"
                                    className=\"flex items-center justify-between border border-white/10 rounded-md px-4 py-4 hover:border-purple/60 transition-colors\"
                                >
                                    <span>
                                        <span className=\"block font-mono-label !text-light/40\">
                                            Email
                                        </span>
                                        <span className=\"block mt-1 text-[16px] font-medium\">
                                            sapsynk@gmail.com
                                        </span>
                                    </span>
                                    <ArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ArrowRight() {
    return (
        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">
            <path
                d=\"M3 8h10M9 4l4 4-4 4\"
                stroke=\"currentColor\"
                strokeWidth=\"1.4\"
                strokeLinecap=\"round\"
                strokeLinejoin=\"round\"
            />
        </svg>
    );
}

function ArrowDown() {
    return (
        <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\">
            <path
                d=\"M8 3v10M4 9l4 4 4-4\"
                stroke=\"currentColor\"
                strokeWidth=\"1.4\"
                strokeLinecap=\"round\"
                strokeLinejoin=\"round\"
            />
        </svg>
    );
}
"