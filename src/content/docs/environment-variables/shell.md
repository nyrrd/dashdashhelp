---
title: Shell & Prompt
description: Collection of Environment Variables for the shell
---
**BASH:**

**ZSH:**
**XDG_DIRECTORY**
```bash
export ZDOTDIR=$XDG_CONFIG_HOME/zsh                                       # ZSH home
```
**Oh My Zsh**
```bash
export ZSH="$ZDOTDIR/ohmyzsh"                                             # ohmyzsh installation.
```

**Starship Prompt:**
```bash
export STARSHIP_CONFIG=$XDG_CONFIG_HOME/starship.toml                     # Starship configuration
export STARSHIP_CACHE=$XDG_CACHE_HOME/starship                            # Starship configuration cache
```
