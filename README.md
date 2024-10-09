# Actilde [ ~ ]

Actilde is a minimal browser homepage with a search box for mobile friendly suggestions. (Also apparently I also made it friendly for Asian Languages without me knowing).

> [!TIP]
> Name comes from Active (search box) + Tilde.

## Changes/differences from Tilde 

- Active search box so mobiles devices can use suggestions. (The main goal)
- Added `appearance: none;` since VSCode was telling `-moz-appearance` and `-webkit-appearance` to add it for compatibility.
- Changed title from `~` to `[ ~ ]` to have the ~ with within a box.
- Removed (<kbd>Ctrl</kbd>+<kbd>n</kbd> and <kbd>Ctrl</kbd>+<kbd>p</kbd>) bindings. Well, <kbd>Ctrl</kbd>+<kbd>n</kbd> is for new tab so I prolly will never use this.
- Commands can be configured to be case insensitive (that, `a` command and `A` command will be same). This fixes my issue with auto caps when using from android. `commandCaseSensitive` should be set to `false` (default value). Can be set to `true` to have more range of commands.
- Change number of columns to 4 in home page. (5+ columns gives a ghost column at the end with Actilde and there was no centering)
- Moved script section for commands and CONFIG towards the top of the file. (Just because I did not want to scroll a long file, when I want to change the commands)
- Suggestions are now right clickable and long pressable (for mobiles). (Changed from them button to hyperlinks)
- When tabbed on suggestions (NOT WITH SEARCH BOX), you can use the typical hyperlink shortcuts,
    - <kbd>Ctrl</kbd>+<kbd>Enter</kbd> - Open in a new tab while staying on Actilde.
    - <kbd>Shift</kbd>+<kbd>Enter</kbd> - Open in new window.
    - <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> - Open in a new tab and moves to the new tab.
- You can only open in a new tab from search box with <kbd>Ctrl</kbd>+<kbd>Enter</kbd>. <kbd>Enter</kbd> should have the default. You can not have one in a new window (at least in my index.html).
- Has auto focus to search box when typed. For Asian Languages (any language with IME), you need to press <kbd>Arrow Keys</kbd> or <kbd>Delete</kbd> first to focus to search box beforehand or the first character will be in english.
- Docker compose file so you can deploy it in your server (without wondering 'how can I host this?' like me).
- Cache actilde so it can be used outside home network/VPN (requires https).
- PWA support (requires https and this came as an add-on to cache storage)

## Cache First

This requires https to work. So need to have a domain setup. Personally I recommend a provider like duckdns to get a subdomain. Point that to your IP of the server in your Wifi/VPN. By IP, I do not mean public IP, but the local IP. Setting the local IP is safe. No one (even if they have same local IP) in another home/work can access your server. The only ones that have access will be the devices in your Wifi/VPN.

For windows check in the Wifi settings. For linux run `hostname -I` and its usually the first IP address.

> [!WARNING]  
> With nable `useCacheFirst`, if you would not be editing the `COMMANDS` anytime soon. You will need to manually delete the cache to see the recent changes.

> [!TIP]
> Browsing in Incognito will not cache anything so `useCacheFirst` will not matter.

## Is PWA actually useful?

It is not but you can have try it out.

> [!IMPORTANT]
> You can not open links in a new tab or incognito in PWA.


## IME Friendly?

Probably, since you need one key down to focus on the search box, I recommend pressing <kbd>Arrow Keys</kbd> (technically any button which does not serve a purpose for typing, like Volume Up or Mute can also be used to focus if needed). This is prolly the best I can make it to work well.

> [!IMPORTANT]  
> IME needs the cursor on search box first. Remember to use the arrows to focus, if the search box is out of focus at any point before typing the query.

## Icons

Generated from [icon.kitchen](https://icon.kitchen/) (with only for web option in the headers).

> [!NOTE]
> If you do use this icon generator for other projects, the README in that zip will have necessary HTML tags to include.

> [!TIP]
> `favicon.ico` must be in the root directory for it to display properly.

## Docker

You get the docker compose file in this repo as well, modify it to run Actilde to your needs in your network.

It is also possible to run with `docker run` but I do not suggest it since this requires a volume binding and you need to remember the full command if you do start after you kill the container. Also, I find docker more manageable when using docker compose. 

```sh
# Start with 
docker compose up -d

# Stop with
docker compose down
```

The docker run command is below if anyone still prefers it.

```sh
docker run -d -p 8080:80 -v /path/to/index.html:/usr/share/nginx/html/index.html --name actilde nginx:stable-alpine-slim

docker run -d -p 8080:80 -v /path/to/site:/usr/share/nginx/html --name actilde nginx:stable-alpine-slim
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

- Search Templates, some examples,
    - For google search URL, `https://www.google.com/search?q={}`, is broken down to url as `https://www.google.com` and searchTemplate as `/search?q={}`. 
    
    - For latest selfhosted reddit search, it will be `https://www.reddit.com` and `/r/selfhosted/search/?q={}&sort=new`
    
    The searchTemplates vary with website, purpose and so on.

- Path, some example,
    - Similar to search but you type whats after the url. You can also use it like search urls with `/search?q=testing 123` to search.
    - For github, `url` should be `https://github.com` for a command say `g`. So, to get to this repo, you search for `g/BaccanoMob/actilde` which will lead to `https://github.com/BaccanoMob/actilde`.
    - Its also useful for selfhosted instances which use subdirectories rather than subdomain to host services.

## To infinity ∞

Actilde is meant to be customized&mdash;[make it yours and beyond!](index.html)

## License

Use and modify Actilde [as you see fit](UNLICENSE).
