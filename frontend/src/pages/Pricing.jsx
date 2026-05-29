import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SignalFlow from "../components/orchestration/SignalFlow";
import { MAIL_HREF, TEL_HREF, WA_HREF } from "../lib/contact";

const plans = [
    {
        id: "starter",
        name: "Starter",
        tag: "For focused operations",
        price: "₹5.00",
        unit: "per minute",
        description:
            "Communication basics, built for businesses that need every contact answered.",
        includes: [
            "Inbound call handling",
            "Appointment & inquiry routing",
            "Workflow-mapped responses",
            "Monitoring & logs",
            "Managed support window",
        ],
        cta: "Talk to us",
        highlight: false,
    },
    {
        id: "growth",
        name: "Growth",
        tag: "Primary deployment",
        price: "₹4.50",
        unit: "per minute",
        description:
            "Complete workflow package — built for businesses where communication scales with operations.",
        includes: [
            "Everything in Starter",
            "Multi-channel routing",
            "Follow-up continuity loops",
            "Branch coordination logic",
            "Escalation paths to your team",
            "Integration with your CRM & booking system",
        ],
        cta: "Talk to us",
        highlight: true,
    },
];

export default function Pricing() {
    return (
        <div data-testid="pricing-page" className="pt-[120px] pb-24">
            {/* Header */}
            <section className="relative pb-16">
                <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
                <div className="container-app relative">
                    <span className="eyebrow">Pricing · usage-based</span>
                    <h1 className="hero-display text-navy mt-6 text-[42px] sm:text-[60px] md:text-[80px] max-w-[16ch]">
                        Pay only for the{" "}
                        <span className="italic-emphasis">minutes</span>{" "}
                        SapSynk works.
                    </h1>
                    <p className="mt-6 max-w-xl text-[16px] text-graphite leading-relaxed">
                        No setup fees. No onboarding fees. Pricing is built
                        around usage so your spend tracks the work being done —
                        not the work being promised.
                    </p>
                    <div className="mt-10">
                        <SignalFlow height={120} />
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="py-12">
                <div className="container-app grid md:grid-cols-2 gap-6">
                    {plans.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            data-testid={`plan-card-${p.id}`}
                            className={`relative rounded-2xl p-8 md:p-10 border transition-colors duration-300 ${
                                p.highlight
                                    ? "bg-navy text-light border-navy"
                                    : "bg-white text-navy border-line hover:border-blue/40"
                            }`}
                        >
                            {p.highlight && (
                                <span className="absolute top-6 right-6 font-mono-label !text-purple">
                                    Primary
                                </span>
                            )}
                            <p
                                className={`font-mono-label ${
                                    p.highlight
                                        ? "!text-light/50"
                                        : ""
                                }`}
                            >
                                {p.tag}
                            </p>
                            <p
                                className={`mt-3 font-display text-[34px] tracking-tight ${
                                    p.highlight ? "text-light" : "text-navy"
                                }`}
                            >
                                {p.name}
                            </p>
                            <div className="mt-6 flex items-baseline gap-2">
                                <span
                                    className={`font-display text-[56px] leading-none tracking-tightest ${
                                        p.highlight ? "text-light" : "text-navy"
                                    }`}
                                >
                                    {p.price}
                                </span>
                                <span
                                    className={`text-[14px] ${
                                        p.highlight
                                            ? "text-light/60"
                                            : "text-graphite"
                                    }`}
                                >
                                    {p.unit}
                                </span>
                            </div>
                            <p
                                className={`mt-5 max-w-md text-[14px] leading-relaxed ${
                                    p.highlight
                                        ? "text-light/70"
                                        : "text-graphite"
                                }`}
                            >
                                {p.description}
                            </p>

                            <ul className="mt-8 space-y-3">
                                {p.includes.map((line, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-[14px]"
                                    >
                                        <Check highlight={p.highlight} />
                                        <span
                                            className={
                                                p.highlight
                                                    ? "text-light/85"
                                                    : "text-navy"
                                            }
                                        >
                                            {line}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={TEL_HREF}
                                    data-testid={`plan-${p.id}-call`}
                                    className={
                                        p.highlight
                                            ? "btn-dark"
                                            : "btn-primary"
                                    }
                                >
                                    {p.cta}
                                </a>
                                <a
                                    href={WA_HREF}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-testid={`plan-${p.id}-wa`}
                                    className={
                                        p.highlight
                                            ? "btn-primary"
                                            : "btn-ghost"
                                    }
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* What's included philosophy */}
            <section className="py-16">
                <div className="container-app grid md:grid-cols-12 gap-10 items-start">
                    <div className="md:col-span-5">
                        <span className="eyebrow">How we price</span>
                        <h2 className="h2-display text-navy mt-5 text-[28px] md:text-[36px]">
                            Usage tracks the work.{" "}
                            <span className="italic-emphasis">
                                Nothing else.
                            </span>
                        </h2>
                    </div>
                    <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
                        <Principle
                            num="01"
                            title="No setup fee"
                            body="Deployment work is part of the engagement, not a separate invoice. Your spend begins when SapSynk handles its first minute."
                        />
                        <Principle
                            num="02"
                            title="No onboarding fee"
                            body="Workflow mapping, integration, and review happen before deployment — without a one-time onboarding charge layered on top."
                        />
                        <Principle
                            num="03"
                            title="Per-minute billing"
                            body="You pay for handled minutes. Idle infrastructure is on us — your invoice mirrors the operational load SapSynk is carrying."
                        />
                        <Principle
                            num="04"
                            title="Plan you can outgrow"
                            body="Move from Starter to Growth as your operations expand. Pricing follows scale, not promises."
                        />
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-20">
                <div className="container-app">
                    <div className="rounded-2xl bg-violet text-light p-10 md:p-14 relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden />
                        <div className="relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-7">
                                <h3 className="h2-display text-light text-[28px] md:text-[40px]">
                                    Not sure which plan fits your operations?
                                </h3>
                                <p className="mt-4 max-w-lg text-[15px] text-light/70 leading-relaxed">
                                    Tell us how many contacts you handle in a
                                    week and where the gaps appear. We'll
                                    recommend the plan that matches the work.
                                </p>
                            </div>
                            <div className="md:col-span-5 flex flex-wrap gap-3">
                                <a
                                    href={TEL_HREF}
                                    data-testid="pricing-call-cta"
                                    className="btn-primary"
                                >
                                    Direct call
                                </a>
                                <a
                                    href={WA_HREF}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-testid="pricing-wa-cta"
                                    className="btn-dark"
                                >
                                    WhatsApp
                                </a>
                                <a
                                    href={MAIL_HREF}
                                    data-testid="pricing-mail-cta"
                                    className="btn-dark"
                                >
                                    Email us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Check({ highlight }) {
    return (
        <svg
            className="mt-1 shrink-0"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                d="M3 8.5l3 3 7-7"
                stroke={highlight ? "#4A7FCB" : "#0F6FBF"}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function Principle({ num, title, body }) {
    return (
        <div className="card-soft">
            <p className="font-mono-label">{num}</p>
            <p className="mt-3 font-display text-navy text-[20px] tracking-tight">
                {title}
            </p>
            <p className="mt-3 text-[14px] text-graphite leading-relaxed">
                {body}
            </p>
        </div>
    );
}
