// ==UserScript==
// @name         Youtube Player Bypass
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @author       SoHeil
// @match        https://www.youtube.com/watch?*
// @match        https://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.ytplayer = {};
window._yt_player = {};

const configs = ytcfg.d();
configs['WEB_PLAYER_CONTEXT_CONFIGS'] = {};
ytcfg.set(configs);

(function() {
    'use strict';

    const CONFIG = {
        PLAYER_SELECTOR: '#player-container[role="complementary"]',
        RETRY_ATTEMPTS: 3,
        RETRY_DELAY: 1000,
        DEFAULT_QUALITY: 'hd1080',
        IFRAME_STYLES: {
            width: '100%',
            height: '100%',
            borderRadius: '15px',
            border: 'none'
        }
    };

    function getVideoId() {
        try {
            const url = new URL(window.location.href);
            return url.searchParams.get('v');
        } catch (error) {
            console.error('❌ Error extracting video ID:', error);
            return null;
        }
    }

    function createEnhancedIframe(videoId) {
        const iframe = document.createElement('iframe');
        const params = new URLSearchParams({
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            enablejsapi: 1,
            origin: window.location.origin,
            widget_referrer: window.location.href,
            hl: document.documentElement.lang || 'en',
            controls: 1,
            fs: 1,
            quality: CONFIG.DEFAULT_QUALITY
        });

        iframe.src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
        iframe.title = 'YouTube video player';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerpolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;

        Object.assign(iframe.style, CONFIG.IFRAME_STYLES);

        return iframe;
    }

    async function replacePlayer(attempts = CONFIG.RETRY_ATTEMPTS) {
        const videoId = getVideoId();
        if (!videoId) return;

        const findPlayerContainer = () => document.querySelector(CONFIG.PLAYER_SELECTOR);
        let playerContainer = findPlayerContainer();

        if (!playerContainer && attempts > 0) {
            console.log(`⏳ Retrying player replacement... (${attempts} attempts left)`);
            await new Promise(resolve => setTimeout(resolve, CONFIG.RETRY_DELAY));
            return replacePlayer(attempts - 1);
        }

        if (!playerContainer) {
            console.error('❌ Player container not found after all attempts');
            return;
        }

        try {
            while (playerContainer.firstChild) {
                playerContainer.firstChild.remove();
            }

            const iframe = createEnhancedIframe(videoId);
            playerContainer.appendChild(iframe);
            
            console.log('✅ Player replaced successfully');
        } catch (error) {
            console.error('❌ Error replacing player:', error);
        }
    }

    function init() {
        window.addEventListener('yt-navigate-finish', () => replacePlayer());
        console.log('🚀 YouTube player bypass script initialized');
    }

    init();
})();