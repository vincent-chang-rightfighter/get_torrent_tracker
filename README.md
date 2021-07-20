# Get torrent tracker
get torrent tracker from torrends.to
format to TIXATI

# Environment

nodejs 14.17.3

# File Tree

<pre>

get_torrent_js/
┣ screenshots/
┣ index.js
┣ package.json
┣ README.md
┗ run.bat
</pre>

# First Time Setup

Use install command in terminal 

```
npm install --save
```
After that File Tree would change like :

<pre>

get_torrent_js/
┣ node_modules/
┣ screenshots/
┣ index.js
┣ package-lock.json
┣ package.json
┣ README.md
┗ run.bat
</pre>

# How to Run

## Use command in terminal :
---

```
node index.js
```
it save tracker list to torrent_tracker.txt 



## Use run.bat ( work on windows ) :
---

Just Double click run.bat

bat script explaination :

Automatic run web crawler , than it would save tracker list to torrent_tracker.txt .

After torrent_tracker.txt have been saved , the bat script would use windows built-in notepad to
open it.

Just  `CTRL`  +  `A`  to select all

And   `CRRL`  +  `C`  copy it to [TIXATI](https://www.tixati.com/) torrent tracker list .

Then you could close the notepad , after notepad has been closed terminal would close and delete torrent_tracker.txt . 

## Screenshots
----

<img src=https://raw.githubusercontent.com/vincent-chang-rightfighter/get_torrent_tracker/main/screenshots/work.gif >