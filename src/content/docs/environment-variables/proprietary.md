---
title: Proprietary Tools
description: Collection of Environment Variables for 3rd Party tools
---

##### Remote Desktop

**NOMACHINE:**
```bash
export NX_INSTALL_PREFIX=/opt                                             # Exporting the Installation directory for NX
export NX_HOME=/opt/NX                                                    # Adding NX_HOME.
export PATH=$PATH:$NX_HOME/bin                                            # Adding NX to PATH.
```

##### Graphics

**CUDA:**
```bash
export CUDA_CACHE_PATH="$XDG_CACHE_HOME"/nv
```

##### AI
```bash
export OLLAMA_MODELS=$XDG_DATA_HOME/ollama/models                         # Ollama models directory
export CODEX_HOME="$XDG_CONFIG_HOME"/codex
```

Reference: https://wiki.archlinux.org/title/XDG_Base_Directory
