import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { theme } from '@/styles/theme'
import { useRouter } from 'next/router'

const LoginPage = () => {
    const router = useRouter();
    return (
        <AuthLayout>
            <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Masuk ke <span style={{ color: theme?.colors?.secondary }}>BisnisKu</span></h2>

                <form className="space-y-6">
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder=" "
                            className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
                        peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder=" "
                            className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
                        peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Kata Sandi
                        </label>
                    </div>

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Masuk
                    </button>
                </form>

                {/* Teks tambahan */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Belum punya akun?{' '}
                    <a className="text-blue-600 hover:underline" onClick={() => router.push('/auth/register')}>
                        Daftar sekarang
                    </a>
                </p>
            </div>
        </AuthLayout>
    )
}

export default LoginPage