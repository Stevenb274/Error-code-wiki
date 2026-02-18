# Error_code Wiki

Welcome, this is the Error_code Wiki but as a bunch of css and markdown. This is being used to create and display the Error_code Wiki for all of those who are interested in wanting to know more about the game or for those who need help.

## Contributing to the Wiki

### Getting started
In order to contribute, you need to have simple knownledge about markdown *(occassionally about mkdocs, css or html aswell, depending on what you want to add)* and you need to have a github account.
<br>
<br>
If you do not directly have edit access to this source then you need to create a fork of this repository. Once you have created the fork, you may edit your own fork however you want and add/remove/change content to your liking.
<br>
<br>
After you have finished what you wanted to contribute, you can create a pull request by pressing the "Contribute" button on your own fork which will prompt you to create a pull request.
<br>

### Pull requests

When creating a pull request, please make sure to give it a reasonable title & a *somewhat* descriptive text so we know what you want to add and **why**. *(You can find the edits you have made at the very bottom of the pull request creation page)*
<br>
<br>
Once your pull request has been created *(if it doesnt collide with any rulesets)*, you will have to wait for a maintainer to inspect and approve/deny your changes.
<br>
<br>
When your change has been approved, your branch and the main branch will be merged and the wiki should automaticly update within a few minutes.

### What to remember

**PLEASE** always make sure that your fork is up-to-date with the main branch. You can ensure this by using the "Sync fork" button on your fork *(Github will tell you if your branch is lacking updates)*.
<br>
<br>
Make sure to keep things organized and well structured. We dont want this to be messy.
<br>
<br>
You are allowed to ping Wiki Maintainers within the discord server to draw their attention towards your pull request!

# Custom themes

Some entities have custom-themes in game, and maybe you want them to have a custom theme on the wiki aswell. Well, this isnt a problem and is relatively easy to do!

## How to add a custom theme

1. Locate the entitythemes.css file
2. Copy the base theme (at the very top of the file)
3. Go to the bottom of the file and paste the copied base theme (please add a comment above it so we know which entity it belongs to)
4. Rename all theme elements to the respective entity's name
5. Edit the theme to your liking
6. Go to the page of the entity, and at the top of the file <entityname>_theme: true to the "extra" block
7. Go to the main.html file in "theme_overrides" and copy one of the theme if-statements
8. Paste the copied if-statement and edit its content (basically just replace the name at page.meta.extra

<br>
<br>

And there you go! This is how you add a custom theme.
