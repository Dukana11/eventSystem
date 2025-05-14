"use client";

import { useState } from "react";

export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(`Зураг амжилттай хадгалагдлаа: ${data.filename}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <img src={preview} alt="Preview" className="w-48 h-32 object-cover" />
      )}
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload хийх
      </button>
    </div>
  );
}
