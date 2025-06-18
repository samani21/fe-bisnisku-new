import React, { useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { theme } from '@/styles/theme'
import { useRouter } from 'next/router'

const RegisterPage = () => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const router = useRouter();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const validatePassword = (value: string) => {
        const hasMinLength = value.length >= 8;
        const hasCapital = /[A-Z]/.test(value);
        const hasSymbol = /[^A-Za-z0-9]/.test(value);

        if (!hasMinLength || !hasCapital || !hasSymbol) {
            setPasswordError('Password harus minimal 8 karakter, mengandung huruf kapital dan simbol.');
        } else {
            setPasswordError('');
        }
    };
    const validateConfirmPassword = (value: string) => {
        if (value !== password) {
            setConfirmPasswordError('Konfirmasi password tidak cocok.');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        validatePassword(password);
        validateConfirmPassword(confirmPassword);

        if (passwordError || confirmPasswordError) return;

        // Proses submit jika valid
        console.log("Submit sukses!");
    };


    return (
        <AuthLayout>
            <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Daftar Akun <span style={{ color: theme?.colors?.secondary }}>BisnisKu</span></h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Sudah punya akun Bisnisku?{' '}
                    <button
                        type="button"
                        className="text-indigo-600 underline hover:text-indigo-800"
                        onClick={() => router.push('/auth/login')}
                    >
                        Login
                    </button>
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="name"
                            id="name"
                            name="name"
                            required
                            placeholder=" "
                            className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label
                            htmlFor="name"
                            className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
                        peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Nama
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="whatsapp"
                            id="whatsapp"
                            name="whatsapp"
                            required
                            placeholder=" "
                            className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label
                            htmlFor="whatsapp"
                            className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
                        peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Whatsapp
                        </label>
                    </div>
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
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePassword(e.target.value);
                            }}
                            placeholder=" "
                            className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2
    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
    peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Password
                        </label>
                        {passwordError && (
                            <p className="mt-1 text-sm text-red-500">{passwordError}</p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                validateConfirmPassword(e.target.value);
                            }}
                            placeholder=" "
                            className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label
                            htmlFor="confirmPassword"
                            className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2
        peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
        peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Konfirmasi Password
                        </label>
                        {confirmPasswordError && (
                            <p className="mt-1 text-sm text-red-500">{confirmPasswordError}</p>
                        )}
                    </div>

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Daftar
                    </button>
                </form>
            </div>
        </AuthLayout>
    )
}

export default RegisterPage