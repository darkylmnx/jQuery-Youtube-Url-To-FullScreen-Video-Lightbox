/*! YU2FVL - jQuery Youtube Url To FullScreen Video Lightbox - v0.1.0 - 2016-02-07
* http://otakod.es/yu2fvl
* Copyright (c) 2016 darkylmnx; Licensed MIT */

(function ( $, w, doc ) {

    var win = $( w ),

        ytUrlPrefix = "https://www.youtube.com/embed/",
        getYTvid = function( url ) {

            if ( /youtu\.be/.test( url ) ) {

                return url
                    .split( "youtu.be/" )[1]
                    .split( "?" )[0]
                    .split( "&" )[0]
                    .split( "#" )[0];

            } else if ( /youtube\.com\/v\//.test( url ) ) {

                return url
                    .split( "youtube.com/v/" )[1]
                    .split( "?" )[0]
                    .split( "&" )[0]
                    .split( "#" )[0];

            }  else if ( /youtube\.com\/embed\//.test( url ) ) {

                return url
                    .split( "youtube.com/embed/" )[1]
                    .split( "?" )[0]
                    .split( "&" )[0]
                    .split( "#" )[0];

            } else if ( /youtube.com|youtuberepeater.com|listenonrepeat.com/.test( url ) ) {

                return url
                    .split( "v=" )[1]
                    .split( "&" )[0]
                    .split( "#" )[0];

            } else {
                return false;
            }
        },

        lightboxCss = {
            "display": "none", 
            "position": "fixed"
        },

        iframeCss = {
            width: "100%",
            height: "100%"
        },

        overlayCss = {
            "display": "none", 
            "position": "fixed",
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": "100%"
        };
 
    $.fn.yu2fvl = function( options ) {
 
        // default options.
        var settings = $.extend({
            minPaddingX: 50,
            minPaddingY: 50,
            ratio: 16/9,
            cssClass: "yu2fvl",
            overlayCssClass: "-overlay",
            iframeCssClass: "-iframe",
            closeCssClass: "-close",
            closeText: "X",
            vid: false
        }, options );

        // if there"s a video id, 
        if  ( settings.vid !== false ) {
            createLightbox( this, settings.vid );
            return this;
        } else {
            return this.each(function() {
                var self = $( this );

                createLightbox(
                    self,
                    getYTvid( self.attr("href") )
                );
            });
        }

        function createLightbox ( btn, vid ) {
            var lightbox = $( doc.createElement( "DIV" ) )
                    .addClass( settings.cssClass )
                    .css(lightboxCss ),

                overlay = $( doc.createElement( "DIV" ) )
                    .addClass( settings.cssClass + settings.overlayCssClass )
                    .css( overlayCss ),

                close = $(doc.createElement( "BUTTON" ) )
                    .addClass( settings.cssClass + settings.closeCssClass )
                    .html( settings.closeText ),

                iframe = $( doc.createElement("IFRAME" ) )
                    .addClass( settings.cssClass + settings.iframeCssClass )
                    .attr( { src: ytUrlPrefix + vid } )
                    .css( iframeCss );

            // append the iframe to the lightbox and the lightbox & overlay to the body
            lightbox
                .append( iframe )
                .append( close );

            $( "body" ).append( overlay ).append( lightbox );

            // open the video on click on the btn
            attachOpenVideo( btn );
            attachCloseVideo( close.add( overlay ) );

            // set window resize and trigger to init resize
            win
                .on( "resize", resizeVideo )
                .trigger( "resize" );

            function resizeVideo() {
                var win_width = win.width() - settings.minPaddingX,
                    win_height = win.height() - settings.minPaddingY,
                    win_ratio = win_width / win_height,
                    ratio = settings.ratio;
            
                if ( win_ratio > ratio ) {
                    lightbox.height( win_height );
                    lightbox.width( win_height * ratio );
                }
                
                else {
                    lightbox.width( win_width );
                    lightbox.height( win_width / ratio );
                }
                
                // we use the original window width and height to not include padding 
                // in the centering process
                lightbox.css( "left", ( win.width() - lightbox.width() ) / 2 );
                lightbox.css( "top", ( win.height() - lightbox.height() ) / 2 );
            }

            function attachOpenVideo( elem ) {
                elem.on("click", function ( e ) {
                    e.preventDefault();
                    openVideo();
                });
            }

            function attachCloseVideo( elem ) {
                elem.on("click", function ( e ) {
                    e.preventDefault();
                    closeVideo();
                });
            }

            function openVideo() {
                overlay
                    .stop()
                    .fadeIn( "fast" );
                lightbox
                    .stop()
                    .fadeIn( "fast" );
            }

            function closeVideo() {
                overlay
                    .stop()
                    .fadeOut( "fast" );
                lightbox
                    .stop()
                    .fadeOut( "fast" );
            }
        }
    };
 
})( jQuery, window, document );
