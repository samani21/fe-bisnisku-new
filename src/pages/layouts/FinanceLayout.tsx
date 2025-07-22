'use client';

import { HomeIcon, SettingIcon, UpDownIcon, UpIcon } from "@/Components/Icon";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Tab = "home" | "pemasukan" | "pengeluaran" | "setting";

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<Tab>("home");
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        // Menentukan tab aktif berdasarkan path
        if (router.asPath === "/finance") {
            setActiveTab("home");
        } else if (router.asPath.startsWith("/finance/loan")) {
            setActiveTab("pemasukan");
        } else if (router.asPath.startsWith("/finance/income")) {
            setActiveTab("pengeluaran");
        } else if (router.asPath.startsWith("/finance/setting")) {
            setActiveTab("setting");
        }
    }, [router.asPath, router.isReady]);

    return (
        <div className="bg-gray-900 text-white min-h-screen pb-24">
            <div className="tab-active">{children}</div>

            {/* Bottom Navbar */}
            <div className="fixed bottom-0 left-0 right-0 shadow-lg border-t rounded-t-2xl px-6 py-2 flex justify-between text-xs text-gray-600" style={{ background: "#0B0F26" }}>
                <button
                    onClick={() => router.push("/finance")}
                    className={`hover:text-blue-300 flex flex-col items-center space-y-1 ${activeTab === "home" ? "text-amber-400" : "text-blue-500"}`}
                >
                    <HomeIcon color={activeTab === "home" ? theme?.colors?.enable : theme?.colors?.disable} />
                    <span className="text-[10px]">Home</span>
                </button>
                <button
                    onClick={() => router.push("/finance/loan")}
                    className={`hover:text-blue-300 flex flex-col items-center space-y-1 ${activeTab === "pemasukan" ? "text-amber-400" : "text-blue-500"}`}
                >
                    <UpIcon color={activeTab === "pemasukan" ? theme?.colors?.enable : theme?.colors?.disable} />
                    <span className="text-[10px]">Pemasukan</span>
                </button>
                <button
                    onClick={() => router.push("/finance/income")}
                    className={`hover:text-blue-300 flex flex-col items-center space-y-1 ${activeTab === "pengeluaran" ? "text-amber-400" : "text-blue-500"}`}
                >
                    <UpDownIcon color={activeTab === "pengeluaran" ? theme?.colors?.enable : theme?.colors?.disable} />
                    <span className="text-[10px]">Pengeluaran</span>
                </button>
                <button
                    onClick={() => router.push("/finance/setting")}
                    className={`hover:text-blue-300 flex flex-col items-center space-y-1 ${activeTab === "setting" ? "text-amber-400" : "text-blue-500"}`}
                >
                    <SettingIcon color={activeTab === "setting" ? theme?.colors?.enable : theme?.colors?.disable} />
                    <span className="text-[10px]">Setting</span>
                </button>
            </div>
        </div>
    );
}
