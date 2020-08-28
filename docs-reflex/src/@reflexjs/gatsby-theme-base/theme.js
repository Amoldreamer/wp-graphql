import base from "@reflexjs/preset-base"

export default {
    preset: base,
    colors: {
        text: "#222222",
        background: "#fff",
        heading: "#444",
        headingHover: "#444",
        primary: "#5469d4",
        primaryHover: "#6f8eef",
        secondary: "#0e2339",
        secondaryHover: "#0e4a62",
        accent: "#f7901c",
        accentHover: "#f7522c",
        muted: "#f1f6fa",
        mutedHover: "#cccccc",
        border: "#ebece9",
        borderHover: "#b9bdb3",
        graphqlPink: "#E10098",
        modes: {
            dark: {
                text: "#ffffff",
                background: "#333",
                accent: "#444444",
                accentHover: "#666666",
                primary: "#6f8eef",
                primaryHover: "#5469d4",
                secondary: "#f7901c",
                secondaryHover: "#f7522c",
                muted: "#2a2a3c",
                border: "#444",
                borderHover: "#b9bdb3",
            }
        }
    },
    fonts: {
        body: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "Georgia, serif",
        monospace: "Menlo, monospace",
    },
    prism: {
        text: "#d6deeb",
        background: "#006633",
        comment: "#93b4b4",
        string: "#addb67",
        var: "#d6deeb",
        number: "#f78c6c",
        constant: "#82aaff",
        punctuation: "#c792ea",
        className: "#ffcb8b",
        tag: "#7fdbca",
        boolean: "#ff5874",
        property: "#80cbc4",
        namespace: "#b2ccd6",
        highlight: "#243E73",
        file: "#92B5B2",
    },
}
