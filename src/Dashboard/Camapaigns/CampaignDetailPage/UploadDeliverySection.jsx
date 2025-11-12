import React, { useState } from 'react';

export const UploadDeliverySection = ({ campaignId }) => {
  const [date, setDate] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !date) {
      setMessage('Please select both date and file.');
      return;
    }

    const formData = new FormData();
    formData.append('date', date);
    formData.append('file', file);

    try {
      setUploading(true);
      setMessage('');

      const res = await fetch(`http://localhost:3000/campaigns/deliveries/${campaignId}`, {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('Upload successful ✅');
      } else {
        setMessage(result.error || 'Upload failed ❌');
      }
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-3  bg-white shadow">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center gap-4"
      >
        {/* DATE */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Delivery Date:
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-3 py-1 rounded w-48"
          />
        </div>

        {/* FILE */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Upload CSV File:
          </label>
          <input
            type="file"
            accept=".csv"
            onChange={(e) => setFile(e.target.files[0])}
            className="border px-3 py-1 rounded w-64"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={uploading}
          className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {message && (
        <p className="text-sm mt-3 text-gray-700">{message}</p>
      )}
    </div>
  );
};
