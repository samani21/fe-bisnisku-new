import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Eye, EyeOff } from 'lucide-react';
import ModalOtp from '@/Components/Auth/ModalOtp';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        phone?: string;
        password?: string;
        confirmPassword?: string;
    }>({});
    const [showOtpModal, setShowOtpModal] = useState(false);


    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePhone = (phone: string) => {
        const cleaned = phone.replace(/\D/g, '');
        return cleaned.length >= 11 && cleaned.startsWith('62');
    };

    const validatePassword = (pass: string) =>
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pass);

    const formatPhone = (value: string) => {
        let cleaned = value.replace(/\D/g, '');
        if (cleaned.startsWith('0')) cleaned = '62' + cleaned.slice(1);
        else if (cleaned.startsWith('8')) cleaned = '62' + cleaned;
        return `(+${cleaned.slice(0, 2)})${cleaned.slice(2)}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: typeof errors = {};

        if (!name.trim()) newErrors.name = 'Nama tidak boleh kosong';
        if (!email.trim()) newErrors.email = 'Email tidak boleh kosong';
        else if (!validateEmail(email)) newErrors.email = 'Format email tidak valid';

        if (!phone.trim()) newErrors.phone = 'Nomor HP tidak boleh kosong';
        else if (!validatePhone(phone)) newErrors.phone = 'Nomor HP tidak valid';

        if (!password) newErrors.password = 'Password tidak boleh kosong';
        else if (!validatePassword(password)) {
            newErrors.password = 'Password minimal 8 karakter, huruf besar, angka, dan simbol';
        }

        if (!confirmPassword) newErrors.confirmPassword = 'Konfirmasi password wajib diisi';
        else if (password !== confirmPassword)
            newErrors.confirmPassword = 'Password tidak cocok';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setShowOtpModal(true);
        }
    };

    return (
        <AuthLayout>
            <div className="flex flex-col justify-center px-10 md:px-20">
                <h2 className="text-4xl font-bold text-[#1E3A8A] mb-2">Daftar Akun Baru</h2>
                <p className="text-gray-600 mb-8">Buat akunmu dan mulai bisnis kamu!</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <input type="text" placeholder="Nama Lengkap" value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-[#1E3A8A]'}`} />
                        {errors?.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <input type="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-[#1E3A8A]'}`} />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <input type="tel" placeholder="Nomor HP (misal 08123456789)" value={phone}
                            onChange={(e) => setPhone(formatPhone(e.target.value))}
                            className={`w-full px-4 py-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-[#1E3A8A]'}`} />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div className="relative">
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-3 pr-10 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.password ? 'focus:ring-red-500' : 'focus:ring-[#1E3A8A]'}`} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Konfirmasi Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'focus:ring-red-500' : 'focus:ring-[#1E3A8A]'}`} />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <button type="submit"
                        className="w-full bg-[#1E3A8A] hover:bg-[#C78A00] text-white font-semibold py-3 rounded-md transition duration-200">
                        Daftar
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-500">
                    Sudah punya akun?{' '}
                    <span onClick={() => window.location.href = '/auth/login'}
                        className="text-[#1E3A8A] hover:underline cursor-pointer">Masuk</span>
                </p>
            </div>

            {/* Modal OTP */}
            {showOtpModal && (
                <ModalOtp
                    showOtpModal={showOtpModal}
                    setShowOtpModal={setShowOtpModal}
                    phone={phone}
                    onSuccess={() => {
                        setShowOtpModal(false);
                    }}
                />
            )}
        </AuthLayout>
    );
}
