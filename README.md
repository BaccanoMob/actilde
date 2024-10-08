# Actilde [ ~ ]

Actilde is a minimal browser homepage with a search box for mobile friendly suggestions. (Also apparently I also made it friendly for Asian Languages without me knowing).

Name comes from Active (search box) + Tilde.

## Changelog

- Active search box so mobiles devices can use suggestions. (The main goal)
- Added `appearance: none;` since VSCode was telling `-moz-appearance` and `-webkit-appearance` to add it for compatibility.
- Changed title from `~` to `[ ~ ]` to have the ~ with within a box.
- Removed (<kbd>Ctrl</kbd>+<kbd>n</kbd> and <kbd>Ctrl</kbd>+<kbd>p</kbd>) bindings. Well, <kbd>Ctrl</kbd>+<kbd>n</kbd> is for new tab so I prolly will never use this.
- Change number of columns to 4 in home page. (5+ columns gives a ghost column at the end with Actilde and there was no centering)
- Moved script section for commands and CONFIG towards the top of the file. (Just because I did not want to scroll a long file, when I want to change the commands)
- Suggestions are now right clickable and long pressable (for mobiles). (Changed from them button to hyperlinks)
- When tabbed on suggestions (NOT WITH SEARCH BOX), you can use the typical hyperlink shortcuts,
    - <kbd>Ctrl</kbd>+<kbd>Enter</kbd> - Open in a new tab while staying on Actilde.
    - <kbd>Shift</kbd>+<kbd>Enter</kbd> - Open in new window.
    - <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> - Open in a new tab and moves to the new tab.
- You can only open in a new tab from search box with <kbd>Ctrl</kbd>+<kbd>Enter</kbd>. <kbd>Enter</kbd> should have the default. You can not have one in a new window (at least in my index.html).
- Has auto focus to search box when typed. Unfortunately, for Asian Languages, you need to disable this in CONFIG (`autoFocus` should be `false`).
- Docker compose file so you can deploy it in your server (without wondering how to set it like me).

## Why no autofocus for Asian languages?

Well in the original tilde, to open search box, 1 key down is needed. So when the focus is triggered, the IME moves to the next letter. This can not be fixed since it relates to OS as the IME is exiting.

With Actilde, you can disable autofocus so you will need to manually click the search box to type in. Therefore, IME will work properly from get go when clicked on the search box. This is not possible with original tilde as the search box is hidden by default and on 1 key down is required to open the search box.

## Will I try to implement autofocus for all languages?

Prolly whenever I find time to look into it. I plan to add a dummy prefix/s so suggestions should ignore it when it is typed. 

Mostly to address due to my keyboard on Android auto capitalizes the first letter (which I need for other uses/apps) and caps are not supported yet to give suggestions (since original tilde is desktop centric, it is not a major issue).

Since this is also a first keydown problem, I plan to merge both issues into one so autofocus could be enabled at all times.

## The search box disappeared when I clicked/entered something?

This can happen when opening links. I tried my best to fix it as much as could (That's why my `onKeydown` function looks bigger than original and it should be fixed for most cases by now).

Well, if you come across it, you need to press <kbd>Escape</kbd> (for desktops/with keyboard) or reload (for any devices) to get the search box back.

## Docker

You get the docker compose file in this repo as well, modify it to run Actilde to your needs in your network.

It is also possible to run with `docker run` but I do not suggest it since this requires a volume binding and you need to remember the full command if you do start after you kill the container. Also, I find docker more manageable when using docker compose. But the docker run command is below if anyone still prefers it.

```sh
docker run -d -p 8080:80 -v /path/to/index.html:/usr/share/nginx/html/index.html --name actilde nginx:stable-alpine-slim
```

Also, any edits in index.html will auto update live so no need to restart containers for changes. Run once but edit as many times you need.

## Usage

Check original [repo](https://github.com/xvvvyz/tilde)

## Command syntax

Copy paste into command lines

- Hidden link. [url only (no display or suggestion)]
```js
['', { url: '' }],
```

- Link in displayed in homepage. [url (display command)]
```js
['', { name: '', url: '' }],
```

- Link in displayed in homepage. [url (display command) + suggestion]
```js
['', { name: '', suggestions: ['', ''], url: '' }],
```

- Hidden url with suggestions. [url (no display) + suggestion]
```js
['', { suggestions: ['', ''], url: '' }],
```

- Suggestion only. [suggestions only (no display)]
```js
['', {suggestions: ['', '']}],
```

I may replace `searchTemplate` into something else (not 100% sure, atleast not in the foreseeable future).

## To infinity ∞

Actilde is meant to be customized&mdash;[make it yours and beyond!](index.html)

## License

Use and modify Actilde [as you see fit](UNLICENSE).
