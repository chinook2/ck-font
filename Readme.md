# ck-font - Read Me

## Update ck-font

### Import your icon selection, modify it, and export it
* Go to [Icomoon] (https://icomoon.io/app/)
* On the Options menu, open "Manage Projects", then import a project (select "selection.json" file), rename it then load it.
* Select your favourite icon library, select icons you want to add, then go to "Generate Font"
* Make sure your previous icons are here
* Clic "Download"

### Update ck-font
* Unzip the previously downloaded archive from icomoon
* Copy the content in the "resources" folder of ck-font
* Copy the newly added icons declarations (starting with "ck-nameoficon:before") into "ck-font/sass/etc/all.scss" into "Icon Glyph" section.
* You need to build/watch again to reload changes