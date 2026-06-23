---
title: "pacman"
description: "pacman --help"
---

pacman --help
```bash
pacman --help
usage:  pacman <operation> [...]
operations:
    pacman {-h --help}
    pacman {-V --version}
    pacman {-D --database} <options> <package(s)>
    pacman {-F --files}    [options] [file(s)]
    pacman {-Q --query}    [options] [package(s)]
    pacman {-R --remove}   [options] <package(s)>
    pacman {-S --sync}     [options] [package(s)]
    pacman {-T --deptest}  [options] [package(s)]
    pacman {-U --upgrade}  [options] <file(s)>

use 'pacman {-h --help}' with an operation for available options
```

pacman sync --help
```bash
pacman -S --help
usage:  pacman {-S --sync} [options] [package(s)]
options:
  -b, --dbpath <path>  set an alternate database location
  -c, --clean          remove old packages from cache directory (-cc for all)
  -d, --nodeps         skip dependency version checks (-dd to skip all checks)
  -g, --groups         view all members of a package group
                       (-gg to view all groups and members)
  -i, --info           view package information (-ii for extended information)
  -l, --list <repo>    view a list of packages in a repo
  -p, --print          print the targets instead of performing the operation
  -q, --quiet          show less information for query and search
  -r, --root <path>    set an alternate installation root
  -s, --search <regex> search remote repositories for matching strings
  -u, --sysupgrade     upgrade installed packages (-uu enables downgrades)
  -v, --verbose        be verbose
  -w, --downloadonly   download packages but do not install/upgrade anything
  -y, --refresh        download fresh package databases from the server
                       (-yy to force a refresh even if up to date)
      --arch <arch>    set an alternate architecture
      --asdeps         install packages as non-explicitly installed
      --asexplicit     install packages as explicitly installed
      --assume-installed <package=version>
                       add a virtual package to satisfy dependencies
      --cachedir <dir> set an alternate package cache location
      --color <when>   colorize the output
      --config <path>  set an alternate configuration file
      --confirm        always ask for confirmation
      --dbonly         only modify database entries, not package files
      --debug          display debug messages
      --disable-download-timeout
                       use relaxed timeouts for download
      --disable-sandbox
                       disables all sandbox features used for the downloader process
      --disable-sandbox-filesystem
                       disables the filesystem part of the downloader process sandbox
      --disable-sandbox-syscalls
                       disables the syscalls part of the downloader process sandbox
      --gpgdir <path>  set an alternate home directory for GnuPG
      --hookdir <dir>  set an alternate hook location
      --ignore <pkg>   ignore a package upgrade (can be used more than once)
      --ignoregroup <grp>
                       ignore a group upgrade (can be used more than once)
      --logfile <path> set an alternate log file
      --needed         do not reinstall up to date packages
      --noconfirm      do not ask for any confirmation
      --noprogressbar  do not show a progress bar when downloading files
      --noscriptlet    do not execute the install scriptlet if one exists
      --overwrite <glob>
                       overwrite conflicting files (can be used more than once)
      --print-format <string>
                       specify how the targets should be printed
      --sysroot        operate on a mounted guest system (root-only)
```

pacman update --help
```bash
pacman -U --help
usage:  pacman {-U --upgrade} [options] <file(s)>
options:
  -b, --dbpath <path>  set an alternate database location
  -d, --nodeps         skip dependency version checks (-dd to skip all checks)
  -p, --print          print the targets instead of performing the operation
  -r, --root <path>    set an alternate installation root
  -v, --verbose        be verbose
  -w, --downloadonly   download packages but do not install/upgrade anything
      --arch <arch>    set an alternate architecture
      --asdeps         install packages as non-explicitly installed
      --asexplicit     install packages as explicitly installed
      --assume-installed <package=version>
                       add a virtual package to satisfy dependencies
      --cachedir <dir> set an alternate package cache location
      --color <when>   colorize the output
      --config <path>  set an alternate configuration file
      --confirm        always ask for confirmation
      --dbonly         only modify database entries, not package files
      --debug          display debug messages
      --disable-download-timeout
                       use relaxed timeouts for download
      --disable-sandbox
                       disables all sandbox features used for the downloader process
      --disable-sandbox-filesystem
                       disables the filesystem part of the downloader process sandbox
      --disable-sandbox-syscalls
                       disables the syscalls part of the downloader process sandbox
      --gpgdir <path>  set an alternate home directory for GnuPG
      --hookdir <dir>  set an alternate hook location
      --ignore <pkg>   ignore a package upgrade (can be used more than once)
      --ignoregroup <grp>
                       ignore a group upgrade (can be used more than once)
      --logfile <path> set an alternate log file
      --needed         do not reinstall up to date packages
      --noconfirm      do not ask for any confirmation
      --noprogressbar  do not show a progress bar when downloading files
      --noscriptlet    do not execute the install scriptlet if one exists
      --overwrite <glob>
                       overwrite conflicting files (can be used more than once)
      --print-format <string>
                       specify how the targets should be printed
      --sysroot        operate on a mounted guest system (root-only)
```
