import React from 'react'
import FinanceLayout from '../layouts/FinanceLayout'

const IncomePage = () => {
    return (
        <FinanceLayout>
            <div className="p-4 text-xl font-semibold">Pemasukan</div>
            <div className="px-4 space-y-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 mb-2">+ Tambah Pemasukan</button>
                <div className="bg-white rounded-xl shadow divide-y">
                    <div className="flex justify-between px-4 py-3">
                        <div>
                            <div className="font-medium">Gaji</div>
                            <div className="text-sm text-gray-500">1 Juni 2025</div>
                        </div>
                        <div className="text-green-600 font-semibold">Rp 10.000.000</div>
                    </div>
                    <div className="flex justify-between px-4 py-3">
                        <div>
                            <div className="font-medium">Online Shop</div>
                            <div className="text-sm text-gray-500">28 Mei 2025</div>
                        </div>
                        <div className="text-green-600 font-semibold">Rp 2.500.000</div>
                    </div>
                </div>
            </div>
        </FinanceLayout>
    )
}

export default IncomePage