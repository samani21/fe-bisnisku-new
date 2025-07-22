import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Eye, EyeOff } from 'lucide-react';
import ModalOtp from '@/Components/Auth/ModalOtp';

export default function ForgotPasswordPage() {
    const [input, setInput] = useState('');
    const [errors, setErrors] = useState('');
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePhone = (phone: string) => {
        const cleaned = phone.replace(/\D/g, '');
        return cleaned.length >= 11 && cleaned.startsWith('62');
    };

    const formatPhone = (value: string) => {
        let cleaned = value.replace(/\D/g, '');
        if (cleaned.startsWith('0')) cleaned = '62' + cleaned.slice(1);
        else if (cleaned.startsWith('8')) cleaned = '62' + cleaned;
        return `(+${cleaned.slice(0, 2)})${cleaned.slice(2)}`;
    };

    const isStrongPassword = (pwd: string) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
        return regex.test(pwd);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (/^\d+$/.test(val) || val.startsWith('+') || val.startsWith('0')) {
            setInput(formatPhone(val));
        } else {
            setInput(val);
        }
        setErrors('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isEmail = input.includes('@');
        const isPhone = input.startsWith('(+62)');

        if (!input.trim()) {
            setErrors('Email atau nomor HP harus diisi');
            return;
        }

        if (isEmail && !validateEmail(input)) {
            setErrors('Format email tidak valid');
            return;
        }

        if (isPhone && !validatePhone(input)) {
            setErrors('Nomor HP tidak valid');
            return;
        }

        if (otpVerified) {
            if (!password || !confirmPassword) {
                setPasswordError('Password tidak boleh kosong');
                return;
            }
            if (!isStrongPassword(password)) {
                setPasswordError('Password harus minimal 8 karakter, mengandung huruf besar, angka, dan simbol');
                return;
            }
            if (password !== confirmPassword) {
                setPasswordError('Konfirmasi password tidak cocok');
                return;
            }

            console.log('Reset password:', { input, password });
            alert('Password berhasil diubah!');
            return;
        }

        setErrors('');
        setShowOtpModal(true);
        console.log('Kirim OTP ke:', input);
    };

    return (
        <AuthLayout>
            <div className="flex flex-col justify-center px-10 md:px-20">
                <h2 className="text-3xl font-bold text-[#1E3A8A] mb-2">Lupa Password</h2>
                <p className="text-gray-600 mb-8">
                    Masukkan email atau nomor HP yang terdaftar untuk atur ulang kata sandi Anda.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <input
                            type="text"
                            placeholder="Email atau No HP"
                            value={input}
                            onChange={handleChange}
                            disabled={otpVerified}
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${errors ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#1E3A8A]'} ${otpVerified ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                        />
                        {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
                    </div>

                    {otpVerified && (
                        <>
                            {/* Password Baru */}
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password Baru"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                                />
                                <div
                                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </div>
                            </div>

                            {/* Konfirmasi Password */}
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Konfirmasi Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                                />
                                <div
                                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </div>
                                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#1E3A8A] hover:bg-[#C78A00] text-white font-semibold py-3 rounded-md transition duration-200"
                    >
                        {otpVerified ? 'Ubah Password' : 'Kirim OTP'}
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-500">
                    Kembali ke{' '}
                    <span onClick={() => window.location.href = '/auth/login'} className="text-[#1E3A8A] hover:underline cursor-pointer">
                        halaman login
                    </span>
                </p>
            </div>

            {showOtpModal && (
                <ModalOtp
                    showOtpModal={showOtpModal}
                    setShowOtpModal={setShowOtpModal}
                    phone={input}
                    onSuccess={() => {
                        setOtpVerified(true);
                        setShowOtpModal(false);
                    }}
                />
            )}
        </AuthLayout>
    );
}
