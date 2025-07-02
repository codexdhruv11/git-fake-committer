const simpleGit = require('simple-git');
const jsonfile = require('jsonfile');
const moment = require('moment');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

// ✅ Your GitHub identity (must match GitHub settings)
const GITHUB_NAME = "codexdhruv11";
const GITHUB_EMAIL = "dhruvkaushikjee9457@gmail.com";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function makeCommits(repoPath, startDateStr, endDateStr, totalCommits) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const git = simpleGit(repoPath);

  const dataPath = path.join(repoPath, 'data.json');
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, '{}');

  const commitDates = [];

  while (commitDates.length < totalCommits) {
    const randTime = getRandomInt(startDate.getTime(), endDate.getTime());
    const date = moment(new Date(randTime)).format("YYYY-MM-DDTHH:mm:ss");
    commitDates.push(date);
  }

  for (let i = 0; i < commitDates.length; i++) {
    const date = commitDates[i];
    const data = { index: i, date };

    await jsonfile.writeFile(dataPath, data);
    await git.add([dataPath]);

    await new Promise((resolve, reject) => {
      exec(
        `git commit -m "Commit ${i + 1}" --date="${date}"`,
        {
          cwd: repoPath,
          env: {
            ...process.env,
            GIT_AUTHOR_DATE: date,
            GIT_COMMITTER_DATE: date,
            GIT_AUTHOR_NAME: GITHUB_NAME,
            GIT_AUTHOR_EMAIL: GITHUB_EMAIL,
            GIT_COMMITTER_NAME: GITHUB_NAME,
            GIT_COMMITTER_EMAIL: GITHUB_EMAIL,
          },
        },
        (error, stdout, stderr) => {
          if (error) {
            console.error(`❌ Commit ${i + 1} failed:\n`, stderr);
            return reject(stderr);
          }
          console.log(`✅ Commit ${i + 1} → ${date}`);
          resolve(stdout);
        }
      );
    });
  }

  await git.push();
  return `✅ ${totalCommits} commits pushed from ${startDateStr} to ${endDateStr}`;
}

module.exports = { makeCommits };
