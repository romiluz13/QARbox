import React from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface QRFormProps {
  businessName: string;
  registrationUrl: string;
  qrColor: string;
  onBusinessNameChange: (value: string) => void;
  onRegistrationUrlChange: (value: string) => void;
  onQrColorChange: (value: string) => void;
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
      <Label htmlFor="businessName" className="text-lg font-semibold">שם העסק</Label>
      <Input
        id="businessName"
        value={businessName}
        onChange={(e) => onBusinessNameChange(e.target.value)}
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
          onChange={(e) => onRegistrationUrlChange(e.target.value)}
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
          onChange={(e) => onQrColorChange(e.target.value)}
          className="h-10 w-20 rounded cursor-pointer"
        />
        <span className="text-sm text-gray-500">בחר צבע מותאם אישית</span>
      </div>
    </div>
  </div>
);