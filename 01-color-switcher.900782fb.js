!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;function a(t){e.disabled=t,n.disabled=!t}n.disabled=!0,e.addEventListener("click",(function(){o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),a(!0)})),n.addEventListener("click",(function(){clearInterval(o),a(!1)}))}();
//# sourceMappingURL=01-color-switcher.900782fb.js.map