"use client";

import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler,
    ScriptableContext
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler);

const FinanceChart = () => {
    const labels = ['Kam', 'Jum', 'Sab', 'Min', 'Sen', 'Sel', 'Rab'];
    const data = {
        labels,
        datasets: [
            {
                label: "Saldo",
                data: [6500000, 7000000, 6800000, 7200000, 6900000, 7400000, 7100000],
                fill: true,
                backgroundColor: (ctx: ScriptableContext<"line">) => {
                    const chart = ctx.chart;
                    const { ctx: canvas, chartArea } = chart;

                    // Jangan return null, karena bukan tipe yang valid
                    if (!chartArea) return "rgba(255, 215, 0, 0.3)";

                    const gradient = canvas.createLinearGradient(0, 0, 0, chartArea.bottom);
                    gradient.addColorStop(0, "rgba(255, 215, 0, 0.3)");
                    gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
                    return gradient;
                },
                borderColor: "#FFD700",
                pointBackgroundColor: "#FFD700",

                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                mode: "nearest" as const,
                intersect: true,
                callbacks: {
                    label: (ctx: unknown) => {
                        if (typeof ctx === "object" && ctx !== null && "raw" in ctx) {
                            const raw = (ctx as { raw: number }).raw;
                            return `Rp ${raw.toLocaleString("id-ID")}`;
                        }
                        return "Rp -";
                    }

                },
                backgroundColor: "#3B82F6",
                titleColor: "#fff",
                bodyColor: "#fff",
                cornerRadius: 6,
                displayColors: false
            }
        },
        interaction: {
            mode: "nearest" as const,
            intersect: true
        },
        scales: {
            y: {
                display: false
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div className="w-full h-48">
            <Line data={data} options={options} />
        </div>
    );
};

export default FinanceChart;
