'use client';
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import apiClient from '@/lib/apiClient';

interface SystemInfoProps {
  type: 'cpu' | 'ram' | 'storage' | 'all' | 'full';
}

const SystemInfo: React.FC<SystemInfoProps> = ({ type }) => {
  const [cpuProgress, setCpuProgress] = useState(0);
  const [ramProgress, setRamProgress] = useState(0);
  const [storageProgress, setStorageProgress] = useState(0);
  const [systemInfo, setSystemInfo] = useState({
    cpu: 0,
    ram: { used: 0, total: 0 },
    storage: { used: 0, total: 0, filesystem: '' },
  });
  useEffect(() => {
    const fetchSystemInfo = async () => {
      try {
        const response = await apiClient.get('/servers/system-stats');
        const { cpuUsage, ramUsage, storageUsage } = response.data;

        if (storageUsage && storageUsage.length > 0) {
          const cpu = parseFloat(cpuUsage);
          const ramUsed = parseFloat(ramUsage.used);
          const ramTotal = parseFloat(ramUsage.total);
          const ram = (ramUsed / ramTotal) * 100;
          const storageUsed = parseFloat(storageUsage[0].used);
          const storageAvailable = parseFloat(storageUsage[0].available);
          const storageTotal = storageUsed + storageAvailable;
          const storage = (storageUsed / storageTotal) * 100;

          setCpuProgress(cpu);
          setRamProgress(ram);
          setStorageProgress(storage);

          setSystemInfo({
            cpu,
            ram: { used: ramUsed, total: ramTotal },
            storage: {
              used: storageUsed,
              total: storageTotal,
              filesystem: storageUsage[0].filesystem,
            },
          });
        }
      } catch (error) {
        console.error('Error fetching system info:', error);
      }
    };

    fetchSystemInfo();

    const interval = setInterval(fetchSystemInfo, 2500);
    return () => clearInterval(interval);
  }, []);

  const renderCpuCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={cpuProgress} className="w-[80%]" />
        <p className="mb-1 mt-1 text-xs text-muted-foreground">
          CPU usage: {Math.round(cpuProgress)}%
        </p>
        <p className="text-xs text-muted-foreground">
          {Math.round(cpuProgress)}% (Total CPU usage)
        </p>
      </CardContent>
    </Card>
  );

  const renderRamCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">RAM Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={ramProgress} className="w-[80%]" />
        <p className="mb-1 mt-1 text-xs text-muted-foreground">
          RAM usage: {Math.round(ramProgress)}%
        </p>
        <p className="text-xs text-muted-foreground">
          {Math.round(ramProgress)}% ({systemInfo.ram.used.toFixed(0)}GB/
          {systemInfo.ram.total.toFixed(0)}GB)
        </p>
      </CardContent>
    </Card>
  );
  const renderStorageCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Storage Usage ({systemInfo.storage.filesystem})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={storageProgress} className="w-[80%]" />
        <p className="mb-1 mt-1 text-xs text-muted-foreground">
          Storage usage: {Math.round(storageProgress)}%
        </p>
        <p className="text-xs text-muted-foreground">
          {Math.round(storageProgress)}% ({systemInfo.storage.used.toFixed(1)}
          GB/
          {systemInfo.storage.total.toFixed(1)}GB)
        </p>
      </CardContent>
    </Card>
  );

  const renderFullInfoCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">System Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-xs text-muted-foreground">CPU Usage</h3>
            <Progress value={cpuProgress} className="w-full" />
            <p className="mb-1 mt-1 text-xs text-muted-foreground">
              CPU usage: {Math.round(cpuProgress)}%
            </p>
            <p className="text-xs text-muted-foreground">
              {Math.round(cpuProgress)}% (Total CPU usage)
            </p>
          </div>
          <div>
            <h3 className="text-xs text-muted-foreground">RAM Usage</h3>
            <Progress value={ramProgress} className="w-full" />
            <p className="mb-1 mt-1 text-xs text-muted-foreground">
              RAM usage: {Math.round(ramProgress)}%
            </p>
            <p className="text-xs text-muted-foreground">
              {Math.round(ramProgress)}% ({systemInfo.ram.used.toFixed(0)}GB/
              {systemInfo.ram.total.toFixed(0)}GB)
            </p>
          </div>
          <div>
            <h3 className="text-xs text-muted-foreground">Storage Usage</h3>
            <Progress value={storageProgress} className="w-full" />
            <p className="mb-1 mt-1 text-xs text-muted-foreground">
              Storage usage: {Math.round(storageProgress)}%
            </p>
            <p className="text-xs text-muted-foreground">
              {Math.round(storageProgress)}% (
              {systemInfo.storage.used.toFixed(0)}
              GB/
              {systemInfo.storage.total.toFixed(0)}GB)
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAllInfoCard = () => (
    <div className="grid gap-4 w-screen md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto">
      {renderCpuCard()}
      {renderRamCard()}
      {renderStorageCard()}
    </div>
  );

  if (type === 'cpu') return renderCpuCard();
  if (type === 'ram') return renderRamCard();
  if (type === 'storage') return renderStorageCard();
  if (type === 'full') return renderFullInfoCard(); // Render everything in one card
  return renderAllInfoCard(); // Default is returning full card
};

export default SystemInfo;
