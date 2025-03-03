'use client';

import React, { useState, ChangeEvent, DragEvent } from 'react';
import apiClient from '@/lib/apiClient';
import { Upload, Loader2 } from 'lucide-react';

interface SaveUploadProps {
  serverId: string;
  warning?: boolean;
}

const SaveUpload: React.FC<SaveUploadProps> = ({
  serverId,
  warning = false,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setErrorMessage(null); // Reset error on new file selection
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
      setErrorMessage(null);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUploadSave = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setErrorMessage(null);
    const formData = new FormData();
    formData.append('save', selectedFile);

    try {
      await apiClient.post(`/servers/${serverId}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSelectedFile(null);
      alert('Save file uploaded successfully');
      setIsModalOpen(false);
    } catch (error: any) {
      console.error('Upload error:', error);
      if (error.response?.status === 400 && error.response?.data?.error) {
        setErrorMessage(error.response.data.error); // Display version mismatch error
      } else {
        alert('Failed to upload save file');
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md flex items-center transition-colors"
        disabled={isUploading}
      >
        {isUploading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Upload className="w-4 h-4 mr-2" />
        )}
        Upload Save
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => !isUploading && setIsModalOpen(false)}
          ></div>
          <div className="relative bg-secondary shadow-xl rounded-lg p-6 w-96 z-10">
            {warning && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                Warning: Uploading a new save file will remove older saves.
                Please backup your existing save!
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
                {errorMessage}
              </div>
            )}
            <div
              className="border-dashed border-4 border-primary rounded-md p-6 text-center cursor-pointer"
              onDrop={!isUploading ? handleDrop : undefined}
              onDragOver={!isUploading ? handleDragOver : undefined}
              onClick={
                !isUploading
                  ? () => document.getElementById('fileInput')?.click()
                  : undefined
              }
            >
              {isUploading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  <p>Uploading...</p>
                </div>
              ) : selectedFile ? (
                <p>{selectedFile.name}</p>
              ) : (
                <p>
                  Drag and drop your save file here, or click to select a file
                </p>
              )}
            </div>
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              disabled={isUploading}
            />
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors"
                disabled={isUploading}
              >
                Cancel
              </button>
              <button
                onClick={handleUploadSave}
                className="px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md transition-colors"
                disabled={isUploading || !selectedFile}
              >
                {isUploading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
                ) : null}
                Confirm Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaveUpload;
