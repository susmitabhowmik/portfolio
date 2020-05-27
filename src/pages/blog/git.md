---
path: "/git"
date: 2020-01-22T17:12:33.962Z
title: "Git"
---

This week as a part of the Full Stack Apprenticeship at [Sparkbox](https://seesparkbox.com/), we focused on becoming very comfortable with Git. Here is a list of things I learned this week.

1. Using the merge button on GitHub makes commit history hard to read.
1. Instead of merging, use `git rebase`. Rebasing will put the branch you want to merge on top of the master branch and add it to the end.
1. A SHA (a long line of characters associated with a commit message) refers to changes and the parent of a working directory. If the parent changes, the SHA will change.
1. -ff (fast forward) will take the master branch and point to the next commit. ff-only will only do the action if ff is possible.
1. Bare git repositories are repositories with no working directory.
1. Verified commits are commits cryptographically changed by the committer. You can give someone your public GPG key, and they can check that the commit was made using your computer.
1. You can have a different GPG key per device you are using to push to GitHub.
1. If your commits are not verified, other people can impersonate you.
1. SSH stands for secure shell. It's a secure way to access a computer over an unsecured network.
1. You can have more than one SSH and GPG key added to your GitHub account.
1. SSH will not verify your commits; only GPG will.
1. gitK is a built-in tool used to view Git commit history.
1. When you submit a pull request, it will be for your entire branch. You do not need to submit multiple pull requests for different commits on the same branch.

Things I learned outside of Git this sprint:

1. NVM is a Node version manager and will enable you to switch between different versions of Node if you have more than one installed.
1. Netlify is an excellent, easy way to deploy static websites. They let you import directories directly from GitHub.

Awesome resources from this week:

- [Sparkbox Standard - Github Verified Commits](https://github.com/sparkbox/standard/blob/master/security/verified-commits.md)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Take Control of Your Commit History](https://seesparkbox.com/foundry/take_control_of_your_commit_history)
- "DangIt Git" - Wizard Zines
