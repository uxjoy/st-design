const tokenization = {
  collection: "token",
  mode: "sharetrip",
  totalvariables: 212,
  groups: {
    text: [
      {
        name: "text/white",
        hex: "#ffffff",
        ref: "base/white",
      },
      {
        name: "text/dark",
        hex: "#1a2b3d",
        ref: "neutral/900",
      },

      {
        name: "text/base",
        hex: "#3e4957",
        ref: "neutral/800",
      },
      {
        name: "text/gray",
        hex: "#5a6573",
        ref: "neutral/700",
      },
      {
        name: "text/light",
        hex: "#77818c",
        ref: "neutral/600",
      },
      {
        name: "text/placeholder",
        hex: "#9ba6b2",
        ref: "neutral/500",
      },
      {
        name: "text/disabled",
        hex: "#9ba6b2",
        ref: "neutral/500",
      },
      {
        name: "text/primary/base",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "text/primary/disabled",
        hex: "#88c0ff",
        ref: "primary/300",
      },
      {
        name: "text/stpay/base",
        hex: "#073e67",
        ref: "stpay/600",
      },
      {
        name: "text/stpay/disabled",
        hex: "#9cb2c2",
        ref: "stpay/300",
      },
      {
        name: "text/secondary/base",
        hex: "#f27d00",
        ref: "secondary/500",
      },
      {
        name: "text/secondary/disabled",
        hex: "#ffc485",
        ref: "secondary/200",
      },
      {
        name: "text/tertiary/base",
        hex: "#a855f7",
        ref: "tertiary/500",
      },
      {
        name: "text/tertiary/disabled",
        hex: "#d8b4fe",
        ref: "tertiary/300",
      },
      {
        name: "text/success/base",
        hex: "#16a34a",
        ref: "success/600",
      },
      {
        name: "text/success/disabled",
        hex: "#86efac",
        ref: "success/300",
      },
      {
        name: "text/warning/base",
        hex: "#eab308",
        ref: "warnings/500",
      },
      {
        name: "text/warning/disabled",
        hex: "#fde047",
        ref: "warnings/300",
      },
      {
        name: "text/error/base",
        hex: "#ef4444",
        ref: "error/500",
      },
      {
        name: "text/error/disabled",
        hex: "#fca5a5",
        ref: "error/300",
      },
      {
        name: "text/info/base",
        hex: "#0ea5e9",
        ref: "info/500",
      },
      {
        name: "text/info/disabled",
        hex: "#7dd3fc",
        ref: "info/300",
      },
    ],
    background: [
      {
        name: "bg/deeper",
        hex: "#d8e1eb",
        ref: "neutral/200",
      },
      {
        name: "bg/deep",
        hex: "#e2e8f0",
        ref: "neutral/100",
      },
      {
        name: "bg/base",
        hex: "#ebf0f5",
        ref: "neutral/75",
      },
      {
        name: "bg/light",
        hex: "#f5f7fa",
        ref: "neutral/50",
      },
      {
        name: "bg/lightest",
        hex: "#fafbfc",
        ref: "neutral/25",
      },
      {
        name: "bg/primary/base",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "bg/primary/light",
        hex: "#d7eaff",
        ref: "primary/100",
      },
      {
        name: "bg/primary/lighter",
        hex: "#edf5ff",
        ref: "primary/50",
      },
      {
        name: "bg/secondary/base",
        hex: "#f27d00",
        ref: "secondary/500",
      },
      {
        name: "bg/secondary/light",
        hex: "#ffe3c5",
        ref: "secondary/100",
      },
      {
        name: "bg/secondary/lighter",
        hex: "#fff5ea",
        ref: "secondary/50",
      },
      {
        name: "bg/tertiary/base",
        hex: "#a855f7",
        ref: "tertiary/500",
      },
      {
        name: "bg/tertiary/light",
        hex: "#f3e8ff",
        ref: "tertiary/100",
      },
      {
        name: "bg/tertiary/lighter",
        hex: "#faf5ff",
        ref: "tertiary/50",
      },
      {
        name: "bg/success/base",
        hex: "#22c55e",
        ref: "success/500",
      },
      {
        name: "bg/success/light",
        hex: "#dcfce7",
        ref: "success/100",
      },
      {
        name: "bg/success/lighter",
        hex: "#f0fdf4",
        ref: "success/50",
      },
      {
        name: "bg/warning/base",
        hex: "#eab308",
        ref: "warnings/500",
      },
      {
        name: "bg/warning/light",
        hex: "#fef9c3",
        ref: "warnings/100",
      },
      {
        name: "bg/warning/lighter",
        hex: "#fefce8",
        ref: "warnings/50",
      },
      {
        name: "bg/error/base",
        hex: "#ef4444",
        ref: "error/500",
      },
      {
        name: "bg/error/light",
        hex: "#fee2e2",
        ref: "error/100",
      },
      {
        name: "bg/error/lighter",
        hex: "#fef2f2",
        ref: "error/50",
      },
      {
        name: "bg/info/base",
        hex: "#0ea5e9",
        ref: "info/500",
      },
      {
        name: "bg/info/light",
        hex: "#e0f2fe",
        ref: "info/100",
      },
      {
        name: "bg/info/lighter",
        hex: "#f0f9ff",
        ref: "info/50",
      },
      {
        name: "bg/stpay/base",
        hex: "#073e67",
        ref: "stpay/600",
      },
      {
        name: "bg/stpay/light",
        hex: "#e6ecf0",
        ref: "stpay/100",
      },
      {
        name: "bg/stpay/lighter",
        hex: "#f0f3f5",
        ref: "stpay/50",
      },
    ],
    border: [
      {
        name: "border/deeper",
        hex: "#d8e1eb",
        ref: "neutral/200",
      },
      {
        name: "border/deep",
        hex: "#e2e8f0",
        ref: "neutral/100",
      },
      {
        name: "border/base",
        hex: "#ebf0f5",
        ref: "neutral/75",
      },
      {
        name: "border/light",
        hex: "#f5f7fa",
        ref: "neutral/50",
      },
      {
        name: "border/primary/base",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "border/primary/disabled",
        hex: "#88c0ff",
        ref: "primary/300",
      },
      {
        name: "border/primary/light",
        hex: "#b9daff",
        ref: "primary/200",
      },
      {
        name: "border/primary/lighter",
        hex: "#d7eaff",
        ref: "primary/100",
      },
      {
        name: "border/secondary/base",
        hex: "#f27d00",
        ref: "secondary/500",
      },
      {
        name: "border/secondary/disabled",
        hex: "#ffc485",
        ref: "secondary/200",
      },
      {
        name: "border/secondary/light",
        hex: "#ffc485",
        ref: "secondary/200",
      },
      {
        name: "border/secondary/lighter",
        hex: "#ffe3c5",
        ref: "secondary/100",
      },
      {
        name: "border/tertiary/base",
        hex: "#a855f7",
        ref: "tertiary/500",
      },
      {
        name: "border/tertiary/disabled",
        hex: "#d8b4fe",
        ref: "tertiary/300",
      },
      {
        name: "border/tertiary/light",
        hex: "#e9d5ff",
        ref: "tertiary/200",
      },
      {
        name: "border/tertiary/lighter",
        hex: "#f3e8ff",
        ref: "tertiary/100",
      },
      {
        name: "border/success/base",
        hex: "#22c55e",
        ref: "success/500",
      },
      {
        name: "border/success/disabled",
        hex: "#86efac",
        ref: "success/300",
      },
      {
        name: "border/success/light",
        hex: "#bbf7d0",
        ref: "success/200",
      },
      {
        name: "border/success/lighter",
        hex: "#dcfce7",
        ref: "success/100",
      },
      {
        name: "border/warning/base",
        hex: "#eab308",
        ref: "warnings/500",
      },
      {
        name: "border/warning/disabled",
        hex: "#fde047",
        ref: "warnings/300",
      },
      {
        name: "border/warning/light",
        hex: "#fef08a",
        ref: "warnings/200",
      },
      {
        name: "border/warning/lighter",
        hex: "#fef9c3",
        ref: "warnings/100",
      },
      {
        name: "border/error/base",
        hex: "#ef4444",
        ref: "error/500",
      },
      {
        name: "border/error/disabled",
        hex: "#fca5a5",
        ref: "error/300",
      },
      {
        name: "border/error/light",
        hex: "#fecaca",
        ref: "error/200",
      },
      {
        name: "border/error/lighter",
        hex: "#fee2e2",
        ref: "error/100",
      },
      {
        name: "border/info/base",
        hex: "#0ea5e9",
        ref: "info/500",
      },
      {
        name: "border/info/disabled",
        hex: "#7dd3fc",
        ref: "info/300",
      },
      {
        name: "border/info/light",
        hex: "#bae6fd",
        ref: "info/200",
      },
      {
        name: "border/info/lighter",
        hex: "#e0f2fe",
        ref: "info/100",
      },
      {
        name: "border/stpay/base",
        hex: "#073e67",
        ref: "stpay/600",
      },
      {
        name: "border/stpay/disabled",
        hex: "#9cb2c2",
        ref: "stpay/300",
      },
      {
        name: "border/stpay/light",
        hex: "#cdd8e1",
        ref: "stpay/200",
      },
      {
        name: "border/stpay/lighter",
        hex: "#e6ecf0",
        ref: "stpay/100",
      },
    ],
    icon: [
      {
        name: "icon/deep",
        hex: "#1a2b3d",
        ref: "neutral/900",
      },
      {
        name: "icon/base",
        hex: "#3e4957",
        ref: "neutral/800",
      },
      {
        name: "icon/gray",
        hex: "#5a6573",
        ref: "neutral/700",
      },
      {
        name: "icon/light",
        hex: "#77818c",
        ref: "neutral/600",
      },
      {
        name: "icon/placeholder",
        hex: "#9ba6b2",
        ref: "neutral/500",
      },
      {
        name: "icon/disabled",
        hex: "#9ba6b2",
        ref: "neutral/500",
      },
      {
        name: "icon/white",
        hex: "#ffffff",
        ref: "base/white",
      },
      {
        name: "icon/primary/base",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "icon/primary/light",
        hex: "#d7eaff",
        ref: "primary/100",
      },
      {
        name: "icon/primary/disabled",
        hex: "#88c0ff",
        ref: "primary/300",
      },
      {
        name: "icon/secondary/base",
        hex: "#f27d00",
        ref: "secondary/500",
      },
      {
        name: "icon/secondary/light",
        hex: "#ffe3c5",
        ref: "secondary/100",
      },
      {
        name: "icon/secondary/disabled",
        hex: "#ffc485",
        ref: "secondary/200",
      },
      {
        name: "icon/tertiary/base",
        hex: "#a855f7",
        ref: "tertiary/500",
      },
      {
        name: "icon/tertiary/light",
        hex: "#f3e8ff",
        ref: "tertiary/100",
      },
      {
        name: "icon/tertiary/disabled",
        hex: "#d8b4fe",
        ref: "tertiary/300",
      },
      {
        name: "icon/success/base",
        hex: "#16a34a",
        ref: "success/600",
      },
      {
        name: "icon/success/light",
        hex: "#dcfce7",
        ref: "success/100",
      },
      {
        name: "icon/success/disabled",
        hex: "#86efac",
        ref: "success/300",
      },
      {
        name: "icon/warning/base",
        hex: "#eab308",
        ref: "warnings/500",
      },
      {
        name: "icon/warning/light",
        hex: "#fef9c3",
        ref: "warnings/100",
      },
      {
        name: "icon/warning/disabled",
        hex: "#fde047",
        ref: "warnings/300",
      },
      {
        name: "icon/error/base",
        hex: "#ef4444",
        ref: "error/500",
      },
      {
        name: "icon/error/light",
        hex: "#fee2e2",
        ref: "error/100",
      },
      {
        name: "icon/error/disabled",
        hex: "#fca5a5",
        ref: "error/300",
      },
      {
        name: "icon/info/base",
        hex: "#0ea5e9",
        ref: "info/500",
      },
      {
        name: "icon/info/light",
        hex: "#e0f2fe",
        ref: "info/100",
      },
      {
        name: "icon/info/disabled",
        hex: "#7dd3fc",
        ref: "info/300",
      },
      {
        name: "icon/stpay/base",
        hex: "#073e67",
        ref: "stpay/600",
      },
      {
        name: "icon/stpay/light",
        hex: "#e6ecf0",
        ref: "stpay/100",
      },
      {
        name: "icon/stpay/disabled",
        hex: "#9cb2c2",
        ref: "stpay/300",
      },
    ],
    surface: [
      {
        name: "surface/deep",
        hex: "#e2e8f0",
        ref: "neutral/100",
      },
      {
        name: "surface/base",
        hex: "#ebf0f5",
        ref: "neutral/75",
      },
      {
        name: "surface/light",
        hex: "#f5f7fa",
        ref: "neutral/50",
      },
      {
        name: "surface/whtie",
        hex: "#ffffff",
        ref: "base/white",
      },
    ],
    components: [
      {
        name: "components/bg/base",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "components/bg/hover",
        hex: "#0a73eb",
        ref: "primary/700",
      },
      {
        name: "components/bg/disabled",
        hex: "#88c0ff",
        ref: "primary/300",
      },
      {
        name: "components/buttons/primary/default",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "components/buttons/primary/hover",
        hex: "#0a73eb",
        ref: "primary/700",
      },
      {
        name: "components/buttons/primary/disabled",
        hex: "#50a2ff",
        ref: "primary/400",
      },
      {
        name: "components/buttons/primary/light/default",
        hex: "#d7eaff",
        ref: "primary/100",
      },
      {
        name: "components/buttons/primary/light/hover",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "components/buttons/primary/light/disabled",
        hex: "#edf5ff",
        ref: "primary/50",
      },
      {
        name: "components/buttons/primary/outlined/default",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/primary/outlined/hover",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "components/buttons/primary/outlined/disabled",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/secondary/default",
        hex: "#f27d00",
        ref: "secondary/500",
      },
      {
        name: "components/buttons/secondary/hover",
        hex: "#e27500",
        ref: "secondary/600",
      },
      {
        name: "components/buttons/secondary/disabled",
        hex: "#ffa646",
        ref: "secondary/300",
      },
      {
        name: "components/buttons/secondary/light/default",
        hex: "#ffe3c5",
        ref: "secondary/100",
      },
      {
        name: "components/buttons/secondary/light/hover",
        hex: "#f27d00",
        ref: "secondary/500",
      },
      {
        name: "components/buttons/secondary/light/disabled",
        hex: "#fff5ea",
        ref: "secondary/50",
      },
      {
        name: "components/buttons/secondary/outlined/default",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/secondary/outlined/hover",
        hex: "#f27d00",
        ref: "secondary/500",
      },
      {
        name: "components/buttons/secondary/outlined/disabled",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/success/default",
        hex: "#22c55e",
        ref: "success/500",
      },
      {
        name: "components/buttons/success/hover",
        hex: "#16a34a",
        ref: "success/600",
      },
      {
        name: "components/buttons/success/disabled",
        hex: "#4ade80",
        ref: "success/400",
      },
      {
        name: "components/buttons/success/light/default",
        hex: "#dcfce7",
        ref: "success/100",
      },
      {
        name: "components/buttons/success/light/hover",
        hex: "#22c55e",
        ref: "success/500",
      },
      {
        name: "components/buttons/success/light/disabled",
        hex: "#f0fdf4",
        ref: "success/50",
      },
      {
        name: "components/buttons/success/outlined/default",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/success/outlined/hover",
        hex: "#22c55e",
        ref: "success/500",
      },
      {
        name: "components/buttons/success/outlined/disabled",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/warning/default",
        hex: "#eab308",
        ref: "warnings/500",
      },
      {
        name: "components/buttons/warning/hover",
        hex: "#ca8a04",
        ref: "warnings/600",
      },
      {
        name: "components/buttons/warning/disabled",
        hex: "#facc15",
        ref: "warnings/400",
      },
      {
        name: "components/buttons/warning/light/default",
        hex: "#fef9c3",
        ref: "warnings/100",
      },
      {
        name: "components/buttons/warning/light/hover",
        hex: "#eab308",
        ref: "warnings/500",
      },
      {
        name: "components/buttons/warning/light/disabled",
        hex: "#fefce8",
        ref: "warnings/50",
      },
      {
        name: "components/buttons/warning/outlined/default",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/warning/outlined/hover",
        hex: "#eab308",
        ref: "warnings/500",
      },
      {
        name: "components/buttons/warning/outlined/disabled",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/error/default",
        hex: "#ef4444",
        ref: "error/500",
      },
      {
        name: "components/buttons/error/hover",
        hex: "#dc2626",
        ref: "error/600",
      },
      {
        name: "components/buttons/error/disabled",
        hex: "#fca5a5",
        ref: "error/300",
      },
      {
        name: "components/buttons/error/light/default",
        hex: "#fee2e2",
        ref: "error/100",
      },
      {
        name: "components/buttons/error/light/hover",
        hex: "#ef4444",
        ref: "error/500",
      },
      {
        name: "components/buttons/error/light/disabled",
        hex: "#fef2f2",
        ref: "error/50",
      },
      {
        name: "components/buttons/error/outlined/default",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/error/outlined/hover",
        hex: "#ef4444",
        ref: "error/500",
      },
      {
        name: "components/buttons/error/outlined/disabled",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/info/default",
        hex: "#0ea5e9",
        ref: "info/500",
      },
      {
        name: "components/buttons/info/hover",
        hex: "#0284c7",
        ref: "info/600",
      },
      {
        name: "components/buttons/info/disabled",
        hex: "#7dd3fc",
        ref: "info/300",
      },
      {
        name: "components/buttons/info/light/default",
        hex: "#e0f2fe",
        ref: "info/100",
      },
      {
        name: "components/buttons/info/light/hover",
        hex: "#0ea5e9",
        ref: "info/500",
      },
      {
        name: "components/buttons/info/light/disabled",
        hex: "#f0f9ff",
        ref: "info/50",
      },
      {
        name: "components/buttons/info/outlined/default",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/info/outlined/hover",
        hex: "#0ea5e9",
        ref: "info/500",
      },
      {
        name: "components/buttons/info/outlined/disabled",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/stpay/default",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "components/buttons/stpay/hover",
        hex: "#0a73eb",
        ref: "primary/700",
      },
      {
        name: "components/buttons/stpay/disabled",
        hex: "#50a2ff",
        ref: "primary/400",
      },
      {
        name: "components/buttons/stpay/light/default",
        hex: "#d7eaff",
        ref: "primary/100",
      },
      {
        name: "components/buttons/stpay/light/hover",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "components/buttons/stpay/light/disabled",
        hex: "#edf5ff",
        ref: "primary/50",
      },
      {
        name: "components/buttons/stpay/outlined/default",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/stpay/outlined/hover",
        hex: "#1882ff",
        ref: "primary/600",
      },
      {
        name: "components/buttons/stpay/outlined/disabled",
        hex: null,
        ref: null,
      },
      {
        name: "components/buttons/dark/default",
        hex: "#0d151f",
        ref: "neutral/950",
      },
      {
        name: "components/buttons/dark/hover",
        hex: "#1a2b3d",
        ref: "neutral/900",
      },
      {
        name: "components/buttons/dark/disabled",
        hex: "#9ba6b2",
        ref: "neutral/500",
      },
      {
        name: "components/buttons/dark/light/default",
        hex: "#ebf0f5",
        ref: "neutral/75",
      },
      {
        name: "components/buttons/dark/light/hover",
        hex: "#1a2b3d",
        ref: "neutral/900",
      },
      {
        name: "components/buttons/dark/light/disabled",
        hex: "#e2e8f0",
        ref: "neutral/100",
      },
      {
        name: "components/buttons/dark/outlined/default",
        hex: "#ffffff00",
        ref: "alpha/white/0%",
      },
      {
        name: "components/buttons/dark/outlined/hover",
        hex: "#1a2b3d",
        ref: "neutral/900",
      },
      {
        name: "components/buttons/dark/outlined/disabled",
        hex: "#ffffff00",
        ref: "alpha/white/0%",
      },
    ],
  },
};

export default tokenization;
