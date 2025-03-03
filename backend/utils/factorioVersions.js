const { docker } = require('./docker'); // Import the shared instance

const getAvailableVersions = async () => {
  try {
    const images = await docker.listImages();
    return images
      .flatMap((img) => img.RepoTags || [])
      .filter((tag) => tag && tag.startsWith('factoriotools/factorio:'))
      .map((tag) => tag.split(':')[1])
      .filter((v) => v);
  } catch (error) {
    console.error('Version check failed:', error);
    return ['latest']; // Fallback to latest
  }
};

const isValidVersion = async (version) => {
  const versions = await getAvailableVersions();
  return versions.includes(version);
};

module.exports = {
  getAvailableVersions,
  isValidVersion,
};
