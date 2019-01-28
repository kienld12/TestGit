var Base64 = /** @class */ (function () {
    function Base64() {
        this.utfLibName = "utf";
    }
    Base64.encode = function (_dat) {
        if (!_dat) {
            return null;
        }
        return this.encoder(this.unpackUTF8(_dat));
    };
    ;
    Base64.encoder = function (_ary) {
        var b64char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var b64encTable = b64char.split("");
        var md = _ary.length % 3;
        var b64 = "";
        var i = 0, tmp = 0;
        if (md) {
            for (i = 3 - md; i > 0; i--) {
                _ary[_ary.length] = 0;
            }
        }
        for (i = 0; i < _ary.length; i += 3) {
            tmp = (_ary[i] << 16) | (_ary[i + 1] << 8) | _ary[i + 2];
            b64 += b64encTable[(tmp >>> 18) & 0x3f]
                + b64encTable[(tmp >>> 12) & 0x3f]
                + b64encTable[(tmp >>> 6) & 0x3f]
                + b64encTable[tmp & 0x3f];
        }
        if (md) {
            md = 3 - md;
            b64 = b64.substr(0, b64.length - md);
            while (md--) {
                b64 += "=";
            }
        }
        return b64;
    };
    Base64.decode = function (_b64) {
        var i;
        var b64char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var b64decTable = [];
        for (i = 0; i < b64char.length; i++) {
            b64decTable[b64char.charAt(i)] = i;
        }
        if (!_b64) {
            return null;
        }
        var tmp = this.decoder(_b64, b64decTable);
        return this.packUTF8(tmp);
    };
    ;
    Base64.decoder = function (_b64, b64decTable) {
        _b64 = _b64.replace(/[^A-Za-z0-9\+\/]/g, "");
        var md = _b64.length % 4;
        var j, i, tmp;
        var dat = [];
        if (md) {
            for (i = 0; i < 4 - md; i++) {
                _b64 += "A";
            }
        }
        for (j = i = 0; i < _b64.length; i += 4, j += 3) {
            tmp = (b64decTable[_b64.charAt(i)] << 18)
                | (b64decTable[_b64.charAt(i + 1)] << 12)
                | (b64decTable[_b64.charAt(i + 2)] << 6)
                | b64decTable[_b64.charAt(i + 3)];
            dat[j] = tmp >>> 16;
            dat[j + 1] = (tmp >>> 8) & 0xff;
            dat[j + 2] = tmp & 0xff;
        }
        if (md) {
            dat.length -= [0, 0, 2, 1][md];
        }
        return dat;
    };
    ;
    Base64.unpackUTF16 = function (_str) {
        var i, utf16 = [];
        for (i = 0; i < _str.length; i++) {
            utf16[i] = _str.charCodeAt(i);
        }
        return utf16;
    };
    ;
    Base64.packUTF16 = function (_utf16) {
        var i, str = "";
        for (i = 0; i < _utf16.length; i++) {
            str += String.fromCharCode(_utf16[i]);
        }
        return str;
    };
    ;
    Base64.unpackUTF8 = function (_str) {
        return this.toUTF8(this.unpackUTF16(_str));
    };
    ;
    Base64.packUTF8 = function (_utf8) {
        return this.packUTF16(this.toUTF16(_utf8));
    };
    ;
    Base64.toUTF8 = function (_utf16) {
        var utf8 = [];
        var idx = 0;
        var i, j, c;
        for (i = 0; i < _utf16.length; i++) {
            c = _utf16[i];
            if (c <= 0x7f) {
                utf8[idx++] = c;
            }
            else if (c <= 0x7ff) {
                utf8[idx++] = 0xc0 | (c >>> 6);
                utf8[idx++] = 0x80 | (c & 0x3f);
            }
            else if (c <= 0xffff) {
                utf8[idx++] = 0xe0 | (c >>> 12);
                utf8[idx++] = 0x80 | ((c >>> 6) & 0x3f);
                utf8[idx++] = 0x80 | (c & 0x3f);
            }
            else {
                j = 4;
                while (c >> (6 * j)) {
                    j++;
                }
                utf8[idx++] = ((0xff00 >>> j) & 0xff) | (c >>> (6 * --j));
                while (j--) {
                    utf8[idx++] = 0x80 | ((c >>> (6 * j)) & 0x3f);
                }
            }
        }
        return utf8;
    };
    ;
    Base64.toUTF16 = function (_utf8) {
        var utf16 = [];
        var idx = 0;
        var i, s;
        for (i = 0; i < _utf8.length; i++, idx++) {
            if (_utf8[i] <= 0x7f) {
                utf16[idx] = _utf8[i];
            }
            else {
                if ((_utf8[i] >> 5) === 0x6) {
                    utf16[idx] = ((_utf8[i] & 0x1f) << 6)
                        | (_utf8[++i] & 0x3f);
                }
                else if ((_utf8[i] >> 4) === 0xe) {
                    utf16[idx] = ((_utf8[i] & 0xf) << 12)
                        | ((_utf8[++i] & 0x3f) << 6)
                        | (_utf8[++i] & 0x3f);
                }
                else {
                    s = 1;
                    while (_utf8[i] & (0x20 >>> s)) {
                        s++;
                    }
                    utf16[idx] = _utf8[i] & (0x1f >>> s);
                    while (s-- >= 0) {
                        utf16[idx] = (utf16[idx] << 6) ^ (_utf8[++i] & 0x3f);
                    }
                }
            }
        }
        return utf16;
    };
    ;
    return Base64;
}());
export { Base64 };
//# sourceMappingURL=Base64.js.map