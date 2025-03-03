'use client';
import { useState, useEffect } from 'react';
import {
  Loader2,
  Play,
  Square,
  ChevronDown,
  ChevronUp,
  Trash2,
  Terminal,
} from 'lucide-react';
import apiClient from '@/lib/apiClient';
import SaveUpload from './uploadSave';
import ConsoleModal from './consoleModal';

interface ServerStats {
  cpuUsage?: number;
  memoryUsage?: number;
  memoryLimit?: number;
  networkUsage?: { tx_bytes?: number };
  onlinePlayers?: number;
}

export interface Server {
  id: string;
  name: string;
  status: 'stopped' | 'running';
  version: string;
  port: number;
  memory: number;
  vcpus: number;
  storage: number;
  serverSettings: {
    visibility: { public: boolean; lan: boolean };
  };
  stats?: ServerStats;
}

interface ServerListProps {
  showNotification: (type: 'success' | 'error', message: string) => void;
}

export default function ServerList({ showNotification }: ServerListProps) {
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedServers, setExpandedServers] = useState<{
    [key: string]: boolean;
  }>({});
  const [actionInProgress, setActionInProgress] = useState<{
    [key: string]: 'starting' | 'stopping' | 'uploading' | 'deleting' | null;
  }>({});
  const [consoleServerId, setConsoleServerId] = useState<string | null>(null); // State to manage console modal

  const fetchServers = async () => {
    try {
      const { data } = await apiClient.get('/servers');

      setServers((prevServers) => {
        return data.map((newServer: Server) => {
          const existingServer = prevServers.find(
            (server) => server.id === newServer.id,
          );
          if (existingServer) {
            return { ...newServer, stats: existingServer.stats };
          }
          return newServer;
        });
      });
    } catch (error) {
      console.error('Error fetching servers:', error);
      showNotification('error', 'Failed to fetch servers');
    } finally {
      setLoading(false);
    }
  };

  const fetchServerStats = async (serverId: string) => {
    try {
      const { data } = await apiClient.get(`/servers/${serverId}/stats`);
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
    fetchServers();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      fetchServers();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (servers.length > 0) {
      const statsInterval = setInterval(() => {
        servers.forEach((server) => {
          if (server.status === 'running') {
            fetchServerStats(server.id);
          }
        });
      }, 2000);

      return () => clearInterval(statsInterval);
    }
  }, [servers]);

  const handleServerAction = async (
    serverId: string,
    action: 'start' | 'stop',
  ) => {
    setActionInProgress((prev) => ({
      ...prev,
      [serverId]: action === 'start' ? 'starting' : 'stopping',
    }));
    try {
      await apiClient.post(`/servers/${serverId}/${action}`);
      fetchServers();
      showNotification(
        'success',
        `Server ${action === 'start' ? 'started' : 'stopped'} successfully`,
      );
    } catch (error) {
      console.error(`Server ${action} error:`, error);
      showNotification('error', `Failed to ${action} server`);
    } finally {
      setActionInProgress((prev) => ({ ...prev, [serverId]: null }));
    }
  };

  const handleDeleteServer = async (serverId: string) => {
    if (
      window.confirm(
        'Are you sure you want to delete this server? This action cannot be undone.',
      )
    ) {
      setActionInProgress((prev) => ({ ...prev, [serverId]: 'deleting' }));
      try {
        await apiClient.post(`/servers/${serverId}/delete`);
        fetchServers();
        showNotification('success', 'Server deleted successfully');
      } catch (error) {
        console.error('Server delete error:', error);
        showNotification('error', 'Failed to delete server');
      } finally {
        setActionInProgress((prev) => ({ ...prev, [serverId]: null }));
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (servers.length === 0) {
    return (
      <p className="text-center">
        No servers found. Click 'Create Server' to get started.
      </p>
    );
  }

  return (
    <div className="grid gap-6">
      {servers.map((server) => (
        <div
          key={server.id}
          className="p-6 rounded-lg bg-secondary hover:bg-secondary/50 shadow-sm border hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{server.name}</h3>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                server.status === 'running'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <button
                onClick={() =>
                  handleServerAction(
                    server.id,
                    server.status === 'running' ? 'stop' : 'start',
                  )
                }
                disabled={!!actionInProgress[server.id]}
                className={`px-4 py-2 rounded-md text-white flex items-center transition-colors ${
                  server.status === 'running'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-green-600 hover:bg-green-700'
                } ${actionInProgress[server.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {actionInProgress[server.id] === 'starting' ||
                actionInProgress[server.id] === 'stopping' ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : server.status === 'running' ? (
                  <Square className="w-4 h-4 mr-2" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {actionInProgress[server.id] === 'starting'
                  ? 'Starting...'
                  : actionInProgress[server.id] === 'stopping'
                    ? 'Stopping...'
                    : server.status === 'running'
                      ? 'Stop'
                      : 'Start'}
              </button>
              <SaveUpload serverId={server.id} warning={true} />
              {/* Add Console Button */}
              <button
                onClick={() => setConsoleServerId(server.id)}
                disabled={server.status !== 'running'}
                className={`px-4 py-2 rounded-md text-white flex items-center transition-colors bg-blue-600 hover:bg-blue-700 ${
                  server.status !== 'running'
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
              >
                <Terminal className="w-4 h-4 mr-2" />
                Console
              </button>
            </div>
            <button
              onClick={() =>
                setExpandedServers((prev) => ({
                  ...prev,
                  [server.id]: !prev[server.id],
                }))
              }
              className="px-4 py-2 bg-primary rounded-md hover:bg-primary/80 flex items-center transition-colors"
            >
              {expandedServers[server.id] ? (
                <ChevronUp className="w-4 h-4 mr-2" />
              ) : (
                <ChevronDown className="w-4 h-4 mr-2" />
              )}
              Details
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${expandedServers[server.id] ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="mt-4 p-4 rounded-md grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold">Port:</span> {server.port}
              </div>
              <div>
                <span className="font-semibold">Version:</span> {server.version}
              </div>
              <div>
                <span className="font-semibold">vCPUs:</span> {server.vcpus}
              </div>
              <div>
                <span className="font-semibold">Memory:</span>{' '}
                {server.memory / 1024} GB
              </div>
              <div>
                <span className="font-semibold">Storage:</span> {server.storage}{' '}
                GB
              </div>
              <div>
                <span className="font-semibold">Server Id:</span> {server.id}
              </div>
              {server.stats ? (
                <>
                  <div>
                    <span className="font-semibold">CPU Usage:</span>{' '}
                    {server.stats.cpuUsage !== undefined
                      ? `${server.stats.cpuUsage}%`
                      : 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">Memory Usage:</span>{' '}
                    {server.stats.memoryUsage !== undefined &&
                    server.stats.memoryLimit !== undefined
                      ? `${Math.round(server.stats.memoryUsage)}MB / ${(server.stats.memoryLimit / 1024).toFixed(1)} GB`
                      : 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">Network Usage:</span>{' '}
                    {server.stats.networkUsage?.tx_bytes !== undefined
                      ? `${(server.stats.networkUsage.tx_bytes / 1048576).toFixed(2)} MB`
                      : 'N/A'}
                  </div>
                  {server.stats.onlinePlayers !== undefined && (
                    <div>
                      <span className="font-semibold">Online Players:</span>{' '}
                      {server.stats.onlinePlayers}
                    </div>
                  )}
                </>
              ) : server.status === 'running' ? (
                <div className="col-span-2 text-gray-500">Loading stats...</div>
              ) : null}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleDeleteServer(server.id)}
                disabled={actionInProgress[server.id] === 'deleting'}
                className={`px-4 py-2 bg-red-600 text-white rounded-md flex items-center transition-colors ${
                  actionInProgress[server.id] === 'deleting'
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-red-700'
                }`}
              >
                {actionInProgress[server.id] === 'deleting' ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4 mr-2" />
                )}
                {actionInProgress[server.id] === 'deleting'
                  ? 'Deleting...'
                  : 'Delete Server'}
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Render ConsoleModal when a server is selected */}
      {consoleServerId && (
        <ConsoleModal
          serverId={consoleServerId}
          onClose={() => setConsoleServerId(null)}
        />
      )}
    </div>
  );
}
