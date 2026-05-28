---
title: "boxxy"
description: "help for boxxy"
---

```bash
$ boxxy --help
boxxy forces bad programs to put their files somewhere else via Linux user namespaces.

Usage: boxxy [OPTIONS] <COMMAND TO RUN>...
       boxxy [OPTIONS] [COMMAND TO RUN]... <COMMAND>

Commands:
  config  View the config file.
  scan    Scan your homedir for applications that may benefit from boxxy.
  help    Print this message or the help of the given subcommand(s)

Arguments:
  <COMMAND TO RUN>...
          The command to run, ex. `ls -lah` or `aws configure`.

Options:
  -i, --immutable
          Make the root filesystem immutable.

  -l, --log-level <LOG_LEVEL>
          [default: info]

      --force-colour
          Force colour output even when stdout is not a tty.

  -t, --trace
          Enable tracing of I/O-related syscalls and generate a report of files/directories the program touched.

  -d, --dotenv
          Load environment variables from the .env file in the current directory and apply them to the boxxed program.

      --daemon
          Fork to the background and run as a daemon.

      --no-config
          Disable loading config files entirely.

  -r, --rule <ARG_RULES>
          Pass rules via CLI. -r/--rule `/remount/this:/to/this:<file/dir>`

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version
```
