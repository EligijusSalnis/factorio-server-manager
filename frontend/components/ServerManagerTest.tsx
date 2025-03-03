'use client';
import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import factorioVersions from 'constants/factorioVersions';
interface Server {
  id: string;
  name: string;
  status: 'stopped' | 'running';
  version: string;
  port: number;
  memory: number;
  vcpus: number;
  storage: number;
  serverSettings: {
    visibility: {
      public: boolean;
      lan: boolean;
    };
  };
  stats?: {
    status: string;
    cpuUsage: number;
    memoryUsage: number;
    memoryLimit: number;
    networkUsage: {
      tx_bytes: number;
    };
    onlinePlayers: number;
  };
}

interface Version {
  version: string;
  pulled: boolean;
}

interface Notification {
  type: 'success' | 'error';
  message: string;
}

export default function ServerManager() {
  const [servers, setServers] = useState<Server[]>([]);
  const [versions, setVersions] = useState<Version[]>([]);
  const [newServer, setNewServer] = useState({
    name: '',
    vcpus: 2,
    memory: 4,
    storage: 10,
    port: 34197,
    version: 'latest',
  });
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);

  // New states for loading and notifications
  const [isCreating, setIsCreating] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);

  // Fetch initial data
  useEffect(() => {
    fetchServers();
    fetchVersions();
  }, []);

  // Auto-dismiss notifications after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const fetchServers = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/servers`);
      const data = await res.json();
      setServers(data);
    } catch (error) {
      console.error('Error fetching servers:', error);
      showNotification('error', 'Failed to fetch servers');
    }
  };

  const fetchVersions = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/servers/versions`,
      );
      const data = await res.json();
      setVersions(data);
    } catch (error) {
      console.error('Error fetching versions:', error);
      showNotification('error', 'Failed to fetch versions');
    }
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
  };

  const handleCreateServer = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/servers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newServer),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to create server');
      }

      await fetchServers();
      setNewServer({
        name: '',
        vcpus: 2,
        memory: 4,
        storage: 10,
        port: 34197,
        version: 'latest',
      });
      showNotification('success', 'Server created successfully');
    } catch (error) {
      console.error('Server creation error:', error);
      showNotification(
        'error',
        error instanceof Error ? error.message : 'Failed to create server',
      );
    } finally {
      setIsCreating(false);
    }
  };

  const handleServerAction = async (
    serverId: string,
    action: 'start' | 'stop',
  ) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/servers/${serverId}/${action}`,
        {
          method: 'POST',
        },
      );

      if (!res.ok) throw new Error(`Failed to ${action} server`);
      await fetchServers();
      showNotification(
        'success',
        `Server ${action === 'start' ? 'started' : 'stopped'} successfully`,
      );
    } catch (error) {
      console.error(`Server ${action} error:`, error);
      showNotification('error', `Failed to ${action} server`);
    }
  };

  const handleUploadSave = async (serverId: string) => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('save', selectedFile);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/servers/${serverId}/upload`,
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!res.ok) throw new Error('File upload failed');
      setSelectedFile(null);
      showNotification('success', 'Save file uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      showNotification('error', 'Failed to upload save file');
    }
  };

  const handlePullVersion = async () => {
    if (!selectedVersion) return;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/servers/versions/pull`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ version: selectedVersion }),
        },
      );

      if (!res.ok) throw new Error('Version pull failed');
      await fetchVersions();
      showNotification(
        'success',
        `Version ${selectedVersion} pulled successfully`,
      );
    } catch (error) {
      console.error('Version pull error:', error);
      showNotification('error', 'Failed to pull version');
    }
  };

  const handleFileChange = (
    serverId: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedFile(e.target.files?.[0] || null);
    setSelectedServerId(serverId);
  };

  const fetchServerStats = async (serverId: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/servers/${serverId}/stats`,
      );
      const data = await res.json();
      setServers((prevServers) =>
        prevServers.map((server) =>
          server.id === serverId ? { ...server, stats: data } : server,
        ),
      );
    } catch (error) {
      console.error(`Error fetching stats for server ${serverId}:`, error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      servers.forEach((server) => {
        if (server.status === 'running') fetchServerStats(server.id);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [servers]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Notification Component */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center p-4 mb-4 rounded-lg ${
            notification.type === 'success'
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle className="w-5 h-5 mr-2" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-2" />
          )}
          <span className="font-medium">{notification.message}</span>
          <button
            type="button"
            className="ml-4 text-gray-400 hover:text-gray-900"
            onClick={() => setNotification(null)}
          >
            &times;
          </button>
        </div>
      )}

      {/* Server Creation Section */}
      <section className="mb-8 p-6 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-bold mb-4">Create New Server</h2>
        <form onSubmit={handleCreateServer} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">
              Server Name:
            </label>
            <input
              type="text"
              value={newServer.name}
              onChange={(e) =>
                setNewServer({ ...newServer, name: e.target.value })
              }
              className="w-full p-2 border rounded-md"
              required
              disabled={isCreating}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700">
                vCPUs:
              </label>
              <input
                type="number"
                value={newServer.vcpus}
                onChange={(e) =>
                  setNewServer({ ...newServer, vcpus: +e.target.value })
                }
                className="w-full p-2 border rounded-md"
                min="1"
                required
                disabled={isCreating}
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700">
                Memory (GB):
              </label>
              <input
                type="number"
                value={newServer.memory}
                onChange={(e) =>
                  setNewServer({ ...newServer, memory: +e.target.value })
                }
                className="w-full p-2 border rounded-md"
                required
                disabled={isCreating}
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700">
                Port:
              </label>
              <input
                type="number"
                value={newServer.port}
                onChange={(e) =>
                  setNewServer({ ...newServer, port: +e.target.value })
                }
                className="w-full p-2 border rounded-md"
                required
                disabled={isCreating}
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700">
                Version:
              </label>
              <select
                value={newServer.version}
                onChange={(e) =>
                  setNewServer({ ...newServer, version: e.target.value })
                }
                className="w-full p-2 border rounded-md"
                disabled={isCreating}
              >
                {versions.map((v) => (
                  <option key={v} value={v}>
                    {v} {v === 'latest' ? '(pulled)' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={isCreating}
          >
            {isCreating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Creating Server (This may take up to 2 minutes)...
              </>
            ) : (
              'Create Server'
            )}
          </button>
        </form>
      </section>

      {/* Version Management Section */}
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
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!selectedVersion}
          >
            Pull Version
          </button>
        </div>
      </section>

      {/* Server List Section */}
      <section className="p-6 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-bold mb-4">Managed Servers</h2>
        <div className="grid gap-4">
          {servers.length === 0 ? (
            <p>No servers found. Create one above to get started.</p>
          ) : (
            servers.map((server) => (
              <div key={server.id} className="p-4 rounded-lg shadow-sm border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{server.name}</h3>
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      server.status === 'running'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {server.status.charAt(0).toUpperCase() +
                      server.status.slice(1)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="font-semibold">Port:</span> {server.port}
                  </div>
                  <div>
                    <span className="font-semibold">Memory:</span>{' '}
                    {Math.round((server.memory / 1024) * 10) / 10} GB
                  </div>
                  <div>
                    <span className="font-semibold">vCPUs:</span> {server.vcpus}
                  </div>
                  <div>
                    <span className="font-semibold">Storage:</span>{' '}
                    {server.storage} GB
                  </div>
                </div>

                {server.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="font-semibold">CPU Usage:</span>{' '}
                      {server.stats.cpuUsage}%
                    </div>
                    <div>
                      <span className="font-semibold">Memory Usage:</span>{' '}
                      {Math.round(server.stats.memoryUsage)}MB /{' '}
                      {server.stats.memoryLimit < 1024
                        ? (server.stats.memoryLimit / 1024).toFixed(1)
                        : Math.round(server.stats.memoryLimit / 1024)}{' '}
                      GB
                    </div>
                    <div>
                      <span className="font-semibold">Network Usage:</span>{' '}
                      {(server.stats.networkUsage?.tx_bytes / 1048576).toFixed(
                        2,
                      )}{' '}
                      MB
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    onClick={() =>
                      handleServerAction(
                        server.id,
                        server.status === 'running' ? 'stop' : 'start',
                      )
                    }
                  >
                    {server.status === 'running' ? 'Stop' : 'Start'}
                  </button>

                  {/* File Upload */}
                  <div className="flex items-center">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(server.id, e)}
                      className="p-2 border rounded-md"
                    />
                    {selectedFile && (
                      <button
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={() => handleUploadSave(server.id)}
                      >
                        Upload Save
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
