const os = require('os');
const fs = require('fs');
const path = require('path');
const util = require('util');

const mkdtempPromise = util.promisify(fs.mkdtemp);
const readdirPromise = util.promisify(fs.readdir);
const copyFilePromise = util.promisify(fs.copyFile);

const PROJECT_TEMPLATE_PATH = path.resolve('../project-template');

async function buildProject(botFilePath) {
  const prefix = path.join(os.tmpdir(), 'bot-building-');
  const buildDirPath = await mkdtempPromise(prefix);

  const exclusions = ['node_modules', 'botHandler.js'];
  const filesToCopy = (await readdirPromise(PROJECT_TEMPLATE_PATH))
    .filter(filepath => !exclusions.some(e => filepath.includes(e)));

  await Promise.all(filesToCopy.map(filepath => {
    const src = path.join(PROJECT_TEMPLATE_PATH, filepath);
    const dest = path.join(buildDirPath, filepath);
    return copyFilePromise(src, dest);
  }));
  await copyFilePromise(botFilePath, path.join(buildDirPath, 'botHandler.js'));
  return buildDirPath;
}

// Creates a Docker image using a bot definition file and a project template
async function createDockerImage(botFilePath) {
  const buildDirPath = await buildProject(botFilePath);
  // TODO
}

module.exports = {
  createDockerImage,
};
