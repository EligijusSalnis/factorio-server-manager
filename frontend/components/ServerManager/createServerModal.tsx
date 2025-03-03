import { useState, useEffect } from 'react';
import { Loader2, X, Info } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import apiClient from '@/lib/apiClient';

interface Props {
  onClose: () => void;
  refreshServers: () => void;
  showNotification: (type: 'success' | 'error', message: string) => void;
  versions: string[];
}

export default function CreateServerModal({
  onClose,
  refreshServers,
  showNotification,
  versions,
}: Props) {
  const [newServer, setNewServer] = useState({
    name: '',
    vcpus: 2,
    memory: 4,
    storage: 10,
    version: versions[0] || 'latest',
    onlineMode: false, // false = offline, true = online
    dlcEnabled: false,
    rconPassword: '',
  });
  const [isCreating, setIsCreating] = useState(false);

  const getMajorVersion = (version: string): number => {
    if (version === 'latest') return 2;
    const parts = version.split('.');
    return parseInt(parts[0], 10);
  };

  const isDlcSupported = getMajorVersion(newServer.version) >= 2;

  useEffect(() => {
    if (!isDlcSupported) {
      setNewServer((prev) => ({ ...prev, dlcEnabled: false }));
    }
  }, [newServer.version]);

  const handleCreateServer = async (e: React.FormEvent) => {
    e.preventDefault();

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (
      !newServer.rconPassword ||
      !passwordRegex.test(newServer.rconPassword)
    ) {
      showNotification(
        'error',
        'RCON password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters',
      );
      return;
    }

    if (!newServer.name.trim()) {
      showNotification('error', 'Server name is required');
      return;
    }
    if (newServer.vcpus < 1 || newServer.vcpus > 32) {
      showNotification('error', 'vCPUs must be between 1 and 32');
      return;
    }
    if (newServer.memory < 0.5 || newServer.memory > 32) {
      showNotification('error', 'Memory must be between 0.5 GB and 32 GB');
      return;
    }
    if (newServer.storage < 5 || newServer.storage > 50) {
      showNotification('error', 'Storage must be between 5 GB and 50 GB');
      return;
    }
    if (!newServer.version) {
      showNotification('error', 'Version must be selected');
      return;
    }

    setIsCreating(true);
    try {
      const payload = {
        ...newServer,
        memory: Math.round(newServer.memory * 1024),
        rconPassword: newServer.rconPassword,
      };
      await apiClient.post('/servers', payload);
      onClose();
      refreshServers();
      showNotification('success', 'Server created successfully');
    } catch (error) {
      showNotification('error', 'Failed to create server');
      console.log(error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 bg-secondary rounded-lg shadow-xl max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Create New Server</h2>
          <button onClick={onClose} className="hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleCreateServer} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Server Name
            </label>
            <input
              type="text"
              value={newServer.name}
              onChange={(e) =>
                setNewServer({ ...newServer, name: e.target.value })
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isCreating}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Version</label>
            <select
              value={newServer.version}
              onChange={(e) =>
                setNewServer({ ...newServer, version: e.target.value })
              }
              className="w-full p-2 border bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isCreating}
            >
              {versions.length > 0 ? (
                versions.map((version) => (
                  <option key={version} value={version}>
                    {version}
                  </option>
                ))
              ) : (
                <option value="latest">Latest</option>
              )}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">vCPUs</label>
            <input
              type="number"
              min={1}
              max={32}
              step={1}
              value={newServer.vcpus}
              onChange={(e) =>
                setNewServer({
                  ...newServer,
                  vcpus: parseInt(e.target.value) || 1,
                })
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isCreating}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Memory (GB)
            </label>
            <input
              type="number"
              min={0.5}
              max={32}
              step={0.1}
              value={newServer.memory}
              onChange={(e) =>
                setNewServer({
                  ...newServer,
                  memory: parseFloat(e.target.value) || 0.5,
                })
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isCreating}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Storage (GB)
            </label>
            <input
              type="number"
              min={5}
              max={50}
              step={1}
              value={newServer.storage}
              onChange={(e) =>
                setNewServer({
                  ...newServer,
                  storage: parseInt(e.target.value) || 5,
                })
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isCreating}
            />
          </div>
          {/* RCON Password Field */}
          <div className="col-span-2">
            <label className="block mb-1 text-sm font-medium flex items-center gap-1">
              RCON Password
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-4 h-4 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Must be at least 8 characters long and include at least
                      one uppercase letter, one lowercase letter, one number,
                      and one special character (e.g., !@#$%^&*).
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </label>
            <input
              type="password"
              value={newServer.rconPassword}
              onChange={(e) =>
                setNewServer({ ...newServer, rconPassword: e.target.value })
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isCreating}
            />
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <label className="text-sm font-medium">Server Mode:</label>
            <Switch
              checked={newServer.onlineMode}
              onCheckedChange={(checked) =>
                setNewServer({ ...newServer, onlineMode: checked })
              }
              disabled={isCreating}
            />
            <span>{newServer.onlineMode ? 'Online' : 'Offline'}</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    If set to Online, the server appears in Factorio’s public
                    server list and requires a Factorio account to join. If set
                    to Offline, the server remains private.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <label className="text-sm font-medium">Space Age DLC:</label>
            <Switch
              checked={newServer.dlcEnabled}
              onCheckedChange={(checked) =>
                setNewServer({ ...newServer, dlcEnabled: checked })
              }
              disabled={!isDlcSupported || isCreating}
            />
            <span>{newServer.dlcEnabled ? 'Enabled' : 'Disabled'}</span>
            {!isDlcSupported && (
              <span className="text-sm text-gray-500">
                (Not available for this version)
              </span>
            )}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Enables the Space Age DLC. Requires Factorio version 2.0.0
                    or higher. All players must own the DLC to join the server.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <button
            type="submit"
            disabled={isCreating}
            className="col-span-2 mt-4 px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md flex items-center justify-center transition-colors"
          >
            {isCreating && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
            {isCreating ? 'Creating...' : 'Create Server'}
          </button>
        </form>
      </div>
    </div>
  );
}
