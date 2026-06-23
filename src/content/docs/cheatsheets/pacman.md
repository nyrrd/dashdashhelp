---
title: Package Manager 
description: Various package manager aliases and use cases
---

#### Pacman (Arch Linux)

Counts the number of installed packages on system:
```bash
pacman -Qi | awk '/^Name/{name=$3} /^Installed Size/{print $4$5, name}' | sort -h | wc -l
```
