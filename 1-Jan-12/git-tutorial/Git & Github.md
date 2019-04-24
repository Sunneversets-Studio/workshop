# Git & Github

1. what, why git
2. what is github
3. git workflow
4. Git and github structure
5. co-operater
   

## What is git

Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. 

It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files. 

As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows. 

## Installation

### Linux

```bash
$ sudo apt-get install git
```

### OSX

Install Homebrew first

copy flowing command to your terminal

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

using homebrew to install git

```
$ brew install git
```

### Windows

Download from https://git-scm.com/downloads

Find on start menu “Git”->“Git Bash”

```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

# Workflow

### Initiate

1.  Directly clone from`git clone https://github.com/youraccount/abc.git`
2.  firstly init through `git init`
    then `git remote add upstream https://github.com/Sunneversets-Studio/abc.git`



## Git structure 

![ç¸å³æä½å¨ç"æä¸­å¾è§£](https://crackfree.github.io/2017/03/10/Depth-comprehension-of-git-structure-and-conception-md/git-data-transport-commands.png)



You can think of the HEAD as the "current branch". When you switch branches with `git checkout`, the HEAD revision changes to point to the tip of the new branch.



## Steps when working on a new feature:

- Merge the latest version of upstream repo to the local master branch

  `git pull upstream master # git pull <remote> <branch>`

- Start working on a new feature by creating a new branch called "yourfeature#issuenumber"

  `git branch yourfeature#issuenumber`

  `git checkout yourfeature#issuenumber`
  or
  `git checkout -b yourfeature#issuenumber`

- Work on the feature, commit as many as you want to the yourfeature#issuenumber branch of you own local repo

  `git commit -am 'write something here to remind you what you did' # -a commit all changes -m commit with a message`

  - commit certain file: `git commit <file>`

- If you have created new files which may be untracked(use `git status` or `gst` to check out), you need to add them to the index:

  `git add <file>`

- Once the feature is complete, push all changes to your yourfeature#issuenumber branch

  `git commit -am 'finished the feature'`

  `git push origin yourfeature#issuenumber # git push <remote> <branch>`

- Then, go to github.com and issue a pull request using the branch



