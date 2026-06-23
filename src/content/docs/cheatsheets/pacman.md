---
title: Package Manager 
description: Various package manager aliases and use cases
---

#### Pacman (Arch Linux)

Sync package database on the system:
```bash
pacman -Sy
```

List packages with available updates:
```bash
pacman -Qu
```

Install a specific package:
```bash
pacman -S <package_name>
```

Lists the installed packages on the system with sizes:
```bash
pacman -Qi | awk '/^Name/{name=$3} /^Installed Size/{print $4$5, name}' | sort -h
```

Counts the number of installed packages on system:
```bash
pacman -Qi | awk '/^Name/{name=$3} /^Installed Size/{print $4$5, name}' | sort -h | wc -l
```
