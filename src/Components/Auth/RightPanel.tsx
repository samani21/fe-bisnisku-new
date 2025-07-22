import { BarChart2, TrendingUp } from 'lucide-react';

export default function RightPanel() {
    return (
        <div className="w-full max-w-xl">
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1B263B] p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Sales Revenue</div>
                    <div className="text-2xl font-bold text-yellow-400">11,680</div>
                    <BarChart2 className="text-yellow-400 mt-2" />
                </div>

                <div className="bg-[#1B263B] p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Sales Targets</div>
                    <div className="text-yellow-400 text-xl font-bold">45%</div>
                    <div className="text-xs text-gray-400">Target bulan ini</div>
                    <button className="mt-3 px-3 py-1 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-[#1B263B]">
                        More details
                    </button>
                </div>

                <div className="bg-[#1B263B] p-4 rounded-lg col-span-2">
                    <div className="text-sm text-gray-400">Closed Won by Type</div>
                    <div className="text-yellow-400 text-2xl font-bold">11,680</div>
                    <p className="text-xs text-gray-400">Dibanding bulan sebelumnya</p>
                    <div className="h-2 bg-yellow-500 mt-2 rounded" />
                </div>

                <div className="bg-[#1B263B] p-4 rounded-lg col-span-2">
                    <div className="text-sm text-gray-400">Task Completion Rate</div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="text-yellow-400 text-2xl font-bold">92%</div>
                        <span className="text-green-400 text-sm">+17%</span>
                    </div>
                    <TrendingUp className="text-yellow-400 mt-2" />
                </div>
            </div>

            <div className="flex justify-center">
                <img src="/illustration.svg" alt="Working Illustration" className="w-40" />
            </div>
        </div>
    );
}
