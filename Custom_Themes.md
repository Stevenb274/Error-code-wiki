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
