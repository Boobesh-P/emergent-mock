"/**
 * WorkflowSequence
 * Operational understanding visual: a vertical sequence showing
 * how an inbound call flows through coordination today (the BI doc
 * workflow), with breakdown points highlighted on the side.
 */
export default function WorkflowSequence() {
    const steps = [
        {
            num: "01",
            label: "Inbound contact",
            body: "A client reaches out by phone, message, or after-hours channel.",
        },
        {
            num: "02",
            label: "Front desk captures",
            body: "Preference, branch, time, identity — all captured manually.",
        },
        {
            num: "03",
            label: "Records updated",
            body: "Booking software, CRM, internal records — each updated by hand.",
        },
        {
            num: "04",
            label: "Walk-ins & calls collide",
            body: "Front desk runs in parallel with floor traffic and follow-ups.",
        },
    ];

    return (
        <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
                <div className="relative pl-10">
                    <span
                        className="absolute left-[15px] top-2 bottom-2 w-px bg-line"
                        aria-hidden
                    />
                    <span
                        className="absolute left-[12px] top-2 w-[7px] h-[7px] rounded-full bg-blue"
                        aria-hidden
                    />
                    <span
                        className="absolute left-[12px] bottom-2 w-[7px] h-[7px] rounded-full bg-purple"
                        aria-hidden
                    />
                    {steps.map((s, i) => (
                        <div
                            key={s.num}
                            className="relative pb-10 last:pb-2"
                            data-testid={`workflow-step-${s.num}`}
                        >
                            <span className="absolute -left-[34px] top-1 font-mono-label text-blue">
                                {s.num}
                            </span>
                            <p className="font-display text-navy text-[22px] tracking-tight">
                                {s.label}
                            </p>
                            <p className="mt-2 text-[15px] text-graphite leading-relaxed max-w-md">
                                {s.body}
                            </p>
                            {i < steps.length - 1 && (
                                <div className="mt-4 flex items-center gap-2 text-smoke">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                    >
                                        <path
                                            d="M5 1v8M2 6l3 3 3-3"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            fill="none"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <aside className="md:col-span-5">
                <div className="card-soft">
                    <p className="font-mono-label text-graphite">
                        Where it breaks
                    </p>
                    <ul className="mt-5 space-y-4">
                        {[
                            "Peak hours overload the front desk",
                            "After-hours calls are missed entirely",
                            "Multi-branch coordination fragments",
                            "Walk-ins reduce call-handling capacity",
                            "Follow-ups become inconsistent",
                        ].map((line, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 text-[14px] text-navy"
                            >
                                <span className="mt-[6px] w-2 h-2 rounded-full bg-purple shrink-0" />
                                <span>{line}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-line">
                        <p className="font-mono-label text-graphite">
                            Cost of the gap
                        </p>
                        <p className="mt-3 font-display text-navy text-[20px] tracking-tight leading-snug">
                            Every contact that doesn't get answered becomes a
                            client choosing someone else.
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    );
}
"