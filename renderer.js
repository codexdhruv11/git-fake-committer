document.getElementById('select-folder').addEventListener('click', async () => {
  const folderPath = await window.electronAPI.selectFolder();
  document.getElementById('folder-path').innerText = folderPath;
  window.folderPath = folderPath;
});

document.getElementById('start-commits').addEventListener('click', async () => {
  const start = document.getElementById('start-date').value;
  const end = document.getElementById('end-date').value;
  const count = parseInt(document.getElementById('commit-count').value);

  const result = await window.electronAPI.startCommits({
    folderPath: window.folderPath,
    startDate: start,
    endDate: end,
    totalCommits: count
  });

  document.getElementById('output').innerText = result;
});
