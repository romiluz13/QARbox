import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';

interface QRDownloaderProps {
  businessName: string;
  onDownload: () => void;
}

export const QRDownloader: React.FC<QRDownloaderProps> = ({ businessName, onDownload }) => (
  <Button
    onClick={onDownload}
    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
  >
    <Download className="w-5 h-5 ml-2" />
    הורד QR
  </Button>
);