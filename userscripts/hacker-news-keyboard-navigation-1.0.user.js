// ==UserScript==
// @name         Hacker News Keyboard Navigation
// @namespace    https://github.com/levysoft
// @version      1.0
// @description  Reddit-style keyboard navigation for Hacker News comments. Based on https://gist.github.com/yorickvP/c5f38322867440ea1774594c59ece3a2
// @author       levysoft
// @match        https://news.ycombinator.com/item?id=*
// @grant        GM_openInTab
// @homepageURL  https://github.com/levysoft/UserScripts-for-Tampermonkey
// @supportURL   https://github.com/levysoft/UserScripts-for-Tampermonkey/issues
// ==/UserScript==

(function() {
    'use strict';

    let currentComment = null;
    let comments = [];

    function initializeComments() {
        comments = Array.from(document.querySelectorAll('tr.comtr')).filter(
            comment => !comment.querySelector('.comment').textContent.includes('[deleted]')
        );
    }

    function getCommentLevel(comment) {
        const indent = comment.querySelector('td.ind img');
        return indent ? parseInt(indent.width) / 40 : 0;
    }

    function highlightComment(comment) {
        if (currentComment) {
            currentComment.style.backgroundColor = '';
            currentComment.style.border = '';
        }

        if (comment) {
            comment.style.backgroundColor = '#fff6d5';
            comment.style.border = '1px solid #ff6600';

            const rect = comment.getBoundingClientRect();
            if (rect.top < 0 || rect.bottom > window.innerHeight) {
                comment.scrollIntoView({ block: 'center' });
            }
        }

        currentComment = comment;
    }

    function findNextSameLevel() {
        if (!currentComment) return null;

        const currentIndex = comments.indexOf(currentComment);
        const currentLevel = getCommentLevel(currentComment);

        for (let i = currentIndex + 1; i < comments.length; i++) {
            const level = getCommentLevel(comments[i]);
            if (level < currentLevel) return comments[i];
            if (level === currentLevel) return comments[i];
        }
        return null;
    }

    function findPrevSameLevel() {
        if (!currentComment) return null;

        const currentIndex = comments.indexOf(currentComment);
        const currentLevel = getCommentLevel(currentComment);

        for (let i = currentIndex - 1; i >= 0; i--) {
            const level = getCommentLevel(comments[i]);
            if (level < currentLevel) return comments[i];
            if (level === currentLevel) return comments[i];
        }
        return null;
    }

    function toggleComment() {
        if (!currentComment) return;

        const toggleLink = currentComment.querySelector('.togg');
        if (toggleLink) {
            toggleLink.click();
        }
    }

    function openUrlInNewTab() {
        const mainLink = document.querySelector('.title > .titleline > a');
        if (mainLink) {
            GM_openInTab(mainLink.href, { active: true, setParent: true });
        }
    }

    initializeComments();

    comments.forEach(comment => {
        comment.addEventListener('click', (e) => {
            if (e.target.closest('.comment')) {
                highlightComment(comment);
                e.stopPropagation();
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        switch(e.key) {
            case 'j':
            case 'J':
            case 'k':
            case 'K': {
                if (!currentComment) {
                    highlightComment(comments[0]);
                    break;
                }
                const currentIndex = comments.indexOf(currentComment);
                const nextIndex = (e.key === 'j' || e.key === 'J') ?
                    Math.min(currentIndex + 1, comments.length - 1) :
                    Math.max(currentIndex - 1, 0);
                highlightComment(comments[nextIndex]);
                break;
            }

            case 'n':
            case 'N': {
                if (!currentComment) {
                    highlightComment(comments[0]);
                    break;
                }
                const nextSameLevel = findNextSameLevel();
                if (nextSameLevel) highlightComment(nextSameLevel);
                break;
            }

            case 'p':
            case 'P': {
                if (!currentComment) {
                    highlightComment(comments[0]);
                    break;
                }
                const prevSameLevel = findPrevSameLevel();
                if (prevSameLevel) highlightComment(prevSameLevel);
                break;
            }

            case 'Enter':
                toggleComment();
                break;

            case 'Escape':
                highlightComment(null);
                break;

            case 'v':
            case 'V':
                openUrlInNewTab();
                break;
        }
    });
})();
