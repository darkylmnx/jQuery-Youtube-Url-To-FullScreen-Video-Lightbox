# Youtube Url To FullScreen Video Lightbox

*Youtube Url To FullScreen Video Lightbox*, that i'll just call **YU2FVL**, is a jQuery plugin to help you intergrate great youtube videos on your web pages in a **simple way**.

It keeps the video ratio you want (16/9, 4/3, 21/3...) while scaling to browsers viewport. 
* It's Responsive.
* It's Lightweight (< 2Ko)
* Supports any youtube url
* You can even do some TOTAL FULLSCREEN by setting default paddings to "0"

## Installation

To install the plugin do the following : 

Add the **jquery.yu2fvl.css** to your project in the `<head></head>`

`<link href="dist/jquery.yu2fvl.css" rel="stylesheet" type="text/css">`

Add the **jquery.yu2fvl.js** to your project AFTER loading jQuery

`<script src="/dist/jquery.yu2fvl.js"></script>`

You can find both files in **dist/** with the js minified or
You can find both files in **src/** with the js' original code

## Usage

Very simple : target an anchor, apply the plugin.

`<a class="play-1" href="https://www.youtube.com/watch?v=AbTUw7aTITg">Play my video</a>`

`<script>`
`  $('.play-1').yu2fvl();`
`</script>`

You can also directly pass a **youtube video id** to the plugin

`<button class="play-1">Play my video</button>`

`<script>`
`  $('.play-1').yu2fvl({ vid: 'QImBolnTVH8' });`
`</script>`

All this works perfectly with different anchors on the same selector with different href

`<a class="play-1" href="https://www.youtube.com/watch?v=ID-1">Play my video</a>`

`<a class="play-2" href="https://www.youtube.com/watch?v=ID-2">Play my video</a>`

`<a class="play-3" href="https://www.youtube.com/watch?v=ID-3">Play my video</a>`

`<a class="play-4" href="https://www.youtube.com/watch?v=ID-4">Play my video</a>`

...

`<script>`
`  $('.play-1, .play-2, .play-3, .play-4').yu2fvl();`
`</script>`

The various youtube url formats acceptable :

* http://www.youtube.com/watch?v=QImBolnTVH8
* http://www.youtube.com/v/QImBolnTVH8
* http://youtu.be/QImBolnTVH8
* https://www.youtube.com/watch?list=RDQImBolnTVH8&amp;v=QImBolnTVH8#t=6

## Options

*minPaddingX*: 50,
// the space you want on **top* and **bottom** when centering the video (value is divided by 2)

*minPaddingY*: 50,
// the space you want on **left* and **right** when centering the video (value is divided by 2)

*ratio*: 16/9,
// choose the ration you want for your video

*cssClass*: "yu2fvl",
// set a namespace / global css class

*overlayCssClass*: "-overlay",
// give a suffix css class for the overlay 

*iframeCssClass*: "-iframe",
// give a suffix css class for the iframe 

*closeCssClass*: "-close",
// give a suffix css class for the close button 

*closeText*: "X",
// give some text for the close button

*vid*: false
// set directly a youtube video id (though using an anchor is cool for SEO !)


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Commit tags [NEW] > for new modules or set of files, [CHG] > for changes, [FIX] > for fixes

## License

Under MIT LICENSE
