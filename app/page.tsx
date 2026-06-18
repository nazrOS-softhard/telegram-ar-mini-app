"use client";

import { useEffect, useRef, useState } from "react";

export default function ARScanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState("Наведите камеру на открытку");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setStatus("Сканирую...");
      } catch (err) {
        setStatus("Ошибка доступа к камере");
      }
    };
    startCamera();
  }, []);

  // Имитация AR-распознавания (в реальности здесь будет MindAR)
  const handleDetection = () => {
    setStatus("🎉 Артефакт активирован!");
  };

  return (
    <main className="flex h-screen w-screen bg-black text-white relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      
      <div className="absolute bottom-10 left-0 w-full z-20 flex justify-center px-4">
        <div className="bg-black/70 px-6 py-4 rounded-2xl text-center backdrop-blur-md border border-white/20 max-w-sm">
          <p className="text-sm">{status}</p>
          
          {/* Кнопка для теста (в реальности её не будет) */}
          <button 
            onClick={handleDetection}
            className="mt-4 bg-purple-600 px-6 py-2 rounded-full text-sm"
          >
            Тест активации
          </button>
        </div>
      </div>
    </main>
  );
}