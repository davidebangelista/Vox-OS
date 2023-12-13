# Vox OS

VoxOS is a virtual environment to evade extensions and network filtering on school filtering devices. This achieves this by iframes, proxies, and possibly a hosted Debian machine to bypass extensions like GoGuardian and ContentKeeper.


# Installation and Use

Just download the zip and use the index.html to start and load the system.

## Features

 - Use of fullscreen and delete on session means history on chrome is tarnished by generic title.
 - Use of iframes and proxies can allow bypassing if extensions just checks basic URL on chrome.
 - A debug blocker denies "smart" teachers from using Inspect element to hinder and inspect the system.
 - Local file (No possible block unless local file are blocked. Even then, it can just be hosted.)

## TODO

 - Upgrade the password to hash using SHA512 on a session instead of a file
 - Allow more and custom proxies to be used.
 - Add a Debian system to allow the system to bypass most if not **all** extensions.
 - Probable deniability on passwords and tabs.
 - Obfuscated HTML to reduce manual modifications.
- Use WebDav Technologies to save files and notes if hosted on a machine.
