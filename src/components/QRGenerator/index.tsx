import React, { useState, type ChangeEvent } from 'react';
import { Sparkles, Dumbbell } from 'lucide-react';
import { QRForm } from './QRForm';
import { QRDisplay } from './QRDisplay';
import { useQRDownload } from '@/hooks/useQRDownload';

interface QRGeneratorProps {
  defaultUrl?: string;
}

export const QRGenerator: React.FC<QRGeneratorProps> = ({ defaultUrl = '' }) => {
  const [businessName, setBusinessName] = useState('');
  const [registrationUrl, setRegistrationUrl] = useState(defaultUrl);
  const [qrColor, setQrColor] = useState('#000000');

  const handleDownload = useQRDownload(businessName);

  const handleBusinessNameChange = (e: ChangeEvent<HTMLInputElement>) => setBusinessName(e.target.value);
  const handleRegistrationUrlChange = (e: ChangeEvent<HTMLInputElement>) => setRegistrationUrl(e.target.value);
  const handleQrColorChange = (e: ChangeEvent<HTMLInputElement>) => setQrColor(e.target.value);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6 space-y-8" dir="rtl">
      <div className="relative w-full text-center mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="relative">
          <div className="flex items-center justify-center space-x-4 space-x-reverse">
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              יוצר QR חכם לעסק
            </h1>
            <Dumbbell className="w-8 h-8 text-pink-600 animate-pulse" />
          </div>
          <p className="mt-2 text-gray-600">צור קוד QR מותאם אישית לעסק שלך ב-Arbox</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
          <QRForm
            businessName={businessName}
            registrationUrl={registrationUrl}
            qrColor={qrColor}
            onBusinessNameChange={handleBusinessNameChange}
            onRegistrationUrlChange={handleRegistrationUrlChange}
            onQrColorChange={handleQrColorChange}
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
          <QRDisplay
            registrationUrl={registrationUrl}
            businessName={businessName}
            qrColor={qrColor}
            onDownload={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};