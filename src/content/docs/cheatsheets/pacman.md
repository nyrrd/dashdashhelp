---
title: Package Managers 
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

Perform a system update:
```bash
pacman -Syu
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

---

#### APT (Debian/Ubuntu)

Update the systems package database:
```bash
apt update
```

Install a specific package:
```bash
apt install <package_name>
```

List packages with updates:
```bash
apt list -u
```

List installed packages on the system:
```bash
apt list -i
```

Upgrade packages on system:
```bash
apt upgrade
```
