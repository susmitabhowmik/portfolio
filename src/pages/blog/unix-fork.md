---
path: "/unix-fork"
date: 2020-06-11T17:12:33.962Z
title: "The Unix Fork Function"
---

Recently I have been learning about operating systems. One of the most important functions I have learned about is the Unix fork function. In this blog post, I will try to explain what the fork command does and why it is important.

The fork function is used to create processes. Processes are running instances of a program. The fork command creates a child process from a parent process. The child process is identical to the parent process in that it contains all of the file descriptors and registers contained in the parent process. Right after the fork occurs, the original process and the child process only differ in their return value. The child process returns a 0, and the parent process returns the child's process identifier (PID). After the fork, both processes are free to go their separate ways. Child processes can execute code that is different from the parent. Since the child process and the parent process contain variables with identical values at the time the fork occurs, subsequent changes in variables in either do not affect the other. For instance, changes within the child process after the fork do not affect the parent process and vice versa. If there is an error (i.e., the system runs out of memory), then -1 is returned to the parent, and a child process is not created.

When a Unix fork occurs, the operating system creates a new process creation block, which is a data structure used to store information on the process, and new page tables, which are used to track memory addresses by the operating system. However, both the parent and child processes point to the same pages. All of the data pages are read-only, and as long as there are no changes in the pages, they remain read-only. At this point, we have not replicated the pages. However, once either process updates a memory word, there is a trap in the operating system created by the violation of this read-only rule. A copy is created of the page that violated the read-only rule. Both processes (the parent and child) now have their own copy of the page where both copies are set to read/write, so that future changes will not cause a trap to occur. This copy-on-write approach is used to improve performance by reducing copying. Copy-on-write also prevents the operating system from going into main memory and duplicating all of the main memory from the parent process into the child process.

Sources and Resources:

- "Modent Operating Systems" - Andrew S. Tanenbaum and Herbert Bos
- [UNIX / Linux Processes: C fork() Function](https://www.thegeekstuff.com/2012/05/c-fork-function/)
