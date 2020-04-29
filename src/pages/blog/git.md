---
path: "/git"
date: 2020-01-22T17:12:33.962Z
title: "Git"
---

As we wrap up the second sprint in the apprenticeship here is a list of things I learned this week:

1. Using the merge button on GitHub makes commit history hard to read
1. Instead of merging use git rebase. Rebasing will put the branch you want to merge on top of the master branch and add it to the end.
1. A SHA (long line of characters associated with a commit message) refers to changes and the parent of a working directory. If the parent changes, the SHA will change.
1. -ff (fast forward) will take the master branch and point to the next commit. ff-only will only do the action if ff is possbile
1. bare git repos are repos with no working directory
1. verified commits are commits cryptographically changed by the committer. You can give someone your public gpg key and they can verify the commit was actually made by you.
1. You can have a different gpg key per device you are using to push to github. 
1. If your commits are not verified, other people can impersonate you
1. SSH = secure shell Its a secure way to access a computer over an unsecure network
1. You can have more than one SSH and GPG key added to your GitHub account
1. SSH will not verify your commits. Only GPG will
1.gitK is a built in tool used to view git commit history
1. When you submit a pull request, it will be for your entire branch. You do not need to submit multiple pull requests for different commits on the same branch.

Things I learned outside of git this sprint:
1. nvm is node version manager and will enable you to switch between different versions of node if you have more than one installed
1. Netlify is an awesome, easy way to deploy static websites. They let you import in directories from GitHub


Awesome resources from this week:

* https://github.com/sparkbox/standard/blob/master/security/verified-commits.md
* https://education.github.com/git-cheat-sheet-education.pdf
* https://seesparkbox.com/foundry/take_control_of_your_commit_history
* DangIt Git - Wizard Zines