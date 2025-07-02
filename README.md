# 🟩 Fake Git Commit Generator (Electron App)

This is a desktop app built with **Electron + Node.js** that lets you:
- Generate **backdated Git commits**
- Push them to your GitHub repo
- Create a natural-looking **contribution graph** 🧠📈

Perfect for:
- Reviving your GitHub profile
- Practicing contribution tracking
- Faking progress on old personal projects 👨‍💻

---

## 🚀 Features

- ⚡ Easy drag-and-click interface
- 📅 Set custom date range (e.g., Feb–June 2025)
- 🔢 Choose number of commits (e.g., 60)
- 👤 Uses your GitHub name + email to show up on your contribution graph
- 📂 Works on any folder (existing or new Git repo)
- 🌐 Automatically pushes to GitHub

---

## 🧱 Installation

```bash
git clone https://github.com/yourusername/git-fake-committer.git
cd git-fake-committer
npm install
npm start
````

---

## 🛠️ Requirements

* Node.js installed
* Git installed and globally accessible
* GitHub account
* A **public GitHub repo** already created (or create a new one)

---

## 💡 How to Use

1. Run the app:

   ```bash
   npm start
   ```

2. In the UI:

   * Click `Select Folder` → choose your **Git repo folder** (example: an old project)
   * Enter:

     * Start date (e.g., `2025-02-01`)
     * End date (e.g., `2025-06-30`)
     * Total number of commits (e.g., `60`)
   * Click `Make Commits`

3. The app will:

   * Generate fake commits with random times
   * Add `data.json` to simulate file changes
   * Push commits to GitHub

4. After 5–10 minutes, go to your [GitHub profile](https://github.com) and admire the green squares 💚

---

## 📌 Important Notes

✅ Make sure:

* The repo is **public**
* Commits go to the **default branch** (`main` or `master`)
* Your Git identity in the app matches your GitHub email

> The app uses:
>
> ```js
> GIT_AUTHOR_NAME = "codexdhruv11"
> GIT_AUTHOR_EMAIL = "dhruvkaushikjee9457@gmail.com"
> ```
>
> You can edit these in `commitLogic.js`

---

## 🧪 Troubleshooting

* ❌ *"No remote configured"*
  👉 Run: `git remote add origin <your-repo-url>` in the selected folder

* ❌ *Commits not showing on GitHub*
  👉 Make sure you're using a verified GitHub email, and pushing to the default branch

* ❌ *Permission denied (publickey)*
  👉 Make sure you have [GitHub SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) configured

---

## 📜 License

MIT License. Use it wisely. ✌️

---

## 💬 Credits

Created by **codexdhruv11**
Feel free to fork, improve, or abuse responsibly 😄
