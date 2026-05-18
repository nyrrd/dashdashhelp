---
title: Tools
description: Collection of Environment Variables for terminal tools
---

##### Terminal

**TMUX:**
```bash
export TMUX_HOME=$XDG_CONFIG_HOME/tmux                                    # TMUX Home 
```

**TASK WARRIOR:**
```bash
# Task Warrrior - Environment Variables - https://taskwarrior.org/docs/configuration/#environment-variables
# Arch Wiki XDG - Task - https://wiki.archlinux.org/title/XDG_Base_Directory#Partial --  task 
export TASKRC=$XDG_CONFIG_HOME/task/taskrc
export TASKDATA=$XDG_CONFIG_HOME/task/task
```

##### Media

```bash
export FFMPEG_DATADIR="$XDG_CONFIG_HOME"/ffmpeg
```

##### Web

**Browsers:**<br>
***W3M***
```bash 
export W3M_DIR=$XDG_STATE_HOME/w3m                                        # w3m configuration directory
```
***LYNX***
```bash
export LYNX_CFG="$XDG_CONFIG_HOME"/lynx.cfg				  # LYNX config file
```

**WGET:**
```bash
export WGETRC="$XDG_CONFIG_HOME/wgetrc"					  # WGET configuration
```
