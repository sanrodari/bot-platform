const os = require('os');
const fs = require('fs');
const path = require('path');
const util = require('util');
const crypto = require('crypto');
const { exec } = require('child_process');

const mkdtempPromise = util.promisify(fs.mkdtemp);
const readdirPromise = util.promisify(fs.readdir);
const copyFilePromise = util.promisify(fs.copyFile);
const execPromise = util.promisify(exec);
const randomBytesPromise = util.promisify(crypto.randomBytes);

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

async function buildDockerImage(buildDirPath) {
  const userId = '123'; // TODO use the userId to namespace the image
  const randomName = (await randomBytesPromise(5)).toString('hex');
  const imageName = `${userId}/${randomName}`;
  const buildCommand = `docker build -t ${imageName} .`;
  const { stdout } = await execPromise(buildCommand, { cwd: buildDirPath });
  console.log('buildDockerImage stdout\n', stdout);

  return imageName;
}

// Creates a Docker image using a bot definition file and a project template
async function createDockerImage(botFilePath) {
  const buildDirPath = await buildProject(botFilePath);
  const imageName = await buildDockerImage(buildDirPath);
  // TODO persist imageName for later usage
}

module.exports = {
  createDockerImage,
};
