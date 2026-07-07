---
title: lxc
description: help for lxc
---

```bash
$ lxc --help
Description:
  Command line client for LXD

  All of LXD's features can be driven through the various commands below.
  For help with any of those, simply call them with --help.

Usage:
  lxc [command]

Available Commands:
  alias           Manage command aliases
  auth            Manage user authorization
  cluster         Manage cluster members
  completion      Generate the autocompletion script for the specified shell
  config          Manage instance and server configuration options
  console         Attach to instance consoles
  copy            Copy instance within or in between LXD servers
  delete          Delete instances and snapshots
  exec            Execute command in instance
  export          Export instance backups
  file            Manage files in instances
  help            Help about any command
  image           Manage images
  import          Import instance backups
  info            Show instance or server information
  init            Create instances from images
  launch          Create and start instances from images
  list            List instances
  monitor         Monitor a local or remote LXD server
  move            Move instance within or in between LXD servers
  network         Manage and attach instances to networks
  operation       Manage background operations
  pause           Pause instances
  placement-group Manage placement groups
  profile         Manage profiles
  project         Manage projects
  publish         Publish instance as images
  query           Send a raw query to LXD
  rebuild         Rebuild instance
  remote          Manage the list of remote servers
  rename          Rename instances and snapshots
  replicator      Manage replicators
  restart         Restart instances
  restore         Restore instances from snapshots
  snapshot        Create instance snapshot
  start           Start instances
  stop            Stop instances
  storage         Manage storage pools and volumes
  version         Show local and remote versions
  warning         Manage warnings

Flags:
      --all            Show less common commands
      --debug          Show all debug messages
      --force-local    Force using the local unix socket
  -h, --help           Print help
      --project        Override the source project
  -q, --quiet          Do not show progress information
      --sub-commands   Use with help or --help to view sub-commands
  -v, --verbose        Show all information messages
      --version        Print version number

Use "lxc [command] --help" for more information about a command.
```
