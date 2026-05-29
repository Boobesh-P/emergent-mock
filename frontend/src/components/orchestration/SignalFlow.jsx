"/**
 * SignalFlow
 * A compact, decorative-but-meaningful animated SVG for hero / accents.
 * Three signal channels travelling left → right with offset timing
 * (mirrors the SapSynk mark: three layered data flows).
 */
export default function SignalFlow({ height = 220, dark = false }) {
    const stroke = dark ? \"rgba(255,255,255,0.16)\" : \"rgba(27,58,92,0.10)\";
    const accent1 = dark ? \"#4A7FCB\" : \"#0F6FBF\";
    const accent2 = dark ? \"#7BA5DC\" : \"#4A7FCB\";
    const accent3 = dark ? \"#A9C4E6\" : \"#1B3A5C\";

    return (
        <svg
            viewBox=\"0 0 1000 240\"
            className=\"w-full\"
            style={{ height }}
            role=\"img\"
            aria-label=\"Signal flow\"
        >
            <defs>
                <linearGradient id=\"sig-fade\" x1=\"0\" x2=\"1\">
                    <stop offset=\"0%\" stopColor=\"#0F6FBF\" stopOpacity=\"0\" />
                    <stop offset=\"40%\" stopColor=\"#0F6FBF\" stopOpacity=\"0.5\" />
                    <stop offset=\"100%\" stopColor=\"#4A7FCB\" stopOpacity=\"0\" />
                </linearGradient>
            </defs>

            {/* base ghost paths */}
            <path
                d=\"M0 80 C 250 30, 500 130, 1000 70\"
                stroke={stroke}
                strokeWidth=\"1\"
                fill=\"none\"
            />
            <path
                d=\"M0 120 C 280 70, 520 170, 1000 110\"
                stroke={stroke}
                strokeWidth=\"1\"
                fill=\"none\"
            />
            <path
                d=\"M0 160 C 250 110, 540 200, 1000 150\"
                stroke={stroke}
                strokeWidth=\"1\"
                fill=\"none\"
            />

            {/* animated overlays */}
            <path
                d=\"M0 80 C 250 30, 500 130, 1000 70\"
                stroke={accent1}
                strokeWidth=\"1.4\"
                fill=\"none\"
                className=\"flow-path\"
                strokeLinecap=\"round\"
            />
            <path
                d=\"M0 120 C 280 70, 520 170, 1000 110\"
                stroke={accent2}
                strokeWidth=\"1.4\"
                fill=\"none\"
                className=\"flow-path\"
                strokeLinecap=\"round\"
                style={{ animationDelay: \"0.4s\" }}
            />
            <path
                d=\"M0 160 C 250 110, 540 200, 1000 150\"
                stroke={accent3}
                strokeWidth=\"1.4\"
                fill=\"none\"
                className=\"flow-path\"
                strokeLinecap=\"round\"
                style={{ animationDelay: \"0.8s\" }}
            />

            {/* travelling pulses */}
            <circle r=\"3\" fill={accent1}>
                <animateMotion
                    dur=\"4.4s\"
                    repeatCount=\"indefinite\"
                    path=\"M0 80 C 250 30, 500 130, 1000 70\"
                />
            </circle>
            <circle r=\"3\" fill={accent2}>
                <animateMotion
                    dur=\"5s\"
                    begin=\"0.6s\"
                    repeatCount=\"indefinite\"
                    path=\"M0 120 C 280 70, 520 170, 1000 110\"
                />
            </circle>
            <circle r=\"3\" fill={accent3}>
                <animateMotion
                    dur=\"5.6s\"
                    begin=\"1.2s\"
                    repeatCount=\"indefinite\"
                    path=\"M0 160 C 250 110, 540 200, 1000 150\"
                />
            </circle>
        </svg>
    );
}
"