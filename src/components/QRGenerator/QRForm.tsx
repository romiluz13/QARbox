import React from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface QRFormProps {
  businessName: string;
  registrationUrl: string;
  qrColor: string;
  onBusinessNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRegistrationUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onQrColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const QRForm: React.FC<QRFormProps> = ({
  businessName,
  registrationUrl,
  qrColor,
  onBusinessNameChange,
  onRegistrationUrlChange,
  onQrColorChange,
}) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="businessName" className="text-lg font-semibold">כותרת לברקוד</Label>
      <Input
        id="businessName"
        value={businessName}
        onChange={onBusinessNameChange}
        placeholder="הכנס כותרת לברקוד"
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
          onChange={onRegistrationUrlChange}
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
          onChange={onQrColorChange}
          className="h-10 w-20 rounded cursor-pointer"
        />
        <span className="text-sm text-gray-500">בחר צבע מותאם אישית</span>
      </div>
    </div>
  </div>
);