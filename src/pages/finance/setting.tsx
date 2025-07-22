import React from 'react'
import FinanceLayout from '../layouts/FinanceLayout'

const setting = () => {
    return (
        <FinanceLayout>
            <div className="p-4 text-xl font-semibold">Pengaturan</div>
            <div className="px-4 space-y-4">
                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-sm text-gray-500">Mode Tampilan</h2>
                    <select className="w-full mt-1 px-3 py-2 rounded border">
                        <option>Pribadi</option>
                        <option>Bisnis</option>
                    </select>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-sm text-gray-500 mb-1">Tema</h2>
                    <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded mr-2">Default</button>
                    <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Gelap</button>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-sm text-gray-500 mb-1">Akun</h2>
                    <button className="text-blue-600 font-semibold">Ganti Password</button><br />
                    <button className="text-red-500 mt-2">Logout</button>
                </div>
            </div>
        </FinanceLayout>
    )
}

export default setting