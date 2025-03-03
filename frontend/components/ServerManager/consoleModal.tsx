import { useState, useEffect, useRef } from 'react';
import { X, Loader2 } from 'lucide-react';
import apiClient from '@/lib/apiClient';

// Define the props interface
interface ConsoleModalProps {
  serverId: string;
  onClose: () => void;
}

// Define the command history entry interface
interface CommandEntry {
  command: string;
  response: string;
}

export default function ConsoleModal({ serverId, onClose }: ConsoleModalProps) {
  const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [logs, setLogs] = useState<string[]>([]);
  const [isConnecting, setIsConnecting] = useState<boolean>(true);
  const [isSending, setIsSending] = useState<boolean>(false); // new state to track sending

  const outputRef = useRef<HTMLDivElement>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  // Connect to server logs when the modal opens
  useEffect(() => {
    const connectToLogs = () => {
      setIsConnecting(true);
      eventSourceRef.current = new EventSource(
        `${process.env.NEXT_PUBLIC_API_URL}/servers/${serverId}/logs`,
      );

      // Handle incoming messages
      eventSourceRef.current.onmessage = (event: MessageEvent<string>) => {
        setLogs((prevLogs) => [...prevLogs, event.data]);
        setIsConnecting(false); // Hide loading once logs start arriving
      };

      // Handle errors
      eventSourceRef.current.onerror = (error: Event) => {
        console.error('EventSource error:', error);
        setIsConnecting(false);
        eventSourceRef.current?.close();
      };
    };

    connectToLogs();

    // Cleanup on unmount
    return () => {
      eventSourceRef.current?.close();
    };
  }, [serverId]);

  // Send RCON command with loading state
  const sendCommand = async () => {
    if (!currentCommand.trim() || isSending) return;
    setIsSending(true);
    try {
      const { data } = await apiClient.post<{ response: string }>(
        `/servers/${serverId}/rcon`,
        { command: currentCommand },
      );
      setCommandHistory((prev) => [
        ...prev,
        {
          command: currentCommand,
          response: data.response || 'Command executed',
        },
      ]);
      setCurrentCommand('');
    } catch (error) {
      setCommandHistory((prev) => [
        ...prev,
        { command: currentCommand, response: 'Error: Failed to send command' },
      ]);
      console.error('RCON command error:', error);
    } finally {
      setIsSending(false);
    }
  };

  // Auto-scroll to the bottom when logs or command history update
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [logs, commandHistory]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 bg-secondary rounded-lg shadow-xl max-w-4xl w-full h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Server Console</h2>
          <button onClick={onClose} className="hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div
          className="flex-1 overflow-y-auto mb-4 p-2 border rounded-md bg-gray-900 text-white"
          ref={outputRef}
        >
          {isConnecting && (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
          )}
          {!isConnecting &&
            logs.map((log, index) => (
              <p key={index} className="text-gray-300">
                {log}
              </p>
            ))}
          {commandHistory.map((entry, index) => (
            <div key={index + logs.length} className="mb-2">
              <p className="text-green-400">{entry.command}</p>
              <p>{entry.response}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            className="flex-1 p-2 border rounded-md bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter command"
            disabled={isSending} // disable while sending
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !isSending) {
                sendCommand();
              }
            }}
          />
          <button
            onClick={sendCommand}
            disabled={isSending} // disable while sending
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              </>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
