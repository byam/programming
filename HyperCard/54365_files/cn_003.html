if (typeof CN === 'undefined' || !CN) {
    var CN = {};
}

/**
 * @class    CN ad
 * @public
 * @memberOf CN
 * @author   Russell Munson
 */
CN.ad = CN.ad || {};

/**
 * Lotame Crowd Control and DFP plugin.
 * Extend current kw-set with kws from pulled from Lotame
 * Load up the Crowd Control data collector and soucre it
 * after page load is complete.
 *
 * @requires    CN.dart
 * @requires    CN
 * @requires    jQuery
 * @author      Russell Munson
 */
CN.ad.lotame = (function($,$CNd,$D) {
    var
        protocol        = location.protocol || 'http:',
        timeout         = 1000,
        separator       = '|',
        siteName        = CN.site.name || location.hostname.split('.').splice(-2)[0],
            // Key-value pair of site codes - should match siteMagDomain spring property && CN.site.name
        siteCodes       = {
            allure              :   [ 293, 1666 ],
            architecturaldigest :   [ 294, 1667 ],
            bonappetit          :   [ 295, 1668 ],
            brides              :   [ 296, 1669 ],
            concierge           :   [ 297, 1670 ],
            details             :   [ 298, 1671 ],
            'epicurious.com'    :   [ 299, 1672 ],
            glamour             :   [ 300, 1673 ],
            golfdigest          :   [ 301, 1674 ],
            gourmet             :   [ 000, 0000 ],
            gq                  :   [ 302, 1675 ],
            luckymag            :   [ 303, 1676 ],
            newyorker           :   [ 304, 1677 ],
            nutritiondata       :   [ 305, 1678 ],
            self                :   [ 306, 1679 ],
            style               :   [ 307, 1680 ],
            teenvogue           :   [ 308, 1681 ],
            vanityfair          :   [ 309, 1682 ],
            vogue               :   [ 310, 1683 ],
            wmagazine           :   [ 311, 1684 ],
            wired               :   [ 312, 1685 ],
            webmonkey           :   [ 318, 1690 ]


        },
        code            = siteCodes[siteName] ? siteCodes[siteName][0] : false,
        placement       = siteCodes[siteName] ? siteCodes[siteName][1] : false,
        url             = [ protocol + '//ad.crwdcntrl.net/4/to=y', 'p='+placement, 'var=CN.ad.lotame.tags', 'out=json'].join(separator),
        ccurl           = [ protocol + '//tags.crwdcntrl.net/c/', '/cc.js'].join(code),


        /**
         * Grab the list of lotame audience kws, and if the
         * request is successful, register the plugin with CN.dart.
         * @private
         */
        audience = function(){
            if(!placement) {
                return false;
            }
            $.ajax({
                url         : url,// + separator + audienceParams,
                dataType    : 'script',
                timeout     : 500,
                error       : function(x,t){
                    $D.info(plugin.name + ' plugin disabled',['script ' + t, 'using site code ' + code])
                },
                success     : register
            })
            return true;

        },

        /**
         * Build some meta-data to pass to lotame.
         * @private
         */
        behaviors = {
            /**
             * Attempt to parse out the article title.
             * Try any h1 or h2 tags on the page, and cross reference with the doc title.
             */
            title   : function(){
                var sep,
                    ret,
                    dt=behaviors.clean(document.title),
                    sep_regex='([\\s\\W]*)';

                $('h1,h2').each(function(){
                    dt.replace(new RegExp('.*('
                        + behaviors.clean($(this).text())
                        + ').*','gi'), function($1,$2){
                            ret=$2 || ret;
                            return $2
                        }
                    );
                });

                if(!ret || ret===" "){
                    ret=dt.replace(new RegExp('^|'
                        + sep_regex
                        + CN.site.domain
                        + sep_regex + '|'
                        + sep_regex
                        + CN.site.title
                        + sep_regex
                        + '|$','gi'), function($1,$2,$3,$4){
                            sep=$2||$3||$4||sep;
                            return $2;
                        }
                    );

                }

                return sep ? ret.split(sep) : ret;

            },

            /**
             * Grab the meta-data keywords
             */
            kws     : function(){
                return [].concat($.map(($('meta[name="keywords"]',document).attr('content') || "").split(','),function($1){
                        return CN.utils.trim($1);
                }));
            },

            clean   : function(str){
                return (CN.utils.trim(str).match(/[\w-:]+/g) || []).join(" ");

            }
        },
        /**
         * Source in lotame's crowd control data collection script.
         * But, don't load it until dom ready,
         * may give more accurate data, but mostly mean to decrease imact on user.
         * @private
         */
        crowdControl = function(){
            var interests=[],
                lot;
            if(!code) {
                return false;
            }

            lot = document.createElement('script');
            lot.src = ccurl;
            lot.setAttribute('async', 'true');

            $(function(){
                $('head',document).append(lot);
                try {
                    interests=interests.concat(behaviors.title(),behaviors.kws());
                } catch(er) {
                    $D.error('CN Ad Lotame behaviors prase error.  Skipping data assist',[er])
                }

                if(typeof LOTCC ==='undefined'){
                    LOTCC = { asyncBehaviors: {}, async: true };
                }
                LOTCC.asyncBehaviors['int'] = interests;
            });
            return true;
        },

        init = function(){
            return parse();
        },

        /**
         * Parse the lotame audience object, extract usable kws, and
         * return an ad object with the kws appened for CN.dart validation.
         * @private
         */
        parse = function(){
            var i=0,
                len,
                aud,
                ret=[],
                    // Note: this value is populated by the lotame audience script.
                    // The variable name is configured above in the url array.
                tags = CN.ad.lotame.tags;

            if(!tags) {
                return false;
            }

            if(tags.Profile){
                aud=tags.Profile.Audiences.Audience,
                len=aud.length;
                for(; i< len;i++){
                    ret.push(aud[i].abbr)
                }
            }

            return {
                ad : {kws : $CNd.get('ad').kws.concat(ret)}
            }
        },

        plugin = {
            init    : init,
            name    : 'CN Ad Lotame Audience kws'
        },

        register = function(){
            $CNd.register(plugin);
            crowdControl();
        }

    if(!code){
        $D.error(plugin.name + ' missing code for this site.  Verify the site is in the list.',[siteCodes])
        return false;
    }

        //Attempt to get the audience data right away.
    audience();
    return {
        tags    : false
    }
})(jQuery,CN.dart, CN.debug)
