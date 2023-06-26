var htmlToWord = (function (exports) {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter$1(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var build = {exports: {}};

    /*! For license information please see index.js.LICENSE.txt */

    (function (module, exports) {
    !function(e,t){module.exports=t();}(globalThis,(()=>(()=>{var e={9742:(e,t)=>{t.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,i=c(e),o=i[0],a=i[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,o,a)),l=0,h=a>0?o-4:o;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[l++]=t>>16&255,u[l++]=t>>8&255,u[l++]=255&t;return 2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[l++]=255&t),1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[l++]=t>>8&255,u[l++]=255&t),u},t.fromByteArray=function(e){for(var t,n=e.length,s=n%3,i=[],o=16383,a=0,c=n-s;a<c;a+=o)i.push(u(e,a,a+o>c?c:a+o));return 1===s?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===s&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),i.join("")};for(var r=[],n=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,a=i.length;o<a;++o)r[o]=i[o],n[i.charCodeAt(o)]=o;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return -1===r&&(r=t),[r,r===t?0:4-r%4]}function u(e,t,n){for(var s,i,o=[],a=t;a<n;a+=3)s=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(r[(i=s)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63;},8764:(e,t,r)=>{const n=r(9742),s=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=function(e){return +e!=e&&(e=0),c.alloc(+e)},t.INSPECT_MAX_BYTES=50;const o=2147483647;function a(e){if(e>o)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|m(e,t);let n=a(r);const s=n.write(e,t);return s!==r&&(n=n.slice(0,s)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if($(e,Uint8Array)){const t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer))return d(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return d(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return c.from(n,t,r);const s=function(e){if(c.isBuffer(e)){const t=0|f(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||Z(e.length)?a(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(s)return s;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return l(e),a(e<0?0:0|f(e))}function p(e){const t=e.length<0?0:0|f(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function d(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,c.prototype),n}function f(e){if(e>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|e}function m(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let s=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(e).length;default:if(s)return n?-1:V(e).length;t=(""+t).toLowerCase(),s=!0;}}function w(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return "";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return "";if((r>>>=0)<=(t>>>=0))return "";for(e||(e="utf8");;)switch(e){case"hex":return k(this,t,r);case"utf8":case"utf-8":return S(this,t,r);case"ascii":return N(this,t,r);case"latin1":case"binary":return R(this,t,r);case"base64":return A(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0;}}function g(e,t,r){const n=e[t];e[t]=e[r],e[r]=n;}function y(e,t,r,n,s){if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Z(r=+r)&&(r=s?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(s)return -1;r=e.length-1;}else if(r<0){if(!s)return -1;r=0;}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,s);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,s);throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,n,s){let i,o=1,a=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,c/=2,r/=2;}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(s){let n=-1;for(i=r;i<a;i++)if(u(e,i)===u(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===c)return n*o}else -1!==n&&(i-=i-n),n=-1;}else for(r+c>a&&(r=a-c),i=r;i>=0;i--){let r=!0;for(let n=0;n<c;n++)if(u(e,i+n)!==u(t,n)){r=!1;break}if(r)return i}return -1}function v(e,t,r,n){r=Number(r)||0;const s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;const i=t.length;let o;for(n>i/2&&(n=i/2),o=0;o<n;++o){const n=parseInt(t.substr(2*o,2),16);if(Z(n))return o;e[r+o]=n;}return o}function x(e,t,r,n){return X(V(t,e.length-r),e,r,n)}function _(e,t,r,n){return X(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function E(e,t,r,n){return X(q(t),e,r,n)}function T(e,t,r,n){return X(function(e,t){let r,n,s;const i=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)r=e.charCodeAt(o),n=r>>8,s=r%256,i.push(s),i.push(n);return i}(t,e.length-r),e,r,n)}function A(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function S(e,t,r){r=Math.min(e.length,r);const n=[];let s=t;for(;s<r;){const t=e[s];let i=null,o=t>239?4:t>223?3:t>191?2:1;if(s+o<=r){let r,n,a,c;switch(o){case 1:t<128&&(i=t);break;case 2:r=e[s+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(i=c));break;case 3:r=e[s+1],n=e[s+2],128==(192&r)&&128==(192&n)&&(c=(15&t)<<12|(63&r)<<6|63&n,c>2047&&(c<55296||c>57343)&&(i=c));break;case 4:r=e[s+1],n=e[s+2],a=e[s+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(c=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,c>65535&&c<1114112&&(i=c));}}null===i?(i=65533,o=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),s+=o;}return function(e){const t=e.length;if(t<=I)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=I));return r}(n)}t.kMaxLength=o,c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return !1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return function(e,t,r){return l(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},c.allocUnsafe=function(e){return h(e)},c.allocUnsafeSlow=function(e){return h(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if($(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let s=0,i=Math.min(r,n);s<i;++s)if(e[s]!==t[s]){r=e[s],n=t[s];break}return r<n?-1:n<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return !0;default:return !1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=c.allocUnsafe(t);let s=0;for(r=0;r<e.length;++r){let t=e[r];if($(t,Uint8Array))s+t.length>n.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(n,s)):Uint8Array.prototype.set.call(n,t,s);else {if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,s);}s+=t.length;}return n},c.byteLength=m,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)g(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?S(this,0,e):w.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(c.prototype[i]=c.prototype.inspect),c.prototype.compare=function(e,t,r,n,s){if($(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===s&&(s=this.length),t<0||r>e.length||n<0||s>this.length)throw new RangeError("out of range index");if(n>=s&&t>=r)return 0;if(n>=s)return -1;if(t>=r)return 1;if(this===e)return 0;let i=(s>>>=0)-(n>>>=0),o=(r>>>=0)-(t>>>=0);const a=Math.min(i,o),u=this.slice(n,s),l=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==l[e]){i=u[e],o=l[e];break}return i<o?-1:o<i?1:0},c.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},c.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else {if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);}const s=this.length-t;if((void 0===r||r>s)&&(r=s),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return v(this,e,t,r);case"utf8":case"utf-8":return x(this,e,t,r);case"ascii":case"latin1":case"binary":return _(this,e,t,r);case"base64":return E(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0;}},c.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const I=4096;function N(e,t,r){let n="";r=Math.min(e.length,r);for(let s=t;s<r;++s)n+=String.fromCharCode(127&e[s]);return n}function R(e,t,r){let n="";r=Math.min(e.length,r);for(let s=t;s<r;++s)n+=String.fromCharCode(e[s]);return n}function k(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let s="";for(let n=t;n<r;++n)s+=Y[e[n]];return s}function C(e,t,r){const n=e.slice(t,r);let s="";for(let e=0;e<n.length-1;e+=2)s+=String.fromCharCode(n[e]+256*n[e+1]);return s}function O(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function L(e,t,r,n,s,i){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>s||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function D(e,t,r,n,s){z(t,n,s,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function P(e,t,r,n,s){z(t,n,s,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function F(e,t,r,n,s,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function B(e,t,r,n,i){return t=+t,r>>>=0,i||F(e,0,r,4),s.write(e,t,r,n,23,4),r+4}function M(e,t,r,n,i){return t=+t,r>>>=0,i||F(e,0,r,8),s.write(e,t,r,n,52,8),r+8}c.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,c.prototype),n},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e],s=1,i=0;for(;++i<t&&(s*=256);)n+=this[e+i]*s;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e+--t],s=1;for(;t>0&&(s*=256);)n+=this[e+--t]*s;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||O(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||O(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||O(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||O(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=J((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||G(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,s=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(s)<<BigInt(32))})),c.prototype.readBigUInt64BE=J((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||G(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],s=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return (BigInt(n)<<BigInt(32))+BigInt(s)})),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e],s=1,i=0;for(;++i<t&&(s*=256);)n+=this[e+i]*s;return s*=128,n>=s&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=t,s=1,i=this[e+--n];for(;n>0&&(s*=256);)i+=this[e+--n]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},c.prototype.readInt8=function(e,t){return e>>>=0,t||O(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||O(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||O(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=J((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||G(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return (BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=J((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||G(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return (BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||O(e,4,this.length),s.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||O(e,4,this.length),s.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||O(e,8,this.length),s.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||O(e,8,this.length),s.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||L(this,e,t,r,Math.pow(2,8*r)-1,0);let s=1,i=0;for(this[t]=255&e;++i<r&&(s*=256);)this[t+i]=e/s&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||L(this,e,t,r,Math.pow(2,8*r)-1,0);let s=r-1,i=1;for(this[t+s]=255&e;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=J((function(e,t=0){return D(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=J((function(e,t=0){return P(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);L(this,e,t,r,n-1,-n);}let s=0,i=1,o=0;for(this[t]=255&e;++s<r&&(i*=256);)e<0&&0===o&&0!==this[t+s-1]&&(o=1),this[t+s]=(e/i>>0)-o&255;return t+r},c.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);L(this,e,t,r,n-1,-n);}let s=r-1,i=1,o=0;for(this[t+s]=255&e;--s>=0&&(i*=256);)e<0&&0===o&&0!==this[t+s+1]&&(o=1),this[t+s]=(e/i>>0)-o&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=J((function(e,t=0){return D(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=J((function(e,t=0){return P(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,r){return B(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return B(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return M(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return M(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,n){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const s=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),s},c.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t);}}else "number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let s;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(s=t;s<r;++s)this[s]=e;else {const i=c.isBuffer(e)?e:c.from(e,n),o=i.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-t;++s)this[s+t]=i[s%o];}return this};const U={};function H(e,t,r){U[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name;}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0});}toString(){return `${this.name} [${e}]: ${this.message}`}};}function j(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return `${e.slice(0,r)}${t}`}function z(e,t,r,n,s,i){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let s;throw s=i>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new U.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,r){W(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||G(t,e.length-(r+1));}(n,s,i);}function W(e,t){if("number"!=typeof e)throw new U.ERR_INVALID_ARG_TYPE(t,"number",e)}function G(e,t,r){if(Math.floor(e)!==e)throw W(e,r),new U.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new U.ERR_BUFFER_OUT_OF_BOUNDS;throw new U.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}H("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),H("ERR_INVALID_ARG_TYPE",(function(e,t){return `The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),H("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,s=r;return Number.isInteger(r)&&Math.abs(r)>2**32?s=j(String(r)):"bigint"==typeof r&&(s=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(s=j(s)),s+="n"),n+=` It must be ${t}. Received ${s}`,n}),RangeError);const K=/[^+/0-9A-Za-z-_]/g;function V(e,t){let r;t=t||1/0;const n=e.length;let s=null;const i=[];for(let o=0;o<n;++o){if(r=e.charCodeAt(o),r>55295&&r<57344){if(!s){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&i.push(239,191,189);continue}s=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),s=r;continue}r=65536+(s-55296<<10|r-56320);}else s&&(t-=3)>-1&&i.push(239,191,189);if(s=null,r<128){if((t-=1)<0)break;i.push(r);}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128);}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128);}else {if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128);}}return i}function q(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(K,"")).length<2)return "";for(;e.length%4!=0;)e+="=";return e}(e))}function X(e,t,r,n){let s;for(s=0;s<n&&!(s+r>=t.length||s>=e.length);++s)t[s+r]=e[s];return s}function $(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const Y=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let s=0;s<16;++s)t[n+s]=e[r]+e[s];}return t}();function J(e){return "undefined"==typeof BigInt?Q:e}function Q(){throw new Error("BigInt not supported")}},7187:e=>{var t,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};t=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this);}e.exports=i,e.exports.once=function(e,t){return new Promise((function(r,n){function s(r){e.removeListener(t,i),n(r);}function i(){"function"==typeof e.removeListener&&e.removeListener("error",s),r([].slice.call(arguments));}m(e,t,i,{once:!0}),"error"!==t&&function(e,t,r){"function"==typeof e.on&&m(e,"error",t,{once:!0});}(e,s);}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function u(e,t,r,n){var s,i,o,u;if(a(r),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),o=i[t]),void 0===o)o=i[t]=r,++e._eventsCount;else if("function"==typeof o?o=i[t]=n?[r,o]:[o,r]:n?o.unshift(r):o.push(r),(s=c(e))>0&&o.length>s&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=o.length,u=l,console&&console.warn&&console.warn(u);}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},s=l.bind(n);return s.listener=r,n.wrapFn=s,s}function p(e,t,r){var n=e._events;if(void 0===n)return [];var s=n[t];return void 0===s?[]:"function"==typeof s?r?[s.listener||s]:[s]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(s):f(s,s.length)}function d(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function f(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function m(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else {if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function s(i){n.once&&e.removeEventListener(t,s),r(i);}));}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e;}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0;},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return c(this)},i.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var s="error"===e,i=this._events;if(void 0!==i)s=s&&void 0===i.error;else if(!s)return !1;if(s){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=i[e];if(void 0===c)return !1;if("function"==typeof c)n(c,this,t);else {var u=c.length,l=f(c,u);for(r=0;r<u;++r)n(l[r],this,t);}return !0},i.prototype.addListener=function(e,t){return u(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return u(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,h(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,h(this,e,t)),this},i.prototype.removeListener=function(e,t){var r,n,s,i,o;if(a(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(s=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){o=r[i].listener,s=i;break}if(s<0)return this;0===s?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop();}(r,s),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,o||t);}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var s,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(s=i[n])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},i.prototype.listeners=function(e){return p(this,e,!0)},i.prototype.rawListeners=function(e){return p(this,e,!1)},i.listenerCount=function(e,t){return "function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},i.prototype.listenerCount=d,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};},645:(e,t)=>{t.read=function(e,t,r,n,s){var i,o,a=8*s-n-1,c=(1<<a)-1,u=c>>1,l=-7,h=r?s-1:0,p=r?-1:1,d=e[t+h];for(h+=p,i=d&(1<<-l)-1,d>>=-l,l+=a;l>0;i=256*i+e[t+h],h+=p,l-=8);for(o=i&(1<<-l)-1,i>>=-l,l+=n;l>0;o=256*o+e[t+h],h+=p,l-=8);if(0===i)i=1-u;else {if(i===c)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),i-=u;}return (d?-1:1)*o*Math.pow(2,i-n)},t.write=function(e,t,r,n,s,i){var o,a,c,u=8*i-s-1,l=(1<<u)-1,h=l>>1,p=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:i-1,f=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?p/c:p*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(t*c-1)*Math.pow(2,s),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,s),o=0));s>=8;e[r+d]=255&a,d+=f,a/=256,s-=8);for(o=o<<s|a,u+=s;u>0;e[r+d]=255&o,d+=f,o/=256,u-=8);e[r+d-f]|=128*m;};},5705:(e,t,r)=>{var n,s,i=r.g.MutationObserver||r.g.WebKitMutationObserver;if(i){var o=0,a=new i(h),c=r.g.document.createTextNode("");a.observe(c,{characterData:!0}),n=function(){c.data=o=++o%2;};}else if(r.g.setImmediate||void 0===r.g.MessageChannel)n="document"in r.g&&"onreadystatechange"in r.g.document.createElement("script")?function(){var e=r.g.document.createElement("script");e.onreadystatechange=function(){h(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null;},r.g.document.documentElement.appendChild(e);}:function(){setTimeout(h,0);};else {var u=new r.g.MessageChannel;u.port1.onmessage=h,n=function(){u.port2.postMessage(0);};}var l=[];function h(){var e,t;s=!0;for(var r=l.length;r;){for(t=l,l=[],e=-1;++e<r;)t[e]();r=l.length;}s=!1;}e.exports=function(e){1!==l.push(e)||s||n();};},5717:e=>{"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}));}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e;}};},8458:(e,t,r)=>{var n=r(8910),s=r(3790),i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.encode=function(e){for(var t,r,s,o,a,c,u,l=[],h=0,p=e.length,d=p,f="string"!==n.getTypeOf(e);h<e.length;)d=p-h,f?(t=e[h++],r=h<p?e[h++]:0,s=h<p?e[h++]:0):(t=e.charCodeAt(h++),r=h<p?e.charCodeAt(h++):0,s=h<p?e.charCodeAt(h++):0),o=t>>2,a=(3&t)<<4|r>>4,c=d>1?(15&r)<<2|s>>6:64,u=d>2?63&s:64,l.push(i.charAt(o)+i.charAt(a)+i.charAt(c)+i.charAt(u));return l.join("")},t.decode=function(e){var t,r,n,o,a,c,u=0,l=0,h="data:";if(e.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var p,d=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===i.charAt(64)&&d--,e.charAt(e.length-2)===i.charAt(64)&&d--,d%1!=0)throw new Error("Invalid base64 input, bad content length.");for(p=s.uint8array?new Uint8Array(0|d):new Array(0|d);u<e.length;)t=i.indexOf(e.charAt(u++))<<2|(o=i.indexOf(e.charAt(u++)))>>4,r=(15&o)<<4|(a=i.indexOf(e.charAt(u++)))>>2,n=(3&a)<<6|(c=i.indexOf(e.charAt(u++))),p[l++]=t,64!==a&&(p[l++]=r),64!==c&&(p[l++]=n);return p};},7326:(e,t,r)=>{var n=r(8565),s=r(5301),i=r(2541),o=r(5977);function a(e,t,r,n,s){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=s;}a.prototype={getContentWorker:function(){var e=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),t=this;return e.on("end",(function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")})),e},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},a.createWorkerFrom=function(e,t,r){return e.pipe(new i).pipe(new o("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new o("compressedSize")).withStreamInfo("compression",t)},e.exports=a;},1678:(e,t,r)=>{var n=r(3718);t.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},t.DEFLATE=r(1033);},6988:(e,t,r)=>{var n=r(8910),s=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e;}return t}();e.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=s,o=0+r;e^=-1;for(var a=0;a<o;a++)e=e>>>8^i[255&(e^t[a])];return -1^e}(0|t,e,e.length):function(e,t,r,n){var i=s,o=0+r;e^=-1;for(var a=0;a<o;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return -1^e}(0|t,e,e.length):0};},6032:(e,t)=>{t.base64=!1,t.binary=!1,t.dir=!1,t.createFolders=!0,t.date=null,t.compression=null,t.compressionOptions=null,t.comment=null,t.unixPermissions=null,t.dosPermissions=null;},8565:(e,t,r)=>{var n;n="undefined"!=typeof Promise?Promise:r(3389),e.exports={Promise:n};},1033:(e,t,r)=>{var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,s=r(9591),i=r(8910),o=r(3718),a=n?"uint8array":"array";function c(e,t){o.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={};}t.magic="\b\0",i.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(i.transformTo(a,e.data),!1);},c.prototype.flush=function(){o.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0);},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null;},c.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta});};},t.compressWorker=function(e){return new c("Deflate",e)},t.uncompressWorker=function(){return new c("Inflate",{})};},4979:(e,t,r)=>{var n=r(8910),s=r(3718),i=r(3600),o=r(6988),a=r(1141),c=function(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n},u=function(e,t,r,s,u,l){var h,p,d=e.file,f=e.compression,m=l!==i.utf8encode,w=n.transformTo("string",l(d.name)),g=n.transformTo("string",i.utf8encode(d.name)),y=d.comment,b=n.transformTo("string",l(y)),v=n.transformTo("string",i.utf8encode(y)),x=g.length!==d.name.length,_=v.length!==y.length,E="",T="",A="",S=d.dir,I=d.date,N={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(N.crc32=e.crc32,N.compressedSize=e.compressedSize,N.uncompressedSize=e.uncompressedSize);var R=0;t&&(R|=8),m||!x&&!_||(R|=2048);var k,C,O=0,L=0;S&&(O|=16),"UNIX"===u?(L=798,O|=(C=k=d.unixPermissions,k||(C=S?16893:33204),(65535&C)<<16)):(L=20,O|=63&(d.dosPermissions||0)),h=I.getUTCHours(),h<<=6,h|=I.getUTCMinutes(),h<<=5,h|=I.getUTCSeconds()/2,p=I.getUTCFullYear()-1980,p<<=4,p|=I.getUTCMonth()+1,p<<=5,p|=I.getUTCDate(),x&&(T=c(1,1)+c(o(w),4)+g,E+="up"+c(T.length,2)+T),_&&(A=c(1,1)+c(o(b),4)+v,E+="uc"+c(A.length,2)+A);var D="";return D+="\n\0",D+=c(R,2),D+=f.magic,D+=c(h,2),D+=c(p,2),D+=c(N.crc32,4),D+=c(N.compressedSize,4),D+=c(N.uncompressedSize,4),D+=c(w.length,2),D+=c(E.length,2),{fileRecord:a.LOCAL_FILE_HEADER+D+w+E,dirRecord:a.CENTRAL_FILE_HEADER+c(L,2)+D+c(b.length,2)+"\0\0\0\0"+c(O,4)+c(s,4)+w+E+b}},l=function(e){return a.DATA_DESCRIPTOR+c(e.crc32,4)+c(e.compressedSize,4)+c(e.uncompressedSize,4)};function h(e,t,r,n){s.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[];}n.inherits(h,s),h.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,s.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}));},h.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=u(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}});}else this.accumulate=!0;},h.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=u(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:l(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null;},h.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,s=function(e,t,r,s,i){var o=n.transformTo("string",i(s));return a.CENTRAL_DIRECTORY_END+"\0\0\0\0"+c(e,2)+c(e,2)+c(t,4)+c(r,4)+c(o.length,2)+o}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:s,meta:{percent:100}});},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume();},h.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",(function(e){t.processChunk(e);})),e.on("end",(function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end();})),e.on("error",(function(e){t.error(e);})),this},h.prototype.resume=function(){return !!s.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(e){var t=this._sources;if(!s.prototype.error.call(this,e))return !1;for(var r=0;r<t.length;r++)try{t[r].error(e);}catch(e){}return !0},h.prototype.lock=function(){s.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock();},e.exports=h;},7834:(e,t,r)=>{var n=r(1678),s=r(4979);t.generateWorker=function(e,t,r){var i=new s(t.streamFiles,r,t.platform,t.encodeFileName),o=0;try{e.forEach((function(e,r){o++;var s=function(e,t){var r=e||t,s=n[r];if(!s)throw new Error(r+" is not a valid compression method !");return s}(r.options.compression,t.compression),a=r.options.compressionOptions||t.compressionOptions||{},c=r.dir,u=r.date;r._compressWorker(s,a).withStreamInfo("file",{name:e,dir:c,date:u,comment:r.comment||"",unixPermissions:r.unixPermissions,dosPermissions:r.dosPermissions}).pipe(i);})),i.entriesCount=o;}catch(e){i.error(e);}return i};},6085:(e,t,r)=>{function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e};}n.prototype=r(7132),n.prototype.loadAsync=r(1062),n.support=r(3790),n.defaults=r(6032),n.version="3.10.1",n.loadAsync=function(e,t){return (new n).loadAsync(e,t)},n.external=r(8565),e.exports=n;},1062:(e,t,r)=>{var n=r(8910),s=r(8565),i=r(3600),o=r(6624),a=r(2541),c=r(2182);function u(e){return new s.Promise((function(t,r){var n=e.decompressed.getContentWorker().pipe(new a);n.on("error",(function(e){r(e);})).on("end",(function(){n.streamInfo.crc32!==e.decompressed.crc32?r(new Error("Corrupted zip : CRC32 mismatch")):t();})).resume();}))}e.exports=function(e,t){var r=this;return t=n.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:i.utf8decode}),c.isNode&&c.isStream(e)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then((function(e){var r=new o(t);return r.load(e),r})).then((function(e){var r=[s.Promise.resolve(e)],n=e.files;if(t.checkCRC32)for(var i=0;i<n.length;i++)r.push(u(n[i]));return s.Promise.all(r)})).then((function(e){for(var s=e.shift(),i=s.files,o=0;o<i.length;o++){var a=i[o],c=a.fileNameStr,u=n.resolve(a.fileNameStr);r.file(u,a.decompressed,{binary:!0,optimizedBinaryString:!0,date:a.date,dir:a.dir,comment:a.fileCommentStr.length?a.fileCommentStr:null,unixPermissions:a.unixPermissions,dosPermissions:a.dosPermissions,createFolders:t.createFolders}),a.dir||(r.file(u).unsafeOriginalName=c);}return s.zipComment.length&&(r.comment=s.zipComment),r}))};},2182:e=>{e.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}};},660:(e,t,r)=>{var n=r(8910),s=r(3718);function i(e,t){s.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t);}n.inherits(i,s),i.prototype._bindStream=function(e){var t=this;this._stream=e,e.pause(),e.on("data",(function(e){t.push({data:e,meta:{percent:0}});})).on("error",(function(e){t.isPaused?this.generatedError=e:t.error(e);})).on("end",(function(){t.isPaused?t._upstreamEnded=!0:t.end();}));},i.prototype.pause=function(){return !!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},i.prototype.resume=function(){return !!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},e.exports=i;},1220:(e,t,r)=>{var n=r(749).Readable;function s(e,t,r){n.call(this,t),this._helper=e;var s=this;e.on("data",(function(e,t){s.push(e)||s._helper.pause(),r&&r(t);})).on("error",(function(e){s.emit("error",e);})).on("end",(function(){s.push(null);}));}r(8910).inherits(s,n),s.prototype._read=function(){this._helper.resume();},e.exports=s;},7132:(e,t,r)=>{var n=r(3600),s=r(8910),i=r(3718),o=r(1285),a=r(6032),c=r(7326),u=r(6859),l=r(7834),h=r(2182),p=r(660),d=function(e,t,r){var n,o=s.getTypeOf(t),l=s.extend(r||{},a);l.date=l.date||new Date,null!==l.compression&&(l.compression=l.compression.toUpperCase()),"string"==typeof l.unixPermissions&&(l.unixPermissions=parseInt(l.unixPermissions,8)),l.unixPermissions&&16384&l.unixPermissions&&(l.dir=!0),l.dosPermissions&&16&l.dosPermissions&&(l.dir=!0),l.dir&&(e=m(e)),l.createFolders&&(n=f(e))&&w.call(this,n,!0);var d="string"===o&&!1===l.binary&&!1===l.base64;r&&void 0!==r.binary||(l.binary=!d),(t instanceof c&&0===t.uncompressedSize||l.dir||!t||0===t.length)&&(l.base64=!1,l.binary=!0,t="",l.compression="STORE",o="string");var g;g=t instanceof c||t instanceof i?t:h.isNode&&h.isStream(t)?new p(e,t):s.prepareContent(e,t,l.binary,l.optimizedBinaryString,l.base64);var y=new u(e,g,l);this.files[e]=y;},f=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return t>0?e.substring(0,t):""},m=function(e){return "/"!==e.slice(-1)&&(e+="/"),e},w=function(e,t){return t=void 0!==t?t:a.createFolders,e=m(e),this.files[e]||d.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function g(e){return "[object RegExp]"===Object.prototype.toString.call(e)}var y={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n);},filter:function(e){var t=[];return this.forEach((function(r,n){e(r,n)&&t.push(n);})),t},file:function(e,t,r){if(1===arguments.length){if(g(e)){var n=e;return this.filter((function(e,t){return !t.dir&&n.test(e)}))}var s=this.files[this.root+e];return s&&!s.dir?s:null}return e=this.root+e,d.call(this,e,t,r),this},folder:function(e){if(!e)return this;if(g(e))return this.filter((function(t,r){return r.dir&&e.test(t)}));var t=this.root+e,r=w.call(this,t),n=this.clone();return n.root=r.name,n},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var r=this.filter((function(t,r){return r.name.slice(0,e.length)===e})),n=0;n<r.length;n++)delete this.files[r[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=s.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");s.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var a=r.comment||this.comment||"";t=l.generateWorker(this,r,a);}catch(e){(t=new i("error")).error(e);}return new o(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return (e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};e.exports=y;},749:(e,t,r)=>{e.exports=r(2830);},2370:(e,t,r)=>{var n=r(8542);function s(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t];}r(8910).inherits(s,n),s.prototype.byteAt=function(e){return this.data[this.zero+e]},s.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),s=e.charCodeAt(3),i=this.length-4;i>=0;--i)if(this.data[i]===t&&this.data[i+1]===r&&this.data[i+2]===n&&this.data[i+3]===s)return i-this.zero;return -1},s.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),s=e.charCodeAt(3),i=this.readData(4);return t===i[0]&&r===i[1]&&n===i[2]&&s===i[3]},s.prototype.readData=function(e){if(this.checkOffset(e),0===e)return [];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},e.exports=s;},8542:(e,t,r)=>{var n=r(8910);function s(e){this.data=e,this.length=e.length,this.index=0,this.zero=0;}s.prototype={checkOffset:function(e){this.checkIndex(this.index+e);},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e;},skip:function(e){this.setIndex(this.index+e);},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},e.exports=s;},9583:(e,t,r)=>{var n=r(414);function s(e){n.call(this,e);}r(8910).inherits(s,n),s.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},e.exports=s;},9226:(e,t,r)=>{var n=r(8542);function s(e){n.call(this,e);}r(8910).inherits(s,n),s.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},s.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},s.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},s.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},e.exports=s;},414:(e,t,r)=>{var n=r(2370);function s(e){n.call(this,e);}r(8910).inherits(s,n),s.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},e.exports=s;},8435:(e,t,r)=>{var n=r(8910),s=r(3790),i=r(2370),o=r(9226),a=r(9583),c=r(414);e.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||s.uint8array?"nodebuffer"===t?new a(e):s.uint8array?new c(n.transformTo("uint8array",e)):new i(n.transformTo("array",e)):new o(e)};},1141:(e,t)=>{t.LOCAL_FILE_HEADER="PK",t.CENTRAL_FILE_HEADER="PK",t.CENTRAL_DIRECTORY_END="PK",t.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",t.ZIP64_CENTRAL_DIRECTORY_END="PK",t.DATA_DESCRIPTOR="PK\b";},4293:(e,t,r)=>{var n=r(3718),s=r(8910);function i(e){n.call(this,"ConvertWorker to "+e),this.destType=e;}s.inherits(i,n),i.prototype.processChunk=function(e){this.push({data:s.transformTo(this.destType,e.data),meta:e.meta});},e.exports=i;},2541:(e,t,r)=>{var n=r(3718),s=r(6988);function i(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0);}r(8910).inherits(i,n),i.prototype.processChunk=function(e){this.streamInfo.crc32=s(e.data,this.streamInfo.crc32||0),this.push(e);},e.exports=i;},5977:(e,t,r)=>{var n=r(8910),s=r(3718);function i(e){s.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0);}n.inherits(i,s),i.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length;}s.prototype.processChunk.call(this,e);},e.exports=i;},5301:(e,t,r)=>{var n=r(8910),s=r(3718);function i(e){s.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then((function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat();}),(function(e){t.error(e);}));}n.inherits(i,s),i.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null;},i.prototype.resume=function(){return !!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},i.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0));},i.prototype._tick=function(){if(this.isPaused||this.isFinished)return !1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t);}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},e.exports=i;},3718:e=>{function t(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null;}t.prototype={push:function(e){this.emit("data",e);},end:function(){if(this.isFinished)return !1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0;}catch(e){this.emit("error",e);}return !0},error:function(e){return !this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[];},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t);},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",(function(e){t.processChunk(e);})),e.on("end",(function(){t.end();})),e.on("error",(function(e){t.error(e);})),this},pause:function(){return !this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return !1;this.isPaused=!1;var e=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e);},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e]);},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock();},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},e.exports=t;},1285:(e,t,r)=>{var n=r(8910),s=r(4293),i=r(3718),o=r(8458),a=r(3790),c=r(8565),u=null;if(a.nodestream)try{u=r(1220);}catch(e){}function l(e,t,r){var o=t;switch(t){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string";}try{this._internalType=o,this._outputType=t,this._mimeType=r,n.checkSupport(o),this._worker=e.pipe(new s(o)),e.lock();}catch(e){this._worker=new i("error"),this._worker.error(e);}}l.prototype={accumulate:function(e){return t=this,r=e,new c.Promise((function(e,s){var i=[],a=t._internalType,c=t._outputType,u=t._mimeType;t.on("data",(function(e,t){i.push(e),r&&r(t);})).on("error",(function(e){i=[],s(e);})).on("end",(function(){try{var t=function(e,t,r){switch(e){case"blob":return n.newBlob(n.transformTo("arraybuffer",t),r);case"base64":return o.encode(t);default:return n.transformTo(e,t)}}(c,function(e,t){var r,n=0,s=null,i=0;for(r=0;r<t.length;r++)i+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(s=new Uint8Array(i),r=0;r<t.length;r++)s.set(t[r],n),n+=t[r].length;return s;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(a,i),u);e(t);}catch(e){s(e);}i=[];})).resume();}));var t,r;},on:function(e,t){var r=this;return "data"===e?this._worker.on(e,(function(e){t.call(r,e.data,e.meta);})):this._worker.on(e,(function(){n.delay(t,arguments,r);})),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(n.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:"nodebuffer"!==this._outputType},e)}},e.exports=l;},3790:(e,t,r)=>{if(t.base64=!0,t.array=!0,t.string=!0,t.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,t.nodebuffer="undefined"!=typeof Buffer,t.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)t.blob=!1;else {var n=new ArrayBuffer(0);try{t.blob=0===new Blob([n],{type:"application/zip"}).size;}catch(e){try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),t.blob=0===s.getBlob("application/zip").size;}catch(e){t.blob=!1;}}}try{t.nodestream=!!r(749).Readable;}catch(e){t.nodestream=!1;}},3600:(e,t,r)=>{for(var n=r(8910),s=r(3790),i=r(2182),o=r(3718),a=new Array(256),c=0;c<256;c++)a[c]=c>=252?6:c>=248?5:c>=240?4:c>=224?3:c>=192?2:1;function u(){o.call(this,"utf-8 decode"),this.leftOver=null;}function l(){o.call(this,"utf-8 encode");}a[254]=a[254]=1,t.utf8encode=function(e){return s.nodebuffer?i.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,o,a=e.length,c=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=s.uint8array?new Uint8Array(c):new Array(c),o=0,i=0;o<c;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[o++]=r:r<2048?(t[o++]=192|r>>>6,t[o++]=128|63&r):r<65536?(t[o++]=224|r>>>12,t[o++]=128|r>>>6&63,t[o++]=128|63&r):(t[o++]=240|r>>>18,t[o++]=128|r>>>12&63,t[o++]=128|r>>>6&63,t[o++]=128|63&r);return t}(e)},t.utf8decode=function(e){return s.nodebuffer?n.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,s,i,o=e.length,c=new Array(2*o);for(r=0,t=0;t<o;)if((s=e[t++])<128)c[r++]=s;else if((i=a[s])>4)c[r++]=65533,t+=i-1;else {for(s&=2===i?31:3===i?15:7;i>1&&t<o;)s=s<<6|63&e[t++],i--;i>1?c[r++]=65533:s<65536?c[r++]=s:(s-=65536,c[r++]=55296|s>>10&1023,c[r++]=56320|1023&s);}return c.length!==r&&(c.subarray?c=c.subarray(0,r):c.length=r),n.applyFromCharCode(c)}(e=n.transformTo(s.uint8array?"uint8array":"array",e))},n.inherits(u,o),u.prototype.processChunk=function(e){var r=n.transformTo(s.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var i=r;(r=new Uint8Array(i.length+this.leftOver.length)).set(this.leftOver,0),r.set(i,this.leftOver.length);}else r=this.leftOver.concat(r);this.leftOver=null;}var o=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;r>=0&&128==(192&e[r]);)r--;return r<0||0===r?t:r+a[e[r]]>t?r:t}(r),c=r;o!==r.length&&(s.uint8array?(c=r.subarray(0,o),this.leftOver=r.subarray(o,r.length)):(c=r.slice(0,o),this.leftOver=r.slice(o,r.length))),this.push({data:t.utf8decode(c),meta:e.meta});},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:t.utf8decode(this.leftOver),meta:{}}),this.leftOver=null);},t.Utf8DecodeWorker=u,n.inherits(l,o),l.prototype.processChunk=function(e){this.push({data:t.utf8encode(e.data),meta:e.meta});},t.Utf8EncodeWorker=l;},8910:(e,t,r)=>{var n=r(3790),s=r(8458),i=r(2182),o=r(8565);function a(e){return e}function c(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}r(4889),t.newBlob=function(e,r){t.checkSupport("blob");try{return new Blob([e],{type:r})}catch(t){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(e),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(e,t,r){var n=[],s=0,i=e.length;if(i<=r)return String.fromCharCode.apply(null,e);for(;s<i;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(s,Math.min(s+r,i)))):n.push(String.fromCharCode.apply(null,e.subarray(s,Math.min(s+r,i)))),s+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return !1}}(),nodebuffer:function(){try{return n.nodebuffer&&1===String.fromCharCode.apply(null,i.allocBuffer(1)).length}catch(e){return !1}}()}};function l(e){var r=65536,n=t.getTypeOf(e),s=!0;if("uint8array"===n?s=u.applyCanBeUsed.uint8array:"nodebuffer"===n&&(s=u.applyCanBeUsed.nodebuffer),s)for(;r>1;)try{return u.stringifyByChunk(e,n,r)}catch(e){r=Math.floor(r/2);}return u.stringifyByChar(e)}function h(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}t.applyFromCharCode=l;var p={};p.string={string:a,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return p.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,i.allocBuffer(e.length))}},p.array={string:l,array:a,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return i.newBufferFrom(e)}},p.arraybuffer={string:function(e){return l(new Uint8Array(e))},array:function(e){return h(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:a,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return i.newBufferFrom(new Uint8Array(e))}},p.uint8array={string:l,array:function(e){return h(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:a,nodebuffer:function(e){return i.newBufferFrom(e)}},p.nodebuffer={string:l,array:function(e){return h(e,new Array(e.length))},arraybuffer:function(e){return p.nodebuffer.uint8array(e).buffer},uint8array:function(e){return h(e,new Uint8Array(e.length))},nodebuffer:a},t.transformTo=function(e,r){if(r||(r=""),!e)return r;t.checkSupport(e);var n=t.getTypeOf(r);return p[n][e](r)},t.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var s=t[n];"."===s||""===s&&0!==n&&n!==t.length-1||(".."===s?r.pop():r.push(s));}return r.join("/")},t.getTypeOf=function(e){return "string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":n.nodebuffer&&i.isBuffer(e)?"nodebuffer":n.uint8array&&e instanceof Uint8Array?"uint8array":n.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},t.checkSupport=function(e){if(!n[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},t.MAX_VALUE_16BITS=65535,t.MAX_VALUE_32BITS=-1,t.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},t.delay=function(e,t,r){setImmediate((function(){e.apply(r||null,t||[]);}));},t.inherits=function(e,t){var r=function(){};r.prototype=t.prototype,e.prototype=new r;},t.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},t.prepareContent=function(e,r,i,a,u){return o.Promise.resolve(r).then((function(e){return n.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new o.Promise((function(t,r){var n=new FileReader;n.onload=function(e){t(e.target.result);},n.onerror=function(e){r(e.target.error);},n.readAsArrayBuffer(e);})):e})).then((function(r){var l,h=t.getTypeOf(r);return h?("arraybuffer"===h?r=t.transformTo("uint8array",r):"string"===h&&(u?r=s.decode(r):i&&!0!==a&&(r=c(l=r,n.uint8array?new Uint8Array(l.length):new Array(l.length)))),r):o.Promise.reject(new Error("Can't read the data of '"+e+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))}))};},6624:(e,t,r)=>{var n=r(8435),s=r(8910),i=r(1141),o=r(9392),a=r(3790);function c(e){this.files=[],this.loadOptions=e;}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(t)+", expected "+s.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=a.uint8array?"uint8array":"array",r=s.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r);},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r};},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(i.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes();},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,i.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(e);var t=e;if(this.checkSignature(i.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,i.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral();}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(n>0)this.isSignature(t,i.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e);},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles();}},e.exports=c;},9392:(e,t,r)=>{var n=r(8435),s=r(8910),i=r(7326),o=r(6988),a=r(3600),c=r(1678),u=r(3790);function l(e,t){this.options=e,this.loadOptions=t;}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize));},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength);},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0===e&&(this.dosPermissions=63&this.externalFileAttributes),3===e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0);},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4));}},readExtraFields:function(e){var t,r,n,s=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<s;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(s);},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=a.utf8decode(this.fileName),this.fileCommentStr=a.utf8decode(this.fileComment);else {var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else {var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r);}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else {var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i);}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)||o(this.fileName)!==t.readInt(4)?null:a.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)||o(this.fileComment)!==t.readInt(4)?null:a.utf8decode(t.readData(e.length-5))}return null}},e.exports=l;},6859:(e,t,r)=>{var n=r(1285),s=r(5301),i=r(3600),o=r(7326),a=r(3718),c=function(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions};};c.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var s="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var o=!this._dataBinary;o&&!s&&(t=t.pipe(new i.Utf8EncodeWorker)),!o&&s&&(t=t.pipe(new i.Utf8DecodeWorker));}catch(e){(t=new a("error")).error(e);}return new n(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new i.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof a?this._data:new s(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<u.length;h++)c.prototype[u[h]]=l;e.exports=c;},3389:(e,t,r)=>{var n=r(5705);function s(){}var i={},o=["REJECTED"],a=["FULFILLED"],c=["PENDING"];function u(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==s&&d(this,e);}function l(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected);}function h(e,t,r){n((function(){var n;try{n=t(r);}catch(t){return i.reject(e,t)}n===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,n);}));}function p(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments);}}function d(e,t){var r=!1;function n(t){r||(r=!0,i.reject(e,t));}function s(t){r||(r=!0,i.resolve(e,t));}var o=f((function(){t(s,n);}));"error"===o.status&&n(o.value);}function f(e,t){var r={};try{r.value=e(t),r.status="success";}catch(e){r.status="error",r.value=e;}return r}e.exports=u,u.prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))},u.prototype.catch=function(e){return this.then(null,e)},u.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===o)return this;var r=new this.constructor(s);return this.state!==c?h(r,this.state===a?e:t,this.outcome):this.queue.push(new l(r,e,t)),r},l.prototype.callFulfilled=function(e){i.resolve(this.promise,e);},l.prototype.otherCallFulfilled=function(e){h(this.promise,this.onFulfilled,e);},l.prototype.callRejected=function(e){i.reject(this.promise,e);},l.prototype.otherCallRejected=function(e){h(this.promise,this.onRejected,e);},i.resolve=function(e,t){var r=f(p,t);if("error"===r.status)return i.reject(e,r.value);var n=r.value;if(n)d(e,n);else {e.state=a,e.outcome=t;for(var s=-1,o=e.queue.length;++s<o;)e.queue[s].callFulfilled(t);}return e},i.reject=function(e,t){e.state=o,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},u.resolve=function(e){return e instanceof this?e:i.resolve(new this(s),e)},u.reject=function(e){var t=new this(s);return i.reject(t,e)},u.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);for(var o=new Array(r),a=0,c=-1,u=new this(s);++c<r;)l(e[c],c);return u;function l(e,s){t.resolve(e).then((function(e){o[s]=e,++a!==r||n||(n=!0,i.resolve(u,o));}),(function(e){n||(n=!0,i.reject(u,e));}));}},u.race=function(e){if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var t=e.length,r=!1;if(!t)return this.resolve([]);for(var n,o=-1,a=new this(s);++o<t;)n=e[o],this.resolve(n).then((function(e){r||(r=!0,i.resolve(a,e));}),(function(e){r||(r=!0,i.reject(a,e));}));return a};},9591:(e,t,r)=>{var n={};(0, r(4236).assign)(n,r(4555),r(8843),r(1619)),e.exports=n;},4555:(e,t,r)=>{var n=r(405),s=r(4236),i=r(9373),o=r(8898),a=r(2292),c=Object.prototype.toString;function u(e){if(!(this instanceof u))return new u(e);this.options=s.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new a,this.strm.avail_out=0;var r=n.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(0!==r)throw new Error(o[r]);if(t.header&&n.deflateSetHeader(this.strm,t.header),t.dictionary){var l;if(l="string"==typeof t.dictionary?i.string2buf(t.dictionary):"[object ArrayBuffer]"===c.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,0!==(r=n.deflateSetDictionary(this.strm,l)))throw new Error(o[r]);this._dict_set=!0;}}function l(e,t){var r=new u(t);if(r.push(e,!0),r.err)throw r.msg||o[r.err];return r.result}u.prototype.push=function(e,t){var r,o,a=this.strm,u=this.options.chunkSize;if(this.ended)return !1;o=t===~~t?t:!0===t?4:0,"string"==typeof e?a.input=i.string2buf(e):"[object ArrayBuffer]"===c.call(e)?a.input=new Uint8Array(e):a.input=e,a.next_in=0,a.avail_in=a.input.length;do{if(0===a.avail_out&&(a.output=new s.Buf8(u),a.next_out=0,a.avail_out=u),1!==(r=n.deflate(a,o))&&0!==r)return this.onEnd(r),this.ended=!0,!1;0!==a.avail_out&&(0!==a.avail_in||4!==o&&2!==o)||("string"===this.options.to?this.onData(i.buf2binstring(s.shrinkBuf(a.output,a.next_out))):this.onData(s.shrinkBuf(a.output,a.next_out)));}while((a.avail_in>0||0===a.avail_out)&&1!==r);return 4===o?(r=n.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,0===r):2!==o||(this.onEnd(0),a.avail_out=0,!0)},u.prototype.onData=function(e){this.chunks.push(e);},u.prototype.onEnd=function(e){0===e&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg;},t.Deflate=u,t.deflate=l,t.deflateRaw=function(e,t){return (t=t||{}).raw=!0,l(e,t)},t.gzip=function(e,t){return (t=t||{}).gzip=!0,l(e,t)};},8843:(e,t,r)=>{var n=r(7948),s=r(4236),i=r(9373),o=r(1619),a=r(8898),c=r(2292),u=r(2401),l=Object.prototype.toString;function h(e){if(!(this instanceof h))return new h(e);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var r=n.inflateInit2(this.strm,t.windowBits);if(r!==o.Z_OK)throw new Error(a[r]);if(this.header=new u,n.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=i.string2buf(t.dictionary):"[object ArrayBuffer]"===l.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=n.inflateSetDictionary(this.strm,t.dictionary))!==o.Z_OK))throw new Error(a[r])}function p(e,t){var r=new h(t);if(r.push(e,!0),r.err)throw r.msg||a[r.err];return r.result}h.prototype.push=function(e,t){var r,a,c,u,h,p=this.strm,d=this.options.chunkSize,f=this.options.dictionary,m=!1;if(this.ended)return !1;a=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,"string"==typeof e?p.input=i.binstring2buf(e):"[object ArrayBuffer]"===l.call(e)?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(0===p.avail_out&&(p.output=new s.Buf8(d),p.next_out=0,p.avail_out=d),(r=n.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&f&&(r=n.inflateSetDictionary(this.strm,f)),r===o.Z_BUF_ERROR&&!0===m&&(r=o.Z_OK,m=!1),r!==o.Z_STREAM_END&&r!==o.Z_OK)return this.onEnd(r),this.ended=!0,!1;p.next_out&&(0!==p.avail_out&&r!==o.Z_STREAM_END&&(0!==p.avail_in||a!==o.Z_FINISH&&a!==o.Z_SYNC_FLUSH)||("string"===this.options.to?(c=i.utf8border(p.output,p.next_out),u=p.next_out-c,h=i.buf2string(p.output,c),p.next_out=u,p.avail_out=d-u,u&&s.arraySet(p.output,p.output,c,u,0),this.onData(h)):this.onData(s.shrinkBuf(p.output,p.next_out)))),0===p.avail_in&&0===p.avail_out&&(m=!0);}while((p.avail_in>0||0===p.avail_out)&&r!==o.Z_STREAM_END);return r===o.Z_STREAM_END&&(a=o.Z_FINISH),a===o.Z_FINISH?(r=n.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===o.Z_OK):a!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),p.avail_out=0,!0)},h.prototype.onData=function(e){this.chunks.push(e);},h.prototype.onEnd=function(e){e===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg;},t.Inflate=h,t.inflate=p,t.inflateRaw=function(e,t){return (t=t||{}).raw=!0,p(e,t)},t.ungzip=p;},4236:(e,t)=>{var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var s in r)n(r,s)&&(e[s]=r[s]);}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var s={arraySet:function(e,t,r,n,s){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),s);else for(var i=0;i<n;i++)e[s+i]=t[r+i];},flattenChunks:function(e){var t,r,n,s,i,o;for(n=0,t=0,r=e.length;t<r;t++)n+=e[t].length;for(o=new Uint8Array(n),s=0,t=0,r=e.length;t<r;t++)i=e[t],o.set(i,s),s+=i.length;return o}},i={arraySet:function(e,t,r,n,s){for(var i=0;i<n;i++)e[s+i]=t[r+i];},flattenChunks:function(e){return [].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,s)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,i));},t.setTyped(r);},9373:(e,t,r)=>{var n=r(4236),s=!0,i=!0;try{String.fromCharCode.apply(null,[0]);}catch(e){s=!1;}try{String.fromCharCode.apply(null,new Uint8Array(1));}catch(e){i=!1;}for(var o=new n.Buf8(256),a=0;a<256;a++)o[a]=a>=252?6:a>=248?5:a>=240?4:a>=224?3:a>=192?2:1;function c(e,t){if(t<65534&&(e.subarray&&i||!e.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(e,t));for(var r="",o=0;o<t;o++)r+=String.fromCharCode(e[o]);return r}o[254]=o[254]=1,t.string2buf=function(e){var t,r,s,i,o,a=e.length,c=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(s=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(s-56320),i++),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=new n.Buf8(c),o=0,i=0;o<c;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(s=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(s-56320),i++),r<128?t[o++]=r:r<2048?(t[o++]=192|r>>>6,t[o++]=128|63&r):r<65536?(t[o++]=224|r>>>12,t[o++]=128|r>>>6&63,t[o++]=128|63&r):(t[o++]=240|r>>>18,t[o++]=128|r>>>12&63,t[o++]=128|r>>>6&63,t[o++]=128|63&r);return t},t.buf2binstring=function(e){return c(e,e.length)},t.binstring2buf=function(e){for(var t=new n.Buf8(e.length),r=0,s=t.length;r<s;r++)t[r]=e.charCodeAt(r);return t},t.buf2string=function(e,t){var r,n,s,i,a=t||e.length,u=new Array(2*a);for(n=0,r=0;r<a;)if((s=e[r++])<128)u[n++]=s;else if((i=o[s])>4)u[n++]=65533,r+=i-1;else {for(s&=2===i?31:3===i?15:7;i>1&&r<a;)s=s<<6|63&e[r++],i--;i>1?u[n++]=65533:s<65536?u[n++]=s:(s-=65536,u[n++]=55296|s>>10&1023,u[n++]=56320|1023&s);}return c(u,n)},t.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;r>=0&&128==(192&e[r]);)r--;return r<0||0===r?t:r+o[e[r]]>t?r:t};},6069:e=>{e.exports=function(e,t,r,n){for(var s=65535&e|0,i=e>>>16&65535|0,o=0;0!==r;){r-=o=r>2e3?2e3:r;do{i=i+(s=s+t[n++]|0)|0;}while(--o);s%=65521,i%=65521;}return s|i<<16|0};},1619:e=>{e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};},2869:e=>{var t=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e;}return t}();e.exports=function(e,r,n,s){var i=t,o=s+n;e^=-1;for(var a=s;a<o;a++)e=e>>>8^i[255&(e^r[a])];return -1^e};},405:(e,t,r)=>{var n,s=r(4236),i=r(342),o=r(6069),a=r(2869),c=r(8898),u=-2,l=258,h=262,p=103,d=113,f=666;function m(e,t){return e.msg=c[t],t}function w(e){return (e<<1)-(e>4?9:0)}function g(e){for(var t=e.length;--t>=0;)e[t]=0;}function y(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(s.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0));}function b(e,t){i._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,y(e.strm);}function v(e,t){e.pending_buf[e.pending++]=t;}function x(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t;}function _(e,t){var r,n,s=e.max_chain_length,i=e.strstart,o=e.prev_length,a=e.nice_match,c=e.strstart>e.w_size-h?e.strstart-(e.w_size-h):0,u=e.window,p=e.w_mask,d=e.prev,f=e.strstart+l,m=u[i+o-1],w=u[i+o];e.prev_length>=e.good_match&&(s>>=2),a>e.lookahead&&(a=e.lookahead);do{if(u[(r=t)+o]===w&&u[r+o-1]===m&&u[r]===u[i]&&u[++r]===u[i+1]){i+=2,r++;do{}while(u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&i<f);if(n=l-(f-i),i=f-l,n>o){if(e.match_start=t,o=n,n>=a)break;m=u[i+o-1],w=u[i+o];}}}while((t=d[t&p])>c&&0!=--s);return o<=e.lookahead?o:e.lookahead}function E(e){var t,r,n,i,c,u,l,p,d,f,m=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-h)){s.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=r=e.hash_size;do{n=e.head[--t],e.head[t]=n>=m?n-m:0;}while(--r);t=r=m;do{n=e.prev[--t],e.prev[t]=n>=m?n-m:0;}while(--r);i+=m;}if(0===e.strm.avail_in)break;if(u=e.strm,l=e.window,p=e.strstart+e.lookahead,d=i,f=void 0,(f=u.avail_in)>d&&(f=d),r=0===f?0:(u.avail_in-=f,s.arraySet(l,u.input,u.next_in,f,p),1===u.state.wrap?u.adler=o(u.adler,l,f,p):2===u.state.wrap&&(u.adler=a(u.adler,l,f,p)),u.next_in+=f,u.total_in+=f,f),e.lookahead+=r,e.lookahead+e.insert>=3)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+3-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<h&&0!==e.strm.avail_in)}function T(e,t){for(var r,n;;){if(e.lookahead<h){if(E(e),e.lookahead<h&&0===t)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-h&&(e.match_length=_(e,r)),e.match_length>=3)if(n=i._tr_tally(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){e.match_length--;do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;}while(0!=--e.match_length);e.strstart++;}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=i._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(b(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<2?e.strstart:2,4===t?(b(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(b(e,!1),0===e.strm.avail_out)?1:2}function A(e,t){for(var r,n,s;;){if(e.lookahead<h){if(E(e),e.lookahead<h&&0===t)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-h&&(e.match_length=_(e,r),e.match_length<=5&&(1===e.strategy||3===e.match_length&&e.strstart-e.match_start>4096)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){s=e.strstart+e.lookahead-3,n=i._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=s&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);}while(0!=--e.prev_length);if(e.match_available=0,e.match_length=2,e.strstart++,n&&(b(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((n=i._tr_tally(e,0,e.window[e.strstart-1]))&&b(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--;}return e.match_available&&(n=i._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,4===t?(b(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(b(e,!1),0===e.strm.avail_out)?1:2}function S(e,t,r,n,s){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=s;}function I(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(1146),this.dyn_dtree=new s.Buf16(122),this.bl_tree=new s.Buf16(78),g(this.dyn_ltree),g(this.dyn_dtree),g(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(16),this.heap=new s.Buf16(573),g(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(573),g(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0;}function N(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=2,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:d,e.adler=2===t.wrap?0:1,t.last_flush=0,i._tr_init(t),0):m(e,u)}function R(e){var t,r=N(e);return 0===r&&((t=e.state).window_size=2*t.w_size,g(t.head),t.max_lazy_match=n[t.level].max_lazy,t.good_match=n[t.level].good_length,t.nice_match=n[t.level].nice_length,t.max_chain_length=n[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=2,t.match_available=0,t.ins_h=0),r}function k(e,t,r,n,i,o){if(!e)return u;var a=1;if(-1===t&&(t=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),i<1||i>9||8!==r||n<8||n>15||t<0||t>9||o<0||o>4)return m(e,u);8===n&&(n=9);var c=new I;return e.state=c,c.strm=e,c.wrap=a,c.gzhead=null,c.w_bits=n,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=i+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+3-1)/3),c.window=new s.Buf8(2*c.w_size),c.head=new s.Buf16(c.hash_size),c.prev=new s.Buf16(c.w_size),c.lit_bufsize=1<<i+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new s.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=r,R(e)}n=[new S(0,0,0,0,(function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(E(e),0===e.lookahead&&0===t)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,b(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-h&&(b(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(b(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(b(e,!1),e.strm.avail_out),1)})),new S(4,4,8,4,T),new S(4,5,16,8,T),new S(4,6,32,32,T),new S(4,4,16,16,A),new S(8,16,32,32,A),new S(8,16,128,128,A),new S(8,32,128,256,A),new S(32,128,258,1024,A),new S(32,258,258,4096,A)],t.deflateInit=function(e,t){return k(e,t,8,15,8,0)},t.deflateInit2=k,t.deflateReset=R,t.deflateResetKeep=N,t.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?u:(e.state.gzhead=t,0):u},t.deflate=function(e,t){var r,s,o,c;if(!e||!e.state||t>5||t<0)return e?m(e,u):u;if(s=e.state,!e.output||!e.input&&0!==e.avail_in||s.status===f&&4!==t)return m(e,0===e.avail_out?-5:u);if(s.strm=e,r=s.last_flush,s.last_flush=t,42===s.status)if(2===s.wrap)e.adler=0,v(s,31),v(s,139),v(s,8),s.gzhead?(v(s,(s.gzhead.text?1:0)+(s.gzhead.hcrc?2:0)+(s.gzhead.extra?4:0)+(s.gzhead.name?8:0)+(s.gzhead.comment?16:0)),v(s,255&s.gzhead.time),v(s,s.gzhead.time>>8&255),v(s,s.gzhead.time>>16&255),v(s,s.gzhead.time>>24&255),v(s,9===s.level?2:s.strategy>=2||s.level<2?4:0),v(s,255&s.gzhead.os),s.gzhead.extra&&s.gzhead.extra.length&&(v(s,255&s.gzhead.extra.length),v(s,s.gzhead.extra.length>>8&255)),s.gzhead.hcrc&&(e.adler=a(e.adler,s.pending_buf,s.pending,0)),s.gzindex=0,s.status=69):(v(s,0),v(s,0),v(s,0),v(s,0),v(s,0),v(s,9===s.level?2:s.strategy>=2||s.level<2?4:0),v(s,3),s.status=d);else {var h=8+(s.w_bits-8<<4)<<8;h|=(s.strategy>=2||s.level<2?0:s.level<6?1:6===s.level?2:3)<<6,0!==s.strstart&&(h|=32),h+=31-h%31,s.status=d,x(s,h),0!==s.strstart&&(x(s,e.adler>>>16),x(s,65535&e.adler)),e.adler=1;}if(69===s.status)if(s.gzhead.extra){for(o=s.pending;s.gzindex<(65535&s.gzhead.extra.length)&&(s.pending!==s.pending_buf_size||(s.gzhead.hcrc&&s.pending>o&&(e.adler=a(e.adler,s.pending_buf,s.pending-o,o)),y(e),o=s.pending,s.pending!==s.pending_buf_size));)v(s,255&s.gzhead.extra[s.gzindex]),s.gzindex++;s.gzhead.hcrc&&s.pending>o&&(e.adler=a(e.adler,s.pending_buf,s.pending-o,o)),s.gzindex===s.gzhead.extra.length&&(s.gzindex=0,s.status=73);}else s.status=73;if(73===s.status)if(s.gzhead.name){o=s.pending;do{if(s.pending===s.pending_buf_size&&(s.gzhead.hcrc&&s.pending>o&&(e.adler=a(e.adler,s.pending_buf,s.pending-o,o)),y(e),o=s.pending,s.pending===s.pending_buf_size)){c=1;break}c=s.gzindex<s.gzhead.name.length?255&s.gzhead.name.charCodeAt(s.gzindex++):0,v(s,c);}while(0!==c);s.gzhead.hcrc&&s.pending>o&&(e.adler=a(e.adler,s.pending_buf,s.pending-o,o)),0===c&&(s.gzindex=0,s.status=91);}else s.status=91;if(91===s.status)if(s.gzhead.comment){o=s.pending;do{if(s.pending===s.pending_buf_size&&(s.gzhead.hcrc&&s.pending>o&&(e.adler=a(e.adler,s.pending_buf,s.pending-o,o)),y(e),o=s.pending,s.pending===s.pending_buf_size)){c=1;break}c=s.gzindex<s.gzhead.comment.length?255&s.gzhead.comment.charCodeAt(s.gzindex++):0,v(s,c);}while(0!==c);s.gzhead.hcrc&&s.pending>o&&(e.adler=a(e.adler,s.pending_buf,s.pending-o,o)),0===c&&(s.status=p);}else s.status=p;if(s.status===p&&(s.gzhead.hcrc?(s.pending+2>s.pending_buf_size&&y(e),s.pending+2<=s.pending_buf_size&&(v(s,255&e.adler),v(s,e.adler>>8&255),e.adler=0,s.status=d)):s.status=d),0!==s.pending){if(y(e),0===e.avail_out)return s.last_flush=-1,0}else if(0===e.avail_in&&w(t)<=w(r)&&4!==t)return m(e,-5);if(s.status===f&&0!==e.avail_in)return m(e,-5);if(0!==e.avail_in||0!==s.lookahead||0!==t&&s.status!==f){var _=2===s.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(E(e),0===e.lookahead)){if(0===t)return 1;break}if(e.match_length=0,r=i._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(b(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(b(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(b(e,!1),0===e.strm.avail_out)?1:2}(s,t):3===s.strategy?function(e,t){for(var r,n,s,o,a=e.window;;){if(e.lookahead<=l){if(E(e),e.lookahead<=l&&0===t)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=3&&e.strstart>0&&(n=a[s=e.strstart-1])===a[++s]&&n===a[++s]&&n===a[++s]){o=e.strstart+l;do{}while(n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&s<o);e.match_length=l-(o-s),e.match_length>e.lookahead&&(e.match_length=e.lookahead);}if(e.match_length>=3?(r=i._tr_tally(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=i._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(b(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(b(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(b(e,!1),0===e.strm.avail_out)?1:2}(s,t):n[s.level].func(s,t);if(3!==_&&4!==_||(s.status=f),1===_||3===_)return 0===e.avail_out&&(s.last_flush=-1),0;if(2===_&&(1===t?i._tr_align(s):5!==t&&(i._tr_stored_block(s,0,0,!1),3===t&&(g(s.head),0===s.lookahead&&(s.strstart=0,s.block_start=0,s.insert=0))),y(e),0===e.avail_out))return s.last_flush=-1,0}return 4!==t?0:s.wrap<=0?1:(2===s.wrap?(v(s,255&e.adler),v(s,e.adler>>8&255),v(s,e.adler>>16&255),v(s,e.adler>>24&255),v(s,255&e.total_in),v(s,e.total_in>>8&255),v(s,e.total_in>>16&255),v(s,e.total_in>>24&255)):(x(s,e.adler>>>16),x(s,65535&e.adler)),y(e),s.wrap>0&&(s.wrap=-s.wrap),0!==s.pending?0:1)},t.deflateEnd=function(e){var t;return e&&e.state?42!==(t=e.state.status)&&69!==t&&73!==t&&91!==t&&t!==p&&t!==d&&t!==f?m(e,u):(e.state=null,t===d?m(e,-3):0):u},t.deflateSetDictionary=function(e,t){var r,n,i,a,c,l,h,p,d=t.length;if(!e||!e.state)return u;if(2===(a=(r=e.state).wrap)||1===a&&42!==r.status||r.lookahead)return u;for(1===a&&(e.adler=o(e.adler,t,d,0)),r.wrap=0,d>=r.w_size&&(0===a&&(g(r.head),r.strstart=0,r.block_start=0,r.insert=0),p=new s.Buf8(r.w_size),s.arraySet(p,t,d-r.w_size,r.w_size,0),t=p,d=r.w_size),c=e.avail_in,l=e.next_in,h=e.input,e.avail_in=d,e.next_in=0,e.input=t,E(r);r.lookahead>=3;){n=r.strstart,i=r.lookahead-2;do{r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+3-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++;}while(--i);r.strstart=n,r.lookahead=2,E(r);}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=2,r.match_available=0,e.next_in=l,e.input=h,e.avail_in=c,r.wrap=a,0},t.deflateInfo="pako deflate (from Nodeca project)";},2401:e=>{e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1;};},4264:e=>{e.exports=function(e,t){var r,n,s,i,o,a,c,u,l,h,p,d,f,m,w,g,y,b,v,x,_,E,T,A,S;r=e.state,n=e.next_in,A=e.input,s=n+(e.avail_in-5),i=e.next_out,S=e.output,o=i-(t-e.avail_out),a=i+(e.avail_out-257),c=r.dmax,u=r.wsize,l=r.whave,h=r.wnext,p=r.window,d=r.hold,f=r.bits,m=r.lencode,w=r.distcode,g=(1<<r.lenbits)-1,y=(1<<r.distbits)-1;e:do{f<15&&(d+=A[n++]<<f,f+=8,d+=A[n++]<<f,f+=8),b=m[d&g];t:for(;;){if(d>>>=v=b>>>24,f-=v,0==(v=b>>>16&255))S[i++]=65535&b;else {if(!(16&v)){if(0==(64&v)){b=m[(65535&b)+(d&(1<<v)-1)];continue t}if(32&v){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}x=65535&b,(v&=15)&&(f<v&&(d+=A[n++]<<f,f+=8),x+=d&(1<<v)-1,d>>>=v,f-=v),f<15&&(d+=A[n++]<<f,f+=8,d+=A[n++]<<f,f+=8),b=w[d&y];r:for(;;){if(d>>>=v=b>>>24,f-=v,!(16&(v=b>>>16&255))){if(0==(64&v)){b=w[(65535&b)+(d&(1<<v)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(_=65535&b,f<(v&=15)&&(d+=A[n++]<<f,(f+=8)<v&&(d+=A[n++]<<f,f+=8)),(_+=d&(1<<v)-1)>c){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=v,f-=v,_>(v=i-o)){if((v=_-v)>l&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(E=0,T=p,0===h){if(E+=u-v,v<x){x-=v;do{S[i++]=p[E++];}while(--v);E=i-_,T=S;}}else if(h<v){if(E+=u+h-v,(v-=h)<x){x-=v;do{S[i++]=p[E++];}while(--v);if(E=0,h<x){x-=v=h;do{S[i++]=p[E++];}while(--v);E=i-_,T=S;}}}else if(E+=h-v,v<x){x-=v;do{S[i++]=p[E++];}while(--v);E=i-_,T=S;}for(;x>2;)S[i++]=T[E++],S[i++]=T[E++],S[i++]=T[E++],x-=3;x&&(S[i++]=T[E++],x>1&&(S[i++]=T[E++]));}else {E=i-_;do{S[i++]=S[E++],S[i++]=S[E++],S[i++]=S[E++],x-=3;}while(x>2);x&&(S[i++]=S[E++],x>1&&(S[i++]=S[E++]));}break}}break}}while(n<s&&i<a);n-=x=f>>3,d&=(1<<(f-=x<<3))-1,e.next_in=n,e.next_out=i,e.avail_in=n<s?s-n+5:5-(n-s),e.avail_out=i<a?a-i+257:257-(i-a),r.hold=d,r.bits=f;};},7948:(e,t,r)=>{var n=r(4236),s=r(6069),i=r(2869),o=r(4264),a=r(9241),c=-2,u=12,l=30;function h(e){return (e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function p(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0;}function d(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new n.Buf32(852),t.distcode=t.distdyn=new n.Buf32(592),t.sane=1,t.back=-1,0):c}function f(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,d(e)):c}function m(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?c:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,f(e))):c}function w(e,t){var r,n;return e?(n=new p,e.state=n,n.window=null,0!==(r=m(e,t))&&(e.state=null),r):c}var g,y,b=!0;function v(e){if(b){var t;for(g=new n.Buf32(512),y=new n.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(a(1,e.lens,0,288,g,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;a(2,e.lens,0,32,y,0,e.work,{bits:5}),b=!1;}e.lencode=g,e.lenbits=9,e.distcode=y,e.distbits=5;}function x(e,t,r,s){var i,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new n.Buf8(o.wsize)),s>=o.wsize?(n.arraySet(o.window,t,r-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((i=o.wsize-o.wnext)>s&&(i=s),n.arraySet(o.window,t,r-s,i,o.wnext),(s-=i)?(n.arraySet(o.window,t,r-s,s,0),o.wnext=s,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}t.inflateReset=f,t.inflateReset2=m,t.inflateResetKeep=d,t.inflateInit=function(e){return w(e,15)},t.inflateInit2=w,t.inflate=function(e,t){var r,p,d,f,m,w,g,y,b,_,E,T,A,S,I,N,R,k,C,O,L,D,P,F,B=0,M=new n.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return c;(r=e.state).mode===u&&(r.mode=13),m=e.next_out,d=e.output,g=e.avail_out,f=e.next_in,p=e.input,w=e.avail_in,y=r.hold,b=r.bits,_=w,E=g,D=0;e:for(;;)switch(r.mode){case 1:if(0===r.wrap){r.mode=13;break}for(;b<16;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(2&r.wrap&&35615===y){r.check=0,M[0]=255&y,M[1]=y>>>8&255,r.check=i(r.check,M,2,0),y=0,b=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&y)<<8)+(y>>8))%31){e.msg="incorrect header check",r.mode=l;break}if(8!=(15&y)){e.msg="unknown compression method",r.mode=l;break}if(b-=4,L=8+(15&(y>>>=4)),0===r.wbits)r.wbits=L;else if(L>r.wbits){e.msg="invalid window size",r.mode=l;break}r.dmax=1<<L,e.adler=r.check=1,r.mode=512&y?10:u,y=0,b=0;break;case 2:for(;b<16;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(r.flags=y,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=l;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=l;break}r.head&&(r.head.text=y>>8&1),512&r.flags&&(M[0]=255&y,M[1]=y>>>8&255,r.check=i(r.check,M,2,0)),y=0,b=0,r.mode=3;case 3:for(;b<32;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}r.head&&(r.head.time=y),512&r.flags&&(M[0]=255&y,M[1]=y>>>8&255,M[2]=y>>>16&255,M[3]=y>>>24&255,r.check=i(r.check,M,4,0)),y=0,b=0,r.mode=4;case 4:for(;b<16;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}r.head&&(r.head.xflags=255&y,r.head.os=y>>8),512&r.flags&&(M[0]=255&y,M[1]=y>>>8&255,r.check=i(r.check,M,2,0)),y=0,b=0,r.mode=5;case 5:if(1024&r.flags){for(;b<16;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}r.length=y,r.head&&(r.head.extra_len=y),512&r.flags&&(M[0]=255&y,M[1]=y>>>8&255,r.check=i(r.check,M,2,0)),y=0,b=0;}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&((T=r.length)>w&&(T=w),T&&(r.head&&(L=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),n.arraySet(r.head.extra,p,f,T,L)),512&r.flags&&(r.check=i(r.check,p,T,f)),w-=T,f+=T,r.length-=T),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===w)break e;T=0;do{L=p[f+T++],r.head&&L&&r.length<65536&&(r.head.name+=String.fromCharCode(L));}while(L&&T<w);if(512&r.flags&&(r.check=i(r.check,p,T,f)),w-=T,f+=T,L)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===w)break e;T=0;do{L=p[f+T++],r.head&&L&&r.length<65536&&(r.head.comment+=String.fromCharCode(L));}while(L&&T<w);if(512&r.flags&&(r.check=i(r.check,p,T,f)),w-=T,f+=T,L)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;b<16;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(y!==(65535&r.check)){e.msg="header crc mismatch",r.mode=l;break}y=0,b=0;}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=u;break;case 10:for(;b<32;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}e.adler=r.check=h(y),y=0,b=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=m,e.avail_out=g,e.next_in=f,e.avail_in=w,r.hold=y,r.bits=b,2;e.adler=r.check=1,r.mode=u;case u:if(5===t||6===t)break e;case 13:if(r.last){y>>>=7&b,b-=7&b,r.mode=27;break}for(;b<3;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}switch(r.last=1&y,b-=1,3&(y>>>=1)){case 0:r.mode=14;break;case 1:if(v(r),r.mode=20,6===t){y>>>=2,b-=2;break e}break;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=l;}y>>>=2,b-=2;break;case 14:for(y>>>=7&b,b-=7&b;b<32;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if((65535&y)!=(y>>>16^65535)){e.msg="invalid stored block lengths",r.mode=l;break}if(r.length=65535&y,y=0,b=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(T=r.length){if(T>w&&(T=w),T>g&&(T=g),0===T)break e;n.arraySet(d,p,f,T,m),w-=T,f+=T,g-=T,m+=T,r.length-=T;break}r.mode=u;break;case 17:for(;b<14;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(r.nlen=257+(31&y),y>>>=5,b-=5,r.ndist=1+(31&y),y>>>=5,b-=5,r.ncode=4+(15&y),y>>>=4,b-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=l;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;b<3;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}r.lens[U[r.have++]]=7&y,y>>>=3,b-=3;}for(;r.have<19;)r.lens[U[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,P={bits:r.lenbits},D=a(0,r.lens,0,19,r.lencode,0,r.work,P),r.lenbits=P.bits,D){e.msg="invalid code lengths set",r.mode=l;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;N=(B=r.lencode[y&(1<<r.lenbits)-1])>>>16&255,R=65535&B,!((I=B>>>24)<=b);){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(R<16)y>>>=I,b-=I,r.lens[r.have++]=R;else {if(16===R){for(F=I+2;b<F;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(y>>>=I,b-=I,0===r.have){e.msg="invalid bit length repeat",r.mode=l;break}L=r.lens[r.have-1],T=3+(3&y),y>>>=2,b-=2;}else if(17===R){for(F=I+3;b<F;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}b-=I,L=0,T=3+(7&(y>>>=I)),y>>>=3,b-=3;}else {for(F=I+7;b<F;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}b-=I,L=0,T=11+(127&(y>>>=I)),y>>>=7,b-=7;}if(r.have+T>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=l;break}for(;T--;)r.lens[r.have++]=L;}}if(r.mode===l)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=l;break}if(r.lenbits=9,P={bits:r.lenbits},D=a(1,r.lens,0,r.nlen,r.lencode,0,r.work,P),r.lenbits=P.bits,D){e.msg="invalid literal/lengths set",r.mode=l;break}if(r.distbits=6,r.distcode=r.distdyn,P={bits:r.distbits},D=a(2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,P),r.distbits=P.bits,D){e.msg="invalid distances set",r.mode=l;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(w>=6&&g>=258){e.next_out=m,e.avail_out=g,e.next_in=f,e.avail_in=w,r.hold=y,r.bits=b,o(e,E),m=e.next_out,d=e.output,g=e.avail_out,f=e.next_in,p=e.input,w=e.avail_in,y=r.hold,b=r.bits,r.mode===u&&(r.back=-1);break}for(r.back=0;N=(B=r.lencode[y&(1<<r.lenbits)-1])>>>16&255,R=65535&B,!((I=B>>>24)<=b);){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(N&&0==(240&N)){for(k=I,C=N,O=R;N=(B=r.lencode[O+((y&(1<<k+C)-1)>>k)])>>>16&255,R=65535&B,!(k+(I=B>>>24)<=b);){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}y>>>=k,b-=k,r.back+=k;}if(y>>>=I,b-=I,r.back+=I,r.length=R,0===N){r.mode=26;break}if(32&N){r.back=-1,r.mode=u;break}if(64&N){e.msg="invalid literal/length code",r.mode=l;break}r.extra=15&N,r.mode=22;case 22:if(r.extra){for(F=r.extra;b<F;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}r.length+=y&(1<<r.extra)-1,y>>>=r.extra,b-=r.extra,r.back+=r.extra;}r.was=r.length,r.mode=23;case 23:for(;N=(B=r.distcode[y&(1<<r.distbits)-1])>>>16&255,R=65535&B,!((I=B>>>24)<=b);){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(0==(240&N)){for(k=I,C=N,O=R;N=(B=r.distcode[O+((y&(1<<k+C)-1)>>k)])>>>16&255,R=65535&B,!(k+(I=B>>>24)<=b);){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}y>>>=k,b-=k,r.back+=k;}if(y>>>=I,b-=I,r.back+=I,64&N){e.msg="invalid distance code",r.mode=l;break}r.offset=R,r.extra=15&N,r.mode=24;case 24:if(r.extra){for(F=r.extra;b<F;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}r.offset+=y&(1<<r.extra)-1,y>>>=r.extra,b-=r.extra,r.back+=r.extra;}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=l;break}r.mode=25;case 25:if(0===g)break e;if(T=E-g,r.offset>T){if((T=r.offset-T)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=l;break}T>r.wnext?(T-=r.wnext,A=r.wsize-T):A=r.wnext-T,T>r.length&&(T=r.length),S=r.window;}else S=d,A=m-r.offset,T=r.length;T>g&&(T=g),g-=T,r.length-=T;do{d[m++]=S[A++];}while(--T);0===r.length&&(r.mode=21);break;case 26:if(0===g)break e;d[m++]=r.length,g--,r.mode=21;break;case 27:if(r.wrap){for(;b<32;){if(0===w)break e;w--,y|=p[f++]<<b,b+=8;}if(E-=g,e.total_out+=E,r.total+=E,E&&(e.adler=r.check=r.flags?i(r.check,d,E,m-E):s(r.check,d,E,m-E)),E=g,(r.flags?y:h(y))!==r.check){e.msg="incorrect data check",r.mode=l;break}y=0,b=0;}r.mode=28;case 28:if(r.wrap&&r.flags){for(;b<32;){if(0===w)break e;w--,y+=p[f++]<<b,b+=8;}if(y!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=l;break}y=0,b=0;}r.mode=29;case 29:D=1;break e;case l:D=-3;break e;case 31:return -4;default:return c}return e.next_out=m,e.avail_out=g,e.next_in=f,e.avail_in=w,r.hold=y,r.bits=b,(r.wsize||E!==e.avail_out&&r.mode<l&&(r.mode<27||4!==t))&&x(e,e.output,e.next_out,E-e.avail_out)?(r.mode=31,-4):(_-=e.avail_in,E-=e.avail_out,e.total_in+=_,e.total_out+=E,r.total+=E,r.wrap&&E&&(e.adler=r.check=r.flags?i(r.check,d,E,e.next_out-E):s(r.check,d,E,e.next_out-E)),e.data_type=r.bits+(r.last?64:0)+(r.mode===u?128:0)+(20===r.mode||15===r.mode?256:0),(0===_&&0===E||4===t)&&0===D&&(D=-5),D)},t.inflateEnd=function(e){if(!e||!e.state)return c;var t=e.state;return t.window&&(t.window=null),e.state=null,0},t.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?c:(r.head=t,t.done=!1,0):c},t.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?c:11===r.mode&&s(1,t,n,0)!==r.check?-3:x(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,0):c},t.inflateInfo="pako inflate (from Nodeca project)";},9241:(e,t,r)=>{var n=r(4236),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],i=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],a=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(e,t,r,c,u,l,h,p){var d,f,m,w,g,y,b,v,x,_=p.bits,E=0,T=0,A=0,S=0,I=0,N=0,R=0,k=0,C=0,O=0,L=null,D=0,P=new n.Buf16(16),F=new n.Buf16(16),B=null,M=0;for(E=0;E<=15;E++)P[E]=0;for(T=0;T<c;T++)P[t[r+T]]++;for(I=_,S=15;S>=1&&0===P[S];S--);if(I>S&&(I=S),0===S)return u[l++]=20971520,u[l++]=20971520,p.bits=1,0;for(A=1;A<S&&0===P[A];A++);for(I<A&&(I=A),k=1,E=1;E<=15;E++)if(k<<=1,(k-=P[E])<0)return -1;if(k>0&&(0===e||1!==S))return -1;for(F[1]=0,E=1;E<15;E++)F[E+1]=F[E]+P[E];for(T=0;T<c;T++)0!==t[r+T]&&(h[F[t[r+T]]++]=T);if(0===e?(L=B=h,y=19):1===e?(L=s,D-=257,B=i,M-=257,y=256):(L=o,B=a,y=-1),O=0,T=0,E=A,g=l,N=I,R=0,m=-1,w=(C=1<<I)-1,1===e&&C>852||2===e&&C>592)return 1;for(;;){b=E-R,h[T]<y?(v=0,x=h[T]):h[T]>y?(v=B[M+h[T]],x=L[D+h[T]]):(v=96,x=0),d=1<<E-R,A=f=1<<N;do{u[g+(O>>R)+(f-=d)]=b<<24|v<<16|x|0;}while(0!==f);for(d=1<<E-1;O&d;)d>>=1;if(0!==d?(O&=d-1,O+=d):O=0,T++,0==--P[E]){if(E===S)break;E=t[r+h[T]];}if(E>I&&(O&w)!==m){for(0===R&&(R=I),g+=A,k=1<<(N=E-R);N+R<S&&!((k-=P[N+R])<=0);)N++,k<<=1;if(C+=1<<N,1===e&&C>852||2===e&&C>592)return 1;u[m=O&w]=I<<24|N<<16|g-l|0;}}return 0!==O&&(u[g+O]=E-R<<24|64<<16|0),p.bits=I,0};},8898:e=>{e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};},342:(e,t,r)=>{var n=r(4236);function s(e){for(var t=e.length;--t>=0;)e[t]=0;}var i=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],o=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],c=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],u=new Array(576);s(u);var l=new Array(60);s(l);var h=new Array(512);s(h);var p=new Array(256);s(p);var d=new Array(29);s(d);var f,m,w,g=new Array(30);function y(e,t,r,n,s){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=s,this.has_stree=e&&e.length;}function b(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t;}function v(e){return e<256?h[e]:h[256+(e>>>7)]}function x(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255;}function _(e,t,r){e.bi_valid>16-r?(e.bi_buf|=t<<e.bi_valid&65535,x(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=r-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r);}function E(e,t,r){_(e,r[2*t],r[2*t+1]);}function T(e,t){var r=0;do{r|=1&e,e>>>=1,r<<=1;}while(--t>0);return r>>>1}function A(e,t,r){var n,s,i=new Array(16),o=0;for(n=1;n<=15;n++)i[n]=o=o+r[n-1]<<1;for(s=0;s<=t;s++){var a=e[2*s+1];0!==a&&(e[2*s]=T(i[a]++,a));}}function S(e){var t;for(t=0;t<286;t++)e.dyn_ltree[2*t]=0;for(t=0;t<30;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0;}function I(e){e.bi_valid>8?x(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0;}function N(e,t,r,n){var s=2*t,i=2*r;return e[s]<e[i]||e[s]===e[i]&&n[t]<=n[r]}function R(e,t,r){for(var n=e.heap[r],s=r<<1;s<=e.heap_len&&(s<e.heap_len&&N(t,e.heap[s+1],e.heap[s],e.depth)&&s++,!N(t,n,e.heap[s],e.depth));)e.heap[r]=e.heap[s],r=s,s<<=1;e.heap[r]=n;}function k(e,t,r){var n,s,a,c,u=0;if(0!==e.last_lit)do{n=e.pending_buf[e.d_buf+2*u]<<8|e.pending_buf[e.d_buf+2*u+1],s=e.pending_buf[e.l_buf+u],u++,0===n?E(e,s,t):(E(e,(a=p[s])+256+1,t),0!==(c=i[a])&&_(e,s-=d[a],c),E(e,a=v(--n),r),0!==(c=o[a])&&_(e,n-=g[a],c));}while(u<e.last_lit);E(e,256,t);}function C(e,t){var r,n,s,i=t.dyn_tree,o=t.stat_desc.static_tree,a=t.stat_desc.has_stree,c=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=573,r=0;r<c;r++)0!==i[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):i[2*r+1]=0;for(;e.heap_len<2;)i[2*(s=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[s]=0,e.opt_len--,a&&(e.static_len-=o[2*s+1]);for(t.max_code=u,r=e.heap_len>>1;r>=1;r--)R(e,i,r);s=c;do{r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],R(e,i,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,i[2*s]=i[2*r]+i[2*n],e.depth[s]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,i[2*r+1]=i[2*n+1]=s,e.heap[1]=s++,R(e,i,1);}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,s,i,o,a,c=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,h=t.stat_desc.has_stree,p=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,f=t.stat_desc.max_length,m=0;for(i=0;i<=15;i++)e.bl_count[i]=0;for(c[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<573;r++)(i=c[2*c[2*(n=e.heap[r])+1]+1]+1)>f&&(i=f,m++),c[2*n+1]=i,n>u||(e.bl_count[i]++,o=0,n>=d&&(o=p[n-d]),a=c[2*n],e.opt_len+=a*(i+o),h&&(e.static_len+=a*(l[2*n+1]+o)));if(0!==m){do{for(i=f-1;0===e.bl_count[i];)i--;e.bl_count[i]--,e.bl_count[i+1]+=2,e.bl_count[f]--,m-=2;}while(m>0);for(i=f;0!==i;i--)for(n=e.bl_count[i];0!==n;)(s=e.heap[--r])>u||(c[2*s+1]!==i&&(e.opt_len+=(i-c[2*s+1])*c[2*s],c[2*s+1]=i),n--);}}(e,t),A(i,u,e.bl_count);}function O(e,t,r){var n,s,i=-1,o=t[1],a=0,c=7,u=4;for(0===o&&(c=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)s=o,o=t[2*(n+1)+1],++a<c&&s===o||(a<u?e.bl_tree[2*s]+=a:0!==s?(s!==i&&e.bl_tree[2*s]++,e.bl_tree[32]++):a<=10?e.bl_tree[34]++:e.bl_tree[36]++,a=0,i=s,0===o?(c=138,u=3):s===o?(c=6,u=3):(c=7,u=4));}function L(e,t,r){var n,s,i=-1,o=t[1],a=0,c=7,u=4;for(0===o&&(c=138,u=3),n=0;n<=r;n++)if(s=o,o=t[2*(n+1)+1],!(++a<c&&s===o)){if(a<u)do{E(e,s,e.bl_tree);}while(0!=--a);else 0!==s?(s!==i&&(E(e,s,e.bl_tree),a--),E(e,16,e.bl_tree),_(e,a-3,2)):a<=10?(E(e,17,e.bl_tree),_(e,a-3,3)):(E(e,18,e.bl_tree),_(e,a-11,7));a=0,i=s,0===o?(c=138,u=3):s===o?(c=6,u=3):(c=7,u=4);}}s(g);var D=!1;function P(e,t,r,s){_(e,0+(s?1:0),3),function(e,t,r,s){I(e),x(e,r),x(e,~r),n.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r;}(e,t,r);}t._tr_init=function(e){D||(function(){var e,t,r,n,s,c=new Array(16);for(r=0,n=0;n<28;n++)for(d[n]=r,e=0;e<1<<i[n];e++)p[r++]=n;for(p[r-1]=n,s=0,n=0;n<16;n++)for(g[n]=s,e=0;e<1<<o[n];e++)h[s++]=n;for(s>>=7;n<30;n++)for(g[n]=s<<7,e=0;e<1<<o[n]-7;e++)h[256+s++]=n;for(t=0;t<=15;t++)c[t]=0;for(e=0;e<=143;)u[2*e+1]=8,e++,c[8]++;for(;e<=255;)u[2*e+1]=9,e++,c[9]++;for(;e<=279;)u[2*e+1]=7,e++,c[7]++;for(;e<=287;)u[2*e+1]=8,e++,c[8]++;for(A(u,287,c),e=0;e<30;e++)l[2*e+1]=5,l[2*e]=T(e,5);f=new y(u,i,257,286,15),m=new y(l,o,0,30,15),w=new y(new Array(0),a,0,19,7);}(),D=!0),e.l_desc=new b(e.dyn_ltree,f),e.d_desc=new b(e.dyn_dtree,m),e.bl_desc=new b(e.bl_tree,w),e.bi_buf=0,e.bi_valid=0,S(e);},t._tr_stored_block=P,t._tr_flush_block=function(e,t,r,n){var s,i,o=0;e.level>0?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<256;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),C(e,e.l_desc),C(e,e.d_desc),o=function(e){var t;for(O(e,e.dyn_ltree,e.l_desc.max_code),O(e,e.dyn_dtree,e.d_desc.max_code),C(e,e.bl_desc),t=18;t>=3&&0===e.bl_tree[2*c[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),s=e.opt_len+3+7>>>3,(i=e.static_len+3+7>>>3)<=s&&(s=i)):s=i=r+5,r+4<=s&&-1!==t?P(e,t,r,n):4===e.strategy||i===s?(_(e,2+(n?1:0),3),k(e,u,l)):(_(e,4+(n?1:0),3),function(e,t,r,n){var s;for(_(e,t-257,5),_(e,r-1,5),_(e,n-4,4),s=0;s<n;s++)_(e,e.bl_tree[2*c[s]+1],3);L(e,e.dyn_ltree,t-1),L(e,e.dyn_dtree,r-1);}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),k(e,e.dyn_ltree,e.dyn_dtree)),S(e),n&&I(e);},t._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(p[r]+256+1)]++,e.dyn_dtree[2*v(t)]++),e.last_lit===e.lit_bufsize-1},t._tr_align=function(e){_(e,2,3),E(e,256,u),function(e){16===e.bi_valid?(x(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8);}(e);};},2292:e=>{e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0;};},4155:e=>{var t,r,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s;}catch(e){t=s;}try{r="function"==typeof clearTimeout?clearTimeout:i;}catch(e){r=i;}}();var a,c=[],u=!1,l=-1;function h(){u&&a&&(u=!1,a.length?c=a.concat(c):l=-1,c.length&&p());}function p(){if(!u){var e=o(h);u=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length;}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e);}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e);}}function d(e,t){this.fun=e,this.array=t;}function f(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||u||o(p);},d.prototype.run=function(){this.fun.apply(null,this.array);},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return []},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return "/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};},9509:(e,t,r)=>{var n=r(8764),s=n.Buffer;function i(e,t){for(var r in e)t[r]=e[r];}function o(e,t,r){return s(e,t,r)}s.from&&s.alloc&&s.allocUnsafe&&s.allocUnsafeSlow?e.exports=n:(i(n,t),t.Buffer=o),i(s,o),o.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return s(e,t,r)},o.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=s(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},o.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return s(e)},o.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n.SlowBuffer(e)};},6099:(e,t,r)=>{!function(e){e.parser=function(e,t){return new s(e,t)},e.SAXParser=s,e.SAXStream=o,e.createStream=function(e,t){return new o(e,t)},e.MAX_BUFFER_LENGTH=65536;var t,n=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];function s(t,r){if(!(this instanceof s))return new s(t,r);var i=this;!function(e){for(var t=0,r=n.length;t<r;t++)e[n[t]]="";}(i),i.q=i.c="",i.bufferCheckPosition=e.MAX_BUFFER_LENGTH,i.opt=r||{},i.opt.lowercase=i.opt.lowercase||i.opt.lowercasetags,i.looseCase=i.opt.lowercase?"toLowerCase":"toUpperCase",i.tags=[],i.closed=i.closedRoot=i.sawRoot=!1,i.tag=i.error=null,i.strict=!!t,i.noscript=!(!t&&!i.opt.noscript),i.state=_.BEGIN,i.strictEntities=i.opt.strictEntities,i.ENTITIES=i.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),i.attribList=[],i.opt.xmlns&&(i.ns=Object.create(u)),i.trackPosition=!1!==i.opt.position,i.trackPosition&&(i.position=i.line=i.column=0),T(i,"onready");}e.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(e){function t(){}return t.prototype=e,new t}),Object.keys||(Object.keys=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);return t}),s.prototype={end:function(){R(this);},write:function(t){var r=this;if(this.error)throw this.error;if(r.closed)return N(r,"Cannot write after close. Assign an onready handler.");if(null===t)return R(r);"object"==typeof t&&(t=t.toString());for(var s=0,i="";i=M(t,s++),r.c=i,i;)switch(r.trackPosition&&(r.position++,"\n"===i?(r.line++,r.column=0):r.column++),r.state){case _.BEGIN:if(r.state=_.BEGIN_WHITESPACE,"\ufeff"===i)continue;B(r,i);continue;case _.BEGIN_WHITESPACE:B(r,i);continue;case _.TEXT:if(r.sawRoot&&!r.closedRoot){for(var o=s-1;i&&"<"!==i&&"&"!==i;)(i=M(t,s++))&&r.trackPosition&&(r.position++,"\n"===i?(r.line++,r.column=0):r.column++);r.textNode+=t.substring(o,s-1);}"<"!==i||r.sawRoot&&r.closedRoot&&!r.strict?(f(i)||r.sawRoot&&!r.closedRoot||k(r,"Text data outside of root node."),"&"===i?r.state=_.TEXT_ENTITY:r.textNode+=i):(r.state=_.OPEN_WAKA,r.startTagPosition=r.position);continue;case _.SCRIPT:"<"===i?r.state=_.SCRIPT_ENDING:r.script+=i;continue;case _.SCRIPT_ENDING:"/"===i?r.state=_.CLOSE_TAG:(r.script+="<"+i,r.state=_.SCRIPT);continue;case _.OPEN_WAKA:if("!"===i)r.state=_.SGML_DECL,r.sgmlDecl="";else if(f(i));else if(g(l,i))r.state=_.OPEN_TAG,r.tagName=i;else if("/"===i)r.state=_.CLOSE_TAG,r.tagName="";else if("?"===i)r.state=_.PROC_INST,r.procInstName=r.procInstBody="";else {if(k(r,"Unencoded <"),r.startTagPosition+1<r.position){var a=r.position-r.startTagPosition;i=new Array(a).join(" ")+i;}r.textNode+="<"+i,r.state=_.TEXT;}continue;case _.SGML_DECL:"[CDATA["===(r.sgmlDecl+i).toUpperCase()?(A(r,"onopencdata"),r.state=_.CDATA,r.sgmlDecl="",r.cdata=""):r.sgmlDecl+i==="--"?(r.state=_.COMMENT,r.comment="",r.sgmlDecl=""):"DOCTYPE"===(r.sgmlDecl+i).toUpperCase()?(r.state=_.DOCTYPE,(r.doctype||r.sawRoot)&&k(r,"Inappropriately located doctype declaration"),r.doctype="",r.sgmlDecl=""):">"===i?(A(r,"onsgmldeclaration",r.sgmlDecl),r.sgmlDecl="",r.state=_.TEXT):m(i)?(r.state=_.SGML_DECL_QUOTED,r.sgmlDecl+=i):r.sgmlDecl+=i;continue;case _.SGML_DECL_QUOTED:i===r.q&&(r.state=_.SGML_DECL,r.q=""),r.sgmlDecl+=i;continue;case _.DOCTYPE:">"===i?(r.state=_.TEXT,A(r,"ondoctype",r.doctype),r.doctype=!0):(r.doctype+=i,"["===i?r.state=_.DOCTYPE_DTD:m(i)&&(r.state=_.DOCTYPE_QUOTED,r.q=i));continue;case _.DOCTYPE_QUOTED:r.doctype+=i,i===r.q&&(r.q="",r.state=_.DOCTYPE);continue;case _.DOCTYPE_DTD:r.doctype+=i,"]"===i?r.state=_.DOCTYPE:m(i)&&(r.state=_.DOCTYPE_DTD_QUOTED,r.q=i);continue;case _.DOCTYPE_DTD_QUOTED:r.doctype+=i,i===r.q&&(r.state=_.DOCTYPE_DTD,r.q="");continue;case _.COMMENT:"-"===i?r.state=_.COMMENT_ENDING:r.comment+=i;continue;case _.COMMENT_ENDING:"-"===i?(r.state=_.COMMENT_ENDED,r.comment=I(r.opt,r.comment),r.comment&&A(r,"oncomment",r.comment),r.comment=""):(r.comment+="-"+i,r.state=_.COMMENT);continue;case _.COMMENT_ENDED:">"!==i?(k(r,"Malformed comment"),r.comment+="--"+i,r.state=_.COMMENT):r.state=_.TEXT;continue;case _.CDATA:"]"===i?r.state=_.CDATA_ENDING:r.cdata+=i;continue;case _.CDATA_ENDING:"]"===i?r.state=_.CDATA_ENDING_2:(r.cdata+="]"+i,r.state=_.CDATA);continue;case _.CDATA_ENDING_2:">"===i?(r.cdata&&A(r,"oncdata",r.cdata),A(r,"onclosecdata"),r.cdata="",r.state=_.TEXT):"]"===i?r.cdata+="]":(r.cdata+="]]"+i,r.state=_.CDATA);continue;case _.PROC_INST:"?"===i?r.state=_.PROC_INST_ENDING:f(i)?r.state=_.PROC_INST_BODY:r.procInstName+=i;continue;case _.PROC_INST_BODY:if(!r.procInstBody&&f(i))continue;"?"===i?r.state=_.PROC_INST_ENDING:r.procInstBody+=i;continue;case _.PROC_INST_ENDING:">"===i?(A(r,"onprocessinginstruction",{name:r.procInstName,body:r.procInstBody}),r.procInstName=r.procInstBody="",r.state=_.TEXT):(r.procInstBody+="?"+i,r.state=_.PROC_INST_BODY);continue;case _.OPEN_TAG:g(h,i)?r.tagName+=i:(C(r),">"===i?D(r):"/"===i?r.state=_.OPEN_TAG_SLASH:(f(i)||k(r,"Invalid character in tag name"),r.state=_.ATTRIB));continue;case _.OPEN_TAG_SLASH:">"===i?(D(r,!0),P(r)):(k(r,"Forward-slash in opening tag not followed by >"),r.state=_.ATTRIB);continue;case _.ATTRIB:if(f(i))continue;">"===i?D(r):"/"===i?r.state=_.OPEN_TAG_SLASH:g(l,i)?(r.attribName=i,r.attribValue="",r.state=_.ATTRIB_NAME):k(r,"Invalid attribute name");continue;case _.ATTRIB_NAME:"="===i?r.state=_.ATTRIB_VALUE:">"===i?(k(r,"Attribute without value"),r.attribValue=r.attribName,L(r),D(r)):f(i)?r.state=_.ATTRIB_NAME_SAW_WHITE:g(h,i)?r.attribName+=i:k(r,"Invalid attribute name");continue;case _.ATTRIB_NAME_SAW_WHITE:if("="===i)r.state=_.ATTRIB_VALUE;else {if(f(i))continue;k(r,"Attribute without value"),r.tag.attributes[r.attribName]="",r.attribValue="",A(r,"onattribute",{name:r.attribName,value:""}),r.attribName="",">"===i?D(r):g(l,i)?(r.attribName=i,r.state=_.ATTRIB_NAME):(k(r,"Invalid attribute name"),r.state=_.ATTRIB);}continue;case _.ATTRIB_VALUE:if(f(i))continue;m(i)?(r.q=i,r.state=_.ATTRIB_VALUE_QUOTED):(k(r,"Unquoted attribute value"),r.state=_.ATTRIB_VALUE_UNQUOTED,r.attribValue=i);continue;case _.ATTRIB_VALUE_QUOTED:if(i!==r.q){"&"===i?r.state=_.ATTRIB_VALUE_ENTITY_Q:r.attribValue+=i;continue}L(r),r.q="",r.state=_.ATTRIB_VALUE_CLOSED;continue;case _.ATTRIB_VALUE_CLOSED:f(i)?r.state=_.ATTRIB:">"===i?D(r):"/"===i?r.state=_.OPEN_TAG_SLASH:g(l,i)?(k(r,"No whitespace between attributes"),r.attribName=i,r.attribValue="",r.state=_.ATTRIB_NAME):k(r,"Invalid attribute name");continue;case _.ATTRIB_VALUE_UNQUOTED:if(!w(i)){"&"===i?r.state=_.ATTRIB_VALUE_ENTITY_U:r.attribValue+=i;continue}L(r),">"===i?D(r):r.state=_.ATTRIB;continue;case _.CLOSE_TAG:if(r.tagName)">"===i?P(r):g(h,i)?r.tagName+=i:r.script?(r.script+="</"+r.tagName,r.tagName="",r.state=_.SCRIPT):(f(i)||k(r,"Invalid tagname in closing tag"),r.state=_.CLOSE_TAG_SAW_WHITE);else {if(f(i))continue;y(l,i)?r.script?(r.script+="</"+i,r.state=_.SCRIPT):k(r,"Invalid tagname in closing tag."):r.tagName=i;}continue;case _.CLOSE_TAG_SAW_WHITE:if(f(i))continue;">"===i?P(r):k(r,"Invalid characters in closing tag");continue;case _.TEXT_ENTITY:case _.ATTRIB_VALUE_ENTITY_Q:case _.ATTRIB_VALUE_ENTITY_U:var c,u;switch(r.state){case _.TEXT_ENTITY:c=_.TEXT,u="textNode";break;case _.ATTRIB_VALUE_ENTITY_Q:c=_.ATTRIB_VALUE_QUOTED,u="attribValue";break;case _.ATTRIB_VALUE_ENTITY_U:c=_.ATTRIB_VALUE_UNQUOTED,u="attribValue";}";"===i?(r[u]+=F(r),r.entity="",r.state=c):g(r.entity.length?d:p,i)?r.entity+=i:(k(r,"Invalid character in entity name"),r[u]+="&"+r.entity+i,r.entity="",r.state=c);continue;default:throw new Error(r,"Unknown state: "+r.state)}return r.position>=r.bufferCheckPosition&&function(t){for(var r=Math.max(e.MAX_BUFFER_LENGTH,10),s=0,i=0,o=n.length;i<o;i++){var a=t[n[i]].length;if(a>r)switch(n[i]){case"textNode":S(t);break;case"cdata":A(t,"oncdata",t.cdata),t.cdata="";break;case"script":A(t,"onscript",t.script),t.script="";break;default:N(t,"Max buffer length exceeded: "+n[i]);}s=Math.max(s,a);}var c=e.MAX_BUFFER_LENGTH-s;t.bufferCheckPosition=c+t.position;}(r),r},resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){var e;S(e=this),""!==e.cdata&&(A(e,"oncdata",e.cdata),e.cdata=""),""!==e.script&&(A(e,"onscript",e.script),e.script="");}};try{t=r(2830).Stream;}catch(e){t=function(){};}var i=e.EVENTS.filter((function(e){return "error"!==e&&"end"!==e}));function o(e,r){if(!(this instanceof o))return new o(e,r);t.apply(this),this._parser=new s(e,r),this.writable=!0,this.readable=!0;var n=this;this._parser.onend=function(){n.emit("end");},this._parser.onerror=function(e){n.emit("error",e),n._parser.error=null;},this._decoder=null,i.forEach((function(e){Object.defineProperty(n,"on"+e,{get:function(){return n._parser["on"+e]},set:function(t){if(!t)return n.removeAllListeners(e),n._parser["on"+e]=t,t;n.on(e,t);},enumerable:!0,configurable:!1});}));}o.prototype=Object.create(t.prototype,{constructor:{value:o}}),o.prototype.write=function(e){if("function"==typeof Buffer&&"function"==typeof Buffer.isBuffer&&Buffer.isBuffer(e)){if(!this._decoder){var t=r(2553).s;this._decoder=new t("utf8");}e=this._decoder.write(e);}return this._parser.write(e.toString()),this.emit("data",e),!0},o.prototype.end=function(e){return e&&e.length&&this.write(e),this._parser.end(),!0},o.prototype.on=function(e,r){var n=this;return n._parser["on"+e]||-1===i.indexOf(e)||(n._parser["on"+e]=function(){var t=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);t.splice(0,0,e),n.emit.apply(n,t);}),t.prototype.on.call(n,e,r)};var a="http://www.w3.org/XML/1998/namespace",c="http://www.w3.org/2000/xmlns/",u={xml:a,xmlns:c},l=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,h=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,p=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,d=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function f(e){return " "===e||"\n"===e||"\r"===e||"\t"===e}function m(e){return '"'===e||"'"===e}function w(e){return ">"===e||f(e)}function g(e,t){return e.test(t)}function y(e,t){return !g(e,t)}var b,v,x,_=0;for(var E in e.STATE={BEGIN:_++,BEGIN_WHITESPACE:_++,TEXT:_++,TEXT_ENTITY:_++,OPEN_WAKA:_++,SGML_DECL:_++,SGML_DECL_QUOTED:_++,DOCTYPE:_++,DOCTYPE_QUOTED:_++,DOCTYPE_DTD:_++,DOCTYPE_DTD_QUOTED:_++,COMMENT_STARTING:_++,COMMENT:_++,COMMENT_ENDING:_++,COMMENT_ENDED:_++,CDATA:_++,CDATA_ENDING:_++,CDATA_ENDING_2:_++,PROC_INST:_++,PROC_INST_BODY:_++,PROC_INST_ENDING:_++,OPEN_TAG:_++,OPEN_TAG_SLASH:_++,ATTRIB:_++,ATTRIB_NAME:_++,ATTRIB_NAME_SAW_WHITE:_++,ATTRIB_VALUE:_++,ATTRIB_VALUE_QUOTED:_++,ATTRIB_VALUE_CLOSED:_++,ATTRIB_VALUE_UNQUOTED:_++,ATTRIB_VALUE_ENTITY_Q:_++,ATTRIB_VALUE_ENTITY_U:_++,CLOSE_TAG:_++,CLOSE_TAG_SAW_WHITE:_++,SCRIPT:_++,SCRIPT_ENDING:_++},e.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},e.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach((function(t){var r=e.ENTITIES[t],n="number"==typeof r?String.fromCharCode(r):r;e.ENTITIES[t]=n;})),e.STATE)e.STATE[e.STATE[E]]=E;function T(e,t,r){e[t]&&e[t](r);}function A(e,t,r){e.textNode&&S(e),T(e,t,r);}function S(e){e.textNode=I(e.opt,e.textNode),e.textNode&&T(e,"ontext",e.textNode),e.textNode="";}function I(e,t){return e.trim&&(t=t.trim()),e.normalize&&(t=t.replace(/\s+/g," ")),t}function N(e,t){return S(e),e.trackPosition&&(t+="\nLine: "+e.line+"\nColumn: "+e.column+"\nChar: "+e.c),t=new Error(t),e.error=t,T(e,"onerror",t),e}function R(e){return e.sawRoot&&!e.closedRoot&&k(e,"Unclosed root tag"),e.state!==_.BEGIN&&e.state!==_.BEGIN_WHITESPACE&&e.state!==_.TEXT&&N(e,"Unexpected end"),S(e),e.c="",e.closed=!0,T(e,"onend"),s.call(e,e.strict,e.opt),e}function k(e,t){if("object"!=typeof e||!(e instanceof s))throw new Error("bad call to strictFail");e.strict&&N(e,t);}function C(e){e.strict||(e.tagName=e.tagName[e.looseCase]());var t=e.tags[e.tags.length-1]||e,r=e.tag={name:e.tagName,attributes:{}};e.opt.xmlns&&(r.ns=t.ns),e.attribList.length=0,A(e,"onopentagstart",r);}function O(e,t){var r=e.indexOf(":")<0?["",e]:e.split(":"),n=r[0],s=r[1];return t&&"xmlns"===e&&(n="xmlns",s=""),{prefix:n,local:s}}function L(e){if(e.strict||(e.attribName=e.attribName[e.looseCase]()),-1!==e.attribList.indexOf(e.attribName)||e.tag.attributes.hasOwnProperty(e.attribName))e.attribName=e.attribValue="";else {if(e.opt.xmlns){var t=O(e.attribName,!0),r=t.prefix,n=t.local;if("xmlns"===r)if("xml"===n&&e.attribValue!==a)k(e,"xml: prefix must be bound to "+a+"\nActual: "+e.attribValue);else if("xmlns"===n&&e.attribValue!==c)k(e,"xmlns: prefix must be bound to "+c+"\nActual: "+e.attribValue);else {var s=e.tag,i=e.tags[e.tags.length-1]||e;s.ns===i.ns&&(s.ns=Object.create(i.ns)),s.ns[n]=e.attribValue;}e.attribList.push([e.attribName,e.attribValue]);}else e.tag.attributes[e.attribName]=e.attribValue,A(e,"onattribute",{name:e.attribName,value:e.attribValue});e.attribName=e.attribValue="";}}function D(e,t){if(e.opt.xmlns){var r=e.tag,n=O(e.tagName);r.prefix=n.prefix,r.local=n.local,r.uri=r.ns[n.prefix]||"",r.prefix&&!r.uri&&(k(e,"Unbound namespace prefix: "+JSON.stringify(e.tagName)),r.uri=n.prefix);var s=e.tags[e.tags.length-1]||e;r.ns&&s.ns!==r.ns&&Object.keys(r.ns).forEach((function(t){A(e,"onopennamespace",{prefix:t,uri:r.ns[t]});}));for(var i=0,o=e.attribList.length;i<o;i++){var a=e.attribList[i],c=a[0],u=a[1],l=O(c,!0),h=l.prefix,p=l.local,d=""===h?"":r.ns[h]||"",f={name:c,value:u,prefix:h,local:p,uri:d};h&&"xmlns"!==h&&!d&&(k(e,"Unbound namespace prefix: "+JSON.stringify(h)),f.uri=h),e.tag.attributes[c]=f,A(e,"onattribute",f);}e.attribList.length=0;}e.tag.isSelfClosing=!!t,e.sawRoot=!0,e.tags.push(e.tag),A(e,"onopentag",e.tag),t||(e.noscript||"script"!==e.tagName.toLowerCase()?e.state=_.TEXT:e.state=_.SCRIPT,e.tag=null,e.tagName=""),e.attribName=e.attribValue="",e.attribList.length=0;}function P(e){if(!e.tagName)return k(e,"Weird empty close tag."),e.textNode+="</>",void(e.state=_.TEXT);if(e.script){if("script"!==e.tagName)return e.script+="</"+e.tagName+">",e.tagName="",void(e.state=_.SCRIPT);A(e,"onscript",e.script),e.script="";}var t=e.tags.length,r=e.tagName;e.strict||(r=r[e.looseCase]());for(var n=r;t--&&e.tags[t].name!==n;)k(e,"Unexpected close tag");if(t<0)return k(e,"Unmatched closing tag: "+e.tagName),e.textNode+="</"+e.tagName+">",void(e.state=_.TEXT);e.tagName=r;for(var s=e.tags.length;s-- >t;){var i=e.tag=e.tags.pop();e.tagName=e.tag.name,A(e,"onclosetag",e.tagName);var o={};for(var a in i.ns)o[a]=i.ns[a];var c=e.tags[e.tags.length-1]||e;e.opt.xmlns&&i.ns!==c.ns&&Object.keys(i.ns).forEach((function(t){var r=i.ns[t];A(e,"onclosenamespace",{prefix:t,uri:r});}));}0===t&&(e.closedRoot=!0),e.tagName=e.attribValue=e.attribName="",e.attribList.length=0,e.state=_.TEXT;}function F(e){var t,r=e.entity,n=r.toLowerCase(),s="";return e.ENTITIES[r]?e.ENTITIES[r]:e.ENTITIES[n]?e.ENTITIES[n]:("#"===(r=n).charAt(0)&&("x"===r.charAt(1)?(r=r.slice(2),s=(t=parseInt(r,16)).toString(16)):(r=r.slice(1),s=(t=parseInt(r,10)).toString(10))),r=r.replace(/^0+/,""),isNaN(t)||s.toLowerCase()!==r?(k(e,"Invalid character entity"),"&"+e.entity+";"):String.fromCodePoint(t))}function B(e,t){"<"===t?(e.state=_.OPEN_WAKA,e.startTagPosition=e.position):f(t)||(k(e,"Non-whitespace before first tag."),e.textNode=t,e.state=_.TEXT);}function M(e,t){var r="";return t<e.length&&(r=e.charAt(t)),r}_=e.STATE,String.fromCodePoint||(b=String.fromCharCode,v=Math.floor,x=function(){var e,t,r=16384,n=[],s=-1,i=arguments.length;if(!i)return "";for(var o="";++s<i;){var a=Number(arguments[s]);if(!isFinite(a)||a<0||a>1114111||v(a)!==a)throw RangeError("Invalid code point: "+a);a<=65535?n.push(a):(e=55296+((a-=65536)>>10),t=a%1024+56320,n.push(e,t)),(s+1===i||n.length>r)&&(o+=b.apply(null,n),n.length=0);}return o},Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:x,configurable:!0,writable:!0}):String.fromCodePoint=x);}(t);},4889:function(e,t,r){var n=r(4155);!function(e,t){if(!e.setImmediate){var r,s,i,o,a,c=1,u={},l=!1,h=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?r=function(e){n.nextTick((function(){f(e);}));}:function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1;},e.postMessage("","*"),e.onmessage=r,t}}()?(o="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&f(+t.data.slice(o.length));},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(o+t,"*");}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data);},r=function(e){i.port2.postMessage(e);}):h&&"onreadystatechange"in h.createElement("script")?(s=h.documentElement,r=function(e){var t=h.createElement("script");t.onreadystatechange=function(){f(e),t.onreadystatechange=null,s.removeChild(t),t=null;},s.appendChild(t);}):r=function(e){setTimeout(f,0,e);},p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return u[c]=s,r(c),c++},p.clearImmediate=d;}function d(e){delete u[e];}function f(e){if(l)setTimeout(f,0,e);else {var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(void 0,r);}}(t);}finally{d(e),l=!1;}}}}}("undefined"==typeof self?void 0===r.g?this:r.g:self);},2830:(e,t,r)=>{e.exports=s;var n=r(7187).EventEmitter;function s(){n.call(this);}r(5717)(s,n),s.Readable=r(6577),s.Writable=r(323),s.Duplex=r(8656),s.Transform=r(4473),s.PassThrough=r(2366),s.finished=r(1086),s.pipeline=r(6472),s.Stream=s,s.prototype.pipe=function(e,t){var r=this;function s(t){e.writable&&!1===e.write(t)&&r.pause&&r.pause();}function i(){r.readable&&r.resume&&r.resume();}r.on("data",s),e.on("drain",i),e._isStdio||t&&!1===t.end||(r.on("end",a),r.on("close",c));var o=!1;function a(){o||(o=!0,e.end());}function c(){o||(o=!0,"function"==typeof e.destroy&&e.destroy());}function u(e){if(l(),0===n.listenerCount(this,"error"))throw e}function l(){r.removeListener("data",s),e.removeListener("drain",i),r.removeListener("end",a),r.removeListener("close",c),r.removeListener("error",u),e.removeListener("error",u),r.removeListener("end",l),r.removeListener("close",l),e.removeListener("close",l);}return r.on("error",u),e.on("error",u),r.on("end",l),r.on("close",l),e.on("close",l),e.emit("pipe",r),e};},8106:e=>{var t={};function r(e,r,n){n||(n=Error);var s=function(e){var t,n;function s(t,n,s){return e.call(this,function(e,t,n){return "string"==typeof r?r:r(e,t,n)}(t,n,s))||this}return n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,s}(n);s.prototype.name=n.name,s.prototype.code=e,t[e]=s;}function n(e,t){if(Array.isArray(e)){var r=e.length;return e=e.map((function(e){return String(e)})),r>2?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return "of ".concat(t," ").concat(String(e))}r("ERR_INVALID_OPT_VALUE",(function(e,t){return 'The value "'+t+'" is invalid for option "'+e+'"'}),TypeError),r("ERR_INVALID_ARG_TYPE",(function(e,t,r){var s,i,o,a,c;if("string"==typeof t&&(i="not ",t.substr(0,i.length)===i)?(s="must not be",t=t.replace(/^not /,"")):s="must be",function(e,t,r){return (void 0===r||r>e.length)&&(r=e.length),e.substring(r-t.length,r)===t}(e," argument"))o="The ".concat(e," ").concat(s," ").concat(n(t,"type"));else {var u=("number"!=typeof c&&(c=0),c+".".length>(a=e).length||-1===a.indexOf(".",c)?"argument":"property");o='The "'.concat(e,'" ').concat(u," ").concat(s," ").concat(n(t,"type"));}return o+". Received type ".concat(typeof r)}),TypeError),r("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),r("ERR_METHOD_NOT_IMPLEMENTED",(function(e){return "The "+e+" method is not implemented"})),r("ERR_STREAM_PREMATURE_CLOSE","Premature close"),r("ERR_STREAM_DESTROYED",(function(e){return "Cannot call "+e+" after a stream was destroyed"})),r("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),r("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),r("ERR_STREAM_WRITE_AFTER_END","write after end"),r("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),r("ERR_UNKNOWN_ENCODING",(function(e){return "Unknown encoding: "+e}),TypeError),r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),e.exports.q=t;},8656:(e,t,r)=>{var n=r(4155),s=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};e.exports=l;var i=r(6577),o=r(323);r(5717)(l,i);for(var a=s(o.prototype),c=0;c<a.length;c++){var u=a[c];l.prototype[u]||(l.prototype[u]=o.prototype[u]);}function l(e){if(!(this instanceof l))return new l(e);i.call(this,e),o.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",h)));}function h(){this._writableState.ended||n.nextTick(p,this);}function p(e){e.end();}Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(l.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(l.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e);}});},2366:(e,t,r)=>{e.exports=s;var n=r(4473);function s(e){if(!(this instanceof s))return new s(e);n.call(this,e);}r(5717)(s,n),s.prototype._transform=function(e,t,r){r(null,e);};},6577:(e,t,r)=>{var n,s=r(4155);e.exports=A,A.ReadableState=T,r(7187).EventEmitter;var i,o=function(e,t){return e.listeners(t).length},a=r(3194),c=r(8764).Buffer,u=r.g.Uint8Array||function(){},l=r(5575);i=l&&l.debuglog?l.debuglog("stream"):function(){};var h,p,d,f=r(9686),m=r(1029),w=r(94).getHighWaterMark,g=r(8106).q,y=g.ERR_INVALID_ARG_TYPE,b=g.ERR_STREAM_PUSH_AFTER_EOF,v=g.ERR_METHOD_NOT_IMPLEMENTED,x=g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;r(5717)(A,a);var _=m.errorOrDestroy,E=["error","close","destroy","pause","resume"];function T(e,t,s){n=n||r(8656),e=e||{},"boolean"!=typeof s&&(s=t instanceof n),this.objectMode=!!e.objectMode,s&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=w(this,e,"readableHighWaterMark",s),this.buffer=new f,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(h||(h=r(2553).s),this.decoder=new h(e.encoding),this.encoding=e.encoding);}function A(e){if(n=n||r(8656),!(this instanceof A))return new A(e);var t=this instanceof n;this._readableState=new T(e,this,t),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),a.call(this);}function S(e,t,r,n,s){i("readableAddChunk",t);var o,a=e._readableState;if(null===t)a.reading=!1,function(e,t){if(i("onEofChunk"),!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length);}t.ended=!0,t.sync?k(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,C(e)));}}(e,a);else if(s||(o=function(e,t){var r,n;return n=t,c.isBuffer(n)||n instanceof u||"string"==typeof t||void 0===t||e.objectMode||(r=new y("chunk",["string","Buffer","Uint8Array"],t)),r}(a,t)),o)_(e,o);else if(a.objectMode||t&&t.length>0)if("string"==typeof t||a.objectMode||Object.getPrototypeOf(t)===c.prototype||(t=function(e){return c.from(e)}(t)),n)a.endEmitted?_(e,new x):I(e,a,t,!0);else if(a.ended)_(e,new b);else {if(a.destroyed)return !1;a.reading=!1,a.decoder&&!r?(t=a.decoder.write(t),a.objectMode||0!==t.length?I(e,a,t,!1):O(e,a)):I(e,a,t,!1);}else n||(a.reading=!1,O(e,a));return !a.ended&&(a.length<a.highWaterMark||0===a.length)}function I(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",r)):(t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&k(e)),O(e,t);}Object.defineProperty(A.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e);}}),A.prototype.destroy=m.destroy,A.prototype._undestroy=m.undestroy,A.prototype._destroy=function(e,t){t(e);},A.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&((t=t||n.defaultEncoding)!==n.encoding&&(e=c.from(e,t),t=""),r=!0),S(this,e,t,!1,r)},A.prototype.unshift=function(e){return S(this,e,null,!0,!1)},A.prototype.isPaused=function(){return !1===this._readableState.flowing},A.prototype.setEncoding=function(e){h||(h=r(2553).s);var t=new h(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var n=this._readableState.buffer.head,s="";null!==n;)s+=t.write(n.data),n=n.next;return this._readableState.buffer.clear(),""!==s&&this._readableState.buffer.push(s),this._readableState.length=s.length,this};var N=1073741824;function R(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=N?e=N:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function k(e){var t=e._readableState;i("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(i("emitReadable",t.flowing),t.emittedReadable=!0,s.nextTick(C,e));}function C(e){var t=e._readableState;i("emitReadable_",t.destroyed,t.length,t.ended),t.destroyed||!t.length&&!t.ended||(e.emit("readable"),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,B(e);}function O(e,t){t.readingMore||(t.readingMore=!0,s.nextTick(L,e,t));}function L(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var r=t.length;if(i("maybeReadMore read 0"),e.read(0),r===t.length)break}t.readingMore=!1;}function D(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount("data")>0&&e.resume();}function P(e){i("readable nexttick read 0"),e.read(0);}function F(e,t){i("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),B(e),t.flowing&&!t.reading&&e.read(0);}function B(e){var t=e._readableState;for(i("flow",t.flowing);t.flowing&&null!==e.read(););}function M(e,t){return 0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):r=t.buffer.consume(e,t.decoder),r);var r;}function U(e){var t=e._readableState;i("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,s.nextTick(H,t,e));}function H(e,t){if(i("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){var r=t._writableState;(!r||r.autoDestroy&&r.finished)&&t.destroy();}}function j(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}A.prototype.read=function(e){i("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&((0!==t.highWaterMark?t.length>=t.highWaterMark:t.length>0)||t.ended))return i("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?U(this):k(this),null;if(0===(e=R(e,t))&&t.ended)return 0===t.length&&U(this),null;var n,s=t.needReadable;return i("need readable",s),(0===t.length||t.length-e<t.highWaterMark)&&i("length less than watermark",s=!0),t.ended||t.reading?i("reading or ended",s=!1):s&&(i("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=R(r,t))),null===(n=e>0?M(e,t):null)?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.awaitDrain=0),0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&U(this)),null!==n&&this.emit("data",n),n},A.prototype._read=function(e){_(this,new v("_read()"));},A.prototype.pipe=function(e,t){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e);}n.pipesCount+=1,i("pipe count=%d opts=%j",n.pipesCount,t);var a=t&&!1===t.end||e===s.stdout||e===s.stderr?m:c;function c(){i("onend"),e.end();}n.endEmitted?s.nextTick(a):r.once("end",a),e.on("unpipe",(function t(s,o){i("onunpipe"),s===r&&o&&!1===o.hasUnpiped&&(o.hasUnpiped=!0,i("cleanup"),e.removeListener("close",d),e.removeListener("finish",f),e.removeListener("drain",u),e.removeListener("error",p),e.removeListener("unpipe",t),r.removeListener("end",c),r.removeListener("end",m),r.removeListener("data",h),l=!0,!n.awaitDrain||e._writableState&&!e._writableState.needDrain||u());}));var u=function(e){return function(){var t=e._readableState;i("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&o(e,"data")&&(t.flowing=!0,B(e));}}(r);e.on("drain",u);var l=!1;function h(t){i("ondata");var s=e.write(t);i("dest.write",s),!1===s&&((1===n.pipesCount&&n.pipes===e||n.pipesCount>1&&-1!==j(n.pipes,e))&&!l&&(i("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause());}function p(t){i("onerror",t),m(),e.removeListener("error",p),0===o(e,"error")&&_(e,t);}function d(){e.removeListener("finish",f),m();}function f(){i("onfinish"),e.removeListener("close",d),m();}function m(){i("unpipe"),r.unpipe(e);}return r.on("data",h),function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events.error?Array.isArray(e._events.error)?e._events.error.unshift(r):e._events.error=[r,e._events.error]:e.on(t,r);}(e,"error",p),e.once("close",d),e.once("finish",f),e.emit("pipe",r),n.flowing||(i("pipe resume"),r.resume()),e},A.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r)),this;if(!e){var n=t.pipes,s=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var i=0;i<s;i++)n[i].emit("unpipe",this,{hasUnpiped:!1});return this}var o=j(t.pipes,e);return -1===o||(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r)),this},A.prototype.on=function(e,t){var r=a.prototype.on.call(this,e,t),n=this._readableState;return "data"===e?(n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"===e&&(n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,i("on readable",n.length,n.reading),n.length?k(this):n.reading||s.nextTick(P,this))),r},A.prototype.addListener=A.prototype.on,A.prototype.removeListener=function(e,t){var r=a.prototype.removeListener.call(this,e,t);return "readable"===e&&s.nextTick(D,this),r},A.prototype.removeAllListeners=function(e){var t=a.prototype.removeAllListeners.apply(this,arguments);return "readable"!==e&&void 0!==e||s.nextTick(D,this),t},A.prototype.resume=function(){var e=this._readableState;return e.flowing||(i("resume"),e.flowing=!e.readableListening,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,s.nextTick(F,e,t));}(this,e)),e.paused=!1,this},A.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},A.prototype.wrap=function(e){var t=this,r=this._readableState,n=!1;for(var s in e.on("end",(function(){if(i("wrapped end"),r.decoder&&!r.ended){var e=r.decoder.end();e&&e.length&&t.push(e);}t.push(null);})),e.on("data",(function(s){i("wrapped data"),r.decoder&&(s=r.decoder.write(s)),r.objectMode&&null==s||(r.objectMode||s&&s.length)&&(t.push(s)||(n=!0,e.pause()));})),e)void 0===this[s]&&"function"==typeof e[s]&&(this[s]=function(t){return function(){return e[t].apply(e,arguments)}}(s));for(var o=0;o<E.length;o++)e.on(E[o],this.emit.bind(this,E[o]));return this._read=function(t){i("wrapped _read",t),n&&(n=!1,e.resume());},this},"function"==typeof Symbol&&(A.prototype[Symbol.asyncIterator]=function(){return void 0===p&&(p=r(828)),p(this)}),Object.defineProperty(A.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(A.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(A.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e);}}),A._fromList=M,Object.defineProperty(A.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(A.from=function(e,t){return void 0===d&&(d=r(1265)),d(A,e,t)});},4473:(e,t,r)=>{e.exports=l;var n=r(8106).q,s=n.ERR_METHOD_NOT_IMPLEMENTED,i=n.ERR_MULTIPLE_CALLBACK,o=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,a=n.ERR_TRANSFORM_WITH_LENGTH_0,c=r(8656);function u(e,t){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new i);r.writechunk=null,r.writecb=null,null!=t&&this.push(t),n(e);var s=this._readableState;s.reading=!1,(s.needReadable||s.length<s.highWaterMark)&&this._read(s.highWaterMark);}function l(e){if(!(this instanceof l))return new l(e);c.call(this,e),this._transformState={afterTransform:u.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",h);}function h(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?p(this,null,null):this._flush((function(t,r){p(e,t,r);}));}function p(e,t,r){if(t)return e.emit("error",t);if(null!=r&&e.push(r),e._writableState.length)throw new a;if(e._transformState.transforming)throw new o;return e.push(null)}r(5717)(l,c),l.prototype.push=function(e,t){return this._transformState.needTransform=!1,c.prototype.push.call(this,e,t)},l.prototype._transform=function(e,t,r){r(new s("_transform()"));},l.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var s=this._readableState;(n.needTransform||s.needReadable||s.length<s.highWaterMark)&&this._read(s.highWaterMark);}},l.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform));},l.prototype._destroy=function(e,t){c.prototype._destroy.call(this,e,(function(e){t(e);}));};},323:(e,t,r)=>{var n,s=r(4155);function i(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,r){var n=e.entry;for(e.entry=null;n;){var s=n.callback;t.pendingcb--,s(undefined),n=n.next;}t.corkedRequestsFree.next=e;}(t,e);};}e.exports=A,A.WritableState=T;var o,a={deprecate:r(4927)},c=r(3194),u=r(8764).Buffer,l=r.g.Uint8Array||function(){},h=r(1029),p=r(94).getHighWaterMark,d=r(8106).q,f=d.ERR_INVALID_ARG_TYPE,m=d.ERR_METHOD_NOT_IMPLEMENTED,w=d.ERR_MULTIPLE_CALLBACK,g=d.ERR_STREAM_CANNOT_PIPE,y=d.ERR_STREAM_DESTROYED,b=d.ERR_STREAM_NULL_VALUES,v=d.ERR_STREAM_WRITE_AFTER_END,x=d.ERR_UNKNOWN_ENCODING,_=h.errorOrDestroy;function E(){}function T(e,t,o){n=n||r(8656),e=e||{},"boolean"!=typeof o&&(o=t instanceof n),this.objectMode=!!e.objectMode,o&&(this.objectMode=this.objectMode||!!e.writableObjectMode),this.highWaterMark=p(this,e,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===e.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if("function"!=typeof i)throw new w;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0;}(r),t)!function(e,t,r,n,i){--t.pendingcb,r?(s.nextTick(i,n),s.nextTick(C,e,t),e._writableState.errorEmitted=!0,_(e,n)):(i(n),e._writableState.errorEmitted=!0,_(e,n),C(e,t));}(e,r,n,t,i);else {var o=R(r)||e.destroyed;o||r.corked||r.bufferProcessing||!r.bufferedRequest||N(e,r),n?s.nextTick(I,e,r,o,i):I(e,r,o,i);}}(t,e);},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new i(this);}function A(e){var t=this instanceof(n=n||r(8656));if(!t&&!o.call(A,this))return new A(e);this._writableState=new T(e,this,t),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),c.call(this);}function S(e,t,r,n,s,i,o){t.writelen=n,t.writecb=o,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new y("write")):r?e._writev(s,t.onwrite):e._write(s,i,t.onwrite),t.sync=!1;}function I(e,t,r,n){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"));}(e,t),t.pendingcb--,n(),C(e,t);}function N(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,s=new Array(n),o=t.corkedRequestsFree;o.entry=r;for(var a=0,c=!0;r;)s[a]=r,r.isBuf||(c=!1),r=r.next,a+=1;s.allBuffers=c,S(e,t,!0,t.length,s,"",o.finish),t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new i(t),t.bufferedRequestCount=0;}else {for(;r;){var u=r.chunk,l=r.encoding,h=r.callback;if(S(e,t,!1,t.objectMode?1:u.length,u,l,h),r=r.next,t.bufferedRequestCount--,t.writing)break}null===r&&(t.lastBufferedRequest=null);}t.bufferedRequest=r,t.bufferProcessing=!1;}function R(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function k(e,t){e._final((function(r){t.pendingcb--,r&&_(e,r),t.prefinished=!0,e.emit("prefinish"),C(e,t);}));}function C(e,t){var r=R(t);if(r&&(function(e,t){t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,s.nextTick(k,e,t)));}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){var n=e._readableState;(!n||n.autoDestroy&&n.endEmitted)&&e.destroy();}return r}r(5717)(A,c),T.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(T.prototype,"buffer",{get:a.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")});}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(o=Function.prototype[Symbol.hasInstance],Object.defineProperty(A,Symbol.hasInstance,{value:function(e){return !!o.call(this,e)||this===A&&e&&e._writableState instanceof T}})):o=function(e){return e instanceof this},A.prototype.pipe=function(){_(this,new g);},A.prototype.write=function(e,t,r){var n,i=this._writableState,o=!1,a=!i.objectMode&&(n=e,u.isBuffer(n)||n instanceof l);return a&&!u.isBuffer(e)&&(e=function(e){return u.from(e)}(e)),"function"==typeof t&&(r=t,t=null),a?t="buffer":t||(t=i.defaultEncoding),"function"!=typeof r&&(r=E),i.ending?function(e,t){var r=new v;_(e,r),s.nextTick(t,r);}(this,r):(a||function(e,t,r,n){var i;return null===r?i=new b:"string"==typeof r||t.objectMode||(i=new f("chunk",["string","Buffer"],r)),!i||(_(e,i),s.nextTick(n,i),!1)}(this,i,e,r))&&(i.pendingcb++,o=function(e,t,r,n,s,i){if(!r){var o=function(e,t,r){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=u.from(t,r)),t}(t,n,s);n!==o&&(r=!0,s="buffer",n=o);}var a=t.objectMode?1:n.length;t.length+=a;var c=t.length<t.highWaterMark;if(c||(t.needDrain=!0),t.writing||t.corked){var l=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:s,isBuf:r,callback:i,next:null},l?l.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1;}else S(e,t,!1,a,n,s,i);return c}(this,i,a,e,t,r)),o},A.prototype.cork=function(){this._writableState.corked++;},A.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||N(this,e));},A.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new x(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(A.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(A.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),A.prototype._write=function(e,t,r){r(new m("_write()"));},A.prototype._writev=null,A.prototype.end=function(e,t,r){var n=this._writableState;return "function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||function(e,t,r){t.ending=!0,C(e,t),r&&(t.finished?s.nextTick(r):e.once("finish",r)),t.ended=!0,e.writable=!1;}(this,n,r),this},Object.defineProperty(A.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(A.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e);}}),A.prototype.destroy=h.destroy,A.prototype._undestroy=h.undestroy,A.prototype._destroy=function(e,t){t(e);};},828:(e,t,r)=>{var n,s=r(4155);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=r(1086),a=Symbol("lastResolve"),c=Symbol("lastReject"),u=Symbol("error"),l=Symbol("ended"),h=Symbol("lastPromise"),p=Symbol("handlePromise"),d=Symbol("stream");function f(e,t){return {value:e,done:t}}function m(e){var t=e[a];if(null!==t){var r=e[d].read();null!==r&&(e[h]=null,e[a]=null,e[c]=null,t(f(r,!1)));}}function w(e){s.nextTick(m,e);}var g=Object.getPrototypeOf((function(){})),y=Object.setPrototypeOf((i(n={get stream(){return this[d]},next:function(){var e=this,t=this[u];if(null!==t)return Promise.reject(t);if(this[l])return Promise.resolve(f(void 0,!0));if(this[d].destroyed)return new Promise((function(t,r){s.nextTick((function(){e[u]?r(e[u]):t(f(void 0,!0));}));}));var r,n=this[h];if(n)r=new Promise(function(e,t){return function(r,n){e.then((function(){t[l]?r(f(void 0,!0)):t[p](r,n);}),n);}}(n,this));else {var i=this[d].read();if(null!==i)return Promise.resolve(f(i,!1));r=new Promise(this[p]);}return this[h]=r,r}},Symbol.asyncIterator,(function(){return this})),i(n,"return",(function(){var e=this;return new Promise((function(t,r){e[d].destroy(null,(function(e){e?r(e):t(f(void 0,!0));}));}))})),n),g);e.exports=function(e){var t,r=Object.create(y,(i(t={},d,{value:e,writable:!0}),i(t,a,{value:null,writable:!0}),i(t,c,{value:null,writable:!0}),i(t,u,{value:null,writable:!0}),i(t,l,{value:e._readableState.endEmitted,writable:!0}),i(t,p,{value:function(e,t){var n=r[d].read();n?(r[h]=null,r[a]=null,r[c]=null,e(f(n,!1))):(r[a]=e,r[c]=t);},writable:!0}),t));return r[h]=null,o(e,(function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=r[c];return null!==t&&(r[h]=null,r[a]=null,r[c]=null,t(e)),void(r[u]=e)}var n=r[a];null!==n&&(r[h]=null,r[a]=null,r[c]=null,n(f(void 0,!0))),r[l]=!0;})),e.on("readable",w.bind(null,r)),r};},9686:(e,t,r)=>{function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n);}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}var o=r(8764).Buffer,a=r(5575).inspect,c=a&&a.custom||"inspect";e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0;}var t,r;return t=e,r=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length;}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length;}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0;}},{key:"join",value:function(e){if(0===this.length)return "";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r}},{key:"concat",value:function(e){if(0===this.length)return o.alloc(0);for(var t,r,n,s=o.allocUnsafe(e>>>0),i=this.head,a=0;i;)t=i.data,r=s,n=a,o.prototype.copy.call(t,r,n),a+=i.data.length,i=i.next;return s}},{key:"consume",value:function(e,t){var r;return e<this.head.data.length?(r=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):r=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,r=1,n=t.data;for(e-=n.length;t=t.next;){var s=t.data,i=e>s.length?s.length:e;if(i===s.length?n+=s:n+=s.slice(0,e),0==(e-=i)){i===s.length?(++r,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=s.slice(i));break}++r;}return this.length-=r,n}},{key:"_getBuffer",value:function(e){var t=o.allocUnsafe(e),r=this.head,n=1;for(r.data.copy(t),e-=r.data.length;r=r.next;){var s=r.data,i=e>s.length?s.length:e;if(s.copy(t,t.length-e,0,i),0==(e-=i)){i===s.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=s.slice(i));break}++n;}return this.length-=n,t}},{key:c,value:function(e,t){return a(this,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}({},t,{depth:0,customInspect:!1}))}}],r&&i(t.prototype,r),e}();},1029:(e,t,r)=>{var n=r(4155);function s(e,t){o(e,t),i(e);}function i(e){e._writableState&&!e._writableState.emitClose||e._readableState&&!e._readableState.emitClose||e.emit("close");}function o(e,t){e.emit("error",t);}e.exports={destroy:function(e,t){var r=this,a=this._readableState&&this._readableState.destroyed,c=this._writableState&&this._writableState.destroyed;return a||c?(t?t(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,n.nextTick(o,this,e)):n.nextTick(o,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,(function(e){!t&&e?r._writableState?r._writableState.errorEmitted?n.nextTick(i,r):(r._writableState.errorEmitted=!0,n.nextTick(s,r,e)):n.nextTick(s,r,e):t?(n.nextTick(i,r),t(e)):n.nextTick(i,r);})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1);},errorOrDestroy:function(e,t){var r=e._readableState,n=e._writableState;r&&r.autoDestroy||n&&n.autoDestroy?e.destroy(t):e.emit("error",t);}};},1086:(e,t,r)=>{var n=r(8106).q.ERR_STREAM_PREMATURE_CLOSE;function s(){}e.exports=function e(t,r,i){if("function"==typeof r)return e(t,null,r);r||(r={}),i=function(e){var t=!1;return function(){if(!t){t=!0;for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];e.apply(this,n);}}}(i||s);var o=r.readable||!1!==r.readable&&t.readable,a=r.writable||!1!==r.writable&&t.writable,c=function(){t.writable||l();},u=t._writableState&&t._writableState.finished,l=function(){a=!1,u=!0,o||i.call(t);},h=t._readableState&&t._readableState.endEmitted,p=function(){o=!1,h=!0,a||i.call(t);},d=function(e){i.call(t,e);},f=function(){var e;return o&&!h?(t._readableState&&t._readableState.ended||(e=new n),i.call(t,e)):a&&!u?(t._writableState&&t._writableState.ended||(e=new n),i.call(t,e)):void 0},m=function(){t.req.on("finish",l);};return function(e){return e.setHeader&&"function"==typeof e.abort}(t)?(t.on("complete",l),t.on("abort",f),t.req?m():t.on("request",m)):a&&!t._writableState&&(t.on("end",c),t.on("close",c)),t.on("end",p),t.on("finish",l),!1!==r.error&&t.on("error",d),t.on("close",f),function(){t.removeListener("complete",l),t.removeListener("abort",f),t.removeListener("request",m),t.req&&t.req.removeListener("finish",l),t.removeListener("end",c),t.removeListener("close",c),t.removeListener("finish",l),t.removeListener("end",p),t.removeListener("error",d),t.removeListener("close",f);}};},1265:e=>{e.exports=function(){throw new Error("Readable.from is not available in the browser")};},6472:(e,t,r)=>{var n,s=r(8106).q,i=s.ERR_MISSING_ARGS,o=s.ERR_STREAM_DESTROYED;function a(e){if(e)throw e}function c(e,t,s,i){i=function(e){var t=!1;return function(){t||(t=!0,e.apply(void 0,arguments));}}(i);var a=!1;e.on("close",(function(){a=!0;})),void 0===n&&(n=r(1086)),n(e,{readable:t,writable:s},(function(e){if(e)return i(e);a=!0,i();}));var c=!1;return function(t){if(!a&&!c)return c=!0,function(e){return e.setHeader&&"function"==typeof e.abort}(e)?e.abort():"function"==typeof e.destroy?e.destroy():void i(t||new o("pipe"))}}function u(e){e();}function l(e,t){return e.pipe(t)}function h(e){return e.length?"function"!=typeof e[e.length-1]?a:e.pop():a}e.exports=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,s=h(t);if(Array.isArray(t[0])&&(t=t[0]),t.length<2)throw new i("streams");var o=t.map((function(e,r){var i=r<t.length-1;return c(e,i,r>0,(function(e){n||(n=e),e&&o.forEach(u),i||(o.forEach(u),s(n));}))}));return t.reduce(l)};},94:(e,t,r)=>{var n=r(8106).q.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,r,s){var i=function(e,t,r){return null!=e.highWaterMark?e.highWaterMark:t?e[r]:null}(t,s,r);if(null!=i){if(!isFinite(i)||Math.floor(i)!==i||i<0)throw new n(s?r:"highWaterMark",i);return Math.floor(i)}return e.objectMode?16:16384}};},3194:(e,t,r)=>{e.exports=r(7187).EventEmitter;},2553:(e,t,r)=>{var n=r(9509).Buffer,s=n.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return !0;default:return !1}};function i(e){var t;switch(this.encoding=function(e){var t=function(e){if(!e)return "utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return "utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return "utf16le";case"latin1":case"binary":return "latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0;}}(e);if("string"!=typeof t&&(n.isEncoding===s||!s(e)))throw new Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=c,this.end=u,t=4;break;case"utf8":this.fillLast=a,t=4;break;case"base64":this.text=l,this.end=h,t=3;break;default:return this.write=p,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(t);}function o(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function a(e){var t=this.lastTotal-this.lastNeed,r=function(e,t,r){if(128!=(192&t[0]))return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�"}}(this,e);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function c(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function u(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function l(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function h(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function p(e){return e.toString(this.encoding)}function d(e){return e&&e.length?this.write(e):""}t.s=i,i.prototype.write=function(e){if(0===e.length)return "";var t,r;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return "";r=this.lastNeed,this.lastNeed=0;}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},i.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},i.prototype.text=function(e,t){var r=function(e,t,r){var n=t.length-1;if(n<r)return 0;var s=o(t[n]);return s>=0?(s>0&&(e.lastNeed=s-1),s):--n<r||-2===s?0:(s=o(t[n]))>=0?(s>0&&(e.lastNeed=s-2),s):--n<r||-2===s?0:(s=o(t[n]))>=0?(s>0&&(2===s?s=0:e.lastNeed=s-3),s):0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)},i.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length;};},5457:(e,t,r)=>{r.d(t,{uw:()=>o,kt:()=>u,fF:()=>a,vw:()=>s,rq:()=>n,Pl:()=>c,EL:()=>l,jR:()=>i});const n=e=>Math.floor(e/25.4*72*20),s=e=>Math.floor(72*e*20),i=(e=0)=>{let t=e;return ()=>++t},o=()=>i(),a=()=>i(1),c=()=>i(),u=()=>i(),l=()=>((e=21)=>{let t="",r=e;for(;r--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return t})().toLowerCase();},5575:(e,t,r)=>{r.r(t),r.d(t,{abstractNumUniqueNumericIdGen:()=>n.uw,bookmarkUniqueNumericIdGen:()=>n.kt,concreteNumUniqueNumericIdGen:()=>n.fF,convertInchesToTwip:()=>n.vw,convertMillimetersToTwip:()=>n.rq,dateTimeValue:()=>s.sF,decimalNumber:()=>s.vH,docPropertiesUniqueNumericIdGen:()=>n.Pl,eighthPointMeasureValue:()=>s.LV,hexColorValue:()=>s.dg,hpsMeasureValue:()=>s.KR,longHexNumber:()=>s.mA,measurementOrPercentValue:()=>s.aB,percentageValue:()=>s.wp,pointMeasureValue:()=>s.gg,positiveUniversalMeasureValue:()=>s._p,shortHexNumber:()=>s.G0,signedHpsMeasureValue:()=>s.Rg,signedTwipsMeasureValue:()=>s.xb,twipsMeasureValue:()=>s.Jd,uCharHexNumber:()=>s.xD,uniqueId:()=>n.EL,uniqueNumericIdCreator:()=>n.jR,universalMeasureValue:()=>s.KC,unsignedDecimalNumber:()=>s.f$});var n=r(5457),s=r(6595);},6595:(e,t,r)=>{r.d(t,{G0:()=>a,Jd:()=>m,KC:()=>u,KR:()=>d,LV:()=>y,Rg:()=>f,_p:()=>l,aB:()=>g,dg:()=>h,f$:()=>s,gg:()=>b,mA:()=>o,sF:()=>v,vH:()=>n,wp:()=>w,xD:()=>c,xb:()=>p});const n=e=>{if(isNaN(e))throw new Error(`Invalid value '${e}' specified. Must be an integer.`);return Math.floor(e)},s=e=>{const t=n(e);if(t<0)throw new Error(`Invalid value '${e}' specified. Must be a positive integer.`);return t},i=(e,t)=>{const r=2*t;if(e.length!==r||isNaN(Number(`0x${e}`)))throw new Error(`Invalid hex value '${e}'. Expected ${r} digit hex value`);return e},o=e=>i(e,4),a=e=>i(e,2),c=e=>i(e,1),u=e=>{const t=e.slice(-2),r=e.substring(0,e.length-2);return `${Number(r)}${t}`},l=e=>{const t=u(e);if(parseFloat(t)<0)throw new Error(`Invalid value '${t}' specified. Expected a positive number.`);return t},h=e=>{if("auto"===e)return e;const t="#"===e.charAt(0)?e.substring(1):e;return i(t,3)},p=e=>"string"==typeof e?u(e):n(e),d=e=>"string"==typeof e?l(e):s(e),f=e=>"string"==typeof e?u(e):n(e),m=e=>"string"==typeof e?l(e):s(e),w=e=>{const t=e.substring(0,e.length-1);return `${Number(t)}%`},g=e=>"number"==typeof e?n(e):"%"===e.slice(-1)?w(e):u(e),y=s,b=s,v=e=>e.toISOString();},4927:(e,t,r)=>{function n(e){try{if(!r.g.localStorage)return !1}catch(e){return !1}var t=r.g.localStorage[e];return null!=t&&"true"===String(t).toLowerCase()}e.exports=function(e,t){if(n("noDeprecation"))return e;var r=!1;return function(){if(!r){if(n("throwDeprecation"))throw new Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),r=!0;}return e.apply(this,arguments)}};},9881:e=>{e.exports={isArray:function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}};},7888:(e,t,r)=>{var n=r(1229),s=r(1388),i=r(6501),o=r(4673);e.exports={xml2js:n,xml2json:s,js2xml:i,json2xml:o};},6501:(e,t,r)=>{var n,s,i=r(4740),o=r(9881).isArray;function a(e,t,r){return (!r&&e.spaces?"\n":"")+Array(t+1).join(e.spaces)}function c(e,t,r){if(t.ignoreAttributes)return "";"attributesFn"in t&&(e=t.attributesFn(e,s,n));var i,o,c,u,l=[];for(i in e)e.hasOwnProperty(i)&&null!==e[i]&&void 0!==e[i]&&(u=t.noQuotesForNativeAttributes&&"string"!=typeof e[i]?"":'"',o=(o=""+e[i]).replace(/"/g,"&quot;"),c="attributeNameFn"in t?t.attributeNameFn(i,o,s,n):i,l.push(t.spaces&&t.indentAttributes?a(t,r+1,!1):" "),l.push(c+"="+u+("attributeValueFn"in t?t.attributeValueFn(o,i,s,n):o)+u));return e&&Object.keys(e).length&&t.spaces&&t.indentAttributes&&l.push(a(t,r,!1)),l.join("")}function u(e,t,r){return n=e,s="xml",t.ignoreDeclaration?"":"<?xml"+c(e[t.attributesKey],t,r)+"?>"}function l(e,t,r){if(t.ignoreInstruction)return "";var i;for(i in e)if(e.hasOwnProperty(i))break;var o="instructionNameFn"in t?t.instructionNameFn(i,e[i],s,n):i;if("object"==typeof e[i])return n=e,s=o,"<?"+o+c(e[i][t.attributesKey],t,r)+"?>";var a=e[i]?e[i]:"";return "instructionFn"in t&&(a=t.instructionFn(a,i,s,n)),"<?"+o+(a?" "+a:"")+"?>"}function h(e,t){return t.ignoreComment?"":"\x3c!--"+("commentFn"in t?t.commentFn(e,s,n):e)+"--\x3e"}function p(e,t){return t.ignoreCdata?"":"<![CDATA["+("cdataFn"in t?t.cdataFn(e,s,n):e.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function d(e,t){return t.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in t?t.doctypeFn(e,s,n):e)+">"}function f(e,t){return t.ignoreText?"":(e=(e=(e=""+e).replace(/&amp;/g,"&")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in t?t.textFn(e,s,n):e)}function m(e,t,r,i){return e.reduce((function(e,o){var u=a(t,r,i&&!e);switch(o.type){case"element":return e+u+function(e,t,r){n=e,s=e.name;var i=[],o="elementNameFn"in t?t.elementNameFn(e.name,e):e.name;i.push("<"+o),e[t.attributesKey]&&i.push(c(e[t.attributesKey],t,r));var a=e[t.elementsKey]&&e[t.elementsKey].length||e[t.attributesKey]&&"preserve"===e[t.attributesKey]["xml:space"];return a||(a="fullTagEmptyElementFn"in t?t.fullTagEmptyElementFn(e.name,e):t.fullTagEmptyElement),a?(i.push(">"),e[t.elementsKey]&&e[t.elementsKey].length&&(i.push(m(e[t.elementsKey],t,r+1)),n=e,s=e.name),i.push(t.spaces&&function(e,t){var r;if(e.elements&&e.elements.length)for(r=0;r<e.elements.length;++r)switch(e.elements[r][t.typeKey]){case"text":if(t.indentText)return !0;break;case"cdata":if(t.indentCdata)return !0;break;case"instruction":if(t.indentInstruction)return !0;break;default:return !0}return !1}(e,t)?"\n"+Array(r+1).join(t.spaces):""),i.push("</"+o+">")):i.push("/>"),i.join("")}(o,t,r);case"comment":return e+u+h(o[t.commentKey],t);case"doctype":return e+u+d(o[t.doctypeKey],t);case"cdata":return e+(t.indentCdata?u:"")+p(o[t.cdataKey],t);case"text":return e+(t.indentText?u:"")+f(o[t.textKey],t);case"instruction":var w={};return w[o[t.nameKey]]=o[t.attributesKey]?o:o[t.instructionKey],e+(t.indentInstruction?u:"")+l(w,t,r)}}),"")}function w(e,t,r){var n;for(n in e)if(e.hasOwnProperty(n))switch(n){case t.parentKey:case t.attributesKey:break;case t.textKey:if(t.indentText||r)return !0;break;case t.cdataKey:if(t.indentCdata||r)return !0;break;case t.instructionKey:if(t.indentInstruction||r)return !0;break;case t.doctypeKey:case t.commentKey:default:return !0}return !1}function g(e,t,r,i,o){n=e,s=t;var u="elementNameFn"in r?r.elementNameFn(t,e):t;if(null==e||""===e)return "fullTagEmptyElementFn"in r&&r.fullTagEmptyElementFn(t,e)||r.fullTagEmptyElement?"<"+u+"></"+u+">":"<"+u+"/>";var l=[];if(t){if(l.push("<"+u),"object"!=typeof e)return l.push(">"+f(e,r)+"</"+u+">"),l.join("");e[r.attributesKey]&&l.push(c(e[r.attributesKey],r,i));var h=w(e,r,!0)||e[r.attributesKey]&&"preserve"===e[r.attributesKey]["xml:space"];if(h||(h="fullTagEmptyElementFn"in r?r.fullTagEmptyElementFn(t,e):r.fullTagEmptyElement),!h)return l.push("/>"),l.join("");l.push(">");}return l.push(y(e,r,i+1,!1)),n=e,s=t,t&&l.push((o?a(r,i,!1):"")+"</"+u+">"),l.join("")}function y(e,t,r,n){var s,i,c,m=[];for(i in e)if(e.hasOwnProperty(i))for(c=o(e[i])?e[i]:[e[i]],s=0;s<c.length;++s){switch(i){case t.declarationKey:m.push(u(c[s],t,r));break;case t.instructionKey:m.push((t.indentInstruction?a(t,r,n):"")+l(c[s],t,r));break;case t.attributesKey:case t.parentKey:break;case t.textKey:m.push((t.indentText?a(t,r,n):"")+f(c[s],t));break;case t.cdataKey:m.push((t.indentCdata?a(t,r,n):"")+p(c[s],t));break;case t.doctypeKey:m.push(a(t,r,n)+d(c[s],t));break;case t.commentKey:m.push(a(t,r,n)+h(c[s],t));break;default:m.push(a(t,r,n)+g(c[s],i,t,r,w(c[s],t)));}n=n&&!m.length;}return m.join("")}e.exports=function(e,t){t=function(e){var t=i.copyOptions(e);return i.ensureFlagExists("ignoreDeclaration",t),i.ensureFlagExists("ignoreInstruction",t),i.ensureFlagExists("ignoreAttributes",t),i.ensureFlagExists("ignoreText",t),i.ensureFlagExists("ignoreComment",t),i.ensureFlagExists("ignoreCdata",t),i.ensureFlagExists("ignoreDoctype",t),i.ensureFlagExists("compact",t),i.ensureFlagExists("indentText",t),i.ensureFlagExists("indentCdata",t),i.ensureFlagExists("indentAttributes",t),i.ensureFlagExists("indentInstruction",t),i.ensureFlagExists("fullTagEmptyElement",t),i.ensureFlagExists("noQuotesForNativeAttributes",t),i.ensureSpacesExists(t),"number"==typeof t.spaces&&(t.spaces=Array(t.spaces+1).join(" ")),i.ensureKeyExists("declaration",t),i.ensureKeyExists("instruction",t),i.ensureKeyExists("attributes",t),i.ensureKeyExists("text",t),i.ensureKeyExists("comment",t),i.ensureKeyExists("cdata",t),i.ensureKeyExists("doctype",t),i.ensureKeyExists("type",t),i.ensureKeyExists("name",t),i.ensureKeyExists("elements",t),i.checkFnExists("doctype",t),i.checkFnExists("instruction",t),i.checkFnExists("cdata",t),i.checkFnExists("comment",t),i.checkFnExists("text",t),i.checkFnExists("instructionName",t),i.checkFnExists("elementName",t),i.checkFnExists("attributeName",t),i.checkFnExists("attributeValue",t),i.checkFnExists("attributes",t),i.checkFnExists("fullTagEmptyElement",t),t}(t);var r=[];return n=e,s="_root_",t.compact?r.push(y(e,t,0,!0)):(e[t.declarationKey]&&r.push(u(e[t.declarationKey],t,0)),e[t.elementsKey]&&e[t.elementsKey].length&&r.push(m(e[t.elementsKey],t,0,!r.length))),r.join("")};},4673:(e,t,r)=>{var n=r(6501);e.exports=function(e,t){e instanceof Buffer&&(e=e.toString());var r=null;if("string"==typeof e)try{r=JSON.parse(e);}catch(e){throw new Error("The JSON structure is invalid")}else r=e;return n(r,t)};},4740:(e,t,r)=>{var n=r(9881).isArray;e.exports={copyOptions:function(e){var t,r={};for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r},ensureFlagExists:function(e,t){e in t&&"boolean"==typeof t[e]||(t[e]=!1);},ensureSpacesExists:function(e){(!("spaces"in e)||"number"!=typeof e.spaces&&"string"!=typeof e.spaces)&&(e.spaces=0);},ensureAlwaysArrayExists:function(e){"alwaysArray"in e&&("boolean"==typeof e.alwaysArray||n(e.alwaysArray))||(e.alwaysArray=!1);},ensureKeyExists:function(e,t){e+"Key"in t&&"string"==typeof t[e+"Key"]||(t[e+"Key"]=t.compact?"_"+e:e);},checkFnExists:function(e,t){return e+"Fn"in t}};},1229:(e,t,r)=>{var n,s,i=r(6099),o=r(4740),a=r(9881).isArray;function c(e){var t=Number(e);if(!isNaN(t))return t;var r=e.toLowerCase();return "true"===r||"false"!==r&&e}function u(e,t){var r;if(n.compact){if(!s[n[e+"Key"]]&&(a(n.alwaysArray)?-1!==n.alwaysArray.indexOf(n[e+"Key"]):n.alwaysArray)&&(s[n[e+"Key"]]=[]),s[n[e+"Key"]]&&!a(s[n[e+"Key"]])&&(s[n[e+"Key"]]=[s[n[e+"Key"]]]),e+"Fn"in n&&"string"==typeof t&&(t=n[e+"Fn"](t,s)),"instruction"===e&&("instructionFn"in n||"instructionNameFn"in n))for(r in t)if(t.hasOwnProperty(r))if("instructionFn"in n)t[r]=n.instructionFn(t[r],r,s);else {var i=t[r];delete t[r],t[n.instructionNameFn(r,i,s)]=i;}a(s[n[e+"Key"]])?s[n[e+"Key"]].push(t):s[n[e+"Key"]]=t;}else {s[n.elementsKey]||(s[n.elementsKey]=[]);var o={};if(o[n.typeKey]=e,"instruction"===e){for(r in t)if(t.hasOwnProperty(r))break;o[n.nameKey]="instructionNameFn"in n?n.instructionNameFn(r,t,s):r,n.instructionHasAttributes?(o[n.attributesKey]=t[r][n.attributesKey],"instructionFn"in n&&(o[n.attributesKey]=n.instructionFn(o[n.attributesKey],r,s))):("instructionFn"in n&&(t[r]=n.instructionFn(t[r],r,s)),o[n.instructionKey]=t[r]);}else e+"Fn"in n&&(t=n[e+"Fn"](t,s)),o[n[e+"Key"]]=t;n.addParent&&(o[n.parentKey]=s),s[n.elementsKey].push(o);}}function l(e){var t;if("attributesFn"in n&&e&&(e=n.attributesFn(e,s)),(n.trim||"attributeValueFn"in n||"attributeNameFn"in n||n.nativeTypeAttributes)&&e)for(t in e)if(e.hasOwnProperty(t)&&(n.trim&&(e[t]=e[t].trim()),n.nativeTypeAttributes&&(e[t]=c(e[t])),"attributeValueFn"in n&&(e[t]=n.attributeValueFn(e[t],t,s)),"attributeNameFn"in n)){var r=e[t];delete e[t],e[n.attributeNameFn(t,e[t],s)]=r;}return e}function h(e){var t={};if(e.body&&("xml"===e.name.toLowerCase()||n.instructionHasAttributes)){for(var r,i=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;null!==(r=i.exec(e.body));)t[r[1]]=r[2]||r[3]||r[4];t=l(t);}if("xml"===e.name.toLowerCase()){if(n.ignoreDeclaration)return;s[n.declarationKey]={},Object.keys(t).length&&(s[n.declarationKey][n.attributesKey]=t),n.addParent&&(s[n.declarationKey][n.parentKey]=s);}else {if(n.ignoreInstruction)return;n.trim&&(e.body=e.body.trim());var o={};n.instructionHasAttributes&&Object.keys(t).length?(o[e.name]={},o[e.name][n.attributesKey]=t):o[e.name]=e.body,u("instruction",o);}}function p(e,t){var r;if("object"==typeof e&&(t=e.attributes,e=e.name),t=l(t),"elementNameFn"in n&&(e=n.elementNameFn(e,s)),n.compact){var i;if(r={},!n.ignoreAttributes&&t&&Object.keys(t).length)for(i in r[n.attributesKey]={},t)t.hasOwnProperty(i)&&(r[n.attributesKey][i]=t[i]);!(e in s)&&(a(n.alwaysArray)?-1!==n.alwaysArray.indexOf(e):n.alwaysArray)&&(s[e]=[]),s[e]&&!a(s[e])&&(s[e]=[s[e]]),a(s[e])?s[e].push(r):s[e]=r;}else s[n.elementsKey]||(s[n.elementsKey]=[]),(r={})[n.typeKey]="element",r[n.nameKey]=e,!n.ignoreAttributes&&t&&Object.keys(t).length&&(r[n.attributesKey]=t),n.alwaysChildren&&(r[n.elementsKey]=[]),s[n.elementsKey].push(r);r[n.parentKey]=s,s=r;}function d(e){n.ignoreText||(e.trim()||n.captureSpacesBetweenElements)&&(n.trim&&(e=e.trim()),n.nativeType&&(e=c(e)),n.sanitize&&(e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),u("text",e));}function f(e){n.ignoreComment||(n.trim&&(e=e.trim()),u("comment",e));}function m(e){var t=s[n.parentKey];n.addParent||delete s[n.parentKey],s=t;}function w(e){n.ignoreCdata||(n.trim&&(e=e.trim()),u("cdata",e));}function g(e){n.ignoreDoctype||(e=e.replace(/^ /,""),n.trim&&(e=e.trim()),u("doctype",e));}function y(e){e.note=e;}e.exports=function(e,t){var r=i.parser(!0,{}),a={};if(s=a,n=function(e){return n=o.copyOptions(e),o.ensureFlagExists("ignoreDeclaration",n),o.ensureFlagExists("ignoreInstruction",n),o.ensureFlagExists("ignoreAttributes",n),o.ensureFlagExists("ignoreText",n),o.ensureFlagExists("ignoreComment",n),o.ensureFlagExists("ignoreCdata",n),o.ensureFlagExists("ignoreDoctype",n),o.ensureFlagExists("compact",n),o.ensureFlagExists("alwaysChildren",n),o.ensureFlagExists("addParent",n),o.ensureFlagExists("trim",n),o.ensureFlagExists("nativeType",n),o.ensureFlagExists("nativeTypeAttributes",n),o.ensureFlagExists("sanitize",n),o.ensureFlagExists("instructionHasAttributes",n),o.ensureFlagExists("captureSpacesBetweenElements",n),o.ensureAlwaysArrayExists(n),o.ensureKeyExists("declaration",n),o.ensureKeyExists("instruction",n),o.ensureKeyExists("attributes",n),o.ensureKeyExists("text",n),o.ensureKeyExists("comment",n),o.ensureKeyExists("cdata",n),o.ensureKeyExists("doctype",n),o.ensureKeyExists("type",n),o.ensureKeyExists("name",n),o.ensureKeyExists("elements",n),o.ensureKeyExists("parent",n),o.checkFnExists("doctype",n),o.checkFnExists("instruction",n),o.checkFnExists("cdata",n),o.checkFnExists("comment",n),o.checkFnExists("text",n),o.checkFnExists("instructionName",n),o.checkFnExists("elementName",n),o.checkFnExists("attributeName",n),o.checkFnExists("attributeValue",n),o.checkFnExists("attributes",n),n}(t),r.opt={strictEntities:!0},r.onopentag=p,r.ontext=d,r.oncomment=f,r.onclosetag=m,r.onerror=y,r.oncdata=w,r.ondoctype=g,r.onprocessinginstruction=h,r.write(e).close(),a[n.elementsKey]){var c=a[n.elementsKey];delete a[n.elementsKey],a[n.elementsKey]=c,delete a.text;}return a};},1388:(e,t,r)=>{var n=r(4740),s=r(1229);e.exports=function(e,t){var r,i,o;return r=function(e){var t=n.copyOptions(e);return n.ensureSpacesExists(t),t}(t),i=s(e,r),o="compact"in r&&r.compact?"_parent":"parent",("addParent"in r&&r.addParent?JSON.stringify(i,(function(e,t){return e===o?"_":t}),r.spaces):JSON.stringify(i,null,r.spaces)).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")};},255:e=>{var t={"&":"&amp;",'"':"&quot;","'":"&apos;","<":"&lt;",">":"&gt;"};e.exports=function(e){return e&&e.replace?e.replace(/([&"<>'])/g,(function(e,r){return t[r]})):e};},3479:(e,t,r)=>{var n=r(4155),s=r(255),i=r(2830).Stream;function o(e,t,r){r=r||0;var n,i,a=(n=t,new Array(r||0).join(n||"")),c=e;if("object"==typeof e&&(c=e[i=Object.keys(e)[0]])&&c._elem)return c._elem.name=i,c._elem.icount=r,c._elem.indent=t,c._elem.indents=a,c._elem.interrupt=c,c._elem;var u,l=[],h=[];function p(e){Object.keys(e).forEach((function(t){l.push(function(e,t){return e+'="'+s(t)+'"'}(t,e[t]));}));}switch(typeof c){case"object":if(null===c)break;c._attr&&p(c._attr),c._cdata&&h.push(("<![CDATA["+c._cdata).replace(/\]\]>/g,"]]]]><![CDATA[>")+"]]>"),c.forEach&&(u=!1,h.push(""),c.forEach((function(e){"object"==typeof e?"_attr"==Object.keys(e)[0]?p(e._attr):h.push(o(e,t,r+1)):(h.pop(),u=!0,h.push(s(e)));})),u||h.push(""));break;default:h.push(s(c));}return {name:i,interrupt:!1,attributes:l,content:h,icount:r,indents:a,indent:t}}function a(e,t,r){if("object"!=typeof t)return e(!1,t);var n=t.interrupt?1:t.content.length;function s(){for(;t.content.length;){var s=t.content.shift();if(void 0!==s){if(i(s))return;a(e,s);}}e(!1,(n>1?t.indents:"")+(t.name?"</"+t.name+">":"")+(t.indent&&!r?"\n":"")),r&&r();}function i(t){return !!t.interrupt&&(t.interrupt.append=e,t.interrupt.end=s,t.interrupt=!1,e(!0),!0)}if(e(!1,t.indents+(t.name?"<"+t.name:"")+(t.attributes.length?" "+t.attributes.join(" "):"")+(n?t.name?">":"":t.name?"/>":"")+(t.indent&&n>1?"\n":"")),!n)return e(!1,t.indent?"\n":"");i(t)||s();}e.exports=function(e,t){"object"!=typeof t&&(t={indent:t});var r,s,c=t.stream?new i:null,u="",l=!1,h=t.indent?!0===t.indent?"    ":t.indent:"",p=!0;function d(e){p?n.nextTick(e):e();}function f(e,t){if(void 0!==t&&(u+=t),e&&!l&&(c=c||new i,l=!0),e&&l){var r=u;d((function(){c.emit("data",r);})),u="";}}function m(e,t){a(f,o(e,h,h?1:0),t);}function w(){if(c){var e=u;d((function(){c.emit("data",e),c.emit("end"),c.readable=!1,c.emit("close");}));}}return d((function(){p=!1;})),t.declaration&&(s={version:"1.0",encoding:(r=t.declaration).encoding||"UTF-8"},r.standalone&&(s.standalone=r.standalone),m({"?xml":{_attr:s}}),u=u.replace("/>","?>")),e&&e.forEach?e.forEach((function(t,r){var n;r+1===e.length&&(n=w),m(t,n);})):m(e,w),c?(c.readable=!0,c):u},e.exports.element=e.exports.Element=function(){var e=Array.prototype.slice.call(arguments),t={_elem:o(e),push:function(e){if(!this.append)throw new Error("not assigned to a parent!");var t=this,r=this._elem.indent;a(this.append,o(e,r,this._elem.icount+(r?1:0)),(function(){t.append(!0);}));},close:function(e){void 0!==e&&this.push(e),this.end&&this.end();}};return t};}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]});},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});};var n={};return (()=>{r.r(n),r.d(n,{AbstractNumbering:()=>fo,Alignment:()=>M,AlignmentAttributes:()=>B,AlignmentType:()=>w,AnnotationReference:()=>Er,Attributes:()=>c,BaseEmphasisMark:()=>re,BaseXmlComponent:()=>e,Body:()=>Rn,Bookmark:()=>tn,BookmarkEnd:()=>nn,BookmarkStart:()=>rn,Border:()=>j,BorderElement:()=>U,BorderStyle:()=>g,BuilderElement:()=>F,CarriageReturn:()=>Rr,Column:()=>kn,ColumnBreak:()=>Pr,Columns:()=>pn,Comment:()=>dr,CommentRangeEnd:()=>hr,CommentRangeStart:()=>lr,CommentReference:()=>pr,Comments:()=>fr,ConcreteHyperlink:()=>Zr,ConcreteNumbering:()=>go,ContinuationSeparator:()=>Ir,DayLong:()=>vr,DayShort:()=>gr,DeletedTextRun:()=>ya,DocGridAttributes:()=>dn,Document:()=>ta,DocumentAttributes:()=>Cn,DocumentBackground:()=>Ln,DocumentBackgroundAttributes:()=>On,DocumentDefaults:()=>Jo,DocumentGrid:()=>fn,DocumentGridType:()=>St,DotEmphasisMark:()=>se,Drawing:()=>er,DropCapType:()=>Hn,EMPTY_OBJECT:()=>t,EmphasisMark:()=>ne,EmphasisMarkType:()=>T,EmptyElement:()=>C,EndnoteReference:()=>Ar,ExternalHyperlink:()=>Jr,File:()=>ta,FootNoteReferenceRunAttributes:()=>la,FootNotes:()=>Zi,Footer:()=>ua,FooterWrapper:()=>Hi,FootnoteReference:()=>ha,FootnoteReferenceElement:()=>Tr,FootnoteReferenceRun:()=>pa,FrameAnchorType:()=>jn,FrameProperties:()=>Gn,FramePropertiesAttributes:()=>Wn,FrameWrap:()=>zn,GridSpan:()=>$s,Header:()=>ca,HeaderFooterReference:()=>hn,HeaderFooterReferenceType:()=>Tt,HeaderFooterType:()=>At,HeaderWrapper:()=>eo,HeadingLevel:()=>gt,HeightRule:()=>li,HorizontalPosition:()=>Ce,HorizontalPositionAlign:()=>b,HorizontalPositionRelativeFrom:()=>Ee,HpsMeasureElement:()=>k,HyperlinkType:()=>_t,IgnoreIfEmptyXmlComponent:()=>i,ImageRun:()=>tr,ImportedRootElementAttributes:()=>d,ImportedXmlComponent:()=>p,Indent:()=>W,InitializableXmlComponent:()=>m,InsertedTextRun:()=>da,InternalHyperlink:()=>Yr,LastRenderedPageBreak:()=>Cr,LeaderType:()=>bt,Level:()=>uo,LevelBase:()=>co,LevelForOverride:()=>lo,LevelFormat:()=>pi,LevelOverride:()=>bo,LevelSuffix:()=>di,LineNumberRestartFormat:()=>It,LineNumberType:()=>mn,LineRuleType:()=>wt,Math:()=>qn,MathAccentCharacter:()=>es,MathAngledBrackets:()=>Ms,MathBase:()=>ts,MathCurlyBrackets:()=>Bs,MathDegree:()=>_s,MathDenominator:()=>Zn,MathFraction:()=>Jn,MathFunction:()=>Rs,MathFunctionName:()=>Is,MathFunctionProperties:()=>Ns,MathIntegral:()=>ps,MathLimitLocation:()=>ns,MathNAryProperties:()=>cs,MathNumerator:()=>Yn,MathPreSubSuperScript:()=>vs,MathPreSubSuperScriptProperties:()=>bs,MathRadical:()=>Ss,MathRadicalProperties:()=>As,MathRoundBrackets:()=>Ps,MathRun:()=>$n,MathSquareBrackets:()=>Fs,MathSubScript:()=>ws,MathSubScriptElement:()=>us,MathSubScriptProperties:()=>ms,MathSubSuperScript:()=>ys,MathSubSuperScriptProperties:()=>gs,MathSum:()=>hs,MathSuperScript:()=>fs,MathSuperScriptElement:()=>ls,MathSuperScriptProperties:()=>ds,Media:()=>to,MonthLong:()=>xr,MonthShort:()=>yr,NextAttributeComponent:()=>a,NoBreakHyphen:()=>mr,NumberFormat:()=>x,NumberProperties:()=>Wr,NumberValueElement:()=>L,Numbering:()=>_o,OnOffElement:()=>R,OutlineLevel:()=>sn,OverlapType:()=>ci,Packer:()=>Ia,PageBorderDisplay:()=>Nt,PageBorderOffsetFrom:()=>Rt,PageBorderZOrder:()=>kt,PageBorders:()=>gn,PageBreak:()=>Dr,PageBreakBefore:()=>Fr,PageMargin:()=>yn,PageNumber:()=>I,PageNumberElement:()=>Nr,PageNumberSeparator:()=>Ct,PageNumberType:()=>vn,PageNumberTypeAttributes:()=>bn,PageOrientation:()=>Ot,PageReference:()=>an,PageSize:()=>xn,PageTextDirection:()=>En,PageTextDirectionType:()=>Lt,Paragraph:()=>Vn,ParagraphProperties:()=>Kn,ParagraphPropertiesDefaults:()=>Zo,PatchType:()=>Ya,PositionalTab:()=>Or,PositionalTabAlignment:()=>pt,PositionalTabLeader:()=>ft,PositionalTabRelativeTo:()=>dt,PrettifyType:()=>Aa,RelativeHorizontalPosition:()=>oi,RelativeVerticalPosition:()=>ai,Run:()=>ye,RunFonts:()=>le,RunProperties:()=>me,RunPropertiesChange:()=>we,RunPropertiesDefaults:()=>Yo,SectionProperties:()=>Nn,SectionType:()=>Dt,SectionTypeAttributes:()=>Tn,Separator:()=>Sr,SequentialIdentifier:()=>nr,Shading:()=>ee,ShadingType:()=>E,SimpleField:()=>ir,SimpleMailMergeField:()=>or,SimplePos:()=>Ie,SoftHyphen:()=>wr,SpaceType:()=>_,Spacing:()=>Mr,StringContainer:()=>P,StringEnumValueElement:()=>D,StringValueElement:()=>O,Style:()=>Ur,StyleForCharacter:()=>Do,StyleForParagraph:()=>Lo,StyleLevel:()=>aa,Styles:()=>$o,SymbolRun:()=>_e,TDirection:()=>Qs,Tab:()=>kr,TabAttributes:()=>jr,TabStop:()=>Hr,TabStopItem:()=>zr,TabStopPosition:()=>vt,TabStopType:()=>yt,Table:()=>yi,TableAnchorType:()=>ii,TableBorders:()=>si,TableCell:()=>ti,TableCellBorders:()=>qs,TableFloatProperties:()=>fi,TableLayout:()=>wi,TableLayoutType:()=>ui,TableOfContents:()=>oa,TableProperties:()=>gi,TableRow:()=>_i,TableRowHeight:()=>vi,TableRowHeightAttributes:()=>bi,TableRowProperties:()=>xi,TableWidthElement:()=>Ks,TextDirection:()=>Gs,TextEffect:()=>S,TextRun:()=>be,TextWrappingSide:()=>ht,TextWrappingType:()=>lt,ThematicBreak:()=>z,Type:()=>An,Underline:()=>fe,UnderlineType:()=>A,VerticalAlign:()=>Et,VerticalAlignAttributes:()=>cn,VerticalAlignElement:()=>un,VerticalMerge:()=>Ys,VerticalMergeType:()=>Ws,VerticalPosition:()=>Le,VerticalPositionAlign:()=>v,VerticalPositionRelativeFrom:()=>Te,WORKAROUND2:()=>ra,WORKAROUND3:()=>f,WORKAROUND4:()=>xs,WidthType:()=>js,WrapNone:()=>Pt,WrapSquare:()=>Bt,WrapTight:()=>Ut,WrapTopAndBottom:()=>jt,XmlAttributeComponent:()=>o,XmlComponent:()=>s,YearLong:()=>_r,YearShort:()=>br,abstractNumUniqueNumericIdGen:()=>Na.abstractNumUniqueNumericIdGen,bookmarkUniqueNumericIdGen:()=>Na.bookmarkUniqueNumericIdGen,concreteNumUniqueNumericIdGen:()=>Na.concreteNumUniqueNumericIdGen,convertInchesToTwip:()=>Na.convertInchesToTwip,convertMillimetersToTwip:()=>Na.convertMillimetersToTwip,convertToXmlComponent:()=>l,dateTimeValue:()=>Na.dateTimeValue,decimalNumber:()=>Na.decimalNumber,docPropertiesUniqueNumericIdGen:()=>Na.docPropertiesUniqueNumericIdGen,eighthPointMeasureValue:()=>Na.eighthPointMeasureValue,hexColorValue:()=>Na.hexColorValue,hpsMeasureValue:()=>Na.hpsMeasureValue,longHexNumber:()=>Na.longHexNumber,measurementOrPercentValue:()=>Na.measurementOrPercentValue,patchDocument:()=>Qa,percentageValue:()=>Na.percentageValue,pointMeasureValue:()=>Na.pointMeasureValue,positiveUniversalMeasureValue:()=>Na.positiveUniversalMeasureValue,sectionMarginDefaults:()=>Sn,sectionPageSizeDefaults:()=>In,shortHexNumber:()=>Na.shortHexNumber,signedHpsMeasureValue:()=>Na.signedHpsMeasureValue,signedTwipsMeasureValue:()=>Na.signedTwipsMeasureValue,twipsMeasureValue:()=>Na.twipsMeasureValue,uCharHexNumber:()=>Na.uCharHexNumber,uniqueId:()=>Na.uniqueId,uniqueNumericIdCreator:()=>Na.uniqueNumericIdCreator,universalMeasureValue:()=>Na.universalMeasureValue,unsignedDecimalNumber:()=>Na.unsignedDecimalNumber});class e{constructor(e){this.rootKey=e;}}const t=Object.seal({});class s extends e{constructor(e){super(e),this.root=new Array;}prepForXml(r){var n;r.stack.push(this);const s=this.root.map((t=>t instanceof e?t.prepForXml(r):t)).filter((e=>void 0!==e));return r.stack.pop(),{[this.rootKey]:s.length?1===s.length&&(null===(n=s[0])||void 0===n?void 0:n._attr)?s[0]:s:t}}addChildElement(e){return this.root.push(e),this}}class i extends s{prepForXml(e){const t=super.prepForXml(e);if(t&&("object"!=typeof t[this.rootKey]||Object.keys(t[this.rootKey]).length))return t}}class o extends e{constructor(e){super("_attr"),this.root=e;}prepForXml(e){const t={};return Object.keys(this.root).forEach((e=>{const r=this.root[e];if(void 0!==r){const n=this.xmlKeys&&this.xmlKeys[e]||e;t[n]=r;}})),{_attr:t}}}class a extends e{constructor(e){super("_attr"),this.root=e;}prepForXml(e){return {_attr:Object.values(this.root).filter((({value:e})=>void 0!==e)).reduce(((e,{key:t,value:r})=>Object.assign(Object.assign({},e),{[t]:r})),{})}}}class c extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val",color:"w:color",fill:"w:fill",space:"w:space",sz:"w:sz",type:"w:type",rsidR:"w:rsidR",rsidRPr:"w:rsidRPr",rsidSect:"w:rsidSect",w:"w:w",h:"w:h",top:"w:top",right:"w:right",bottom:"w:bottom",left:"w:left",header:"w:header",footer:"w:footer",gutter:"w:gutter",linePitch:"w:linePitch",pos:"w:pos"};}}var u=r(7888);const l=e=>{switch(e.type){case void 0:case"element":const t=new p(e.name,e.attributes),r=e.elements||[];for(const e of r){const r=l(e);void 0!==r&&t.push(r);}return t;case"text":return e.text;default:return}};class h extends o{}class p extends s{static fromXmlString(e){const t=(0, u.xml2js)(e,{compact:!1});return l(t)}constructor(e,t){super(e),t&&this.root.push(new h(t));}push(e){this.root.push(e);}}class d extends s{constructor(e){super(""),this._attr=e;}prepForXml(e){return {_attr:this._attr}}}const f="";class m extends s{constructor(e,t){super(e),t&&(this.root=t.root);}}var w,g,y,b,v,x,_,E,T,A,S,I,N=r(6595);class R extends s{constructor(e,t=!0){super(e),!0!==t&&this.root.push(new c({val:t}));}}class k extends s{constructor(e,t){super(e),this.root.push(new c({val:(0, N.KR)(t)}));}}class C extends s{}class O extends s{constructor(e,t){super(e),this.root.push(new c({val:t}));}}class L extends s{constructor(e,t){super(e),this.root.push(new c({val:t}));}}class D extends s{constructor(e,t){super(e),this.root.push(new c({val:t}));}}class P extends s{constructor(e,t){super(e),this.root.push(t);}}class F extends s{constructor(e){super(e.name),e.attributes&&this.root.push(new a(e.attributes));}}!function(e){e.START="start",e.CENTER="center",e.END="end",e.BOTH="both",e.MEDIUM_KASHIDA="mediumKashida",e.DISTRIBUTE="distribute",e.NUM_TAB="numTab",e.HIGH_KASHIDA="highKashida",e.LOW_KASHIDA="lowKashida",e.THAI_DISTRIBUTE="thaiDistribute",e.LEFT="left",e.RIGHT="right",e.JUSTIFIED="both";}(w||(w={}));class B extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class M extends s{constructor(e){super("w:jc"),this.root.push(new B({val:e}));}}class U extends s{constructor(e,{color:t,size:r,space:n,style:s}){super(e),this.root.push(new H({style:s,color:void 0===t?void 0:(0, N.dg)(t),size:void 0===r?void 0:(0, N.LV)(r),space:void 0===n?void 0:(0, N.gg)(n)}));}}class H extends o{constructor(){super(...arguments),this.xmlKeys={style:"w:val",color:"w:color",size:"w:sz",space:"w:space"};}}!function(e){e.SINGLE="single",e.DASH_DOT_STROKED="dashDotStroked",e.DASHED="dashed",e.DASH_SMALL_GAP="dashSmallGap",e.DOT_DASH="dotDash",e.DOT_DOT_DASH="dotDotDash",e.DOTTED="dotted",e.DOUBLE="double",e.DOUBLE_WAVE="doubleWave",e.INSET="inset",e.NIL="nil",e.NONE="none",e.OUTSET="outset",e.THICK="thick",e.THICK_THIN_LARGE_GAP="thickThinLargeGap",e.THICK_THIN_MEDIUM_GAP="thickThinMediumGap",e.THICK_THIN_SMALL_GAP="thickThinSmallGap",e.THIN_THICK_LARGE_GAP="thinThickLargeGap",e.THIN_THICK_MEDIUM_GAP="thinThickMediumGap",e.THIN_THICK_SMALL_GAP="thinThickSmallGap",e.THIN_THICK_THIN_LARGE_GAP="thinThickThinLargeGap",e.THIN_THICK_THIN_MEDIUM_GAP="thinThickThinMediumGap",e.THIN_THICK_THIN_SMALL_GAP="thinThickThinSmallGap",e.THREE_D_EMBOSS="threeDEmboss",e.THREE_D_ENGRAVE="threeDEngrave",e.TRIPLE="triple",e.WAVE="wave";}(g||(g={}));class j extends i{constructor(e){super("w:pBdr"),e.top&&this.root.push(new U("w:top",e.top)),e.bottom&&this.root.push(new U("w:bottom",e.bottom)),e.left&&this.root.push(new U("w:left",e.left)),e.right&&this.root.push(new U("w:right",e.right));}}class z extends s{constructor(){super("w:pBdr");const e=new U("w:bottom",{color:"auto",space:1,style:g.SINGLE,size:6});this.root.push(e);}}class W extends s{constructor({start:e,end:t,left:r,right:n,hanging:s,firstLine:i}){super("w:ind"),this.root.push(new a({start:{key:"w:start",value:void 0===e?void 0:(0, N.xb)(e)},end:{key:"w:end",value:void 0===t?void 0:(0, N.xb)(t)},left:{key:"w:left",value:void 0===r?void 0:(0, N.xb)(r)},right:{key:"w:right",value:void 0===n?void 0:(0, N.xb)(n)},hanging:{key:"w:hanging",value:void 0===s?void 0:(0, N.Jd)(s)},firstLine:{key:"w:firstLine",value:void 0===i?void 0:(0, N.Jd)(i)}}));}}class G extends s{constructor(){super("w:br");}}!function(e){e.BEGIN="begin",e.END="end",e.SEPARATE="separate";}(y||(y={}));class K extends o{constructor(){super(...arguments),this.xmlKeys={type:"w:fldCharType",dirty:"w:dirty"};}}class V extends s{constructor(e){super("w:fldChar"),this.root.push(new K({type:y.BEGIN,dirty:e}));}}class q extends s{constructor(e){super("w:fldChar"),this.root.push(new K({type:y.SEPARATE,dirty:e}));}}class X extends s{constructor(e){super("w:fldChar"),this.root.push(new K({type:y.END,dirty:e}));}}!function(e){e.CENTER="center",e.INSIDE="inside",e.LEFT="left",e.OUTSIDE="outside",e.RIGHT="right";}(b||(b={})),function(e){e.BOTTOM="bottom",e.CENTER="center",e.INSIDE="inside",e.OUTSIDE="outside",e.TOP="top";}(v||(v={})),function(e){e.DECIMAL="decimal",e.UPPER_ROMAN="upperRoman",e.LOWER_ROMAN="lowerRoman",e.UPPER_LETTER="upperLetter",e.LOWER_LETTER="lowerLetter",e.ORDINAL="ordinal",e.CARDINAL_TEXT="cardinalText",e.ORDINAL_TEXT="ordinalText",e.HEX="hex",e.CHICAGO="chicago",e.IDEOGRAPH_DIGITAL="ideographDigital",e.JAPANESE_COUNTING="japaneseCounting",e.AIUEO="aiueo",e.IROHA="iroha",e.DECIMAL_FULL_WIDTH="decimalFullWidth",e.DECIMAL_HALF_WIDTH="decimalHalfWidth",e.JAPANESE_LEGAL="japaneseLegal",e.JAPANESE_DIGITAL_TEN_THOUSAND="japaneseDigitalTenThousand",e.DECIMAL_ENCLOSED_CIRCLE="decimalEnclosedCircle",e.DECIMAL_FULL_WIDTH_2="decimalFullWidth2",e.AIUEO_FULL_WIDTH="aiueoFullWidth",e.IROHA_FULL_WIDTH="irohaFullWidth",e.DECIMAL_ZERO="decimalZero",e.BULLET="bullet",e.GANADA="ganada",e.CHOSUNG="chosung",e.DECIMAL_ENCLOSED_FULL_STOP="decimalEnclosedFullstop",e.DECIMAL_ENCLOSED_PAREN="decimalEnclosedParen",e.DECIMAL_ENCLOSED_CIRCLE_CHINESE="decimalEnclosedCircleChinese",e.IDEOGRAPH_ENCLOSED_CIRCLE="ideographEnclosedCircle",e.IDEOGRAPH_TRADITIONAL="ideographTraditional",e.IDEOGRAPH_ZODIAC="ideographZodiac",e.IDEOGRAPH_ZODIAC_TRADITIONAL="ideographZodiacTraditional",e.TAIWANESE_COUNTING="taiwaneseCounting",e.IDEOGRAPH_LEGAL_TRADITIONAL="ideographLegalTraditional",e.TAIWANESE_COUNTING_THOUSAND="taiwaneseCountingThousand",e.TAIWANESE_DIGITAL="taiwaneseDigital",e.CHINESE_COUNTING="chineseCounting",e.CHINESE_LEGAL_SIMPLIFIED="chineseLegalSimplified",e.CHINESE_COUNTING_TEN_THOUSAND="chineseCountingThousand",e.KOREAN_DIGITAL="koreanDigital",e.KOREAN_COUNTING="koreanCounting",e.KOREAN_LEGAL="koreanLegal",e.KOREAN_DIGITAL_2="koreanDigital2",e.VIETNAMESE_COUNTING="vietnameseCounting",e.RUSSIAN_LOWER="russianLower",e.RUSSIAN_UPPER="russianUpper",e.NONE="none",e.NUMBER_IN_DASH="numberInDash",e.HEBREW_1="hebrew1",e.HEBREW_2="hebrew2",e.ARABIC_ALPHA="arabicAlpha",e.ARABIC_ABJAD="arabicAbjad",e.HINDI_VOWELS="hindiVowels",e.HINDI_CONSONANTS="hindiConsonants",e.HINDI_NUMBERS="hindiNumbers",e.HINDI_COUNTING="hindiCounting",e.THAI_LETTERS="thaiLetters",e.THAI_NUMBERS="thaiNumbers",e.THAI_COUNTING="thaiCounting",e.BAHT_TEXT="bahtText",e.DOLLAR_TEXT="dollarText";}(x||(x={})),function(e){e.DEFAULT="default",e.PRESERVE="preserve";}(_||(_={}));class $ extends o{constructor(){super(...arguments),this.xmlKeys={space:"xml:space"};}}class Z extends s{constructor(){super("w:instrText"),this.root.push(new $({space:_.PRESERVE})),this.root.push("PAGE");}}class Y extends s{constructor(){super("w:instrText"),this.root.push(new $({space:_.PRESERVE})),this.root.push("NUMPAGES");}}class J extends s{constructor(){super("w:instrText"),this.root.push(new $({space:_.PRESERVE})),this.root.push("SECTIONPAGES");}}class Q extends o{constructor(){super(...arguments),this.xmlKeys={fill:"w:fill",color:"w:color",type:"w:val"};}}class ee extends s{constructor({fill:e,color:t,type:r}){super("w:shd"),this.root.push(new Q({fill:void 0===e?void 0:(0, N.dg)(e),color:void 0===t?void 0:(0, N.dg)(t),type:r}));}}!function(e){e.CLEAR="clear",e.DIAGONAL_CROSS="diagCross",e.DIAGONAL_STRIPE="diagStripe",e.HORIZONTAL_CROSS="horzCross",e.HORIZONTAL_STRIPE="horzStripe",e.NIL="nil",e.PERCENT_5="pct5",e.PERCENT_10="pct10",e.PERCENT_12="pct12",e.PERCENT_15="pct15",e.PERCENT_20="pct20",e.PERCENT_25="pct25",e.PERCENT_30="pct30",e.PERCENT_35="pct35",e.PERCENT_37="pct37",e.PERCENT_40="pct40",e.PERCENT_45="pct45",e.PERCENT_50="pct50",e.PERCENT_55="pct55",e.PERCENT_60="pct60",e.PERCENT_62="pct62",e.PERCENT_65="pct65",e.PERCENT_70="pct70",e.PERCENT_75="pct75",e.PERCENT_80="pct80",e.PERCENT_85="pct85",e.PERCENT_87="pct87",e.PERCENT_90="pct90",e.PERCENT_95="pct95",e.REVERSE_DIAGONAL_STRIPE="reverseDiagStripe",e.SOLID="solid",e.THIN_DIAGONAL_CROSS="thinDiagCross",e.THIN_DIAGONAL_STRIPE="thinDiagStripe",e.THIN_HORIZONTAL_CROSS="thinHorzCross",e.THIN_REVERSE_DIAGONAL_STRIPE="thinReverseDiagStripe",e.THIN_VERTICAL_STRIPE="thinVertStripe",e.VERTICAL_STRIPE="vertStripe";}(E||(E={}));class te extends o{constructor(){super(...arguments),this.xmlKeys={id:"w:id",author:"w:author",date:"w:date"};}}!function(e){e.DOT="dot";}(T||(T={}));class re extends s{constructor(e){super("w:em"),this.root.push(new c({val:e}));}}class ne extends re{constructor(e=T.DOT){super(e);}}class se extends re{constructor(){super(T.DOT);}}class ie extends s{constructor(e){super("w:spacing"),this.root.push(new c({val:(0, N.xb)(e)}));}}class oe extends s{constructor(e){super("w:color"),this.root.push(new c({val:(0, N.dg)(e)}));}}class ae extends s{constructor(e){super("w:highlight"),this.root.push(new c({val:e}));}}class ce extends s{constructor(e){super("w:highlightCs"),this.root.push(new c({val:e}));}}class ue extends o{constructor(){super(...arguments),this.xmlKeys={ascii:"w:ascii",cs:"w:cs",eastAsia:"w:eastAsia",hAnsi:"w:hAnsi",hint:"w:hint"};}}class le extends s{constructor(e,t){if(super("w:rFonts"),"string"==typeof e){const r=e;this.root.push(new ue({ascii:r,cs:r,eastAsia:r,hAnsi:r,hint:t}));}else {const t=e;this.root.push(new ue(t));}}}class he extends s{constructor(e){super("w:vertAlign"),this.root.push(new c({val:e}));}}class pe extends he{constructor(){super("superscript");}}class de extends he{constructor(){super("subscript");}}!function(e){e.SINGLE="single",e.WORDS="words",e.DOUBLE="double",e.THICK="thick",e.DOTTED="dotted",e.DOTTEDHEAVY="dottedHeavy",e.DASH="dash",e.DASHEDHEAVY="dashedHeavy",e.DASHLONG="dashLong",e.DASHLONGHEAVY="dashLongHeavy",e.DOTDASH="dotDash",e.DASHDOTHEAVY="dashDotHeavy",e.DOTDOTDASH="dotDotDash",e.DASHDOTDOTHEAVY="dashDotDotHeavy",e.WAVE="wave",e.WAVYHEAVY="wavyHeavy",e.WAVYDOUBLE="wavyDouble",e.NONE="none";}(A||(A={}));class fe extends s{constructor(e=A.SINGLE,t){super("w:u"),this.root.push(new c({val:e,color:void 0===t?void 0:(0, N.dg)(t)}));}}!function(e){e.BLINK_BACKGROUND="blinkBackground",e.LIGHTS="lights",e.ANTS_BLACK="antsBlack",e.ANTS_RED="antsRed",e.SHIMMER="shimmer",e.SPARKLE="sparkle",e.NONE="none";}(S||(S={}));class me extends i{constructor(e){var t,r;if(super("w:rPr"),!e)return;void 0!==e.bold&&this.push(new R("w:b",e.bold)),(void 0===e.boldComplexScript&&void 0!==e.bold||e.boldComplexScript)&&this.push(new R("w:bCs",null!==(t=e.boldComplexScript)&&void 0!==t?t:e.bold)),void 0!==e.italics&&this.push(new R("w:i",e.italics)),(void 0===e.italicsComplexScript&&void 0!==e.italics||e.italicsComplexScript)&&this.push(new R("w:iCs",null!==(r=e.italicsComplexScript)&&void 0!==r?r:e.italics)),e.underline&&this.push(new fe(e.underline.type,e.underline.color)),e.effect&&this.push(new O("w:effect",e.effect)),e.emphasisMark&&this.push(new ne(e.emphasisMark.type)),e.color&&this.push(new oe(e.color)),e.kern&&this.push(new k("w:kern",e.kern)),e.position&&this.push(new O("w:position",e.position)),void 0!==e.size&&this.push(new k("w:sz",e.size));const n=void 0===e.sizeComplexScript||!0===e.sizeComplexScript?e.size:e.sizeComplexScript;n&&this.push(new k("w:szCs",n)),void 0!==e.rightToLeft&&this.push(new R("w:rtl",e.rightToLeft)),void 0!==e.smallCaps?this.push(new R("w:smallCaps",e.smallCaps)):void 0!==e.allCaps&&this.push(new R("w:caps",e.allCaps)),void 0!==e.strike&&this.push(new R("w:strike",e.strike)),void 0!==e.doubleStrike&&this.push(new R("w:dstrike",e.doubleStrike)),e.subScript&&this.push(new de),e.superScript&&this.push(new pe),e.style&&this.push(new O("w:rStyle",e.style)),e.font&&("string"==typeof e.font?this.push(new le(e.font)):"name"in e.font?this.push(new le(e.font.name,e.font.hint)):this.push(new le(e.font))),e.highlight&&this.push(new ae(e.highlight));const s=void 0===e.highlightComplexScript||!0===e.highlightComplexScript?e.highlight:e.highlightComplexScript;s&&this.push(new ce(s)),e.characterSpacing&&this.push(new ie(e.characterSpacing)),void 0!==e.emboss&&this.push(new R("w:emboss",e.emboss)),void 0!==e.imprint&&this.push(new R("w:imprint",e.imprint)),e.shading&&this.push(new ee(e.shading)),e.revision&&this.push(new we(e.revision)),e.border&&this.push(new U("w:bdr",e.border)),e.snapToGrid&&this.push(new R("w:snapToGrid",e.snapToGrid)),e.vanish&&this.push(new R("w:vanish",e.vanish)),e.specVanish&&this.push(new R("w:specVanish",e.vanish)),void 0!==e.scale&&this.push(new L("w:w",e.scale)),e.language&&this.push((e=>new F({name:"w:lang",attributes:{value:{key:"w:val",value:e.value},eastAsia:{key:"w:eastAsia",value:e.eastAsia},bidirectional:{key:"w:bidi",value:e.bidirectional}}}))(e.language)),e.math&&this.push(new R("w:oMath",e.math));}push(e){this.root.push(e);}}class we extends s{constructor(e){super("w:rPrChange"),this.root.push(new te({id:e.id,author:e.author,date:e.date})),this.addChildElement(new me(e));}}class ge extends s{constructor(e){var t;return super("w:t"),"string"==typeof e?(this.root.push(new $({space:_.PRESERVE})),this.root.push(e),this):(this.root.push(new $({space:null!==(t=e.space)&&void 0!==t?t:_.DEFAULT})),this.root.push(e.text),this)}}!function(e){e.CURRENT="CURRENT",e.TOTAL_PAGES="TOTAL_PAGES",e.TOTAL_PAGES_IN_SECTION="TOTAL_PAGES_IN_SECTION";}(I||(I={}));class ye extends s{constructor(e){if(super("w:r"),this.properties=new me(e),this.root.push(this.properties),e.break)for(let t=0;t<e.break;t++)this.root.push(new G);if(e.children)for(const t of e.children)if("string"!=typeof t)this.root.push(t);else switch(t){case I.CURRENT:this.root.push(new V),this.root.push(new Z),this.root.push(new q),this.root.push(new X);break;case I.TOTAL_PAGES:this.root.push(new V),this.root.push(new Y),this.root.push(new q),this.root.push(new X);break;case I.TOTAL_PAGES_IN_SECTION:this.root.push(new V),this.root.push(new J),this.root.push(new q),this.root.push(new X);break;default:this.root.push(new ge(t));}else e.text&&this.root.push(new ge(e.text));}}class be extends ye{constructor(e){if("string"==typeof e)return super({}),this.root.push(new ge(e)),this;super(e);}}class ve extends o{constructor(){super(...arguments),this.xmlKeys={char:"w:char",symbolfont:"w:font"};}}class xe extends s{constructor(e="",t="Wingdings"){super("w:sym"),this.root.push(new ve({char:e,symbolfont:t}));}}class _e extends ye{constructor(e){if("string"==typeof e)return super({}),this.root.push(new xe(e)),this;super(e),this.root.push(new xe(e.char,e.symbolfont));}}var Ee,Te,Ae=r(5457);!function(e){e.CHARACTER="character",e.COLUMN="column",e.INSIDE_MARGIN="insideMargin",e.LEFT_MARGIN="leftMargin",e.MARGIN="margin",e.OUTSIDE_MARGIN="outsideMargin",e.PAGE="page",e.RIGHT_MARGIN="rightMargin";}(Ee||(Ee={})),function(e){e.BOTTOM_MARGIN="bottomMargin",e.INSIDE_MARGIN="insideMargin",e.LINE="line",e.MARGIN="margin",e.OUTSIDE_MARGIN="outsideMargin",e.PAGE="page",e.PARAGRAPH="paragraph",e.TOP_MARGIN="topMargin";}(Te||(Te={}));class Se extends o{constructor(){super(...arguments),this.xmlKeys={x:"x",y:"y"};}}class Ie extends s{constructor(){super("wp:simplePos"),this.root.push(new Se({x:0,y:0}));}}class Ne extends s{constructor(e){super("wp:align"),this.root.push(e);}}class Re extends s{constructor(e){super("wp:posOffset"),this.root.push(e.toString());}}class ke extends o{constructor(){super(...arguments),this.xmlKeys={relativeFrom:"relativeFrom"};}}class Ce extends s{constructor(e){if(super("wp:positionH"),this.root.push(new ke({relativeFrom:e.relative||Ee.PAGE})),e.align)this.root.push(new Ne(e.align));else {if(void 0===e.offset)throw new Error("There is no configuration provided for floating position (Align or offset)");this.root.push(new Re(e.offset));}}}class Oe extends o{constructor(){super(...arguments),this.xmlKeys={relativeFrom:"relativeFrom"};}}class Le extends s{constructor(e){if(super("wp:positionV"),this.root.push(new Oe({relativeFrom:e.relative||Te.PAGE})),e.align)this.root.push(new Ne(e.align));else {if(void 0===e.offset)throw new Error("There is no configuration provided for floating position (Align or offset)");this.root.push(new Re(e.offset));}}}class De extends o{constructor(){super(...arguments),this.xmlKeys={uri:"uri"};}}class Pe extends o{constructor(){super(...arguments),this.xmlKeys={embed:"r:embed",cstate:"cstate"};}}class Fe extends s{constructor(e){super("a:blip"),this.root.push(new Pe({embed:`rId{${e.fileName}}`,cstate:"none"}));}}class Be extends s{constructor(){super("a:srcRect");}}class Me extends s{constructor(){super("a:fillRect");}}class Ue extends s{constructor(){super("a:stretch"),this.root.push(new Me);}}class He extends s{constructor(e){super("pic:blipFill"),this.root.push(new Fe(e)),this.root.push(new Be),this.root.push(new Ue);}}class je extends o{constructor(){super(...arguments),this.xmlKeys={noChangeAspect:"noChangeAspect",noChangeArrowheads:"noChangeArrowheads"};}}class ze extends s{constructor(){super("a:picLocks"),this.root.push(new je({noChangeAspect:1,noChangeArrowheads:1}));}}class We extends s{constructor(){super("pic:cNvPicPr"),this.root.push(new ze);}}const Ge=(e,t)=>new F({name:"a:hlinkClick",attributes:Object.assign(Object.assign({},t?{xmlns:{key:"xmlns:a",value:"http://schemas.openxmlformats.org/drawingml/2006/main"}}:{}),{id:{key:"r:id",value:`rId${e}`}})});class Ke extends o{constructor(){super(...arguments),this.xmlKeys={id:"id",name:"name",descr:"descr"};}}class Ve extends s{constructor(){super("pic:cNvPr"),this.root.push(new Ke({id:0,name:"",descr:""}));}prepForXml(e){for(let t=e.stack.length-1;t>=0;t--){const r=e.stack[t];if(r instanceof Zr){this.root.push(Ge(r.linkId,!1));break}}return super.prepForXml(e)}}class qe extends s{constructor(){super("pic:nvPicPr"),this.root.push(new Ve),this.root.push(new We);}}class Xe extends o{constructor(){super(...arguments),this.xmlKeys={xmlns:"xmlns:pic"};}}class $e extends o{constructor(){super(...arguments),this.xmlKeys={cx:"cx",cy:"cy"};}}class Ze extends s{constructor(e,t){super("a:ext"),this.attributes=new $e({cx:e,cy:t}),this.root.push(this.attributes);}}class Ye extends o{constructor(){super(...arguments),this.xmlKeys={x:"x",y:"y"};}}class Je extends s{constructor(){super("a:off"),this.root.push(new Ye({x:0,y:0}));}}class Qe extends o{constructor(){super(...arguments),this.xmlKeys={flipVertical:"flipV",flipHorizontal:"flipH",rotation:"rot"};}}class et extends s{constructor(e){var t,r;super("a:xfrm"),this.root.push(new Qe({flipVertical:null===(t=e.flip)||void 0===t?void 0:t.vertical,flipHorizontal:null===(r=e.flip)||void 0===r?void 0:r.horizontal,rotation:e.rotation})),this.extents=new Ze(e.emus.x,e.emus.y),this.root.push(new Je),this.root.push(this.extents);}}class tt extends s{constructor(){super("a:avLst");}}class rt extends o{constructor(){super(...arguments),this.xmlKeys={prst:"prst"};}}class nt extends s{constructor(){super("a:prstGeom"),this.root.push(new rt({prst:"rect"})),this.root.push(new tt);}}class st extends o{constructor(){super(...arguments),this.xmlKeys={bwMode:"bwMode"};}}class it extends s{constructor(e){super("pic:spPr"),this.root.push(new st({bwMode:"auto"})),this.form=new et(e),this.root.push(this.form),this.root.push(new nt);}}class ot extends s{constructor(e,t){super("pic:pic"),this.root.push(new Xe({xmlns:"http://schemas.openxmlformats.org/drawingml/2006/picture"})),this.root.push(new qe),this.root.push(new He(e)),this.root.push(new it(t));}}class at extends s{constructor(e,t){super("a:graphicData"),this.root.push(new De({uri:"http://schemas.openxmlformats.org/drawingml/2006/picture"})),this.pic=new ot(e,t),this.root.push(this.pic);}}class ct extends o{constructor(){super(...arguments),this.xmlKeys={a:"xmlns:a"};}}class ut extends s{constructor(e,t){super("a:graphic"),this.root.push(new ct({a:"http://schemas.openxmlformats.org/drawingml/2006/main"})),this.data=new at(e,t),this.root.push(this.data);}}var lt,ht,pt,dt,ft,mt,wt,gt,yt,bt,vt,xt,_t,Et,Tt,At,St,It,Nt,Rt,kt,Ct,Ot,Lt,Dt;!function(e){e[e.NONE=0]="NONE",e[e.SQUARE=1]="SQUARE",e[e.TIGHT=2]="TIGHT",e[e.TOP_AND_BOTTOM=3]="TOP_AND_BOTTOM";}(lt||(lt={})),function(e){e.BOTH_SIDES="bothSides",e.LEFT="left",e.RIGHT="right",e.LARGEST="largest";}(ht||(ht={}));class Pt extends s{constructor(){super("wp:wrapNone");}}class Ft extends o{constructor(){super(...arguments),this.xmlKeys={distT:"distT",distB:"distB",distL:"distL",distR:"distR",wrapText:"wrapText"};}}class Bt extends s{constructor(e,t={top:0,bottom:0,left:0,right:0}){super("wp:wrapSquare"),this.root.push(new Ft({wrapText:e.side||ht.BOTH_SIDES,distT:t.top,distB:t.bottom,distL:t.left,distR:t.right}));}}class Mt extends o{constructor(){super(...arguments),this.xmlKeys={distT:"distT",distB:"distB"};}}class Ut extends s{constructor(e={top:0,bottom:0}){super("wp:wrapTight"),this.root.push(new Mt({distT:e.top,distB:e.bottom}));}}class Ht extends o{constructor(){super(...arguments),this.xmlKeys={distT:"distT",distB:"distB"};}}class jt extends s{constructor(e={top:0,bottom:0}){super("wp:wrapTopAndBottom"),this.root.push(new Ht({distT:e.top,distB:e.bottom}));}}class zt extends s{constructor({name:e,description:t,title:r}={name:"",description:"",title:""}){super("wp:docPr"),this.docPropertiesUniqueNumericId=(0, Ae.Pl)(),this.root.push(new a({id:{key:"id",value:this.docPropertiesUniqueNumericId()},name:{key:"name",value:e},description:{key:"descr",value:t},title:{key:"title",value:r}}));}prepForXml(e){for(let t=e.stack.length-1;t>=0;t--){const r=e.stack[t];if(r instanceof Zr){this.root.push(Ge(r.linkId,!0));break}}return super.prepForXml(e)}}class Wt extends o{constructor(){super(...arguments),this.xmlKeys={b:"b",l:"l",r:"r",t:"t"};}}class Gt extends s{constructor(){super("wp:effectExtent"),this.root.push(new Wt({b:0,l:0,r:0,t:0}));}}class Kt extends o{constructor(){super(...arguments),this.xmlKeys={cx:"cx",cy:"cy"};}}class Vt extends s{constructor(e,t){super("wp:extent"),this.attributes=new Kt({cx:e,cy:t}),this.root.push(this.attributes);}}class qt extends o{constructor(){super(...arguments),this.xmlKeys={xmlns:"xmlns:a",noChangeAspect:"noChangeAspect"};}}class Xt extends s{constructor(){super("a:graphicFrameLocks"),this.root.push(new qt({xmlns:"http://schemas.openxmlformats.org/drawingml/2006/main",noChangeAspect:1}));}}class $t extends s{constructor(){super("wp:cNvGraphicFramePr"),this.root.push(new Xt);}}class Zt extends o{constructor(){super(...arguments),this.xmlKeys={distT:"distT",distB:"distB",distL:"distL",distR:"distR",allowOverlap:"allowOverlap",behindDoc:"behindDoc",layoutInCell:"layoutInCell",locked:"locked",relativeHeight:"relativeHeight",simplePos:"simplePos"};}}class Yt extends s{constructor(e,t,r){super("wp:anchor");const n=Object.assign({allowOverlap:!0,behindDocument:!1,lockAnchor:!1,layoutInCell:!0,verticalPosition:{},horizontalPosition:{}},r.floating);if(this.root.push(new Zt({distT:n.margins&&n.margins.top||0,distB:n.margins&&n.margins.bottom||0,distL:n.margins&&n.margins.left||0,distR:n.margins&&n.margins.right||0,simplePos:"0",allowOverlap:!0===n.allowOverlap?"1":"0",behindDoc:!0===n.behindDocument?"1":"0",locked:!0===n.lockAnchor?"1":"0",layoutInCell:!0===n.layoutInCell?"1":"0",relativeHeight:n.zIndex?n.zIndex:t.emus.y})),this.root.push(new Ie),this.root.push(new Ce(n.horizontalPosition)),this.root.push(new Le(n.verticalPosition)),this.root.push(new Vt(t.emus.x,t.emus.y)),this.root.push(new Gt),void 0!==r.floating&&void 0!==r.floating.wrap)switch(r.floating.wrap.type){case lt.SQUARE:this.root.push(new Bt(r.floating.wrap,r.floating.margins));break;case lt.TIGHT:this.root.push(new Ut(r.floating.margins));break;case lt.TOP_AND_BOTTOM:this.root.push(new jt(r.floating.margins));break;case lt.NONE:default:this.root.push(new Pt);}else this.root.push(new Pt);this.root.push(new zt(r.docProperties)),this.root.push(new $t),this.root.push(new ut(e,t));}}class Jt extends o{constructor(){super(...arguments),this.xmlKeys={distT:"distT",distB:"distB",distL:"distL",distR:"distR"};}}class Qt extends s{constructor({mediaData:e,transform:t,docProperties:r}){super("wp:inline"),this.root.push(new Jt({distT:0,distB:0,distL:0,distR:0})),this.extent=new Vt(t.emus.x,t.emus.y),this.graphic=new ut(e,t),this.root.push(this.extent),this.root.push(new Gt),this.root.push(new zt(r)),this.root.push(new $t),this.root.push(this.graphic);}}class er extends s{constructor(e,t={}){super("w:drawing"),t.floating?this.root.push(new Yt(e,e.transformation,t)):(this.inline=new Qt({mediaData:e,transform:e.transformation,docProperties:t.docProperties}),this.root.push(this.inline));}}class tr extends ye{constructor(e){super({}),this.key=`${(0, Ae.EL)()}.png`;const t="string"==typeof e.data?this.convertDataURIToBinary(e.data):e.data;this.imageData={stream:t,fileName:this.key,transformation:{pixels:{x:Math.round(e.transformation.width),y:Math.round(e.transformation.height)},emus:{x:Math.round(9525*e.transformation.width),y:Math.round(9525*e.transformation.height)},flip:e.transformation.flip,rotation:e.transformation.rotation?6e4*e.transformation.rotation:void 0}};const r=new er(this.imageData,{floating:e.floating,docProperties:e.altText});this.root.push(r);}prepForXml(e){return e.file.Media.addImage(this.key,this.imageData),super.prepForXml(e)}convertDataURIToBinary(e){if("function"==typeof atob){const t=";base64,",r=e.indexOf(t),n=-1===r?0:r+t.length;return new Uint8Array(atob(e.substring(n)).split("").map((e=>e.charCodeAt(0))))}return new(r(8764).Buffer)(e,"base64")}}class rr extends s{constructor(e){super("w:instrText"),this.root.push(new $({space:_.PRESERVE})),this.root.push(`SEQ ${e}`);}}class nr extends ye{constructor(e){super({}),this.root.push(new V(!0)),this.root.push(new rr(e)),this.root.push(new q),this.root.push(new X);}}class sr extends o{constructor(){super(...arguments),this.xmlKeys={instr:"w:instr"};}}class ir extends s{constructor(e,t){super("w:fldSimple"),this.root.push(new sr({instr:e})),void 0!==t&&this.root.push(new be(t));}}class or extends ir{constructor(e){super(` MERGEFIELD ${e} `,`«${e}»`);}}class ar extends o{constructor(){super(...arguments),this.xmlKeys={id:"w:id",initials:"w:initials",author:"w:author",date:"w:date"};}}class cr extends o{constructor(){super(...arguments),this.xmlKeys={id:"w:id"};}}class ur extends o{constructor(){super(...arguments),this.xmlKeys={"xmlns:cx":"xmlns:cx","xmlns:cx1":"xmlns:cx1","xmlns:cx2":"xmlns:cx2","xmlns:cx3":"xmlns:cx3","xmlns:cx4":"xmlns:cx4","xmlns:cx5":"xmlns:cx5","xmlns:cx6":"xmlns:cx6","xmlns:cx7":"xmlns:cx7","xmlns:cx8":"xmlns:cx8","xmlns:mc":"xmlns:mc","xmlns:aink":"xmlns:aink","xmlns:am3d":"xmlns:am3d","xmlns:o":"xmlns:o","xmlns:r":"xmlns:r","xmlns:m":"xmlns:m","xmlns:v":"xmlns:v","xmlns:wp14":"xmlns:wp14","xmlns:wp":"xmlns:wp","xmlns:w10":"xmlns:w10","xmlns:w":"xmlns:w","xmlns:w14":"xmlns:w14","xmlns:w15":"xmlns:w15","xmlns:w16cex":"xmlns:w16cex","xmlns:w16cid":"xmlns:w16cid","xmlns:w16":"xmlns:w16","xmlns:w16sdtdh":"xmlns:w16sdtdh","xmlns:w16se":"xmlns:w16se","xmlns:wpg":"xmlns:wpg","xmlns:wpi":"xmlns:wpi","xmlns:wne":"xmlns:wne","xmlns:wps":"xmlns:wps"};}}class lr extends s{constructor(e){super("w:commentRangeStart"),this.root.push(new cr({id:e}));}}class hr extends s{constructor(e){super("w:commentRangeEnd"),this.root.push(new cr({id:e}));}}class pr extends s{constructor(e){super("w:commentReference"),this.root.push(new cr({id:e}));}}class dr extends s{constructor({id:e,initials:t,author:r,date:n=new Date,children:s}){super("w:comment"),this.root.push(new ar({id:e,initials:t,author:r,date:n.toISOString()}));for(const e of s)this.root.push(e);}}class fr extends s{constructor({children:e}){super("w:comments"),this.root.push(new ur({"xmlns:cx":"http://schemas.microsoft.com/office/drawing/2014/chartex","xmlns:cx1":"http://schemas.microsoft.com/office/drawing/2015/9/8/chartex","xmlns:cx2":"http://schemas.microsoft.com/office/drawing/2015/10/21/chartex","xmlns:cx3":"http://schemas.microsoft.com/office/drawing/2016/5/9/chartex","xmlns:cx4":"http://schemas.microsoft.com/office/drawing/2016/5/10/chartex","xmlns:cx5":"http://schemas.microsoft.com/office/drawing/2016/5/11/chartex","xmlns:cx6":"http://schemas.microsoft.com/office/drawing/2016/5/12/chartex","xmlns:cx7":"http://schemas.microsoft.com/office/drawing/2016/5/13/chartex","xmlns:cx8":"http://schemas.microsoft.com/office/drawing/2016/5/14/chartex","xmlns:mc":"http://schemas.openxmlformats.org/markup-compatibility/2006","xmlns:aink":"http://schemas.microsoft.com/office/drawing/2016/ink","xmlns:am3d":"http://schemas.microsoft.com/office/drawing/2017/model3d","xmlns:o":"urn:schemas-microsoft-com:office:office","xmlns:r":"http://schemas.openxmlformats.org/officeDocument/2006/relationships","xmlns:m":"http://schemas.openxmlformats.org/officeDocument/2006/math","xmlns:v":"urn:schemas-microsoft-com:vml","xmlns:wp14":"http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing","xmlns:wp":"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing","xmlns:w10":"urn:schemas-microsoft-com:office:word","xmlns:w":"http://schemas.openxmlformats.org/wordprocessingml/2006/main","xmlns:w14":"http://schemas.microsoft.com/office/word/2010/wordml","xmlns:w15":"http://schemas.microsoft.com/office/word/2012/wordml","xmlns:w16cex":"http://schemas.microsoft.com/office/word/2018/wordml/cex","xmlns:w16cid":"http://schemas.microsoft.com/office/word/2016/wordml/cid","xmlns:w16":"http://schemas.microsoft.com/office/word/2018/wordml","xmlns:w16sdtdh":"http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash","xmlns:w16se":"http://schemas.microsoft.com/office/word/2015/wordml/symex","xmlns:wpg":"http://schemas.microsoft.com/office/word/2010/wordprocessingGroup","xmlns:wpi":"http://schemas.microsoft.com/office/word/2010/wordprocessingInk","xmlns:wne":"http://schemas.microsoft.com/office/word/2006/wordml","xmlns:wps":"http://schemas.microsoft.com/office/word/2010/wordprocessingShape"}));for(const t of e)this.root.push(new dr(t));}}class mr extends C{constructor(){super("w:noBreakHyphen");}}class wr extends C{constructor(){super("w:softHyphen");}}class gr extends C{constructor(){super("w:dayShort");}}class yr extends C{constructor(){super("w:monthShort");}}class br extends C{constructor(){super("w:yearShort");}}class vr extends C{constructor(){super("w:dayLong");}}class xr extends C{constructor(){super("w:monthLong");}}class _r extends C{constructor(){super("w:yearLong");}}class Er extends C{constructor(){super("w:annotationRef");}}class Tr extends C{constructor(){super("w:footnoteRef");}}class Ar extends C{constructor(){super("w:endnoteRef");}}class Sr extends C{constructor(){super("w:separator");}}class Ir extends C{constructor(){super("w:continuationSeparator");}}class Nr extends C{constructor(){super("w:pgNum");}}class Rr extends C{constructor(){super("w:cr");}}class kr extends C{constructor(){super("w:tab");}}class Cr extends C{constructor(){super("w:lastRenderedPageBreak");}}!function(e){e.LEFT="left",e.CENTER="center",e.RIGHT="right";}(pt||(pt={})),function(e){e.MARGIN="margin",e.INDENT="indent";}(dt||(dt={})),function(e){e.NONE="none",e.DOT="dot",e.HYPHEN="hyphen",e.UNDERSCORE="underscore",e.MIDDLE_DOT="middleDot";}(ft||(ft={}));class Or extends s{constructor(e){super("w:ptab"),this.root.push(new a({alignment:{key:"w:alignment",value:e.alignment},relativeTo:{key:"w:relativeTo",value:e.relativeTo},leader:{key:"w:leader",value:e.leader}}));}}!function(e){e.COLUMN="column",e.PAGE="page";}(mt||(mt={}));class Lr extends s{constructor(e){super("w:br"),this.root.push(new c({type:e}));}}class Dr extends ye{constructor(){super({}),this.root.push(new Lr(mt.PAGE));}}class Pr extends ye{constructor(){super({}),this.root.push(new Lr(mt.COLUMN));}}class Fr extends s{constructor(){super("w:pageBreakBefore");}}!function(e){e.AT_LEAST="atLeast",e.EXACTLY="exactly",e.EXACT="exact",e.AUTO="auto";}(wt||(wt={}));class Br extends o{constructor(){super(...arguments),this.xmlKeys={after:"w:after",before:"w:before",line:"w:line",lineRule:"w:lineRule"};}}class Mr extends s{constructor(e){super("w:spacing"),this.root.push(new Br(e));}}!function(e){e.HEADING_1="Heading1",e.HEADING_2="Heading2",e.HEADING_3="Heading3",e.HEADING_4="Heading4",e.HEADING_5="Heading5",e.HEADING_6="Heading6",e.TITLE="Title";}(gt||(gt={}));class Ur extends s{constructor(e){super("w:pStyle"),this.root.push(new c({val:e}));}}class Hr extends s{constructor(e){super("w:tabs");for(const t of e)this.root.push(new zr(t));}}!function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center",e.BAR="bar",e.CLEAR="clear",e.DECIMAL="decimal",e.END="end",e.NUM="num",e.START="start";}(yt||(yt={})),function(e){e.DOT="dot",e.HYPHEN="hyphen",e.MIDDLE_DOT="middleDot",e.NONE="none",e.UNDERSCORE="underscore";}(bt||(bt={})),function(e){e[e.MAX=9026]="MAX";}(vt||(vt={}));class jr extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val",pos:"w:pos",leader:"w:leader"};}}class zr extends s{constructor({type:e,position:t,leader:r}){super("w:tab"),this.root.push(new jr({val:e,pos:t,leader:r}));}}class Wr extends s{constructor(e,t){super("w:numPr"),this.root.push(new Gr(t)),this.root.push(new Kr(e));}}class Gr extends s{constructor(e){if(super("w:ilvl"),e>9)throw new Error("Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7");this.root.push(new c({val:e}));}}class Kr extends s{constructor(e){super("w:numId"),this.root.push(new c({val:"string"==typeof e?`{${e}}`:e}));}}class Vr extends s{constructor(){super(...arguments),this.fileChild=Symbol();}}class qr extends o{constructor(){super(...arguments),this.xmlKeys={id:"Id",type:"Type",target:"Target",targetMode:"TargetMode"};}}!function(e){e.EXTERNAL="External";}(xt||(xt={}));class Xr extends s{constructor(e,t,r,n){super("Relationship"),this.root.push(new qr({id:e,type:t,target:r,targetMode:n}));}}class $r extends o{constructor(){super(...arguments),this.xmlKeys={id:"r:id",history:"w:history",anchor:"w:anchor"};}}!function(e){e.INTERNAL="INTERNAL",e.EXTERNAL="EXTERNAL";}(_t||(_t={}));class Zr extends s{constructor(e,t,r){super("w:hyperlink"),this.linkId=t;const n={history:1,anchor:r||void 0,id:r?void 0:`rId${this.linkId}`},s=new $r(n);this.root.push(s),e.forEach((e=>{this.root.push(e);}));}}class Yr extends Zr{constructor(e){super(e.children,(0, Ae.EL)(),e.anchor);}}class Jr extends s{constructor(e){super("w:externalHyperlink"),this.options=e;}}class Qr extends o{constructor(){super(...arguments),this.xmlKeys={id:"w:id",name:"w:name"};}}class en extends o{constructor(){super(...arguments),this.xmlKeys={id:"w:id"};}}class tn{constructor(e){this.bookmarkUniqueNumericId=(0, Ae.kt)();const t=this.bookmarkUniqueNumericId();this.start=new rn(e.id,t),this.children=e.children,this.end=new nn(t);}}class rn extends s{constructor(e,t){super("w:bookmarkStart");const r=new Qr({name:e,id:t});this.root.push(r);}}class nn extends s{constructor(e){super("w:bookmarkEnd");const t=new en({id:e});this.root.push(t);}}class sn extends s{constructor(e){super("w:outlineLvl"),this.level=e,this.root.push(new c({val:e}));}}class on extends s{constructor(e,t={}){super("w:instrText"),this.root.push(new $({space:_.PRESERVE}));let r=`PAGEREF ${e}`;t.hyperlink&&(r=`${r} \\h`),t.useRelativePosition&&(r=`${r} \\p`),this.root.push(r);}}class an extends ye{constructor(e,t={}){super({children:[new V(!0),new on(e,t),new X]});}}!function(e){e.BOTTOM="bottom",e.CENTER="center",e.TOP="top";}(Et||(Et={}));class cn extends o{constructor(){super(...arguments),this.xmlKeys={verticalAlign:"w:val"};}}class un extends s{constructor(e){super("w:vAlign"),this.root.push(new cn({verticalAlign:e}));}}!function(e){e.DEFAULT="default",e.FIRST="first",e.EVEN="even";}(Tt||(Tt={}));class ln extends o{constructor(){super(...arguments),this.xmlKeys={type:"w:type",id:"r:id"};}}!function(e){e.HEADER="w:headerReference",e.FOOTER="w:footerReference";}(At||(At={}));class hn extends s{constructor(e,t){super(e),this.root.push(new ln({type:t.type||Tt.DEFAULT,id:`rId${t.id}`}));}}class pn extends s{constructor({space:e,count:t,separate:r,equalWidth:n,children:s}){super("w:cols"),this.root.push(new a({space:{key:"w:space",value:void 0===e?void 0:(0, N.Jd)(e)},count:{key:"w:num",value:void 0===t?void 0:(0, N.vH)(t)},separate:{key:"w:sep",value:r},equalWidth:{key:"w:equalWidth",value:n}})),!n&&s&&s.forEach((e=>this.addChildElement(e)));}}!function(e){e.DEFAULT="default",e.LINES="lines",e.LINES_AND_CHARS="linesAndChars",e.SNAP_TO_CHARS="snapToChars";}(St||(St={}));class dn extends o{constructor(){super(...arguments),this.xmlKeys={type:"w:type",linePitch:"w:linePitch",charSpace:"w:charSpace"};}}class fn extends s{constructor(e,t,r){super("w:docGrid"),this.root.push(new dn({type:r,linePitch:(0, N.vH)(e),charSpace:t?(0, N.vH)(t):void 0}));}}!function(e){e.NEW_PAGE="newPage",e.NEW_SECTION="newSection",e.CONTINUOUS="continuous";}(It||(It={}));class mn extends s{constructor({countBy:e,start:t,restart:r,distance:n}){super("w:lnNumType"),this.root.push(new a({countBy:{key:"w:countBy",value:void 0===e?void 0:(0, N.vH)(e)},start:{key:"w:start",value:void 0===t?void 0:(0, N.vH)(t)},restart:{key:"w:restart",value:r},distance:{key:"w:distance",value:void 0===n?void 0:(0, N.Jd)(n)}}));}}!function(e){e.ALL_PAGES="allPages",e.FIRST_PAGE="firstPage",e.NOT_FIRST_PAGE="notFirstPage";}(Nt||(Nt={})),function(e){e.PAGE="page",e.TEXT="text";}(Rt||(Rt={})),function(e){e.BACK="back",e.FRONT="front";}(kt||(kt={}));class wn extends o{constructor(){super(...arguments),this.xmlKeys={display:"w:display",offsetFrom:"w:offsetFrom",zOrder:"w:zOrder"};}}class gn extends i{constructor(e){if(super("w:pgBorders"),!e)return this;e.pageBorders?this.root.push(new wn({display:e.pageBorders.display,offsetFrom:e.pageBorders.offsetFrom,zOrder:e.pageBorders.zOrder})):this.root.push(new wn({})),e.pageBorderTop&&this.root.push(new U("w:top",e.pageBorderTop)),e.pageBorderLeft&&this.root.push(new U("w:left",e.pageBorderLeft)),e.pageBorderBottom&&this.root.push(new U("w:bottom",e.pageBorderBottom)),e.pageBorderRight&&this.root.push(new U("w:right",e.pageBorderRight));}}class yn extends s{constructor(e,t,r,n,s,i,o){super("w:pgMar"),this.root.push(new a({top:{key:"w:top",value:(0, N.xb)(e)},right:{key:"w:right",value:(0, N.Jd)(t)},bottom:{key:"w:bottom",value:(0, N.xb)(r)},left:{key:"w:left",value:(0, N.Jd)(n)},header:{key:"w:header",value:(0, N.Jd)(s)},footer:{key:"w:footer",value:(0, N.Jd)(i)},gutter:{key:"w:gutter",value:(0, N.Jd)(o)}}));}}!function(e){e.HYPHEN="hyphen",e.PERIOD="period",e.COLON="colon",e.EM_DASH="emDash",e.EN_DASH="endash";}(Ct||(Ct={}));class bn extends o{constructor(){super(...arguments),this.xmlKeys={start:"w:start",formatType:"w:fmt",separator:"w:chapSep"};}}class vn extends s{constructor({start:e,formatType:t,separator:r}){super("w:pgNumType"),this.root.push(new bn({start:void 0===e?void 0:(0, N.vH)(e),formatType:t,separator:r}));}}!function(e){e.PORTRAIT="portrait",e.LANDSCAPE="landscape";}(Ot||(Ot={}));class xn extends s{constructor(e,t,r){super("w:pgSz");const n=r===Ot.LANDSCAPE,s=(0, N.Jd)(e),i=(0, N.Jd)(t);this.root.push(new a({width:{key:"w:w",value:n?i:s},height:{key:"w:h",value:n?s:i},orientation:{key:"w:orient",value:r}}));}}!function(e){e.LEFT_TO_RIGHT_TOP_TO_BOTTOM="lrTb",e.TOP_TO_BOTTOM_RIGHT_TO_LEFT="tbRl";}(Lt||(Lt={}));class _n extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class En extends s{constructor(e){super("w:textDirection"),this.root.push(new _n({val:e}));}}!function(e){e.NEXT_PAGE="nextPage",e.NEXT_COLUMN="nextColumn",e.CONTINUOUS="continuous",e.EVEN_PAGE="evenPage",e.ODD_PAGE="oddPage";}(Dt||(Dt={}));class Tn extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class An extends s{constructor(e){super("w:type"),this.root.push(new Tn({val:e}));}}const Sn={TOP:"1in",RIGHT:"1in",BOTTOM:"1in",LEFT:"1in",HEADER:708,FOOTER:708,GUTTER:0},In={WIDTH:11906,HEIGHT:16838,ORIENTATION:Ot.PORTRAIT};class Nn extends s{constructor({page:{size:{width:e=In.WIDTH,height:t=In.HEIGHT,orientation:r=In.ORIENTATION}={},margin:{top:n=Sn.TOP,right:s=Sn.RIGHT,bottom:i=Sn.BOTTOM,left:o=Sn.LEFT,header:a=Sn.HEADER,footer:c=Sn.FOOTER,gutter:u=Sn.GUTTER}={},pageNumbers:l={},borders:h,textDirection:p}={},grid:{linePitch:d=360,charSpace:f,type:m}={},headerWrapperGroup:w={},footerWrapperGroup:g={},lineNumbers:y,titlePage:b,verticalAlign:v,column:x,type:_}={}){super("w:sectPr"),this.addHeaderFooterGroup(At.HEADER,w),this.addHeaderFooterGroup(At.FOOTER,g),_&&this.root.push(new An(_)),this.root.push(new xn(e,t,r)),this.root.push(new yn(n,s,i,o,a,c,u)),h&&this.root.push(new gn(h)),y&&this.root.push(new mn(y)),this.root.push(new vn(l)),x&&this.root.push(new pn(x)),v&&this.root.push(new un(v)),void 0!==b&&this.root.push(new R("w:titlePg",b)),p&&this.root.push(new En(p)),this.root.push(new fn(d,f,m));}addHeaderFooterGroup(e,t){t.default&&this.root.push(new hn(e,{type:Tt.DEFAULT,id:t.default.View.ReferenceId})),t.first&&this.root.push(new hn(e,{type:Tt.FIRST,id:t.first.View.ReferenceId})),t.even&&this.root.push(new hn(e,{type:Tt.EVEN,id:t.even.View.ReferenceId}));}}class Rn extends s{constructor(){super("w:body"),this.sections=[];}addSection(e){const t=this.sections.pop();this.root.push(this.createSectionParagraph(t)),this.sections.push(new Nn(e));}prepForXml(e){return 1===this.sections.length&&(this.root.splice(0,1),this.root.push(this.sections.pop())),super.prepForXml(e)}push(e){this.root.push(e);}createSectionParagraph(e){const t=new Vn({}),r=new Kn({});return r.push(e),t.addChildElement(r),t}}class kn extends s{constructor({width:e,space:t}){super("w:col"),this.root.push(new a({width:{key:"w:w",value:(0, N.Jd)(e)},space:{key:"w:space",value:void 0===t?void 0:(0, N.Jd)(t)}}));}}class Cn extends o{constructor(){super(...arguments),this.xmlKeys={wpc:"xmlns:wpc",mc:"xmlns:mc",o:"xmlns:o",r:"xmlns:r",m:"xmlns:m",v:"xmlns:v",wp14:"xmlns:wp14",wp:"xmlns:wp",w10:"xmlns:w10",w:"xmlns:w",w14:"xmlns:w14",w15:"xmlns:w15",wpg:"xmlns:wpg",wpi:"xmlns:wpi",wne:"xmlns:wne",wps:"xmlns:wps",Ignorable:"mc:Ignorable",cp:"xmlns:cp",dc:"xmlns:dc",dcterms:"xmlns:dcterms",dcmitype:"xmlns:dcmitype",xsi:"xmlns:xsi",type:"xsi:type",cx:"xmlns:cx",cx1:"xmlns:cx1",cx2:"xmlns:cx2",cx3:"xmlns:cx3",cx4:"xmlns:cx4",cx5:"xmlns:cx5",cx6:"xmlns:cx6",cx7:"xmlns:cx7",cx8:"xmlns:cx8",aink:"xmlns:aink",am3d:"xmlns:am3d",w16cex:"xmlns:w16cex",w16cid:"xmlns:w16cid",w16:"xmlns:w16",w16sdtdh:"xmlns:w16sdtdh",w16se:"xmlns:w16se"};}}class On extends o{constructor(){super(...arguments),this.xmlKeys={color:"w:color",themeColor:"w:themeColor",themeShade:"w:themeShade",themeTint:"w:themeTint"};}}class Ln extends s{constructor(e){super("w:background"),this.root.push(new On({color:void 0===e.color?void 0:(0, N.dg)(e.color),themeColor:e.themeColor,themeShade:void 0===e.themeShade?void 0:(0, N.xD)(e.themeShade),themeTint:void 0===e.themeTint?void 0:(0, N.xD)(e.themeTint)}));}}class Dn extends s{constructor(e){super("w:document"),this.root.push(new Cn({wpc:"http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",mc:"http://schemas.openxmlformats.org/markup-compatibility/2006",o:"urn:schemas-microsoft-com:office:office",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",m:"http://schemas.openxmlformats.org/officeDocument/2006/math",v:"urn:schemas-microsoft-com:vml",wp14:"http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",wp:"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",w10:"urn:schemas-microsoft-com:office:word",w:"http://schemas.openxmlformats.org/wordprocessingml/2006/main",w14:"http://schemas.microsoft.com/office/word/2010/wordml",w15:"http://schemas.microsoft.com/office/word/2012/wordml",wpg:"http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",wpi:"http://schemas.microsoft.com/office/word/2010/wordprocessingInk",wne:"http://schemas.microsoft.com/office/word/2006/wordml",wps:"http://schemas.microsoft.com/office/word/2010/wordprocessingShape",cx:"http://schemas.microsoft.com/office/drawing/2014/chartex",cx1:"http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",cx2:"http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",cx3:"http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",cx4:"http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",cx5:"http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",cx6:"http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",cx7:"http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",cx8:"http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",aink:"http://schemas.microsoft.com/office/drawing/2016/ink",am3d:"http://schemas.microsoft.com/office/drawing/2017/model3d",w16cex:"http://schemas.microsoft.com/office/word/2018/wordml/cex",w16cid:"http://schemas.microsoft.com/office/word/2016/wordml/cid",w16:"http://schemas.microsoft.com/office/word/2018/wordml",w16sdtdh:"http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash",w16se:"http://schemas.microsoft.com/office/word/2015/wordml/symex",Ignorable:"w14 w15 wp14"})),this.body=new Rn,e.background&&this.root.push(new Ln(e.background)),this.root.push(this.body);}add(e){return this.body.push(e),this}get Body(){return this.body}}class Pn extends o{constructor(){super(...arguments),this.xmlKeys={xmlns:"xmlns"};}}class Fn extends s{constructor(){super("Relationships"),this.root.push(new Pn({xmlns:"http://schemas.openxmlformats.org/package/2006/relationships"}));}createRelationship(e,t,r,n){const s=new Xr(`rId${e}`,t,r,n);return this.root.push(s),s}get RelationshipCount(){return this.root.length-1}}class Bn{constructor(e){this.document=new Dn(e),this.relationships=new Fn;}get View(){return this.document}get Relationships(){return this.relationships}}class Mn extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class Un extends s{constructor(){super("w:wordWrap"),this.root.push(new Mn({val:0}));}}var Hn,jn,zn;!function(e){e.NONE="none",e.DROP="drop",e.MARGIN="margin";}(Hn||(Hn={})),function(e){e.MARGIN="margin",e.PAGE="page",e.TEXT="text";}(jn||(jn={})),function(e){e.AROUND="around",e.AUTO="auto",e.NONE="none",e.NOT_BESIDE="notBeside",e.THROUGH="through",e.TIGHT="tight";}(zn||(zn={}));class Wn extends o{constructor(){super(...arguments),this.xmlKeys={anchorLock:"w:anchorLock",dropCap:"w:dropCap",width:"w:w",height:"w:h",x:"w:x",y:"w:y",anchorHorizontal:"w:hAnchor",anchorVertical:"w:vAnchor",spaceHorizontal:"w:hSpace",spaceVertical:"w:vSpace",rule:"w:hRule",alignmentX:"w:xAlign",alignmentY:"w:yAlign",lines:"w:lines",wrap:"w:wrap"};}}class Gn extends s{constructor(e){var t,r;super("w:framePr"),this.root.push(new Wn({anchorLock:e.anchorLock,dropCap:e.dropCap,width:e.width,height:e.height,x:e.position?e.position.x:void 0,y:e.position?e.position.y:void 0,anchorHorizontal:e.anchor.horizontal,anchorVertical:e.anchor.vertical,spaceHorizontal:null===(t=e.space)||void 0===t?void 0:t.horizontal,spaceVertical:null===(r=e.space)||void 0===r?void 0:r.vertical,rule:e.rule,alignmentX:e.alignment?e.alignment.x:void 0,alignmentY:e.alignment?e.alignment.y:void 0,lines:e.lines,wrap:e.wrap}));}}class Kn extends i{constructor(e){var t,r;if(super("w:pPr"),this.numberingReferences=[],!e)return this;e.heading&&this.push(new Ur(e.heading)),e.bullet&&this.push(new Ur("ListParagraph")),e.numbering&&(e.style||e.heading||e.numbering.custom||this.push(new Ur("ListParagraph"))),e.style&&this.push(new Ur(e.style)),void 0!==e.keepNext&&this.push(new R("w:keepNext",e.keepNext)),void 0!==e.keepLines&&this.push(new R("w:keepLines",e.keepLines)),e.pageBreakBefore&&this.push(new Fr),e.frame&&this.push(new Gn(e.frame)),void 0!==e.widowControl&&this.push(new R("w:widowControl",e.widowControl)),e.bullet&&this.push(new Wr(1,e.bullet.level)),e.numbering&&(this.numberingReferences.push({reference:e.numbering.reference,instance:null!==(t=e.numbering.instance)&&void 0!==t?t:0}),this.push(new Wr(`${e.numbering.reference}-${null!==(r=e.numbering.instance)&&void 0!==r?r:0}`,e.numbering.level))),e.border&&this.push(new j(e.border)),e.thematicBreak&&this.push(new z),e.shading&&this.push(new ee(e.shading)),e.wordWrap&&this.push(new Un);const n=[...e.rightTabStop?[{type:yt.RIGHT,position:e.rightTabStop}]:[],...e.tabStops?e.tabStops:[],...e.leftTabStop?[{type:yt.LEFT,position:e.leftTabStop}]:[]];n.length>0&&this.push(new Hr(n)),void 0!==e.bidirectional&&this.push(new R("w:bidi",e.bidirectional)),e.spacing&&this.push(new Mr(e.spacing)),e.indent&&this.push(new W(e.indent)),void 0!==e.contextualSpacing&&this.push(new R("w:contextualSpacing",e.contextualSpacing)),e.alignment&&this.push(new M(e.alignment)),void 0!==e.outlineLevel&&this.push(new sn(e.outlineLevel)),void 0!==e.suppressLineNumbers&&this.push(new R("w:suppressLineNumbers",e.suppressLineNumbers)),void 0!==e.autoSpaceEastAsianText&&this.push(new R("w:autoSpaceDN",e.autoSpaceEastAsianText));}push(e){this.root.push(e);}prepForXml(e){if(e.viewWrapper instanceof Bn)for(const t of this.numberingReferences)e.file.Numbering.createConcreteNumberingInstance(t.reference,t.instance);return super.prepForXml(e)}}class Vn extends Vr{constructor(e){if(super("w:p"),"string"==typeof e)return this.properties=new Kn({}),this.root.push(this.properties),this.root.push(new be(e)),this;if(this.properties=new Kn(e),this.root.push(this.properties),e.text&&this.root.push(new be(e.text)),e.children)for(const t of e.children)if(t instanceof tn){this.root.push(t.start);for(const e of t.children)this.root.push(e);this.root.push(t.end);}else this.root.push(t);}prepForXml(e){for(const t of this.root)if(t instanceof Jr){const r=this.root.indexOf(t),n=new Zr(t.options.children,(0, Ae.EL)());e.viewWrapper.Relationships.createRelationship(n.linkId,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",t.options.link,xt.EXTERNAL),this.root[r]=n;}return super.prepForXml(e)}addRunToFront(e){return this.root.splice(1,0,e),this}}class qn extends s{constructor(e){super("m:oMath");for(const t of e.children)this.root.push(t);}}class Xn extends s{constructor(e){super("m:t"),this.root.push(e);}}class $n extends s{constructor(e){super("m:r"),this.root.push(new Xn(e));}}class Zn extends s{constructor(e){super("m:den");for(const t of e)this.root.push(t);}}class Yn extends s{constructor(e){super("m:num");for(const t of e)this.root.push(t);}}class Jn extends s{constructor(e){super("m:f"),this.root.push(new Yn(e.numerator)),this.root.push(new Zn(e.denominator));}}class Qn extends o{constructor(){super(...arguments),this.xmlKeys={accent:"m:val"};}}class es extends s{constructor(e){super("m:chr"),this.root.push(new Qn({accent:e}));}}class ts extends s{constructor(e){super("m:e");for(const t of e)this.root.push(t);}}class rs extends o{constructor(){super(...arguments),this.xmlKeys={value:"m:val"};}}class ns extends s{constructor(){super("m:limLoc"),this.root.push(new rs({value:"undOvr"}));}}class ss extends o{constructor(){super(...arguments),this.xmlKeys={hide:"m:val"};}}class is extends s{constructor(){super("m:subHide"),this.root.push(new ss({hide:1}));}}class os extends o{constructor(){super(...arguments),this.xmlKeys={hide:"m:val"};}}class as extends s{constructor(){super("m:supHide"),this.root.push(new os({hide:1}));}}class cs extends s{constructor(e,t,r){super("m:naryPr"),e&&this.root.push(new es(e)),this.root.push(new ns),t||this.root.push(new as),r||this.root.push(new is);}}class us extends s{constructor(e){super("m:sub");for(const t of e)this.root.push(t);}}class ls extends s{constructor(e){super("m:sup");for(const t of e)this.root.push(t);}}class hs extends s{constructor(e){super("m:nary"),this.root.push(new cs("∑",!!e.superScript,!!e.subScript)),e.subScript&&this.root.push(new us(e.subScript)),e.superScript&&this.root.push(new ls(e.superScript)),this.root.push(new ts(e.children));}}class ps extends s{constructor(e){super("m:nary"),this.root.push(new cs("",!!e.superScript,!!e.subScript)),e.subScript&&this.root.push(new us(e.subScript)),e.superScript&&this.root.push(new ls(e.superScript)),this.root.push(new ts(e.children));}}class ds extends s{constructor(){super("m:sSupPr");}}class fs extends s{constructor(e){super("m:sSup"),this.root.push(new ds),this.root.push(new ts(e.children)),this.root.push(new ls(e.superScript));}}class ms extends s{constructor(){super("m:sSubPr");}}class ws extends s{constructor(e){super("m:sSub"),this.root.push(new ms),this.root.push(new ts(e.children)),this.root.push(new us(e.subScript));}}class gs extends s{constructor(){super("m:sSubSupPr");}}class ys extends s{constructor(e){super("m:sSubSup"),this.root.push(new gs),this.root.push(new ts(e.children)),this.root.push(new us(e.subScript)),this.root.push(new ls(e.superScript));}}class bs extends s{constructor(){super("m:sPrePr");}}class vs extends s{constructor(e){super("m:sPre"),this.root.push(new bs),this.root.push(new ts(e.children)),this.root.push(new us(e.subScript)),this.root.push(new ls(e.superScript));}}const xs="";class _s extends s{constructor(e){if(super("m:deg"),e)for(const t of e)this.root.push(t);}}class Es extends o{constructor(){super(...arguments),this.xmlKeys={hide:"m:val"};}}class Ts extends s{constructor(){super("m:degHide"),this.root.push(new Es({hide:1}));}}class As extends s{constructor(e){super("m:radPr"),e||this.root.push(new Ts);}}class Ss extends s{constructor(e){super("m:rad"),this.root.push(new As(!!e.degree)),this.root.push(new _s(e.degree)),this.root.push(new ts(e.children));}}class Is extends s{constructor(e){super("m:fName");for(const t of e)this.root.push(t);}}class Ns extends s{constructor(){super("m:funcPr");}}class Rs extends s{constructor(e){super("m:func"),this.root.push(new Ns),this.root.push(new Is(e.name)),this.root.push(new ts(e.children));}}class ks extends o{constructor(){super(...arguments),this.xmlKeys={character:"m:val"};}}class Cs extends s{constructor(e){super("m:begChr"),this.root.push(new ks({character:e}));}}class Os extends o{constructor(){super(...arguments),this.xmlKeys={character:"m:val"};}}class Ls extends s{constructor(e){super("m:endChr"),this.root.push(new Os({character:e}));}}class Ds extends s{constructor(e){super("m:dPr"),e&&(this.root.push(new Cs(e.beginningCharacter)),this.root.push(new Ls(e.endingCharacter)));}}class Ps extends s{constructor(e){super("m:d"),this.root.push(new Ds),this.root.push(new ts(e.children));}}class Fs extends s{constructor(e){super("m:d"),this.root.push(new Ds({beginningCharacter:"[",endingCharacter:"]"})),this.root.push(new ts(e.children));}}class Bs extends s{constructor(e){super("m:d"),this.root.push(new Ds({beginningCharacter:"{",endingCharacter:"}"})),this.root.push(new ts(e.children));}}class Ms extends s{constructor(e){super("m:d"),this.root.push(new Ds({beginningCharacter:"〈",endingCharacter:"〉"})),this.root.push(new ts(e.children));}}class Us extends s{constructor(e){super("w:tblGrid");for(const t of e)this.root.push(new Hs(t));}}class Hs extends s{constructor(e){super("w:gridCol"),void 0!==e&&this.root.push(new a({width:{key:"w:w",value:(0, N.Jd)(e)}}));}}var js,zs,Ws,Gs;!function(e){e.AUTO="auto",e.DXA="dxa",e.NIL="nil",e.PERCENTAGE="pct";}(js||(js={}));class Ks extends s{constructor(e,{type:t=js.AUTO,size:r}){super(e);let n=r;t===js.PERCENTAGE&&"number"==typeof r&&(n=`${r}%`),this.root.push(new a({type:{key:"w:type",value:t},size:{key:"w:w",value:(0, N.aB)(n)}}));}}!function(e){e.TABLE="w:tblCellMar",e.TABLE_CELL="w:tcMar";}(zs||(zs={}));class Vs extends i{constructor(e,{marginUnitType:t=js.DXA,top:r,left:n,bottom:s,right:i}){super(e),void 0!==r&&this.root.push(new Ks("w:top",{type:t,size:r})),void 0!==n&&this.root.push(new Ks("w:left",{type:t,size:n})),void 0!==s&&this.root.push(new Ks("w:bottom",{type:t,size:s})),void 0!==i&&this.root.push(new Ks("w:right",{type:t,size:i}));}}class qs extends i{constructor(e){super("w:tcBorders"),e.top&&this.root.push(new U("w:top",e.top)),e.start&&this.root.push(new U("w:start",e.start)),e.left&&this.root.push(new U("w:left",e.left)),e.bottom&&this.root.push(new U("w:bottom",e.bottom)),e.end&&this.root.push(new U("w:end",e.end)),e.right&&this.root.push(new U("w:right",e.right));}}class Xs extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class $s extends s{constructor(e){super("w:gridSpan"),this.root.push(new Xs({val:(0, N.vH)(e)}));}}!function(e){e.CONTINUE="continue",e.RESTART="restart";}(Ws||(Ws={}));class Zs extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class Ys extends s{constructor(e){super("w:vMerge"),this.root.push(new Zs({val:e}));}}!function(e){e.BOTTOM_TO_TOP_LEFT_TO_RIGHT="btLr",e.LEFT_TO_RIGHT_TOP_TO_BOTTOM="lrTb",e.TOP_TO_BOTTOM_RIGHT_TO_LEFT="tbRl";}(Gs||(Gs={}));class Js extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class Qs extends s{constructor(e){super("w:textDirection"),this.root.push(new Js({val:e}));}}class ei extends i{constructor(e){super("w:tcPr"),e.width&&this.root.push(new Ks("w:tcW",e.width)),e.columnSpan&&this.root.push(new $s(e.columnSpan)),e.verticalMerge?this.root.push(new Ys(e.verticalMerge)):e.rowSpan&&e.rowSpan>1&&this.root.push(new Ys(Ws.RESTART)),e.borders&&this.root.push(new qs(e.borders)),e.shading&&this.root.push(new ee(e.shading)),e.margins&&this.root.push(new Vs(zs.TABLE_CELL,e.margins)),e.textDirection&&this.root.push(new Qs(e.textDirection)),e.verticalAlign&&this.root.push(new un(e.verticalAlign));}}class ti extends s{constructor(e){super("w:tc"),this.options=e,this.root.push(new ei(e));for(const t of e.children)this.root.push(t);}prepForXml(e){return this.root[this.root.length-1]instanceof Vn||this.root.push(new Vn({})),super.prepForXml(e)}}const ri={style:g.NONE,size:0,color:"auto"},ni={style:g.SINGLE,size:4,color:"auto"};class si extends s{constructor(e){super("w:tblBorders"),e.top?this.root.push(new U("w:top",e.top)):this.root.push(new U("w:top",ni)),e.left?this.root.push(new U("w:left",e.left)):this.root.push(new U("w:left",ni)),e.bottom?this.root.push(new U("w:bottom",e.bottom)):this.root.push(new U("w:bottom",ni)),e.right?this.root.push(new U("w:right",e.right)):this.root.push(new U("w:right",ni)),e.insideHorizontal?this.root.push(new U("w:insideH",e.insideHorizontal)):this.root.push(new U("w:insideH",ni)),e.insideVertical?this.root.push(new U("w:insideV",e.insideVertical)):this.root.push(new U("w:insideV",ni));}}var ii,oi,ai,ci,ui,li,hi,pi,di;si.NONE={top:ri,bottom:ri,left:ri,right:ri,insideHorizontal:ri,insideVertical:ri},function(e){e.MARGIN="margin",e.PAGE="page",e.TEXT="text";}(ii||(ii={})),function(e){e.CENTER="center",e.INSIDE="inside",e.LEFT="left",e.OUTSIDE="outside",e.RIGHT="right";}(oi||(oi={})),function(e){e.CENTER="center",e.INSIDE="inside",e.BOTTOM="bottom",e.OUTSIDE="outside",e.INLINE="inline",e.TOP="top";}(ai||(ai={})),function(e){e.NEVER="never",e.OVERLAP="overlap";}(ci||(ci={}));class fi extends s{constructor({horizontalAnchor:e,verticalAnchor:t,absoluteHorizontalPosition:r,relativeHorizontalPosition:n,absoluteVerticalPosition:s,relativeVerticalPosition:i,bottomFromText:o,topFromText:c,leftFromText:u,rightFromText:l,overlap:h}){super("w:tblpPr"),this.root.push(new a({leftFromText:{key:"w:leftFromText",value:void 0===u?void 0:(0, N.Jd)(u)},rightFromText:{key:"w:rightFromText",value:void 0===l?void 0:(0, N.Jd)(l)},topFromText:{key:"w:topFromText",value:void 0===c?void 0:(0, N.Jd)(c)},bottomFromText:{key:"w:bottomFromText",value:void 0===o?void 0:(0, N.Jd)(o)},absoluteHorizontalPosition:{key:"w:tblpX",value:void 0===r?void 0:(0, N.xb)(r)},absoluteVerticalPosition:{key:"w:tblpY",value:void 0===s?void 0:(0, N.xb)(s)},horizontalAnchor:{key:"w:horzAnchor",value:void 0===e?void 0:e},relativeHorizontalPosition:{key:"w:tblpXSpec",value:n},relativeVerticalPosition:{key:"w:tblpYSpec",value:i},verticalAnchor:{key:"w:vertAnchor",value:t}})),h&&this.root.push(new D("w:tblOverlap",h));}}!function(e){e.AUTOFIT="autofit",e.FIXED="fixed";}(ui||(ui={}));class mi extends o{constructor(){super(...arguments),this.xmlKeys={type:"w:type"};}}class wi extends s{constructor(e){super("w:tblLayout"),this.root.push(new mi({type:e}));}}class gi extends i{constructor(e){super("w:tblPr"),e.style&&this.root.push(new O("w:tblStyle",e.style)),e.float&&this.root.push(new fi(e.float)),void 0!==e.visuallyRightToLeft&&this.root.push(new R("w:bidiVisual",e.visuallyRightToLeft)),e.width&&this.root.push(new Ks("w:tblW",e.width)),e.alignment&&this.root.push(new M(e.alignment)),e.indent&&this.root.push(new Ks("w:tblInd",e.indent)),e.borders&&this.root.push(new si(e.borders)),e.shading&&this.root.push(new ee(e.shading)),e.layout&&this.root.push(new wi(e.layout)),e.cellMargin&&this.root.push(new Vs(zs.TABLE,e.cellMargin));}}class yi extends Vr{constructor({rows:e,width:t,columnWidths:r=Array(Math.max(...e.map((e=>e.CellCount)))).fill(100),margins:n,indent:s,float:i,layout:o,style:a,borders:c,alignment:u,visuallyRightToLeft:l}){super("w:tbl"),this.root.push(new gi({borders:null!=c?c:{},width:null!=t?t:{size:100},indent:s,float:i,layout:o,style:a,alignment:u,cellMargin:n,visuallyRightToLeft:l})),this.root.push(new Us(r));for(const t of e)this.root.push(t);e.forEach(((t,r)=>{if(r===e.length-1)return;let n=0;t.cells.forEach((t=>{if(t.options.rowSpan&&t.options.rowSpan>1){const s=new ti({rowSpan:t.options.rowSpan-1,columnSpan:t.options.columnSpan,borders:t.options.borders,children:[],verticalMerge:Ws.CONTINUE});e[r+1].addCellToColumnIndex(s,n);}n+=t.options.columnSpan||1;}));}));}}!function(e){e.AUTO="auto",e.ATLEAST="atLeast",e.EXACT="exact";}(li||(li={}));class bi extends o{constructor(){super(...arguments),this.xmlKeys={value:"w:val",rule:"w:hRule"};}}class vi extends s{constructor(e,t){super("w:trHeight"),this.root.push(new bi({value:(0, N.Jd)(e),rule:t}));}}class xi extends i{constructor(e){super("w:trPr"),void 0!==e.cantSplit&&this.root.push(new R("w:cantSplit",e.cantSplit)),void 0!==e.tableHeader&&this.root.push(new R("w:tblHeader",e.tableHeader)),e.height&&this.root.push(new vi(e.height.value,e.height.rule));}}class _i extends s{constructor(e){super("w:tr"),this.options=e,this.root.push(new xi(e));for(const t of e.children)this.root.push(t);}get CellCount(){return this.options.children.length}get cells(){return this.root.filter((e=>e instanceof ti))}addCellToIndex(e,t){this.root.splice(t+1,0,e);}addCellToColumnIndex(e,t){const r=this.columnIndexToRootIndex(t,!0);this.addCellToIndex(e,r-1);}rootIndexToColumnIndex(e){if(e<1||e>=this.root.length)throw new Error("cell 'rootIndex' should between 1 to "+(this.root.length-1));let t=0;for(let r=1;r<e;r++)t+=this.root[r].options.columnSpan||1;return t}columnIndexToRootIndex(e,t=!1){if(e<0)throw new Error("cell 'columnIndex' should not less than zero");let r=0,n=1;for(;r<=e;){if(n>=this.root.length){if(t)return this.root.length;throw new Error("cell 'columnIndex' should not great than "+(r-1))}const e=this.root[n];n+=1,r+=e&&e.options.columnSpan||1;}return n-1}}class Ei extends o{constructor(){super(...arguments),this.xmlKeys={xmlns:"xmlns",vt:"xmlns:vt"};}}class Ti extends s{constructor(){super("Properties"),this.root.push(new Ei({xmlns:"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"}));}}class Ai extends o{constructor(){super(...arguments),this.xmlKeys={xmlns:"xmlns"};}}class Si extends o{constructor(){super(...arguments),this.xmlKeys={contentType:"ContentType",extension:"Extension"};}}class Ii extends s{constructor(e,t){super("Default"),this.root.push(new Si({contentType:e,extension:t}));}}class Ni extends o{constructor(){super(...arguments),this.xmlKeys={contentType:"ContentType",partName:"PartName"};}}class Ri extends s{constructor(e,t){super("Override"),this.root.push(new Ni({contentType:e,partName:t}));}}class ki extends s{constructor(){super("Types"),this.root.push(new Ai({xmlns:"http://schemas.openxmlformats.org/package/2006/content-types"})),this.root.push(new Ii("image/png","png")),this.root.push(new Ii("image/jpeg","jpeg")),this.root.push(new Ii("image/jpeg","jpg")),this.root.push(new Ii("image/bmp","bmp")),this.root.push(new Ii("image/gif","gif")),this.root.push(new Ii("application/vnd.openxmlformats-package.relationships+xml","rels")),this.root.push(new Ii("application/xml","xml")),this.root.push(new Ri("application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml","/word/document.xml")),this.root.push(new Ri("application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml","/word/styles.xml")),this.root.push(new Ri("application/vnd.openxmlformats-package.core-properties+xml","/docProps/core.xml")),this.root.push(new Ri("application/vnd.openxmlformats-officedocument.custom-properties+xml","/docProps/custom.xml")),this.root.push(new Ri("application/vnd.openxmlformats-officedocument.extended-properties+xml","/docProps/app.xml")),this.root.push(new Ri("application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml","/word/numbering.xml")),this.root.push(new Ri("application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml","/word/footnotes.xml")),this.root.push(new Ri("application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml","/word/settings.xml")),this.root.push(new Ri("application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml","/word/comments.xml"));}addFooter(e){this.root.push(new Ri("application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",`/word/footer${e}.xml`));}addHeader(e){this.root.push(new Ri("application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml",`/word/header${e}.xml`));}}class Ci extends s{constructor(e){super("cp:coreProperties"),this.root.push(new Cn({cp:"http://schemas.openxmlformats.org/package/2006/metadata/core-properties",dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",xsi:"http://www.w3.org/2001/XMLSchema-instance"})),e.title&&this.root.push(new P("dc:title",e.title)),e.subject&&this.root.push(new P("dc:subject",e.subject)),e.creator&&this.root.push(new P("dc:creator",e.creator)),e.keywords&&this.root.push(new P("cp:keywords",e.keywords)),e.description&&this.root.push(new P("dc:description",e.description)),e.lastModifiedBy&&this.root.push(new P("cp:lastModifiedBy",e.lastModifiedBy)),e.revision&&this.root.push(new P("cp:revision",String(e.revision))),this.root.push(new Oi("dcterms:created")),this.root.push(new Oi("dcterms:modified"));}}class Oi extends s{constructor(e){super(e),this.root.push(new Cn({type:"dcterms:W3CDTF"})),this.root.push((0, N.sF)(new Date));}}class Li extends o{constructor(){super(...arguments),this.xmlKeys={xmlns:"xmlns",vt:"xmlns:vt"};}}class Di extends o{constructor(){super(...arguments),this.xmlKeys={fmtid:"fmtid",pid:"pid",name:"name"};}}class Pi extends s{constructor(e,t){super("property"),this.root.push(new Di({fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:e.toString(),name:t.name})),this.root.push(new Fi(t.value));}}class Fi extends s{constructor(e){super("vt:lpwstr"),this.root.push(e);}}class Bi extends s{constructor(e){super("Properties"),this.properties=[],this.root.push(new Li({xmlns:"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"})),this.nextId=2;for(const t of e)this.addCustomProperty(t);}prepForXml(e){return this.properties.forEach((e=>this.root.push(e))),super.prepForXml(e)}addCustomProperty(e){this.properties.push(new Pi(this.nextId++,e));}}class Mi extends o{constructor(){super(...arguments),this.xmlKeys={wpc:"xmlns:wpc",mc:"xmlns:mc",o:"xmlns:o",r:"xmlns:r",m:"xmlns:m",v:"xmlns:v",wp14:"xmlns:wp14",wp:"xmlns:wp",w10:"xmlns:w10",w:"xmlns:w",w14:"xmlns:w14",w15:"xmlns:w15",wpg:"xmlns:wpg",wpi:"xmlns:wpi",wne:"xmlns:wne",wps:"xmlns:wps",cp:"xmlns:cp",dc:"xmlns:dc",dcterms:"xmlns:dcterms",dcmitype:"xmlns:dcmitype",xsi:"xmlns:xsi",type:"xsi:type"};}}class Ui extends m{constructor(e,t){super("w:ftr",t),this.refId=e,t||this.root.push(new Mi({wpc:"http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",mc:"http://schemas.openxmlformats.org/markup-compatibility/2006",o:"urn:schemas-microsoft-com:office:office",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",m:"http://schemas.openxmlformats.org/officeDocument/2006/math",v:"urn:schemas-microsoft-com:vml",wp14:"http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",wp:"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",w10:"urn:schemas-microsoft-com:office:word",w:"http://schemas.openxmlformats.org/wordprocessingml/2006/main",w14:"http://schemas.microsoft.com/office/word/2010/wordml",w15:"http://schemas.microsoft.com/office/word/2012/wordml",wpg:"http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",wpi:"http://schemas.microsoft.com/office/word/2010/wordprocessingInk",wne:"http://schemas.microsoft.com/office/word/2006/wordml",wps:"http://schemas.microsoft.com/office/word/2010/wordprocessingShape"}));}get ReferenceId(){return this.refId}add(e){this.root.push(e);}}class Hi{constructor(e,t,r){this.media=e,this.footer=new Ui(t,r),this.relationships=new Fn;}add(e){this.footer.add(e);}addChildElement(e){this.footer.addChildElement(e);}get View(){return this.footer}get Relationships(){return this.relationships}get Media(){return this.media}}class ji extends o{constructor(){super(...arguments),this.xmlKeys={type:"w:type",id:"w:id"};}}class zi extends s{constructor(){super("w:footnoteRef");}}class Wi extends ye{constructor(){super({style:"FootnoteReference"}),this.root.push(new zi);}}!function(e){e.SEPERATOR="separator",e.CONTINUATION_SEPERATOR="continuationSeparator";}(hi||(hi={}));class Gi extends s{constructor(e){super("w:footnote"),this.root.push(new ji({type:e.type,id:e.id}));for(let t=0;t<e.children.length;t++){const r=e.children[t];0===t&&r.addRunToFront(new Wi),this.root.push(r);}}}class Ki extends s{constructor(){super("w:continuationSeparator");}}class Vi extends ye{constructor(){super({}),this.root.push(new Ki);}}class qi extends s{constructor(){super("w:separator");}}class Xi extends ye{constructor(){super({}),this.root.push(new qi);}}class $i extends o{constructor(){super(...arguments),this.xmlKeys={wpc:"xmlns:wpc",mc:"xmlns:mc",o:"xmlns:o",r:"xmlns:r",m:"xmlns:m",v:"xmlns:v",wp14:"xmlns:wp14",wp:"xmlns:wp",w10:"xmlns:w10",w:"xmlns:w",w14:"xmlns:w14",w15:"xmlns:w15",wpg:"xmlns:wpg",wpi:"xmlns:wpi",wne:"xmlns:wne",wps:"xmlns:wps",Ignorable:"mc:Ignorable"};}}class Zi extends s{constructor(){super("w:footnotes"),this.root.push(new $i({wpc:"http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",mc:"http://schemas.openxmlformats.org/markup-compatibility/2006",o:"urn:schemas-microsoft-com:office:office",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",m:"http://schemas.openxmlformats.org/officeDocument/2006/math",v:"urn:schemas-microsoft-com:vml",wp14:"http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",wp:"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",w10:"urn:schemas-microsoft-com:office:word",w:"http://schemas.openxmlformats.org/wordprocessingml/2006/main",w14:"http://schemas.microsoft.com/office/word/2010/wordml",w15:"http://schemas.microsoft.com/office/word/2012/wordml",wpg:"http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",wpi:"http://schemas.microsoft.com/office/word/2010/wordprocessingInk",wne:"http://schemas.microsoft.com/office/word/2006/wordml",wps:"http://schemas.microsoft.com/office/word/2010/wordprocessingShape",Ignorable:"w14 w15 wp14"}));const e=new Gi({id:-1,type:hi.SEPERATOR,children:[new Vn({spacing:{after:0,line:240,lineRule:wt.AUTO},children:[new Xi]})]});this.root.push(e);const t=new Gi({id:0,type:hi.CONTINUATION_SEPERATOR,children:[new Vn({spacing:{after:0,line:240,lineRule:wt.AUTO},children:[new Vi]})]});this.root.push(t);}createFootNote(e,t){const r=new Gi({id:e,children:t});this.root.push(r);}}class Yi{constructor(){this.footnotess=new Zi,this.relationships=new Fn;}get View(){return this.footnotess}get Relationships(){return this.relationships}}class Ji extends o{constructor(){super(...arguments),this.xmlKeys={wpc:"xmlns:wpc",mc:"xmlns:mc",o:"xmlns:o",r:"xmlns:r",m:"xmlns:m",v:"xmlns:v",wp14:"xmlns:wp14",wp:"xmlns:wp",w10:"xmlns:w10",w:"xmlns:w",w14:"xmlns:w14",w15:"xmlns:w15",wpg:"xmlns:wpg",wpi:"xmlns:wpi",wne:"xmlns:wne",wps:"xmlns:wps",cp:"xmlns:cp",dc:"xmlns:dc",dcterms:"xmlns:dcterms",dcmitype:"xmlns:dcmitype",xsi:"xmlns:xsi",type:"xsi:type",cx:"xmlns:cx",cx1:"xmlns:cx1",cx2:"xmlns:cx2",cx3:"xmlns:cx3",cx4:"xmlns:cx4",cx5:"xmlns:cx5",cx6:"xmlns:cx6",cx7:"xmlns:cx7",cx8:"xmlns:cx8",w16cid:"xmlns:w16cid",w16se:"xmlns:w16se"};}}class Qi extends m{constructor(e,t){super("w:hdr",t),this.refId=e,t||this.root.push(new Ji({wpc:"http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",mc:"http://schemas.openxmlformats.org/markup-compatibility/2006",o:"urn:schemas-microsoft-com:office:office",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",m:"http://schemas.openxmlformats.org/officeDocument/2006/math",v:"urn:schemas-microsoft-com:vml",wp14:"http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",wp:"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",w10:"urn:schemas-microsoft-com:office:word",w:"http://schemas.openxmlformats.org/wordprocessingml/2006/main",w14:"http://schemas.microsoft.com/office/word/2010/wordml",w15:"http://schemas.microsoft.com/office/word/2012/wordml",wpg:"http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",wpi:"http://schemas.microsoft.com/office/word/2010/wordprocessingInk",wne:"http://schemas.microsoft.com/office/word/2006/wordml",wps:"http://schemas.microsoft.com/office/word/2010/wordprocessingShape",cx:"http://schemas.microsoft.com/office/drawing/2014/chartex",cx1:"http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",cx2:"http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",cx3:"http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",cx4:"http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",cx5:"http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",cx6:"http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",cx7:"http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",cx8:"http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",w16cid:"http://schemas.microsoft.com/office/word/2016/wordml/cid",w16se:"http://schemas.microsoft.com/office/word/2015/wordml/symex"}));}get ReferenceId(){return this.refId}add(e){this.root.push(e);}}class eo{constructor(e,t,r){this.media=e,this.header=new Qi(t,r),this.relationships=new Fn;}add(e){return this.header.add(e),this}addChildElement(e){this.header.addChildElement(e);}get View(){return this.header}get Relationships(){return this.relationships}get Media(){return this.media}}class to{constructor(){this.map=new Map;}addImage(e,t){this.map.set(e,t);}get Array(){return Array.from(this.map.values())}}!function(e){e.DECIMAL="decimal",e.UPPER_ROMAN="upperRoman",e.LOWER_ROMAN="lowerRoman",e.UPPER_LETTER="upperLetter",e.LOWER_LETTER="lowerLetter",e.ORDINAL="ordinal",e.CARDINAL_TEXT="cardinalText",e.ORDINAL_TEXT="ordinalText",e.HEX="hex",e.CHICAGO="chicago",e.IDEOGRAPH__DIGITAL="ideographDigital",e.JAPANESE_COUNTING="japaneseCounting",e.AIUEO="aiueo",e.IROHA="iroha",e.DECIMAL_FULL_WIDTH="decimalFullWidth",e.DECIMAL_HALF_WIDTH="decimalHalfWidth",e.JAPANESE_LEGAL="japaneseLegal",e.JAPANESE_DIGITAL_TEN_THOUSAND="japaneseDigitalTenThousand",e.DECIMAL_ENCLOSED_CIRCLE="decimalEnclosedCircle",e.DECIMAL_FULL_WIDTH2="decimalFullWidth2",e.AIUEO_FULL_WIDTH="aiueoFullWidth",e.IROHA_FULL_WIDTH="irohaFullWidth",e.DECIMAL_ZERO="decimalZero",e.BULLET="bullet",e.GANADA="ganada",e.CHOSUNG="chosung",e.DECIMAL_ENCLOSED_FULLSTOP="decimalEnclosedFullstop",e.DECIMAL_ENCLOSED_PARENTHESES="decimalEnclosedParen",e.DECIMAL_ENCLOSED_CIRCLE_CHINESE="decimalEnclosedCircleChinese",e.IDEOGRAPH_ENCLOSED_CIRCLE="ideographEnclosedCircle",e.IDEOGRAPH_TRADITIONAL="ideographTraditional",e.IDEOGRAPH_ZODIAC="ideographZodiac",e.IDEOGRAPH_ZODIAC_TRADITIONAL="ideographZodiacTraditional",e.TAIWANESE_COUNTING="taiwaneseCounting",e.IDEOGRAPH_LEGAL_TRADITIONAL="ideographLegalTraditional",e.TAIWANESE_COUNTING_THOUSAND="taiwaneseCountingThousand",e.TAIWANESE_DIGITAL="taiwaneseDigital",e.CHINESE_COUNTING="chineseCounting",e.CHINESE_LEGAL_SIMPLIFIED="chineseLegalSimplified",e.CHINESE_COUNTING_THOUSAND="chineseCountingThousand",e.KOREAN_DIGITAL="koreanDigital",e.KOREAN_COUNTING="koreanCounting",e.KOREAN_LEGAL="koreanLegal",e.KOREAN_DIGITAL2="koreanDigital2",e.VIETNAMESE_COUNTING="vietnameseCounting",e.RUSSIAN_LOWER="russianLower",e.RUSSIAN_UPPER="russianUpper",e.NONE="none",e.NUMBER_IN_DASH="numberInDash",e.HEBREW1="hebrew1",e.HEBREW2="hebrew2",e.ARABIC_ALPHA="arabicAlpha",e.ARABIC_ABJAD="arabicAbjad",e.HINDI_VOWELS="hindiVowels",e.HINDI_CONSONANTS="hindiConsonants",e.HINDI_NUMBERS="hindiNumbers",e.HINDI_COUNTING="hindiCounting",e.THAI_LETTERS="thaiLetters",e.THAI_NUMBERS="thaiNumbers",e.THAI_COUNTING="thaiCounting",e.BAHT_TEXT="bahtText",e.DOLLAR_TEXT="dollarText",e.CUSTOM="custom";}(pi||(pi={}));class ro extends o{constructor(){super(...arguments),this.xmlKeys={ilvl:"w:ilvl",tentative:"w15:tentative"};}}class no extends s{constructor(e){super("w:numFmt"),this.root.push(new c({val:e}));}}class so extends s{constructor(e){super("w:lvlText"),this.root.push(new c({val:e}));}}class io extends s{constructor(e){super("w:lvlJc"),this.root.push(new c({val:e}));}}!function(e){e.NOTHING="nothing",e.SPACE="space",e.TAB="tab";}(di||(di={}));class oo extends s{constructor(e){super("w:suff"),this.root.push(new c({val:e}));}}class ao extends s{constructor(){super("w:isLgl");}}class co extends s{constructor({level:e,format:t,text:r,alignment:n=w.START,start:s=1,style:i,suffix:o,isLegalNumberingStyle:a}){if(super("w:lvl"),this.root.push(new L("w:start",(0, N.vH)(s))),t&&this.root.push(new no(t)),o&&this.root.push(new oo(o)),a&&this.root.push(new ao),r&&this.root.push(new so(r)),this.root.push(new io(n)),this.paragraphProperties=new Kn(i&&i.paragraph),this.runProperties=new me(i&&i.run),this.root.push(this.paragraphProperties),this.root.push(this.runProperties),e>9)throw new Error("Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7");this.root.push(new ro({ilvl:(0, N.vH)(e),tentative:1}));}}class uo extends co{}class lo extends co{}class ho extends s{constructor(e){super("w:multiLevelType"),this.root.push(new c({val:e}));}}class po extends o{constructor(){super(...arguments),this.xmlKeys={abstractNumId:"w:abstractNumId",restartNumberingAfterBreak:"w15:restartNumberingAfterBreak"};}}class fo extends s{constructor(e,t){super("w:abstractNum"),this.root.push(new po({abstractNumId:(0, N.vH)(e),restartNumberingAfterBreak:0})),this.root.push(new ho("hybridMultilevel")),this.id=e;for(const e of t)this.root.push(new uo(e));}}class mo extends s{constructor(e){super("w:abstractNumId"),this.root.push(new c({val:e}));}}class wo extends o{constructor(){super(...arguments),this.xmlKeys={numId:"w:numId"};}}class go extends s{constructor(e){if(super("w:num"),this.numId=e.numId,this.reference=e.reference,this.instance=e.instance,this.root.push(new wo({numId:(0, N.vH)(e.numId)})),this.root.push(new mo((0, N.vH)(e.abstractNumId))),e.overrideLevels&&e.overrideLevels.length)for(const t of e.overrideLevels)this.root.push(new bo(t.num,t.start));}}class yo extends o{constructor(){super(...arguments),this.xmlKeys={ilvl:"w:ilvl"};}}class bo extends s{constructor(e,t){super("w:lvlOverride"),this.root.push(new yo({ilvl:e})),void 0!==t&&this.root.push(new xo(t));}}class vo extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class xo extends s{constructor(e){super("w:startOverride"),this.root.push(new vo({val:e}));}}class _o extends s{constructor(e){super("w:numbering"),this.abstractNumberingMap=new Map,this.concreteNumberingMap=new Map,this.referenceConfigMap=new Map,this.abstractNumUniqueNumericId=(0, Ae.uw)(),this.concreteNumUniqueNumericId=(0, Ae.fF)(),this.root.push(new Cn({wpc:"http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",mc:"http://schemas.openxmlformats.org/markup-compatibility/2006",o:"urn:schemas-microsoft-com:office:office",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",m:"http://schemas.openxmlformats.org/officeDocument/2006/math",v:"urn:schemas-microsoft-com:vml",wp14:"http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",wp:"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",w10:"urn:schemas-microsoft-com:office:word",w:"http://schemas.openxmlformats.org/wordprocessingml/2006/main",w14:"http://schemas.microsoft.com/office/word/2010/wordml",w15:"http://schemas.microsoft.com/office/word/2012/wordml",wpg:"http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",wpi:"http://schemas.microsoft.com/office/word/2010/wordprocessingInk",wne:"http://schemas.microsoft.com/office/word/2006/wordml",wps:"http://schemas.microsoft.com/office/word/2010/wordprocessingShape",Ignorable:"w14 w15 wp14"}));const t=new fo(this.abstractNumUniqueNumericId(),[{level:0,format:pi.BULLET,text:"●",alignment:w.LEFT,style:{paragraph:{indent:{left:(0, Ae.vw)(.5),hanging:(0, Ae.vw)(.25)}}}},{level:1,format:pi.BULLET,text:"○",alignment:w.LEFT,style:{paragraph:{indent:{left:(0, Ae.vw)(1),hanging:(0, Ae.vw)(.25)}}}},{level:2,format:pi.BULLET,text:"■",alignment:w.LEFT,style:{paragraph:{indent:{left:2160,hanging:(0, Ae.vw)(.25)}}}},{level:3,format:pi.BULLET,text:"●",alignment:w.LEFT,style:{paragraph:{indent:{left:2880,hanging:(0, Ae.vw)(.25)}}}},{level:4,format:pi.BULLET,text:"○",alignment:w.LEFT,style:{paragraph:{indent:{left:3600,hanging:(0, Ae.vw)(.25)}}}},{level:5,format:pi.BULLET,text:"■",alignment:w.LEFT,style:{paragraph:{indent:{left:4320,hanging:(0, Ae.vw)(.25)}}}},{level:6,format:pi.BULLET,text:"●",alignment:w.LEFT,style:{paragraph:{indent:{left:5040,hanging:(0, Ae.vw)(.25)}}}},{level:7,format:pi.BULLET,text:"●",alignment:w.LEFT,style:{paragraph:{indent:{left:5760,hanging:(0, Ae.vw)(.25)}}}},{level:8,format:pi.BULLET,text:"●",alignment:w.LEFT,style:{paragraph:{indent:{left:6480,hanging:(0, Ae.vw)(.25)}}}}]);this.concreteNumberingMap.set("default-bullet-numbering",new go({numId:1,abstractNumId:t.id,reference:"default-bullet-numbering",instance:0,overrideLevels:[{num:0,start:1}]})),this.abstractNumberingMap.set("default-bullet-numbering",t);for(const t of e.config)this.abstractNumberingMap.set(t.reference,new fo(this.abstractNumUniqueNumericId(),t.levels)),this.referenceConfigMap.set(t.reference,t.levels);}prepForXml(e){for(const e of this.abstractNumberingMap.values())this.root.push(e);for(const e of this.concreteNumberingMap.values())this.root.push(e);return super.prepForXml(e)}createConcreteNumberingInstance(e,t){const r=this.abstractNumberingMap.get(e);if(!r)return;const n=`${e}-${t}`;if(this.concreteNumberingMap.has(n))return;const s=this.referenceConfigMap.get(e),i=s&&s[0].start,o={numId:this.concreteNumUniqueNumericId(),abstractNumId:r.id,reference:e,instance:t,overrideLevel:i&&Number.isInteger(i)?{num:0,start:i}:{num:0,start:1}};this.concreteNumberingMap.set(n,new go(o));}get ConcreteNumbering(){return Array.from(this.concreteNumberingMap.values())}get ReferenceConfig(){return Array.from(this.referenceConfigMap.values())}}class Eo extends o{constructor(){super(...arguments),this.xmlKeys={version:"w:val",name:"w:name",uri:"w:uri"};}}class To extends s{constructor(e){super("w:compatSetting"),this.root.push(new Eo({version:e,uri:"http://schemas.microsoft.com/office/word",name:"compatibilityMode"}));}}class Ao extends s{constructor(e){super("w:compat"),e.version&&this.root.push(new To(e.version)),e.useSingleBorderforContiguousCells&&this.root.push(new R("w:useSingleBorderforContiguousCells",e.useSingleBorderforContiguousCells)),e.wordPerfectJustification&&this.root.push(new R("w:wpJustification",e.wordPerfectJustification)),e.noTabStopForHangingIndent&&this.root.push(new R("w:noTabHangInd",e.noTabStopForHangingIndent)),e.noLeading&&this.root.push(new R("w:noLeading",e.noLeading)),e.spaceForUnderline&&this.root.push(new R("w:spaceForUL",e.spaceForUnderline)),e.noColumnBalance&&this.root.push(new R("w:noColumnBalance",e.noColumnBalance)),e.balanceSingleByteDoubleByteWidth&&this.root.push(new R("w:balanceSingleByteDoubleByteWidth",e.balanceSingleByteDoubleByteWidth)),e.noExtraLineSpacing&&this.root.push(new R("w:noExtraLineSpacing",e.noExtraLineSpacing)),e.doNotLeaveBackslashAlone&&this.root.push(new R("w:doNotLeaveBackslashAlone",e.doNotLeaveBackslashAlone)),e.underlineTrailingSpaces&&this.root.push(new R("w:ulTrailSpace",e.underlineTrailingSpaces)),e.doNotExpandShiftReturn&&this.root.push(new R("w:doNotExpandShiftReturn",e.doNotExpandShiftReturn)),e.spacingInWholePoints&&this.root.push(new R("w:spacingInWholePoints",e.spacingInWholePoints)),e.lineWrapLikeWord6&&this.root.push(new R("w:lineWrapLikeWord6",e.lineWrapLikeWord6)),e.printBodyTextBeforeHeader&&this.root.push(new R("w:printBodyTextBeforeHeader",e.printBodyTextBeforeHeader)),e.printColorsBlack&&this.root.push(new R("w:printColBlack",e.printColorsBlack)),e.spaceWidth&&this.root.push(new R("w:wpSpaceWidth",e.spaceWidth)),e.showBreaksInFrames&&this.root.push(new R("w:showBreaksInFrames",e.showBreaksInFrames)),e.subFontBySize&&this.root.push(new R("w:subFontBySize",e.subFontBySize)),e.suppressBottomSpacing&&this.root.push(new R("w:suppressBottomSpacing",e.suppressBottomSpacing)),e.suppressTopSpacing&&this.root.push(new R("w:suppressTopSpacing",e.suppressTopSpacing)),e.suppressSpacingAtTopOfPage&&this.root.push(new R("w:suppressSpacingAtTopOfPage",e.suppressSpacingAtTopOfPage)),e.suppressTopSpacingWP&&this.root.push(new R("w:suppressTopSpacingWP",e.suppressTopSpacingWP)),e.suppressSpBfAfterPgBrk&&this.root.push(new R("w:suppressSpBfAfterPgBrk",e.suppressSpBfAfterPgBrk)),e.swapBordersFacingPages&&this.root.push(new R("w:swapBordersFacingPages",e.swapBordersFacingPages)),e.convertMailMergeEsc&&this.root.push(new R("w:convMailMergeEsc",e.convertMailMergeEsc)),e.truncateFontHeightsLikeWP6&&this.root.push(new R("w:truncateFontHeightsLikeWP6",e.truncateFontHeightsLikeWP6)),e.macWordSmallCaps&&this.root.push(new R("w:mwSmallCaps",e.macWordSmallCaps)),e.usePrinterMetrics&&this.root.push(new R("w:usePrinterMetrics",e.usePrinterMetrics)),e.doNotSuppressParagraphBorders&&this.root.push(new R("w:doNotSuppressParagraphBorders",e.doNotSuppressParagraphBorders)),e.wrapTrailSpaces&&this.root.push(new R("w:wrapTrailSpaces",e.wrapTrailSpaces)),e.footnoteLayoutLikeWW8&&this.root.push(new R("w:footnoteLayoutLikeWW8",e.footnoteLayoutLikeWW8)),e.shapeLayoutLikeWW8&&this.root.push(new R("w:shapeLayoutLikeWW8",e.shapeLayoutLikeWW8)),e.alignTablesRowByRow&&this.root.push(new R("w:alignTablesRowByRow",e.alignTablesRowByRow)),e.forgetLastTabAlignment&&this.root.push(new R("w:forgetLastTabAlignment",e.forgetLastTabAlignment)),e.adjustLineHeightInTable&&this.root.push(new R("w:adjustLineHeightInTable",e.adjustLineHeightInTable)),e.autoSpaceLikeWord95&&this.root.push(new R("w:autoSpaceLikeWord95",e.autoSpaceLikeWord95)),e.noSpaceRaiseLower&&this.root.push(new R("w:noSpaceRaiseLower",e.noSpaceRaiseLower)),e.doNotUseHTMLParagraphAutoSpacing&&this.root.push(new R("w:doNotUseHTMLParagraphAutoSpacing",e.doNotUseHTMLParagraphAutoSpacing)),e.layoutRawTableWidth&&this.root.push(new R("w:layoutRawTableWidth",e.layoutRawTableWidth)),e.layoutTableRowsApart&&this.root.push(new R("w:layoutTableRowsApart",e.layoutTableRowsApart)),e.useWord97LineBreakRules&&this.root.push(new R("w:useWord97LineBreakRules",e.useWord97LineBreakRules)),e.doNotBreakWrappedTables&&this.root.push(new R("w:doNotBreakWrappedTables",e.doNotBreakWrappedTables)),e.doNotSnapToGridInCell&&this.root.push(new R("w:doNotSnapToGridInCell",e.doNotSnapToGridInCell)),e.selectFieldWithFirstOrLastCharacter&&this.root.push(new R("w:selectFldWithFirstOrLastChar",e.selectFieldWithFirstOrLastCharacter)),e.applyBreakingRules&&this.root.push(new R("w:applyBreakingRules",e.applyBreakingRules)),e.doNotWrapTextWithPunctuation&&this.root.push(new R("w:doNotWrapTextWithPunct",e.doNotWrapTextWithPunctuation)),e.doNotUseEastAsianBreakRules&&this.root.push(new R("w:doNotUseEastAsianBreakRules",e.doNotUseEastAsianBreakRules)),e.useWord2002TableStyleRules&&this.root.push(new R("w:useWord2002TableStyleRules",e.useWord2002TableStyleRules)),e.growAutofit&&this.root.push(new R("w:growAutofit",e.growAutofit)),e.useFELayout&&this.root.push(new R("w:useFELayout",e.useFELayout)),e.useNormalStyleForList&&this.root.push(new R("w:useNormalStyleForList",e.useNormalStyleForList)),e.doNotUseIndentAsNumberingTabStop&&this.root.push(new R("w:doNotUseIndentAsNumberingTabStop",e.doNotUseIndentAsNumberingTabStop)),e.useAlternateEastAsianLineBreakRules&&this.root.push(new R("w:useAltKinsokuLineBreakRules",e.useAlternateEastAsianLineBreakRules)),e.allowSpaceOfSameStyleInTable&&this.root.push(new R("w:allowSpaceOfSameStyleInTable",e.allowSpaceOfSameStyleInTable)),e.doNotSuppressIndentation&&this.root.push(new R("w:doNotSuppressIndentation",e.doNotSuppressIndentation)),e.doNotAutofitConstrainedTables&&this.root.push(new R("w:doNotAutofitConstrainedTables",e.doNotAutofitConstrainedTables)),e.autofitToFirstFixedWidthCell&&this.root.push(new R("w:autofitToFirstFixedWidthCell",e.autofitToFirstFixedWidthCell)),e.underlineTabInNumberingList&&this.root.push(new R("w:underlineTabInNumList",e.underlineTabInNumberingList)),e.displayHangulFixedWidth&&this.root.push(new R("w:displayHangulFixedWidth",e.displayHangulFixedWidth)),e.splitPgBreakAndParaMark&&this.root.push(new R("w:splitPgBreakAndParaMark",e.splitPgBreakAndParaMark)),e.doNotVerticallyAlignCellWithSp&&this.root.push(new R("w:doNotVertAlignCellWithSp",e.doNotVerticallyAlignCellWithSp)),e.doNotBreakConstrainedForcedTable&&this.root.push(new R("w:doNotBreakConstrainedForcedTable",e.doNotBreakConstrainedForcedTable)),e.ignoreVerticalAlignmentInTextboxes&&this.root.push(new R("w:doNotVertAlignInTxbx",e.ignoreVerticalAlignmentInTextboxes)),e.useAnsiKerningPairs&&this.root.push(new R("w:useAnsiKerningPairs",e.useAnsiKerningPairs)),e.cachedColumnBalance&&this.root.push(new R("w:cachedColBalance",e.cachedColumnBalance));}}class So extends o{constructor(){super(...arguments),this.xmlKeys={wpc:"xmlns:wpc",mc:"xmlns:mc",o:"xmlns:o",r:"xmlns:r",m:"xmlns:m",v:"xmlns:v",wp14:"xmlns:wp14",wp:"xmlns:wp",w10:"xmlns:w10",w:"xmlns:w",w14:"xmlns:w14",w15:"xmlns:w15",wpg:"xmlns:wpg",wpi:"xmlns:wpi",wne:"xmlns:wne",wps:"xmlns:wps",Ignorable:"mc:Ignorable"};}}class Io extends s{constructor(e){var t,r,n,s;super("w:settings"),this.root.push(new So({wpc:"http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",mc:"http://schemas.openxmlformats.org/markup-compatibility/2006",o:"urn:schemas-microsoft-com:office:office",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",m:"http://schemas.openxmlformats.org/officeDocument/2006/math",v:"urn:schemas-microsoft-com:vml",wp14:"http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",wp:"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",w10:"urn:schemas-microsoft-com:office:word",w:"http://schemas.openxmlformats.org/wordprocessingml/2006/main",w14:"http://schemas.microsoft.com/office/word/2010/wordml",w15:"http://schemas.microsoft.com/office/word/2012/wordml",wpg:"http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",wpi:"http://schemas.microsoft.com/office/word/2010/wordprocessingInk",wne:"http://schemas.microsoft.com/office/word/2006/wordml",wps:"http://schemas.microsoft.com/office/word/2010/wordprocessingShape",Ignorable:"w14 w15 wp14"})),this.root.push(new R("w:displayBackgroundShape",!0)),void 0!==e.trackRevisions&&this.root.push(new R("w:trackRevisions",e.trackRevisions)),void 0!==e.evenAndOddHeaders&&this.root.push(new R("w:evenAndOddHeaders",e.evenAndOddHeaders)),void 0!==e.updateFields&&this.root.push(new R("w:updateFields",e.updateFields)),this.root.push(new Ao(Object.assign(Object.assign({},null!==(t=e.compatibility)&&void 0!==t?t:{}),{version:null!==(s=null!==(n=null===(r=e.compatibility)||void 0===r?void 0:r.version)&&void 0!==n?n:e.compatibilityModeVersion)&&void 0!==s?s:15})));}}class No extends o{constructor(){super(...arguments),this.xmlKeys={val:"w:val"};}}class Ro extends s{constructor(e){super("w:name"),this.root.push(new No({val:e}));}}class ko extends s{constructor(e){super("w:uiPriority"),this.root.push(new No({val:(0, N.vH)(e)}));}}class Co extends o{constructor(){super(...arguments),this.xmlKeys={type:"w:type",styleId:"w:styleId",default:"w:default",customStyle:"w:customStyle"};}}class Oo extends s{constructor(e,t){super("w:style"),this.root.push(new Co(e)),t.name&&this.root.push(new Ro(t.name)),t.basedOn&&this.root.push(new O("w:basedOn",t.basedOn)),t.next&&this.root.push(new O("w:next",t.next)),t.link&&this.root.push(new O("w:link",t.link)),void 0!==t.uiPriority&&this.root.push(new ko(t.uiPriority)),void 0!==t.semiHidden&&this.root.push(new R("w:semiHidden",t.semiHidden)),void 0!==t.unhideWhenUsed&&this.root.push(new R("w:unhideWhenUsed",t.unhideWhenUsed)),void 0!==t.quickFormat&&this.root.push(new R("w:qFormat",t.quickFormat));}}class Lo extends Oo{constructor(e){super({type:"paragraph",styleId:e.id},e),this.paragraphProperties=new Kn(e.paragraph),this.runProperties=new me(e.run),this.root.push(this.paragraphProperties),this.root.push(this.runProperties);}}class Do extends Oo{constructor(e){super({type:"character",styleId:e.id},Object.assign({uiPriority:99,unhideWhenUsed:!0},e)),this.runProperties=new me(e.run),this.root.push(this.runProperties);}}class Po extends Lo{constructor(e){super(Object.assign(Object.assign({},e),{basedOn:"Normal",next:"Normal",quickFormat:!0}));}}class Fo extends Po{constructor(e){super(Object.assign(Object.assign({},e),{id:"Title",name:"Title"}));}}class Bo extends Po{constructor(e){super(Object.assign(Object.assign({},e),{id:"Heading1",name:"Heading 1"}));}}class Mo extends Po{constructor(e){super(Object.assign(Object.assign({},e),{id:"Heading2",name:"Heading 2"}));}}class Uo extends Po{constructor(e){super(Object.assign(Object.assign({},e),{id:"Heading3",name:"Heading 3"}));}}class Ho extends Po{constructor(e){super(Object.assign(Object.assign({},e),{id:"Heading4",name:"Heading 4"}));}}class jo extends Po{constructor(e){super(Object.assign(Object.assign({},e),{id:"Heading5",name:"Heading 5"}));}}class zo extends Po{constructor(e){super(Object.assign(Object.assign({},e),{id:"Heading6",name:"Heading 6"}));}}class Wo extends Po{constructor(e){super(Object.assign(Object.assign({},e),{id:"Strong",name:"Strong"}));}}class Go extends Lo{constructor(e){super(Object.assign(Object.assign({},e),{id:"ListParagraph",name:"List Paragraph",basedOn:"Normal",quickFormat:!0}));}}class Ko extends Lo{constructor(e){super(Object.assign(Object.assign({},e),{id:"FootnoteText",name:"footnote text",link:"FootnoteTextChar",basedOn:"Normal",uiPriority:99,semiHidden:!0,unhideWhenUsed:!0,paragraph:{spacing:{after:0,line:240,lineRule:wt.AUTO}},run:{size:20}}));}}class Vo extends Do{constructor(e){super(Object.assign(Object.assign({},e),{id:"FootnoteReference",name:"footnote reference",basedOn:"DefaultParagraphFont",semiHidden:!0,run:{superScript:!0}}));}}class qo extends Do{constructor(e){super(Object.assign(Object.assign({},e),{id:"FootnoteTextChar",name:"Footnote Text Char",basedOn:"DefaultParagraphFont",link:"FootnoteText",semiHidden:!0,run:{size:20}}));}}class Xo extends Do{constructor(e){super(Object.assign(Object.assign({},e),{id:"Hyperlink",name:"Hyperlink",basedOn:"DefaultParagraphFont",run:{color:"0563C1",underline:{type:A.SINGLE}}}));}}class $o extends s{constructor(e){if(super("w:styles"),e.initialStyles&&this.root.push(e.initialStyles),e.importedStyles)for(const t of e.importedStyles)this.root.push(t);if(e.paragraphStyles)for(const t of e.paragraphStyles)this.root.push(new Lo(t));if(e.characterStyles)for(const t of e.characterStyles)this.root.push(new Do(t));}}class Zo extends s{constructor(e){super("w:pPrDefault"),this.root.push(new Kn(e));}}class Yo extends s{constructor(e){super("w:rPrDefault"),this.root.push(new me(e));}}class Jo extends s{constructor(e){super("w:docDefaults"),this.runPropertiesDefaults=new Yo(e.run),this.paragraphPropertiesDefaults=new Zo(e.paragraph),this.root.push(this.runPropertiesDefaults),this.root.push(this.paragraphPropertiesDefaults);}}class Qo{newInstance(e){const t=(0, u.xml2js)(e,{compact:!1});let r;for(const e of t.elements||[])"w:styles"===e.name&&(r=e);if(void 0===r)throw new Error("can not find styles element");const n=r.elements||[];return new $o({initialStyles:new d(r.attributes),importedStyles:n.map((e=>l(e)))})}}class ea{newInstance(e={}){var t;return {initialStyles:new Cn({mc:"http://schemas.openxmlformats.org/markup-compatibility/2006",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",w:"http://schemas.openxmlformats.org/wordprocessingml/2006/main",w14:"http://schemas.microsoft.com/office/word/2010/wordml",w15:"http://schemas.microsoft.com/office/word/2012/wordml",Ignorable:"w14 w15"}),importedStyles:[new Jo(null!==(t=e.document)&&void 0!==t?t:{}),new Fo(Object.assign({run:{size:56}},e.title)),new Bo(Object.assign({run:{color:"2E74B5",size:32}},e.heading1)),new Mo(Object.assign({run:{color:"2E74B5",size:26}},e.heading2)),new Uo(Object.assign({run:{color:"1F4D78",size:24}},e.heading3)),new Ho(Object.assign({run:{color:"2E74B5",italics:!0}},e.heading4)),new jo(Object.assign({run:{color:"2E74B5"}},e.heading5)),new zo(Object.assign({run:{color:"1F4D78"}},e.heading6)),new Wo(Object.assign({run:{bold:!0}},e.strong)),new Go(e.listParagraph||{}),new Xo(e.hyperlink||{}),new Vo(e.footnoteReference||{}),new Ko(e.footnoteText||{}),new qo(e.footnoteTextChar||{})]}}}class ta{constructor(e){var t,r,n,s,i,o,a;if(this.currentRelationshipId=1,this.headers=[],this.footers=[],this.coreProperties=new Ci(Object.assign(Object.assign({},e),{creator:null!==(t=e.creator)&&void 0!==t?t:"Un-named",revision:null!==(r=e.revision)&&void 0!==r?r:1,lastModifiedBy:null!==(n=e.lastModifiedBy)&&void 0!==n?n:"Un-named"})),this.numbering=new _o(e.numbering?e.numbering:{config:[]}),this.comments=new fr(null!==(s=e.comments)&&void 0!==s?s:{children:[]}),this.fileRelationships=new Fn,this.customProperties=new Bi(null!==(i=e.customProperties)&&void 0!==i?i:[]),this.appProperties=new Ti,this.footnotesWrapper=new Yi,this.contentTypes=new ki,this.documentWrapper=new Bn({background:e.background}),this.settings=new Io({compatibilityModeVersion:e.compatabilityModeVersion,compatibility:e.compatibility,evenAndOddHeaders:!!e.evenAndOddHeaderAndFooters,trackRevisions:null===(o=e.features)||void 0===o?void 0:o.trackRevisions,updateFields:null===(a=e.features)||void 0===a?void 0:a.updateFields}),this.media=new to,e.externalStyles){const t=new Qo;this.styles=t.newInstance(e.externalStyles);}else if(e.styles){const t=(new ea).newInstance(e.styles.default);this.styles=new $o(Object.assign(Object.assign({},t),e.styles));}else {const e=new ea;this.styles=new $o(e.newInstance());}this.addDefaultRelationships();for(const t of e.sections)this.addSection(t);if(e.footnotes)for(const t in e.footnotes)this.footnotesWrapper.View.createFootNote(parseFloat(t),e.footnotes[t].children);}addSection({headers:e={},footers:t={},children:r,properties:n}){this.documentWrapper.View.Body.addSection(Object.assign(Object.assign({},n),{headerWrapperGroup:{default:e.default?this.createHeader(e.default):void 0,first:e.first?this.createHeader(e.first):void 0,even:e.even?this.createHeader(e.even):void 0},footerWrapperGroup:{default:t.default?this.createFooter(t.default):void 0,first:t.first?this.createFooter(t.first):void 0,even:t.even?this.createFooter(t.even):void 0}}));for(const e of r)this.documentWrapper.View.add(e);}createHeader(e){const t=new eo(this.media,this.currentRelationshipId++);for(const r of e.options.children)t.add(r);return this.addHeaderToDocument(t),t}createFooter(e){const t=new Hi(this.media,this.currentRelationshipId++);for(const r of e.options.children)t.add(r);return this.addFooterToDocument(t),t}addHeaderToDocument(e,t=Tt.DEFAULT){this.headers.push({header:e,type:t}),this.documentWrapper.Relationships.createRelationship(e.View.ReferenceId,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/header",`header${this.headers.length}.xml`),this.contentTypes.addHeader(this.headers.length);}addFooterToDocument(e,t=Tt.DEFAULT){this.footers.push({footer:e,type:t}),this.documentWrapper.Relationships.createRelationship(e.View.ReferenceId,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer",`footer${this.footers.length}.xml`),this.contentTypes.addFooter(this.footers.length);}addDefaultRelationships(){this.fileRelationships.createRelationship(1,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument","word/document.xml"),this.fileRelationships.createRelationship(2,"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties","docProps/core.xml"),this.fileRelationships.createRelationship(3,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties","docProps/app.xml"),this.fileRelationships.createRelationship(4,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties","docProps/custom.xml"),this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles","styles.xml"),this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering","numbering.xml"),this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes","footnotes.xml"),this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings","settings.xml"),this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments","comments.xml");}get Document(){return this.documentWrapper}get Styles(){return this.styles}get CoreProperties(){return this.coreProperties}get Numbering(){return this.numbering}get Media(){return this.media}get FileRelationships(){return this.fileRelationships}get Headers(){return this.headers.map((e=>e.header))}get Footers(){return this.footers.map((e=>e.footer))}get ContentTypes(){return this.contentTypes}get CustomProperties(){return this.customProperties}get AppProperties(){return this.appProperties}get FootNotes(){return this.footnotesWrapper}get Settings(){return this.settings}get Comments(){return this.comments}}const ra="";class na extends s{constructor(e={}){super("w:instrText"),this.properties=e,this.root.push(new $({space:_.PRESERVE}));let t="TOC";this.properties.captionLabel&&(t=`${t} \\a "${this.properties.captionLabel}"`),this.properties.entriesFromBookmark&&(t=`${t} \\b "${this.properties.entriesFromBookmark}"`),this.properties.captionLabelIncludingNumbers&&(t=`${t} \\c "${this.properties.captionLabelIncludingNumbers}"`),this.properties.sequenceAndPageNumbersSeparator&&(t=`${t} \\d "${this.properties.sequenceAndPageNumbersSeparator}"`),this.properties.tcFieldIdentifier&&(t=`${t} \\f "${this.properties.tcFieldIdentifier}"`),this.properties.hyperlink&&(t=`${t} \\h`),this.properties.tcFieldLevelRange&&(t=`${t} \\l "${this.properties.tcFieldLevelRange}"`),this.properties.pageNumbersEntryLevelsRange&&(t=`${t} \\n "${this.properties.pageNumbersEntryLevelsRange}"`),this.properties.headingStyleRange&&(t=`${t} \\o "${this.properties.headingStyleRange}"`),this.properties.entryAndPageNumberSeparator&&(t=`${t} \\p "${this.properties.entryAndPageNumberSeparator}"`),this.properties.seqFieldIdentifierForPrefix&&(t=`${t} \\s "${this.properties.seqFieldIdentifierForPrefix}"`),this.properties.stylesWithLevels&&this.properties.stylesWithLevels.length&&(t=`${t} \\t "${this.properties.stylesWithLevels.map((e=>`${e.styleName},${e.level}`)).join(",")}"`),this.properties.useAppliedParagraphOutlineLevel&&(t=`${t} \\u`),this.properties.preserveTabInEntries&&(t=`${t} \\w`),this.properties.preserveNewLineInEntries&&(t=`${t} \\x`),this.properties.hideTabAndPageNumbersInWebView&&(t=`${t} \\z`),this.root.push(t);}}class sa extends s{constructor(){super("w:sdtContent");}}class ia extends s{constructor(e){super("w:sdtPr"),this.root.push(new O("w:alias",e));}}class oa extends Vr{constructor(e="Table of Contents",t){super("w:sdt"),this.root.push(new ia(e));const r=new sa,n=new Vn({children:[new ye({children:[new V(!0),new na(t),new q]})]});r.addChildElement(n);const s=new Vn({children:[new ye({children:[new X]})]});r.addChildElement(s),this.root.push(r);}}class aa{constructor(e,t){this.styleName=e,this.level=t;}}class ca{constructor(e={children:[]}){this.options=e;}}class ua{constructor(e={children:[]}){this.options=e;}}class la extends o{constructor(){super(...arguments),this.xmlKeys={id:"w:id"};}}class ha extends s{constructor(e){super("w:footnoteReference"),this.root.push(new la({id:e}));}}class pa extends ye{constructor(e){super({style:"FootnoteReference"}),this.root.push(new ha(e));}}class da extends s{constructor(e){super("w:ins"),this.root.push(new te({id:e.id,author:e.author,date:e.date})),this.addChildElement(new be(e));}}class fa extends s{constructor(){super("w:delInstrText"),this.root.push(new $({space:_.PRESERVE})),this.root.push("PAGE");}}class ma extends s{constructor(){super("w:delInstrText"),this.root.push(new $({space:_.PRESERVE})),this.root.push("NUMPAGES");}}class wa extends s{constructor(){super("w:delInstrText"),this.root.push(new $({space:_.PRESERVE})),this.root.push("SECTIONPAGES");}}class ga extends s{constructor(e){super("w:delText"),this.root.push(new $({space:_.PRESERVE})),this.root.push(e);}}class ya extends s{constructor(e){super("w:del"),this.root.push(new te({id:e.id,author:e.author,date:e.date})),this.deletedTextRunWrapper=new ba(e),this.addChildElement(this.deletedTextRunWrapper);}}class ba extends s{constructor(e){if(super("w:r"),this.root.push(new me(e)),e.children)for(const t of e.children)if("string"!=typeof t)this.root.push(t);else switch(t){case I.CURRENT:this.root.push(new V),this.root.push(new fa),this.root.push(new q),this.root.push(new X);break;case I.TOTAL_PAGES:this.root.push(new V),this.root.push(new ma),this.root.push(new q),this.root.push(new X);break;case I.TOTAL_PAGES_IN_SECTION:this.root.push(new V),this.root.push(new wa),this.root.push(new q),this.root.push(new X);break;default:this.root.push(new ga(t));}else e.text&&this.root.push(new ga(e.text));if(e.break)for(let t=0;t<e.break;t++)this.root.splice(1,0,new G);}}var va=r(6085),xa=r(3479);class _a{format(e,t={stack:[]}){const r=e.prepForXml(t);if(r)return r;throw Error("XMLComponent did not format correctly")}}class Ea{replace(e,t,r){let n=e;return t.forEach(((e,t)=>{n=n.replace(new RegExp(`{${e.fileName}}`,"g"),(r+t).toString());})),n}getMediaData(e,t){return t.Array.filter((t=>e.search(`{${t.fileName}}`)>0))}}class Ta{replace(e,t){let r=e;for(const e of t)r=r.replace(new RegExp(`{${e.reference}-${e.instance}}`,"g"),e.numId.toString());return r}}var Aa,Sa=function(e,t,r,n){return new(r||(r=Promise))((function(s,i){function o(e){try{c(n.next(e));}catch(e){i(e);}}function a(e){try{c(n.throw(e));}catch(e){i(e);}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t);}))).then(o,a);}c((n=n.apply(e,t||[])).next());}))};!function(e){e.NONE="",e.WITH_2_BLANKS="  ",e.WITH_4_BLANKS="    ",e.WITH_TAB="\t";}(Aa||(Aa={}));class Ia{static toString(e,t){return Sa(this,void 0,void 0,(function*(){const r=this.compiler.compile(e,t);return yield r.generateAsync({type:"string",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",compression:"DEFLATE"})}))}static toBuffer(e,t){return Sa(this,void 0,void 0,(function*(){const r=this.compiler.compile(e,t);return yield r.generateAsync({type:"nodebuffer",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",compression:"DEFLATE"})}))}static toBase64String(e,t){return Sa(this,void 0,void 0,(function*(){const r=this.compiler.compile(e,t);return yield r.generateAsync({type:"base64",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",compression:"DEFLATE"})}))}static toBlob(e,t){return Sa(this,void 0,void 0,(function*(){const r=this.compiler.compile(e,t);return yield r.generateAsync({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",compression:"DEFLATE"})}))}static toStream(e,t){return this.compiler.compile(e,t).generateNodeStream({type:"nodebuffer",streamFiles:!0,mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",compression:"DEFLATE"})}}Ia.compiler=new class{constructor(){this.formatter=new _a,this.imageReplacer=new Ea,this.numberingReplacer=new Ta;}compile(e,t){const r=new va,n=this.xmlifyFile(e,t),s=new Map(Object.entries(n));for(const[,e]of s)if(Array.isArray(e))for(const t of e)r.file(t.path,t.data);else r.file(e.path,e.data);for(const{stream:t,fileName:n}of e.Media.Array)r.file(`word/media/${n}`,t);return r}xmlifyFile(e,t){const r=e.Document.Relationships.RelationshipCount+1,n=xa(this.formatter.format(e.Document.View,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:"yes",encoding:"UTF-8"}}),s=this.imageReplacer.getMediaData(n,e.Media);return {Relationships:{data:(()=>(s.forEach(((t,n)=>{e.Document.Relationships.createRelationship(r+n,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",`media/${t.fileName}`);})),xa(this.formatter.format(e.Document.Relationships,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}})))(),path:"word/_rels/document.xml.rels"},Document:{data:(()=>{const t=this.imageReplacer.replace(n,s,r);return this.numberingReplacer.replace(t,e.Numbering.ConcreteNumbering)})(),path:"word/document.xml"},Styles:{data:(()=>{const r=xa(this.formatter.format(e.Styles,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:"yes",encoding:"UTF-8"}});return this.numberingReplacer.replace(r,e.Numbering.ConcreteNumbering)})(),path:"word/styles.xml"},Properties:{data:xa(this.formatter.format(e.CoreProperties,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:"yes",encoding:"UTF-8"}}),path:"docProps/core.xml"},Numbering:{data:xa(this.formatter.format(e.Numbering,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:"yes",encoding:"UTF-8"}}),path:"word/numbering.xml"},FileRelationships:{data:xa(this.formatter.format(e.FileRelationships,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}}),path:"_rels/.rels"},HeaderRelationships:e.Headers.map(((r,n)=>{const s=xa(this.formatter.format(r.View,{viewWrapper:r,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}});return this.imageReplacer.getMediaData(s,e.Media).forEach(((e,t)=>{r.Relationships.createRelationship(t,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",`media/${e.fileName}`);})),{data:xa(this.formatter.format(r.Relationships,{viewWrapper:r,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}}),path:`word/_rels/header${n+1}.xml.rels`}})),FooterRelationships:e.Footers.map(((r,n)=>{const s=xa(this.formatter.format(r.View,{viewWrapper:r,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}});return this.imageReplacer.getMediaData(s,e.Media).forEach(((e,t)=>{r.Relationships.createRelationship(t,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",`media/${e.fileName}`);})),{data:xa(this.formatter.format(r.Relationships,{viewWrapper:r,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}}),path:`word/_rels/footer${n+1}.xml.rels`}})),Headers:e.Headers.map(((r,n)=>{const s=xa(this.formatter.format(r.View,{viewWrapper:r,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}}),i=this.imageReplacer.getMediaData(s,e.Media),o=this.imageReplacer.replace(s,i,0);return {data:this.numberingReplacer.replace(o,e.Numbering.ConcreteNumbering),path:`word/header${n+1}.xml`}})),Footers:e.Footers.map(((r,n)=>{const s=xa(this.formatter.format(r.View,{viewWrapper:r,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}}),i=this.imageReplacer.getMediaData(s,e.Media),o=this.imageReplacer.replace(s,i,0);return {data:this.numberingReplacer.replace(o,e.Numbering.ConcreteNumbering),path:`word/footer${n+1}.xml`}})),ContentTypes:{data:xa(this.formatter.format(e.ContentTypes,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}}),path:"[Content_Types].xml"},CustomProperties:{data:xa(this.formatter.format(e.CustomProperties,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:"yes",encoding:"UTF-8"}}),path:"docProps/custom.xml"},AppProperties:{data:xa(this.formatter.format(e.AppProperties,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:"yes",encoding:"UTF-8"}}),path:"docProps/app.xml"},FootNotes:{data:xa(this.formatter.format(e.FootNotes.View,{viewWrapper:e.FootNotes,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}}),path:"word/footnotes.xml"},FootNotesRelationships:{data:xa(this.formatter.format(e.FootNotes.Relationships,{viewWrapper:e.FootNotes,file:e,stack:[]}),{indent:t,declaration:{encoding:"UTF-8"}}),path:"word/_rels/footnotes.xml.rels"},Settings:{data:xa(this.formatter.format(e.Settings,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:"yes",encoding:"UTF-8"}}),path:"word/settings.xml"},Comments:{data:xa(this.formatter.format(e.Comments,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:"yes",encoding:"UTF-8"}}),path:"word/comments.xml"}}}};var Na=r(5575);const Ra=new _a,ka=e=>(0, u.xml2js)(e,{compact:!1,captureSpacesBetweenElements:!0}),Ca=e=>{var t;return null!==(t=ka(xa(Ra.format(new ge({text:e})))).elements[0].elements)&&void 0!==t?t:[]},Oa=e=>Object.assign(Object.assign({},e),{attributes:{"xml:space":"preserve"}}),La=(e,t)=>{var r,n;return null!==(n=null===(r=e.elements)||void 0===r?void 0:r.filter((e=>e.name===t))[0].elements)&&void 0!==n?n:[]};var Da;!function(e){e[e.START=0]="START",e[e.MIDDLE=1]="MIDDLE",e[e.END=2]="END";}(Da||(Da={}));const Pa=({paragraphElement:e,renderedParagraph:t,originalText:r,replacementText:n})=>{const s=t.text.indexOf(r),i=s+r.length-1;let o=Da.START;for(const r of t.runs)for(const{text:t,index:a,start:c,end:u}of r.parts)switch(o){case Da.START:if(s>=c){const l=s-c,h=Math.min(i,u)-c,p=r.text.substring(l,h+1);if(""===p)continue;const d=t.replace(p,n);Fa(e.elements[r.index].elements[a],d),o=Da.MIDDLE;continue}break;case Da.MIDDLE:if(i<=u){const n=t.substring(i-c+1);Fa(e.elements[r.index].elements[a],n);const s=e.elements[r.index].elements[a];e.elements[r.index].elements[a]=Oa(s),o=Da.END;}else Fa(e.elements[r.index].elements[a],"");}return e},Fa=(e,t)=>(e.elements=Ca(t),e),Ba=(e,t)=>{var r,n,s,i;for(let o=0;o<(null!==(r=e.elements)&&void 0!==r?r:[]).length;o++){const r=e.elements[o];if("element"===r.type&&"w:r"===r.name){const e=(null!==(n=r.elements)&&void 0!==n?n:[]).filter((e=>"element"===e.type&&"w:t"===e.name));for(const r of e)if((null===(s=r.elements)||void 0===s?void 0:s[0])&&(null===(i=r.elements[0].text)||void 0===i?void 0:i.includes(t)))return o}}throw new Error("Token not found")},Ma=(e,t)=>{var r,n;let s=0;const i=null!==(n=null===(r=e.elements)||void 0===r?void 0:r.map(((e,r)=>{var n,i;if("element"===e.type&&"w:t"===e.name){const o=(null!==(i=null===(n=e.elements)||void 0===n?void 0:n[0].text)&&void 0!==i?i:"").split(t).map((t=>Object.assign(Object.assign(Object.assign({},e),Oa(e)),{elements:Ca(t)})));return s=r,o}return e})).flat())&&void 0!==n?n:[];return {left:Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{elements:i.slice(0,s+1)}),right:Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{elements:i.slice(s+1)})}},Ua=new _a,Ha=(e,t,r,n,s)=>{for(const i of n){const n=t.children.map((e=>ka(xa(Ua.format(e,s))))).map((e=>e.elements[0]));switch(t.type){case Ya.DOCUMENT:{const t=za(e,i.path),r=Wa(i.path);t.elements.splice(r,1,...n);break}case Ya.PARAGRAPH:default:{const t=ja(e,i.path);Pa({paragraphElement:t,renderedParagraph:i,originalText:r,replacementText:"ɵ"});const s=Ba(t,"ɵ"),{left:o,right:a}=Ma(t.elements[s],"ɵ");t.elements.splice(s,1,o,...n,a);break}}}return e},ja=(e,t)=>{let r=e;for(let e=1;e<t.length;e++){const n=t[e],s=r.elements;if(!s)throw new Error("Could not find element");r=s[n];}return r},za=(e,t)=>ja(e,t.slice(0,t.length-1)),Wa=e=>e[e.length-1],Ga=e=>{if("w:p"!==e.element.name)throw new Error(`Invalid node type: ${e.element.name}`);if(!e.element.elements)return {text:"",runs:[],index:-1,path:[]};let t=0;const r=e.element.elements.map(((e,t)=>({element:e,i:t}))).filter((({element:e})=>"w:r"===e.name)).map((({element:e,i:r})=>{const n=Ka(e,r,t);return t+=n.text.length,n})).filter((e=>!!e)).map((e=>e));return {text:r.reduce(((e,t)=>e+t.text),""),runs:r,index:e.index,path:Va(e)}},Ka=(e,t,r)=>{if(!e.elements)return {text:"",parts:[],index:-1,start:r,end:r};let n=r;const s=e.elements.map(((e,t)=>{var r,s;return "w:t"===e.name&&e.elements&&e.elements.length>0?{text:null!==(s=null===(r=e.elements[0].text)||void 0===r?void 0:r.toString())&&void 0!==s?s:"",index:t,start:n,end:(()=>{var t,r;return n+=(null!==(r=null===(t=e.elements[0].text)||void 0===t?void 0:t.toString())&&void 0!==r?r:"").length-1,n})()}:void 0})).filter((e=>!!e)).map((e=>e));return {text:s.reduce(((e,t)=>e+t.text),""),parts:s,index:t,start:r,end:n}},Va=e=>e.parent?[...Va(e.parent),e.index]:[e.index],qa=e=>{var t,r;return null!==(r=null===(t=e.element.elements)||void 0===t?void 0:t.map(((t,r)=>({element:t,index:r,parent:e}))))&&void 0!==r?r:[]},Xa=(e,t)=>{let r=[];const n=[...qa({element:e,index:0,parent:void 0})];let s;for(;n.length>0;)s=n.shift(),"w:p"===s.element.name?r=[...r,Ga(s)]:n.push(...qa(s));return r.filter((e=>e.text.includes(t)))},$a=(e,t,r,n,s)=>{const i=La(e,"Relationships");return i.push({attributes:{Id:`rId${t}`,Type:r,Target:n,TargetMode:s},name:"Relationship",type:"element"}),i},Za=(e,t,r)=>{La(e,"Types").push({attributes:{ContentType:t,Extension:r},name:"Default",type:"element"});};var Ya;!function(e){e.DOCUMENT="file",e.PARAGRAPH="paragraph";}(Ya||(Ya={}));const Ja=new Ea,Qa=(e,t)=>{return r=void 0,n=void 0,i=function*(){var r,n;const s=yield va.loadAsync(e),i=new Map,o={Media:new to},a=new Map,c=[],u=[];let l=!1;const h=new Map;for(const[e,r]of Object.entries(s.files)){if(!e.endsWith(".xml")&&!e.endsWith(".rels")){h.set(e,yield r.async("nodebuffer"));continue}const n=ka(yield r.async("text"));if(e.startsWith("word/")&&!e.endsWith(".xml.rels")){const r={file:o,viewWrapper:{Relationships:{createRelationship:(t,r,n,s)=>{u.push({key:e,hyperlink:{id:t,link:n}});}}},stack:[]};i.set(e,r);for(const[s,i]of Object.entries(t.patches)){const t=`{{${s}}}`,o=Xa(n,t);Ha(n,Object.assign(Object.assign({},i),{children:i.children.map((t=>{if(t instanceof Jr){const r=new Zr(t.options.children,(0, Ae.EL)());return u.push({key:e,hyperlink:{id:r.linkId,link:t.options.link}}),r}return t}))}),t,o,r);}const s=Ja.getMediaData(JSON.stringify(n),r.file.Media);s.length>0&&(l=!0,c.push({key:e,mediaDatas:s}));}a.set(e,n);}for(const{key:e,mediaDatas:t}of c){const n=`word/_rels/${e.split("/").pop()}.rels`,s=null!==(r=a.get(n))&&void 0!==r?r:tc();a.set(n,s);const i=La(s,"Relationships").map((e=>{var t,r,n;return (e=>{const t=parseInt(e.substring(3),10);return isNaN(t)?0:t})(null!==(n=null===(r=null===(t=e.attributes)||void 0===t?void 0:t.Id)||void 0===r?void 0:r.toString())&&void 0!==n?n:"")})).reduce(((e,t)=>Math.max(e,t)),0)+1,o=Ja.replace(JSON.stringify(a.get(e)),t,i);a.set(e,JSON.parse(o));for(let e=0;e<t.length;e++){const{fileName:r}=t[e];$a(s,i+e,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",`media/${r}`);}}for(const{key:e,hyperlink:t}of u){const r=`word/_rels/${e.split("/").pop()}.rels`,s=null!==(n=a.get(r))&&void 0!==n?n:tc();a.set(r,s),$a(s,t.id,"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",t.link,xt.EXTERNAL);}if(l){const e=a.get("[Content_Types].xml");if(!e)throw new Error("Could not find content types file");Za(e,"image/png","png"),Za(e,"image/jpeg","jpeg"),Za(e,"image/jpeg","jpg"),Za(e,"image/bmp","bmp"),Za(e,"image/gif","gif");}const p=new va;for(const[e,t]of a){const r=ec(t);p.file(e,r);}for(const[e,t]of h)p.file(e,t);for(const{stream:e,fileName:t}of o.Media.Array)p.file(`word/media/${t}`,e);return p.generateAsync({type:"nodebuffer",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",compression:"DEFLATE"})},new((s=void 0)||(s=Promise))((function(e,t){function o(e){try{c(i.next(e));}catch(e){t(e);}}function a(e){try{c(i.throw(e));}catch(e){t(e);}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r);}))).then(o,a);}c((i=i.apply(r,n||[])).next());}));var r,n,s,i;},ec=e=>(0, u.js2xml)(e),tc=()=>({declaration:{attributes:{version:"1.0",encoding:"UTF-8",standalone:"yes"}},elements:[{type:"element",name:"Relationships",attributes:{xmlns:"http://schemas.openxmlformats.org/package/2006/relationships"},elements:[]}]});})(),n})()));
    }(build));

    const defaultSections = [
        {
            children: [],
            properties: {
                page: {
                    size: {
                        orientation: build.exports.PageOrientation.PORTRAIT,
                    },
                    margin: {
                        top: 800,
                        right: 1500,
                        bottom: 800,
                        left: 1500,
                        header: 300,
                        footer: 200,
                    },
                    pageNumbers: {
                        start: 1,
                        formatType: build.exports.NumberFormat.DECIMAL,
                    },
                },
            },
        },
    ];
    const defaultStyle = {
        //文档的样式属性，用来自定义样式
        default: {
        //系统默认的一些元素的属性，如一级标题，二级标题
        },
        paragraphStyles: [
            //数组，表明可以定义不同的样式，使用id在引用时加以区分
            {
                id: 'paragraph_style1',
                name: 'paragraph_style1',
                basedOn: 'Normal',
                next: 'Normal',
                quickFormat: true,
                run: {
                    //段落文字属性定义
                    font: {
                        //只用于设置字体，color和size设置在这里是无效的,同时外面也无法设置字体
                        ascii: 'Times New Roman',
                        eastAsia: '宋体',
                        cs: 'minorBidi',
                        hAnsi: 'minorHAnsi',
                    },
                    color: '#000000',
                    size: 20, //字号‘四号’对应磅值14
                },
                paragraph: {
                    border: {
                        top: {
                            color: '#FFFF00',
                            space: 20,
                            style: build.exports.BorderStyle.SINGLE,
                            size: 1,
                        },
                        bottom: {
                            color: '#FFFF00',
                            space: 20,
                            style: build.exports.BorderStyle.SINGLE,
                            size: 1,
                        },
                    },
                    spacing: {
                        before: 0.4 * 20 * 16,
                        after: 0.4 * 20 * 14, //设置一级标题为行距为0.8倍的字体大小，以twip(缇）为单位，一磅等于20twip
                    },
                },
            },
        ],
    };

    class Constant {
        static setConfigClass(classnames) {
            for (const classname in classnames) {
                this[classname] = classnames[classname];
            }
        }
        static mainSize() {
            const { left, right, top, bottom, } = defaultSections[0].properties.page.margin;
            const mainWidth = this.pageWidth - left - right;
            const mainHeight = this.pageHeight - top - bottom;
            return {
                width: mainWidth,
                height: mainHeight,
            };
        }
    }
    Constant.WordUIPage = 'magic-ui-page'; // word-entry-flag 需要导出word的页面入口标识
    Constant.WordUiContainer = 'magic-ui-container';
    Constant.WordUiComponent = 'magic-ui-component';
    Constant.WordUiEchartModule = 'magic-ui-echart-module'; // 1. echarts 组件级别
    Constant.WordUiCanvasModule = 'magic-ui-canvas-module'; // 2. canvas  组件级别
    Constant.WordUiImageModule = 'magic-ui-image-module'; // 3. 本身是图片、矢量图、二维码 组件级别
    Constant.WordUiAreaModule = 'magic-ui-area-module'; // 4. 某个区域要转成图片 组级别
    Constant.WordUiTableModule = 'magic-ui-table-module'; // 5.table com标识 组件级别
    // table header
    Constant.TableInnerWraper = 'el-table__inner-wrapper';
    Constant.TableHeaderWraper = 'el-table__header';
    Constant.TableTheadTagName = 'thead';
    Constant.TableTrTagName = 'tr';
    // table body
    Constant.TableBodyWrapper = 'el-table__body-wrapper';
    Constant.TableTBodyTagName = 'tbody';
    Constant.TableBodyRow = 'el-table__row';
    // header and tbody cell
    Constant.TableCell = 'el-table__cell';
    Constant.TableInnerCell = 'cell';
    Constant.MaxStackLen = 15000;
    Constant.pageWidth = 12000;
    Constant.pageHeight = 17000;
    Constant.FontRemScale = 100;
    Constant.MaxWidthPerWord = 800;
    Constant.FontPxScale = 1.3;
    Constant.singleTags = ['br', 'img'];
    Constant.singleRowTags = ['br'];

    var ComponentType;
    (function (ComponentType) {
        ComponentType["NORMAL_COM"] = "NORMAL_COM";
        ComponentType["AREA_IMG"] = "AREA_IMG";
        ComponentType["IMG"] = "IMG";
        ComponentType["TABLE"] = "TABLE";
        ComponentType["ECHART"] = "ECHART";
    })(ComponentType || (ComponentType = {}));

    class ParseHtml {
        static format(ele) {
            this.walk(ele);
            this.comsMap = this.sortMap(this.comsMap);
            return this.comsMap;
        }
        // 条件1：有component 没有 container
        // 先广度遍历，是否有magic-ui-area-module，级别的container，
        // 如果有，放入map，直接转成图片，不进行深度遍历
        // 如果没有
        //   是否满足 条件1,
        //     是则依次加入map, 遍历map
        //   如果遇到 有chart或 img 并且 满足条件1，可以走chart img 策略。
        //   剩余情况，需要先判断子元素是否有chart img，如果有 先将chart img 转成图片，并给此区域添加有图片标记，todo
        //   剩余情况将文本结构 匹配节点和样式策略。
        //   换行情况 nbsb需要处理
        static walk(ele) {
            const classList = ele.classList;
            if (classList.contains(Constant.WordUiAreaModule)) {
                this.setComsMap(ele);
            }
            else {
                const isComponent = !classList.contains(Constant.WordUiContainer) &&
                    classList.contains(Constant.WordUiComponent);
                if (isComponent) {
                    this.setComsMap(ele);
                }
                else {
                    if (ele.hasChildNodes()) {
                        Array.from(ele.children).forEach((node) => this.walk(node));
                    }
                }
            }
        }
        static setComsMap(ele) {
            return __awaiter$1(this, void 0, void 0, function* () {
                // COM_TYPE: 'COM' 'AREA_IMG' 'IMG' 'TABLE'
                const comType = this.getComType(ele);
                const domObj = {
                    addTop: this.addContainerTop(ele),
                    comType,
                    dom: ele,
                    tag: ele.localName,
                    attributes: {},
                    childNodes: [],
                    children: [],
                    parentNode: ele.parentNode,
                    parentClass: {},
                };
                this.comsMap.set(ele, { selfInfo: domObj });
                this.order++;
            });
        }
        static sortMap(map) {
            const sortedArray = [...map].sort((a, b) => a[1].selfInfo.addTop - b[1].selfInfo.addTop);
            const sortedMap = new Map(sortedArray);
            console.log('sortedMap', sortedMap);
            return sortedMap;
        }
        /**
         *
         * @param ele dom节点
         * @returns position top Number
         * 返回该元素相对于外层节点WordUIPage的top值，
         * 将该元素的position top值，和该元素的祖先节点的position top值累加，
         * 确定改元素相对于页面top值，从而确定该元素在页面展示顺序
         */
        static addContainerTop(ele) {
            let node = ele;
            let top = 0;
            let isContinue = true;
            while (node && isContinue) {
                if (node.classList.contains(Constant.WordUIPage)) {
                    isContinue = false;
                }
                else {
                    const curTop = parseInt(getComputedStyle(node, null).getPropertyValue('top'));
                    if (curTop) {
                        top += curTop;
                    }
                    node = node.parentElement;
                }
            }
            return top;
        }
        static getComType(ele) {
            // COM_TYPE: 'NORMAL_COM' 'AREA_IMG' 'IMG' 'TABLE' 'ECHART'
            const classList = ele.classList;
            if (classList.contains(Constant.WordUiAreaModule)) {
                return ComponentType.AREA_IMG;
            }
            else if (classList.contains(Constant.WordUiTableModule)) {
                return ComponentType.TABLE;
            }
            else if (classList.contains(Constant.WordUiImageModule)) {
                return ComponentType.IMG;
            }
            else if (classList.contains(Constant.WordUiEchartModule)) {
                return ComponentType.ECHART;
            }
            else {
                return ComponentType.NORMAL_COM;
            }
        }
    }
    ParseHtml.comsMap = new Map();
    ParseHtml.order = 0;

    var FileSaver_min = {exports: {}};

    (function (module, exports) {
    (function(a,b){b();})(commonjsGlobal,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});


    }(FileSaver_min));

    const exportBuffer = (option) => {
        if (!option) {
            console.log('exportBuffer option', option);
            throw new Error(`${option} is must exisit`);
        }
        const doc = new build.exports.Document(option);
        //  browser runtime
        if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
            // console.log('is browser runtime')
            return build.exports.Packer.toBlob(doc);
        }
        else if (
        // runtime
        typeof process !== 'undefined' &&
            process.versions != null &&
            process.versions.node != null &&
            typeof module === 'object' &&
            typeof module.exports === 'object') {
            // console.log('is node runtime')
            return build.exports.Packer.toBuffer(doc);
        }
    };
    const optionToFile = (options, filename = 'one.docx') => __awaiter$1(void 0, void 0, void 0, function* () {
        const buffer = yield exportBuffer(options);
        yield FileSaver_min.exports.saveAs(buffer, filename);
        console.log(`${filename} 文件生成成功`);
    });
    // 23px => [23, px]; 23rem => [23, rem]
    const transSizeUnit = (str) => {
        let size = parseFloat(str);
        const unit = str.replace(size, '');
        if (unit === 'rem') {
            size = size * Constant.FontRemScale;
        }
        else if (unit === 'px') {
            size = size * Constant.FontPxScale;
        }
        return [size, unit];
    };

    /*!
     * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    }

    var Bounds = /** @class */ (function () {
        function Bounds(left, top, width, height) {
            this.left = left;
            this.top = top;
            this.width = width;
            this.height = height;
        }
        Bounds.prototype.add = function (x, y, w, h) {
            return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
        };
        Bounds.fromClientRect = function (context, clientRect) {
            return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
        };
        Bounds.fromDOMRectList = function (context, domRectList) {
            var domRect = Array.from(domRectList).find(function (rect) { return rect.width !== 0; });
            return domRect
                ? new Bounds(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height)
                : Bounds.EMPTY;
        };
        Bounds.EMPTY = new Bounds(0, 0, 0, 0);
        return Bounds;
    }());
    var parseBounds = function (context, node) {
        return Bounds.fromClientRect(context, node.getBoundingClientRect());
    };
    var parseDocumentSize = function (document) {
        var body = document.body;
        var documentElement = document.documentElement;
        if (!body || !documentElement) {
            throw new Error("Unable to get document size");
        }
        var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
        var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
        return new Bounds(0, 0, width, height);
    };

    /*
     * css-line-break 2.1.0 <https://github.com/niklasvh/css-line-break#readme>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var toCodePoints$1 = function (str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while (i < length) {
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                }
                else {
                    codePoints.push(value);
                    i--;
                }
            }
            else {
                codePoints.push(value);
            }
        }
        return codePoints;
    };
    var fromCodePoint$1 = function () {
        var codePoints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
        }
        if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
        }
        var length = codePoints.length;
        if (!length) {
            return '';
        }
        var codeUnits = [];
        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            }
            else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
        lookup$2[chars$2.charCodeAt(i$2)] = i$2;
    }

    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$1$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$1$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
        lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
    }
    var decode$1 = function (base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === '=') {
            bufferLength--;
            if (base64[base64.length - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = typeof ArrayBuffer !== 'undefined' &&
            typeof Uint8Array !== 'undefined' &&
            typeof Uint8Array.prototype.slice !== 'undefined'
            ? new ArrayBuffer(bufferLength)
            : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
            encoded1 = lookup$1$1[base64.charCodeAt(i)];
            encoded2 = lookup$1$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1$1[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return buffer;
    };
    var polyUint16Array$1 = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 2) {
            bytes.push((buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };
    var polyUint32Array$1 = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 4) {
            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };

    /** Shift size for getting the index-2 table offset. */
    var UTRIE2_SHIFT_2$1 = 5;
    /** Shift size for getting the index-1 table offset. */
    var UTRIE2_SHIFT_1$1 = 6 + 5;
    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT$1 = 2;
    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */
    var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
    /** Number of entries in a data block. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
    /** Mask for getting the lower bits for the in-data-block offset. */
    var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
    /** Count the lengths of both BMP pieces. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */
    var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
    /** Number of entries in an index-2 block. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
    /** Mask for getting the lower bits for the in-index-2-block offset. */
    var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
    var slice16$1 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32$1 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64$1 = function (base64, _byteLength) {
        var buffer = decode$1(base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
        var headerLength = 24;
        var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2
            ? slice16$1(view16, (headerLength + view32[4]) / 2)
            : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie$1 = /** @class */ (function () {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }
        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */
        Trie.prototype.get = function (codePoint) {
            var ix;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2$1)];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                    ix = this.index[ix];
                    ix += (codePoint >> UTRIE2_SHIFT_2$1) & UTRIE2_INDEX_2_MASK$1;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }
            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        };
        return Trie;
    }());

    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$3 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
        lookup$3[chars$3.charCodeAt(i$3)] = i$3;
    }

    var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';

    var LETTER_NUMBER_MODIFIER = 50;
    // Non-tailorable Line Breaking Classes
    var BK = 1; //  Cause a line break (after)
    var CR$1 = 2; //  Cause a line break (after), except between CR and LF
    var LF$1 = 3; //  Cause a line break (after)
    var CM = 4; //  Prohibit a line break between the character and the preceding character
    var NL = 5; //  Cause a line break (after)
    var WJ = 7; //  Prohibit line breaks before and after
    var ZW = 8; //  Provide a break opportunity
    var GL = 9; //  Prohibit line breaks before and after
    var SP = 10; // Enable indirect line breaks
    var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
    // Break Opportunities
    var B2 = 12; //  Provide a line break opportunity before and after the character
    var BA = 13; //  Generally provide a line break opportunity after the character
    var BB = 14; //  Generally provide a line break opportunity before the character
    var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
    var CB = 16; //   Provide a line break opportunity contingent on additional information
    // Characters Prohibiting Certain Breaks
    var CL = 17; //  Prohibit line breaks before
    var CP = 18; //  Prohibit line breaks before
    var EX = 19; //  Prohibit line breaks before
    var IN = 20; //  Allow only indirect line breaks between pairs
    var NS = 21; //  Allow only indirect line breaks before
    var OP = 22; //  Prohibit line breaks after
    var QU = 23; //  Act like they are both opening and closing
    // Numeric Context
    var IS = 24; //  Prevent breaks after any and before numeric
    var NU = 25; //  Form numeric expressions for line breaking purposes
    var PO = 26; //  Do not break following a numeric expression
    var PR = 27; //  Do not break in front of a numeric expression
    var SY = 28; //  Prevent a break before; and allow a break after
    // Other Characters
    var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
    var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
    var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
    var EB = 32; //  Do not break from following Emoji Modifier
    var EM = 33; //  Do not break from preceding Emoji Base
    var H2 = 34; //  Form Korean syllable blocks
    var H3 = 35; //  Form Korean syllable blocks
    var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
    var ID = 37; //  Break before or after; except in some numeric context
    var JL = 38; //  Form Korean syllable blocks
    var JV = 39; //  Form Korean syllable blocks
    var JT = 40; //  Form Korean syllable blocks
    var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes
    var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
    var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
    var ea_OP = [0x2329, 0xff08];
    var BREAK_MANDATORY = '!';
    var BREAK_NOT_ALLOWED$1 = '×';
    var BREAK_ALLOWED$1 = '÷';
    var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
    var ALPHABETICS = [AL, HL];
    var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
    var SPACE$1 = [SP, ZW];
    var PREFIX_POSTFIX = [PR, PO];
    var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
    var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
    var HYPHEN = [HY, BA];
    var codePointsToCharacterClasses = function (codePoints, lineBreak) {
        if (lineBreak === void 0) { lineBreak = 'strict'; }
        var types = [];
        var indices = [];
        var categories = [];
        codePoints.forEach(function (codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
                categories.push(true);
                classType -= LETTER_NUMBER_MODIFIER;
            }
            else {
                categories.push(false);
            }
            if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
                // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
                if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                    indices.push(index);
                    return types.push(CB);
                }
            }
            if (classType === CM || classType === ZWJ$1) {
                // LB10 Treat any remaining combining mark or ZWJ as AL.
                if (index === 0) {
                    indices.push(index);
                    return types.push(AL);
                }
                // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
                // the base character in all of the following rules. Treat ZWJ as if it were CM.
                var prev = types[index - 1];
                if (LINE_BREAKS.indexOf(prev) === -1) {
                    indices.push(indices[index - 1]);
                    return types.push(prev);
                }
                indices.push(index);
                return types.push(AL);
            }
            indices.push(index);
            if (classType === CJ) {
                return types.push(lineBreak === 'strict' ? NS : ID);
            }
            if (classType === SA) {
                return types.push(AL);
            }
            if (classType === AI) {
                return types.push(AL);
            }
            // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
            // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
            // to take into account the actual line breaking properties for these characters.
            if (classType === XX) {
                if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
                    return types.push(ID);
                }
                else {
                    return types.push(AL);
                }
            }
            types.push(classType);
        });
        return [indices, types, categories];
    };
    var isAdjacentWithSpaceIgnored = function (a, b, currentIndex, classTypes) {
        var current = classTypes[currentIndex];
        if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
            var i = currentIndex;
            while (i <= classTypes.length) {
                i++;
                var next = classTypes[i];
                if (next === b) {
                    return true;
                }
                if (next !== SP) {
                    break;
                }
            }
        }
        if (current === SP) {
            var i = currentIndex;
            while (i > 0) {
                i--;
                var prev = classTypes[i];
                if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                    var n = currentIndex;
                    while (n <= classTypes.length) {
                        n++;
                        var next = classTypes[n];
                        if (next === b) {
                            return true;
                        }
                        if (next !== SP) {
                            break;
                        }
                    }
                }
                if (prev !== SP) {
                    break;
                }
            }
        }
        return false;
    };
    var previousNonSpaceClassType = function (currentIndex, classTypes) {
        var i = currentIndex;
        while (i >= 0) {
            var type = classTypes[i];
            if (type === SP) {
                i--;
            }
            else {
                return type;
            }
        }
        return 0;
    };
    var _lineBreakAtIndex = function (codePoints, classTypes, indicies, index, forbiddenBreaks) {
        if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED$1;
        }
        var currentIndex = index - 1;
        if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED$1;
        }
        var beforeIndex = currentIndex - 1;
        var afterIndex = currentIndex + 1;
        var current = classTypes[currentIndex];
        // LB4 Always break after hard line breaks.
        // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
        var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
        var next = classTypes[afterIndex];
        if (current === CR$1 && next === LF$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
        }
        // LB6 Do not break before hard line breaks.
        if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB7 Do not break before spaces or zero width space.
        if (SPACE$1.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
        if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED$1;
        }
        // LB8a Do not break after a zero width joiner.
        if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // zwj emojis
        if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB11 Do not break before or after Word joiner and related characters.
        if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB12 Do not break after NBSP and related characters.
        if (current === GL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
        if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
        if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB14 Do not break after ‘[’, even after spaces.
        if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB15 Do not break within ‘”[’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
        if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB17 Do not break within ‘——’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB18 Break after spaces.
        if (current === SP) {
            return BREAK_ALLOWED$1;
        }
        // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
        if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB20 Break before and after unresolved CB.
        if (next === CB || current === CB) {
            return BREAK_ALLOWED$1;
        }
        // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
        if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB21a Don't break after Hebrew + Hyphen.
        if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB21b Don’t break between Solidus and Hebrew letters.
        if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB22 Do not break before ellipsis.
        if (next === IN) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB23 Do not break between digits and letters.
        if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
        if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) ||
            ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
        if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) ||
            (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB25 Do not break between the following pairs of classes relevant to numbers:
        if (
        // (PR | PO) × ( OP | HY )? NU
        ([PR, PO].indexOf(current) !== -1 &&
            (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) ||
            // ( OP | HY ) × NU
            ([OP, HY].indexOf(current) !== -1 && next === NU) ||
            // NU ×	(NU | SY | IS)
            (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
        if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
                var type = classTypes[prevIndex];
                if (type === NU) {
                    return BREAK_NOT_ALLOWED$1;
                }
                else if ([SY, IS].indexOf(type) !== -1) {
                    prevIndex--;
                }
                else {
                    break;
                }
            }
        }
        // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
        if ([PR, PO].indexOf(next) !== -1) {
            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (prevIndex >= 0) {
                var type = classTypes[prevIndex];
                if (type === NU) {
                    return BREAK_NOT_ALLOWED$1;
                }
                else if ([SY, IS].indexOf(type) !== -1) {
                    prevIndex--;
                }
                else {
                    break;
                }
            }
        }
        // LB26 Do not break a Korean syllable.
        if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) ||
            ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) ||
            ([JT, H3].indexOf(current) !== -1 && next === JT)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB27 Treat a Korean Syllable Block the same as ID.
        if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) ||
            (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB28 Do not break between alphabetics (“at”).
        if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
        if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
        if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 &&
            next === OP &&
            ea_OP.indexOf(codePoints[afterIndex]) === -1) ||
            (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
        // indicators preceding the position of the break.
        if (current === RI$1 && next === RI$1) {
            var i = indicies[currentIndex];
            var count = 1;
            while (i > 0) {
                i--;
                if (classTypes[i] === RI$1) {
                    count++;
                }
                else {
                    break;
                }
            }
            if (count % 2 !== 0) {
                return BREAK_NOT_ALLOWED$1;
            }
        }
        // LB30b Do not break between an emoji base and an emoji modifier.
        if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED$1;
        }
        return BREAK_ALLOWED$1;
    };
    var cssFormattedClasses = function (codePoints, options) {
        if (!options) {
            options = { lineBreak: 'normal', wordBreak: 'normal' };
        }
        var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
        if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
            classTypes = classTypes.map(function (type) { return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type); });
        }
        var forbiddenBreakpoints = options.wordBreak === 'keep-all'
            ? isLetterNumber.map(function (letterNumber, i) {
                return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
            })
            : undefined;
        return [indicies, classTypes, forbiddenBreakpoints];
    };
    var Break = /** @class */ (function () {
        function Break(codePoints, lineBreak, start, end) {
            this.codePoints = codePoints;
            this.required = lineBreak === BREAK_MANDATORY;
            this.start = start;
            this.end = end;
        }
        Break.prototype.slice = function () {
            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
        };
        return Break;
    }());
    var LineBreaker = function (str, options) {
        var codePoints = toCodePoints$1(str);
        var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
        var length = codePoints.length;
        var lastEnd = 0;
        var nextIndex = 0;
        return {
            next: function () {
                if (nextIndex >= length) {
                    return { done: true, value: null };
                }
                var lineBreak = BREAK_NOT_ALLOWED$1;
                while (nextIndex < length &&
                    (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) ===
                        BREAK_NOT_ALLOWED$1) { }
                if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                    var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                    lastEnd = nextIndex;
                    return { value: value, done: false };
                }
                return { done: true, value: null };
            },
        };
    };

    // https://www.w3.org/TR/css-syntax-3
    var FLAG_UNRESTRICTED = 1 << 0;
    var FLAG_ID = 1 << 1;
    var FLAG_INTEGER = 1 << 2;
    var FLAG_NUMBER = 1 << 3;
    var LINE_FEED = 0x000a;
    var SOLIDUS = 0x002f;
    var REVERSE_SOLIDUS = 0x005c;
    var CHARACTER_TABULATION = 0x0009;
    var SPACE = 0x0020;
    var QUOTATION_MARK = 0x0022;
    var EQUALS_SIGN = 0x003d;
    var NUMBER_SIGN = 0x0023;
    var DOLLAR_SIGN = 0x0024;
    var PERCENTAGE_SIGN = 0x0025;
    var APOSTROPHE = 0x0027;
    var LEFT_PARENTHESIS = 0x0028;
    var RIGHT_PARENTHESIS = 0x0029;
    var LOW_LINE = 0x005f;
    var HYPHEN_MINUS = 0x002d;
    var EXCLAMATION_MARK = 0x0021;
    var LESS_THAN_SIGN = 0x003c;
    var GREATER_THAN_SIGN = 0x003e;
    var COMMERCIAL_AT = 0x0040;
    var LEFT_SQUARE_BRACKET = 0x005b;
    var RIGHT_SQUARE_BRACKET = 0x005d;
    var CIRCUMFLEX_ACCENT = 0x003d;
    var LEFT_CURLY_BRACKET = 0x007b;
    var QUESTION_MARK = 0x003f;
    var RIGHT_CURLY_BRACKET = 0x007d;
    var VERTICAL_LINE = 0x007c;
    var TILDE = 0x007e;
    var CONTROL = 0x0080;
    var REPLACEMENT_CHARACTER = 0xfffd;
    var ASTERISK = 0x002a;
    var PLUS_SIGN = 0x002b;
    var COMMA = 0x002c;
    var COLON = 0x003a;
    var SEMICOLON = 0x003b;
    var FULL_STOP = 0x002e;
    var NULL = 0x0000;
    var BACKSPACE = 0x0008;
    var LINE_TABULATION = 0x000b;
    var SHIFT_OUT = 0x000e;
    var INFORMATION_SEPARATOR_ONE = 0x001f;
    var DELETE = 0x007f;
    var EOF = -1;
    var ZERO = 0x0030;
    var a = 0x0061;
    var e = 0x0065;
    var f = 0x0066;
    var u = 0x0075;
    var z = 0x007a;
    var A = 0x0041;
    var E = 0x0045;
    var F = 0x0046;
    var U = 0x0055;
    var Z = 0x005a;
    var isDigit = function (codePoint) { return codePoint >= ZERO && codePoint <= 0x0039; };
    var isSurrogateCodePoint = function (codePoint) { return codePoint >= 0xd800 && codePoint <= 0xdfff; };
    var isHex = function (codePoint) {
        return isDigit(codePoint) || (codePoint >= A && codePoint <= F) || (codePoint >= a && codePoint <= f);
    };
    var isLowerCaseLetter = function (codePoint) { return codePoint >= a && codePoint <= z; };
    var isUpperCaseLetter = function (codePoint) { return codePoint >= A && codePoint <= Z; };
    var isLetter = function (codePoint) { return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint); };
    var isNonASCIICodePoint = function (codePoint) { return codePoint >= CONTROL; };
    var isWhiteSpace = function (codePoint) {
        return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
    };
    var isNameStartCodePoint = function (codePoint) {
        return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
    };
    var isNameCodePoint = function (codePoint) {
        return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
    };
    var isNonPrintableCodePoint = function (codePoint) {
        return ((codePoint >= NULL && codePoint <= BACKSPACE) ||
            codePoint === LINE_TABULATION ||
            (codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE) ||
            codePoint === DELETE);
    };
    var isValidEscape = function (c1, c2) {
        if (c1 !== REVERSE_SOLIDUS) {
            return false;
        }
        return c2 !== LINE_FEED;
    };
    var isIdentifierStart = function (c1, c2, c3) {
        if (c1 === HYPHEN_MINUS) {
            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
        }
        else if (isNameStartCodePoint(c1)) {
            return true;
        }
        else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            return true;
        }
        return false;
    };
    var isNumberStart = function (c1, c2, c3) {
        if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) {
                return true;
            }
            return c2 === FULL_STOP && isDigit(c3);
        }
        if (c1 === FULL_STOP) {
            return isDigit(c2);
        }
        return isDigit(c1);
    };
    var stringToNumber = function (codePoints) {
        var c = 0;
        var sign = 1;
        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
                sign = -1;
            }
            c++;
        }
        var integers = [];
        while (isDigit(codePoints[c])) {
            integers.push(codePoints[c++]);
        }
        var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
        if (codePoints[c] === FULL_STOP) {
            c++;
        }
        var fraction = [];
        while (isDigit(codePoints[c])) {
            fraction.push(codePoints[c++]);
        }
        var fracd = fraction.length;
        var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
        if (codePoints[c] === E || codePoints[c] === e) {
            c++;
        }
        var expsign = 1;
        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
                expsign = -1;
            }
            c++;
        }
        var exponent = [];
        while (isDigit(codePoints[c])) {
            exponent.push(codePoints[c++]);
        }
        var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
        return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
    };
    var LEFT_PARENTHESIS_TOKEN = {
        type: 2 /* LEFT_PARENTHESIS_TOKEN */
    };
    var RIGHT_PARENTHESIS_TOKEN = {
        type: 3 /* RIGHT_PARENTHESIS_TOKEN */
    };
    var COMMA_TOKEN = { type: 4 /* COMMA_TOKEN */ };
    var SUFFIX_MATCH_TOKEN = { type: 13 /* SUFFIX_MATCH_TOKEN */ };
    var PREFIX_MATCH_TOKEN = { type: 8 /* PREFIX_MATCH_TOKEN */ };
    var COLUMN_TOKEN = { type: 21 /* COLUMN_TOKEN */ };
    var DASH_MATCH_TOKEN = { type: 9 /* DASH_MATCH_TOKEN */ };
    var INCLUDE_MATCH_TOKEN = { type: 10 /* INCLUDE_MATCH_TOKEN */ };
    var LEFT_CURLY_BRACKET_TOKEN = {
        type: 11 /* LEFT_CURLY_BRACKET_TOKEN */
    };
    var RIGHT_CURLY_BRACKET_TOKEN = {
        type: 12 /* RIGHT_CURLY_BRACKET_TOKEN */
    };
    var SUBSTRING_MATCH_TOKEN = { type: 14 /* SUBSTRING_MATCH_TOKEN */ };
    var BAD_URL_TOKEN = { type: 23 /* BAD_URL_TOKEN */ };
    var BAD_STRING_TOKEN = { type: 1 /* BAD_STRING_TOKEN */ };
    var CDO_TOKEN = { type: 25 /* CDO_TOKEN */ };
    var CDC_TOKEN = { type: 24 /* CDC_TOKEN */ };
    var COLON_TOKEN = { type: 26 /* COLON_TOKEN */ };
    var SEMICOLON_TOKEN = { type: 27 /* SEMICOLON_TOKEN */ };
    var LEFT_SQUARE_BRACKET_TOKEN = {
        type: 28 /* LEFT_SQUARE_BRACKET_TOKEN */
    };
    var RIGHT_SQUARE_BRACKET_TOKEN = {
        type: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */
    };
    var WHITESPACE_TOKEN = { type: 31 /* WHITESPACE_TOKEN */ };
    var EOF_TOKEN = { type: 32 /* EOF_TOKEN */ };
    var Tokenizer = /** @class */ (function () {
        function Tokenizer() {
            this._value = [];
        }
        Tokenizer.prototype.write = function (chunk) {
            this._value = this._value.concat(toCodePoints$1(chunk));
        };
        Tokenizer.prototype.read = function () {
            var tokens = [];
            var token = this.consumeToken();
            while (token !== EOF_TOKEN) {
                tokens.push(token);
                token = this.consumeToken();
            }
            return tokens;
        };
        Tokenizer.prototype.consumeToken = function () {
            var codePoint = this.consumeCodePoint();
            switch (codePoint) {
                case QUOTATION_MARK:
                    return this.consumeStringToken(QUOTATION_MARK);
                case NUMBER_SIGN:
                    var c1 = this.peekCodePoint(0);
                    var c2 = this.peekCodePoint(1);
                    var c3 = this.peekCodePoint(2);
                    if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                        var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                        var value = this.consumeName();
                        return { type: 5 /* HASH_TOKEN */, value: value, flags: flags };
                    }
                    break;
                case DOLLAR_SIGN:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return SUFFIX_MATCH_TOKEN;
                    }
                    break;
                case APOSTROPHE:
                    return this.consumeStringToken(APOSTROPHE);
                case LEFT_PARENTHESIS:
                    return LEFT_PARENTHESIS_TOKEN;
                case RIGHT_PARENTHESIS:
                    return RIGHT_PARENTHESIS_TOKEN;
                case ASTERISK:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return SUBSTRING_MATCH_TOKEN;
                    }
                    break;
                case PLUS_SIGN:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    break;
                case COMMA:
                    return COMMA_TOKEN;
                case HYPHEN_MINUS:
                    var e1 = codePoint;
                    var e2 = this.peekCodePoint(0);
                    var e3 = this.peekCodePoint(1);
                    if (isNumberStart(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    if (isIdentifierStart(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    }
                    if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        return CDC_TOKEN;
                    }
                    break;
                case FULL_STOP:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    break;
                case SOLIDUS:
                    if (this.peekCodePoint(0) === ASTERISK) {
                        this.consumeCodePoint();
                        while (true) {
                            var c = this.consumeCodePoint();
                            if (c === ASTERISK) {
                                c = this.consumeCodePoint();
                                if (c === SOLIDUS) {
                                    return this.consumeToken();
                                }
                            }
                            if (c === EOF) {
                                return this.consumeToken();
                            }
                        }
                    }
                    break;
                case COLON:
                    return COLON_TOKEN;
                case SEMICOLON:
                    return SEMICOLON_TOKEN;
                case LESS_THAN_SIGN:
                    if (this.peekCodePoint(0) === EXCLAMATION_MARK &&
                        this.peekCodePoint(1) === HYPHEN_MINUS &&
                        this.peekCodePoint(2) === HYPHEN_MINUS) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        return CDO_TOKEN;
                    }
                    break;
                case COMMERCIAL_AT:
                    var a1 = this.peekCodePoint(0);
                    var a2 = this.peekCodePoint(1);
                    var a3 = this.peekCodePoint(2);
                    if (isIdentifierStart(a1, a2, a3)) {
                        var value = this.consumeName();
                        return { type: 7 /* AT_KEYWORD_TOKEN */, value: value };
                    }
                    break;
                case LEFT_SQUARE_BRACKET:
                    return LEFT_SQUARE_BRACKET_TOKEN;
                case REVERSE_SOLIDUS:
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    }
                    break;
                case RIGHT_SQUARE_BRACKET:
                    return RIGHT_SQUARE_BRACKET_TOKEN;
                case CIRCUMFLEX_ACCENT:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return PREFIX_MATCH_TOKEN;
                    }
                    break;
                case LEFT_CURLY_BRACKET:
                    return LEFT_CURLY_BRACKET_TOKEN;
                case RIGHT_CURLY_BRACKET:
                    return RIGHT_CURLY_BRACKET_TOKEN;
                case u:
                case U:
                    var u1 = this.peekCodePoint(0);
                    var u2 = this.peekCodePoint(1);
                    if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                        this.consumeCodePoint();
                        this.consumeUnicodeRangeToken();
                    }
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                case VERTICAL_LINE:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return DASH_MATCH_TOKEN;
                    }
                    if (this.peekCodePoint(0) === VERTICAL_LINE) {
                        this.consumeCodePoint();
                        return COLUMN_TOKEN;
                    }
                    break;
                case TILDE:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return INCLUDE_MATCH_TOKEN;
                    }
                    break;
                case EOF:
                    return EOF_TOKEN;
            }
            if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                return WHITESPACE_TOKEN;
            }
            if (isDigit(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeNumericToken();
            }
            if (isNameStartCodePoint(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
            }
            return { type: 6 /* DELIM_TOKEN */, value: fromCodePoint$1(codePoint) };
        };
        Tokenizer.prototype.consumeCodePoint = function () {
            var value = this._value.shift();
            return typeof value === 'undefined' ? -1 : value;
        };
        Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
            this._value.unshift(codePoint);
        };
        Tokenizer.prototype.peekCodePoint = function (delta) {
            if (delta >= this._value.length) {
                return -1;
            }
            return this._value[delta];
        };
        Tokenizer.prototype.consumeUnicodeRangeToken = function () {
            var digits = [];
            var codePoint = this.consumeCodePoint();
            while (isHex(codePoint) && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
            }
            var questionMarks = false;
            while (codePoint === QUESTION_MARK && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
                questionMarks = true;
            }
            if (questionMarks) {
                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? ZERO : digit); })), 16);
                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? F : digit); })), 16);
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start_1, end: end };
            }
            var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
            if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                codePoint = this.consumeCodePoint();
                var endDigits = [];
                while (isHex(codePoint) && endDigits.length < 6) {
                    endDigits.push(codePoint);
                    codePoint = this.consumeCodePoint();
                }
                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: end };
            }
            else {
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: start };
            }
        };
        Tokenizer.prototype.consumeIdentLikeToken = function () {
            var value = this.consumeName();
            if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return this.consumeUrlToken();
            }
            else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return { type: 19 /* FUNCTION_TOKEN */, value: value };
            }
            return { type: 20 /* IDENT_TOKEN */, value: value };
        };
        Tokenizer.prototype.consumeUrlToken = function () {
            var value = [];
            this.consumeWhiteSpace();
            if (this.peekCodePoint(0) === EOF) {
                return { type: 22 /* URL_TOKEN */, value: '' };
            }
            var next = this.peekCodePoint(0);
            if (next === APOSTROPHE || next === QUOTATION_MARK) {
                var stringToken = this.consumeStringToken(this.consumeCodePoint());
                if (stringToken.type === 0 /* STRING_TOKEN */) {
                    this.consumeWhiteSpace();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return { type: 22 /* URL_TOKEN */, value: stringToken.value };
                    }
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
            }
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                    return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                }
                else if (isWhiteSpace(codePoint)) {
                    this.consumeWhiteSpace();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                    }
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
                else if (codePoint === QUOTATION_MARK ||
                    codePoint === APOSTROPHE ||
                    codePoint === LEFT_PARENTHESIS ||
                    isNonPrintableCodePoint(codePoint)) {
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
                else if (codePoint === REVERSE_SOLIDUS) {
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        value.push(this.consumeEscapedCodePoint());
                    }
                    else {
                        this.consumeBadUrlRemnants();
                        return BAD_URL_TOKEN;
                    }
                }
                else {
                    value.push(codePoint);
                }
            }
        };
        Tokenizer.prototype.consumeWhiteSpace = function () {
            while (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
            }
        };
        Tokenizer.prototype.consumeBadUrlRemnants = function () {
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                    return;
                }
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    this.consumeEscapedCodePoint();
                }
            }
        };
        Tokenizer.prototype.consumeStringSlice = function (count) {
            var SLICE_STACK_SIZE = 50000;
            var value = '';
            while (count > 0) {
                var amount = Math.min(SLICE_STACK_SIZE, count);
                value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
                count -= amount;
            }
            this._value.shift();
            return value;
        };
        Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
            var value = '';
            var i = 0;
            do {
                var codePoint = this._value[i];
                if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
                    value += this.consumeStringSlice(i);
                    return { type: 0 /* STRING_TOKEN */, value: value };
                }
                if (codePoint === LINE_FEED) {
                    this._value.splice(0, i);
                    return BAD_STRING_TOKEN;
                }
                if (codePoint === REVERSE_SOLIDUS) {
                    var next = this._value[i + 1];
                    if (next !== EOF && next !== undefined) {
                        if (next === LINE_FEED) {
                            value += this.consumeStringSlice(i);
                            i = -1;
                            this._value.shift();
                        }
                        else if (isValidEscape(codePoint, next)) {
                            value += this.consumeStringSlice(i);
                            value += fromCodePoint$1(this.consumeEscapedCodePoint());
                            i = -1;
                        }
                    }
                }
                i++;
            } while (true);
        };
        Tokenizer.prototype.consumeNumber = function () {
            var repr = [];
            var type = FLAG_INTEGER;
            var c1 = this.peekCodePoint(0);
            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                repr.push(this.consumeCodePoint());
            }
            while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
            }
            c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            if (c1 === FULL_STOP && isDigit(c2)) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
            }
            c1 = this.peekCodePoint(0);
            c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if ((c1 === E || c1 === e) && (((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3)) || isDigit(c2))) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
            }
            return [stringToNumber(repr), type];
        };
        Tokenizer.prototype.consumeNumericToken = function () {
            var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
            var c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if (isIdentifierStart(c1, c2, c3)) {
                var unit = this.consumeName();
                return { type: 15 /* DIMENSION_TOKEN */, number: number, flags: flags, unit: unit };
            }
            if (c1 === PERCENTAGE_SIGN) {
                this.consumeCodePoint();
                return { type: 16 /* PERCENTAGE_TOKEN */, number: number, flags: flags };
            }
            return { type: 17 /* NUMBER_TOKEN */, number: number, flags: flags };
        };
        Tokenizer.prototype.consumeEscapedCodePoint = function () {
            var codePoint = this.consumeCodePoint();
            if (isHex(codePoint)) {
                var hex = fromCodePoint$1(codePoint);
                while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                    hex += fromCodePoint$1(this.consumeCodePoint());
                }
                if (isWhiteSpace(this.peekCodePoint(0))) {
                    this.consumeCodePoint();
                }
                var hexCodePoint = parseInt(hex, 16);
                if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
                    return REPLACEMENT_CHARACTER;
                }
                return hexCodePoint;
            }
            if (codePoint === EOF) {
                return REPLACEMENT_CHARACTER;
            }
            return codePoint;
        };
        Tokenizer.prototype.consumeName = function () {
            var result = '';
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (isNameCodePoint(codePoint)) {
                    result += fromCodePoint$1(codePoint);
                }
                else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    result += fromCodePoint$1(this.consumeEscapedCodePoint());
                }
                else {
                    this.reconsumeCodePoint(codePoint);
                    return result;
                }
            }
        };
        return Tokenizer;
    }());

    var Parser = /** @class */ (function () {
        function Parser(tokens) {
            this._tokens = tokens;
        }
        Parser.create = function (value) {
            var tokenizer = new Tokenizer();
            tokenizer.write(value);
            return new Parser(tokenizer.read());
        };
        Parser.parseValue = function (value) {
            return Parser.create(value).parseComponentValue();
        };
        Parser.parseValues = function (value) {
            return Parser.create(value).parseComponentValues();
        };
        Parser.prototype.parseComponentValue = function () {
            var token = this.consumeToken();
            while (token.type === 31 /* WHITESPACE_TOKEN */) {
                token = this.consumeToken();
            }
            if (token.type === 32 /* EOF_TOKEN */) {
                throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            }
            this.reconsumeToken(token);
            var value = this.consumeComponentValue();
            do {
                token = this.consumeToken();
            } while (token.type === 31 /* WHITESPACE_TOKEN */);
            if (token.type === 32 /* EOF_TOKEN */) {
                return value;
            }
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
        };
        Parser.prototype.parseComponentValues = function () {
            var values = [];
            while (true) {
                var value = this.consumeComponentValue();
                if (value.type === 32 /* EOF_TOKEN */) {
                    return values;
                }
                values.push(value);
                values.push();
            }
        };
        Parser.prototype.consumeComponentValue = function () {
            var token = this.consumeToken();
            switch (token.type) {
                case 11 /* LEFT_CURLY_BRACKET_TOKEN */:
                case 28 /* LEFT_SQUARE_BRACKET_TOKEN */:
                case 2 /* LEFT_PARENTHESIS_TOKEN */:
                    return this.consumeSimpleBlock(token.type);
                case 19 /* FUNCTION_TOKEN */:
                    return this.consumeFunction(token);
            }
            return token;
        };
        Parser.prototype.consumeSimpleBlock = function (type) {
            var block = { type: type, values: [] };
            var token = this.consumeToken();
            while (true) {
                if (token.type === 32 /* EOF_TOKEN */ || isEndingTokenFor(token, type)) {
                    return block;
                }
                this.reconsumeToken(token);
                block.values.push(this.consumeComponentValue());
                token = this.consumeToken();
            }
        };
        Parser.prototype.consumeFunction = function (functionToken) {
            var cssFunction = {
                name: functionToken.value,
                values: [],
                type: 18 /* FUNCTION */
            };
            while (true) {
                var token = this.consumeToken();
                if (token.type === 32 /* EOF_TOKEN */ || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */) {
                    return cssFunction;
                }
                this.reconsumeToken(token);
                cssFunction.values.push(this.consumeComponentValue());
            }
        };
        Parser.prototype.consumeToken = function () {
            var token = this._tokens.shift();
            return typeof token === 'undefined' ? EOF_TOKEN : token;
        };
        Parser.prototype.reconsumeToken = function (token) {
            this._tokens.unshift(token);
        };
        return Parser;
    }());
    var isDimensionToken = function (token) { return token.type === 15 /* DIMENSION_TOKEN */; };
    var isNumberToken = function (token) { return token.type === 17 /* NUMBER_TOKEN */; };
    var isIdentToken = function (token) { return token.type === 20 /* IDENT_TOKEN */; };
    var isStringToken = function (token) { return token.type === 0 /* STRING_TOKEN */; };
    var isIdentWithValue = function (token, value) {
        return isIdentToken(token) && token.value === value;
    };
    var nonWhiteSpace = function (token) { return token.type !== 31 /* WHITESPACE_TOKEN */; };
    var nonFunctionArgSeparator = function (token) {
        return token.type !== 31 /* WHITESPACE_TOKEN */ && token.type !== 4 /* COMMA_TOKEN */;
    };
    var parseFunctionArgs = function (tokens) {
        var args = [];
        var arg = [];
        tokens.forEach(function (token) {
            if (token.type === 4 /* COMMA_TOKEN */) {
                if (arg.length === 0) {
                    throw new Error("Error parsing function args, zero tokens for arg");
                }
                args.push(arg);
                arg = [];
                return;
            }
            if (token.type !== 31 /* WHITESPACE_TOKEN */) {
                arg.push(token);
            }
        });
        if (arg.length) {
            args.push(arg);
        }
        return args;
    };
    var isEndingTokenFor = function (token, type) {
        if (type === 11 /* LEFT_CURLY_BRACKET_TOKEN */ && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */) {
            return true;
        }
        if (type === 28 /* LEFT_SQUARE_BRACKET_TOKEN */ && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */) {
            return true;
        }
        return type === 2 /* LEFT_PARENTHESIS_TOKEN */ && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */;
    };

    var isLength = function (token) {
        return token.type === 17 /* NUMBER_TOKEN */ || token.type === 15 /* DIMENSION_TOKEN */;
    };

    var isLengthPercentage = function (token) {
        return token.type === 16 /* PERCENTAGE_TOKEN */ || isLength(token);
    };
    var parseLengthPercentageTuple = function (tokens) {
        return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
    };
    var ZERO_LENGTH = {
        type: 17 /* NUMBER_TOKEN */,
        number: 0,
        flags: FLAG_INTEGER
    };
    var FIFTY_PERCENT = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 50,
        flags: FLAG_INTEGER
    };
    var HUNDRED_PERCENT = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 100,
        flags: FLAG_INTEGER
    };
    var getAbsoluteValueForTuple = function (tuple, width, height) {
        var x = tuple[0], y = tuple[1];
        return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
    };
    var getAbsoluteValue = function (token, parent) {
        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
            return (token.number / 100) * parent;
        }
        if (isDimensionToken(token)) {
            switch (token.unit) {
                case 'rem':
                case 'em':
                    return 16 * token.number; // TODO use correct font-size
                case 'px':
                default:
                    return token.number;
            }
        }
        return token.number;
    };

    var DEG = 'deg';
    var GRAD = 'grad';
    var RAD = 'rad';
    var TURN = 'turn';
    var angle = {
        name: 'angle',
        parse: function (_context, value) {
            if (value.type === 15 /* DIMENSION_TOKEN */) {
                switch (value.unit) {
                    case DEG:
                        return (Math.PI * value.number) / 180;
                    case GRAD:
                        return (Math.PI / 200) * value.number;
                    case RAD:
                        return value.number;
                    case TURN:
                        return Math.PI * 2 * value.number;
                }
            }
            throw new Error("Unsupported angle type");
        }
    };
    var isAngle = function (value) {
        if (value.type === 15 /* DIMENSION_TOKEN */) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
                return true;
            }
        }
        return false;
    };
    var parseNamedSide = function (tokens) {
        var sideOrCorner = tokens
            .filter(isIdentToken)
            .map(function (ident) { return ident.value; })
            .join(' ');
        switch (sideOrCorner) {
            case 'to bottom right':
            case 'to right bottom':
            case 'left top':
            case 'top left':
                return [ZERO_LENGTH, ZERO_LENGTH];
            case 'to top':
            case 'bottom':
                return deg(0);
            case 'to bottom left':
            case 'to left bottom':
            case 'right top':
            case 'top right':
                return [ZERO_LENGTH, HUNDRED_PERCENT];
            case 'to right':
            case 'left':
                return deg(90);
            case 'to top left':
            case 'to left top':
            case 'right bottom':
            case 'bottom right':
                return [HUNDRED_PERCENT, HUNDRED_PERCENT];
            case 'to bottom':
            case 'top':
                return deg(180);
            case 'to top right':
            case 'to right top':
            case 'left bottom':
            case 'bottom left':
                return [HUNDRED_PERCENT, ZERO_LENGTH];
            case 'to left':
            case 'right':
                return deg(270);
        }
        return 0;
    };
    var deg = function (deg) { return (Math.PI * deg) / 180; };

    var color$1 = {
        name: 'color',
        parse: function (context, value) {
            if (value.type === 18 /* FUNCTION */) {
                var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
                if (typeof colorFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
                }
                return colorFunction(context, value.values);
            }
            if (value.type === 5 /* HASH_TOKEN */) {
                if (value.value.length === 3) {
                    var r = value.value.substring(0, 1);
                    var g = value.value.substring(1, 2);
                    var b = value.value.substring(2, 3);
                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
                }
                if (value.value.length === 4) {
                    var r = value.value.substring(0, 1);
                    var g = value.value.substring(1, 2);
                    var b = value.value.substring(2, 3);
                    var a = value.value.substring(3, 4);
                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
                }
                if (value.value.length === 6) {
                    var r = value.value.substring(0, 2);
                    var g = value.value.substring(2, 4);
                    var b = value.value.substring(4, 6);
                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
                }
                if (value.value.length === 8) {
                    var r = value.value.substring(0, 2);
                    var g = value.value.substring(2, 4);
                    var b = value.value.substring(4, 6);
                    var a = value.value.substring(6, 8);
                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
                }
            }
            if (value.type === 20 /* IDENT_TOKEN */) {
                var namedColor = COLORS[value.value.toUpperCase()];
                if (typeof namedColor !== 'undefined') {
                    return namedColor;
                }
            }
            return COLORS.TRANSPARENT;
        }
    };
    var isTransparent = function (color) { return (0xff & color) === 0; };
    var asString = function (color) {
        var alpha = 0xff & color;
        var blue = 0xff & (color >> 8);
        var green = 0xff & (color >> 16);
        var red = 0xff & (color >> 24);
        return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
    };
    var pack = function (r, g, b, a) {
        return ((r << 24) | (g << 16) | (b << 8) | (Math.round(a * 255) << 0)) >>> 0;
    };
    var getTokenColorValue = function (token, i) {
        if (token.type === 17 /* NUMBER_TOKEN */) {
            return token.number;
        }
        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
            var max = i === 3 ? 1 : 255;
            return i === 3 ? (token.number / 100) * max : Math.round((token.number / 100) * max);
        }
        return 0;
    };
    var rgb = function (_context, args) {
        var tokens = args.filter(nonFunctionArgSeparator);
        if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            return pack(r, g, b, 1);
        }
        if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
            return pack(r, g, b, a);
        }
        return 0;
    };
    function hue2rgb(t1, t2, hue) {
        if (hue < 0) {
            hue += 1;
        }
        if (hue >= 1) {
            hue -= 1;
        }
        if (hue < 1 / 6) {
            return (t2 - t1) * hue * 6 + t1;
        }
        else if (hue < 1 / 2) {
            return t2;
        }
        else if (hue < 2 / 3) {
            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
        }
        else {
            return t1;
        }
    }
    var hsl = function (context, args) {
        var tokens = args.filter(nonFunctionArgSeparator);
        var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
        var h = (hue.type === 17 /* NUMBER_TOKEN */ ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
        var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
        var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
        var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
        if (s === 0) {
            return pack(l * 255, l * 255, l * 255, 1);
        }
        var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var t1 = l * 2 - t2;
        var r = hue2rgb(t1, t2, h + 1 / 3);
        var g = hue2rgb(t1, t2, h);
        var b = hue2rgb(t1, t2, h - 1 / 3);
        return pack(r * 255, g * 255, b * 255, a);
    };
    var SUPPORTED_COLOR_FUNCTIONS = {
        hsl: hsl,
        hsla: hsl,
        rgb: rgb,
        rgba: rgb
    };
    var parseColor = function (context, value) {
        return color$1.parse(context, Parser.create(value).parseComponentValue());
    };
    var COLORS = {
        ALICEBLUE: 0xf0f8ffff,
        ANTIQUEWHITE: 0xfaebd7ff,
        AQUA: 0x00ffffff,
        AQUAMARINE: 0x7fffd4ff,
        AZURE: 0xf0ffffff,
        BEIGE: 0xf5f5dcff,
        BISQUE: 0xffe4c4ff,
        BLACK: 0x000000ff,
        BLANCHEDALMOND: 0xffebcdff,
        BLUE: 0x0000ffff,
        BLUEVIOLET: 0x8a2be2ff,
        BROWN: 0xa52a2aff,
        BURLYWOOD: 0xdeb887ff,
        CADETBLUE: 0x5f9ea0ff,
        CHARTREUSE: 0x7fff00ff,
        CHOCOLATE: 0xd2691eff,
        CORAL: 0xff7f50ff,
        CORNFLOWERBLUE: 0x6495edff,
        CORNSILK: 0xfff8dcff,
        CRIMSON: 0xdc143cff,
        CYAN: 0x00ffffff,
        DARKBLUE: 0x00008bff,
        DARKCYAN: 0x008b8bff,
        DARKGOLDENROD: 0xb886bbff,
        DARKGRAY: 0xa9a9a9ff,
        DARKGREEN: 0x006400ff,
        DARKGREY: 0xa9a9a9ff,
        DARKKHAKI: 0xbdb76bff,
        DARKMAGENTA: 0x8b008bff,
        DARKOLIVEGREEN: 0x556b2fff,
        DARKORANGE: 0xff8c00ff,
        DARKORCHID: 0x9932ccff,
        DARKRED: 0x8b0000ff,
        DARKSALMON: 0xe9967aff,
        DARKSEAGREEN: 0x8fbc8fff,
        DARKSLATEBLUE: 0x483d8bff,
        DARKSLATEGRAY: 0x2f4f4fff,
        DARKSLATEGREY: 0x2f4f4fff,
        DARKTURQUOISE: 0x00ced1ff,
        DARKVIOLET: 0x9400d3ff,
        DEEPPINK: 0xff1493ff,
        DEEPSKYBLUE: 0x00bfffff,
        DIMGRAY: 0x696969ff,
        DIMGREY: 0x696969ff,
        DODGERBLUE: 0x1e90ffff,
        FIREBRICK: 0xb22222ff,
        FLORALWHITE: 0xfffaf0ff,
        FORESTGREEN: 0x228b22ff,
        FUCHSIA: 0xff00ffff,
        GAINSBORO: 0xdcdcdcff,
        GHOSTWHITE: 0xf8f8ffff,
        GOLD: 0xffd700ff,
        GOLDENROD: 0xdaa520ff,
        GRAY: 0x808080ff,
        GREEN: 0x008000ff,
        GREENYELLOW: 0xadff2fff,
        GREY: 0x808080ff,
        HONEYDEW: 0xf0fff0ff,
        HOTPINK: 0xff69b4ff,
        INDIANRED: 0xcd5c5cff,
        INDIGO: 0x4b0082ff,
        IVORY: 0xfffff0ff,
        KHAKI: 0xf0e68cff,
        LAVENDER: 0xe6e6faff,
        LAVENDERBLUSH: 0xfff0f5ff,
        LAWNGREEN: 0x7cfc00ff,
        LEMONCHIFFON: 0xfffacdff,
        LIGHTBLUE: 0xadd8e6ff,
        LIGHTCORAL: 0xf08080ff,
        LIGHTCYAN: 0xe0ffffff,
        LIGHTGOLDENRODYELLOW: 0xfafad2ff,
        LIGHTGRAY: 0xd3d3d3ff,
        LIGHTGREEN: 0x90ee90ff,
        LIGHTGREY: 0xd3d3d3ff,
        LIGHTPINK: 0xffb6c1ff,
        LIGHTSALMON: 0xffa07aff,
        LIGHTSEAGREEN: 0x20b2aaff,
        LIGHTSKYBLUE: 0x87cefaff,
        LIGHTSLATEGRAY: 0x778899ff,
        LIGHTSLATEGREY: 0x778899ff,
        LIGHTSTEELBLUE: 0xb0c4deff,
        LIGHTYELLOW: 0xffffe0ff,
        LIME: 0x00ff00ff,
        LIMEGREEN: 0x32cd32ff,
        LINEN: 0xfaf0e6ff,
        MAGENTA: 0xff00ffff,
        MAROON: 0x800000ff,
        MEDIUMAQUAMARINE: 0x66cdaaff,
        MEDIUMBLUE: 0x0000cdff,
        MEDIUMORCHID: 0xba55d3ff,
        MEDIUMPURPLE: 0x9370dbff,
        MEDIUMSEAGREEN: 0x3cb371ff,
        MEDIUMSLATEBLUE: 0x7b68eeff,
        MEDIUMSPRINGGREEN: 0x00fa9aff,
        MEDIUMTURQUOISE: 0x48d1ccff,
        MEDIUMVIOLETRED: 0xc71585ff,
        MIDNIGHTBLUE: 0x191970ff,
        MINTCREAM: 0xf5fffaff,
        MISTYROSE: 0xffe4e1ff,
        MOCCASIN: 0xffe4b5ff,
        NAVAJOWHITE: 0xffdeadff,
        NAVY: 0x000080ff,
        OLDLACE: 0xfdf5e6ff,
        OLIVE: 0x808000ff,
        OLIVEDRAB: 0x6b8e23ff,
        ORANGE: 0xffa500ff,
        ORANGERED: 0xff4500ff,
        ORCHID: 0xda70d6ff,
        PALEGOLDENROD: 0xeee8aaff,
        PALEGREEN: 0x98fb98ff,
        PALETURQUOISE: 0xafeeeeff,
        PALEVIOLETRED: 0xdb7093ff,
        PAPAYAWHIP: 0xffefd5ff,
        PEACHPUFF: 0xffdab9ff,
        PERU: 0xcd853fff,
        PINK: 0xffc0cbff,
        PLUM: 0xdda0ddff,
        POWDERBLUE: 0xb0e0e6ff,
        PURPLE: 0x800080ff,
        REBECCAPURPLE: 0x663399ff,
        RED: 0xff0000ff,
        ROSYBROWN: 0xbc8f8fff,
        ROYALBLUE: 0x4169e1ff,
        SADDLEBROWN: 0x8b4513ff,
        SALMON: 0xfa8072ff,
        SANDYBROWN: 0xf4a460ff,
        SEAGREEN: 0x2e8b57ff,
        SEASHELL: 0xfff5eeff,
        SIENNA: 0xa0522dff,
        SILVER: 0xc0c0c0ff,
        SKYBLUE: 0x87ceebff,
        SLATEBLUE: 0x6a5acdff,
        SLATEGRAY: 0x708090ff,
        SLATEGREY: 0x708090ff,
        SNOW: 0xfffafaff,
        SPRINGGREEN: 0x00ff7fff,
        STEELBLUE: 0x4682b4ff,
        TAN: 0xd2b48cff,
        TEAL: 0x008080ff,
        THISTLE: 0xd8bfd8ff,
        TOMATO: 0xff6347ff,
        TRANSPARENT: 0x00000000,
        TURQUOISE: 0x40e0d0ff,
        VIOLET: 0xee82eeff,
        WHEAT: 0xf5deb3ff,
        WHITE: 0xffffffff,
        WHITESMOKE: 0xf5f5f5ff,
        YELLOW: 0xffff00ff,
        YELLOWGREEN: 0x9acd32ff
    };

    var backgroundClip = {
        name: 'background-clip',
        initialValue: 'border-box',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.map(function (token) {
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'padding-box':
                            return 1 /* PADDING_BOX */;
                        case 'content-box':
                            return 2 /* CONTENT_BOX */;
                    }
                }
                return 0 /* BORDER_BOX */;
            });
        }
    };

    var backgroundColor = {
        name: "background-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var parseColorStop = function (context, args) {
        var color = color$1.parse(context, args[0]);
        var stop = args[1];
        return stop && isLengthPercentage(stop) ? { color: color, stop: stop } : { color: color, stop: null };
    };
    var processColorStops = function (stops, lineLength) {
        var first = stops[0];
        var last = stops[stops.length - 1];
        if (first.stop === null) {
            first.stop = ZERO_LENGTH;
        }
        if (last.stop === null) {
            last.stop = HUNDRED_PERCENT;
        }
        var processStops = [];
        var previous = 0;
        for (var i = 0; i < stops.length; i++) {
            var stop_1 = stops[i].stop;
            if (stop_1 !== null) {
                var absoluteValue = getAbsoluteValue(stop_1, lineLength);
                if (absoluteValue > previous) {
                    processStops.push(absoluteValue);
                }
                else {
                    processStops.push(previous);
                }
                previous = absoluteValue;
            }
            else {
                processStops.push(null);
            }
        }
        var gapBegin = null;
        for (var i = 0; i < processStops.length; i++) {
            var stop_2 = processStops[i];
            if (stop_2 === null) {
                if (gapBegin === null) {
                    gapBegin = i;
                }
            }
            else if (gapBegin !== null) {
                var gapLength = i - gapBegin;
                var beforeGap = processStops[gapBegin - 1];
                var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
                for (var g = 1; g <= gapLength; g++) {
                    processStops[gapBegin + g - 1] = gapValue * g;
                }
                gapBegin = null;
            }
        }
        return stops.map(function (_a, i) {
            var color = _a.color;
            return { color: color, stop: Math.max(Math.min(1, processStops[i] / lineLength), 0) };
        });
    };
    var getAngleFromCorner = function (corner, width, height) {
        var centerX = width / 2;
        var centerY = height / 2;
        var x = getAbsoluteValue(corner[0], width) - centerX;
        var y = centerY - getAbsoluteValue(corner[1], height);
        return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
    };
    var calculateGradientDirection = function (angle, width, height) {
        var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
        var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
        var halfWidth = width / 2;
        var halfHeight = height / 2;
        var halfLineLength = lineLength / 2;
        var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
        var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
        return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
    };
    var distance = function (a, b) { return Math.sqrt(a * a + b * b); };
    var findCorner = function (width, height, x, y, closest) {
        var corners = [
            [0, 0],
            [0, height],
            [width, 0],
            [width, height]
        ];
        return corners.reduce(function (stat, corner) {
            var cx = corner[0], cy = corner[1];
            var d = distance(x - cx, y - cy);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
                return {
                    optimumCorner: corner,
                    optimumDistance: d
                };
            }
            return stat;
        }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
        }).optimumCorner;
    };
    var calculateRadius = function (gradient, x, y, width, height) {
        var rx = 0;
        var ry = 0;
        switch (gradient.size) {
            case 0 /* CLOSEST_SIDE */:
                // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, it exactly meets the closest side in each dimension.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    rx = Math.min(Math.abs(x), Math.abs(x - width));
                    ry = Math.min(Math.abs(y), Math.abs(y - height));
                }
                break;
            case 2 /* CLOSEST_CORNER */:
                // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                    var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                    var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                    rx = distance(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                break;
            case 1 /* FARTHEST_SIDE */:
                // Same as closest-side, except the ending shape is sized based on the farthest side(s)
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    rx = Math.max(Math.abs(x), Math.abs(x - width));
                    ry = Math.max(Math.abs(y), Math.abs(y - height));
                }
                break;
            case 3 /* FARTHEST_CORNER */:
                // Same as closest-corner, except the ending shape is sized based on the farthest corner.
                // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                    var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                    var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                    rx = distance(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                break;
        }
        if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
        }
        return [rx, ry];
    };

    var linearGradient = function (context, tokens) {
        var angle$1 = deg(180);
        var stops = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            if (i === 0) {
                var firstToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */ && firstToken.value === 'to') {
                    angle$1 = parseNamedSide(arg);
                    return;
                }
                else if (isAngle(firstToken)) {
                    angle$1 = angle.parse(context, firstToken);
                    return;
                }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        });
        return { angle: angle$1, stops: stops, type: 1 /* LINEAR_GRADIENT */ };
    };

    var prefixLinearGradient = function (context, tokens) {
        var angle$1 = deg(180);
        var stops = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            if (i === 0) {
                var firstToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */ &&
                    ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
                    angle$1 = parseNamedSide(arg);
                    return;
                }
                else if (isAngle(firstToken)) {
                    angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                    return;
                }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        });
        return {
            angle: angle$1,
            stops: stops,
            type: 1 /* LINEAR_GRADIENT */
        };
    };

    var webkitGradient = function (context, tokens) {
        var angle = deg(180);
        var stops = [];
        var type = 1 /* LINEAR_GRADIENT */;
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var firstToken = arg[0];
            if (i === 0) {
                if (isIdentToken(firstToken) && firstToken.value === 'linear') {
                    type = 1 /* LINEAR_GRADIENT */;
                    return;
                }
                else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
                    type = 2 /* RADIAL_GRADIENT */;
                    return;
                }
            }
            if (firstToken.type === 18 /* FUNCTION */) {
                if (firstToken.name === 'from') {
                    var color = color$1.parse(context, firstToken.values[0]);
                    stops.push({ stop: ZERO_LENGTH, color: color });
                }
                else if (firstToken.name === 'to') {
                    var color = color$1.parse(context, firstToken.values[0]);
                    stops.push({ stop: HUNDRED_PERCENT, color: color });
                }
                else if (firstToken.name === 'color-stop') {
                    var values = firstToken.values.filter(nonFunctionArgSeparator);
                    if (values.length === 2) {
                        var color = color$1.parse(context, values[1]);
                        var stop_1 = values[0];
                        if (isNumberToken(stop_1)) {
                            stops.push({
                                stop: { type: 16 /* PERCENTAGE_TOKEN */, number: stop_1.number * 100, flags: stop_1.flags },
                                color: color
                            });
                        }
                    }
                }
            }
        });
        return type === 1 /* LINEAR_GRADIENT */
            ? {
                angle: (angle + deg(180)) % deg(360),
                stops: stops,
                type: type
            }
            : { size: size, shape: shape, stops: stops, position: position, type: type };
    };

    var CLOSEST_SIDE = 'closest-side';
    var FARTHEST_SIDE = 'farthest-side';
    var CLOSEST_CORNER = 'closest-corner';
    var FARTHEST_CORNER = 'farthest-corner';
    var CIRCLE = 'circle';
    var ELLIPSE = 'ellipse';
    var COVER = 'cover';
    var CONTAIN = 'contain';
    var radialGradient = function (context, tokens) {
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var stops = [];
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var isColorStop = true;
            if (i === 0) {
                var isAtPosition_1 = false;
                isColorStop = arg.reduce(function (acc, token) {
                    if (isAtPosition_1) {
                        if (isIdentToken(token)) {
                            switch (token.value) {
                                case 'center':
                                    position.push(FIFTY_PERCENT);
                                    return acc;
                                case 'top':
                                case 'left':
                                    position.push(ZERO_LENGTH);
                                    return acc;
                                case 'right':
                                case 'bottom':
                                    position.push(HUNDRED_PERCENT);
                                    return acc;
                            }
                        }
                        else if (isLengthPercentage(token) || isLength(token)) {
                            position.push(token);
                        }
                    }
                    else if (isIdentToken(token)) {
                        switch (token.value) {
                            case CIRCLE:
                                shape = 0 /* CIRCLE */;
                                return false;
                            case ELLIPSE:
                                shape = 1 /* ELLIPSE */;
                                return false;
                            case 'at':
                                isAtPosition_1 = true;
                                return false;
                            case CLOSEST_SIDE:
                                size = 0 /* CLOSEST_SIDE */;
                                return false;
                            case COVER:
                            case FARTHEST_SIDE:
                                size = 1 /* FARTHEST_SIDE */;
                                return false;
                            case CONTAIN:
                            case CLOSEST_CORNER:
                                size = 2 /* CLOSEST_CORNER */;
                                return false;
                            case FARTHEST_CORNER:
                                size = 3 /* FARTHEST_CORNER */;
                                return false;
                        }
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(size)) {
                            size = [];
                        }
                        size.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            if (isColorStop) {
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            }
        });
        return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
    };

    var prefixRadialGradient = function (context, tokens) {
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var stops = [];
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var isColorStop = true;
            if (i === 0) {
                isColorStop = arg.reduce(function (acc, token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case 'center':
                                position.push(FIFTY_PERCENT);
                                return false;
                            case 'top':
                            case 'left':
                                position.push(ZERO_LENGTH);
                                return false;
                            case 'right':
                            case 'bottom':
                                position.push(HUNDRED_PERCENT);
                                return false;
                        }
                    }
                    else if (isLengthPercentage(token) || isLength(token)) {
                        position.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            else if (i === 1) {
                isColorStop = arg.reduce(function (acc, token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case CIRCLE:
                                shape = 0 /* CIRCLE */;
                                return false;
                            case ELLIPSE:
                                shape = 1 /* ELLIPSE */;
                                return false;
                            case CONTAIN:
                            case CLOSEST_SIDE:
                                size = 0 /* CLOSEST_SIDE */;
                                return false;
                            case FARTHEST_SIDE:
                                size = 1 /* FARTHEST_SIDE */;
                                return false;
                            case CLOSEST_CORNER:
                                size = 2 /* CLOSEST_CORNER */;
                                return false;
                            case COVER:
                            case FARTHEST_CORNER:
                                size = 3 /* FARTHEST_CORNER */;
                                return false;
                        }
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(size)) {
                            size = [];
                        }
                        size.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            if (isColorStop) {
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            }
        });
        return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
    };

    var isLinearGradient = function (background) {
        return background.type === 1 /* LINEAR_GRADIENT */;
    };
    var isRadialGradient = function (background) {
        return background.type === 2 /* RADIAL_GRADIENT */;
    };
    var image = {
        name: 'image',
        parse: function (context, value) {
            if (value.type === 22 /* URL_TOKEN */) {
                var image_1 = { url: value.value, type: 0 /* URL */ };
                context.cache.addImage(value.value);
                return image_1;
            }
            if (value.type === 18 /* FUNCTION */) {
                var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
                if (typeof imageFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
                }
                return imageFunction(context, value.values);
            }
            throw new Error("Unsupported image type " + value.type);
        }
    };
    function isSupportedImage(value) {
        return (!(value.type === 20 /* IDENT_TOKEN */ && value.value === 'none') &&
            (value.type !== 18 /* FUNCTION */ || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]));
    }
    var SUPPORTED_IMAGE_FUNCTIONS = {
        'linear-gradient': linearGradient,
        '-moz-linear-gradient': prefixLinearGradient,
        '-ms-linear-gradient': prefixLinearGradient,
        '-o-linear-gradient': prefixLinearGradient,
        '-webkit-linear-gradient': prefixLinearGradient,
        'radial-gradient': radialGradient,
        '-moz-radial-gradient': prefixRadialGradient,
        '-ms-radial-gradient': prefixRadialGradient,
        '-o-radial-gradient': prefixRadialGradient,
        '-webkit-radial-gradient': prefixRadialGradient,
        '-webkit-gradient': webkitGradient
    };

    var backgroundImage = {
        name: 'background-image',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return [];
            }
            return tokens
                .filter(function (value) { return nonFunctionArgSeparator(value) && isSupportedImage(value); })
                .map(function (value) { return image.parse(context, value); });
        }
    };

    var backgroundOrigin = {
        name: 'background-origin',
        initialValue: 'border-box',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.map(function (token) {
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'padding-box':
                            return 1 /* PADDING_BOX */;
                        case 'content-box':
                            return 2 /* CONTENT_BOX */;
                    }
                }
                return 0 /* BORDER_BOX */;
            });
        }
    };

    var backgroundPosition = {
        name: 'background-position',
        initialValue: '0% 0%',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens)
                .map(function (values) { return values.filter(isLengthPercentage); })
                .map(parseLengthPercentageTuple);
        }
    };

    var backgroundRepeat = {
        name: 'background-repeat',
        initialValue: 'repeat',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens)
                .map(function (values) {
                return values
                    .filter(isIdentToken)
                    .map(function (token) { return token.value; })
                    .join(' ');
            })
                .map(parseBackgroundRepeat);
        }
    };
    var parseBackgroundRepeat = function (value) {
        switch (value) {
            case 'no-repeat':
                return 1 /* NO_REPEAT */;
            case 'repeat-x':
            case 'repeat no-repeat':
                return 2 /* REPEAT_X */;
            case 'repeat-y':
            case 'no-repeat repeat':
                return 3 /* REPEAT_Y */;
            case 'repeat':
            default:
                return 0 /* REPEAT */;
        }
    };

    var BACKGROUND_SIZE;
    (function (BACKGROUND_SIZE) {
        BACKGROUND_SIZE["AUTO"] = "auto";
        BACKGROUND_SIZE["CONTAIN"] = "contain";
        BACKGROUND_SIZE["COVER"] = "cover";
    })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
    var backgroundSize = {
        name: 'background-size',
        initialValue: '0',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens).map(function (values) { return values.filter(isBackgroundSizeInfoToken); });
        }
    };
    var isBackgroundSizeInfoToken = function (value) {
        return isIdentToken(value) || isLengthPercentage(value);
    };

    var borderColorForSide = function (side) { return ({
        name: "border-" + side + "-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    }); };
    var borderTopColor = borderColorForSide('top');
    var borderRightColor = borderColorForSide('right');
    var borderBottomColor = borderColorForSide('bottom');
    var borderLeftColor = borderColorForSide('left');

    var borderRadiusForSide = function (side) { return ({
        name: "border-radius-" + side,
        initialValue: '0 0',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
        }
    }); };
    var borderTopLeftRadius = borderRadiusForSide('top-left');
    var borderTopRightRadius = borderRadiusForSide('top-right');
    var borderBottomRightRadius = borderRadiusForSide('bottom-right');
    var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

    var borderStyleForSide = function (side) { return ({
        name: "border-" + side + "-style",
        initialValue: 'solid',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, style) {
            switch (style) {
                case 'none':
                    return 0 /* NONE */;
                case 'dashed':
                    return 2 /* DASHED */;
                case 'dotted':
                    return 3 /* DOTTED */;
                case 'double':
                    return 4 /* DOUBLE */;
            }
            return 1 /* SOLID */;
        }
    }); };
    var borderTopStyle = borderStyleForSide('top');
    var borderRightStyle = borderStyleForSide('right');
    var borderBottomStyle = borderStyleForSide('bottom');
    var borderLeftStyle = borderStyleForSide('left');

    var borderWidthForSide = function (side) { return ({
        name: "border-" + side + "-width",
        initialValue: '0',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isDimensionToken(token)) {
                return token.number;
            }
            return 0;
        }
    }); };
    var borderTopWidth = borderWidthForSide('top');
    var borderRightWidth = borderWidthForSide('right');
    var borderBottomWidth = borderWidthForSide('bottom');
    var borderLeftWidth = borderWidthForSide('left');

    var color = {
        name: "color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var direction = {
        name: 'direction',
        initialValue: 'ltr',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, direction) {
            switch (direction) {
                case 'rtl':
                    return 1 /* RTL */;
                case 'ltr':
                default:
                    return 0 /* LTR */;
            }
        }
    };

    var display = {
        name: 'display',
        initialValue: 'inline-block',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).reduce(function (bit, token) {
                return bit | parseDisplayValue(token.value);
            }, 0 /* NONE */);
        }
    };
    var parseDisplayValue = function (display) {
        switch (display) {
            case 'block':
            case '-webkit-box':
                return 2 /* BLOCK */;
            case 'inline':
                return 4 /* INLINE */;
            case 'run-in':
                return 8 /* RUN_IN */;
            case 'flow':
                return 16 /* FLOW */;
            case 'flow-root':
                return 32 /* FLOW_ROOT */;
            case 'table':
                return 64 /* TABLE */;
            case 'flex':
            case '-webkit-flex':
                return 128 /* FLEX */;
            case 'grid':
            case '-ms-grid':
                return 256 /* GRID */;
            case 'ruby':
                return 512 /* RUBY */;
            case 'subgrid':
                return 1024 /* SUBGRID */;
            case 'list-item':
                return 2048 /* LIST_ITEM */;
            case 'table-row-group':
                return 4096 /* TABLE_ROW_GROUP */;
            case 'table-header-group':
                return 8192 /* TABLE_HEADER_GROUP */;
            case 'table-footer-group':
                return 16384 /* TABLE_FOOTER_GROUP */;
            case 'table-row':
                return 32768 /* TABLE_ROW */;
            case 'table-cell':
                return 65536 /* TABLE_CELL */;
            case 'table-column-group':
                return 131072 /* TABLE_COLUMN_GROUP */;
            case 'table-column':
                return 262144 /* TABLE_COLUMN */;
            case 'table-caption':
                return 524288 /* TABLE_CAPTION */;
            case 'ruby-base':
                return 1048576 /* RUBY_BASE */;
            case 'ruby-text':
                return 2097152 /* RUBY_TEXT */;
            case 'ruby-base-container':
                return 4194304 /* RUBY_BASE_CONTAINER */;
            case 'ruby-text-container':
                return 8388608 /* RUBY_TEXT_CONTAINER */;
            case 'contents':
                return 16777216 /* CONTENTS */;
            case 'inline-block':
                return 33554432 /* INLINE_BLOCK */;
            case 'inline-list-item':
                return 67108864 /* INLINE_LIST_ITEM */;
            case 'inline-table':
                return 134217728 /* INLINE_TABLE */;
            case 'inline-flex':
                return 268435456 /* INLINE_FLEX */;
            case 'inline-grid':
                return 536870912 /* INLINE_GRID */;
        }
        return 0 /* NONE */;
    };

    var float = {
        name: 'float',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, float) {
            switch (float) {
                case 'left':
                    return 1 /* LEFT */;
                case 'right':
                    return 2 /* RIGHT */;
                case 'inline-start':
                    return 3 /* INLINE_START */;
                case 'inline-end':
                    return 4 /* INLINE_END */;
            }
            return 0 /* NONE */;
        }
    };

    var letterSpacing = {
        name: 'letter-spacing',
        initialValue: '0',
        prefix: false,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'normal') {
                return 0;
            }
            if (token.type === 17 /* NUMBER_TOKEN */) {
                return token.number;
            }
            if (token.type === 15 /* DIMENSION_TOKEN */) {
                return token.number;
            }
            return 0;
        }
    };

    var LINE_BREAK;
    (function (LINE_BREAK) {
        LINE_BREAK["NORMAL"] = "normal";
        LINE_BREAK["STRICT"] = "strict";
    })(LINE_BREAK || (LINE_BREAK = {}));
    var lineBreak = {
        name: 'line-break',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, lineBreak) {
            switch (lineBreak) {
                case 'strict':
                    return LINE_BREAK.STRICT;
                case 'normal':
                default:
                    return LINE_BREAK.NORMAL;
            }
        }
    };

    var lineHeight = {
        name: 'line-height',
        initialValue: 'normal',
        prefix: false,
        type: 4 /* TOKEN_VALUE */
    };
    var computeLineHeight = function (token, fontSize) {
        if (isIdentToken(token) && token.value === 'normal') {
            return 1.2 * fontSize;
        }
        else if (token.type === 17 /* NUMBER_TOKEN */) {
            return fontSize * token.number;
        }
        else if (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize);
        }
        return fontSize;
    };

    var listStyleImage = {
        name: 'list-style-image',
        initialValue: 'none',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
                return null;
            }
            return image.parse(context, token);
        }
    };

    var listStylePosition = {
        name: 'list-style-position',
        initialValue: 'outside',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, position) {
            switch (position) {
                case 'inside':
                    return 0 /* INSIDE */;
                case 'outside':
                default:
                    return 1 /* OUTSIDE */;
            }
        }
    };

    var listStyleType = {
        name: 'list-style-type',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, type) {
            switch (type) {
                case 'disc':
                    return 0 /* DISC */;
                case 'circle':
                    return 1 /* CIRCLE */;
                case 'square':
                    return 2 /* SQUARE */;
                case 'decimal':
                    return 3 /* DECIMAL */;
                case 'cjk-decimal':
                    return 4 /* CJK_DECIMAL */;
                case 'decimal-leading-zero':
                    return 5 /* DECIMAL_LEADING_ZERO */;
                case 'lower-roman':
                    return 6 /* LOWER_ROMAN */;
                case 'upper-roman':
                    return 7 /* UPPER_ROMAN */;
                case 'lower-greek':
                    return 8 /* LOWER_GREEK */;
                case 'lower-alpha':
                    return 9 /* LOWER_ALPHA */;
                case 'upper-alpha':
                    return 10 /* UPPER_ALPHA */;
                case 'arabic-indic':
                    return 11 /* ARABIC_INDIC */;
                case 'armenian':
                    return 12 /* ARMENIAN */;
                case 'bengali':
                    return 13 /* BENGALI */;
                case 'cambodian':
                    return 14 /* CAMBODIAN */;
                case 'cjk-earthly-branch':
                    return 15 /* CJK_EARTHLY_BRANCH */;
                case 'cjk-heavenly-stem':
                    return 16 /* CJK_HEAVENLY_STEM */;
                case 'cjk-ideographic':
                    return 17 /* CJK_IDEOGRAPHIC */;
                case 'devanagari':
                    return 18 /* DEVANAGARI */;
                case 'ethiopic-numeric':
                    return 19 /* ETHIOPIC_NUMERIC */;
                case 'georgian':
                    return 20 /* GEORGIAN */;
                case 'gujarati':
                    return 21 /* GUJARATI */;
                case 'gurmukhi':
                    return 22 /* GURMUKHI */;
                case 'hebrew':
                    return 22 /* HEBREW */;
                case 'hiragana':
                    return 23 /* HIRAGANA */;
                case 'hiragana-iroha':
                    return 24 /* HIRAGANA_IROHA */;
                case 'japanese-formal':
                    return 25 /* JAPANESE_FORMAL */;
                case 'japanese-informal':
                    return 26 /* JAPANESE_INFORMAL */;
                case 'kannada':
                    return 27 /* KANNADA */;
                case 'katakana':
                    return 28 /* KATAKANA */;
                case 'katakana-iroha':
                    return 29 /* KATAKANA_IROHA */;
                case 'khmer':
                    return 30 /* KHMER */;
                case 'korean-hangul-formal':
                    return 31 /* KOREAN_HANGUL_FORMAL */;
                case 'korean-hanja-formal':
                    return 32 /* KOREAN_HANJA_FORMAL */;
                case 'korean-hanja-informal':
                    return 33 /* KOREAN_HANJA_INFORMAL */;
                case 'lao':
                    return 34 /* LAO */;
                case 'lower-armenian':
                    return 35 /* LOWER_ARMENIAN */;
                case 'malayalam':
                    return 36 /* MALAYALAM */;
                case 'mongolian':
                    return 37 /* MONGOLIAN */;
                case 'myanmar':
                    return 38 /* MYANMAR */;
                case 'oriya':
                    return 39 /* ORIYA */;
                case 'persian':
                    return 40 /* PERSIAN */;
                case 'simp-chinese-formal':
                    return 41 /* SIMP_CHINESE_FORMAL */;
                case 'simp-chinese-informal':
                    return 42 /* SIMP_CHINESE_INFORMAL */;
                case 'tamil':
                    return 43 /* TAMIL */;
                case 'telugu':
                    return 44 /* TELUGU */;
                case 'thai':
                    return 45 /* THAI */;
                case 'tibetan':
                    return 46 /* TIBETAN */;
                case 'trad-chinese-formal':
                    return 47 /* TRAD_CHINESE_FORMAL */;
                case 'trad-chinese-informal':
                    return 48 /* TRAD_CHINESE_INFORMAL */;
                case 'upper-armenian':
                    return 49 /* UPPER_ARMENIAN */;
                case 'disclosure-open':
                    return 50 /* DISCLOSURE_OPEN */;
                case 'disclosure-closed':
                    return 51 /* DISCLOSURE_CLOSED */;
                case 'none':
                default:
                    return -1 /* NONE */;
            }
        }
    };

    var marginForSide = function (side) { return ({
        name: "margin-" + side,
        initialValue: '0',
        prefix: false,
        type: 4 /* TOKEN_VALUE */
    }); };
    var marginTop = marginForSide('top');
    var marginRight = marginForSide('right');
    var marginBottom = marginForSide('bottom');
    var marginLeft = marginForSide('left');

    var overflow = {
        name: 'overflow',
        initialValue: 'visible',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).map(function (overflow) {
                switch (overflow.value) {
                    case 'hidden':
                        return 1 /* HIDDEN */;
                    case 'scroll':
                        return 2 /* SCROLL */;
                    case 'clip':
                        return 3 /* CLIP */;
                    case 'auto':
                        return 4 /* AUTO */;
                    case 'visible':
                    default:
                        return 0 /* VISIBLE */;
                }
            });
        }
    };

    var overflowWrap = {
        name: 'overflow-wrap',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, overflow) {
            switch (overflow) {
                case 'break-word':
                    return "break-word" /* BREAK_WORD */;
                case 'normal':
                default:
                    return "normal" /* NORMAL */;
            }
        }
    };

    var paddingForSide = function (side) { return ({
        name: "padding-" + side,
        initialValue: '0',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'length-percentage'
    }); };
    var paddingTop = paddingForSide('top');
    var paddingRight = paddingForSide('right');
    var paddingBottom = paddingForSide('bottom');
    var paddingLeft = paddingForSide('left');

    var textAlign = {
        name: 'text-align',
        initialValue: 'left',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, textAlign) {
            switch (textAlign) {
                case 'right':
                    return 2 /* RIGHT */;
                case 'center':
                case 'justify':
                    return 1 /* CENTER */;
                case 'left':
                default:
                    return 0 /* LEFT */;
            }
        }
    };

    var position = {
        name: 'position',
        initialValue: 'static',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, position) {
            switch (position) {
                case 'relative':
                    return 1 /* RELATIVE */;
                case 'absolute':
                    return 2 /* ABSOLUTE */;
                case 'fixed':
                    return 3 /* FIXED */;
                case 'sticky':
                    return 4 /* STICKY */;
            }
            return 0 /* STATIC */;
        }
    };

    var textShadow = {
        name: 'text-shadow',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                return [];
            }
            return parseFunctionArgs(tokens).map(function (values) {
                var shadow = {
                    color: COLORS.TRANSPARENT,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH
                };
                var c = 0;
                for (var i = 0; i < values.length; i++) {
                    var token = values[i];
                    if (isLength(token)) {
                        if (c === 0) {
                            shadow.offsetX = token;
                        }
                        else if (c === 1) {
                            shadow.offsetY = token;
                        }
                        else {
                            shadow.blur = token;
                        }
                        c++;
                    }
                    else {
                        shadow.color = color$1.parse(context, token);
                    }
                }
                return shadow;
            });
        }
    };

    var textTransform = {
        name: 'text-transform',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, textTransform) {
            switch (textTransform) {
                case 'uppercase':
                    return 2 /* UPPERCASE */;
                case 'lowercase':
                    return 1 /* LOWERCASE */;
                case 'capitalize':
                    return 3 /* CAPITALIZE */;
            }
            return 0 /* NONE */;
        }
    };

    var transform$1 = {
        name: 'transform',
        initialValue: 'none',
        prefix: true,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
                return null;
            }
            if (token.type === 18 /* FUNCTION */) {
                var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
                if (typeof transformFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
                }
                return transformFunction(token.values);
            }
            return null;
        }
    };
    var matrix = function (args) {
        var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
        return values.length === 6 ? values : null;
    };
    // doesn't support 3D transforms at the moment
    var matrix3d = function (args) {
        var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
        var a1 = values[0], b1 = values[1]; values[2]; values[3]; var a2 = values[4], b2 = values[5]; values[6]; values[7]; values[8]; values[9]; values[10]; values[11]; var a4 = values[12], b4 = values[13]; values[14]; values[15];
        return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
    };
    var SUPPORTED_TRANSFORM_FUNCTIONS = {
        matrix: matrix,
        matrix3d: matrix3d
    };

    var DEFAULT_VALUE = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 50,
        flags: FLAG_INTEGER
    };
    var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
    var transformOrigin = {
        name: 'transform-origin',
        initialValue: '50% 50%',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);
            if (origins.length !== 2) {
                return DEFAULT;
            }
            return [origins[0], origins[1]];
        }
    };

    var visibility = {
        name: 'visible',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, visibility) {
            switch (visibility) {
                case 'hidden':
                    return 1 /* HIDDEN */;
                case 'collapse':
                    return 2 /* COLLAPSE */;
                case 'visible':
                default:
                    return 0 /* VISIBLE */;
            }
        }
    };

    var WORD_BREAK;
    (function (WORD_BREAK) {
        WORD_BREAK["NORMAL"] = "normal";
        WORD_BREAK["BREAK_ALL"] = "break-all";
        WORD_BREAK["KEEP_ALL"] = "keep-all";
    })(WORD_BREAK || (WORD_BREAK = {}));
    var wordBreak = {
        name: 'word-break',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, wordBreak) {
            switch (wordBreak) {
                case 'break-all':
                    return WORD_BREAK.BREAK_ALL;
                case 'keep-all':
                    return WORD_BREAK.KEEP_ALL;
                case 'normal':
                default:
                    return WORD_BREAK.NORMAL;
            }
        }
    };

    var zIndex = {
        name: 'z-index',
        initialValue: 'auto',
        prefix: false,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */) {
                return { auto: true, order: 0 };
            }
            if (isNumberToken(token)) {
                return { auto: false, order: token.number };
            }
            throw new Error("Invalid z-index number parsed");
        }
    };

    var time = {
        name: 'time',
        parse: function (_context, value) {
            if (value.type === 15 /* DIMENSION_TOKEN */) {
                switch (value.unit.toLowerCase()) {
                    case 's':
                        return 1000 * value.number;
                    case 'ms':
                        return value.number;
                }
            }
            throw new Error("Unsupported time type");
        }
    };

    var opacity = {
        name: 'opacity',
        initialValue: '1',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isNumberToken(token)) {
                return token.number;
            }
            return 1;
        }
    };

    var textDecorationColor = {
        name: "text-decoration-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var textDecorationLine = {
        name: 'text-decoration-line',
        initialValue: 'none',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens
                .filter(isIdentToken)
                .map(function (token) {
                switch (token.value) {
                    case 'underline':
                        return 1 /* UNDERLINE */;
                    case 'overline':
                        return 2 /* OVERLINE */;
                    case 'line-through':
                        return 3 /* LINE_THROUGH */;
                    case 'none':
                        return 4 /* BLINK */;
                }
                return 0 /* NONE */;
            })
                .filter(function (line) { return line !== 0 /* NONE */; });
        }
    };

    var fontFamily = {
        name: "font-family",
        initialValue: '',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function (token) {
                switch (token.type) {
                    case 20 /* IDENT_TOKEN */:
                    case 0 /* STRING_TOKEN */:
                        accumulator.push(token.value);
                        break;
                    case 17 /* NUMBER_TOKEN */:
                        accumulator.push(token.number.toString());
                        break;
                    case 4 /* COMMA_TOKEN */:
                        results.push(accumulator.join(' '));
                        accumulator.length = 0;
                        break;
                }
            });
            if (accumulator.length) {
                results.push(accumulator.join(' '));
            }
            return results.map(function (result) { return (result.indexOf(' ') === -1 ? result : "'" + result + "'"); });
        }
    };

    var fontSize = {
        name: "font-size",
        initialValue: '0',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'length'
    };

    var fontWeight = {
        name: 'font-weight',
        initialValue: 'normal',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isNumberToken(token)) {
                return token.number;
            }
            if (isIdentToken(token)) {
                switch (token.value) {
                    case 'bold':
                        return 700;
                    case 'normal':
                    default:
                        return 400;
                }
            }
            return 400;
        }
    };

    var fontVariant = {
        name: 'font-variant',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).map(function (token) { return token.value; });
        }
    };

    var fontStyle = {
        name: 'font-style',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, overflow) {
            switch (overflow) {
                case 'oblique':
                    return "oblique" /* OBLIQUE */;
                case 'italic':
                    return "italic" /* ITALIC */;
                case 'normal':
                default:
                    return "normal" /* NORMAL */;
            }
        }
    };

    var contains = function (bit, value) { return (bit & value) !== 0; };

    var content = {
        name: 'content',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return [];
            }
            return tokens;
        }
    };

    var counterIncrement = {
        name: 'counter-increment',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return null;
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return null;
            }
            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i = 0; i < filtered.length; i++) {
                var counter = filtered[i];
                var next = filtered[i + 1];
                if (counter.type === 20 /* IDENT_TOKEN */) {
                    var increment = next && isNumberToken(next) ? next.number : 1;
                    increments.push({ counter: counter.value, increment: increment });
                }
            }
            return increments;
        }
    };

    var counterReset = {
        name: 'counter-reset',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i = 0; i < filtered.length; i++) {
                var counter = filtered[i];
                var next = filtered[i + 1];
                if (isIdentToken(counter) && counter.value !== 'none') {
                    var reset = next && isNumberToken(next) ? next.number : 0;
                    resets.push({ counter: counter.value, reset: reset });
                }
            }
            return resets;
        }
    };

    var duration = {
        name: 'duration',
        initialValue: '0s',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (context, tokens) {
            return tokens.filter(isDimensionToken).map(function (token) { return time.parse(context, token); });
        }
    };

    var quotes = {
        name: 'quotes',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return null;
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return null;
            }
            var quotes = [];
            var filtered = tokens.filter(isStringToken);
            if (filtered.length % 2 !== 0) {
                return null;
            }
            for (var i = 0; i < filtered.length; i += 2) {
                var open_1 = filtered[i].value;
                var close_1 = filtered[i + 1].value;
                quotes.push({ open: open_1, close: close_1 });
            }
            return quotes;
        }
    };
    var getQuote = function (quotes, depth, open) {
        if (!quotes) {
            return '';
        }
        var quote = quotes[Math.min(depth, quotes.length - 1)];
        if (!quote) {
            return '';
        }
        return open ? quote.open : quote.close;
    };

    var boxShadow = {
        name: 'box-shadow',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                return [];
            }
            return parseFunctionArgs(tokens).map(function (values) {
                var shadow = {
                    color: 0x000000ff,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH,
                    spread: ZERO_LENGTH,
                    inset: false
                };
                var c = 0;
                for (var i = 0; i < values.length; i++) {
                    var token = values[i];
                    if (isIdentWithValue(token, 'inset')) {
                        shadow.inset = true;
                    }
                    else if (isLength(token)) {
                        if (c === 0) {
                            shadow.offsetX = token;
                        }
                        else if (c === 1) {
                            shadow.offsetY = token;
                        }
                        else if (c === 2) {
                            shadow.blur = token;
                        }
                        else {
                            shadow.spread = token;
                        }
                        c++;
                    }
                    else {
                        shadow.color = color$1.parse(context, token);
                    }
                }
                return shadow;
            });
        }
    };

    var paintOrder = {
        name: 'paint-order',
        initialValue: 'normal',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var DEFAULT_VALUE = [0 /* FILL */, 1 /* STROKE */, 2 /* MARKERS */];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function (token) {
                switch (token.value) {
                    case 'stroke':
                        layers.push(1 /* STROKE */);
                        break;
                    case 'fill':
                        layers.push(0 /* FILL */);
                        break;
                    case 'markers':
                        layers.push(2 /* MARKERS */);
                        break;
                }
            });
            DEFAULT_VALUE.forEach(function (value) {
                if (layers.indexOf(value) === -1) {
                    layers.push(value);
                }
            });
            return layers;
        }
    };

    var webkitTextStrokeColor = {
        name: "-webkit-text-stroke-color",
        initialValue: 'currentcolor',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var webkitTextStrokeWidth = {
        name: "-webkit-text-stroke-width",
        initialValue: '0',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isDimensionToken(token)) {
                return token.number;
            }
            return 0;
        }
    };

    var CSSParsedDeclaration = /** @class */ (function () {
        function CSSParsedDeclaration(context, declaration) {
            var _a, _b;
            this.animationDuration = parse(context, duration, declaration.animationDuration);
            this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
            this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
            this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
            this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
            this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
            this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
            this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
            this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
            this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
            this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
            this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
            this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
            this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
            this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
            this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
            this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
            this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
            this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
            this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
            this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
            this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
            this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
            this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
            this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
            this.color = parse(context, color, declaration.color);
            this.direction = parse(context, direction, declaration.direction);
            this.display = parse(context, display, declaration.display);
            this.float = parse(context, float, declaration.cssFloat);
            this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
            this.fontSize = parse(context, fontSize, declaration.fontSize);
            this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
            this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
            this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
            this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
            this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
            this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
            this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
            this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
            this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
            this.marginTop = parse(context, marginTop, declaration.marginTop);
            this.marginRight = parse(context, marginRight, declaration.marginRight);
            this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
            this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
            this.opacity = parse(context, opacity, declaration.opacity);
            var overflowTuple = parse(context, overflow, declaration.overflow);
            this.overflowX = overflowTuple[0];
            this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
            this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
            this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
            this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
            this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
            this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
            this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
            this.position = parse(context, position, declaration.position);
            this.textAlign = parse(context, textAlign, declaration.textAlign);
            this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
            this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
            this.textShadow = parse(context, textShadow, declaration.textShadow);
            this.textTransform = parse(context, textTransform, declaration.textTransform);
            this.transform = parse(context, transform$1, declaration.transform);
            this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
            this.visibility = parse(context, visibility, declaration.visibility);
            this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
            this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
            this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
            this.zIndex = parse(context, zIndex, declaration.zIndex);
        }
        CSSParsedDeclaration.prototype.isVisible = function () {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */;
        };
        CSSParsedDeclaration.prototype.isTransparent = function () {
            return isTransparent(this.backgroundColor);
        };
        CSSParsedDeclaration.prototype.isTransformed = function () {
            return this.transform !== null;
        };
        CSSParsedDeclaration.prototype.isPositioned = function () {
            return this.position !== 0 /* STATIC */;
        };
        CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
            return this.isPositioned() && !this.zIndex.auto;
        };
        CSSParsedDeclaration.prototype.isFloating = function () {
            return this.float !== 0 /* NONE */;
        };
        CSSParsedDeclaration.prototype.isInlineLevel = function () {
            return (contains(this.display, 4 /* INLINE */) ||
                contains(this.display, 33554432 /* INLINE_BLOCK */) ||
                contains(this.display, 268435456 /* INLINE_FLEX */) ||
                contains(this.display, 536870912 /* INLINE_GRID */) ||
                contains(this.display, 67108864 /* INLINE_LIST_ITEM */) ||
                contains(this.display, 134217728 /* INLINE_TABLE */));
        };
        return CSSParsedDeclaration;
    }());
    var CSSParsedPseudoDeclaration = /** @class */ (function () {
        function CSSParsedPseudoDeclaration(context, declaration) {
            this.content = parse(context, content, declaration.content);
            this.quotes = parse(context, quotes, declaration.quotes);
        }
        return CSSParsedPseudoDeclaration;
    }());
    var CSSParsedCounterDeclaration = /** @class */ (function () {
        function CSSParsedCounterDeclaration(context, declaration) {
            this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
            this.counterReset = parse(context, counterReset, declaration.counterReset);
        }
        return CSSParsedCounterDeclaration;
    }());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var parse = function (context, descriptor, style) {
        var tokenizer = new Tokenizer();
        var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
        tokenizer.write(value);
        var parser = new Parser(tokenizer.read());
        switch (descriptor.type) {
            case 2 /* IDENT_VALUE */:
                var token = parser.parseComponentValue();
                return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
            case 0 /* VALUE */:
                return descriptor.parse(context, parser.parseComponentValue());
            case 1 /* LIST */:
                return descriptor.parse(context, parser.parseComponentValues());
            case 4 /* TOKEN_VALUE */:
                return parser.parseComponentValue();
            case 3 /* TYPE_VALUE */:
                switch (descriptor.format) {
                    case 'angle':
                        return angle.parse(context, parser.parseComponentValue());
                    case 'color':
                        return color$1.parse(context, parser.parseComponentValue());
                    case 'image':
                        return image.parse(context, parser.parseComponentValue());
                    case 'length':
                        var length_1 = parser.parseComponentValue();
                        return isLength(length_1) ? length_1 : ZERO_LENGTH;
                    case 'length-percentage':
                        var value_1 = parser.parseComponentValue();
                        return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                    case 'time':
                        return time.parse(context, parser.parseComponentValue());
                }
                break;
        }
    };

    var elementDebuggerAttribute = 'data-html2canvas-debug';
    var getElementDebugType = function (element) {
        var attribute = element.getAttribute(elementDebuggerAttribute);
        switch (attribute) {
            case 'all':
                return 1 /* ALL */;
            case 'clone':
                return 2 /* CLONE */;
            case 'parse':
                return 3 /* PARSE */;
            case 'render':
                return 4 /* RENDER */;
            default:
                return 0 /* NONE */;
        }
    };
    var isDebugging = function (element, type) {
        var elementType = getElementDebugType(element);
        return elementType === 1 /* ALL */ || type === elementType;
    };

    var ElementContainer = /** @class */ (function () {
        function ElementContainer(context, element) {
            this.context = context;
            this.textNodes = [];
            this.elements = [];
            this.flags = 0;
            if (isDebugging(element, 3 /* PARSE */)) {
                debugger;
            }
            this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
            if (isHTMLElementNode(element)) {
                if (this.styles.animationDuration.some(function (duration) { return duration > 0; })) {
                    element.style.animationDuration = '0s';
                }
                if (this.styles.transform !== null) {
                    // getBoundingClientRect takes transforms into account
                    element.style.transform = 'none';
                }
            }
            this.bounds = parseBounds(this.context, element);
            if (isDebugging(element, 4 /* RENDER */)) {
                this.flags |= 16 /* DEBUG_RENDER */;
            }
        }
        return ElementContainer;
    }());

    /*
     * text-segmentation 1.0.3 <https://github.com/niklasvh/text-segmentation>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';

    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
        lookup$1[chars$1.charCodeAt(i$1)] = i$1;
    }
    var decode = function (base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === '=') {
            bufferLength--;
            if (base64[base64.length - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = typeof ArrayBuffer !== 'undefined' &&
            typeof Uint8Array !== 'undefined' &&
            typeof Uint8Array.prototype.slice !== 'undefined'
            ? new ArrayBuffer(bufferLength)
            : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
            encoded1 = lookup$1[base64.charCodeAt(i)];
            encoded2 = lookup$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return buffer;
    };
    var polyUint16Array = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 2) {
            bytes.push((buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };
    var polyUint32Array = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 4) {
            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };

    /** Shift size for getting the index-2 table offset. */
    var UTRIE2_SHIFT_2 = 5;
    /** Shift size for getting the index-1 table offset. */
    var UTRIE2_SHIFT_1 = 6 + 5;
    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT = 2;
    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */
    var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
    /** Number of entries in a data block. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
    /** Mask for getting the lower bits for the in-data-block offset. */
    var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
    /** Count the lengths of both BMP pieces. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */
    var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
    /** Number of entries in an index-2 block. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
    /** Mask for getting the lower bits for the in-index-2-block offset. */
    var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
    var slice16 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64 = function (base64, _byteLength) {
        var buffer = decode(base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
        var headerLength = 24;
        var index = slice16(view16, headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2
            ? slice16(view16, (headerLength + view32[4]) / 2)
            : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie = /** @class */ (function () {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }
        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */
        Trie.prototype.get = function (codePoint) {
            var ix;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }
            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        };
        return Trie;
    }());

    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i;
    }

    var Prepend = 1;
    var CR = 2;
    var LF = 3;
    var Control = 4;
    var Extend = 5;
    var SpacingMark = 7;
    var L = 8;
    var V = 9;
    var T = 10;
    var LV = 11;
    var LVT = 12;
    var ZWJ = 13;
    var Extended_Pictographic = 14;
    var RI = 15;
    var toCodePoints = function (str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while (i < length) {
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                }
                else {
                    codePoints.push(value);
                    i--;
                }
            }
            else {
                codePoints.push(value);
            }
        }
        return codePoints;
    };
    var fromCodePoint = function () {
        var codePoints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
        }
        if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
        }
        var length = codePoints.length;
        if (!length) {
            return '';
        }
        var codeUnits = [];
        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            }
            else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    var UnicodeTrie = createTrieFromBase64(base64);
    var BREAK_NOT_ALLOWED = '×';
    var BREAK_ALLOWED = '÷';
    var codePointToClass = function (codePoint) { return UnicodeTrie.get(codePoint); };
    var _graphemeBreakAtIndex = function (_codePoints, classTypes, index) {
        var prevIndex = index - 2;
        var prev = classTypes[prevIndex];
        var current = classTypes[index - 1];
        var next = classTypes[index];
        // GB3 Do not break between a CR and LF
        if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
        }
        // GB4 Otherwise, break before and after controls.
        if (current === CR || current === LF || current === Control) {
            return BREAK_ALLOWED;
        }
        // GB5
        if (next === CR || next === LF || next === Control) {
            return BREAK_ALLOWED;
        }
        // Do not break Hangul syllable sequences.
        // GB6
        if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }
        // GB7
        if ((current === LV || current === V) && (next === V || next === T)) {
            return BREAK_NOT_ALLOWED;
        }
        // GB8
        if ((current === LVT || current === T) && next === T) {
            return BREAK_NOT_ALLOWED;
        }
        // GB9 Do not break before extending characters or ZWJ.
        if (next === ZWJ || next === Extend) {
            return BREAK_NOT_ALLOWED;
        }
        // Do not break before SpacingMarks, or after Prepend characters.
        // GB9a
        if (next === SpacingMark) {
            return BREAK_NOT_ALLOWED;
        }
        // GB9a
        if (current === Prepend) {
            return BREAK_NOT_ALLOWED;
        }
        // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.
        if (current === ZWJ && next === Extended_Pictographic) {
            while (prev === Extend) {
                prev = classTypes[--prevIndex];
            }
            if (prev === Extended_Pictographic) {
                return BREAK_NOT_ALLOWED;
            }
        }
        // GB12 Do not break within emoji flag sequences.
        // That is, do not break between regional indicator (RI) symbols
        // if there is an odd number of RI characters before the break point.
        if (current === RI && next === RI) {
            var countRI = 0;
            while (prev === RI) {
                countRI++;
                prev = classTypes[--prevIndex];
            }
            if (countRI % 2 === 0) {
                return BREAK_NOT_ALLOWED;
            }
        }
        return BREAK_ALLOWED;
    };
    var GraphemeBreaker = function (str) {
        var codePoints = toCodePoints(str);
        var length = codePoints.length;
        var index = 0;
        var lastEnd = 0;
        var classTypes = codePoints.map(codePointToClass);
        return {
            next: function () {
                if (index >= length) {
                    return { done: true, value: null };
                }
                var graphemeBreak = BREAK_NOT_ALLOWED;
                while (index < length &&
                    (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) { }
                if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                    var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                    lastEnd = index;
                    return { value: value, done: false };
                }
                return { done: true, value: null };
            },
        };
    };
    var splitGraphemes = function (str) {
        var breaker = GraphemeBreaker(str);
        var graphemes = [];
        var bk;
        while (!(bk = breaker.next()).done) {
            if (bk.value) {
                graphemes.push(bk.value.slice());
            }
        }
        return graphemes;
    };

    var testRangeBounds = function (document) {
        var TEST_HEIGHT = 123;
        if (document.createRange) {
            var range = document.createRange();
            if (range.getBoundingClientRect) {
                var testElement = document.createElement('boundtest');
                testElement.style.height = TEST_HEIGHT + "px";
                testElement.style.display = 'block';
                document.body.appendChild(testElement);
                range.selectNode(testElement);
                var rangeBounds = range.getBoundingClientRect();
                var rangeHeight = Math.round(rangeBounds.height);
                document.body.removeChild(testElement);
                if (rangeHeight === TEST_HEIGHT) {
                    return true;
                }
            }
        }
        return false;
    };
    var testIOSLineBreak = function (document) {
        var testElement = document.createElement('boundtest');
        testElement.style.width = '50px';
        testElement.style.display = 'block';
        testElement.style.fontSize = '12px';
        testElement.style.letterSpacing = '0px';
        testElement.style.wordSpacing = '0px';
        document.body.appendChild(testElement);
        var range = document.createRange();
        testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
        var node = testElement.firstChild;
        var textList = toCodePoints$1(node.data).map(function (i) { return fromCodePoint$1(i); });
        var offset = 0;
        var prev = {};
        // ios 13 does not handle range getBoundingClientRect line changes correctly #2177
        var supports = textList.every(function (text, i) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;
            if (i === 0) {
                return true;
            }
            return boundAhead;
        });
        document.body.removeChild(testElement);
        return supports;
    };
    var testCORS = function () { return typeof new Image().crossOrigin !== 'undefined'; };
    var testResponseType = function () { return typeof new XMLHttpRequest().responseType === 'string'; };
    var testSVG = function (document) {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return false;
        }
        img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
        }
        catch (e) {
            return false;
        }
        return true;
    };
    var isGreenPixel = function (data) {
        return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
    };
    var testForeignObject = function (document) {
        var canvas = document.createElement('canvas');
        var size = 100;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return Promise.reject(false);
        }
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fillRect(0, 0, size, size);
        var img = new Image();
        var greenImageSrc = canvas.toDataURL();
        img.src = greenImageSrc;
        var svg = createForeignObjectSVG(size, size, 0, 0, img);
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);
        return loadSerializedSVG$1(svg)
            .then(function (img) {
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size, size);
            var node = document.createElement('div');
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px";
            // Firefox 55 does not render inline <img /> tags
            return isGreenPixel(data)
                ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node))
                : Promise.reject(false);
        })
            .then(function (img) {
            ctx.drawImage(img, 0, 0);
            // Edge does not render background-images
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
        })
            .catch(function () { return false; });
    };
    var createForeignObjectSVG = function (width, height, x, y, node) {
        var xmlns = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(xmlns, 'svg');
        var foreignObject = document.createElementNS(xmlns, 'foreignObject');
        svg.setAttributeNS(null, 'width', width.toString());
        svg.setAttributeNS(null, 'height', height.toString());
        foreignObject.setAttributeNS(null, 'width', '100%');
        foreignObject.setAttributeNS(null, 'height', '100%');
        foreignObject.setAttributeNS(null, 'x', x.toString());
        foreignObject.setAttributeNS(null, 'y', y.toString());
        foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
        svg.appendChild(foreignObject);
        foreignObject.appendChild(node);
        return svg;
    };
    var loadSerializedSVG$1 = function (svg) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () { return resolve(img); };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };
    var FEATURES = {
        get SUPPORT_RANGE_BOUNDS() {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
            return value;
        },
        get SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', { value: value });
            return value;
        },
        get SUPPORT_SVG_DRAWING() {
            var value = testSVG(document);
            Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
            return value;
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === 'function' && typeof window.fetch === 'function'
                ? testForeignObject(document)
                : Promise.resolve(false);
            Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
            return value;
        },
        get SUPPORT_CORS_IMAGES() {
            var value = testCORS();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
            return value;
        },
        get SUPPORT_RESPONSE_TYPE() {
            var value = testResponseType();
            Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
            return value;
        },
        get SUPPORT_CORS_XHR() {
            var value = 'withCredentials' in new XMLHttpRequest();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
            return value;
        },
        get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var value = !!(typeof Intl !== 'undefined' && Intl.Segmenter);
            Object.defineProperty(FEATURES, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', { value: value });
            return value;
        }
    };

    var TextBounds = /** @class */ (function () {
        function TextBounds(text, bounds) {
            this.text = text;
            this.bounds = bounds;
        }
        return TextBounds;
    }());
    var parseTextBounds = function (context, value, styles, node) {
        var textList = breakText(value, styles);
        var textBounds = [];
        var offset = 0;
        textList.forEach(function (text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
                if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                    var clientRects = createRange(node, offset, text.length).getClientRects();
                    if (clientRects.length > 1) {
                        var subSegments = segmentGraphemes(text);
                        var subOffset_1 = 0;
                        subSegments.forEach(function (subSegment) {
                            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                            subOffset_1 += subSegment.length;
                        });
                    }
                    else {
                        textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                    }
                }
                else {
                    var replacementNode = node.splitText(text.length);
                    textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                    node = replacementNode;
                }
            }
            else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
                node = node.splitText(text.length);
            }
            offset += text.length;
        });
        return textBounds;
    };
    var getWrapperBounds = function (context, node) {
        var ownerDocument = node.ownerDocument;
        if (ownerDocument) {
            var wrapper = ownerDocument.createElement('html2canvaswrapper');
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (parentNode) {
                parentNode.replaceChild(wrapper, node);
                var bounds = parseBounds(context, wrapper);
                if (wrapper.firstChild) {
                    parentNode.replaceChild(wrapper.firstChild, wrapper);
                }
                return bounds;
            }
        }
        return Bounds.EMPTY;
    };
    var createRange = function (node, offset, length) {
        var ownerDocument = node.ownerDocument;
        if (!ownerDocument) {
            throw new Error('Node has no owner document');
        }
        var range = ownerDocument.createRange();
        range.setStart(node, offset);
        range.setEnd(node, offset + length);
        return range;
    };
    var segmentGraphemes = function (value) {
        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, { granularity: 'grapheme' });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
        }
        return splitGraphemes(value);
    };
    var segmentWords = function (value, styles) {
        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, {
                granularity: 'word'
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
        }
        return breakWords(value, styles);
    };
    var breakText = function (value, styles) {
        return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
    };
    // https://drafts.csswg.org/css-text/#word-separator
    var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];
    var breakWords = function (str, styles) {
        var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word" /* BREAK_WORD */ ? 'break-word' : styles.wordBreak
        });
        var words = [];
        var bk;
        var _loop_1 = function () {
            if (bk.value) {
                var value = bk.value.slice();
                var codePoints = toCodePoints$1(value);
                var word_1 = '';
                codePoints.forEach(function (codePoint) {
                    if (wordSeparators.indexOf(codePoint) === -1) {
                        word_1 += fromCodePoint$1(codePoint);
                    }
                    else {
                        if (word_1.length) {
                            words.push(word_1);
                        }
                        words.push(fromCodePoint$1(codePoint));
                        word_1 = '';
                    }
                });
                if (word_1.length) {
                    words.push(word_1);
                }
            }
        };
        while (!(bk = breaker.next()).done) {
            _loop_1();
        }
        return words;
    };

    var TextContainer = /** @class */ (function () {
        function TextContainer(context, node, styles) {
            this.text = transform(node.data, styles.textTransform);
            this.textBounds = parseTextBounds(context, this.text, styles, node);
        }
        return TextContainer;
    }());
    var transform = function (text, transform) {
        switch (transform) {
            case 1 /* LOWERCASE */:
                return text.toLowerCase();
            case 3 /* CAPITALIZE */:
                return text.replace(CAPITALIZE, capitalize);
            case 2 /* UPPERCASE */:
                return text.toUpperCase();
            default:
                return text;
        }
    };
    var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
    var capitalize = function (m, p1, p2) {
        if (m.length > 0) {
            return p1 + p2.toUpperCase();
        }
        return m;
    };

    var ImageElementContainer = /** @class */ (function (_super) {
        __extends(ImageElementContainer, _super);
        function ImageElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;
            _this.src = img.currentSrc || img.src;
            _this.intrinsicWidth = img.naturalWidth;
            _this.intrinsicHeight = img.naturalHeight;
            _this.context.cache.addImage(_this.src);
            return _this;
        }
        return ImageElementContainer;
    }(ElementContainer));

    var CanvasElementContainer = /** @class */ (function (_super) {
        __extends(CanvasElementContainer, _super);
        function CanvasElementContainer(context, canvas) {
            var _this = _super.call(this, context, canvas) || this;
            _this.canvas = canvas;
            _this.intrinsicWidth = canvas.width;
            _this.intrinsicHeight = canvas.height;
            return _this;
        }
        return CanvasElementContainer;
    }(ElementContainer));

    var SVGElementContainer = /** @class */ (function (_super) {
        __extends(SVGElementContainer, _super);
        function SVGElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;
            var s = new XMLSerializer();
            var bounds = parseBounds(context, img);
            img.setAttribute('width', bounds.width + "px");
            img.setAttribute('height', bounds.height + "px");
            _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
            _this.intrinsicWidth = img.width.baseVal.value;
            _this.intrinsicHeight = img.height.baseVal.value;
            _this.context.cache.addImage(_this.svg);
            return _this;
        }
        return SVGElementContainer;
    }(ElementContainer));

    var LIElementContainer = /** @class */ (function (_super) {
        __extends(LIElementContainer, _super);
        function LIElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
        }
        return LIElementContainer;
    }(ElementContainer));

    var OLElementContainer = /** @class */ (function (_super) {
        __extends(OLElementContainer, _super);
        function OLElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.start = element.start;
            _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
            return _this;
        }
        return OLElementContainer;
    }(ElementContainer));

    var CHECKBOX_BORDER_RADIUS = [
        {
            type: 15 /* DIMENSION_TOKEN */,
            flags: 0,
            unit: 'px',
            number: 3
        }
    ];
    var RADIO_BORDER_RADIUS = [
        {
            type: 16 /* PERCENTAGE_TOKEN */,
            flags: 0,
            number: 50
        }
    ];
    var reformatInputBounds = function (bounds) {
        if (bounds.width > bounds.height) {
            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
        }
        else if (bounds.width < bounds.height) {
            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
        }
        return bounds;
    };
    var getInputValue = function (node) {
        var value = node.type === PASSWORD ? new Array(node.value.length + 1).join('\u2022') : node.value;
        return value.length === 0 ? node.placeholder || '' : value;
    };
    var CHECKBOX = 'checkbox';
    var RADIO = 'radio';
    var PASSWORD = 'password';
    var INPUT_COLOR = 0x2a2a2aff;
    var InputElementContainer = /** @class */ (function (_super) {
        __extends(InputElementContainer, _super);
        function InputElementContainer(context, input) {
            var _this = _super.call(this, context, input) || this;
            _this.type = input.type.toLowerCase();
            _this.checked = input.checked;
            _this.value = getInputValue(input);
            if (_this.type === CHECKBOX || _this.type === RADIO) {
                _this.styles.backgroundColor = 0xdededeff;
                _this.styles.borderTopColor =
                    _this.styles.borderRightColor =
                        _this.styles.borderBottomColor =
                            _this.styles.borderLeftColor =
                                0xa5a5a5ff;
                _this.styles.borderTopWidth =
                    _this.styles.borderRightWidth =
                        _this.styles.borderBottomWidth =
                            _this.styles.borderLeftWidth =
                                1;
                _this.styles.borderTopStyle =
                    _this.styles.borderRightStyle =
                        _this.styles.borderBottomStyle =
                            _this.styles.borderLeftStyle =
                                1 /* SOLID */;
                _this.styles.backgroundClip = [0 /* BORDER_BOX */];
                _this.styles.backgroundOrigin = [0 /* BORDER_BOX */];
                _this.bounds = reformatInputBounds(_this.bounds);
            }
            switch (_this.type) {
                case CHECKBOX:
                    _this.styles.borderTopRightRadius =
                        _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                                _this.styles.borderBottomLeftRadius =
                                    CHECKBOX_BORDER_RADIUS;
                    break;
                case RADIO:
                    _this.styles.borderTopRightRadius =
                        _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                                _this.styles.borderBottomLeftRadius =
                                    RADIO_BORDER_RADIUS;
                    break;
            }
            return _this;
        }
        return InputElementContainer;
    }(ElementContainer));

    var SelectElementContainer = /** @class */ (function (_super) {
        __extends(SelectElementContainer, _super);
        function SelectElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            var option = element.options[element.selectedIndex || 0];
            _this.value = option ? option.text || '' : '';
            return _this;
        }
        return SelectElementContainer;
    }(ElementContainer));

    var TextareaElementContainer = /** @class */ (function (_super) {
        __extends(TextareaElementContainer, _super);
        function TextareaElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
        }
        return TextareaElementContainer;
    }(ElementContainer));

    var IFrameElementContainer = /** @class */ (function (_super) {
        __extends(IFrameElementContainer, _super);
        function IFrameElementContainer(context, iframe) {
            var _this = _super.call(this, context, iframe) || this;
            _this.src = iframe.src;
            _this.width = parseInt(iframe.width, 10) || 0;
            _this.height = parseInt(iframe.height, 10) || 0;
            _this.backgroundColor = _this.styles.backgroundColor;
            try {
                if (iframe.contentWindow &&
                    iframe.contentWindow.document &&
                    iframe.contentWindow.document.documentElement) {
                    _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                    // http://www.w3.org/TR/css3-background/#special-backgrounds
                    var documentBackgroundColor = iframe.contentWindow.document.documentElement
                        ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor)
                        : COLORS.TRANSPARENT;
                    var bodyBackgroundColor = iframe.contentWindow.document.body
                        ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor)
                        : COLORS.TRANSPARENT;
                    _this.backgroundColor = isTransparent(documentBackgroundColor)
                        ? isTransparent(bodyBackgroundColor)
                            ? _this.styles.backgroundColor
                            : bodyBackgroundColor
                        : documentBackgroundColor;
                }
            }
            catch (e) { }
            return _this;
        }
        return IFrameElementContainer;
    }(ElementContainer));

    var LIST_OWNERS = ['OL', 'UL', 'MENU'];
    var parseNodeTree = function (context, node, parent, root) {
        for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
                parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            }
            else if (isElementNode(childNode)) {
                if (isSlotElement(childNode) && childNode.assignedNodes) {
                    childNode.assignedNodes().forEach(function (childNode) { return parseNodeTree(context, childNode, parent, root); });
                }
                else {
                    var container = createContainer(context, childNode);
                    if (container.styles.isVisible()) {
                        if (createsRealStackingContext(childNode, container, root)) {
                            container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
                        }
                        else if (createsStackingContext(container.styles)) {
                            container.flags |= 2 /* CREATES_STACKING_CONTEXT */;
                        }
                        if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                            container.flags |= 8 /* IS_LIST_OWNER */;
                        }
                        parent.elements.push(container);
                        childNode.slot;
                        if (childNode.shadowRoot) {
                            parseNodeTree(context, childNode.shadowRoot, container, root);
                        }
                        else if (!isTextareaElement(childNode) &&
                            !isSVGElement(childNode) &&
                            !isSelectElement(childNode)) {
                            parseNodeTree(context, childNode, container, root);
                        }
                    }
                }
            }
        }
    };
    var createContainer = function (context, element) {
        if (isImageElement(element)) {
            return new ImageElementContainer(context, element);
        }
        if (isCanvasElement(element)) {
            return new CanvasElementContainer(context, element);
        }
        if (isSVGElement(element)) {
            return new SVGElementContainer(context, element);
        }
        if (isLIElement(element)) {
            return new LIElementContainer(context, element);
        }
        if (isOLElement(element)) {
            return new OLElementContainer(context, element);
        }
        if (isInputElement(element)) {
            return new InputElementContainer(context, element);
        }
        if (isSelectElement(element)) {
            return new SelectElementContainer(context, element);
        }
        if (isTextareaElement(element)) {
            return new TextareaElementContainer(context, element);
        }
        if (isIFrameElement(element)) {
            return new IFrameElementContainer(context, element);
        }
        return new ElementContainer(context, element);
    };
    var parseTree = function (context, element) {
        var container = createContainer(context, element);
        container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
        parseNodeTree(context, element, container, container);
        return container;
    };
    var createsRealStackingContext = function (node, container, root) {
        return (container.styles.isPositionedWithZIndex() ||
            container.styles.opacity < 1 ||
            container.styles.isTransformed() ||
            (isBodyElement(node) && root.styles.isTransparent()));
    };
    var createsStackingContext = function (styles) { return styles.isPositioned() || styles.isFloating(); };
    var isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
    var isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
    var isHTMLElementNode = function (node) {
        return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
    };
    var isSVGElementNode = function (element) {
        return typeof element.className === 'object';
    };
    var isLIElement = function (node) { return node.tagName === 'LI'; };
    var isOLElement = function (node) { return node.tagName === 'OL'; };
    var isInputElement = function (node) { return node.tagName === 'INPUT'; };
    var isHTMLElement = function (node) { return node.tagName === 'HTML'; };
    var isSVGElement = function (node) { return node.tagName === 'svg'; };
    var isBodyElement = function (node) { return node.tagName === 'BODY'; };
    var isCanvasElement = function (node) { return node.tagName === 'CANVAS'; };
    var isVideoElement = function (node) { return node.tagName === 'VIDEO'; };
    var isImageElement = function (node) { return node.tagName === 'IMG'; };
    var isIFrameElement = function (node) { return node.tagName === 'IFRAME'; };
    var isStyleElement = function (node) { return node.tagName === 'STYLE'; };
    var isScriptElement = function (node) { return node.tagName === 'SCRIPT'; };
    var isTextareaElement = function (node) { return node.tagName === 'TEXTAREA'; };
    var isSelectElement = function (node) { return node.tagName === 'SELECT'; };
    var isSlotElement = function (node) { return node.tagName === 'SLOT'; };
    // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
    var isCustomElement = function (node) { return node.tagName.indexOf('-') > 0; };

    var CounterState = /** @class */ (function () {
        function CounterState() {
            this.counters = {};
        }
        CounterState.prototype.getCounterValue = function (name) {
            var counter = this.counters[name];
            if (counter && counter.length) {
                return counter[counter.length - 1];
            }
            return 1;
        };
        CounterState.prototype.getCounterValues = function (name) {
            var counter = this.counters[name];
            return counter ? counter : [];
        };
        CounterState.prototype.pop = function (counters) {
            var _this = this;
            counters.forEach(function (counter) { return _this.counters[counter].pop(); });
        };
        CounterState.prototype.parse = function (style) {
            var _this = this;
            var counterIncrement = style.counterIncrement;
            var counterReset = style.counterReset;
            var canReset = true;
            if (counterIncrement !== null) {
                counterIncrement.forEach(function (entry) {
                    var counter = _this.counters[entry.counter];
                    if (counter && entry.increment !== 0) {
                        canReset = false;
                        if (!counter.length) {
                            counter.push(1);
                        }
                        counter[Math.max(0, counter.length - 1)] += entry.increment;
                    }
                });
            }
            var counterNames = [];
            if (canReset) {
                counterReset.forEach(function (entry) {
                    var counter = _this.counters[entry.counter];
                    counterNames.push(entry.counter);
                    if (!counter) {
                        counter = _this.counters[entry.counter] = [];
                    }
                    counter.push(entry.reset);
                });
            }
            return counterNames;
        };
        return CounterState;
    }());
    var ROMAN_UPPER = {
        integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    };
    var ARMENIAN = {
        integers: [
            9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70,
            60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'Ք',
            'Փ',
            'Ւ',
            'Ց',
            'Ր',
            'Տ',
            'Վ',
            'Ս',
            'Ռ',
            'Ջ',
            'Պ',
            'Չ',
            'Ո',
            'Շ',
            'Ն',
            'Յ',
            'Մ',
            'Ճ',
            'Ղ',
            'Ձ',
            'Հ',
            'Կ',
            'Ծ',
            'Խ',
            'Լ',
            'Ի',
            'Ժ',
            'Թ',
            'Ը',
            'Է',
            'Զ',
            'Ե',
            'Դ',
            'Գ',
            'Բ',
            'Ա'
        ]
    };
    var HEBREW = {
        integers: [
            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20,
            19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'י׳',
            'ט׳',
            'ח׳',
            'ז׳',
            'ו׳',
            'ה׳',
            'ד׳',
            'ג׳',
            'ב׳',
            'א׳',
            'ת',
            'ש',
            'ר',
            'ק',
            'צ',
            'פ',
            'ע',
            'ס',
            'נ',
            'מ',
            'ל',
            'כ',
            'יט',
            'יח',
            'יז',
            'טז',
            'טו',
            'י',
            'ט',
            'ח',
            'ז',
            'ו',
            'ה',
            'ד',
            'ג',
            'ב',
            'א'
        ]
    };
    var GEORGIAN = {
        integers: [
            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90,
            80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'ჵ',
            'ჰ',
            'ჯ',
            'ჴ',
            'ხ',
            'ჭ',
            'წ',
            'ძ',
            'ც',
            'ჩ',
            'შ',
            'ყ',
            'ღ',
            'ქ',
            'ფ',
            'ჳ',
            'ტ',
            'ს',
            'რ',
            'ჟ',
            'პ',
            'ო',
            'ჲ',
            'ნ',
            'მ',
            'ლ',
            'კ',
            'ი',
            'თ',
            'ჱ',
            'ზ',
            'ვ',
            'ე',
            'დ',
            'გ',
            'ბ',
            'ა'
        ]
    };
    var createAdditiveCounter = function (value, min, max, symbols, fallback, suffix) {
        if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
        }
        return (symbols.integers.reduce(function (string, integer, index) {
            while (value >= integer) {
                value -= integer;
                string += symbols.values[index];
            }
            return string;
        }, '') + suffix);
    };
    var createCounterStyleWithSymbolResolver = function (value, codePointRangeLength, isNumeric, resolver) {
        var string = '';
        do {
            if (!isNumeric) {
                value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
        } while (value * codePointRangeLength >= codePointRangeLength);
        return string;
    };
    var createCounterStyleFromRange = function (value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
        var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
        return ((value < 0 ? '-' : '') +
            (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
                return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
            }) +
                suffix));
    };
    var createCounterStyleFromSymbols = function (value, symbols, suffix) {
        if (suffix === void 0) { suffix = '. '; }
        var codePointRangeLength = symbols.length;
        return (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) { return symbols[Math.floor(codePoint % codePointRangeLength)]; }) + suffix);
    };
    var CJK_ZEROS = 1 << 0;
    var CJK_TEN_COEFFICIENTS = 1 << 1;
    var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
    var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
    var createCJKCounter = function (value, numbers, multipliers, negativeSign, suffix, flags) {
        if (value < -9999 || value > 9999) {
            return createCounterText(value, 4 /* CJK_DECIMAL */, suffix.length > 0);
        }
        var tmp = Math.abs(value);
        var string = suffix;
        if (tmp === 0) {
            return numbers[0] + string;
        }
        for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;
            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
                string = numbers[coefficient] + string;
            }
            else if (coefficient > 1 ||
                (coefficient === 1 && digit === 0) ||
                (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS)) ||
                (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100) ||
                (coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS))) {
                string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
            }
            else if (coefficient === 1 && digit > 0) {
                string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
        }
        return (value < 0 ? negativeSign : '') + string;
    };
    var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
    var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
    var JAPANESE_NEGATIVE = 'マイナス';
    var KOREAN_NEGATIVE = '마이너스';
    var createCounterText = function (value, type, appendSuffix) {
        var defaultSuffix = appendSuffix ? '. ' : '';
        var cjkSuffix = appendSuffix ? '、' : '';
        var koreanSuffix = appendSuffix ? ', ' : '';
        var spaceSuffix = appendSuffix ? ' ' : '';
        switch (type) {
            case 0 /* DISC */:
                return '•' + spaceSuffix;
            case 1 /* CIRCLE */:
                return '◦' + spaceSuffix;
            case 2 /* SQUARE */:
                return '◾' + spaceSuffix;
            case 5 /* DECIMAL_LEADING_ZERO */:
                var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                return string.length < 4 ? "0" + string : string;
            case 4 /* CJK_DECIMAL */:
                return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
            case 6 /* LOWER_ROMAN */:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
            case 7 /* UPPER_ROMAN */:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix);
            case 8 /* LOWER_GREEK */:
                return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case 9 /* LOWER_ALPHA */:
                return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case 10 /* UPPER_ALPHA */:
                return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case 11 /* ARABIC_INDIC */:
                return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case 12 /* ARMENIAN */:
            case 49 /* UPPER_ARMENIAN */:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix);
            case 35 /* LOWER_ARMENIAN */:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
            case 13 /* BENGALI */:
                return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14 /* CAMBODIAN */:
            case 30 /* KHMER */:
                return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case 15 /* CJK_EARTHLY_BRANCH */:
                return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
            case 16 /* CJK_HEAVENLY_STEM */:
                return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
            case 17 /* CJK_IDEOGRAPHIC */:
            case 48 /* TRAD_CHINESE_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 47 /* TRAD_CHINESE_FORMAL */:
                return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 42 /* SIMP_CHINESE_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 41 /* SIMP_CHINESE_FORMAL */:
                return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 26 /* JAPANESE_INFORMAL */:
                return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
            case 25 /* JAPANESE_FORMAL */:
                return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 31 /* KOREAN_HANGUL_FORMAL */:
                return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 33 /* KOREAN_HANJA_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
            case 32 /* KOREAN_HANJA_FORMAL */:
                return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 18 /* DEVANAGARI */:
                return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
            case 20 /* GEORGIAN */:
                return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */, defaultSuffix);
            case 21 /* GUJARATI */:
                return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
            case 22 /* GURMUKHI */:
                return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
            case 22 /* HEBREW */:
                return createAdditiveCounter(value, 1, 10999, HEBREW, 3 /* DECIMAL */, defaultSuffix);
            case 23 /* HIRAGANA */:
                return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
            case 24 /* HIRAGANA_IROHA */:
                return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
            case 27 /* KANNADA */:
                return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
            case 28 /* KATAKANA */:
                return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
            case 29 /* KATAKANA_IROHA */:
                return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
            case 34 /* LAO */:
                return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
            case 37 /* MONGOLIAN */:
                return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
            case 38 /* MYANMAR */:
                return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
            case 39 /* ORIYA */:
                return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
            case 40 /* PERSIAN */:
                return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
            case 43 /* TAMIL */:
                return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
            case 44 /* TELUGU */:
                return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
            case 45 /* THAI */:
                return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
            case 46 /* TIBETAN */:
                return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
            case 3 /* DECIMAL */:
            default:
                return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        }
    };

    var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
    var DocumentCloner = /** @class */ (function () {
        function DocumentCloner(context, element, options) {
            this.context = context;
            this.options = options;
            this.scrolledElements = [];
            this.referenceElement = element;
            this.counters = new CounterState();
            this.quoteDepth = 0;
            if (!element.ownerDocument) {
                throw new Error('Cloned element does not have an owner document');
            }
            this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
        }
        DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
            var _this = this;
            var iframe = createIFrameContainer(ownerDocument, windowSize);
            if (!iframe.contentWindow) {
                return Promise.reject("Unable to find iframe window");
            }
            var scrollX = ownerDocument.defaultView.pageXOffset;
            var scrollY = ownerDocument.defaultView.pageYOffset;
            var cloneWindow = iframe.contentWindow;
            var documentClone = cloneWindow.document;
            /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */
            var iframeLoad = iframeLoader(iframe).then(function () { return __awaiter(_this, void 0, void 0, function () {
                var onclone, referenceElement;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.scrolledElements.forEach(restoreNodeScroll);
                            if (cloneWindow) {
                                cloneWindow.scrollTo(windowSize.left, windowSize.top);
                                if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                                    (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                                    this.context.logger.warn('Unable to restore scroll position for cloned document');
                                    this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                                }
                            }
                            onclone = this.options.onclone;
                            referenceElement = this.clonedReferenceElement;
                            if (typeof referenceElement === 'undefined') {
                                return [2 /*return*/, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                            }
                            if (!(documentClone.fonts && documentClone.fonts.ready)) return [3 /*break*/, 2];
                            return [4 /*yield*/, documentClone.fonts.ready];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3 /*break*/, 4];
                            return [4 /*yield*/, imagesReady(documentClone)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            if (typeof onclone === 'function') {
                                return [2 /*return*/, Promise.resolve()
                                        .then(function () { return onclone(documentClone, referenceElement); })
                                        .then(function () { return iframe; })];
                            }
                            return [2 /*return*/, iframe];
                    }
                });
            }); });
            documentClone.open();
            documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
            // Chrome scrolls the parent document for some reason after the write to the cloned window???
            restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
            documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
            documentClone.close();
            return iframeLoad;
        };
        DocumentCloner.prototype.createElementClone = function (node) {
            if (isDebugging(node, 2 /* CLONE */)) {
                debugger;
            }
            if (isCanvasElement(node)) {
                return this.createCanvasClone(node);
            }
            if (isVideoElement(node)) {
                return this.createVideoClone(node);
            }
            if (isStyleElement(node)) {
                return this.createStyleClone(node);
            }
            var clone = node.cloneNode(false);
            if (isImageElement(clone)) {
                if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                    clone.src = node.currentSrc;
                    clone.srcset = '';
                }
                if (clone.loading === 'lazy') {
                    clone.loading = 'eager';
                }
            }
            if (isCustomElement(clone)) {
                return this.createCustomElementClone(clone);
            }
            return clone;
        };
        DocumentCloner.prototype.createCustomElementClone = function (node) {
            var clone = document.createElement('html2canvascustomelement');
            copyCSSStyles(node.style, clone);
            return clone;
        };
        DocumentCloner.prototype.createStyleClone = function (node) {
            try {
                var sheet = node.sheet;
                if (sheet && sheet.cssRules) {
                    var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
                        if (rule && typeof rule.cssText === 'string') {
                            return css + rule.cssText;
                        }
                        return css;
                    }, '');
                    var style = node.cloneNode(false);
                    style.textContent = css;
                    return style;
                }
            }
            catch (e) {
                // accessing node.sheet.cssRules throws a DOMException
                this.context.logger.error('Unable to access cssRules property', e);
                if (e.name !== 'SecurityError') {
                    throw e;
                }
            }
            return node.cloneNode(false);
        };
        DocumentCloner.prototype.createCanvasClone = function (canvas) {
            var _a;
            if (this.options.inlineImages && canvas.ownerDocument) {
                var img = canvas.ownerDocument.createElement('img');
                try {
                    img.src = canvas.toDataURL();
                    return img;
                }
                catch (e) {
                    this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
                }
            }
            var clonedCanvas = canvas.cloneNode(false);
            try {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                var ctx = canvas.getContext('2d');
                var clonedCtx = clonedCanvas.getContext('2d');
                if (clonedCtx) {
                    if (!this.options.allowTaint && ctx) {
                        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                    }
                    else {
                        var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');
                        if (gl) {
                            var attribs = gl.getContextAttributes();
                            if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                                this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
                            }
                        }
                        clonedCtx.drawImage(canvas, 0, 0);
                    }
                }
                return clonedCanvas;
            }
            catch (e) {
                this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
            }
            return clonedCanvas;
        };
        DocumentCloner.prototype.createVideoClone = function (video) {
            var canvas = video.ownerDocument.createElement('canvas');
            canvas.width = video.offsetWidth;
            canvas.height = video.offsetHeight;
            var ctx = canvas.getContext('2d');
            try {
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    if (!this.options.allowTaint) {
                        ctx.getImageData(0, 0, canvas.width, canvas.height);
                    }
                }
                return canvas;
            }
            catch (e) {
                this.context.logger.info("Unable to clone video as it is tainted", video);
            }
            var blankCanvas = video.ownerDocument.createElement('canvas');
            blankCanvas.width = video.offsetWidth;
            blankCanvas.height = video.offsetHeight;
            return blankCanvas;
        };
        DocumentCloner.prototype.appendChildNode = function (clone, child, copyStyles) {
            if (!isElementNode(child) ||
                (!isScriptElement(child) &&
                    !child.hasAttribute(IGNORE_ATTRIBUTE) &&
                    (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child)))) {
                if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                    clone.appendChild(this.cloneNode(child, copyStyles));
                }
            }
        };
        DocumentCloner.prototype.cloneChildNodes = function (node, clone, copyStyles) {
            var _this = this;
            for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'function') {
                    var assignedNodes = child.assignedNodes();
                    if (assignedNodes.length) {
                        assignedNodes.forEach(function (assignedNode) { return _this.appendChildNode(clone, assignedNode, copyStyles); });
                    }
                }
                else {
                    this.appendChildNode(clone, child, copyStyles);
                }
            }
        };
        DocumentCloner.prototype.cloneNode = function (node, copyStyles) {
            if (isTextNode(node)) {
                return document.createTextNode(node.data);
            }
            if (!node.ownerDocument) {
                return node.cloneNode(false);
            }
            var window = node.ownerDocument.defaultView;
            if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                var clone = this.createElementClone(node);
                clone.style.transitionProperty = 'none';
                var style = window.getComputedStyle(node);
                var styleBefore = window.getComputedStyle(node, ':before');
                var styleAfter = window.getComputedStyle(node, ':after');
                if (this.referenceElement === node && isHTMLElementNode(clone)) {
                    this.clonedReferenceElement = clone;
                }
                if (isBodyElement(clone)) {
                    createPseudoHideStyles(clone);
                }
                var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                if (isCustomElement(node)) {
                    copyStyles = true;
                }
                if (!isVideoElement(node)) {
                    this.cloneChildNodes(node, clone, copyStyles);
                }
                if (before) {
                    clone.insertBefore(before, clone.firstChild);
                }
                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                if (after) {
                    clone.appendChild(after);
                }
                this.counters.pop(counters);
                if ((style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node)) ||
                    copyStyles) {
                    copyCSSStyles(style, clone);
                }
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                if ((isTextareaElement(node) || isSelectElement(node)) &&
                    (isTextareaElement(clone) || isSelectElement(clone))) {
                    clone.value = node.value;
                }
                return clone;
            }
            return node.cloneNode(false);
        };
        DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
            var _this = this;
            if (!style) {
                return;
            }
            var value = style.content;
            var document = clone.ownerDocument;
            if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
                return;
            }
            this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
            var declaration = new CSSParsedPseudoDeclaration(this.context, style);
            var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
            copyCSSStyles(style, anonymousReplacedElement);
            declaration.content.forEach(function (token) {
                if (token.type === 0 /* STRING_TOKEN */) {
                    anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                }
                else if (token.type === 22 /* URL_TOKEN */) {
                    var img = document.createElement('img');
                    img.src = token.value;
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                }
                else if (token.type === 18 /* FUNCTION */) {
                    if (token.name === 'attr') {
                        var attr = token.values.filter(isIdentToken);
                        if (attr.length) {
                            anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
                        }
                    }
                    else if (token.name === 'counter') {
                        var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                        if (counter && isIdentToken(counter)) {
                            var counterState = _this.counters.getCounterValue(counter.value);
                            var counterType = counterStyle && isIdentToken(counterStyle)
                                ? listStyleType.parse(_this.context, counterStyle.value)
                                : 3 /* DECIMAL */;
                            anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
                        }
                    }
                    else if (token.name === 'counters') {
                        var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                        if (counter && isIdentToken(counter)) {
                            var counterStates = _this.counters.getCounterValues(counter.value);
                            var counterType_1 = counterStyle && isIdentToken(counterStyle)
                                ? listStyleType.parse(_this.context, counterStyle.value)
                                : 3 /* DECIMAL */;
                            var separator = delim && delim.type === 0 /* STRING_TOKEN */ ? delim.value : '';
                            var text = counterStates
                                .map(function (value) { return createCounterText(value, counterType_1, false); })
                                .join(separator);
                            anonymousReplacedElement.appendChild(document.createTextNode(text));
                        }
                    }
                    else ;
                }
                else if (token.type === 20 /* IDENT_TOKEN */) {
                    switch (token.value) {
                        case 'open-quote':
                            anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                            break;
                        case 'close-quote':
                            anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                            break;
                        default:
                            // safari doesn't parse string tokens correctly because of lack of quotes
                            anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                    }
                }
            });
            anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            var newClassName = pseudoElt === PseudoElementType.BEFORE
                ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE
                : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            if (isSVGElementNode(clone)) {
                clone.className.baseValue += newClassName;
            }
            else {
                clone.className += newClassName;
            }
            return anonymousReplacedElement;
        };
        DocumentCloner.destroy = function (container) {
            if (container.parentNode) {
                container.parentNode.removeChild(container);
                return true;
            }
            return false;
        };
        return DocumentCloner;
    }());
    var PseudoElementType;
    (function (PseudoElementType) {
        PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
        PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
    })(PseudoElementType || (PseudoElementType = {}));
    var createIFrameContainer = function (ownerDocument, bounds) {
        var cloneIframeContainer = ownerDocument.createElement('iframe');
        cloneIframeContainer.className = 'html2canvas-container';
        cloneIframeContainer.style.visibility = 'hidden';
        cloneIframeContainer.style.position = 'fixed';
        cloneIframeContainer.style.left = '-10000px';
        cloneIframeContainer.style.top = '0px';
        cloneIframeContainer.style.border = '0';
        cloneIframeContainer.width = bounds.width.toString();
        cloneIframeContainer.height = bounds.height.toString();
        cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
        cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
        ownerDocument.body.appendChild(cloneIframeContainer);
        return cloneIframeContainer;
    };
    var imageReady = function (img) {
        return new Promise(function (resolve) {
            if (img.complete) {
                resolve();
                return;
            }
            if (!img.src) {
                resolve();
                return;
            }
            img.onload = resolve;
            img.onerror = resolve;
        });
    };
    var imagesReady = function (document) {
        return Promise.all([].slice.call(document.images, 0).map(imageReady));
    };
    var iframeLoader = function (iframe) {
        return new Promise(function (resolve, reject) {
            var cloneWindow = iframe.contentWindow;
            if (!cloneWindow) {
                return reject("No window assigned for iframe");
            }
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = function () {
                cloneWindow.onload = iframe.onload = null;
                var interval = setInterval(function () {
                    if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                        clearInterval(interval);
                        resolve(iframe);
                    }
                }, 50);
            };
        });
    };
    var ignoredStyleProperties = [
        'all',
        'd',
        'content' // Safari shows pseudoelements if content is set
    ];
    var copyCSSStyles = function (style, target) {
        // Edge does not provide value for cssText
        for (var i = style.length - 1; i >= 0; i--) {
            var property = style.item(i);
            if (ignoredStyleProperties.indexOf(property) === -1) {
                target.style.setProperty(property, style.getPropertyValue(property));
            }
        }
        return target;
    };
    var serializeDoctype = function (doctype) {
        var str = '';
        if (doctype) {
            str += '<!DOCTYPE ';
            if (doctype.name) {
                str += doctype.name;
            }
            if (doctype.internalSubset) {
                str += doctype.internalSubset;
            }
            if (doctype.publicId) {
                str += "\"" + doctype.publicId + "\"";
            }
            if (doctype.systemId) {
                str += "\"" + doctype.systemId + "\"";
            }
            str += '>';
        }
        return str;
    };
    var restoreOwnerScroll = function (ownerDocument, x, y) {
        if (ownerDocument &&
            ownerDocument.defaultView &&
            (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
        }
    };
    var restoreNodeScroll = function (_a) {
        var element = _a[0], x = _a[1], y = _a[2];
        element.scrollLeft = x;
        element.scrollTop = y;
    };
    var PSEUDO_BEFORE = ':before';
    var PSEUDO_AFTER = ':after';
    var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
    var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
    var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";
    var createPseudoHideStyles = function (body) {
        createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
    };
    var createStyles = function (body, styles) {
        var document = body.ownerDocument;
        if (document) {
            var style = document.createElement('style');
            style.textContent = styles;
            body.appendChild(style);
        }
    };

    var CacheStorage = /** @class */ (function () {
        function CacheStorage() {
        }
        CacheStorage.getOrigin = function (url) {
            var link = CacheStorage._link;
            if (!link) {
                return 'about:blank';
            }
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        };
        CacheStorage.isSameOrigin = function (src) {
            return CacheStorage.getOrigin(src) === CacheStorage._origin;
        };
        CacheStorage.setContext = function (window) {
            CacheStorage._link = window.document.createElement('a');
            CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
        };
        CacheStorage._origin = 'about:blank';
        return CacheStorage;
    }());
    var Cache = /** @class */ (function () {
        function Cache(context, _options) {
            this.context = context;
            this._options = _options;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this._cache = {};
        }
        Cache.prototype.addImage = function (src) {
            var result = Promise.resolve();
            if (this.has(src)) {
                return result;
            }
            if (isBlobImage(src) || isRenderable(src)) {
                (this._cache[src] = this.loadImage(src)).catch(function () {
                    // prevent unhandled rejection
                });
                return result;
            }
            return result;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cache.prototype.match = function (src) {
            return this._cache[src];
        };
        Cache.prototype.loadImage = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var isSameOrigin, useCORS, useProxy, src;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isSameOrigin = CacheStorage.isSameOrigin(key);
                            useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                            useProxy = !isInlineImage(key) &&
                                !isSameOrigin &&
                                !isBlobImage(key) &&
                                typeof this._options.proxy === 'string' &&
                                FEATURES.SUPPORT_CORS_XHR &&
                                !useCORS;
                            if (!isSameOrigin &&
                                this._options.allowTaint === false &&
                                !isInlineImage(key) &&
                                !isBlobImage(key) &&
                                !useProxy &&
                                !useCORS) {
                                return [2 /*return*/];
                            }
                            src = key;
                            if (!useProxy) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.proxy(src)];
                        case 1:
                            src = _a.sent();
                            _a.label = 2;
                        case 2:
                            this.context.logger.debug("Added image " + key.substring(0, 256));
                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                    var img = new Image();
                                    img.onload = function () { return resolve(img); };
                                    img.onerror = reject;
                                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                                    if (isInlineBase64Image(src) || useCORS) {
                                        img.crossOrigin = 'anonymous';
                                    }
                                    img.src = src;
                                    if (img.complete === true) {
                                        // Inline XML images may fail to parse, throwing an Error later on
                                        setTimeout(function () { return resolve(img); }, 500);
                                    }
                                    if (_this._options.imageTimeout > 0) {
                                        setTimeout(function () { return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image"); }, _this._options.imageTimeout);
                                    }
                                })];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Cache.prototype.has = function (key) {
            return typeof this._cache[key] !== 'undefined';
        };
        Cache.prototype.keys = function () {
            return Promise.resolve(Object.keys(this._cache));
        };
        Cache.prototype.proxy = function (src) {
            var _this = this;
            var proxy = this._options.proxy;
            if (!proxy) {
                throw new Error('No proxy defined');
            }
            var key = src.substring(0, 256);
            return new Promise(function (resolve, reject) {
                var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        if (responseType === 'text') {
                            resolve(xhr.response);
                        }
                        else {
                            var reader_1 = new FileReader();
                            reader_1.addEventListener('load', function () { return resolve(reader_1.result); }, false);
                            reader_1.addEventListener('error', function (e) { return reject(e); }, false);
                            reader_1.readAsDataURL(xhr.response);
                        }
                    }
                    else {
                        reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                    }
                };
                xhr.onerror = reject;
                var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
                xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                    xhr.responseType = responseType;
                }
                if (_this._options.imageTimeout) {
                    var timeout_1 = _this._options.imageTimeout;
                    xhr.timeout = timeout_1;
                    xhr.ontimeout = function () { return reject("Timed out (" + timeout_1 + "ms) proxying " + key); };
                }
                xhr.send();
            });
        };
        return Cache;
    }());
    var INLINE_SVG = /^data:image\/svg\+xml/i;
    var INLINE_BASE64 = /^data:image\/.*;base64,/i;
    var INLINE_IMG = /^data:image\/.*/i;
    var isRenderable = function (src) { return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src); };
    var isInlineImage = function (src) { return INLINE_IMG.test(src); };
    var isInlineBase64Image = function (src) { return INLINE_BASE64.test(src); };
    var isBlobImage = function (src) { return src.substr(0, 4) === 'blob'; };
    var isSVG = function (src) { return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src); };

    var Vector = /** @class */ (function () {
        function Vector(x, y) {
            this.type = 0 /* VECTOR */;
            this.x = x;
            this.y = y;
        }
        Vector.prototype.add = function (deltaX, deltaY) {
            return new Vector(this.x + deltaX, this.y + deltaY);
        };
        return Vector;
    }());

    var lerp = function (a, b, t) {
        return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    };
    var BezierCurve = /** @class */ (function () {
        function BezierCurve(start, startControl, endControl, end) {
            this.type = 1 /* BEZIER_CURVE */;
            this.start = start;
            this.startControl = startControl;
            this.endControl = endControl;
            this.end = end;
        }
        BezierCurve.prototype.subdivide = function (t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        };
        BezierCurve.prototype.add = function (deltaX, deltaY) {
            return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
        };
        BezierCurve.prototype.reverse = function () {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        };
        return BezierCurve;
    }());
    var isBezierCurve = function (path) { return path.type === 1 /* BEZIER_CURVE */; };

    var BoundCurves = /** @class */ (function () {
        function BoundCurves(element) {
            var styles = element.styles;
            var bounds = element.bounds;
            var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
            var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
            var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
            var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
            var factors = [];
            factors.push((tlh + trh) / bounds.width);
            factors.push((blh + brh) / bounds.width);
            factors.push((tlv + blv) / bounds.height);
            factors.push((trv + brv) / bounds.height);
            var maxFactor = Math.max.apply(Math, factors);
            if (maxFactor > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
            }
            var topWidth = bounds.width - trh;
            var rightHeight = bounds.height - brv;
            var bottomWidth = bounds.width - brh;
            var leftHeight = bounds.height - blv;
            var borderTopWidth = styles.borderTopWidth;
            var borderRightWidth = styles.borderRightWidth;
            var borderBottomWidth = styles.borderBottomWidth;
            var borderLeftWidth = styles.borderLeftWidth;
            var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
            var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
            var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
            var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
            this.topLeftBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
            this.topRightBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
            this.bottomRightBorderDoubleOuterBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.bottomLeftBorderDoubleOuterBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.topLeftBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3, tlh - (borderLeftWidth * 2) / 3, tlv - (borderTopWidth * 2) / 3, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
            this.topRightBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + (borderTopWidth * 2) / 3, trh - (borderRightWidth * 2) / 3, trv - (borderTopWidth * 2) / 3, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
            this.bottomRightBorderDoubleInnerBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - (borderRightWidth * 2) / 3, brv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
            this.bottomLeftBorderDoubleInnerBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + leftHeight, blh - (borderLeftWidth * 2) / 3, blv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
            this.topLeftBorderStroke =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
            this.topRightBorderStroke =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
            this.bottomRightBorderStroke =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.bottomLeftBorderStroke =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.topLeftBorderBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT)
                    : new Vector(bounds.left, bounds.top);
            this.topRightBorderBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width, bounds.top);
            this.bottomRightBorderBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
            this.bottomLeftBorderBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left, bounds.top + bounds.height);
            this.topLeftPaddingBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
            this.topRightPaddingBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
            this.bottomRightPaddingBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
            this.bottomLeftPaddingBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
            this.topLeftContentBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
            this.topRightContentBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
            this.bottomRightContentBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
            this.bottomLeftContentBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
        }
        return BoundCurves;
    }());
    var CORNER;
    (function (CORNER) {
        CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
        CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
        CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
        CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    })(CORNER || (CORNER = {}));
    var getCurvePoints = function (x, y, r1, r2, position) {
        var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
        var ox = r1 * kappa; // control point offset horizontal
        var oy = r2 * kappa; // control point offset vertical
        var xm = x + r1; // x-middle
        var ym = y + r2; // y-middle
        switch (position) {
            case CORNER.TOP_LEFT:
                return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
            case CORNER.TOP_RIGHT:
                return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
            case CORNER.BOTTOM_RIGHT:
                return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
                return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
        }
    };
    var calculateBorderBoxPath = function (curves) {
        return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
    };
    var calculateContentBoxPath = function (curves) {
        return [
            curves.topLeftContentBox,
            curves.topRightContentBox,
            curves.bottomRightContentBox,
            curves.bottomLeftContentBox
        ];
    };
    var calculatePaddingBoxPath = function (curves) {
        return [
            curves.topLeftPaddingBox,
            curves.topRightPaddingBox,
            curves.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
        ];
    };

    var TransformEffect = /** @class */ (function () {
        function TransformEffect(offsetX, offsetY, matrix) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.matrix = matrix;
            this.type = 0 /* TRANSFORM */;
            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
        }
        return TransformEffect;
    }());
    var ClipEffect = /** @class */ (function () {
        function ClipEffect(path, target) {
            this.path = path;
            this.target = target;
            this.type = 1 /* CLIP */;
        }
        return ClipEffect;
    }());
    var OpacityEffect = /** @class */ (function () {
        function OpacityEffect(opacity) {
            this.opacity = opacity;
            this.type = 2 /* OPACITY */;
            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
        }
        return OpacityEffect;
    }());
    var isTransformEffect = function (effect) {
        return effect.type === 0 /* TRANSFORM */;
    };
    var isClipEffect = function (effect) { return effect.type === 1 /* CLIP */; };
    var isOpacityEffect = function (effect) { return effect.type === 2 /* OPACITY */; };

    var equalPath = function (a, b) {
        if (a.length === b.length) {
            return a.some(function (v, i) { return v === b[i]; });
        }
        return false;
    };
    var transformPath = function (path, deltaX, deltaY, deltaW, deltaH) {
        return path.map(function (point, index) {
            switch (index) {
                case 0:
                    return point.add(deltaX, deltaY);
                case 1:
                    return point.add(deltaX + deltaW, deltaY);
                case 2:
                    return point.add(deltaX + deltaW, deltaY + deltaH);
                case 3:
                    return point.add(deltaX, deltaY + deltaH);
            }
            return point;
        });
    };

    var StackingContext = /** @class */ (function () {
        function StackingContext(container) {
            this.element = container;
            this.inlineLevel = [];
            this.nonInlineLevel = [];
            this.negativeZIndex = [];
            this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
            this.positiveZIndex = [];
            this.nonPositionedFloats = [];
            this.nonPositionedInlineLevel = [];
        }
        return StackingContext;
    }());
    var ElementPaint = /** @class */ (function () {
        function ElementPaint(container, parent) {
            this.container = container;
            this.parent = parent;
            this.effects = [];
            this.curves = new BoundCurves(this.container);
            if (this.container.styles.opacity < 1) {
                this.effects.push(new OpacityEffect(this.container.styles.opacity));
            }
            if (this.container.styles.transform !== null) {
                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                var matrix = this.container.styles.transform;
                this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
            }
            if (this.container.styles.overflowX !== 0 /* VISIBLE */) {
                var borderBox = calculateBorderBoxPath(this.curves);
                var paddingBox = calculatePaddingBoxPath(this.curves);
                if (equalPath(borderBox, paddingBox)) {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                }
                else {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */));
                    this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */));
                }
            }
        }
        ElementPaint.prototype.getEffects = function (target) {
            var inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(this.container.styles.position) === -1;
            var parent = this.parent;
            var effects = this.effects.slice(0);
            while (parent) {
                var croplessEffects = parent.effects.filter(function (effect) { return !isClipEffect(effect); });
                if (inFlow || parent.container.styles.position !== 0 /* STATIC */ || !parent.parent) {
                    effects.unshift.apply(effects, croplessEffects);
                    inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(parent.container.styles.position) === -1;
                    if (parent.container.styles.overflowX !== 0 /* VISIBLE */) {
                        var borderBox = calculateBorderBoxPath(parent.curves);
                        var paddingBox = calculatePaddingBoxPath(parent.curves);
                        if (!equalPath(borderBox, paddingBox)) {
                            effects.unshift(new ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                        }
                    }
                }
                else {
                    effects.unshift.apply(effects, croplessEffects);
                }
                parent = parent.parent;
            }
            return effects.filter(function (effect) { return contains(effect.target, target); });
        };
        return ElementPaint;
    }());
    var parseStackTree = function (parent, stackingContext, realStackingContext, listItems) {
        parent.container.elements.forEach(function (child) {
            var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */);
            var createsStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */);
            var paintContainer = new ElementPaint(child, parent);
            if (contains(child.styles.display, 2048 /* LIST_ITEM */)) {
                listItems.push(paintContainer);
            }
            var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */) ? [] : listItems;
            if (treatAsRealStackingContext || createsStackingContext) {
                var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
                var stack = new StackingContext(paintContainer);
                if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                    var order_1 = child.styles.zIndex.order;
                    if (order_1 < 0) {
                        var index_1 = 0;
                        parentStack.negativeZIndex.some(function (current, i) {
                            if (order_1 > current.element.container.styles.zIndex.order) {
                                index_1 = i;
                                return false;
                            }
                            else if (index_1 > 0) {
                                return true;
                            }
                            return false;
                        });
                        parentStack.negativeZIndex.splice(index_1, 0, stack);
                    }
                    else if (order_1 > 0) {
                        var index_2 = 0;
                        parentStack.positiveZIndex.some(function (current, i) {
                            if (order_1 >= current.element.container.styles.zIndex.order) {
                                index_2 = i + 1;
                                return false;
                            }
                            else if (index_2 > 0) {
                                return true;
                            }
                            return false;
                        });
                        parentStack.positiveZIndex.splice(index_2, 0, stack);
                    }
                    else {
                        parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                    }
                }
                else {
                    if (child.styles.isFloating()) {
                        parentStack.nonPositionedFloats.push(stack);
                    }
                    else {
                        parentStack.nonPositionedInlineLevel.push(stack);
                    }
                }
                parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            }
            else {
                if (child.styles.isInlineLevel()) {
                    stackingContext.inlineLevel.push(paintContainer);
                }
                else {
                    stackingContext.nonInlineLevel.push(paintContainer);
                }
                parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(child.flags, 8 /* IS_LIST_OWNER */)) {
                processListItems(child, listOwnerItems);
            }
        });
    };
    var processListItems = function (owner, elements) {
        var numbering = owner instanceof OLElementContainer ? owner.start : 1;
        var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
        for (var i = 0; i < elements.length; i++) {
            var item = elements[i];
            if (item.container instanceof LIElementContainer &&
                typeof item.container.value === 'number' &&
                item.container.value !== 0) {
                numbering = item.container.value;
            }
            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
        }
    };
    var parseStackingContexts = function (container) {
        var paintContainer = new ElementPaint(container, null);
        var root = new StackingContext(paintContainer);
        var listItems = [];
        parseStackTree(paintContainer, root, root, listItems);
        processListItems(paintContainer.container, listItems);
        return root;
    };

    var parsePathForBorder = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderDoubleOuter = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
        }
    };
    var parsePathForBorderDoubleInner = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderStroke = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
            case 1:
                return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
            case 2:
                return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            case 3:
            default:
                return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
        }
    };
    var createStrokePathFromCurves = function (outer1, outer2) {
        var path = [];
        if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
        }
        else {
            path.push(outer1);
        }
        if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
        }
        else {
            path.push(outer2);
        }
        return path;
    };
    var createPathFromCurves = function (outer1, inner1, outer2, inner2) {
        var path = [];
        if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
        }
        else {
            path.push(outer1);
        }
        if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
        }
        else {
            path.push(outer2);
        }
        if (isBezierCurve(inner2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
        }
        else {
            path.push(inner2);
        }
        if (isBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
        }
        else {
            path.push(inner1);
        }
        return path;
    };

    var paddingBox = function (element) {
        var bounds = element.bounds;
        var styles = element.styles;
        return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
    };
    var contentBox = function (element) {
        var styles = element.styles;
        var bounds = element.bounds;
        var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
        var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
        var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
        var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
        return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
    };

    var calculateBackgroundPositioningArea = function (backgroundOrigin, element) {
        if (backgroundOrigin === 0 /* BORDER_BOX */) {
            return element.bounds;
        }
        if (backgroundOrigin === 2 /* CONTENT_BOX */) {
            return contentBox(element);
        }
        return paddingBox(element);
    };
    var calculateBackgroundPaintingArea = function (backgroundClip, element) {
        if (backgroundClip === 0 /* BORDER_BOX */) {
            return element.bounds;
        }
        if (backgroundClip === 2 /* CONTENT_BOX */) {
            return contentBox(element);
        }
        return paddingBox(element);
    };
    var calculateBackgroundRendering = function (container, index, intrinsicSize) {
        var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
        var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
        var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
        var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
        var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
        var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
        var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
        var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
        return [path, offsetX, offsetY, sizeWidth, sizeHeight];
    };
    var isAuto = function (token) { return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO; };
    var hasIntrinsicValue = function (value) { return typeof value === 'number'; };
    var calculateBackgroundSize = function (size, _a, bounds) {
        var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
        var first = size[0], second = size[1];
        if (!first) {
            return [0, 0];
        }
        if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
        }
        var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
        if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
                var targetRatio = bounds.width / bounds.height;
                return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER)
                    ? [bounds.width, bounds.width / intrinsicProportion]
                    : [bounds.height * intrinsicProportion, bounds.height];
            }
            return [bounds.width, bounds.height];
        }
        var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
        var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
        var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
        // If the background-size is auto or auto auto:
        if (isAuto(first) && (!second || isAuto(second))) {
            // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
            if (hasIntrinsicWidth && hasIntrinsicHeight) {
                return [intrinsicWidth, intrinsicHeight];
            }
            // If the image has no intrinsic dimensions and has no intrinsic proportions,
            // it's rendered at the size of the background positioning area.
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
                return [bounds.width, bounds.height];
            }
            // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
            // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
            // The other dimension is computed using the specified dimension and the intrinsic proportions.
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
                var width_1 = hasIntrinsicWidth
                    ? intrinsicWidth
                    : intrinsicHeight * intrinsicProportion;
                var height_1 = hasIntrinsicHeight
                    ? intrinsicHeight
                    : intrinsicWidth / intrinsicProportion;
                return [width_1, height_1];
            }
            // If the image has only one intrinsic dimension but has no intrinsic proportions,
            // it's rendered using the specified dimension and the other dimension of the background positioning area.
            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [width_2, height_2];
        }
        // If the image has intrinsic proportions, it's stretched to the specified dimension.
        // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
        if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;
            if (isLengthPercentage(first)) {
                width_3 = getAbsoluteValue(first, bounds.width);
            }
            else if (isLengthPercentage(second)) {
                height_3 = getAbsoluteValue(second, bounds.height);
            }
            if (isAuto(first)) {
                width_3 = height_3 * intrinsicProportion;
            }
            else if (!second || isAuto(second)) {
                height_3 = width_3 / intrinsicProportion;
            }
            return [width_3, height_3];
        }
        // If the image has no intrinsic proportions, it's stretched to the specified dimension.
        // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
        // if there is one. If there is no such intrinsic dimension,
        // it becomes the corresponding dimension of the background positioning area.
        var width = null;
        var height = null;
        if (isLengthPercentage(first)) {
            width = getAbsoluteValue(first, bounds.width);
        }
        else if (second && isLengthPercentage(second)) {
            height = getAbsoluteValue(second, bounds.height);
        }
        if (width !== null && (!second || isAuto(second))) {
            height =
                hasIntrinsicWidth && hasIntrinsicHeight
                    ? (width / intrinsicWidth) * intrinsicHeight
                    : bounds.height;
        }
        if (height !== null && isAuto(first)) {
            width =
                hasIntrinsicWidth && hasIntrinsicHeight
                    ? (height / intrinsicHeight) * intrinsicWidth
                    : bounds.width;
        }
        if (width !== null && height !== null) {
            return [width, height];
        }
        throw new Error("Unable to calculate background-size for element");
    };
    var getBackgroundValueForIndex = function (values, index) {
        var value = values[index];
        if (typeof value === 'undefined') {
            return values[0];
        }
        return value;
    };
    var calculateBackgroundRepeatPath = function (repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
        var x = _a[0], y = _a[1];
        var width = _b[0], height = _b[1];
        switch (repeat) {
            case 2 /* REPEAT_X */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
                ];
            case 3 /* REPEAT_Y */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
                ];
            case 1 /* NO_REPEAT */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
                ];
            default:
                return [
                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
                ];
        }
    };

    var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    var SAMPLE_TEXT = 'Hidden Text';
    var FontMetrics = /** @class */ (function () {
        function FontMetrics(document) {
            this._data = {};
            this._document = document;
        }
        FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');
            var body = this._document.body;
            container.style.visibility = 'hidden';
            container.style.fontFamily = fontFamily;
            container.style.fontSize = fontSize;
            container.style.margin = '0';
            container.style.padding = '0';
            container.style.whiteSpace = 'nowrap';
            body.appendChild(container);
            img.src = SMALL_IMAGE;
            img.width = 1;
            img.height = 1;
            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';
            span.style.fontFamily = fontFamily;
            span.style.fontSize = fontSize;
            span.style.margin = '0';
            span.style.padding = '0';
            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;
            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';
            var middle = img.offsetTop - container.offsetTop + 2;
            body.removeChild(container);
            return { baseline: baseline, middle: middle };
        };
        FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
            var key = fontFamily + " " + fontSize;
            if (typeof this._data[key] === 'undefined') {
                this._data[key] = this.parseMetrics(fontFamily, fontSize);
            }
            return this._data[key];
        };
        return FontMetrics;
    }());

    var Renderer = /** @class */ (function () {
        function Renderer(context, options) {
            this.context = context;
            this.options = options;
        }
        return Renderer;
    }());

    var MASK_OFFSET = 10000;
    var CanvasRenderer = /** @class */ (function (_super) {
        __extends(CanvasRenderer, _super);
        function CanvasRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this._activeEffects = [];
            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            if (!options.canvas) {
                _this.canvas.width = Math.floor(options.width * options.scale);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
            }
            _this.fontMetrics = new FontMetrics(document);
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.ctx.textBaseline = 'bottom';
            _this._activeEffects = [];
            _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
            return _this;
        }
        CanvasRenderer.prototype.applyEffects = function (effects) {
            var _this = this;
            while (this._activeEffects.length) {
                this.popEffect();
            }
            effects.forEach(function (effect) { return _this.applyEffect(effect); });
        };
        CanvasRenderer.prototype.applyEffect = function (effect) {
            this.ctx.save();
            if (isOpacityEffect(effect)) {
                this.ctx.globalAlpha = effect.opacity;
            }
            if (isTransformEffect(effect)) {
                this.ctx.translate(effect.offsetX, effect.offsetY);
                this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                this.ctx.translate(-effect.offsetX, -effect.offsetY);
            }
            if (isClipEffect(effect)) {
                this.path(effect.path);
                this.ctx.clip();
            }
            this._activeEffects.push(effect);
        };
        CanvasRenderer.prototype.popEffect = function () {
            this._activeEffects.pop();
            this.ctx.restore();
        };
        CanvasRenderer.prototype.renderStack = function (stack) {
            return __awaiter(this, void 0, void 0, function () {
                var styles;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            styles = stack.element.container.styles;
                            if (!styles.isVisible()) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.renderStackContent(stack)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNode = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (contains(paint.container.flags, 16 /* DEBUG_RENDER */)) {
                                debugger;
                            }
                            if (!paint.container.styles.isVisible()) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.renderNodeBackgroundAndBorders(paint)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.renderNodeContent(paint)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
            var _this = this;
            if (letterSpacing === 0) {
                this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
            }
            else {
                var letters = segmentGraphemes(text.text);
                letters.reduce(function (left, letter) {
                    _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                    return left + _this.ctx.measureText(letter).width;
                }, text.bounds.left);
            }
        };
        CanvasRenderer.prototype.createFontStyle = function (styles) {
            var fontVariant = styles.fontVariant
                .filter(function (variant) { return variant === 'normal' || variant === 'small-caps'; })
                .join('');
            var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
            var fontSize = isDimensionToken(styles.fontSize)
                ? "" + styles.fontSize.number + styles.fontSize.unit
                : styles.fontSize.number + "px";
            return [
                [styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '),
                fontFamily,
                fontSize
            ];
        };
        CanvasRenderer.prototype.renderTextNode = function (text, styles) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;
                var _this = this;
                return __generator(this, function (_c) {
                    _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                    this.ctx.font = font;
                    this.ctx.direction = styles.direction === 1 /* RTL */ ? 'rtl' : 'ltr';
                    this.ctx.textAlign = 'left';
                    this.ctx.textBaseline = 'alphabetic';
                    _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
                    paintOrder = styles.paintOrder;
                    text.textBounds.forEach(function (text) {
                        paintOrder.forEach(function (paintOrderLayer) {
                            switch (paintOrderLayer) {
                                case 0 /* FILL */:
                                    _this.ctx.fillStyle = asString(styles.color);
                                    _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                    var textShadows = styles.textShadow;
                                    if (textShadows.length && text.text.trim().length) {
                                        textShadows
                                            .slice(0)
                                            .reverse()
                                            .forEach(function (textShadow) {
                                            _this.ctx.shadowColor = asString(textShadow.color);
                                            _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                                            _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                                            _this.ctx.shadowBlur = textShadow.blur.number;
                                            _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                        });
                                        _this.ctx.shadowColor = '';
                                        _this.ctx.shadowOffsetX = 0;
                                        _this.ctx.shadowOffsetY = 0;
                                        _this.ctx.shadowBlur = 0;
                                    }
                                    if (styles.textDecorationLine.length) {
                                        _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                                        styles.textDecorationLine.forEach(function (textDecorationLine) {
                                            switch (textDecorationLine) {
                                                case 1 /* UNDERLINE */:
                                                    // Draws a line at the baseline of the font
                                                    // TODO As some browsers display the line as more than 1px if the font-size is big,
                                                    // need to take that into account both in position and size
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                                                    break;
                                                case 2 /* OVERLINE */:
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                                                    break;
                                                case 3 /* LINE_THROUGH */:
                                                    // TODO try and find exact position for line-through
                                                    _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                                                    break;
                                            }
                                        });
                                    }
                                    break;
                                case 1 /* STROKE */:
                                    if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                                        _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                                        _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';
                                        _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                                    }
                                    _this.ctx.strokeStyle = '';
                                    _this.ctx.lineWidth = 0;
                                    _this.ctx.lineJoin = 'miter';
                                    break;
                            }
                        });
                    });
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
            if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                var box = contentBox(container);
                var path = calculatePaddingBoxPath(curves);
                this.path(path);
                this.ctx.save();
                this.ctx.clip();
                this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                this.ctx.restore();
            }
        };
        CanvasRenderer.prototype.renderNodeContent = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.applyEffects(paint.getEffects(4 /* CONTENT */));
                            container = paint.container;
                            curves = paint.curves;
                            styles = container.styles;
                            _i = 0, _a = container.textNodes;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            child = _a[_i];
                            return [4 /*yield*/, this.renderTextNode(child, styles)];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (!(container instanceof ImageElementContainer)) return [3 /*break*/, 8];
                            _c.label = 5;
                        case 5:
                            _c.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.context.cache.match(container.src)];
                        case 6:
                            image = _c.sent();
                            this.renderReplacedElement(container, curves, image);
                            return [3 /*break*/, 8];
                        case 7:
                            _c.sent();
                            this.context.logger.error("Error loading image " + container.src);
                            return [3 /*break*/, 8];
                        case 8:
                            if (container instanceof CanvasElementContainer) {
                                this.renderReplacedElement(container, curves, container.canvas);
                            }
                            if (!(container instanceof SVGElementContainer)) return [3 /*break*/, 12];
                            _c.label = 9;
                        case 9:
                            _c.trys.push([9, 11, , 12]);
                            return [4 /*yield*/, this.context.cache.match(container.svg)];
                        case 10:
                            image = _c.sent();
                            this.renderReplacedElement(container, curves, image);
                            return [3 /*break*/, 12];
                        case 11:
                            _c.sent();
                            this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                            return [3 /*break*/, 12];
                        case 12:
                            if (!(container instanceof IFrameElementContainer && container.tree)) return [3 /*break*/, 14];
                            iframeRenderer = new CanvasRenderer(this.context, {
                                scale: this.options.scale,
                                backgroundColor: container.backgroundColor,
                                x: 0,
                                y: 0,
                                width: container.width,
                                height: container.height
                            });
                            return [4 /*yield*/, iframeRenderer.render(container.tree)];
                        case 13:
                            canvas = _c.sent();
                            if (container.width && container.height) {
                                this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                            }
                            _c.label = 14;
                        case 14:
                            if (container instanceof InputElementContainer) {
                                size = Math.min(container.bounds.width, container.bounds.height);
                                if (container.type === CHECKBOX) {
                                    if (container.checked) {
                                        this.ctx.save();
                                        this.path([
                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                                            new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                                            new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                                            new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                                            new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                                            new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                                        ]);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        this.ctx.restore();
                                    }
                                }
                                else if (container.type === RADIO) {
                                    if (container.checked) {
                                        this.ctx.save();
                                        this.ctx.beginPath();
                                        this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        this.ctx.restore();
                                    }
                                }
                            }
                            if (isTextInputElement(container) && container.value.length) {
                                _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                                baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = 'alphabetic';
                                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                                bounds = contentBox(container);
                                x = 0;
                                switch (container.styles.textAlign) {
                                    case 1 /* CENTER */:
                                        x += bounds.width / 2;
                                        break;
                                    case 2 /* RIGHT */:
                                        x += bounds.width;
                                        break;
                                }
                                textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                                this.ctx.save();
                                this.path([
                                    new Vector(bounds.left, bounds.top),
                                    new Vector(bounds.left + bounds.width, bounds.top),
                                    new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                                    new Vector(bounds.left, bounds.top + bounds.height)
                                ]);
                                this.ctx.clip();
                                this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                                this.ctx.restore();
                                this.ctx.textBaseline = 'alphabetic';
                                this.ctx.textAlign = 'left';
                            }
                            if (!contains(container.styles.display, 2048 /* LIST_ITEM */)) return [3 /*break*/, 20];
                            if (!(container.styles.listStyleImage !== null)) return [3 /*break*/, 19];
                            img = container.styles.listStyleImage;
                            if (!(img.type === 0 /* URL */)) return [3 /*break*/, 18];
                            image = void 0;
                            url = img.url;
                            _c.label = 15;
                        case 15:
                            _c.trys.push([15, 17, , 18]);
                            return [4 /*yield*/, this.context.cache.match(url)];
                        case 16:
                            image = _c.sent();
                            this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                            return [3 /*break*/, 18];
                        case 17:
                            _c.sent();
                            this.context.logger.error("Error loading list-style-image " + url);
                            return [3 /*break*/, 18];
                        case 18: return [3 /*break*/, 20];
                        case 19:
                            if (paint.listValue && container.styles.listStyleType !== -1 /* NONE */) {
                                fontFamily = this.createFontStyle(styles)[0];
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = 'middle';
                                this.ctx.textAlign = 'right';
                                bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                                this.ctx.textBaseline = 'bottom';
                                this.ctx.textAlign = 'left';
                            }
                            _c.label = 20;
                        case 20: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderStackContent = function (stack) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                return __generator(this, function (_p) {
                    switch (_p.label) {
                        case 0:
                            if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */)) {
                                debugger;
                            }
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. the background and borders of the element forming the stacking context.
                            return [4 /*yield*/, this.renderNodeBackgroundAndBorders(stack.element)];
                        case 1:
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. the background and borders of the element forming the stacking context.
                            _p.sent();
                            _i = 0, _a = stack.negativeZIndex;
                            _p.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            child = _a[_i];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 3:
                            _p.sent();
                            _p.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: 
                        // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                        return [4 /*yield*/, this.renderNodeContent(stack.element)];
                        case 6:
                            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                            _p.sent();
                            _b = 0, _c = stack.nonInlineLevel;
                            _p.label = 7;
                        case 7:
                            if (!(_b < _c.length)) return [3 /*break*/, 10];
                            child = _c[_b];
                            return [4 /*yield*/, this.renderNode(child)];
                        case 8:
                            _p.sent();
                            _p.label = 9;
                        case 9:
                            _b++;
                            return [3 /*break*/, 7];
                        case 10:
                            _d = 0, _e = stack.nonPositionedFloats;
                            _p.label = 11;
                        case 11:
                            if (!(_d < _e.length)) return [3 /*break*/, 14];
                            child = _e[_d];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 12:
                            _p.sent();
                            _p.label = 13;
                        case 13:
                            _d++;
                            return [3 /*break*/, 11];
                        case 14:
                            _f = 0, _g = stack.nonPositionedInlineLevel;
                            _p.label = 15;
                        case 15:
                            if (!(_f < _g.length)) return [3 /*break*/, 18];
                            child = _g[_f];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 16:
                            _p.sent();
                            _p.label = 17;
                        case 17:
                            _f++;
                            return [3 /*break*/, 15];
                        case 18:
                            _h = 0, _j = stack.inlineLevel;
                            _p.label = 19;
                        case 19:
                            if (!(_h < _j.length)) return [3 /*break*/, 22];
                            child = _j[_h];
                            return [4 /*yield*/, this.renderNode(child)];
                        case 20:
                            _p.sent();
                            _p.label = 21;
                        case 21:
                            _h++;
                            return [3 /*break*/, 19];
                        case 22:
                            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                            _p.label = 23;
                        case 23:
                            if (!(_k < _l.length)) return [3 /*break*/, 26];
                            child = _l[_k];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 24:
                            _p.sent();
                            _p.label = 25;
                        case 25:
                            _k++;
                            return [3 /*break*/, 23];
                        case 26:
                            _m = 0, _o = stack.positiveZIndex;
                            _p.label = 27;
                        case 27:
                            if (!(_m < _o.length)) return [3 /*break*/, 30];
                            child = _o[_m];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 28:
                            _p.sent();
                            _p.label = 29;
                        case 29:
                            _m++;
                            return [3 /*break*/, 27];
                        case 30: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.mask = function (paths) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(this.canvas.width, 0);
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.lineTo(0, 0);
            this.formatPath(paths.slice(0).reverse());
            this.ctx.closePath();
        };
        CanvasRenderer.prototype.path = function (paths) {
            this.ctx.beginPath();
            this.formatPath(paths);
            this.ctx.closePath();
        };
        CanvasRenderer.prototype.formatPath = function (paths) {
            var _this = this;
            paths.forEach(function (point, index) {
                var start = isBezierCurve(point) ? point.start : point;
                if (index === 0) {
                    _this.ctx.moveTo(start.x, start.y);
                }
                else {
                    _this.ctx.lineTo(start.x, start.y);
                }
                if (isBezierCurve(point)) {
                    _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                }
            });
        };
        CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = pattern;
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        };
        CanvasRenderer.prototype.resizeImage = function (image, width, height) {
            var _a;
            if (image.width === width && image.height === height) {
                return image;
            }
            var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
            var canvas = ownerDocument.createElement('canvas');
            canvas.width = Math.max(1, width);
            canvas.height = Math.max(1, height);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
            return canvas;
        };
        CanvasRenderer.prototype.renderBackgroundImage = function (container) {
            return __awaiter(this, void 0, void 0, function () {
                var index, _loop_1, this_1, _i, _a, backgroundImage;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            index = container.styles.backgroundImage.length - 1;
                            _loop_1 = function (backgroundImage) {
                                var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
                                return __generator(this, function (_h) {
                                    switch (_h.label) {
                                        case 0:
                                            if (!(backgroundImage.type === 0 /* URL */)) return [3 /*break*/, 5];
                                            image = void 0;
                                            url = backgroundImage.url;
                                            _h.label = 1;
                                        case 1:
                                            _h.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, this_1.context.cache.match(url)];
                                        case 2:
                                            image = _h.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            _h.sent();
                                            this_1.context.logger.error("Error loading background-image " + url);
                                            return [3 /*break*/, 4];
                                        case 4:
                                            if (image) {
                                                _c = calculateBackgroundRendering(container, index, [
                                                    image.width,
                                                    image.height,
                                                    image.width / image.height
                                                ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                                pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                                                this_1.renderRepeat(path, pattern, x, y);
                                            }
                                            return [3 /*break*/, 6];
                                        case 5:
                                            if (isLinearGradient(backgroundImage)) {
                                                _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                                _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                                canvas = document.createElement('canvas');
                                                canvas.width = width;
                                                canvas.height = height;
                                                ctx = canvas.getContext('2d');
                                                gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                                processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                                                    return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                });
                                                ctx.fillStyle = gradient_1;
                                                ctx.fillRect(0, 0, width, height);
                                                if (width > 0 && height > 0) {
                                                    pattern = this_1.ctx.createPattern(canvas, 'repeat');
                                                    this_1.renderRepeat(path, pattern, x, y);
                                                }
                                            }
                                            else if (isRadialGradient(backgroundImage)) {
                                                _f = calculateBackgroundRendering(container, index, [
                                                    null,
                                                    null,
                                                    null
                                                ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                                position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                                                x = getAbsoluteValue(position[0], width);
                                                y = getAbsoluteValue(position[position.length - 1], height);
                                                _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];
                                                if (rx > 0 && ry > 0) {
                                                    radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                                    processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                                                        return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                    });
                                                    this_1.path(path);
                                                    this_1.ctx.fillStyle = radialGradient_1;
                                                    if (rx !== ry) {
                                                        midX = container.bounds.left + 0.5 * container.bounds.width;
                                                        midY = container.bounds.top + 0.5 * container.bounds.height;
                                                        f = ry / rx;
                                                        invF = 1 / f;
                                                        this_1.ctx.save();
                                                        this_1.ctx.translate(midX, midY);
                                                        this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                                        this_1.ctx.translate(-midX, -midY);
                                                        this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                                        this_1.ctx.restore();
                                                    }
                                                    else {
                                                        this_1.ctx.fill();
                                                    }
                                                }
                                            }
                                            _h.label = 6;
                                        case 6:
                                            index--;
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            backgroundImage = _a[_i];
                            return [5 /*yield**/, _loop_1(backgroundImage)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.path(parsePathForBorder(curvePoints, side));
                    this.ctx.fillStyle = asString(color);
                    this.ctx.fill();
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function () {
                var outerPaths, innerPaths;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(width < 3)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.renderSolidBorder(color, side, curvePoints)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                            this.path(outerPaths);
                            this.ctx.fillStyle = asString(color);
                            this.ctx.fill();
                            innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                            this.path(innerPaths);
                            this.ctx.fill();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */));
                            styles = paint.container.styles;
                            hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                            borders = [
                                { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                                { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                                { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                                { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
                            ];
                            backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                            if (!(hasBackground || styles.boxShadow.length)) return [3 /*break*/, 2];
                            this.ctx.save();
                            this.path(backgroundPaintingArea);
                            this.ctx.clip();
                            if (!isTransparent(styles.backgroundColor)) {
                                this.ctx.fillStyle = asString(styles.backgroundColor);
                                this.ctx.fill();
                            }
                            return [4 /*yield*/, this.renderBackgroundImage(paint.container)];
                        case 1:
                            _a.sent();
                            this.ctx.restore();
                            styles.boxShadow
                                .slice(0)
                                .reverse()
                                .forEach(function (shadow) {
                                _this.ctx.save();
                                var borderBoxArea = calculateBorderBoxPath(paint.curves);
                                var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                                if (shadow.inset) {
                                    _this.path(borderBoxArea);
                                    _this.ctx.clip();
                                    _this.mask(shadowPaintingArea);
                                }
                                else {
                                    _this.mask(borderBoxArea);
                                    _this.ctx.clip();
                                    _this.path(shadowPaintingArea);
                                }
                                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                                _this.ctx.shadowOffsetY = shadow.offsetY.number;
                                _this.ctx.shadowColor = asString(shadow.color);
                                _this.ctx.shadowBlur = shadow.blur.number;
                                _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';
                                _this.ctx.fill();
                                _this.ctx.restore();
                            });
                            _a.label = 2;
                        case 2:
                            side = 0;
                            _i = 0, borders_1 = borders;
                            _a.label = 3;
                        case 3:
                            if (!(_i < borders_1.length)) return [3 /*break*/, 13];
                            border = borders_1[_i];
                            if (!(border.style !== 0 /* NONE */ && !isTransparent(border.color) && border.width > 0)) return [3 /*break*/, 11];
                            if (!(border.style === 2 /* DASHED */)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 5:
                            if (!(border.style === 3 /* DOTTED */)) return [3 /*break*/, 7];
                            return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */)];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 7:
                            if (!(border.style === 4 /* DOUBLE */)) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                        case 8:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 9: return [4 /*yield*/, this.renderSolidBorder(border.color, side, paint.curves)];
                        case 10:
                            _a.sent();
                            _a.label = 11;
                        case 11:
                            side++;
                            _a.label = 12;
                        case 12:
                            _i++;
                            return [3 /*break*/, 3];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
            return __awaiter(this, void 0, void 0, function () {
                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                return __generator(this, function (_a) {
                    this.ctx.save();
                    strokePaths = parsePathForBorderStroke(curvePoints, side);
                    boxPaths = parsePathForBorder(curvePoints, side);
                    if (style === 2 /* DASHED */) {
                        this.path(boxPaths);
                        this.ctx.clip();
                    }
                    if (isBezierCurve(boxPaths[0])) {
                        startX = boxPaths[0].start.x;
                        startY = boxPaths[0].start.y;
                    }
                    else {
                        startX = boxPaths[0].x;
                        startY = boxPaths[0].y;
                    }
                    if (isBezierCurve(boxPaths[1])) {
                        endX = boxPaths[1].end.x;
                        endY = boxPaths[1].end.y;
                    }
                    else {
                        endX = boxPaths[1].x;
                        endY = boxPaths[1].y;
                    }
                    if (side === 0 || side === 2) {
                        length = Math.abs(startX - endX);
                    }
                    else {
                        length = Math.abs(startY - endY);
                    }
                    this.ctx.beginPath();
                    if (style === 3 /* DOTTED */) {
                        this.formatPath(strokePaths);
                    }
                    else {
                        this.formatPath(boxPaths.slice(0, 2));
                    }
                    dashLength = width < 3 ? width * 3 : width * 2;
                    spaceLength = width < 3 ? width * 2 : width;
                    if (style === 3 /* DOTTED */) {
                        dashLength = width;
                        spaceLength = width;
                    }
                    useLineDash = true;
                    if (length <= dashLength * 2) {
                        useLineDash = false;
                    }
                    else if (length <= dashLength * 2 + spaceLength) {
                        multiplier = length / (2 * dashLength + spaceLength);
                        dashLength *= multiplier;
                        spaceLength *= multiplier;
                    }
                    else {
                        numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                        minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                        maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                        spaceLength =
                            maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace)
                                ? minSpace
                                : maxSpace;
                    }
                    if (useLineDash) {
                        if (style === 3 /* DOTTED */) {
                            this.ctx.setLineDash([0, dashLength + spaceLength]);
                        }
                        else {
                            this.ctx.setLineDash([dashLength, spaceLength]);
                        }
                    }
                    if (style === 3 /* DOTTED */) {
                        this.ctx.lineCap = 'round';
                        this.ctx.lineWidth = width;
                    }
                    else {
                        this.ctx.lineWidth = width * 2 + 1.1;
                    }
                    this.ctx.strokeStyle = asString(color);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                    // dashed round edge gap
                    if (style === 2 /* DASHED */) {
                        if (isBezierCurve(boxPaths[0])) {
                            path1 = boxPaths[3];
                            path2 = boxPaths[0];
                            this.ctx.beginPath();
                            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                            this.ctx.stroke();
                        }
                        if (isBezierCurve(boxPaths[1])) {
                            path1 = boxPaths[1];
                            path2 = boxPaths[2];
                            this.ctx.beginPath();
                            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                            this.ctx.stroke();
                        }
                    }
                    this.ctx.restore();
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.render = function (element) {
            return __awaiter(this, void 0, void 0, function () {
                var stack;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.options.backgroundColor) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                            }
                            stack = parseStackingContexts(element);
                            return [4 /*yield*/, this.renderStack(stack)];
                        case 1:
                            _a.sent();
                            this.applyEffects([]);
                            return [2 /*return*/, this.canvas];
                    }
                });
            });
        };
        return CanvasRenderer;
    }(Renderer));
    var isTextInputElement = function (container) {
        if (container instanceof TextareaElementContainer) {
            return true;
        }
        else if (container instanceof SelectElementContainer) {
            return true;
        }
        else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            return true;
        }
        return false;
    };
    var calculateBackgroundCurvedPaintingArea = function (clip, curves) {
        switch (clip) {
            case 0 /* BORDER_BOX */:
                return calculateBorderBoxPath(curves);
            case 2 /* CONTENT_BOX */:
                return calculateContentBoxPath(curves);
            case 1 /* PADDING_BOX */:
            default:
                return calculatePaddingBoxPath(curves);
        }
    };
    var canvasTextAlign = function (textAlign) {
        switch (textAlign) {
            case 1 /* CENTER */:
                return 'center';
            case 2 /* RIGHT */:
                return 'right';
            case 0 /* LEFT */:
            default:
                return 'left';
        }
    };
    // see https://github.com/niklasvh/html2canvas/pull/2645
    var iOSBrokenFonts = ['-apple-system', 'system-ui'];
    var fixIOSSystemFonts = function (fontFamilies) {
        return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
            ? fontFamilies.filter(function (fontFamily) { return iOSBrokenFonts.indexOf(fontFamily) === -1; })
            : fontFamilies;
    };

    var ForeignObjectRenderer = /** @class */ (function (_super) {
        __extends(ForeignObjectRenderer, _super);
        function ForeignObjectRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            _this.options = options;
            _this.canvas.width = Math.floor(options.width * options.scale);
            _this.canvas.height = Math.floor(options.height * options.scale);
            _this.canvas.style.width = options.width + "px";
            _this.canvas.style.height = options.height + "px";
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
            return _this;
        }
        ForeignObjectRenderer.prototype.render = function (element) {
            return __awaiter(this, void 0, void 0, function () {
                var svg, img;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                            return [4 /*yield*/, loadSerializedSVG(svg)];
                        case 1:
                            img = _a.sent();
                            if (this.options.backgroundColor) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                            }
                            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                            return [2 /*return*/, this.canvas];
                    }
                });
            });
        };
        return ForeignObjectRenderer;
    }(Renderer));
    var loadSerializedSVG = function (svg) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };

    var Logger = /** @class */ (function () {
        function Logger(_a) {
            var id = _a.id, enabled = _a.enabled;
            this.id = id;
            this.enabled = enabled;
            this.start = Date.now();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
                    // eslint-disable-next-line no-console
                    console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        Logger.prototype.getTime = function () {
            return Date.now() - this.start;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
                    // eslint-disable-next-line no-console
                    console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
                    // eslint-disable-next-line no-console
                    console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
                    // eslint-disable-next-line no-console
                    console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        Logger.instances = {};
        return Logger;
    }());

    var Context = /** @class */ (function () {
        function Context(options, windowBounds) {
            var _a;
            this.windowBounds = windowBounds;
            this.instanceName = "#" + Context.instanceCount++;
            this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
            this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
        }
        Context.instanceCount = 1;
        return Context;
    }());

    var html2canvas = function (element, options) {
        if (options === void 0) { options = {}; }
        return renderElement(element, options);
    };
    if (typeof window !== 'undefined') {
        CacheStorage.setContext(window);
    }
    var renderElement = function (element, opts) { return __awaiter(void 0, void 0, void 0, function () {
        var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return __generator(this, function (_u) {
            switch (_u.label) {
                case 0:
                    if (!element || typeof element !== 'object') {
                        return [2 /*return*/, Promise.reject('Invalid element provided as first argument')];
                    }
                    ownerDocument = element.ownerDocument;
                    if (!ownerDocument) {
                        throw new Error("Element is not attached to a Document");
                    }
                    defaultView = ownerDocument.defaultView;
                    if (!defaultView) {
                        throw new Error("Document is not attached to a Window");
                    }
                    resourceOptions = {
                        allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                        imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
                        proxy: opts.proxy,
                        useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                    };
                    contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                    windowOptions = {
                        windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                        windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                        scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                        scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                    };
                    windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                    context = new Context(contextOptions, windowBounds);
                    foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                    cloneOptions = {
                        allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                        onclone: opts.onclone,
                        ignoreElements: opts.ignoreElements,
                        inlineImages: foreignObjectRendering,
                        copyStyles: foreignObjectRendering
                    };
                    context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                    documentCloner = new DocumentCloner(context, element, cloneOptions);
                    clonedElement = documentCloner.clonedReferenceElement;
                    if (!clonedElement) {
                        return [2 /*return*/, Promise.reject("Unable to find element in cloned iframe")];
                    }
                    return [4 /*yield*/, documentCloner.toIFrame(ownerDocument, windowBounds)];
                case 1:
                    container = _u.sent();
                    _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement)
                        ? parseDocumentSize(clonedElement.ownerDocument)
                        : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                    backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                    renderOptions = {
                        canvas: opts.canvas,
                        backgroundColor: backgroundColor,
                        scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                        x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                        y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                        width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                        height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                    };
                    if (!foreignObjectRendering) return [3 /*break*/, 3];
                    context.logger.debug("Document cloned, using foreign object rendering");
                    renderer = new ForeignObjectRenderer(context, renderOptions);
                    return [4 /*yield*/, renderer.render(clonedElement)];
                case 2:
                    canvas = _u.sent();
                    return [3 /*break*/, 5];
                case 3:
                    context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                    context.logger.debug("Starting DOM parsing");
                    root = parseTree(context, clonedElement);
                    if (backgroundColor === root.styles.backgroundColor) {
                        root.styles.backgroundColor = COLORS.TRANSPARENT;
                    }
                    context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                    renderer = new CanvasRenderer(context, renderOptions);
                    return [4 /*yield*/, renderer.render(root)];
                case 4:
                    canvas = _u.sent();
                    _u.label = 5;
                case 5:
                    if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                        if (!DocumentCloner.destroy(container)) {
                            context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                        }
                    }
                    context.logger.debug("Finished rendering");
                    return [2 /*return*/, canvas];
            }
        });
    }); };
    var parseBackgroundColor = function (context, element, backgroundColorOverride) {
        var ownerDocument = element.ownerDocument;
        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var documentBackgroundColor = ownerDocument.documentElement
            ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor)
            : COLORS.TRANSPARENT;
        var bodyBackgroundColor = ownerDocument.body
            ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor)
            : COLORS.TRANSPARENT;
        var defaultBackgroundColor = typeof backgroundColorOverride === 'string'
            ? parseColor(context, backgroundColorOverride)
            : backgroundColorOverride === null
                ? COLORS.TRANSPARENT
                : 0xffffffff;
        return element === ownerDocument.documentElement
            ? isTransparent(documentBackgroundColor)
                ? isTransparent(bodyBackgroundColor)
                    ? defaultBackgroundColor
                    : bodyBackgroundColor
                : documentBackgroundColor
            : defaultBackgroundColor;
    };

    class Imagefy {
        static create(infos) {
            return __awaiter$1(this, void 0, void 0, function* () {
                const { dom } = infos;
                const imgs = Array.from(dom.parentNode.querySelectorAll('img'));
                console.log('xxxdom imgs, dom', imgs, dom);
                for (let img of imgs) {
                    img.setAttribute('crossorigin', 'anonymous');
                    let imgUrl = img.getAttribute('src');
                    imgUrl = imgUrl + '?' + new Date().getTime();
                    img.setAttribute('src', imgUrl);
                }
                const base64Data = yield this.canvasTobase64(dom, {
                    logging: false,
                    timeout: 3500,
                    allowTaint: true,
                    useCORS: true,
                    scale: 3,
                    // proxy: 'https://test-fs-file.s3.ap-southeast-1.amazonaws.com',
                });
                return new build.exports.ImageRun(Object.assign({ data: base64Data }, this.transformation(dom)));
            });
        }
        // static async getData() {
        //     let imgdata
        //     try {
        //       imgdata = await getImageBase64(
        //         '/../../../examples/indexDom2/17ea0a60-1647-46e2-abf5-582f92cf3f27.png',
        //       )
        //       // imgdata = await getImageBase64(
        //       //   'https://test-fs-file.s3.ap-southeast-1.amazonaws.com/image/marketing/2023-05-24/17ea0a60-1647-46e2-abf5-582f92cf3f27.png',
        //       // )
        //     } catch (err) {
        //       console.log('Imagefy err', err)
        //       imgdata = ''
        //     }
        //     return { data: imgdata as Buffer }
        //   }
        //   imageBase64Data = `iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACzVBMVEUAAAAAAAAAAAAAAAA/AD8zMzMqKiokJCQfHx8cHBwZGRkuFxcqFSonJyckJCQiIiIfHx8eHh4cHBwoGhomGSYkJCQhISEfHx8eHh4nHR0lHBwkGyQjIyMiIiIgICAfHx8mHh4lHh4kHR0jHCMiGyIhISEgICAfHx8lHx8kHh4jHR0hHCEhISEgICAlHx8kHx8jHh4jHh4iHSIhHCEhISElICAkHx8jHx8jHh4iHh4iHSIhHSElICAkICAjHx8jHx8iHh4iHh4hHiEhHSEkICAjHx8iHx8iHx8hHh4hHiEkHSEjHSAjHx8iHx8iHx8hHh4kHiEkHiEjHSAiHx8hHx8hHh4kHiEjHiAjHSAiHx8iHx8hHx8kHh4jHiEjHiAjHiAiICAiHx8kHx8jHh4jHiEjHiAiHiAiHSAiHx8jHx8jHx8jHiAiHiAiHiAiHSAiHx8jHx8jHx8iHiAiHiAiHiAjHx8jHx8jHx8jHx8iHiAiHiAiHiAjHx8jHx8jHx8iHx8iHSAiHiAjHiAjHx8jHx8hHx8iHx8iHyAiHiAjHiAjHiAjHh4hHx8iHx8iHx8iHyAjHSAjHiAjHiAjHh4hHx8iHx8iHx8jHyAjHiAhHh4iHx8iHx8jHyAjHSAjHSAhHiAhHh4iHx8iHx8jHx8jHyAjHSAjHSAiHh4iHh4jHx8jHx8jHyAjHyAhHSAhHSAiHh4iHh4jHx8jHx8jHyAhHyAhHSAiHSAiHh4jHh4jHx8jHx8jHyAhHyAhHSAiHSAjHR4jHh4jHx8jHx8hHyAhHyAiHSAjHSAjHR4jHh4jHx8hHx8hHyAhHyAiHyAjHSAjHR4jHR4hHh4hHx8hHyAiHyAjHyAjHSAjHR4jHR4hHh4hHx8hHyAjHyAjHyAjHSAjHR4hHR4hHR4hHx8iHyAjHyAjHyAjHSAhHR4hHR4hHR4hHx8jHyAjHyAjHyAjHyC9S2xeAAAA7nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFxgZGhscHR4fICEiIyQlJicoKSorLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZISUpLTE1OUFFSU1RVVllaW1xdXmBhYmNkZWZnaGprbG1ub3Byc3R1dnd4eXp8fn+AgYKDhIWGiImKi4yNj5CRkpOUlZaXmJmam5ydnp+goaKjpKaoqqusra6vsLGys7S1tri5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+fkZpVQAABcBJREFUGBntwftjlQMcBvDnnLNL22qzJjWlKLHFVogyty3SiFq6EZliqZGyhnSxsLlMRahYoZKRFcul5dKFCatYqWZaNKvWtrPz/A2+7/b27qRzec/lPfvl/XxgMplMJpPJZDKZAtA9HJ3ppnIez0KnSdtC0RCNznHdJrbrh85wdSlVVRaEXuoGamYi5K5430HNiTiEWHKJg05eRWgNfKeV7RxbqUhGKPV/207VupQ8is0IoX5vtFC18SqEHaK4GyHTZ2kzVR8PBTCO4oANIZL4ShNVZcOhKKeYg9DoWdhI1ec3os2VFI0JCIUez5+i6st0qJZRrEAIJCw+QdW223BG/EmKwTBc/IJ/qfp2FDrkUnwFo8U9dZyqnaPhxLqfYjyM1S3vb6p+GGOBszsojoTDSDFz6qj66R4LzvYJxVMwUNRjf1H1ywQr/megg2RzLximy8waqvbda8M5iijegVEiHjlM1W/3h+FcXesphsMY4dMOUnUgOxyuPEzxPQwRNvV3qg5Nj4BreyimwADWe/dRVTMjEm6MoGLzGwtystL6RyOY3qSqdlYU3FpLZw1VW0sK5943MvUCKwJ1noNtjs6Ohge76Zq9ZkfpigU5WWkDYuCfbs1U5HWFR8/Qq4a9W0uK5k4ZmdrTCl8spGIePLPlbqqsc1Afe83O0hULc8alDYiBd7ZyitYMeBfR55rR2fOKP6ioPk2dGvZ+UVI0d8rtqT2tcCexlqK2F3wRn5Q+YVbBqrLKOupkr9lZujAOrmS0UpTb4JeIPkNHZ+cXr6uoPk2vyuBSPhWLEKj45PQJuQWryyqP0Z14uGLdROHIRNBEXDR09EP5r62rOHCazhrD4VKPwxTH+sIA3ZPTJ+YuWV22n+IruHFDC8X2CBjnPoolcGc2FYUwzmsUWXDHsoGKLBhmN0VvuBVfTVE/AAbpaid5CB4MbaLY1QXGuIViLTyZQcVyGGMuxWPwaA0Vk2GI9RRp8Ci2iuLkIBjhT5LNUfAspZFiTwyC72KK7+DNg1SsRvCNp3gZXq2k4iEEXSHFJHgVXUlxejCCbTvFAHiXdIJiXxyCK7KJ5FHoMZGK9xBcwyg2QpdlVMxEUM2iyIMuXXZQNF+HswxMsSAAJRQjoE//eoqDCXBSTO6f1xd+O0iyNRY6jaWi1ALNYCocZROj4JdEikroVkjFk9DcStXxpdfCD2MoXodu4RUU9ptxxmXssOfxnvDVcxRTod9FxyhqLoAqis5aPhwTDp9spRgEH2Q6KLbYoKqlaKTm6Isp0C/sJMnjFvhiERXPQvUNRe9p29lhR04CdBpC8Sl8YiuncIxEuzUUg4Dkgj+paVozygY9plPMh28SaymO9kabAopREGF3vt9MzeFFl8G7lRSZ8FFGK8XX4VA8QjEd7XrM3M0OXz8YCy+qKBLgq3wqnofiTorF0Ax56Rg1J1elW+BBAsVe+My6iYq7IK6keBdOIseV2qn5Pb8f3MqkWAXf9ThM8c8lAOIotuFsF875lRrH5klRcG0+xcPwQ1oLxfeRAP4heQTnGL78X2rqlw2DK59SXAV/zKaiGMAuko5InCt68mcOan5+ohf+z1pP8lQY/GHZQMV4YD3FpXDp4qerqbF/lBWBswyi+AL+ia+maLgcRRQj4IYlY/UpauqKBsPJAxQF8NM1TRQ/RudSPAD34rK3scOuR8/HGcspxsJfOVS8NZbiGXiUtPgINU3v3WFDmx8pEuG3EiqKKVbCC1vm2iZqap5LAtCtleQf8F9sFYWDohzeJczYyQ4V2bEZFGsQgJRGqqqhS2phHTWn9lDkIhBTqWqxQZ+IsRvtdHY9AvI2VX2hW68nfqGmuQsCEl3JdjfCF8OW1bPdtwhQ0gm2mQzfRE3a7KCYj0BNZJs8+Kxf/r6WtTEI2FIqlsMfFgRB5A6KUnSe/vUkX0AnuvUIt8SjM1m6wWQymUwmk8lkMgXRf5vi8rLQxtUhAAAAAElFTkSuQmCC`
        // }
        // px 转 英寸 转pt
        static convertPxToPt(n) {
            return (n / 96) * 72;
        }
        static canvasTobase64(dom, options) {
            return new Promise((resolve, reject) => {
                html2canvas(dom, options).then((res) => {
                    const dataURL = res.toDataURL('image/jpeg', 1);
                    // console.log('class TransToImg dataURL', dataURL)
                    resolve(dataURL);
                }, (reason) => {
                    console.error('canvasTobase64 err reason', reason);
                    reject(reason);
                });
            });
        }
        static transformation(dom) {
            const { width, height } = this.format(dom);
            return {
                transformation: {
                    width,
                    height,
                },
            };
        }
        // 根据宽高比和最大宽度计算 width height
        static format(dom) {
            const ratio = dom.clientWidth / dom.clientHeight;
            const maxWidthPerWord = Constant.MaxWidthPerWord;
            const maxWidth = this.convertPxToPt(maxWidthPerWord);
            const height = this.convertPxToPt(maxWidthPerWord / ratio);
            return {
                width: maxWidth,
                height,
            };
        }
    }
    // {
    //   opacity: "1",
    //   filter: "blur(0px) hue-rotate(0deg)",
    //   position: "absolute",
    //   left: "0.16rem",
    //   width: "1.5561rem",
    //   height: "1.1244rem",
    //   top: "0.24rem",
    //   "z-index": "0",
    //   "background-repeat": "no-repeat",
    //   "background-size": "100% 100%",
    //   "font-family": "AliRegular",
    //   transform: "none"
    // }

    class Fontfy {
        static format(str, needKey = false) {
            if (!str)
                return;
            const [size] = transSizeUnit(str);
            return needKey ? { size } : size;
        }
        static handle_fontWeight(str) {
            return { bold: true };
        }
    }

    class Positionfy {
        static format(value, needKey = false) {
            // console.log('Positionfy value', value)
            build.exports.AlignmentType[value.toLocaleUpperCase()];
            const o = build.exports.AlignmentType[value.toLocaleUpperCase()] || build.exports.AlignmentType.LEFT;
            return needKey ? { alignment: o } : o;
        }
    }

    class Colorfy {
        static format(color, needKey = false) {
            if (!color)
                return;
            let colorValue = color;
            let value;
            if (colorValue.startsWith('linear')) {
                colorValue = this.getLinerValue(colorValue);
            }
            if (colorValue.startsWith('rgb')) {
                value = this.hexify(colorValue);
            }
            else if (colors[colorValue]) {
                value = colors[colorValue];
            }
            else if (colorValue.startsWith('#')) {
                if (colorValue.length === 4) {
                    value = this.convertColorValue(colorValue);
                }
                else {
                    value = colorValue;
                }
            }
            else {
                value = colorValue;
            }
            return needKey ? { color: value } : value;
        }
        static hexify(color) {
            let values = color
                .replace(/rgba?\(/, '')
                .replace(/\)/, '')
                .replace(/[\s+]/g, '')
                .split(',');
            let a = parseFloat(values[3] || 1), r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255), g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255), b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
            return ('#' +
                ('0' + r.toString(16)).slice(-2) +
                ('0' + g.toString(16)).slice(-2) +
                ('0' + b.toString(16)).slice(-2));
        }
        static convertColorValue(colorValue) {
            const hexRegExp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            colorValue = colorValue.replace(hexRegExp, function (m, r, g, b) {
                return '#' + r + r + g + g + b + b;
            });
            return colorValue;
        }
        static getLinerValue(gradient) {
            const regex = /rgb\((\d+), (\d+), (\d+)\)/;
            const match = gradient.match(regex);
            const [r, g, b] = match.slice(1).map((val) => parseInt(val));
            const value = `rgb(${r}, ${g}, ${b})`;
            console.log('getLinerValue', value);
            return value;
        }
    }
    const colors = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgrey: '#a9a9a9',
        darkgreen: '#006400',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        grey: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgrey: '#d3d3d3',
        lightgreen: '#90ee90',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
    };

    class Borderfy {
        static format(borderStr, needKey = false) {
            // console.log('borderStr', borderStr)
            if (!borderStr)
                return;
            const res = this.getProperties(borderStr);
            if (!res)
                return {};
            let { borderSize, borderStyle, borderColor } = res;
            borderStyle = this.formatBorderStyle(borderStyle);
            borderColor = borderColor && Colorfy.format(borderColor);
            const [size, unit] = (borderSize && transSizeUnit(borderSize)) || [1, 'px'];
            if (borderSize && borderStyle && borderColor) {
                const o = {};
                const b = { size, unit, borderStyle, borderColor };
                Object.assign(o, this.formatBorder('top', b));
                Object.assign(o, this.formatBorder('right', b));
                Object.assign(o, this.formatBorder('bottom', b));
                Object.assign(o, this.formatBorder('left', b));
                const ret = { border: o };
                // console.log('Borderfy format ret', ret)
                return needKey ? ret : o;
            }
        }
        static getProperties(str) {
            var regex = /^(\d+px)\s+(\w+)\s+([\w().,%\s]+)$/;
            var match = str.match(regex);
            if (match) {
                return {
                    borderSize: match[1],
                    borderStyle: match[2],
                    borderColor: match[3],
                };
            }
            else {
                return null;
            }
        }
        static formatBorder(direction, { size, unit, borderStyle, borderColor }) {
            const o = {
                color: borderColor || 'auto',
                space: 1,
                style: build.exports.BorderStyle[borderStyle] || build.exports.BorderStyle.NIL,
                size,
            };
            return { [direction]: o };
        }
        static formatBorderStyle(borderStyle) {
            borderStyle = borderStyle && borderStyle.toLocaleUpperCase();
            if (borderStyle === 'SOLID') {
                borderStyle = 'SINGLE';
            }
            else if (!borderStyle || borderStyle === 'NONE') {
                borderStyle = 'NIL';
            }
            return borderStyle;
        }
    }

    class Backgroundfy {
        static format(bgColor, needKey = false) {
            if (!bgColor)
                return;
            const o = {
                type: build.exports.ShadingType.CLEAR,
                fill: Colorfy.format(bgColor),
                color: 'auto',
            };
            return needKey ? { shading: o } : o;
        }
        static handle_bgColor(bgColor, needKey = false) {
            const o = {
                type: build.exports.ShadingType.CLEAR,
                fill: Colorfy.format(bgColor),
                color: 'auto',
            };
            return needKey ? { shading: o } : o;
        }
    }

    class WidthHeightfy {
        static format_width(str, needKey = false) {
            if (!str)
                return;
            const [size] = transSizeUnit(str);
            return needKey ? { width: size } : size;
        }
        static format_height(str, needKey = false) {
            if (!str)
                return;
            const [size] = transSizeUnit(str);
            return needKey ? { height: size * 10 } : size * 10;
        }
    }

    class Indentfy {
        static format(str, needKey = false) {
            if (!str)
                return;
            const [size] = transSizeUnit(str);
            const o = { left: size };
            return needKey ? { indent: o } : o;
        }
    }
    // readonly start?: number | UniversalMeasure;
    // readonly end?: number | UniversalMeasure;
    // readonly left?: number | UniversalMeasure;
    // readonly right?: number | UniversalMeasure;
    // readonly hanging?: number | PositiveUniversalMeasure;
    // readonly firstLine?: number | PositiveUniversalMeasure;

    class FormatStyles {
        static format(styleObj, strategy, info) {
            const obj = {};
            for (let key in styleObj) {
                if (this.strategyMap[key]) {
                    let ret;
                    const strategyKeys = Object.keys(strategy);
                    if (strategyKeys.length > 0 && strategyKeys.includes(key)) {
                        ret = strategy[key](styleObj[key], true);
                    }
                    else {
                        ret = this.strategyMap[key](styleObj[key], true);
                    }
                    if (ret && typeof ret !== undefined) {
                        Object.assign(obj, ret);
                    }
                }
            }
            console.log('xxx Strategy format obj', obj, info);
            return obj;
        }
    }
    FormatStyles.strategyMap = {
        // color: hexColorValue,
        border: Borderfy.format.bind(Borderfy),
        bold: Fontfy.handle_fontWeight.bind(Fontfy),
        'font-size': Fontfy.format.bind(Fontfy),
        'font-weight': Fontfy.handle_fontWeight.bind(Fontfy),
        'text-align': Positionfy.format.bind(Positionfy),
        'text-indent': Indentfy.format.bind(Indentfy),
        background: Backgroundfy.format.bind(Backgroundfy),
        'background-color': Backgroundfy.format.bind(Backgroundfy),
        color: Colorfy.format.bind(Colorfy),
        'background-image': Backgroundfy.format.bind(Backgroundfy),
        width: WidthHeightfy.format_width.bind(WidthHeightfy),
        height: WidthHeightfy.format_height.bind(WidthHeightfy),
    };

    // text runner 的包裹 === Paragraph = runerWraper
    class Paragraphfy {
        static create(info, fillText = false) {
            let style;
            try {
                const strategy = {
                    'background-image': Backgroundfy.format.bind(Backgroundfy),
                };
                const { inlineStyle } = info;
                style = FormatStyles.format(inlineStyle, strategy, info);
                console.log('Paragraphfy try style, info', style, info);
                let textValue = fillText && info.value ? { text: info.value } : {};
                return new build.exports.Paragraph(Object.assign(Object.assign({ style: 'paragraph_style1' }, style), textValue));
            }
            catch (err) {
                console.log('Paragraphfy catch err style', style);
                console.log('Paragraphfy create err, info', err, info);
            }
        }
    }

    class Textfy {
        static create(info) {
            const { mergedStyle } = info;
            const bgImg = mergedStyle['background-image'];
            // 处理文字渐变色
            if (bgImg) {
                mergedStyle.color = mergedStyle['background-image'];
            }
            const strategy = {
                'background-image': Colorfy.format.bind(Colorfy),
            };
            const style = FormatStyles.format(mergedStyle, strategy, info);
            console.log('xxx Textfy style', style, info);
            try {
                const block = info.inline ? {} : { break: 1 };
                const textRun = info.value && info.value.length > 0
                    ? new build.exports.TextRun(Object.assign(Object.assign({ text: info.value }, block), style))
                    : null;
                return textRun;
            }
            catch (err) {
                console.log('Textfy create err', info);
            }
        }
    }

    var _a;
    class ComputedStyle {
        static format(ele, domObj) {
            const computedStyle = this.onComputedStyle(ele);
            domObj.computedStyle = computedStyle;
            // console.log('xxx ele.childStyle', domObj.childStyle)
            if (domObj.childStyle) {
                domObj.mergedStyle = Object.assign({}, domObj.childStyle, computedStyle);
            }
        }
        static onComputedStyle(ele) {
            const o = {};
            for (const attr of this.attrs) {
                const value = getComputedStyle(ele, null).getPropertyValue(attr);
                //   const value = getStyle(ele, attr)
                if (this.attrDefaultValue[attr] &&
                    !this.attrDefaultValue[attr].includes(value) &&
                    value.indexOf("none") < 0) {
                    o[attr] = value;
                }
            }
            // console.log('ComputedStyle o', ele, o)
            return o;
        }
    }
    _a = ComputedStyle;
    ComputedStyle.attrDefaultValue = {
        width: ["auto"],
        height: ["auto"],
        border: ["0px none rgb(255, 0, 0)", "none"],
        color: ["rgb(255, 255, 255)"],
        indent: ["", undefined],
        margin: ["0px"],
        padding: ["0px"],
        position: ["static"],
        top: ["auto"],
        left: ["auto"],
        transform: ["none"],
        "background-color": ["rgb(255, 255, 255)"],
        "line-height": ["normal"],
        "word-wrap": ["normal"],
        "z-index": ["auto", 0],
        "text-align": ["start"],
        "border-radius": ["0px"],
        "font-family": ['"PingFang SC"'],
        "font-weight": ["400"],
        "font-size": ["14px"],
    };
    ComputedStyle.attrs = Object.keys(_a.attrDefaultValue);

    /**
     * 拿到渲染完毕的renderTree信息，转成ast语法树
     */
    class ParseComToJson {
        // 将dom结构转成json
        static format(dom, parentNode = null) {
            let domObj;
            if (dom.nodeType === 1) {
                // 如果是element节点
                domObj = {
                    dom,
                    tag: dom.localName,
                    attributes: {},
                    childNodes: [],
                    children: [],
                    parentNode: parentNode,
                    parentClass: {},
                };
                this.formatAttrs(dom, domObj);
                // console.log("xxxdomObj", domObj);
                let childList = dom.childNodes;
                // console.log('xxx childList', childList)
                if (!Constant.singleTags.includes(domObj.tag)) {
                    for (let i = 0, l = childList.length; i < l; i++) {
                        const childJson = this.format(childList[i], domObj);
                        if (childJson) {
                            domObj.childNodes.push(childJson);
                        }
                    }
                }
                else {
                    domObj.tag = dom.localName;
                    const computedStyle = ComputedStyle.format(dom, domObj);
                    domObj.children.push(childList[0]);
                    domObj.computedStyle = computedStyle;
                    this.mergeParentAttrs(domObj);
                }
            }
            else if (dom.nodeType === 3) {
                // 如果是text节点
                const textValue = dom.textContent.trim();
                let computedStyle;
                if (textValue) {
                    domObj = {
                        dom,
                        type: 'text',
                        value: textValue,
                        computedStyle,
                        parentNode: parentNode,
                        // children: [Creator.Creator(textValue)],
                    };
                    this.mergeParentAttrs(domObj);
                    if (dom.parentNode) {
                        ComputedStyle.format(dom.parentNode, domObj);
                    }
                }
            }
            return domObj;
        }
        // 合并所有父级节点的 style和class
        static mergeParentAttrs(node) {
            const oldNode = node;
            let nodeClass = [];
            let nodeStyle = {};
            while (node && node.parentNode) {
                const attributes = node.parentNode && node.parentNode.attributes;
                const classList = attributes && attributes.class;
                const inlineStyle = node.parentNode && node.parentNode.inlineStyle;
                // todo 条件可能要调整
                if (classList && classList.includes(Constant.WordUIPage)) {
                    break;
                }
                else {
                    node = node.parentNode;
                    if (classList && classList.length > 0) {
                        nodeClass = [...nodeClass, ...classList];
                    }
                    if (inlineStyle) {
                        // todo 待确认 1.父子合并策略是否正确 2.是否有必要单独拿行内样式，直接拿computed样式不是可以
                        // 合并parent的样式，以当前节点样式合并parent样式，当前节点样式优先
                        nodeStyle = Object.assign({}, inlineStyle, nodeStyle);
                    }
                }
            }
            oldNode.childClass = nodeClass;
            oldNode.childStyle = nodeStyle;
            node.children = [...node.children, oldNode];
            // console.log("xxx ele INode", node);
        }
        // 格式化节点的所有属性 style和class
        static formatAttrs(node, domObj) {
            let attlist = node.attributes;
            for (let i = 0, l = attlist.length; i < l; i++) {
                // .name获取属性名，.value获取属性值
                const name = attlist[i].name;
                if (name === 'style') {
                    this.fromatStyleAttr(domObj, attlist[i]);
                }
                else {
                    domObj.attributes[attlist[i].name] = attlist[i].value.split(' ');
                }
            }
        }
        // 格式化样式属性
        static fromatStyleAttr(domObj, attr) {
            const o = {};
            const attrs = attr.value.split(';').filter((item) => item.trim().length > 0);
            attrs.forEach((attr) => {
                let [name, value] = attr.split(':');
                o[name.trim()] = value.trim();
            });
            domObj.inlineStyle = o;
        }
    }

    class Tablefy {
        static create(infos) {
            console.log('Tablefy infos', infos);
            const table = this.parseTable(infos);
            console.log('Tablefy create table ', table);
            return table;
        }
        static parseTable(infos) {
            const { dom } = infos;
            const headerTrs = dom.querySelectorAll(`.${Constant.WordUiTableModule} .${Constant.TableInnerWraper} .${Constant.TableHeaderWraper} ${Constant.TableTheadTagName} ${Constant.TableTrTagName}`);
            const bodyTrs = dom.querySelectorAll(`.${Constant.WordUiTableModule} .${Constant.TableInnerWraper} .${Constant.TableBodyWrapper} ${Constant.TableTBodyTagName} ${Constant.TableTrTagName}`);
            // console.log(' Tablefy headerRows', headerTrs)
            // console.log(' Tablefy bodyRows', bodyTrs)
            const headerRows = this.createTr(headerTrs, 'header');
            const bodyRows = this.createTr(bodyTrs, 'body');
            const table = new build.exports.Table({
                rows: [...headerRows, ...bodyRows],
                width: {
                    size: 6535,
                    type: build.exports.WidthType.AUTO,
                },
                margins: {
                    top: build.exports.convertInchesToTwip(0.07),
                    bottom: build.exports.convertInchesToTwip(0.07),
                    right: build.exports.convertInchesToTwip(0.07),
                    left: build.exports.convertInchesToTwip(0.07),
                },
                //   indent: {
                //     size: 1200,
                //     type: WidthType.DXA,
                //   },
            });
            return table;
        }
        static createTr(trs, type) {
            const rowWraper = [];
            const rowOptions = {
                cantSplit: true,
                tableHeader: true,
                height: { value: 200, rule: build.exports.HeightRule.AUTO },
            };
            let columnWidth = 0;
            for (let i = 0; i < trs.length; i++) {
                const row = new build.exports.TableRow(Object.assign({ children: [] }, rowOptions));
                const tr = trs[i];
                const cells = tr.querySelectorAll(`.${Constant.TableCell} .${Constant.TableInnerCell}`);
                if (type === 'header' && i === 0) {
                    const columnNum = cells.length;
                    columnWidth = Math.floor(Constant.mainSize().width / columnNum);
                }
                for (let j = 0; j < cells.length; j++) {
                    const td = cells[j];
                    const cell = this.createCell(td, columnWidth);
                    row.addChildElement(cell);
                }
                rowWraper.push(row);
                //   table.addChildElement(row)
            }
            return rowWraper;
        }
        static createCell(td, columnWidth) {
            const domObj = ParseComToJson.format(td);
            console.log('createCell domObj', domObj);
            const { children } = domObj;
            const cellWraper = [];
            const strategy = {
            // 'background-image': Backgroundfy.format.bind(Backgroundfy),
            };
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                child.inlineStyle = child.mergedStyle;
                const style = FormatStyles.format(child.mergedStyle, strategy, domObj);
                const text = new build.exports.TextRun(Object.assign({ text: child.value }, style));
                cellWraper.push(new build.exports.Paragraph({
                    children: [text],
                    alignment: build.exports.AlignmentType.CENTER,
                }));
            }
            let shading;
            // if (cellMergedStyle['background-color']) {
            //   shading = Backgroundfy.format(
            //     cellMergedStyle['background-color'],
            //   ) as IShadingAttributesProperties
            //   console.log('Tablefy shading', shading)
            // }
            return new build.exports.TableCell({
                verticalAlign: build.exports.VerticalAlign.CENTER,
                children: cellWraper,
                shading,
                // width: { size: columnWidth, type: WidthType.PERCENTAGE },
                //   shading: {
                //     type: ShadingType.CLEAR,
                //     fill: 'ff0000',
                //     color: 'auto',
                //   },
            });
        }
    }

    class Creator {
        static createNode(infos) {
            return __awaiter$1(this, void 0, void 0, function* () {
                const { selfInfo } = infos;
                const { comType, dom } = selfInfo;
                // text run 的包裹 === Paragraph = runWraper
                const childInfo = ParseComToJson.format.bind(ParseComToJson)(dom);
                infos.childInfo = childInfo;
                let runWraper = Paragraphfy.create(childInfo);
                console.log('Creator infos', infos);
                if (comType === ComponentType.AREA_IMG) {
                    const imgRun = yield Imagefy.create(selfInfo);
                    runWraper.addChildElement(imgRun);
                }
                else if (comType === ComponentType.IMG) ;
                else if (comType === ComponentType.ECHART) {
                    const imgRun = yield Imagefy.create(selfInfo);
                    runWraper.addChildElement(imgRun);
                }
                else if (comType === ComponentType.TABLE) {
                    return Tablefy.create(selfInfo);
                }
                else {
                    const { children } = childInfo;
                    this.createRuner({ runWraper, runSource: children });
                }
                return runWraper;
            });
        }
        // 创建run  textRun/tabRun/ImageRun
        static createRuner({ runWraper, runSource }) {
            return __awaiter$1(this, void 0, void 0, function* () {
                if (!runSource || !runSource.length)
                    return null;
                let index = 0;
                const len = runSource.length;
                while (index < len) {
                    const item = runSource[index++];
                    const type = item.type;
                    // console.log('Creator type', type, item)
                    if (Object.keys(this.inlineNodeMap).includes(type)) {
                        if (Constant.singleRowTags.includes(type)) {
                            item.inline = false;
                        }
                        else {
                            item.inline = true;
                        }
                        const ret = yield this.inlineNodeMap[type](item);
                        runWraper.addChildElement(ret);
                    }
                }
            });
        }
    }
    Creator.inlineNodeMap = {
        img: Imagefy.create.bind(Imagefy),
        text: Textfy.create.bind(Textfy),
        br: Textfy.create.bind(Textfy),
    };

    class WrodFactory {
        constructor(id) {
            this.sections = defaultSections;
            this.entryId = id;
        }
        createComsNode() {
            return __awaiter$1(this, void 0, void 0, function* () {
                const outerEle = document.querySelector(`#${this.entryId}`);
                const comsMap = ParseHtml.format(outerEle);
                console.log('this.comsMap', comsMap);
                const values = comsMap.values();
                for (const value of values) {
                    const paragraphWraper = yield Creator.createNode(value);
                    this.sections[0].children.push(paragraphWraper);
                    console.log('xxx sectionChildren', paragraphWraper);
                }
                return this.sections;
            });
        }
    }
    const exportWrod = ({ id, filename, config }) => __awaiter$1(void 0, void 0, void 0, function* () {
        try {
            if (config && typeof config !== undefined) {
                Constant.setConfigClass(config);
            }
            const wordInstance = new WrodFactory(id);
            const option = yield wordInstance.createComsNode();
            console.log('exportWrod option', option);
            yield optionToFile({ sections: option, styles: defaultStyle }, filename);
        }
        catch (err) {
            console.error('生成失败：' + err.message);
        }
    });

    const paragraph_demo1 = () => {
        return {
            styles: {
                characterStyles: [
                    {
                        id: 'myRedStyle',
                        name: 'My Wonky Style',
                        basedOn: 'Normal',
                        run: {
                            color: '990000',
                            italics: true,
                        },
                    },
                    {
                        id: 'strong',
                        name: 'Strong',
                        basedOn: 'Normal',
                        run: {
                            bold: true,
                        },
                    },
                ],
            },
            sections: [
                {
                    properties: {},
                    children: [
                        new build.exports.Paragraph({
                            frame: {
                                position: {
                                    x: 1000,
                                    y: 3000,
                                },
                                width: 8000,
                                height: 3000,
                                anchor: {
                                    horizontal: build.exports.FrameAnchorType.MARGIN,
                                    vertical: build.exports.FrameAnchorType.MARGIN,
                                },
                                alignment: {
                                    x: build.exports.HorizontalPositionAlign.CENTER,
                                    y: build.exports.VerticalPositionAlign.CENTER,
                                },
                            },
                            widowControl: true,
                            shading: {
                                type: build.exports.ShadingType.NIL,
                                color: '00FFFF',
                                fill: '#F79D05',
                            },
                            border: {
                                top: {
                                    color: '#FFFFFF',
                                    space: 2000,
                                    style: build.exports.BorderStyle.INSET,
                                    size: 6,
                                },
                                right: {
                                    color: '#FFC0CB',
                                    space: 100,
                                    style: build.exports.BorderStyle.SINGLE,
                                    size: 6,
                                },
                                bottom: {
                                    color: '#8B008B',
                                    space: 1,
                                    style: build.exports.BorderStyle.SINGLE,
                                    size: 26,
                                },
                                left: {
                                    color: '#0000FF',
                                    space: 1,
                                    style: build.exports.BorderStyle.SINGLE,
                                    size: 6,
                                },
                            },
                            alignment: build.exports.AlignmentType.CENTER,
                            children: [
                                new build.exports.TextRun({
                                    text: '纯债加点料',
                                    bold: true,
                                    size: 30,
                                    color: '#ffffff',
                                    position: '50cm',
                                }),
                            ],
                        }),
                        new build.exports.Paragraph({
                            shading: {
                                type: build.exports.ShadingType.NIL,
                                color: '00FFFF',
                                fill: '#F79D05',
                            },
                            spacing: {
                                before: 1200,
                                after: 500,
                            },
                            alignment: build.exports.AlignmentType.CENTER,
                            children: [
                                new build.exports.TextRun({
                                    text: '债基',
                                    bold: true,
                                    size: 40,
                                    color: 'ff0000',
                                }),
                                new build.exports.TextRun({
                                    text: '投资新思路',
                                    bold: true,
                                    size: 40,
                                    color: '#ff0000',
                                }),
                                new build.exports.TextRun({
                                    children: [new build.exports.Tab(), '投资新思路22'],
                                    bold: true,
                                }),
                                new build.exports.TextRun({
                                    text: '333',
                                    bold: true,
                                    size: 40,
                                }),
                            ],
                        }),
                    ],
                },
            ],
        };
    };

    const exportDemo = () => __awaiter$1(void 0, void 0, void 0, function* () {
        const paragraph1 = paragraph_demo1();
        // const paragraph1 = testAttr()
        console.log('xxx paragraph_demo1', paragraph1);
        yield optionToFile(paragraph1);
    });

    exports.exportDemo = exportDemo;
    exports.exportWrod = exportWrod;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
//# sourceMappingURL=nb-html2-word.global.js.map
