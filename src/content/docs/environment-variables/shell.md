---
title: Shell & Prompt
description: Collection of Environment Variables for the shell
---

##### XDG User Directories

```bash
export XDG_CONFIG_HOME=$HOME/.config            # Where user-specific configurations should be written (analogous to /etc).
export XDG_CACHE_HOME=$HOME/.cache  # Where user-specific non-essential (cached) data should be written (analogous to /var/cache).
export XDG_DATA_HOME=$HOME/.local/share             # Where user-specific data files should be written (analogous to /usr/share).
export XDG_STATE_HOME=$HOME/.local/state            # Where user-specific state files should be written (analogous to /var/lib).
```

##### Shell

**Bash:**

```bash
export BASH_COMPLETION_USER_FILE="$XDG_CONFIG_HOME"/bash-completion/bash_completion
```

**ZSH:**

```bash
export ZDOTDIR=$XDG_CONFIG_HOME/zsh                                       # ZSH home
```

Oh My Zsh:
```bash
export ZSH="$ZDOTDIR/ohmyzsh"                                             # ohmyzsh installation.
```

##### Prompt

**Starship**
```bash
export STARSHIP_CONFIG=$XDG_CONFIG_HOME/starship.toml                     # Starship configuration
export STARSHIP_CACHE=$XDG_CACHE_HOME/starship                            # Starship configuration cache
```

##### Window Manager

**Sway**
```bash
export SWAY_HOME=$XDG_CONFIG_HOME/sway/                                   # Sway configuration files
```


Reference: https://wiki.archlinux.org/title/XDG_Base_Directory 
