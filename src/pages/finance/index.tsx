import FinanceChart from '@/Components/FinanceChart'
import React, { useState } from 'react'
import FinanceLayout from '../layouts/FinanceLayout'
import { InformationIcon } from '@/Components/Icon'

const HomeFinance = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <FinanceLayout>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "#0000003b" }}>
                    <div className="bg-white rounded-xl p-6 shadow-lg w-11/12 max-w-sm">
                        <h2 className="text-lg font-semibold mb-2">Informasi</h2>
                        <p className="text-sm text-gray-600 mb-4">Fitur ini sedang dalam pengembangan.</p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                            onClick={() => setShowModal(false)}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
            <div className="p-4 text-xl font-semibold">Finance</div>
            <div className="px-4 space-y-4">
                <div className="bg-white rounded-2xl shadow-sm p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-500">Saldo Affiliate Saat Ini</div>
                            <div className="text-2xl font-bold text-blue-600">Rp 25.600.000</div>
                        </div>
                        <button onClick={() => setShowModal(true)}>
                            <InformationIcon className="w-6 h-6" color={"#000000"} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl shadow-sm p-4">
                        <div className="text-sm text-gray-500">Pemasukan Bulan Ini</div>
                        <div className="text-green-500 font-semibold text-lg">Rp 12.500.000</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm p-4">
                        <div className="text-sm text-gray-500">Pengeluaran Bulan Ini</div>
                        <div className="text-red-500 font-semibold text-lg">Rp 8.750.000</div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-4">
                    <div className="mb-2 text-sm font-medium text-gray-600">Tren Keuangan</div>
                    <FinanceChart />
                </div>
            </div>
        </FinanceLayout>
    )
}

export default HomeFinance