(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}var r=function(){function e(){var t,r,o,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,o=!1,(r=n(r="isDownloading"))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,$(document).on("submit",".form-import-data",(function(e){a.submit(e)})).on("click",".download-template",(function(e){a.download(e)}))}var r,o,a;return r=e,(o=[{key:"submit",value:function(e){e.preventDefault();var t=$(e.currentTarget),n=new FormData(t.get(0)),r=t.find("button[type=submit]"),o=$("#imported-message"),a=$("#imported-listing"),i=$(".show-errors"),l=$("#failure-template").html();$(".main-form-message").addClass("hidden"),o.html(""),a.html(""),$httpClient.make().withLoading(t).withButtonLoading(r).post(t.prop("action"),n).then((function(e){var n=e.data;Botble.showSuccess(n.message),o.removeClass().addClass("alert alert-success").html(n.data.message),a.addClass("hidden").html(""),i.addClass("hidden"),t.trigger("reset")})).catch((function(e){var t=e.response.data,n="";t.data&&t.data.map((function(e){n+=l.replace("__row__",e.row).replace("__attribute__",e.attribute).replace("__errors__",e.errors.join(", "))})),o.removeClass().addClass("alert alert-danger").html(t.message),n&&(i.removeClass("hidden"),a.removeClass("hidden").html(n))})).finally((function(){$(".main-form-message").removeClass("hidden")}))}},{key:"download",value:function(e){var t=this;if(e.preventDefault(),!this.isDownloading){var n=$(e.currentTarget),r=n.data("extension"),o=n.html();$.ajax({url:n.data("url"),method:"POST",data:{extension:r},xhrFields:{responseType:"blob"},beforeSend:function(){n.html(n.data("downloading")),n.addClass("text-secondary"),t.isDownloading=!0},success:function(e){var t=document.createElement("a"),r=window.URL.createObjectURL(e);t.href=r,t.download=n.data("filename"),document.body.append(t),t.click(),t.remove(),window.URL.revokeObjectURL(r)},error:function(e){Botble.handleError(e)},complete:function(){setTimeout((function(){n.html(o),n.removeClass("text-secondary"),t.isDownloading=!1}),500)}})}}}])&&t(r.prototype,o),a&&t(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();$((function(){return new r}))})();