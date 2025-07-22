import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: typeof errors = {};

        if (!email.trim()) newErrors.email = 'Email tidak boleh kosong';
        if (!password.trim()) newErrors.password = 'Password tidak boleh kosong';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Lakukan login
            console.log({ email, password, rememberMe });
        }
    };

    return (
        <AuthLayout>
            <div className="flex flex-col justify-center px-10 md:px-20">
                <h2 className="text-4xl font-bold text-[#1E3A8A] mb-2">Halo, Selamat Datang Kembali</h2>
                <p className="text-gray-600 mb-8">Hai, selamat datang kembali di bisnisku</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#1E3A8A]'
                                }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-3 pr-10 border rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#1E3A8A]'
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2"
                            />
                            Ingat saya
                        </label>
                        <a href="#" className="hover:underline text-[#1E3A8A]">Lupa Kata Sandi?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1E3A8A] hover:bg-[#C78A00] text-white font-semibold py-3 rounded-md transition duration-200"
                    >
                        Masuk
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-500">
                    Belum punya akun? <span onClick={() => window.location.href = "/auth/register"} className="text-[#1E3A8A] hover:underline cursor-pointer">Daftar</span>
                </p>
            </div>
        </AuthLayout>
    );
}
