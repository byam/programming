if(typeof CN==='undefined'){
    var CN = {};
}

/**
 * @requires CN, jQuery
 */
CN.dart = (function($, $D){

    /* OBJECTS, CONSTANTS, PRIVATE VARS */
    var ads={},

        /** Common ad value object
         *  Used in get and plugin methods for easy read/write access
         *  to shared ad values.
         */
        common={
            ad          : {},
            charmap     : {},
            container   : '_frame',                         /*  Individual ad container div suffix */
            dcopt       : true,                             /*  allow dcopt param to be appended to tile 1 */
            frameurl    : '/ads/newad.html',                /*  Iframe base-url - Used for generating contained dynamic script tags for ad calls. */
            embed       : false,                            /*  If set to true, embed ads in page rather than in an iframe */
            initialized : false,
            ord         : Math.random() * 10000000000000000,
            pause       : [true],                           /*  Store paused queue - used to manage multiple use of pause functionality
                                                                by unknown # of entities. First value in queue is for CN.dart. */
            remote      : '/services/dart/',
            retry       : false,
            site        : "",
            tiles       : [],
            tile        : 0,
            url         : (location.protocol || 'http:') + '//ad.doubleclick.net/adj/',
            zone        : ""
        },

        kwregex=/kw=/g,

        /**
         * Shared message prefix
         * Used in generating debug info.
         */
        msg_pre="CN Ad ",

        /**
         * Message object for easily generating debug info.
         */
        msg = {
            /* These are for good! */
            'true' : {
                gen     : 'Success',
                call    : 'Request Fired',
                embed   : 'Set to Embedded Mode.  Operating with degraded feature-set.',
                queue   : 'Request Added to Queue',
                pause   : 'Pause queue emptied, unpausing ads.',
                plug    : 'Plugin Registered',
                valid   : 'Plugin Action Passed Validation'
            },

            /* These are for bad =( */
            'false' : {
                gen     : 'Error',
                call    : 'Request Aborted',
                queue   : 'Request Faled To Be Added to Queue',
                pause   : 'Pause queue still contains ' + common.pause.length+ ' calls. Ads still paused',
                plug    : 'Plugin Skipped',
                valid   : 'Plugin Action Failed Validation'
            }
        },

        /**
         * Generate debug messages
         * @param   {string}    type          Message type defined in @msg
         * @param   {boolean}   [state]       Optional boolean value to indicate state [true=success,false=error]
         * @memberOf    CN.dart
         * @private
         */

        messager = function(type,state){
            return msg_pre + msg[(state!==false).toString()][type || 'gen'];
        },

        nakedFrame=$('<iframe/>').attr({
                frameBorder : 0,
                scrolling   : 'no'
            }).css({
                border      : 'none',
                margin      : 0,
                padding     : 0
        }),

        /* METHODS */

        /**
         * Construct the ad request url
         * @param   {object}    ad          Dart ad object
         * @param   {string}    [url]       Optional url to use inplace of ad object properties
         * @memberOf    CN.dart
         * @private
         */
        buildurl = function(ad,url){
            return common.url + common.site
                + '/' + (ad.zone || common.zone)
                + 'sz='+ ad.sz + ';'
                + (url || 'tile=' + ad.tile + ';'
                    + (ad.tile===1 && common.dcopt===true ? 'dcopt=ist;' : '')
                    + keywordString(ad)
                    + 'ord='+common.ord+';'
                );
        },

        /**
         * Create and store individual ad objects by extending the base common.ad.
         * Initiates ad call, or ads ad call to queue.
         * @param   {string}    name        Unique name prefix for storage, container div, and iframe id generation
         * @param   {object}    [pars]      Addtion ad params to extend/overide common.ad values.
         * @memberOf    CN.dart
         * @private
         */
        call = function(name,pars){
            var key= name+pars.sz,
                zone;

            ads[key] = {
                el          : $('div#'+key+common.container),
                sz          : pars.sz,
                kws         : unique(common.ad.kws,pars.kws || []),
                xkws        : pars.kws || [],
                store       : pars.store===false ? false : common.ad.store,
                tile        : common.tiles.push(key),
                collapse    : pars.collapse===true,
                cc          : 0
            };

            if(pars.zone){
                zone=test.adzone(pars.zone);
                zone ? ads[key].zone=zone : false;
            }
            /* If intialization is complete, and we're not in paused-state
             * execute ad call immediatly.
             */
            if(common.embed || common.initialized && !common.pause.length){
                return draw(key);
            }
            $D.info(messager('queue'), [key,ads[key]]);

            /* Add to the request queue to be executed on CN.dart.ready() */
            $(window).one('CN.customEvents.dartRequest',{key:key},function(){draw(key);});
            return this;
        },

        /**
         * Generate an script tag the adcall, and append to the container [placement][common.container]
         * This is the actual call execution for embedded ads
         * @param   {string}    placement   Dart ad placement identifier
         * @param   {string}    [url]       Url to be used in place of ad pars
         */
        drawEmbedded = function(placement,url) {
            var ad = ads[placement],
                src=(ad.url=buildurl(ad,url)) && ad.url;

            ad.frame=false;

            document.write('<scr'+'ipt src="'+ad.url+'"></scr'+'ipt>');

            $D.info(messager('call'), [placement,ad]);
            return this;
        },

        /**
         * Generate an iframe for the ad, and append to the container [placement][common.container]
         * This is the actual call execution for iframed ads
         * @param   {string}    placement   Dart ad placement identifier
         * @param   {string}    [url]       Url to be used in place of ad pars
         */
        drawFrame = function(placement,url) {
            var ad = ads[placement],
                dims=ad.sz.split('x'),
                frsrc=(ad.url=buildurl(ad,url)) && common.frameurl + '#' + encodeURIComponent(ad.url);

            ad.el.html(ad.frame=nakedFrame.clone().attr({
                    id          : placement,
                    name        : placement,
                    height      : ad.collapse ? 0 : dims[1],
                    width       : dims[0],
                    src         : frsrc
            }).bind('load',{key:placement},onFrameDraw)
            );

            $D.info(messager('call'), [placement,ad]);
            return this;
        },

        /**
         * Default method for drawing ads defined here.
         * If common.emed=true, init will set draw=drawEmbedded.
         * The rest of the operations should be seamless.
         */
        draw=drawFrame,

        /**
         * Generate a script el for embedded ads
         * @param   {script}    src     Ad source.
         */
        embedScript = function(src){
            var scp = document.createElement('script');

            return  scp.type="text/javascript",
                    scp.src=src,
                    scp;
        },

        /**
         * Initialize CN.dart, setting common ad parameters and evaluating all registered plug-ins.
         * Once plug-ins are all evaluated, CN.dart is put in a ready state, which signals the begining
         * of ad calls.  Any calls made before the ready stat is set will be placed in a queue.
         * @param   {object}    pars        Shared params - ex: Site, Zone, shared kws.
         * @param   {string}    [url]       Url to be used in place of ad pars
         */
        init = function(pars){

            common.site = pars.site,
            common.zone = pars.zone,
            common.ad = {
                store   : true,
                kws     : pars.kws,
                tile    : common.tile
            };
            updateKws();
            test.charmap(pars.charmap);
            plugin.run();

            if(common.embed) {
                draw=drawEmbedded;
                $D.info(messager('embed',true),[]);
            }

            $(window).trigger('CN.customEvents.dartInitialized');

            return ready();
        },

        /**
         * Translate kw array into a ';'-delimited query string
         * @param   {object}    ad          Ad object to grab keywords from for translation.
         * @param   {string}    [url]       Url to be used in place of ad pars.
         */
        keywordString = function(ad){
            return 'kw=' + ad.kws.join(';kw=') + ';' + (ad.xkws.length ? '!c=' + ad.xkws.join(';!c=') + ';' : '');
        },

        /**
         * Callback even dispatcher, executed on frame-load
         * @param   {object}    e           Event object for callback
         */
        onFrameDraw = function(e){
            var ad = ads[e.data.key];
            try {
                ad.doc=ad.frame.contents();
            } catch(err) {
                $D.user(e, [e.target, e.target.id]);
            }

            $(window).trigger('CN.customEvents.dartAdDrawn',[e.data.key,"#"+e.data.key, ad]);

            _resize(e);
        },

        plugin = {

            /**
             * Plug-in holder array.
             * Registered plug-ins are stored here.
             * @see CN.dart.register
             */
            queue       : [],

            register    : function(plug){
                if(!plug || !plug.init){
                    $D.info(messager('plug',false), [plug ? plug.name : '', plug || {}]);
                    return false;
                }
                this.queue.push(plug);
                $D.info(messager('plug'), [plug.name || '', plug]);
                return true;
            },

            run         : function(){
                var i=0,
                    len=this.queue.length,
                    val,
                    passed=false,
                    plug;

                for(; i<len; i++){
                    plug=this.queue[i];
                    $D.info(msg_pre + 'Running Plugin',[plug.name]);
                    val=plug.init.call(),
                    passed=this.validate(val);
                    $D.info(messager('valid',passed),[plug.name,val]);
                }

            },

            validate    : function(ret){
                var pass=true;
                for (var key in ret){
                    pass = (test[key] && test[key](ret[key]) && pass);
                }
                return pass || false;
            }
        },

        /**
         * Declare CN.dart ready for executing ad calls.
         */
        ready = function(){
            if(!common.pause.pop() || !common.pause.length){
                $(window).trigger('CN.customEvents.dartRequest');
            }
            if(common.initilized){
                $D.info(messager('pause',common.pause.length), [common.pause]);
            }
            common.initialized=true;
            $D.info(msg_pre+'Initialized', [common.ad]);

            return this;
        },

        /**
         * Refresh iFrame
         * @description Refreshes an iFrame with the current url or with the url if the
                        param (if provided), resizes the frame onload to fit content.
         * @param       {string,array}  frames      Array, CSV or space-delimitted list of iframe
                                                    classes or ids or mixed
         * @param       {object}        [pars]      Params to override ad values, or url path to replace serialized params
         *
         * @example     CN.dart.refresh('header728x90',{tile:20});
         *              CN.dart.refresh('header728x90','');
         */
        refresh = function(placement,pars) {
            if(common.embed){
                return this;
            }
            var p = (CN.isString(placement)) ? placement.split(/,|\s+/) : ($.isArray(placement)) ? placement : ads;
            common.ord = Math.random() * 10000000000000000;

            // the next line removes any references to a doubleclick frame busting ads
            if (!p.length){
                $('script[id*="prscr"], .prWrap').remove();
            }

            // refresh frames
            $.each(p, function(i, v) {
                var ad = (CN.isNumber(i)) ? v : i;
                if (ad in ads) {
                    if (ads[ad].store && common.initialized && !common.pause.length){
                        draw(ad,(CN.isObject(pars) ? $.extend(ads[ad],pars) : CN.isString(pars) ? pars : false));
                    }
                }
            });
            return this;
        },

        /**
         * Event interface for draw
         * @param   {object}    e           jQuery.event object
         * @memberOf    CN.dart
         * @private
         */
        requestQueue = function(e){
            /* Map the event object e's data property for draw */
            draw(e.data.key);
        },

        /**
         * Event interface for refresh
         * @param   {object}    e           jQuery.event object
         * @memberOf    CN.dart
         * @private
         */
        refreshQueue = function(e){
            /* Map the event object e's data property for refresh */
            draw(e.data.placement,e.data.pars);
        },

        /**
         * Object for containing methods used for calling dart from an external source.
         * @memberOf    CN.dart
         * @private
         */
        remote = {
            init : function(site,zone,kws){

                if(!zone || common.initialized){
                    $D.info(msg_pre + "Remote Init error.  No calls will be made.",["site : " + site, "path : " + path]);
                    return this;
                }
                if(site!=='' && site.indexOf(CN.site.domain)===-1){
                    $D.info(msg_pre + "Remote Init error.  Cross-domain calls not supported.",["site : " + site, "path : " + path]);
                    return this;
                }

                common.frameurl = site + common.frameurl;
                common.remoteSite = site;
                common.remoteInit = site + common.remote + 'init/' + zone + '/' + 'kw=' + CN.url.path().join(';kw=') + ';' + kws;
                document.write('<scr'+'ipt type="text/javascript" src="'+common.remoteInit+'"></scr'+'ipt>');
            }

        },

        /**
         * Resize iFrame height to fit content on load.
         * @description This is a private function that is triggered by the onload
                        event of the iFrame. This will also be triggered by the
                        public resize method.
         * @memberOf    CN.dart
         * @private
         * @event
         */
        _resize = function(e) {
            var frame= e.data && e.data.key ? ads[e.data.key].frame : $(e.target),
                ad=ads[frame.attr('name')],
                body,
                bheight=0;

            if(ad.doc){
                body=ad.doc.find('body');
            } else{
                return
            }

            $('iframe', body).bind('load',{key:e.data.key},_resize);

            if (!$('.textAd', body).length || !$('#adHolder a', body).eq(0).text()) {
                $('#adHolder', body).css({ 'font-size': 0, 'line-height': 0 });
            }else{
                $('.textAd',body).remove().appendTo(frame.parent())
            }

            bheight=body.outerHeight();
            frame.css({
                border  : 'none',
                margin  : 0,
                width   : ad.el.width(),
                height:bheight===1 ? 0 : bheight
            });

            $D.info('CN Ad Frame Resize', [e.data.key,frame.css('height') +' x '+ frame.css('width')]);

            // This might be a horrible idea... but if the ad is in view, then try up to 3 times to
            // refresh if it looks like the ad is empty.
            if(common.retry && !ad.collapse && frame.height()< 1 && ad.cc<2 && visable(ad)){
                refresh(e.data.key,{cc:++ad.cc});
                $D.info('CN Ad Empty.. retry('+ad.cc+')', [e.data.key]);
            }else{
                ad.cc=1;
            }
        },

        visable = function(ad){
            var win = $(window),
                top = win.scrollTop(),
                adtop = ad.frame.offset().top;

            return !(top > (adtop + ad.frame.height()) || (top + win.height()) < adtop);
        },

        updateKws = function(){
            for (var ad in ads){
                ads[ad].kws = unique(common.kws,ads[ad].kws)
            }
        },

        /**
         * All test conditions necessary for properly allowing modifications to
         * values in the common object.
         * @description Used during plugin evaluation to ensure proper value replacement.
         *              All tests must return true or false to indicated falure or success.
         * @memberOf    CN.dart
         * @private
         * @event
         */
        test = (function(){
            var
                    // Match any js-reserved characters
                reserved=/([\?\+\\\^\$\*\.\(\)\[\]\|])/g,
                siteResolver=function(val){
                    if(CN.site.testads){
                        return common.site;
                    }
                    var $val=val.split('.'),
                        $site=common.site.split('.'),
                        i=0,
                        len= $site.length > $val.length ? $site.length : $val.length,
                        result=[];
                    for (;i<len;i++){
                        result[i]=($val[i] || $site[i]);
                    }
                    return result.join('.');
                },
                urlPat=/^https?:/,
                zoneEnd=/;$|$/,
                zonePat=new RegExp(CN.site.testads ? CN.site.testads + "$" : "[\\w_;]+$"),

                zoneResolver=function(val){
                    var prop,
                        map=common.charmap;
                    if(zonePat.test(val)){
                        for(prop in map){
                            val=val.replace(new RegExp(prop,"gi"),map[prop]);
                        }
                        return val.replace(zoneEnd,';');
                    }
                    return false;
                };

            return {

                ad      : function(val){
                    return (!val.kws ? false : (common.ad.kws = (jQuery.isArray(val.kws) ? val.kws : common.ad.kws), updateKws(), true));
                },

                charmap : function(val){
                    var prop,
                        map=common.charmap={};
                    for(prop in val){
                        map[prop.replace(reserved,'\\$1')]=val[prop];
                    }
                    return true;
                },

                dcopt   : function(val){
                    return CN.isBoolean(val) ? (common.dcopt=val,true) : false;
                },

                embed   : function(val){
                    return CN.isBoolean(val) ? (common.embed=val,true) : false;
                },

                pause   : function(val){
                    if(val===true && !common.embed){
                        common.pause.push(val);
                        return true;
                    }
                    return false;
                },

                site    : function(val){
                    common.site = siteResolver(val);
                    return true;
                },

                url     : function(val){
                    if(CN.isString(val)){
                        common.url = val.replace(urlPat,(location.protocol || 'http:'));
                        return true;
                    }
                    return false;
                },

                zone    : function(val){
                    var ret=zoneResolver(val);
                    if(ret){
                        common.zone=ret;
                        return true;
                    }
                    return false;
                },

                adzone  : zoneResolver

            }
        })(),


        /* Create an array with unique values from a set of passed arrays
         * @param   {Array}     arguments   array(s) to be concatenated and filtered
         * @memberOf    CN.dart
         * @private
         */
        unique = function(){
            var v,
                i=0,
                ret=[].concat.apply([],arguments).sort(),
                l=ret.length;

            for (;i<l;i++){
                v=ret.shift(),
                ret[0]!==v ? ret.push(v) : false;
            }
            return ret;
        };

    return {

        buildurl : buildurl,

        calls : function(key){
            return (key===true ? ads : (CN.isNumber(key) ? ads[common.tiles[key]] : ads[key] || {}));
        },

        call : call,

        clone : function(placement,name){
            if(common.tiles.length){
                return call(name,{sz:placement,kws:ads[common.tiles[0]].kws});
            }

            return false;
        },

        refresh : refresh,

        get : function(props){
            props=[].concat(props);
            var i=0,
                len=props.length,
                ret={},
                prop;
            for (; i<len;i++) {
                prop=props[i];
                ret[prop] = (common[prop] || common[prop]===false ? common[prop] : undefined);
            }
            return len > 1 ? ret : ret[prop];
        },

        init : init,

        ondraw : common.embed ? false : onFrameDraw,

        ready : ready,

        register : function(install){
            if(!install){
                return this;
            }
            install = [].concat(install);
            var i=0,
                len=install.length;
            for(;i<len;i++){
               plugin.register(install[i]);
            }
            return this;
        },

        remote : remote,

        test : test
};

})(jQuery, CN.debug);


CN.dart.ipad=(function(ua){
    var suff=".ipad",
        init=function(){
            return {
                site: CN.dart.get('site')+suff
            };
        };
    return {
        init : ua.indexOf('ipad')!==-1 ? init : false,
        name : 'User Agent Plugin'
    }
})(navigator.userAgent.toLowerCase());

CN.dart.register([CN.dart.ipad]);