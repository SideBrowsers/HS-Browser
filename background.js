/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/Background/index.ts ***!
  \*********************************/

/// <reference types="chrome" />
var sidePanel = chrome.sidePanel;
chrome.runtime.onInstalled.addListener(function (e) {
    sidePanel
        .setPanelBehavior({ openPanelOnActionClick: true })
        .catch(function (error) { return console.error(error); });
    chrome.contextMenus.create({
        id: 'openSidePanel',
        title: 'Open in HS Browser',
        contexts: ['all'],
    }, function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        if (tab) {
            var id = tab.id, windowId = tab.windowId;
            if (info.menuItemId === 'openSidePanel' && id !== undefined) {
                chrome.storage.local.set({
                    currentTabInfo: {
                        tabId: tab.id,
                        url: tab.url,
                        title: tab.title,
                    },
                });
                sidePanel.open({ windowId: windowId, tabId: id });
            }
        }
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4QkFBOEI7QUFDMUQsa0NBQWtDLDhCQUE4QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixpQ0FBaUMsK0JBQStCO0FBQ2hFO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3YyZXhfaHViLy4vc3JjL0JhY2tncm91bmQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImNocm9tZVwiIC8+XG52YXIgc2lkZVBhbmVsID0gY2hyb21lLnNpZGVQYW5lbDtcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChlKSB7XG4gICAgc2lkZVBhbmVsXG4gICAgICAgIC5zZXRQYW5lbEJlaGF2aW9yKHsgb3BlblBhbmVsT25BY3Rpb25DbGljazogdHJ1ZSB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmVycm9yKGVycm9yKTsgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogJ29wZW5TaWRlUGFuZWwnLFxuICAgICAgICB0aXRsZTogJ09wZW4gaW4gU2lkZWJyb3dzZXInLFxuICAgICAgICBjb250ZXh0czogWydhbGwnXSxcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGluZm8sIHRhYikge1xuICAgICAgICBpZiAodGFiKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB0YWIuaWQsIHdpbmRvd0lkID0gdGFiLndpbmRvd0lkO1xuICAgICAgICAgICAgaWYgKGluZm8ubWVudUl0ZW1JZCA9PT0gJ29wZW5TaWRlUGFuZWwnICYmIGlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFiSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSWQ6IHRhYi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGFiLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0YWIudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2lkZVBhbmVsLm9wZW4oeyB3aW5kb3dJZDogd2luZG93SWQsIHRhYklkOiBpZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=