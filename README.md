# www.dalyle.ca Source

Based on (thank you! 🙏) 11ty-landing-page by Tom Doe.

## Updating or Contributing

1. `git clone` the repo.
2. `npm install`
   1. * I keep forgetting :( Says


## Problems

### Problem #2: Node 10

```shell
> Executing task: npm run serve <


> 11ty-landing-page@0.0.1 serve W:\www\dalyle_ca_tomdoe
> eleventy --serve

Eleventy requires Node 10. You will need to upgrade Node to use Eleventy!

npm ERR! Windows_NT 10.0.19043
npm ERR! argv "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "run" "serve"
npm ERR! node v7.10.1
npm ERR! npm  v4.2.0
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! 11ty-landing-page@0.0.1 serve: `eleventy --serve`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the 11ty-landing-page@0.0.1 serve script 'eleventy --serve'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the 11ty-landing-page package,
npm ERR! not with npm itself.
```

### nvm

```shell
`nvm install latest`

gsteve@benny-win MINGW64 /w/www/dalyle_ca_tomdoe (main)
$ nvm install latest
Downloading node.js version 17.0.1 (64-bit)...
Complete
Creating C:\Users\gsteve\AppData\Roaming\nvm\temp

Downloading npm version 8.1.0... Complete
Installing npm v8.1.0...

Installation complete. If you want to use this version, type

nvm use 17.0.1

gsteve@benny-win MINGW64 /w/www/dalyle_ca_tomdoe (main)
$ nvm use latest
latest.0.0
node vlatest.0.0 (64-bit) is not installed.

gsteve@benny-win MINGW64 /w/www/dalyle_ca_tomdoe (main)
$ nvm use 17
17.0.0
node v17.0.0 (64-bit) is not installed.

gsteve@benny-win MINGW64 /w/www/dalyle_ca_tomdoe (main)
$ nvm use 17.0.1
Now using node v17.0.1 (64-bit)

gsteve@benny-win MINGW64 /w/www/dalyle_ca_tomdoe (main)
$
```

### Problem 3: bad syntax in `footer.njk`

```shell
Problem writing Eleventy templates: (more in DEBUG output)
> Having trouble writing template: public/index.html

`TemplateWriterWriteError` was thrown
> (./src/_layouts/base.njk)
  Template render error: (W:\www\dalyle_ca_tomdoe\src\_includes\footer.njk) [Line 38, Column 5]
  expected name as lookup value, got <

`Template render error` was thrown:
    Template render error: (./src/_layouts/base.njk)
      Template render error: (W:\www\dalyle_ca_tomdoe\src\_includes\footer.njk) [Line 38, Column 5]
      expected name as lookup value, got <
        at Object._prettifyError (W:\www\dalyle_ca_tomdoe\node_modules\nunjucks\src\lib.js:36:11)
        at W:\www\dalyle_ca_tomdoe\node_modules\nunjucks\src\environment.js:563:19
        at eval (eval at _compile (W:\www\dalyle_ca_tomdoe\node_modules\nunjucks\src\environment.js:633:18), <anonymous>:44:11)
        at W:\www\dalyle_ca_tomdoe\node_modules\nunjucks\src\environment.js:41:5
        at RawTask.call (W:\www\dalyle_ca_tomdoe\node_modules\asap\asap.js:40:19)
        at flush (W:\www\dalyle_ca_tomdoe\node_modules\asap\raw.js:50:29)
        at processTicksAndRejections (node:internal/process/task_queues:78:11)
Copied 20 files / Wrote 0 files in 1.40 seconds (v0.12.1)
Watching…
[Browsersync] Access URLs:
 ----------------------------------------
       Local: http://localhost:8080
    External: http://192.133.133.101:8080
 ----------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ----------------------------------------
[Browsersync] Serving files from: public

```


#### Broken Code

`/src/_includes/footer.njk:36`

```html
36:   <span class="block text-center text-gray-800 text-sm font-light">
37:     &copy; {{ helpers.currentYear() }} {{ site.
38:     <br />
39:     An Experiment by
40:     <a href="https://greg.stevens.pro/?utm_source=dalyle_ca&utm_medium=footer" target="_blank">
41:       Greg Stevens (www.stevens.pro)
42:     </a>
43:   </span>
```

### Fixed Code
🙈 Problem was I started typing ``{{ site.`` without finishing the `title }}`


`/src/_includes/footer.njk:36`

```html
36:   <span class="block text-center text-gray-800 text-sm font-light">
37:     &copy;
38:     {{ helpers.currentYear() }}
39:     {{ site.title }}
40:     <br />
41:     An Experiment by
42:     <a href="https://greg.stevens.pro/?utm_source=dalyle_ca&utm_medium=footer" target="_blank">
43:       Greg Stevens (www.stevens.pro)
44:     </a>
45:   </span>
```


