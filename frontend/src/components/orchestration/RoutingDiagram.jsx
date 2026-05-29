"import { motion } from "framer-motion";

/**
 * RoutingDiagram
 * Animated SVG showing the SapSynk communication routing logic:
 * Inbound call → SapSynk routing node → branches/agents → confirmation back to CRM
 *
 * Pure SVG. No fake metrics. No status text invented.
 * Labels mirror BI doc workflow concepts only.
 */
export default function RoutingDiagram() {
    return (
        <div
            data-testid="routing-diagram"
            className="relative w-full rounded-xl border border-line bg-white p-6 md:p-10 overflow-hidden"
        >
            <div className="flex items-center justify-between mb-6">
                <span className="font-mono-label">
                    Workflow · communication routing
                </span>
                <span className="font-mono-label">SapSynk · 03</span>
            </div>

            <svg
                viewBox="0 0 900 360"
                className="w-full h-auto"
                role="img"
                aria-label="Communication routing diagram"
            >
                {/* subtle grid */}
                <defs>
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="#E3EDF8"
                            strokeWidth="1"
                        />
                    </pattern>
                    <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0F6FBF" stopOpacity="0.15" />
                        <stop offset="50%" stopColor="#0F6FBF" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#4A7FCB" stopOpacity="0.15" />
                    </linearGradient>
                    <radialGradient id="node-glow">
                        <stop offset="0%" stopColor="#0F6FBF" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#0F6FBF" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <rect width="900" height="360" fill="url(#grid)" />

                {/* Inbound node */}
                <g>
                    <circle cx="100" cy="180" r="48" fill="url(#node-glow)" />
                    <circle
                        cx="100"
                        cy="180"
                        r="22"
                        fill="#F8FAFD"
                        stroke="#1B3A5C"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M91 178c0-4 3-7 7-7h4l2-3h2v20h-2l-2-3h-4c-4 0-7-3-7-7z"
                        fill="#1B3A5C"
                    />
                    <text
                        x="100"
                        y="238"
                        textAnchor="middle"
                        fontFamily="Space Mono"
                        fontSize="11"
                        fill="#6E8299"
                        letterSpacing="1"
                    >
                        INBOUND
                    </text>
                </g>

                {/* Central SapSynk routing node */}
                <g>
                    <circle cx="450" cy="180" r="74" fill="url(#node-glow)" />
                    <rect
                        x="394"
                        y="146"
                        width="112"
                        height="68"
                        rx="10"
                        fill="#1B3A5C"
                    />
                    <text
                        x="450"
                        y="178"
                        textAnchor="middle"
                        fontFamily="Fraunces"
                        fontSize="16"
                        fontWeight="400"
                        fill="#F8FAFD"
                    >
                        SapSynk
                    </text>
                    <text
                        x="450"
                        y="196"
                        textAnchor="middle"
                        fontFamily="Space Mono"
                        fontSize="10"
                        fill="#4A7FCB"
                        letterSpacing="1.4"
                    >
                        ORCHESTRATION
                    </text>
                </g>

                {/* Right side targets */}
                <RightNode
                    x={780}
                    y={70}
                    label="ROUTE"
                    sub="Branch A"
                    accent="#0F6FBF"
                />
                <RightNode
                    x={780}
                    y={180}
                    label="CONFIRM"
                    sub="Appointment"
                    accent="#4A7FCB"
                />
                <RightNode
                    x={780}
                    y={290}
                    label="FOLLOW-UP"
                    sub="Continuity"
                    accent="#0F6FBF"
                />

                {/* Inbound -> center */}
                <path
                    d="M122 180 C 210 180, 280 180, 376 180"
                    stroke="url(#line-grad)"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M122 180 C 210 180, 280 180, 376 180"
                    stroke="#0F6FBF"
                    strokeWidth="2"
                    fill="none"
                    className="flow-path"
                    strokeLinecap="round"
                />

                {/* Center -> right branches */}
                <Connector d="M524 180 C 600 180, 660 90, 750 80" />
                <Connector d="M524 180 C 620 180, 660 180, 750 180" delay={0.2} />
                <Connector d="M524 180 C 600 180, 660 280, 750 280" delay={0.4} />

                {/* Travelling dots for activity */}
                <TravellingDot
                    path="M122 180 C 210 180, 280 180, 376 180"
                    duration={3}
                />
                <TravellingDot
                    path="M524 180 C 600 180, 660 90, 750 80"
                    duration={3.2}
                    delay={0.6}
                />
                <TravellingDot
                    path="M524 180 C 620 180, 660 180, 750 180"
                    duration={3.4}
                    delay={1.2}
                    color="#4A7FCB"
                />
                <TravellingDot
                    path="M524 180 C 600 180, 660 280, 750 280"
                    duration={3.6}
                    delay={1.8}
                />
            </svg>

            <div className="grid grid-cols-3 gap-4 mt-8">
                <Caption num="01" title="Inbound" body="Calls arrive through any channel — voice, chat, missed-call recovery." />
                <Caption num="02" title="Orchestration" body="Intent is captured, routed to the correct branch or agent, and logged." />
                <Caption num="03" title="Continuity" body="Confirmations, follow-ups, and escalations are handled without dropping the thread." />
            </div>
        </div>
    );
}

function RightNode({ x, y, label, sub, accent }) {
    return (
        <g transform={`translate(${x - 60} ${y - 22})`}>
            <rect
                width="120"
                height="44"
                rx="22"
                fill="#FFFFFF"
                stroke="#D7E2EE"
            />
            <circle cx="18" cy="22" r="4" fill={accent} />
            <text
                x="32"
                y="20"
                fontFamily="Space Mono"
                fontSize="10"
                fill="#1B3A5C"
                letterSpacing="1.2"
            >
                {label}
            </text>
            <text
                x="32"
                y="34"
                fontFamily="DM Sans"
                fontSize="11"
                fill="#6E8299"
            >
                {sub}
            </text>
        </g>
    );
}

function Connector({ d, delay = 0 }) {
    return (
        <>
            <path d={d} stroke="#D7E2EE" strokeWidth="1.2" fill="none" />
            <path
                d={d}
                stroke="#0F6FBF"
                strokeWidth="1.6"
                fill="none"
                className="flow-path"
                strokeLinecap="round"
                style={{ animationDelay: `${delay}s` }}
            />
        </>
    );
}

function TravellingDot({ path, duration = 3, delay = 0, color = "#0F6FBF" }) {
    return (
        <motion.circle
            r="3.5"
            fill={color}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <animateMotion
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
                path={path}
            />
        </motion.circle>
    );
}

function Caption({ num, title, body }) {
    return (
        <div>
            <p className="font-mono-label text-graphite">{num}</p>
            <p className="mt-2 font-display text-navy text-[18px] tracking-tight">
                {title}
            </p>
            <p className="mt-2 text-[13px] text-smoke leading-relaxed">{body}</p>
        </div>
    );
}
"