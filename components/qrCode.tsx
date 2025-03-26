"use client";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import bcrypt from "bcryptjs";

const QRCodeSection = ({ id }: { id: string }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    // Use window.location.origin for a clean base URL (protocol + host)
    setCurrentUrl(window.location.origin);
  }, []);

  // Hash the id with bcrypt
  const hashedId = bcrypt.hashSync(id, bcrypt.genSaltSync(10));
  // Encode the hash to make it URL safe
  const safeHashedId = encodeURIComponent(hashedId);

  const url = `${currentUrl}/staff/${safeHashedId}/display`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="flex rounded-lg gap-2 mb-2">
      <QRCodeSVG
        value={url}
        size={80}
        fgColor="#0ea5e9"
        bgColor="transparent"
      />

      <button
        onClick={handleCopy}
        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs"
      >
        {showCopied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default QRCodeSection;
