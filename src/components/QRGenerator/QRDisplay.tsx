import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Sparkles } from 'lucide-react';
import { QRDownloader } from './QRDownloader';

interface QRDisplayProps {
  registrationUrl: string;
  qrTitle: string;
  qrColor: string;
  onDownload: () => void;
}

export const QRDisplay: React.FC<QRDisplayProps> = ({
  registrationUrl,
  qrTitle,
  qrColor,
  onDownload,
}) => {
  if (!registrationUrl) {
    return (
      <div className="text-center text-gray-500">
        <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p className="text-lg">הזן קישור הרשמה כדי ליצור קוד QR</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-inner">
        <QRCodeSVG
          id="qr-code"
          value={registrationUrl}
          size={280}
          level="H"
          fgColor={qrColor}
          includeMargin={true}
        />
      </div>
      <div className="text-center mt-4">
        <p className="font-bold text-2xl text-gray-800">{qrTitle || 'ברקוד Arbox'}</p>
        <p className="text-sm text-gray-500 mt-1">סרוק להרשמה</p>
      </div>
      <QRDownloader businessName={qrTitle} onDownload={onDownload} />
    </>
  );
};