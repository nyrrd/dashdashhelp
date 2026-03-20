# `--help`

### Environment Variables:
**XDG:** Keep your `~/` clean.
```bash
## -- XDG USER DIRS -- ##
export XDG_CONFIG_HOME=$HOME/.config            # Where user-specific configurations should be written (analogous to /etc).
export XDG_CACHE_HOME=$HOME/.cache  # Where user-specific non-essential (cached) data should be written (analogous to /var/cache).
export XDG_DATA_HOME=$HOME/.local/share             # Where user-specific data files should be written (analogous to /usr/share).
export XDG_STATE_HOME=$HOME/.local/state            # Where user-specific state files should be written (analogous to /var/lib).
```

**ZSH:**
```bash
## -- ZSH BABY!! -- ##
export ZDOTDIR=$XDG_CONFIG_HOME/zsh                                       # ZSH home
#export ZSH="$ZDOTDIR/ohmyzsh"                                             # ohmyzsh installation.
```

**TASK WARRIOR**
```bash
# Task Warrrior - Environment Variables - https://taskwarrior.org/docs/configuration/#environment-variables
# Arch Wiki XDG - Task - https://wiki.archlinux.org/title/XDG_Base_Directory#Partial --  task 
export TASKRC=$XDG_CONFIG_HOME/task/taskrc
export TASKDATA=$XDG_CONFIG_HOME/task/task
```
