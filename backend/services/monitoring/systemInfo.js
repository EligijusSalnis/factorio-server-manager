const os = require('os');
const path = require('path');
const { getDiskInfo } = require('node-disk-info');
const fs = require('fs');

let previousTotalIdle = 0;
let previousTotalTick = 0;

const getCpuUsage = () => {
  const cpus = os.cpus();
  let totalIdle = 0;
  let totalTick = 0;

  // Calculate the total idle and total time for all CPUs
  cpus.forEach((cpu) => {
    for (const type in cpu.times) {
      totalTick += cpu.times[type];
    }
    totalIdle += cpu.times.idle;
  });

  // Calculate the differences between the current and previous readings
  const idleDifference = totalIdle - previousTotalIdle;
  const tickDifference = totalTick - previousTotalTick;

  // Update previous totals for next call
  previousTotalIdle = totalIdle;
  previousTotalTick = totalTick;

  // Calculate CPU usage
  const usagePercentage =
    tickDifference === 0
      ? 0
      : ((tickDifference - idleDifference) / tickDifference) * 100;

  return usagePercentage.toFixed(2); // Return CPU usage
};

// Function to get the current directory disk usage for both Windows and Linux
const getDiskUsage = async () => {
  try {
    // Get the current project directory
    const currentDir = process.cwd();

    // Get all disk information
    const disks = await getDiskInfo();

    // For Linux: Find the disk that contains the current directory
    if (os.platform() !== 'win32') {
      // Sort disks by mounted length and find the disk where the current directory is located
      const sortedDisks = [...disks].sort(
        (a, b) => b._mounted.length - a._mounted.length,
      );
      const targetDisk = sortedDisks.find((disk) =>
        currentDir.startsWith(disk._mounted),
      );

      if (targetDisk) {
        const blockSize = 1024;
        const usedInGB = (
          (targetDisk._used * blockSize) /
          Math.pow(1024, 3)
        ).toFixed(2); // Convert used to GB
        const availableInGB = (
          (targetDisk._available * blockSize) /
          Math.pow(1024, 3)
        ).toFixed(2); // Convert available to GB
        const totalInGB = (
          ((targetDisk._used + targetDisk._available) * blockSize) /
          Math.pow(1024, 3)
        ).toFixed(2); // Convert total to GB
        return [
          {
            filesystem: targetDisk._filesystem,
            used: usedInGB,
            available: availableInGB,
            total: totalInGB,
          },
        ];
      }
    }
    // Windows: Find the disk based on drive letter
    else {
      const currentDiskLetter = path.parse(currentDir).root.charAt(0);

      const targetDisk = disks.find(
        (disk) =>
          disk._mounted.charAt(0).toLowerCase() ===
          currentDiskLetter.toLowerCase(),
      );

      if (targetDisk) {
        return [
          {
            filesystem: targetDisk._filesystem,
            used: (targetDisk._used / Math.pow(1024, 3)).toFixed(2), // Convert to GB
            available: (targetDisk._available / Math.pow(1024, 3)).toFixed(2), // Convert to GB
          },
        ];
      }
    }

    // If couldn't find a matching disk, return the first available disk
    return [
      {
        filesystem: disks[0]._filesystem,
        used: (disks[0]._used / Math.pow(1024, 3)).toFixed(2),
        available: (disks[0]._available / Math.pow(1024, 3)).toFixed(2),
      },
    ];
  } catch (error) {
    console.error('Error getting disk info:', error);
    return [
      {
        filesystem: 'unknown',
        used: '0',
        available: '0',
      },
    ];
  }
};

// Function to get system usage information
const getSystemInfo = async () => {
  // Get CPU usage
  const cpuUsage = getCpuUsage();

  // Get RAM usage
  const totalMemory = parseFloat(os.totalmem() / Math.pow(1024, 3)).toFixed(2); // Total RAM in GB
  const freeMemory = parseFloat(os.freemem() / Math.pow(1024, 3)).toFixed(2); // Free RAM in GB
  const usedMemory = (parseFloat(totalMemory) - parseFloat(freeMemory)).toFixed(
    2,
  ); // Used RAM in GB

  // Get disk usage information (non-blocking)
  const diskUsage = await getDiskUsage();

  return {
    cpuUsage,
    ramUsage: {
      total: totalMemory,
      free: freeMemory,
      used: usedMemory,
    },
    storageUsage: diskUsage,
  };
};

// Export the getSystemInfo function
module.exports = {
  getSystemInfo,
};
