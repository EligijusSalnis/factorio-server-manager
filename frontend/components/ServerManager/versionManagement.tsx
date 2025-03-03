// components/VersionManagement.tsx
'use client';
import { useState, useEffect } from 'react';
import apiClient from '@/lib/apiClient';

interface VersionManagementProps {
  versions: string[];
  setVersions: (versions: string[]) => void;
  showNotification: (type: 'success' | 'error', message: string) => void;
}

export default function VersionManagement({
  versions,
  setVersions,
  showNotification,
}: VersionManagementProps) {
  const [selectedVersion, setSelectedVersion] = useState('');

  useEffect(() => {
    if (versions.length === 0) {
      apiClient
        .get('/servers/versions')
        .then(({ data }) => setVersions(data))
        .catch(() => showNotification('error', 'Failed to fetch versions'));
    }
  }, [versions, setVersions, showNotification]);

  const handlePullVersion = async () => {
    if (!selectedVersion) return;
    try {
      await apiClient.post('/servers/versions/pull', {
        version: selectedVersion,
      });
      apiClient.get('/servers/versions').then(({ data }) => setVersions(data));
      showNotification(
        'success',
        `Version ${selectedVersion} pulled successfully`,
      );
    } catch (error: any) {
      showNotification(
        'error',
        error.response?.data?.error || 'Failed to pull version',
      );
    }
  };

  return (
    <section className="mb-8 p-6 rounded-lg shadow-sm border">
      <h2 className="text-2xl font-bold mb-4">Version Management</h2>
      <div className="flex gap-4">
        <select
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
          className="flex-1 p-2 border rounded-md"
        >
          <option value="">Select version to pull</option>
          {versions.map((v) => (
            <option key={v} value={v}>
              {v} {v === 'latest' ? '(pulled)' : ''}
            </option>
          ))}
        </select>
        <button
          onClick={handlePullVersion}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          disabled={!selectedVersion}
        >
          Pull Version
        </button>
      </div>
    </section>
  );
}
