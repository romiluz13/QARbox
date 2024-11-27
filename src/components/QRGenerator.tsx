import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Dumbbell, Download, Sparkles, Link as LinkIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface QRGeneratorProps {
  defaultUrl?: string;
}

export const QRGenerator: React.FC<QRGeneratorProps> = ({ defaultUrl = '' }) => {
  const [businessName, setBusinessName] = useState('');
  const [registrationUrl, setRegistrationUrl] = useState(defaultUrl);
  const [qrColor, setQrColor] = useState('#000000');

  const handleDownload = () => {
    const svg = document.getElementById('qr-code');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      
      const downloadLink = document.createElement('a');
      downloadLink.download = `${businessName || 'arbox'}-qr.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

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
        <div className="space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="space-y-2">
            <Label htmlFor="businessName" className="text-lg font-semibold">שם העסק</Label>
            <Input
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="הכנס את שם העסק שלך"
              className="text-right text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="registrationUrl" className="text-lg font-semibold">קישור הרשמה</Label>
            <div className="relative">
              <Input
                id="registrationUrl"
                type="url"
                value={registrationUrl}
                onChange={(e) => setRegistrationUrl(e.target.value)}
                placeholder="הדבק את קישור ההרשמה מ-Arbox"
                className="text-right text-lg pl-10"
              />
              <LinkIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="qrColor" className="text-lg font-semibold">צבע QR</Label>
            <div className="flex items-center space-x-4 space-x-reverse">
              <input
                id="qrColor"
                type="color"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
                className="h-10 w-20 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-500">בחר צבע מותאם אישית</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
          {registrationUrl ? (
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
                <p className="font-bold text-2xl text-gray-800">{businessName || 'Arbox QR'}</p>
                <p className="text-sm text-gray-500 mt-1">סרוק להרשמה</p>
              </div>
              <Button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
              >
                <Download className="w-5 h-5 ml-2" />
                הורד QR
              </Button>
            </>
          ) : (
            <div className="text-center text-gray-500">
              <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">הזן קישור הרשמה כדי ליצור קוד QR</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};