'use client';
import { useState, useEffect } from 'react';
import Notification from '@/components/ServerManager/notification';
import CreateServerModal from '@/components/ServerManager/createServerModal';
import ServerList from '@/components/ServerManager/serverList';
import { RefreshCw } from 'lucide-react';
import apiClient from '@/lib/apiClient';

export default function ServerManager() {
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [versions, setVersions] = useState<string[]>([]);
  const [refreshServersTrigger, setRefreshServersTrigger] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const refreshServers = () => {
    const scrollY = window.scrollY;
    setRefreshServersTrigger((prev) => !prev);
    setTimeout(() => window.scrollTo(0, scrollY), 0);
  };

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        const { data } = await apiClient.get('servers/versions');
        setVersions(data);
      } catch (error) {
        console.error('Error fetching versions:', error);
      }
    };
    fetchVersions();
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Server Manager</h1>
        <div className="flex gap-4">
          <button
            onClick={refreshServers}
            className="p-2 hover:bg-gray-500/50 rounded-md transition-colors"
            title="Refresh Servers"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-md transition-colors"
          >
            Create Server
          </button>
        </div>
      </div>
      {isCreateModalOpen && (
        <CreateServerModal
          onClose={() => setIsCreateModalOpen(false)}
          refreshServers={refreshServers}
          showNotification={showNotification}
          versions={versions}
        />
      )}
      <ServerList
        showNotification={showNotification}
        refreshTrigger={refreshServersTrigger}
      />
    </div>
  );
}
