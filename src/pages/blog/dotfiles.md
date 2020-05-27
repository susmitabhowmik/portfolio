---
path: "/dotfiles"
date: 2020-01-11T17:12:33.962Z
title: "Dotfiles"
---

What are dotfiles? This week I learned that dotfiles are shortcuts that you can add to make your use of the terminal easier. Dotfiles get their name because they begin with a dot, which makes them a "hidden file" on your system. Here are some things I learned about using dotfiles, and hopefully, you can use it to improve your workflow.

If you wish to add dotfiles, you can add them to your home directory. You can add the commands directly into the `.zshrc` file if using the zsh shell or `.bashrc` if using bash. Use `command` and `.` when in the Finder for MacOS to show hidden dotfiles within a directory. To connect dotfiles to the .zshrc file, add `~/source/path` in front of them. For some dotfiles such as `.gitconfig` and `.zshrc` you will have to create symbolic links in the home directory if these files are in your dotfile folder. A symbolic link refers to a location in another file path.

Dotfiles can be super useful. You can add aliases, which are shortcuts, to common commands that you utilize. Dotfiles can dramatically improve your user experience. You can even use them to customize your terminal output. However, take caution when utilizing dotfiles. Make sure you know what exactly a line of code does before using it on your machine, as it might have detrimental effects. With great power comes great responsibility!

As a reference [here](https://github.com/susmitabhowmik/dotfiles) is a link to my dotfiles.

Below are some excellent resources I found really helpful in understanding and setting up my own dotfiles.

- [Setting Up a Mac Dev Machine From Zero to Hero With Dotfiles](https://code.tutsplus.com/tutorials/setting-up-a-mac-dev-machine-from-zero-to-hero-with-dotfiles--net-35449)
- [Setting Up a Mac Dev Machine From Zero to Hero With Dotfiles: Part 2](https://code.tutsplus.com/tutorials/setting-up-a-mac-dev-machine-from-zero-to-hero-with-dotfiles-part-2--cms-23145)
