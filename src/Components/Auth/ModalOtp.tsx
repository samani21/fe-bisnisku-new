import React, { useEffect, useState } from 'react'
import { OtpInput } from 'reactjs-otp-input'

type Props = {
    setShowOtpModal: (value: boolean) => void;
    showOtpModal?: boolean;
    phone?: string;
    onSuccess: () => void;
}

const ModalOtp = ({ setShowOtpModal, showOtpModal, onSuccess, phone }: Props) => {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(120); // 2 menit
    const [canResend, setCanResend] = useState(false);
    const handleOtpSubmit = () => {
        if (otp.length !== 6) {
            alert('OTP harus 6 digit');
            return;
        }
        console.log('Verifikasi OTP:', otp);
        onSuccess();
        setShowOtpModal(false);
    };

    const handleResendOtp = () => {
        setOtp('');
        setTimer(120);
        setCanResend(false);
    };

    useEffect(() => {
        let countdown: NodeJS.Timeout;

        if (showOtpModal && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }

        if (timer === 0) {
            setCanResend(true);
        }

        return () => clearInterval(countdown);
    }, [showOtpModal, timer]);
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative">
                <h3 className="text-xl font-semibold mb-4 text-center text-[#1E3A8A]">Verifikasi OTP</h3>
                <div className='flex items-center justify-center mb-4'>
                    <img src='/icon/whatsapp.svg' className='w-20' />
                </div>
                <p className="text-sm text-gray-600 mb-4 text-center">
                    Masukkan 6 digit kode OTP yang telah dikirim ke <span className="font-medium">{phone}</span>
                </p>

                <div className="flex justify-center">
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        shouldAutoFocus
                        inputStyle={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                            textAlign: 'center',
                            fontSize: '18px',
                            margin: '0 5px'
                        }}
                        containerStyle="justify-center mb-4"
                    />
                </div>

                <div className="text-center text-sm text-gray-600 mt-2">
                    {canResend ? (
                        <button onClick={handleResendOtp} className="text-[#1E3A8A] font-semibold hover:underline">
                            Kirim ulang OTP
                        </button>
                    ) : (
                        <p>
                            Kirim ulang dalam <span className="font-semibold">
                                {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                            </span>
                        </p>
                    )}
                </div>

                <div className="flex justify-between mt-4 gap-2">
                    <button
                        onClick={() => setShowOtpModal(false)}
                        className="flex-1 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleOtpSubmit}
                        className="flex-1 py-2 bg-[#1E3A8A] hover:bg-[#C78A00] text-white rounded-md transition"
                    >
                        Verifikasi
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalOtp