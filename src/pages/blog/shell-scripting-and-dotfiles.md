---
path: "/shell-scripting-and-dotfiles"
date: 2020-01-11T17:12:33.962Z
title: "Shell Scripting And Dotfiles"
---

This week I learned that dotfiles are shortcuts which you can add to make your use of the terminal easier.

Dotfiles go in the home directory. You can add the commands directly into .zshrc if using the zsh shell. Use command and . to show hidden dotfiles. To connect dotfiles to the .zshrc file, add ~/source/path in front of them

chmod will make shell scripts executable before running them. use ./script_name to run a shell script in terminal

For some dotfiles such as .gitconfig and .zshrc you will have to create symbolic links in the home directory if these files are in your dotfile folder.

Aliases are shortcuts for things you use all the time.

Dotfiles are used to make your life easier. Only add them if you know how to use them / what they do.

Excellent resources from this week:

* "Bite Size Command Line" - Wizard Zines
* https://code.tutsplus.com/tutorials/setting-up-a-mac-dev-machine-from-zero-to-hero-with-dotfiles--net-35449
* https://code.tutsplus.com/tutorials/setting-up-a-mac-dev-machine-from-zero-to-hero-with-dotfiles-part-2--cms-23145
