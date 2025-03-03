import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import apiClient from '@/lib/apiClient';

interface Props {
  refreshServers: () => void;
  showNotification: (type: 'success' | 'error', message: string) => void;
}

export default function CreateServer({
  refreshServers,
  showNotification,
}: Props) {
  const [newServer, setNewServer] = useState({
    name: '',
    vcpus: 2,
    memory: 4,
    storage: 10,
    port: 34197,
    version: 'latest',
  });

  const [isCreating, setIsCreating] = useState(false);

  const handleCreateServer = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      await apiClient.post('/servers', newServer);
      refreshServers();
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
      showNotification('error', 'Failed to create server');
      console.log(error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <section className="mb-8 p-6 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Create New Server</h2>
      <form onSubmit={handleCreateServer} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Server Name"
          value={newServer.name}
          onChange={(e) => setNewServer({ ...newServer, name: e.target.value })}
          className="p-2 border rounded-md"
          required
          disabled={isCreating}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={isCreating}
        >
          {isCreating ? (
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            'Create Server'
          )}
        </button>
      </form>
    </section>
  );
}
