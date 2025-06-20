'use client'

import { HomeIcon, SettingIcon, UpDownIcon, UpIcon } from "@/Components/Icon";
import { theme } from "@/styles/theme";
import { useState } from "react";

type Tab = "home" | "pemasukan" | "pengeluaran" | "setting";


export default function FinanceLayout({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<Tab>("home");
    return (

        <div className="bg-gray-900 text-gray-900 text-white to-white text-gray-800 min-h-screen pb-24">
            <div className="tab-active">
                {children}
            </div>

            {/* Bottom Navbar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t rounded-t-2xl px-6 py-2 flex justify-between text-xs text-gray-600" style={{ background: "#0B0F26" }}>
                <button onClick={() => setActiveTab("home")} className={`hover:text-blue-300 flex flex-col items-center space-y-1 ${activeTab === "home" ? "text-amber-400" : "text-blue-500"}`}>
                    <HomeIcon color={activeTab === 'home' ? theme?.colors?.enable : theme?.colors?.disable} /> <span className="text-[10px]">Home</span>
                </button>
                <button onClick={() => setActiveTab("pemasukan")} className={`hover:text-blue-300 flex flex-col items-center space-y-1 ${activeTab === "pemasukan" ? "text-amber-400" : "text-blue-500"}`}>
                    <UpIcon color={activeTab === 'pemasukan' ? theme?.colors?.enable : theme?.colors?.disable} /> <span className="text-[10px]">Pemasukan</span>
                </button>
                <button onClick={() => setActiveTab("pengeluaran")} className={`hover:text-blue-300 flex flex-col items-center space-y-1 ${activeTab === "pengeluaran" ? "text-amber-400" : "text-blue-500"}`}>
                    <UpDownIcon color={activeTab === 'pengeluaran' ? theme?.colors?.enable : theme?.colors?.disable} />  <span className="text-[10px]">Pengeluaran</span>
                </button>
                <button onClick={() => setActiveTab("setting")} className={`hover:text-blue-300 flex flex-col items-center space-y-1 ${activeTab === "setting" ? "text-amber-400" : "text-blue-500"}`}>
                    <SettingIcon color={activeTab === 'setting' ? theme?.colors?.enable : theme?.colors?.disable} />  <span className="text-[10px]">Setting</span>
                </button>
            </div>
        </div>

    );
}
