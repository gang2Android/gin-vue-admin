(function (e) {
    function t(t) {
        for (var o, n, c = t[0], r = t[1], s = t[2], d = 0, u = []; d < c.length; d++) n = c[d], Object.prototype.hasOwnProperty.call(i, n) && i[n] && u.push(i[n][0]), i[n] = 0;
        for (o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        _ && _(t);
        while (u.length) u.shift()();
        return l.push.apply(l, s || []), a()
    }

    function a() {
        for (var e, t = 0; t < l.length; t++) {
            for (var a = l[t], o = !0, n = 1; n < a.length; n++) {
                var c = a[n];
                0 !== i[c] && (o = !1)
            }
            o && (l.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }

    var o = {}, n = {index: 0}, i = {index: 0}, l = [];

    function c(e) {
        return r.p + "js/" + ({
            "parser-example": "parser-example",
            "tinymce-example": "tinymce-example"
        }[e] || e) + "." + {"parser-example": "c1051310", "tinymce-example": "5a756246"}[e] + ".js"
    }

    function r(t) {
        if (o[t]) return o[t].exports;
        var a = o[t] = {i: t, l: !1, exports: {}};
        return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }

    r.e = function (e) {
        var t = [], a = {"parser-example": 1};
        n[e] ? t.push(n[e]) : 0 !== n[e] && a[e] && t.push(n[e] = new Promise((function (t, a) {
            for (var o = "css/" + ({
                "parser-example": "parser-example",
                "tinymce-example": "tinymce-example"
            }[e] || e) + "." + {
                "parser-example": "69e16e51",
                "tinymce-example": "31d6cfe0"
            }[e] + ".css", i = r.p + o, l = document.getElementsByTagName("link"), c = 0; c < l.length; c++) {
                var s = l[c], d = s.getAttribute("data-href") || s.getAttribute("href");
                if ("stylesheet" === s.rel && (d === o || d === i)) return t()
            }
            var u = document.getElementsByTagName("style");
            for (c = 0; c < u.length; c++) {
                s = u[c], d = s.getAttribute("data-href");
                if (d === o || d === i) return t()
            }
            var _ = document.createElement("link");
            _.rel = "stylesheet", _.type = "text/css", _.onload = t, _.onerror = function (t) {
                var o = t && t.target && t.target.src || i,
                    l = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                l.code = "CSS_CHUNK_LOAD_FAILED", l.request = o, delete n[e], _.parentNode.removeChild(_), a(l)
            }, _.href = i;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(_)
        })).then((function () {
            n[e] = 0
        })));
        var o = i[e];
        if (0 !== o) if (o) t.push(o[2]); else {
            var l = new Promise((function (t, a) {
                o = i[e] = [t, a]
            }));
            t.push(o[2] = l);
            var s, d = document.createElement("script");
            d.charset = "utf-8", d.timeout = 120, r.nc && d.setAttribute("nonce", r.nc), d.src = c(e);
            var u = new Error;
            s = function (t) {
                d.onerror = d.onload = null, clearTimeout(_);
                var a = i[e];
                if (0 !== a) {
                    if (a) {
                        var o = t && ("load" === t.type ? "missing" : t.type), n = t && t.target && t.target.src;
                        u.message = "Loading chunk " + e + " failed.\n(" + o + ": " + n + ")", u.name = "ChunkLoadError", u.type = o, u.request = n, a[1](u)
                    }
                    i[e] = void 0
                }
            };
            var _ = setTimeout((function () {
                s({type: "timeout", target: d})
            }), 12e4);
            d.onerror = d.onload = s, document.head.appendChild(d)
        }
        return Promise.all(t)
    }, r.m = e, r.c = o, r.d = function (e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, r.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(a, o, function (t) {
            return e[t]
        }.bind(null, o));
        return a
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/form-generator/", r.oe = function (e) {
        throw console.error(e), e
    };
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [], d = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var _ = d;
    l.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("8a8a")
    }, "03ab": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-color",
            use: "icon-color-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-color"><defs><style type="text/css"></style></defs><path d="M747.59340925 691.12859384c11.51396329 0.25305413 22.43746719-0.21087818 40.74171707-1.51832482 29.35428085-2.10878421 35.84933734-2.36183835 46.47761114-0.8856895 24.71495444 3.37405491 41.12129828 21.76265671 32.47528161 47.95376084-85.57447632 258.19957947-442.00123984 249.76444099-628.67084683 50.73735554-153.47733892-159.33976008-153.09775772-414.41833795 0.92786545-573.42069196 159.71934128-162.67163983 424.03439521-166.59397897 565.78689185 0.63263534 80.38686649 94.81095318 108.34934958 169.16669549 89.11723508 230.57450162-15.01454608 47.99593598-50.61082928 77.68762207-119.77896259 114.63352789-4.89237973 2.65706845-29.35428085 15.52065436-35.84933652 19.02123633-46.94154346 25.30541465-63.51659033 41.20565021-62.20914449 58.45550757 2.95229856 39.13904114 24.16667102 52.7196135 70.98168823 53.81618115z m44.41100207 50.10472101c-19.82257471 1.43397372-32.05352527 1.940082-45.63409763 1.6448519-70.34905207-1.60267593-115.98314969-30.91478165-121.38163769-101.64341492-3.45840683-46.05585397 24.7571304-73.13264758 89.24376132-107.96976837 6.7902866-3.66928501 31.37871396-16.57504688 36.06021551-19.06341229 57.69634516-30.83042972 85.15271997-53.73183005 94.76877722-84.47790866 12.77923398-40.78389304-9.10994898-98.94417051-79.24812286-181.6507002-121.17075953-142.97559219-350.14258521-139.60153647-489.2380134 2.06660824-134.49827774 138.84237405-134.79350784 362.12048163-0.42175717 501.637667 158.53842169 168.99799328 451.9968783 181.18676788 534.57688175-11.80919339-4.68150156 0.2952301-10.71262573 0.67481131-18.72600705 1.26527069z" p-id="2509" /><path d="M346.03865637 637.18588562a78.82636652 78.82636652 0 0 0 78.32025825-79.29029883c0-43.69401562-35.005823-79.29029883-78.32025825-79.29029882a78.82636652 78.82636652 0 0 0-78.36243338 79.29029882c0 43.69401562 35.005823 79.29029883 78.36243338 79.29029883z m0-51.7495729a27.07679361 27.07679361 0 0 1-26.5706845-27.54072593c0-15.30977536 11.97789643-27.54072593 26.5706845-27.54072592 14.55061295 0 26.57068533 12.23095057 26.57068533 27.54072592a27.07679361 27.07679361 0 0 1-26.57068533 27.54072593zM475.7289063 807.11174353a78.82636652 78.82636652 0 0 0 78.3624334-79.29029882c0-43.69401562-34.96364785-79.29029883-78.32025825-79.29029883a78.82636652 78.82636652 0 0 0-78.32025742 79.29029883c0 43.69401562 34.96364785 79.29029883 78.32025742 79.29029882z m0-51.74957208a27.07679361 27.07679361 0 0 1-26.57068532-27.54072674c0-15.30977536 12.06224753-27.54072593 26.57068532-27.54072593 14.59278892 0 26.57068533 12.23095057 26.57068453 27.54072593a27.07679361 27.07679361 0 0 1-26.57068453 27.54072674zM601.24376214 377.21492718a78.82636652 78.82636652 0 0 0 78.32025742-79.29029883c0-43.69401562-34.96364785-79.29029883-78.32025742-79.29029882a78.82636652 78.82636652 0 0 0-78.32025823 79.29029883c0 43.69401562 34.96364785 79.29029883 78.32025824 79.29029883z m1e-8-51.74957208a27.07679361 27.07679361 0 0 1-26.57068534-27.54072675c0-15.30977536 11.97789643-27.54072593 26.57068534-27.54072591 14.55061295 0 26.57068533 12.23095057 26.57068451 27.54072592a27.07679361 27.07679361 0 0 1-26.57068451 27.54072674zM378.80916809 433.85687983a78.82636652 78.82636652 0 0 0 78.32025824-79.29029883c0-43.69401562-34.96364785-79.29029883-78.32025824-79.29029802a78.82636652 78.82636652 0 0 0-78.32025742 79.29029802c0 43.69401562 34.96364785 79.29029883 78.32025742 79.29029883z m0-51.74957209a27.07679361 27.07679361 0 0 1-26.57068451-27.54072674c0-15.30977536 11.97789643-27.54072593 26.57068451-27.54072593 14.55061295 0 26.57068533 12.23095057 26.57068533 27.54072593a27.07679361 27.07679361 0 0 1-26.57068533 27.54072674z" p-id="2510" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "0498": function (e, t, a) {
    }, "064a": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-select",
            use: "icon-select-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-select"><defs><style type="text/css"></style></defs><path d="M62 511.97954521C62 263.86590869 263.90681826 62 511.97954521 62s449.97954521 201.825 449.97954521 449.97954521c0 248.19545479-201.90681826 449.97954521-449.97954521 449.97954521C263.90681826 962 62 760.175 62 511.97954521M901.98636348 511.97954521c0-215.24318174-175.00909131-390.41590869-390.00681827-390.41590869-215.03863652 0-389.96590869 175.17272695-389.96590868 390.41590869 0 215.28409131 175.00909131 390.45681826 389.96590868 390.45681826C727.01818174 902.47727305 901.98636348 727.30454521 901.98636348 511.97954521M264.17272695 430.28409131c0-5.76818174 2.12727305-11.51590869 6.64772696-15.87272696 8.71363652-8.75454521 22.88863652-8.75454521 31.725 0l209.4340913 208.22727305L721.45454521 414.53409131c8.75454521-8.71363652 22.97045479-8.71363652 31.90909132 0 8.71363652 8.75454521 8.71363652 22.88863652 0 31.60227304L511.97954521 685.74090869 270.71818174 446.01363653C266.27954521 441.77954521 264.17272695 436.05227305 264.17272695 430.28409131" p-id="805" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "0f88": function (e, t, a) {
        "use strict";
        a.r(t), t["default"] = {
            "list-type": function (e, t, a) {
                var o = [], n = t.__config__;
                return "picture-card" === t["list-type"] ? o.push(e("i", {class: "el-icon-plus"})) : o.push(e("el-button", {
                    attrs: {
                        size: "small",
                        type: "primary",
                        icon: "el-icon-upload"
                    }
                }, [n.buttonText])), n.showTip && o.push(e("div", {
                    slot: "tip",
                    class: "el-upload__tip"
                }, ["只能上传不超过 ", n.fileSize, n.sizeUnit, " 的", t.accept, "文件"])), o
            }
        }
    }, "128d": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-textarea",
            use: "icon-textarea-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-textarea"><defs><style type="text/css"></style></defs><path d="M896 160H128c-35.2 0-64 28.8-64 64v576c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V224c0-35.2-28.8-64-64-64z m0 608c0 16-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V256c0-16 12.8-32 32-32h704c19.2 0 32 12.8 32 32v512z" p-id="2985" /><path d="M224 288c-19.2 0-32 12.8-32 32v256c0 16 12.8 32 32 32s32-12.8 32-32V320c0-16-12.8-32-32-32z m608 480c19.2 0 32-12.8 32-32V608L704 768h128z" p-id="2986" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "167d": function (e, t, a) {
        "use strict";
        a.r(t), t["default"] = {
            prepend: function (e, t, a) {
                return e("template", {slot: "prepend"}, [t.__slot__[a]])
            }, append: function (e, t, a) {
                return e("template", {slot: "append"}, [t.__slot__[a]])
            }
        }
    }, "1fce": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-number",
            use: "icon-number-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-number"><defs><style type="text/css"></style></defs><path d="M279.272727 791.272727h512a46.545455 46.545455 0 0 1 0 93.090909H279.272727a46.545455 46.545455 0 0 1 0-93.090909z m33.838546-617.984V651.636364H193.722182V395.170909c0-37.003636-0.884364-59.298909-2.653091-66.746182a24.948364 24.948364 0 0 0-14.615273-16.989091c-8.005818-3.863273-25.786182-5.771636-53.341091-5.771636h-11.822545v-55.854545c57.716364-12.381091 101.562182-37.888 131.490909-76.520728h70.283636z m303.709091 396.8V651.636364H354.164364v-68.235637c77.777455-127.255273 124.043636-206.010182 138.705454-236.218182 14.661818-30.254545 22.016-53.853091 22.016-70.74909 0-13.032727-2.234182-22.714182-6.656-29.137455-4.421818-6.376727-11.170909-9.588364-20.247273-9.588364a22.248727 22.248727 0 0 0-20.200727 10.612364c-4.468364 7.121455-6.656 21.178182-6.656 42.263273v45.521454H354.164364v-17.454545c0-26.763636 1.396364-47.941818 4.142545-63.348364 2.746182-15.499636 9.541818-30.72 20.386909-45.661091 10.798545-14.987636 24.901818-26.298182 42.216727-33.978182 17.361455-7.68 38.167273-11.543273 62.37091-11.543272 47.476364 0 83.316364 11.776 107.706181 35.328 24.296727 23.552 36.445091 53.341091 36.445091 89.367272 0 27.368727-6.842182 56.32-20.48 86.853819-13.730909 30.533818-54.039273 95.325091-121.018182 194.420363h130.885819z m270.615272-189.393454c18.152727 6.097455 31.650909 16.104727 40.494546 29.975272 8.843636 13.917091 13.312 46.452364 13.312 97.652364 0 38.027636-4.328727 67.490909-13.032727 88.529455-8.657455 20.945455-23.598545 36.910545-44.869819 47.848727-21.271273 10.938182-48.593455 16.384-81.873454 16.384-37.794909 0-67.490909-6.330182-89.088-19.083636-21.550545-12.660364-35.746909-28.253091-42.542546-46.638546-6.795636-18.432-10.193455-50.362182-10.193454-95.883636v-37.841455h119.389091v77.730909c0 20.666182 1.210182 33.838545 3.723636 39.424 2.420364 5.585455 7.912727 8.424727 16.337455 8.424728 9.309091 0 15.36-3.537455 18.338909-10.612364 2.932364-7.121455 4.421818-25.6 4.421818-55.575273v-33.047273c0-18.338909-2.048-31.744-6.190546-40.215272a30.72 30.72 0 0 0-18.338909-16.709818c-8.052364-2.653091-23.738182-4.189091-46.964363-4.561455V357.050182c28.392727 0 45.893818-1.070545 52.596363-3.258182a22.946909 22.946909 0 0 0 14.475637-14.149818c2.932364-7.307636 4.421818-18.711273 4.421818-34.257455v-26.624c0-16.756364-1.722182-27.741091-5.12-33.047272-3.490909-5.352727-8.843636-8.005818-16.151273-8.005819-8.285091 0-13.963636 2.792727-16.989091 8.378182-3.025455 5.632-4.561455 17.640727-4.561454 35.933091v39.284364h-119.389091v-40.773818c0-45.661091 10.472727-76.567273 31.325091-92.625455 20.898909-16.058182 54.085818-24.064 99.607272-24.064 56.878545 0 95.511273 11.170909 115.805091 33.373091 20.293818 22.248727 30.394182 53.201455 30.394182 92.765091 0 26.810182-3.630545 46.173091-10.891636 58.088727-7.307636 11.915636-20.107636 22.807273-38.446546 32.628364z" p-id="2868" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "235f": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-date",
            use: "icon-date-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-date"><defs><style type="text/css"></style></defs><path d="M479.85714249 608.42857168h64.28571502c19.28571417 0 32.14285751-12.85714249 32.14285664-32.14285751s-12.85714249-32.14285751-32.14285664-32.14285664h-64.28571504c-19.28571417 0-32.14285751 12.85714249-32.14285664 32.14285662s12.85714249 32.14285751 32.14285664 32.14285753z m-2e-8 122.14285665h64.28571504c19.28571417 0 32.14285751-12.85714249 32.14285664-32.14285665s-12.85714249-32.14285751-32.14285664-32.14285751h-64.28571504c-19.28571417 0-32.14285751 12.85714249-32.14285664 32.14285751s12.85714249 32.14285751 32.14285664 32.14285664z m353.57142921-559.28571416h-128.57142921v-32.14285664c0-19.28571417-12.85714249-32.14285751-32.14285664-32.14285753s-32.14285751 12.85714249-32.14285751 32.14285753v32.14285664h-257.14285665v-32.14285664c0-19.28571417-12.85714249-32.14285751-32.14285752-32.14285753s-32.14285751 12.85714249-32.14285664 32.14285753v32.14285664h-128.57142919c-70.71428585 0-128.57142832 57.85714249-128.57142832 122.14285751v501.42857081c0 70.71428585 57.85714249 128.57142832 128.57142832 122.14285751h642.85714335c70.71428585 0 128.57142832-57.85714249 128.57142833-122.14285751v-501.42857081c0-70.71428585-57.85714249-122.14285753-128.57142833-122.14285751z m64.28571415 623.57142832c0 32.14285751-32.14285751 64.28571415-64.28571416 64.28571504h-642.85714335c-32.14285751 0-64.28571415-25.71428583-64.28571417-64.28571504v-372.85714249h771.42857168v372.85714249z m0-437.14285664h-771.42857168v-64.28571417c0-32.14285751 32.14285751-64.28571415 64.28571417-64.28571415h128.57142919v32.14285664c0 19.28571417 12.85714249 32.14285751 32.14285664 32.14285751s32.14285751-12.85714249 32.14285753-32.14285751v-32.14285664h257.14285665v32.14285664c0 19.28571417 12.85714249 32.14285751 32.1428575 32.14285751s32.14285751-12.85714249 32.14285664-32.14285751v-32.14285664h128.57142921c32.14285751 0 64.28571415 25.71428583 64.28571415 64.28571415v64.28571417z m-610.71428583 372.85714247h64.28571415c19.28571417 0 32.14285751-12.85714249 32.14285753-32.14285664s-12.85714249-32.14285751-32.14285753-32.14285751h-64.28571415c-19.28571417 0-32.14285751 12.85714249-32.14285751 32.14285751s12.85714249 32.14285751 32.14285751 32.14285665z m385.71428583-122.14285664h64.28571417c19.28571417 0 32.14285751-12.85714249 32.14285751-32.14285751s-12.85714249-32.14285751-32.14285751-32.14285664h-64.28571415c-19.28571417 0-32.14285751 12.85714249-32.14285753 32.14285664s12.85714249 32.14285751 32.14285753 32.14285751z m-385.71428583 0h64.28571415c19.28571417 0 32.14285751-12.85714249 32.14285753-32.14285751s-12.85714249-32.14285751-32.14285753-32.14285664h-64.28571415c-19.28571417 0-32.14285751 12.85714249-32.14285751 32.14285664s12.85714249 32.14285751 32.14285751 32.14285751z m385.71428583 122.14285665h64.28571417c19.28571417 0 32.14285751-12.85714249 32.14285751-32.14285665s-12.85714249-32.14285751-32.14285751-32.14285751h-64.28571415c-19.28571417 0-32.14285751 12.85714249-32.14285753 32.14285751s12.85714249 32.14285751 32.14285753 32.14285665z" p-id="1069" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, 2384: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-switch",
            use: "icon-switch-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-switch"><defs><style type="text/css"></style></defs><path d="M692 792H332c-150 0-270-120-270-270s120-270 270-270h360c150 0 270 120 270 270 0 147-120 270-270 270zM332 312c-117 0-210 93-210 210s93 210 210 210h360c117 0 210-93 210-210s-93-210-210-210H332z" p-id="1111" /><path d="M341 522m-150 0a150 150 0 1 0 300 0 150 150 0 1 0-300 0Z" p-id="1112" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "2a3d": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-password",
            use: "icon-password-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-password"><defs><style type="text/css"></style></defs><path d="M868.593046 403.832442c-30.081109-28.844955-70.037123-44.753273-112.624057-44.753273L265.949606 359.079168c-42.554188 0-82.510202 15.908318-112.469538 44.690852-30.236652 28.782533-46.857191 67.222007-46.857191 108.198258l0 294.079782c0 40.977273 16.619516 79.414701 46.702672 108.136859 29.959336 28.844955 70.069869 44.814672 112.624057 44.814672l490.019383 0c42.585911 0 82.696444-15.969717 112.624057-44.814672 30.082132-28.844955 46.579875-67.222007 46.579875-108.136859L915.172921 511.968278C915.171897 471.053426 898.675178 432.677397 868.593046 403.832442zM841.821309 806.049083c0 22.098297-8.882298 42.772152-25.099654 58.306964-16.154935 15.661701-37.81935 24.203238-60.752666 24.203238L265.949606 888.559285c-22.934339 0-44.567032-8.54256-60.877509-24.264637-16.186657-15.474436-25.067932-36.148291-25.067932-58.246589L180.004165 511.968278c0-22.035876 8.881274-42.772152 25.192775-58.307987 16.186657-15.536858 37.81935-24.139793 60.753689-24.139793l490.019383 0c22.933315 0 44.597731 8.602935 60.752666 24.139793 16.21838 15.535835 25.099654 36.272112 25.099654 58.307987L841.822332 806.049083zM510.974136 135.440715c114.914216 0 208.318536 89.75214 208.318536 200.055338l73.350588 0c0-149.113109-126.366036-270.496667-281.669124-270.496667-155.333788 0-281.699824 121.383558-281.699824 270.496667l73.350588 0C302.623877 225.193879 396.059919 135.440715 510.974136 135.440715zM474.299865 747.244792l73.350588 0L547.650453 629.576859l-73.350588 0L474.299865 747.244792z" p-id="2751" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "2cfa": function (e, t, a) {
        "use strict";
        a.r(t);
        a("9719");
        t["default"] = {
            options: function (e, t, a) {
                var o = [];
                return t.__slot__.options.forEach((function (a) {
                    "button" === t.__config__.optionType ? o.push(e("el-radio-button", {attrs: {label: a.value}}, [a.label])) : o.push(e("el-radio", {
                        attrs: {
                            label: a.value,
                            border: t.border
                        }
                    }, [a.label]))
                })), o
            }
        }
    }, "2dba": function (e, t, a) {
        "use strict";
        a("b62d")
    }, "31c6": function (e, t, a) {
        "use strict";
        var o, n = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("textarea", {staticStyle: {visibility: "hidden"}, attrs: {id: e.tinymceId}})
        }, i = [], l = (a("6390"), a("186d"), a("1f5d"), a("c88b")), c = a("5f72"), r = a.n(c), s = a("4771");

        function d(e) {
            var t = s["a"].tinymceUrl;
            if (o) e(o); else {
                var a = r.a.Loading.service({
                    fullscreen: !0,
                    lock: !0,
                    text: "富文本资源加载中...",
                    spinner: "el-icon-loading",
                    background: "rgba(255, 255, 255, 0.5)"
                });
                Object(l["a"])(t, (function () {
                    a.close(), o = tinymce, e(o)
                }))
            }
        }

        var u = ["advlist anchor autolink autosave code codesample directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount"],
            _ = ["code searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent blockquote removeformat subscript superscript codesample hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],
            p = a("f22b"), f = 1, m = {
                props: {
                    id: {
                        type: String, default: function () {
                            return 1e4 === f && (f = 1), "tinymce".concat(+new Date).concat(f++)
                        }
                    }, value: {default: ""}
                }, data: function () {
                    return {tinymceId: this.id}
                }, mounted: function () {
                    var e = this;
                    d((function (t) {
                        a("afc4");
                        var o = {
                            selector: "#".concat(e.tinymceId),
                            language: "zh_CN",
                            menubar: "file edit insert view format table",
                            plugins: u,
                            toolbar: _,
                            height: 300,
                            branding: !1,
                            object_resizing: !1,
                            end_container_on_empty_block: !0,
                            powerpaste_word_import: "clean",
                            code_dialog_height: 450,
                            code_dialog_width: 1e3,
                            advlist_bullet_styles: "square",
                            advlist_number_styles: "default",
                            default_link_target: "_blank",
                            link_title: !1,
                            nonbreaking_force_tab: !0
                        };
                        o = Object.assign(o, e.$attrs), o.init_instance_callback = function (t) {
                            e.value && t.setContent(e.value), e.vModel(t)
                        }, t.init(o)
                    }))
                }, destroyed: function () {
                    this.destroyTinymce()
                }, methods: {
                    vModel: function (e) {
                        var t = this, a = Object(p["debounce"])(250, e.setContent);
                        this.$watch("value", (function (t, o) {
                            e && t !== o && t !== e.getContent() && ("string" !== typeof t && (t = t.toString()), a.call(e, t))
                        })), e.on("change keyup undo redo", (function () {
                            t.$emit("input", e.getContent())
                        }))
                    }, destroyTinymce: function () {
                        if (window.tinymce) {
                            var e = window.tinymce.get(this.tinymceId);
                            e && e.destroy()
                        }
                    }
                }
            }, v = m, h = a("5d22"), b = Object(h["a"])(v, n, i, !1, null, null, null);
        t["a"] = b.exports
    }, "3add": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-time",
            use: "icon-time-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-time"><defs><style type="text/css"></style></defs><path d="M520 559h204c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H488c-17.673 0-32-14.327-32-32 0-0.167 0.001-0.334 0.004-0.5a32.65 32.65 0 0 1-0.004-0.5V277c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v282z m-8 401C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-64c212.077 0 384-171.923 384-384S724.077 128 512 128 128 299.923 128 512s171.923 384 384 384z" p-id="1009" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "3d38": function (e, t, a) {
        "use strict";
        a("0498")
    }, 4758: function (e, t, a) {
        "use strict";
        var o = a("6abc"), n = a("58c8"), i = a("bbc6"),
            l = (a("186d"), a("9208"), a("9719"), a("cd57"), a("aa0d"), a("12b5"), a("58af"), a("1f5d"), a("3c75"), a("6390"), a("ed08")),
            c = {}, r = a("9977"), s = r.keys() || [];

        function d(e, t) {
            var a = this;
            e.props.value = t, e.on.input = function (e) {
                a.$emit("input", e)
            }
        }

        function u(e, t, a) {
            var o = c[t.__config__.tag];
            o && Object.keys(o).forEach((function (n) {
                var i = o[n];
                t.__slot__ && t.__slot__[n] && a.push(i(e, t, n))
            }))
        }

        function _(e) {
            var t = this;
            ["on", "nativeOn"].forEach((function (a) {
                var o = Object.keys(e[a] || {});
                o.forEach((function (o) {
                    var n = e[a][o];
                    "string" === typeof n && (e[a][o] = function (e) {
                        return t.$emit(n, e)
                    })
                }))
            }))
        }

        function p(e, t) {
            var a = this;
            Object.keys(e).forEach((function (l) {
                var c = e[l];
                "__vModel__" === l ? d.call(a, t, e.__config__.defaultValue) : void 0 !== t[l] ? null === t[l] || t[l] instanceof RegExp || ["boolean", "string", "number", "function"].includes(Object(i["a"])(t[l])) ? t[l] = c : Array.isArray(t[l]) ? t[l] = [].concat(Object(n["a"])(t[l]), Object(n["a"])(c)) : t[l] = Object(o["a"])(Object(o["a"])({}, t[l]), c) : t.attrs[l] = c
            })), f(t)
        }

        function f(e) {
            delete e.attrs.__config__, delete e.attrs.__slot__, delete e.attrs.__methods__
        }

        function m() {
            return {
                class: {},
                attrs: {},
                props: {},
                domProps: {},
                nativeOn: {},
                on: {},
                style: {},
                directives: [],
                scopedSlots: {},
                slot: null,
                key: null,
                ref: null,
                refInFor: !0
            }
        }

        s.forEach((function (e) {
            var t = e.replace(/^\.\/(.*)\.\w+$/, "$1"), a = r(e).default;
            c[t] = a
        })), t["a"] = {
            props: {conf: {type: Object, required: !0}}, render: function (e) {
                var t = m(), a = Object(l["b"])(this.conf), o = this.$slots.default || [];
                return u.call(this, e, a, o), _.call(this, a), p.call(this, a, t), e(this.conf.__config__.tag, t, o)
            }
        }
    }, 4771: function (e, t, a) {
        "use strict";
        a("6390");
        var o = "https://lib.baomitu.com/", n = "/form-generator/";

        function i(e, t, a) {
            return "".concat(o).concat(e, "/").concat(t, "/").concat(a)
        }

        t["a"] = {
            beautifierUrl: i("js-beautify", "1.13.5", "beautifier.min.js"),
            monacoEditorUrl: "".concat(n, "libs/monaco-editor/vs"),
            tinymceUrl: i("tinymce", "5.7.0", "tinymce.min.js")
        }
    }, "47f1": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-table",
            use: "icon-table-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-table"><defs><style type="text/css"></style></defs><path d="M856.187 65.711H167.215c-56.054 0-101.554 45.5-101.554 101.554v688.972c0 56.054 45.5 101.554 101.554 101.554h688.972c56.054 0 101.554-45.5 101.554-101.554V167.265c0-56.054-45.5-101.554-101.554-101.554z m-677.024 51.773H844.24c34.05 0 61.729 27.678 61.729 61.728v183.594H117.434V179.212c0-34.05 27.678-61.728 61.729-61.728z m217.046 297.094H634.66v219.934H396.209V414.578z m-51.773 219.834H117.434V414.578h227.002v219.834z m341.997-219.834H905.97v219.934H686.433V414.578z m157.807 491.44H179.163c-34.05 0-61.73-27.678-61.73-61.728V686.185h227.003v219.833h51.773V686.185H634.66v219.833h51.772V686.185H905.97V844.29c0 34.05-27.679 61.728-61.729 61.728z" p-id="4270" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "4ed4": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-button",
            use: "icon-button-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-button"><defs><style type="text/css"></style></defs><path d="M230.4 307.712c13.824 0 25.088-11.264 25.088-25.088 0-100.352 81.92-182.272 182.272-182.272s182.272 81.408 182.272 182.272c0 13.824 11.264 25.088 25.088 25.088s25.088-11.264 24.576-25.088c0-127.488-103.936-231.936-231.936-231.936S205.824 154.624 205.824 282.624c-0.512 14.336 10.752 25.088 24.576 25.088z m564.736 234.496c-11.264 0-21.504 2.048-31.232 6.144 0-44.544-40.448-81.92-88.064-81.92-14.848 0-28.16 3.584-39.936 10.24-13.824-28.16-44.544-48.128-78.848-48.128-12.288 0-24.576 2.56-35.328 7.68V284.16c0-45.568-37.888-81.92-84.48-81.92s-84.48 36.864-84.48 81.92v348.672l-69.12-112.64c-18.432-28.16-58.368-36.864-91.136-19.968-26.624 14.336-46.592 47.104-30.208 88.064 3.072 8.192 76.8 205.312 171.52 311.296 0 0 28.16 24.576 43.008 58.88 4.096 9.728 13.312 15.36 22.528 15.36 3.072 0 6.656-0.512 9.728-2.048 12.288-5.12 18.432-19.968 12.8-32.256-19.456-44.544-53.76-74.752-53.76-74.752C281.6 768 209.408 573.44 208.384 570.88c-5.12-12.8-2.56-20.992 7.168-26.112 9.216-4.608 21.504-4.608 26.112 2.56l113.152 184.32c4.096 8.704 12.8 14.336 22.528 14.336 13.824 0 25.088-10.752 25.088-25.088V284.16c0-17.92 15.36-32.256 34.816-32.256s34.816 14.336 34.816 32.256v284.16c0 13.824 10.24 25.088 24.576 25.088 13.824 0 25.088-11.264 25.088-25.088v-57.344c0-17.92 15.36-32.768 34.816-32.768 19.968 0 37.376 15.36 37.376 32.768v95.232c0 7.168 3.072 13.312 7.68 17.92 4.608 4.608 10.752 7.168 17.92 7.168 13.824 0 24.576-11.264 24.576-25.088V547.84c0-18.432 13.824-32.256 32.256-32.256 20.48 0 38.912 15.36 38.912 32.256v95.232c0 13.824 11.264 25.088 25.088 25.088s24.576-11.264 25.088-25.088v-18.944c0-18.944 12.8-32.256 30.72-32.256 18.432 0 22.528 18.944 22.528 31.744 0 1.024-11.776 99.84-50.688 173.056-30.72 58.368-45.056 112.128-51.2 146.944-2.56 13.312 6.656 26.112 19.968 28.672 1.536 0 3.072 0.512 4.608 0.512 11.776 0 22.016-8.192 24.064-20.48 5.632-31.232 18.432-79.36 46.08-132.608 43.52-81.92 55.808-186.88 56.32-193.536-0.512-50.688-29.696-83.968-72.704-83.968z" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "51ff": function (e, t, a) {
        var o = {
            "./button.svg": "4ed4",
            "./cascader.svg": "a393",
            "./checkbox.svg": "8963",
            "./color.svg": "03ab",
            "./component.svg": "56d6",
            "./date-range.svg": "e6df",
            "./date.svg": "235f",
            "./input.svg": "81d6",
            "./number.svg": "1fce",
            "./password.svg": "2a3d",
            "./radio.svg": "d8dc",
            "./rate.svg": "6786",
            "./rich-text.svg": "c630",
            "./row.svg": "c95d",
            "./select.svg": "064a",
            "./slider.svg": "eb1c",
            "./switch.svg": "2384",
            "./table.svg": "47f1",
            "./textarea.svg": "128d",
            "./time-range.svg": "861c",
            "./time.svg": "3add",
            "./upload.svg": "9d82"
        };

        function n(e) {
            var t = i(e);
            return a(t)
        }

        function i(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }

        n.keys = function () {
            return Object.keys(o)
        }, n.resolve = i, e.exports = n, n.id = "51ff"
    }, "56d6": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-component",
            use: "icon-component-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-component"><defs><style type="text/css"></style></defs><path d="M826.56 470.016c-32.896 0-64.384 12.288-89.984 35.52l0-104.96c0-62.208-50.496-112.832-112.64-113.088L623.936 287.04 519.552 287.104C541.824 262.72 554.56 230.72 554.56 197.12c0-73.536-59.904-133.44-133.504-133.44-73.472 0-133.376 59.904-133.376 133.44 0 32.896 12.224 64.256 35.52 89.984L175.232 287.104l0 0.576C113.728 288.704 64 338.88 64 400.576l0.32 0 0.32 116.48C60.864 544.896 70.592 577.728 100.8 588.48c12.736 4.608 37.632 7.488 60.864-25.28 12.992-18.368 34.24-29.248 56.64-29.248 38.336 0 69.504 31.104 69.504 69.312 0 38.4-31.168 69.504-69.504 69.504-22.656 0-44.032-11.264-57.344-30.4C138.688 610.112 112.576 615.36 102.464 619.136c-29.824 10.752-39.104 43.776-38.144 67.392l0 160.384L64 846.912C64 909.248 114.752 960 177.216 960l446.272 0c62.4 0 113.152-50.752 113.152-113.152l0-145.024c24.384 22.272 56.384 35.008 89.984 35.008 73.536 0 133.44-59.904 133.44-133.504C960 529.92 900.096 470.016 826.56 470.016zM826.56 672.896c-22.72 0-44.032-11.264-57.344-30.4-22.272-32.384-48.448-27.136-58.56-23.36-29.824 10.752-39.04 43.776-38.08 67.392l0 160.384c0 27.136-22.016 49.152-49.152 49.152L177.216 896.064C150.08 896 128 873.984 128 846.848l0.32 0 0-145.024c24.384 22.272 56.384 35.008 89.984 35.008 73.6 0 133.504-59.904 133.504-133.504 0-73.472-59.904-133.376-133.504-133.376-32.896 0-64.32 12.288-89.984 35.52l0-104.96L128 400.512c0-27.072 22.08-49.152 49.216-49.152L177.216 351.04 334.656 350.72c3.776 0.512 7.616 0.832 11.52 0.832 24.896 0 50.752-10.816 60.032-37.056 4.544-12.736 7.424-37.568-25.344-60.736C362.624 240.768 351.68 219.52 351.68 197.12c0-38.272 31.104-69.44 69.376-69.44 38.336 0 69.504 31.168 69.504 69.44 0 22.72-11.264 44.032-30.528 57.472C427.968 276.736 433.088 302.784 436.8 313.024c10.752 29.888 43.072 39.232 67.392 38.08l119.232 0 0 0.384c27.136 0 49.152 22.08 49.152 49.152l0.256 116.48c-3.776 27.84 6.016 60.736 36.224 71.488 12.736 4.608 37.632 7.488 60.8-25.28 13.056-18.368 34.24-29.248 56.704-29.248C864.832 534.016 896 565.12 896 603.392 896 641.728 864.832 672.896 826.56 672.896z" p-id="3146" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "5d2b": function (e, t, a) {
    }, "5f72": function (e, t) {
        e.exports = ELEMENT
    }, 6389: function (e, t) {
        e.exports = VueRouter
    }, "648e": function (e, t, a) {
    }, "64d8": function (e, t, a) {
    }, 6786: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-rate",
            use: "icon-rate-usage",
            viewBox: "0 0 1069 1024",
            content: '<symbol class="icon" viewBox="0 0 1069 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-rate"><defs><style type="text/css"></style></defs><path d="M633.72929961 378.02038203l9.49872568 18.68789795 20.78025469 2.79745225 206.61592412 27.33248408a11.46496817 11.46496817 0 0 1 6.6095543 19.47324902l-147.2675168 147.35350284-14.89299345 14.89299345 3.8006376 20.68280244 37.84585956 204.89044571a11.46496817 11.46496817 0 0 1-16.4808914 12.2961788L554.68980898 751.84713388l-18.68789794-9.49299345-18.48726123 9.99171915-183.23885392 99.34968163a11.46496817 11.46496817 0 0 1-16.78471347-11.8662416l32.5433127-205.79617881 3.29617793-20.78598692-15.19108243-14.49172002-151.03375839-143.48407587a11.46496817 11.46496817 0 0 1 6.09936328-19.63949062l205.79617881-32.63503185 20.78598691-3.2961788L428.87898125 380.72038203 518.59235674 192.64331182a11.46496817 11.46496817 0 0 1 20.56815264-0.26369385l94.56879023 185.63503183zM496.64840732 85.52038203l-121.75796162 254.98089229L95.76433145 384.76178369A34.3949045 34.3949045 0 0 0 77.46050938 443.66879023l204.87324901 194.66369385-44.16879023 279.1146498a34.3949045 34.3949045 0 0 0 50.36560489 35.61592325l248.4-134.67898038 251.84522285 128.27579591a34.3949045 34.3949045 0 0 0 49.43694287-36.89426777l-51.30573223-277.85350284 199.73120977-199.90891758a34.3949045 34.3949045 0 0 0-19.82866201-58.40827998l-280.11783428-37.03184736L558.32993633 84.71210205a34.3949045 34.3949045 0 0 0-61.68152901 0.80254775z" p-id="1099" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, 6828: function (e, t, a) {
        "use strict";
        a("64d8")
    }, "7f29": function (e, t, a) {
        "use strict";
        a.r(t);
        a("9719");
        t["default"] = {
            options: function (e, t, a) {
                var o = [];
                return t.__slot__.options.forEach((function (t) {
                    o.push(e("el-option", {attrs: {label: t.label, value: t.value, disabled: t.disabled}}))
                })), o
            }
        }
    }, "80e9": function (e, t, a) {
        "use strict";
        a("a31c")
    }, "81d6": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-input",
            use: "icon-input-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-input"><defs><style type="text/css"></style></defs><path d="M896 224H128c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V288c0-35.2-28.8-64-64-64z m0 480c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V320c0-19.2 12.8-32 32-32h704c19.2 0 32 12.8 32 32v384z" p-id="3103" /><path d="M224 352c-19.2 0-32 12.8-32 32v256c0 16 12.8 32 32 32s32-12.8 32-32V384c0-16-12.8-32-32-32z" p-id="3104" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "861c": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-time-range",
            use: "icon-time-range-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-time-range"><defs><style type="text/css"></style></defs><path d="M498.595712 482.290351 345.420077 482.290351l0 57.307194 210.477712 0L555.897789 274.196942l-57.301054 0L498.596735 482.290351zM498.595712 482.290351" p-id="1249" /><path d="M577.685002 644.98478l379.879913 0 0 57.302077L577.685002 702.286858 577.685002 644.98478 577.685002 644.98478zM577.685002 644.98478" p-id="1250" /><path d="M577.685002 773.764795l379.879913 0 0 57.307194L577.685002 831.071989 577.685002 773.764795 577.685002 773.764795zM577.685002 773.764795" p-id="1251" /><path d="M577.685002 902.549927l379.879913 0 0 57.307194L577.685002 959.857121 577.685002 902.549927 577.685002 902.549927zM577.685002 902.549927" p-id="1252" /><path d="M102.523001 382.290823c4.450359 2.615571 9.470699 3.954055 14.530948 3.954055 2.969635 0 5.952572-0.461511 8.836249-1.394766l190.809767-61.886489c15.052834-4.882194 23.297612-21.040199 18.415418-36.08894-4.882194-15.052834-21.040199-23.297612-36.093033-18.415418L175.676092 308.458257c15.994276-26.115797 35.170011-50.537 57.370639-72.743768 73.767074-73.767074 171.845857-114.388237 276.16783-114.388237 104.32095 0 202.39564 40.622186 276.16169 114.388237s114.393353 171.845857 114.393353 276.16783c0 26.427906-2.615571 52.449559-7.709589 77.780481l58.302871 0c4.464685-25.499767 6.708795-51.470255 6.708795-77.780481 0-60.449767-11.845793-119.102608-35.204803-174.336584-22.559808-53.334719-54.850236-101.226472-95.968725-142.349055-41.122583-41.122583-89.017406-73.408917-142.348032-95.968725C628.317169 75.866898 569.659211 64.021106 509.215584 64.021106c-60.448744 0-119.106702 11.845793-174.336584 35.207873-53.334719 22.559808-101.230566 54.846142-142.349055 95.968725-23.980157 23.980157-44.934398 50.278103-62.727647 78.601172l-20.738323-105.655342c-3.043313-15.527648-18.105357-25.642007-33.631982-22.599717-15.527648 3.048429-25.64303 18.105357-22.599717 33.637098l36.102243 183.932126C90.51348 371.153158 95.460142 378.13313 102.523001 382.290823L102.523001 382.290823zM102.523001 382.290823" p-id="1253" /><path d="M126.020158 587.9416 67.768453 587.9416c5.759167 33.679054 15.368012 66.544579 28.789697 98.278327 22.559808 53.333696 54.850236 101.225449 95.971795 142.348032 41.122583 41.122583 89.014336 73.408917 142.349055 95.968725 54.112432 22.88829 111.517863 34.71157 170.668031 35.18229L505.547031 902.395408c-102.94972-0.941442-199.594851-41.445948-272.499277-114.349351C177.545672 732.543975 140.810003 663.275355 126.020158 587.9416L126.020158 587.9416zM126.020158 587.9416" p-id="1254" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, 8963: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-checkbox",
            use: "icon-checkbox-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-checkbox"><defs><style type="text/css"></style></defs><path d="M828.40625 90.125H195.59375C137.375 90.125 90.125 137.375 90.125 195.59375v632.8125c0 58.21875 47.25 105.46875 105.46875 105.46875h632.8125c58.21875 0 105.46875-47.25 105.46875-105.46875V195.59375c0-58.21875-47.25-105.46875-105.46875-105.46875z m52.734375 738.28125c0 29.16-23.57015625 52.734375-52.734375 52.734375H195.59375c-29.109375 0-52.734375-23.574375-52.734375-52.734375V195.59375c0-29.109375 23.625-52.734375 52.734375-52.734375h632.8125c29.16 0 52.734375 23.625 52.734375 52.734375v632.8125z" p-id="903" /><path d="M421.52890625 709.55984375a36.28125 36.28125 0 0 1-27.55265625-12.66890625L205.17453125 476.613125a36.28546875 36.28546875 0 0 1 55.10109375-47.22890625l164.986875 192.4846875 342.16171875-298.48078125a36.2896875 36.2896875 0 0 1 47.70984375 54.68765625L445.3859375 700.6203125a36.3234375 36.3234375 0 0 1-23.85703125 8.93953125z" p-id="904" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, "8a8a": function (e, t, a) {
        "use strict";
        a.r(t);
        a("c9ba"), a("e6f5"), a("5bda"), a("85ea");
        var o, n, i = a("8bbf"), l = a.n(i), c = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", [a("router-view")], 1)
            }, r = [], s = {
                mounted: function () {
                    var e = document.querySelector("#pre-loader");
                    e.style.display = "none", document.body.ondrop = function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }
                }
            }, d = s, u = a("5d22"), _ = Object(u["a"])(d, c, r, !1, null, null, null), p = _.exports,
            f = (a("186d"), a("c447"), a("9208"), a("6389")), m = a.n(f), v = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "container"}, [a("div", {staticClass: "left-board"}, [e._m(0), a("el-scrollbar", {staticClass: "left-scrollbar"}, [a("div", {staticClass: "components-list"}, e._l(e.leftComponents, (function (t, o) {
                    return a("div", {key: o}, [a("div", {staticClass: "components-title"}, [a("svg-icon", {attrs: {"icon-class": "component"}}), e._v(" " + e._s(t.title) + " ")], 1), a("draggable", {
                        staticClass: "components-draggable",
                        attrs: {
                            list: t.list,
                            group: {name: "componentsGroup", pull: "clone", put: !1},
                            clone: e.cloneComponent,
                            draggable: ".components-item",
                            sort: !1
                        },
                        on: {end: e.onEnd}
                    }, e._l(t.list, (function (t, o) {
                        return a("div", {
                            key: o, staticClass: "components-item", on: {
                                click: function (a) {
                                    return e.addComponent(t)
                                }
                            }
                        }, [a("div", {staticClass: "components-body"}, [a("svg-icon", {attrs: {"icon-class": t.__config__.tagIcon}}), e._v(" " + e._s(t.__config__.label) + " ")], 1)])
                    })), 0)], 1)
                })), 0)])], 1), a("div", {staticClass: "center-board"}, [a("div", {staticClass: "action-bar"}, [a("el-button", {
                    attrs: {
                        icon: "el-icon-video-play",
                        type: "text"
                    }, on: {click: e.run}
                }, [e._v(" 运行 ")]), a("el-button", {
                    attrs: {icon: "el-icon-view", type: "text"},
                    on: {click: e.showJson}
                }, [e._v(" 查看json ")]), a("el-button", {
                    attrs: {icon: "el-icon-download", type: "text"},
                    on: {click: e.download}
                }, [e._v(" 导出vue文件 ")]), a("el-button", {
                    staticClass: "copy-btn-main",
                    attrs: {icon: "el-icon-document-copy", type: "text"},
                    on: {click: e.copy}
                }, [e._v(" 复制代码 ")]), a("el-button", {
                    staticClass: "delete-btn",
                    attrs: {icon: "el-icon-delete", type: "text"},
                    on: {click: e.empty}
                }, [e._v(" 清空 ")])], 1), a("el-scrollbar", {staticClass: "center-scrollbar"}, [a("el-row", {
                    staticClass: "center-board-row",
                    attrs: {gutter: e.formConf.gutter}
                }, [a("el-form", {
                    attrs: {
                        size: e.formConf.size,
                        "label-position": e.formConf.labelPosition,
                        disabled: e.formConf.disabled,
                        "label-width": e.formConf.labelWidth + "px"
                    }
                }, [a("draggable", {
                    staticClass: "drawing-board",
                    attrs: {list: e.drawingList, animation: 340, group: "componentsGroup"}
                }, e._l(e.drawingList, (function (t, o) {
                    return a("draggable-item", {
                        key: t.renderKey,
                        attrs: {
                            "drawing-list": e.drawingList,
                            "current-item": t,
                            index: o,
                            "active-id": e.activeId,
                            "form-conf": e.formConf
                        },
                        on: {activeItem: e.activeFormItem, copyItem: e.drawingItemCopy, deleteItem: e.drawingItemDelete}
                    })
                })), 1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.drawingList.length,
                        expression: "!drawingList.length"
                    }], staticClass: "empty-info"
                }, [e._v(" 从左侧拖入或点选组件进行表单设计 ")])], 1)], 1)], 1)], 1), a("right-panel", {
                    attrs: {
                        "active-data": e.activeData,
                        "form-conf": e.formConf,
                        "show-field": !!e.drawingList.length
                    }, on: {"tag-change": e.tagChange, "fetch-data": e.fetchData}
                }), a("form-drawer", {
                    attrs: {
                        visible: e.drawerVisible,
                        "form-data": e.formData,
                        size: "100%",
                        "generate-conf": e.generateConf
                    }, on: {
                        "update:visible": function (t) {
                            e.drawerVisible = t
                        }
                    }
                }), a("json-drawer", {
                    attrs: {
                        size: "60%",
                        visible: e.jsonDrawerVisible,
                        "json-str": JSON.stringify(e.formData)
                    }, on: {
                        "update:visible": function (t) {
                            e.jsonDrawerVisible = t
                        }, refresh: e.refreshJson
                    }
                }), a("code-type-dialog", {
                    attrs: {
                        visible: e.dialogVisible,
                        title: "选择生成类型",
                        "show-file-name": e.showFileName
                    }, on: {
                        "update:visible": function (t) {
                            e.dialogVisible = t
                        }, confirm: e.generate
                    }
                }), a("input", {attrs: {id: "copyNode", type: "hidden"}})], 1)
            }, h = [function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "logo-wrapper",
                    staticStyle: {"z-index": "9999"}
                }, [a("div", {staticClass: "logo"}, [e._v(" GIN-VUE-ADMIN 12表单生成器 依赖"), a("a", {
                    staticClass: "github",
                    attrs: {href: "https://github.com/JakHuang/form-generator", target: "_blank"}
                }, [e._v("【Form Generator】")])])])
            }], b = a("bbc6"), g = a("6abc"),
            w = (a("cd57"), a("aa0d"), a("de23"), a("2236"), a("0f45"), a("f0b3"), a("1264"), a("6390"), a("a92d"), a("15ee"), a("9719"), a("12b5"), a("3335")),
            y = a.n(w), D = a("f22b"), x = a("31bf"), k = a("7094"), C = a.n(k), O = a("4758"), M = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", [a("el-drawer", e._g(e._b({
                    on: {
                        opened: e.onOpen,
                        close: e.onClose
                    }
                }, "el-drawer", e.$attrs, !1), e.$listeners), [a("div", {staticStyle: {height: "100%"}}, [a("el-row", {
                    staticStyle: {
                        height: "100%",
                        overflow: "auto"
                    }
                }, [a("el-col", {staticClass: "left-editor", attrs: {md: 24, lg: 12}}, [a("div", {
                    staticClass: "setting",
                    attrs: {title: "资源引用"},
                    on: {click: e.showResource}
                }, [a("el-badge", {
                    staticClass: "item",
                    attrs: {"is-dot": !!e.resources.length}
                }, [a("i", {staticClass: "el-icon-setting"})])], 1), a("el-tabs", {
                    staticClass: "editor-tabs",
                    attrs: {type: "card"},
                    model: {
                        value: e.activeTab, callback: function (t) {
                            e.activeTab = t
                        }, expression: "activeTab"
                    }
                }, [a("el-tab-pane", {attrs: {name: "html"}}, [a("span", {
                    attrs: {slot: "label"},
                    slot: "label"
                }, ["html" === e.activeTab ? a("i", {staticClass: "el-icon-edit"}) : a("i", {staticClass: "el-icon-document"}), e._v(" template ")])]), a("el-tab-pane", {attrs: {name: "js"}}, [a("span", {
                    attrs: {slot: "label"},
                    slot: "label"
                }, ["js" === e.activeTab ? a("i", {staticClass: "el-icon-edit"}) : a("i", {staticClass: "el-icon-document"}), e._v(" script ")])]), a("el-tab-pane", {attrs: {name: "css"}}, [a("span", {
                    attrs: {slot: "label"},
                    slot: "label"
                }, ["css" === e.activeTab ? a("i", {staticClass: "el-icon-edit"}) : a("i", {staticClass: "el-icon-document"}), e._v(" css ")])])], 1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "html" === e.activeTab,
                        expression: "activeTab==='html'"
                    }], staticClass: "tab-editor", attrs: {id: "editorHtml"}
                }), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "js" === e.activeTab,
                        expression: "activeTab==='js'"
                    }], staticClass: "tab-editor", attrs: {id: "editorJs"}
                }), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "css" === e.activeTab,
                        expression: "activeTab==='css'"
                    }], staticClass: "tab-editor", attrs: {id: "editorCss"}
                })], 1), a("el-col", {
                    staticClass: "right-preview",
                    attrs: {md: 24, lg: 12}
                }, [a("div", {staticClass: "action-bar", style: {"text-align": "left"}}, [a("span", {
                    staticClass: "bar-btn",
                    on: {click: e.runCode}
                }, [a("i", {staticClass: "el-icon-refresh"}), e._v(" 刷新 ")]), a("span", {
                    staticClass: "bar-btn",
                    on: {click: e.exportFile}
                }, [a("i", {staticClass: "el-icon-download"}), e._v(" 导出vue文件 ")]), a("span", {
                    ref: "copyBtn",
                    staticClass: "bar-btn copy-btn"
                }, [a("i", {staticClass: "el-icon-document-copy"}), e._v(" 复制代码 ")]), a("span", {
                    staticClass: "bar-btn delete-btn",
                    on: {
                        click: function (t) {
                            return e.$emit("update:visible", !1)
                        }
                    }
                }, [a("i", {staticClass: "el-icon-circle-close"}), e._v(" 关闭 ")])]), a("iframe", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isIframeLoaded,
                        expression: "isIframeLoaded"
                    }],
                    ref: "previewPage",
                    staticClass: "result-wrapper",
                    attrs: {frameborder: "0", src: "preview.html"},
                    on: {load: e.iframeLoad}
                }), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isIframeLoaded,
                        expression: "!isIframeLoaded"
                    }, {name: "loading", rawName: "v-loading", value: !0, expression: "true"}],
                    staticClass: "result-wrapper"
                })])], 1)], 1)]), a("resource-dialog", {
                    attrs: {visible: e.resourceVisible, "origin-resource": e.resources},
                    on: {
                        "update:visible": function (t) {
                            e.resourceVisible = t
                        }, save: e.setResource
                    }
                })], 1)
            }, j = [], I = (a("bd99"), a("75c8")), E = (a("4882"), a("beaa"));

        function L(e) {
            return '<el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">\n    '.concat(e, '\n    <div slot="footer">\n      <el-button @click="close">取消</el-button>\n      <el-button type="primary" @click="handelConfirm">确定</el-button>\n    </div>\n  </el-dialog>')
        }

        function T(e) {
            return "<template>\n    <div>\n      ".concat(e, "\n    </div>\n  </template>")
        }

        function z(e) {
            return "<script>\n    ".concat(e, "\n  <\/script>")
        }

        function $(e) {
            return "<style>\n    ".concat(e, "\n  </style>")
        }

        function P(e, t, a) {
            var o = "";
            "right" !== e.labelPosition && (o = 'label-position="'.concat(e.labelPosition, '"'));
            var i = e.disabled ? ':disabled="'.concat(e.disabled, '"') : "",
                l = '<el-form ref="'.concat(e.formRef, '" :model="').concat(e.formModel, '" :rules="').concat(e.formRules, '" size="').concat(e.size, '" ').concat(i, ' label-width="').concat(e.labelWidth, 'px" ').concat(o, ">\n      ").concat(t, "\n      ").concat(B(e, a), "\n    </el-form>");
            return n && (l = '<el-row :gutter="'.concat(e.gutter, '">\n        ').concat(l, "\n      </el-row>")), l
        }

        function B(e, t) {
            var a = "";
            return e.formBtns && "file" === t && (a = '<el-form-item size="large">\n          <el-button type="primary" @click="submitForm">提交</el-button>\n          <el-button @click="resetForm">重置</el-button>\n        </el-form-item>', n && (a = '<el-col :span="24">\n          '.concat(a, "\n        </el-col>"))), a
        }

        function R(e, t) {
            return n || 24 !== e.__config__.span ? '<el-col :span="'.concat(e.__config__.span, '">\n      ').concat(t, "\n    </el-col>") : t
        }

        var V = {
            colFormItem: function (e) {
                var t = e.__config__, a = "", n = 'label="'.concat(t.label, '"');
                t.labelWidth && t.labelWidth !== o.labelWidth && (a = 'label-width="'.concat(t.labelWidth, 'px"')), !1 === t.showLabel && (a = 'label-width="0"', n = "");
                var i = !E["a"][t.tag] && t.required ? "required" : "", l = A[t.tag] ? A[t.tag](e) : null,
                    c = "<el-form-item ".concat(a, " ").concat(n, ' prop="').concat(e.__vModel__, '" ').concat(i, ">\n        ").concat(l, "\n      </el-form-item>");
                return c = R(e, c), c
            }, rowFormItem: function (e) {
                var t = e.__config__, a = "default" === e.type ? "" : 'type="'.concat(e.type, '"'),
                    o = "default" === e.type ? "" : 'justify="'.concat(e.justify, '"'),
                    n = "default" === e.type ? "" : 'align="'.concat(e.align, '"'),
                    i = e.gutter ? ':gutter="'.concat(e.gutter, '"') : "", l = t.children.map((function (e) {
                        return V[e.__config__.layout](e)
                    })),
                    c = "<el-row ".concat(a, " ").concat(o, " ").concat(n, " ").concat(i, ">\n      ").concat(l.join("\n"), "\n    </el-row>");
                return c = R(e, c), c
            }
        }, A = {
            "el-button": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = e.type ? 'type="'.concat(e.type, '"') : "",
                    i = e.icon ? 'icon="'.concat(e.icon, '"') : "", l = e.round ? "round" : "",
                    c = e.size ? 'size="'.concat(e.size, '"') : "", r = e.plain ? "plain" : "",
                    s = e.circle ? "circle" : "", d = F(e);
                return d && (d = "\n".concat(d, "\n")), "<".concat(a, " ").concat(n, " ").concat(i, " ").concat(l, " ").concat(c, " ").concat(r, " ").concat(o, " ").concat(s, ">").concat(d, "</").concat(a, ">")
            }, "el-input": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = t.clearable, l = t.placeholder, c = t.width,
                    r = e.maxlength ? ':maxlength="'.concat(e.maxlength, '"') : "",
                    s = e["show-word-limit"] ? "show-word-limit" : "", d = e.readonly ? "readonly" : "",
                    u = e["prefix-icon"] ? "prefix-icon='".concat(e["prefix-icon"], "'") : "",
                    _ = e["suffix-icon"] ? "suffix-icon='".concat(e["suffix-icon"], "'") : "",
                    p = e["show-password"] ? "show-password" : "", f = e.type ? 'type="'.concat(e.type, '"') : "",
                    m = e.autosize && e.autosize.minRows ? ':autosize="{minRows: '.concat(e.autosize.minRows, ", maxRows: ").concat(e.autosize.maxRows, '}"') : "",
                    v = N(e);
                return v && (v = "\n".concat(v, "\n")), "<".concat(a, " ").concat(n, " ").concat(f, " ").concat(l, " ").concat(r, " ").concat(s, " ").concat(d, " ").concat(o, " ").concat(i, " ").concat(u, " ").concat(_, " ").concat(p, " ").concat(m, " ").concat(c, ">").concat(v, "</").concat(a, ">")
            }, "el-input-number": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = t.placeholder,
                    l = e["controls-position"] ? "controls-position=".concat(e["controls-position"]) : "",
                    c = e.min ? ":min='".concat(e.min, "'") : "", r = e.max ? ":max='".concat(e.max, "'") : "",
                    s = e.step ? ":step='".concat(e.step, "'") : "", d = e["step-strictly"] ? "step-strictly" : "",
                    u = e.precision ? ":precision='".concat(e.precision, "'") : "";
                return "<".concat(a, " ").concat(n, " ").concat(i, " ").concat(s, " ").concat(d, " ").concat(u, " ").concat(l, " ").concat(c, " ").concat(r, " ").concat(o, "></").concat(a, ">")
            }, "el-select": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = t.clearable, l = t.placeholder, c = t.width,
                    r = e.filterable ? "filterable" : "", s = e.multiple ? "multiple" : "", d = q(e);
                return d && (d = "\n".concat(d, "\n")), "<".concat(a, " ").concat(n, " ").concat(l, " ").concat(o, " ").concat(s, " ").concat(r, " ").concat(i, " ").concat(c, ">").concat(d, "</").concat(a, ">")
            }, "el-radio-group": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = 'size="'.concat(e.size, '"'), l = W(e);
                return l && (l = "\n".concat(l, "\n")), "<".concat(a, " ").concat(n, " ").concat(i, " ").concat(o, ">").concat(l, "</").concat(a, ">")
            }, "el-checkbox-group": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = 'size="'.concat(e.size, '"'),
                    l = e.min ? ':min="'.concat(e.min, '"') : "", c = e.max ? ':max="'.concat(e.max, '"') : "",
                    r = U(e);
                return r && (r = "\n".concat(r, "\n")), "<".concat(a, " ").concat(n, " ").concat(l, " ").concat(c, " ").concat(i, " ").concat(o, ">").concat(r, "</").concat(a, ">")
            }, "el-switch": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel,
                    i = e["active-text"] ? 'active-text="'.concat(e["active-text"], '"') : "",
                    l = e["inactive-text"] ? 'inactive-text="'.concat(e["inactive-text"], '"') : "",
                    c = e["active-color"] ? 'active-color="'.concat(e["active-color"], '"') : "",
                    r = e["inactive-color"] ? 'inactive-color="'.concat(e["inactive-color"], '"') : "",
                    s = !0 !== e["active-value"] ? ":active-value='".concat(JSON.stringify(e["active-value"]), "'") : "",
                    d = !1 !== e["inactive-value"] ? ":inactive-value='".concat(JSON.stringify(e["inactive-value"]), "'") : "";
                return "<".concat(a, " ").concat(n, " ").concat(i, " ").concat(l, " ").concat(c, " ").concat(r, " ").concat(s, " ").concat(d, " ").concat(o, "></").concat(a, ">")
            }, "el-cascader": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = t.clearable, l = t.placeholder, c = t.width,
                    r = e.options ? ':options="'.concat(e.__vModel__, 'Options"') : "",
                    s = e.props ? ':props="'.concat(e.__vModel__, 'Props"') : "",
                    d = e["show-all-levels"] ? "" : ':show-all-levels="false"', u = e.filterable ? "filterable" : "",
                    _ = "/" === e.separator ? "" : 'separator="'.concat(e.separator, '"');
                return "<".concat(a, " ").concat(n, " ").concat(r, " ").concat(s, " ").concat(c, " ").concat(d, " ").concat(l, " ").concat(_, " ").concat(u, " ").concat(i, " ").concat(o, "></").concat(a, ">")
            }, "el-slider": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = e.min ? ":min='".concat(e.min, "'") : "",
                    l = e.max ? ":max='".concat(e.max, "'") : "", c = e.step ? ":step='".concat(e.step, "'") : "",
                    r = e.range ? "range" : "", s = e["show-stops"] ? ':show-stops="'.concat(e["show-stops"], '"') : "";
                return "<".concat(a, " ").concat(i, " ").concat(l, " ").concat(c, " ").concat(n, " ").concat(r, " ").concat(s, " ").concat(o, "></").concat(a, ">")
            }, "el-time-picker": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = t.clearable, l = t.placeholder, c = t.width,
                    r = e["start-placeholder"] ? 'start-placeholder="'.concat(e["start-placeholder"], '"') : "",
                    s = e["end-placeholder"] ? 'end-placeholder="'.concat(e["end-placeholder"], '"') : "",
                    d = e["range-separator"] ? 'range-separator="'.concat(e["range-separator"], '"') : "",
                    u = e["is-range"] ? "is-range" : "", _ = e.format ? 'format="'.concat(e.format, '"') : "",
                    p = e["value-format"] ? 'value-format="'.concat(e["value-format"], '"') : "",
                    f = e["picker-options"] ? ":picker-options='".concat(JSON.stringify(e["picker-options"]), "'") : "";
                return "<".concat(a, " ").concat(n, " ").concat(u, " ").concat(_, " ").concat(p, " ").concat(f, " ").concat(c, " ").concat(l, " ").concat(r, " ").concat(s, " ").concat(d, " ").concat(i, " ").concat(o, "></").concat(a, ">")
            }, "el-date-picker": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = t.clearable, l = t.placeholder, c = t.width,
                    r = e["start-placeholder"] ? 'start-placeholder="'.concat(e["start-placeholder"], '"') : "",
                    s = e["end-placeholder"] ? 'end-placeholder="'.concat(e["end-placeholder"], '"') : "",
                    d = e["range-separator"] ? 'range-separator="'.concat(e["range-separator"], '"') : "",
                    u = e.format ? 'format="'.concat(e.format, '"') : "",
                    _ = e["value-format"] ? 'value-format="'.concat(e["value-format"], '"') : "",
                    p = "date" === e.type ? "" : 'type="'.concat(e.type, '"'), f = e.readonly ? "readonly" : "";
                return "<".concat(a, " ").concat(p, " ").concat(n, " ").concat(u, " ").concat(_, " ").concat(c, " ").concat(l, " ").concat(r, " ").concat(s, " ").concat(d, " ").concat(i, " ").concat(f, " ").concat(o, "></").concat(a, ">")
            }, "el-rate": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = e.max ? ":max='".concat(e.max, "'") : "",
                    l = e["allow-half"] ? "allow-half" : "", c = e["show-text"] ? "show-text" : "",
                    r = e["show-score"] ? "show-score" : "";
                return "<".concat(a, " ").concat(n, " ").concat(i, " ").concat(l, " ").concat(c, " ").concat(r, " ").concat(o, "></").concat(a, ">")
            }, "el-color-picker": function (e) {
                var t = S(e), a = t.tag, o = t.disabled, n = t.vModel, i = 'size="'.concat(e.size, '"'),
                    l = e["show-alpha"] ? "show-alpha" : "",
                    c = e["color-format"] ? 'color-format="'.concat(e["color-format"], '"') : "";
                return "<".concat(a, " ").concat(n, " ").concat(i, " ").concat(l, " ").concat(c, " ").concat(o, "></").concat(a, ">")
            }, "el-upload": function (e) {
                var t = e.__config__.tag, a = e.disabled ? ":disabled='true'" : "",
                    o = e.action ? ':action="'.concat(e.__vModel__, 'Action"') : "", n = e.multiple ? "multiple" : "",
                    i = "text" !== e["list-type"] ? 'list-type="'.concat(e["list-type"], '"') : "",
                    l = e.accept ? 'accept="'.concat(e.accept, '"') : "",
                    c = "file" !== e.name ? 'name="'.concat(e.name, '"') : "",
                    r = !1 === e["auto-upload"] ? ':auto-upload="false"' : "",
                    s = ':before-upload="'.concat(e.__vModel__, 'BeforeUpload"'),
                    d = ':file-list="'.concat(e.__vModel__, 'fileList"'), u = 'ref="'.concat(e.__vModel__, '"'),
                    _ = K(e);
                return _ && (_ = "\n".concat(_, "\n")), "<".concat(t, " ").concat(u, " ").concat(d, " ").concat(o, " ").concat(r, " ").concat(n, " ").concat(s, " ").concat(i, " ").concat(l, " ").concat(c, " ").concat(a, ">").concat(_, "</").concat(t, ">")
            }, tinymce: function (e) {
                var t = S(e), a = t.tag, o = t.vModel, n = t.placeholder,
                    i = e.height ? ':height="'.concat(e.height, '"') : "",
                    l = e.branding ? ':branding="'.concat(e.branding, '"') : "";
                return "<".concat(a, " ").concat(o, " ").concat(n, " ").concat(i, " ").concat(l, "></").concat(a, ">")
            }
        };

        function S(e) {
            return {
                tag: e.__config__.tag,
                vModel: 'v-model="'.concat(o.formModel, ".").concat(e.__vModel__, '"'),
                clearable: e.clearable ? "clearable" : "",
                placeholder: e.placeholder ? 'placeholder="'.concat(e.placeholder, '"') : "",
                width: e.style && e.style.width ? ":style=\"{width: '100%'}\"" : "",
                disabled: e.disabled ? ":disabled='true'" : ""
            }
        }

        function F(e) {
            var t = [], a = e.__slot__ || {};
            return a.default && t.push(a.default), t.join("\n")
        }

        function N(e) {
            var t = [], a = e.__slot__;
            return a && a.prepend && t.push('<template slot="prepend">'.concat(a.prepend, "</template>")), a && a.append && t.push('<template slot="append">'.concat(a.append, "</template>")), t.join("\n")
        }

        function q(e) {
            var t = [], a = e.__slot__;
            return a && a.options && a.options.length && t.push('<el-option v-for="(item, index) in '.concat(e.__vModel__, 'Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>')), t.join("\n")
        }

        function W(e) {
            var t = [], a = e.__slot__, o = e.__config__;
            if (a && a.options && a.options.length) {
                var n = "button" === o.optionType ? "el-radio-button" : "el-radio", i = o.border ? "border" : "";
                t.push("<".concat(n, ' v-for="(item, index) in ').concat(e.__vModel__, 'Options" :key="index" :label="item.value" :disabled="item.disabled" ').concat(i, ">{{item.label}}</").concat(n, ">"))
            }
            return t.join("\n")
        }

        function U(e) {
            var t = [], a = e.__slot__, o = e.__config__;
            if (a && a.options && a.options.length) {
                var n = "button" === o.optionType ? "el-checkbox-button" : "el-checkbox", i = o.border ? "border" : "";
                t.push("<".concat(n, ' v-for="(item, index) in ').concat(e.__vModel__, 'Options" :key="index" :label="item.value" :disabled="item.disabled" ').concat(i, ">{{item.label}}</").concat(n, ">"))
            }
            return t.join("\n")
        }

        function K(e) {
            var t = [], a = e.__config__;
            return "picture-card" === e["list-type"] ? t.push('<i class="el-icon-plus"></i>') : t.push('<el-button size="small" type="primary" icon="el-icon-upload">'.concat(a.buttonText, "</el-button>")), a.showTip && t.push('<div slot="tip" class="el-upload__tip">只能上传不超过 '.concat(a.fileSize).concat(a.sizeUnit, " 的").concat(e.accept, "文件</div>")), t.join("\n")
        }

        function H(e, t) {
            var a = [];
            o = e, n = e.fields.some((function (e) {
                return 24 !== e.__config__.span
            })), e.fields.forEach((function (e) {
                a.push(V[e.__config__.layout](e))
            }));
            var i = a.join("\n"), l = P(e, i, t);
            return "dialog" === t && (l = L(l)), o = null, l
        }

        var G = a("f4a7"), J = {
            "el-rate": ".el-rate{display: inline-block; vertical-align: text-top;}",
            "el-upload": ".el-upload__tip{line-height: 1.2;}"
        };

        function Y(e, t) {
            var a = J[t.__config__.tag];
            a && -1 === e.indexOf(a) && e.push(a), t.__config__.children && t.__config__.children.forEach((function (t) {
                return Y(e, t)
            }))
        }

        function Z(e) {
            var t = [];
            return e.fields.forEach((function (e) {
                return Y(t, e)
            })), t.join("\n")
        }

        var Q, X, ee = a("ed08"), te = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", [a("el-dialog", e._g(e._b({
                    attrs: {
                        title: "外部资源引用",
                        width: "600px",
                        "close-on-click-modal": !1
                    }, on: {open: e.onOpen, close: e.onClose}
                }, "el-dialog", e.$attrs, !1), e.$listeners), [e._l(e.resources, (function (t, o) {
                    return a("el-input", {
                        key: o,
                        staticClass: "url-item",
                        attrs: {placeholder: "请输入 css 或 js 资源路径", "prefix-icon": "el-icon-link", clearable: ""},
                        model: {
                            value: e.resources[o], callback: function (t) {
                                e.$set(e.resources, o, t)
                            }, expression: "resources[index]"
                        }
                    }, [a("el-button", {
                        attrs: {slot: "append", icon: "el-icon-delete"}, on: {
                            click: function (t) {
                                return e.deleteOne(o)
                            }
                        }, slot: "append"
                    })], 1)
                })), a("el-button-group", {staticClass: "add-item"}, [a("el-button", {
                    attrs: {plain: ""},
                    on: {
                        click: function (t) {
                            return e.addOne("https://lib.baomitu.com/jquery/1.8.3/jquery.min.js")
                        }
                    }
                }, [e._v(" jQuery1.8.3 ")]), a("el-button", {
                    attrs: {plain: ""}, on: {
                        click: function (t) {
                            return e.addOne("https://unpkg.com/http-vue-loader")
                        }
                    }
                }, [e._v(" http-vue-loader ")]), a("el-button", {
                    attrs: {icon: "el-icon-circle-plus-outline", plain: ""},
                    on: {
                        click: function (t) {
                            return e.addOne("")
                        }
                    }
                }, [e._v(" 添加其他 ")])], 1), a("div", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {on: {click: e.close}}, [e._v(" 取消 ")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.handelConfirm}
                }, [e._v(" 确定 ")])], 1)], 2)], 1)
            }, ae = [], oe = (a("b0da"), {
                components: {}, inheritAttrs: !1, props: ["originResource"], data: function () {
                    return {resources: null}
                }, computed: {}, watch: {}, created: function () {
                }, mounted: function () {
                }, methods: {
                    onOpen: function () {
                        this.resources = this.originResource.length ? Object(ee["b"])(this.originResource) : [""]
                    }, onClose: function () {
                    }, close: function () {
                        this.$emit("update:visible", !1)
                    }, handelConfirm: function () {
                        var e = this.resources.filter((function (e) {
                            return !!e
                        })) || [];
                        this.$emit("save", e), this.close(), e.length && (this.resources = e)
                    }, deleteOne: function (e) {
                        this.resources.splice(e, 1)
                    }, addOne: function (e) {
                        this.resources.indexOf(e) > -1 ? this.$message("资源已存在") : this.resources.push(e)
                    }
                }
            }), ne = oe, ie = (a("2dba"), Object(u["a"])(ne, te, ae, !1, null, "60dcec16", null)), le = ie.exports,
            ce = a("c88b"), re = a("5f72"), se = a.n(re), de = a("4771");

        function ue(e) {
            if (Q) e(Q); else {
                var t = de["a"].monacoEditorUrl, a = se.a.Loading.service({
                    fullscreen: !0,
                    lock: !0,
                    text: "编辑器资源初始化中...",
                    spinner: "el-icon-loading",
                    background: "rgba(255, 255, 255, 0.5)"
                });
                !window.require && (window.require = {}), !window.require.paths && (window.require.paths = {}), window.require.paths.vs = t, Object(ce["a"])("".concat(t, "/loader.js"), (function () {
                    window.require(["vs/editor/editor.main"], (function () {
                        a.close(), Q = window.monaco, e(Q)
                    }))
                }))
            }
        }

        function _e(e) {
            var t = de["a"].beautifierUrl;
            if (X) e(X); else {
                var a = se.a.Loading.service({
                    fullscreen: !0,
                    lock: !0,
                    text: "格式化资源加载中...",
                    spinner: "el-icon-loading",
                    background: "rgba(255, 255, 255, 0.5)"
                });
                Object(ce["a"])(t, (function () {
                    a.close(), X = beautifier, e(X)
                }))
            }
        }

        var pe, fe, me, ve, he = {html: null, js: null, css: null}, be = {html: "html", js: "javascript", css: "css"},
            ge = {
                components: {ResourceDialog: le}, props: ["formData", "generateConf"], data: function () {
                    return {
                        activeTab: "html",
                        htmlCode: "",
                        jsCode: "",
                        cssCode: "",
                        codeFrame: "",
                        isIframeLoaded: !1,
                        isInitcode: !1,
                        isRefreshCode: !1,
                        resourceVisible: !1,
                        scripts: [],
                        links: [],
                        monaco: null
                    }
                }, computed: {
                    resources: function () {
                        return this.scripts.concat(this.links)
                    }
                }, watch: {}, created: function () {
                }, mounted: function () {
                    var e = this;
                    window.addEventListener("keydown", this.preventDefaultSave);
                    var t = new C.a(".copy-btn", {
                        text: function (t) {
                            var a = e.generateCode();
                            return e.$notify({title: "成功", message: "代码已复制到剪切板，可粘贴。", type: "success"}), a
                        }
                    });
                    t.on("error", (function (t) {
                        e.$message.error("代码复制失败")
                    }))
                }, beforeDestroy: function () {
                    window.removeEventListener("keydown", this.preventDefaultSave)
                }, methods: {
                    preventDefaultSave: function (e) {
                        "s" === e.key && (e.metaKey || e.ctrlKey) && e.preventDefault()
                    }, onOpen: function () {
                        var e = this, t = this.generateConf.type;
                        this.htmlCode = H(this.formData, t), this.jsCode = Object(G["a"])(this.formData, t), this.cssCode = Z(this.formData), _e((function (t) {
                            pe = t, e.htmlCode = pe.html(e.htmlCode, ee["a"].html), e.jsCode = pe.js(e.jsCode, ee["a"].js), e.cssCode = pe.css(e.cssCode, ee["a"].html), ue((function (t) {
                                fe = t, e.setEditorValue("editorHtml", "html", e.htmlCode), e.setEditorValue("editorJs", "js", e.jsCode), e.setEditorValue("editorCss", "css", e.cssCode), e.isInitcode || (e.isRefreshCode = !0, e.isIframeLoaded && (e.isInitcode = !0) && e.runCode())
                            }))
                        }))
                    }, onClose: function () {
                        this.isInitcode = !1, this.isRefreshCode = !1
                    }, iframeLoad: function () {
                        this.isInitcode || (this.isIframeLoaded = !0, this.isRefreshCode && (this.isInitcode = !0) && this.runCode())
                    }, setEditorValue: function (e, t, a) {
                        var o = this;
                        he[t] ? he[t].setValue(a) : he[t] = fe.editor.create(document.getElementById(e), {
                            value: a,
                            theme: "vs-dark",
                            language: be[t],
                            automaticLayout: !0
                        }), he[t].onKeyDown((function (e) {
                            49 === e.keyCode && (e.metaKey || e.ctrlKey) && o.runCode()
                        }))
                    }, runCode: function () {
                        var e = he.js.getValue();
                        try {
                            var t = Object(I["parse"])(e, {sourceType: "module"}), a = t.program.body;
                            if (a.length > 1) return void this.$confirm("js格式不能识别，仅支持修改export default的对象内容", "提示", {type: "warning"});
                            if ("ExportDefaultDeclaration" === a[0].type) {
                                var o = {
                                    type: "refreshFrame",
                                    data: {
                                        generateConf: this.generateConf,
                                        html: he.html.getValue(),
                                        js: e.replace(ee["c"], ""),
                                        css: he.css.getValue(),
                                        scripts: this.scripts,
                                        links: this.links
                                    }
                                };
                                this.$refs.previewPage.contentWindow.postMessage(o, location.origin)
                            } else this.$message.error("请使用export default")
                        } catch (n) {
                            this.$message.error("js错误：".concat(n)), console.error(n)
                        }
                    }, generateCode: function () {
                        var e = T(he.html.getValue()), t = z(he.js.getValue()), a = $(he.css.getValue());
                        return pe.html(e + t + a, ee["a"].html)
                    }, exportFile: function () {
                        var e = this;
                        this.$prompt("文件名:", "导出文件", {
                            inputValue: "".concat(+new Date, ".vue"),
                            closeOnClickModal: !1,
                            inputPlaceholder: "请输入文件名"
                        }).then((function (t) {
                            var a = t.value;
                            a || (a = "".concat(+new Date, ".vue"));
                            var o = e.generateCode(), n = new Blob([o], {type: "text/plain;charset=utf-8"});
                            Object(x["saveAs"])(n, a)
                        }))
                    }, showResource: function () {
                        this.resourceVisible = !0
                    }, setResource: function (e) {
                        var t = [], a = [];
                        Array.isArray(e) ? (e.forEach((function (e) {
                            e.endsWith(".css") ? a.push(e) : t.push(e)
                        })), this.scripts = t, this.links = a) : (this.scripts = [], this.links = [])
                    }
                }
            }, we = ge, ye = (a("d9b9"), Object(u["a"])(we, M, j, !1, null, "3157a144", null)), De = ye.exports,
            xe = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", [a("el-drawer", e._g(e._b({
                    on: {
                        opened: e.onOpen,
                        close: e.onClose
                    }
                }, "el-drawer", e.$attrs, !1), e.$listeners), [a("div", {
                    staticClass: "action-bar",
                    style: {"text-align": "left"}
                }, [a("span", {
                    staticClass: "bar-btn",
                    on: {click: e.refresh}
                }, [a("i", {staticClass: "el-icon-refresh"}), e._v(" 刷新 ")]), a("span", {
                    ref: "copyBtn",
                    staticClass: "bar-btn copy-json-btn"
                }, [a("i", {staticClass: "el-icon-document-copy"}), e._v(" 复制JSON ")]), a("span", {
                    staticClass: "bar-btn",
                    on: {click: e.exportJsonFile}
                }, [a("i", {staticClass: "el-icon-download"}), e._v(" 导出JSON文件 ")]), a("span", {
                    staticClass: "bar-btn delete-btn",
                    on: {
                        click: function (t) {
                            return e.$emit("update:visible", !1)
                        }
                    }
                }, [a("i", {staticClass: "el-icon-circle-close"}), e._v(" 关闭 ")])]), a("div", {
                    staticClass: "json-editor",
                    attrs: {id: "editorJson"}
                })])], 1)
            }, ke = [], Ce = {
                components: {}, props: {jsonStr: {type: String, required: !0}}, data: function () {
                    return {}
                }, computed: {}, watch: {}, created: function () {
                }, mounted: function () {
                    var e = this;
                    window.addEventListener("keydown", this.preventDefaultSave);
                    var t = new C.a(".copy-json-btn", {
                        text: function (t) {
                            return e.$notify({title: "成功", message: "代码已复制到剪切板，可粘贴。", type: "success"}), e.beautifierJson
                        }
                    });
                    t.on("error", (function (t) {
                        e.$message.error("代码复制失败")
                    }))
                }, beforeDestroy: function () {
                    window.removeEventListener("keydown", this.preventDefaultSave)
                }, methods: {
                    preventDefaultSave: function (e) {
                        "s" === e.key && (e.metaKey || e.ctrlKey) && e.preventDefault()
                    }, onOpen: function () {
                        var e = this;
                        _e((function (t) {
                            me = t, e.beautifierJson = me.js(e.jsonStr, ee["a"].js), ue((function (t) {
                                ve = t, e.setEditorValue("editorJson", e.beautifierJson)
                            }))
                        }))
                    }, onClose: function () {
                    }, setEditorValue: function (e, t) {
                        var a = this;
                        this.jsonEditor ? this.jsonEditor.setValue(t) : (this.jsonEditor = ve.editor.create(document.getElementById(e), {
                            value: t,
                            theme: "vs-dark",
                            language: "json",
                            automaticLayout: !0
                        }), this.jsonEditor.onKeyDown((function (e) {
                            49 === e.keyCode && (e.metaKey || e.ctrlKey) && a.refresh()
                        })))
                    }, exportJsonFile: function () {
                        var e = this;
                        this.$prompt("文件名:", "导出文件", {
                            inputValue: "".concat(+new Date, ".json"),
                            closeOnClickModal: !1,
                            inputPlaceholder: "请输入文件名"
                        }).then((function (t) {
                            var a = t.value;
                            a || (a = "".concat(+new Date, ".json"));
                            var o = e.jsonEditor.getValue(), n = new Blob([o], {type: "text/plain;charset=utf-8"});
                            Object(x["saveAs"])(n, a)
                        }))
                    }, refresh: function () {
                        try {
                            this.$emit("refresh", JSON.parse(this.jsonEditor.getValue()))
                        } catch (e) {
                            this.$notify({title: "错误", message: "JSON格式错误，请检查", type: "error"})
                        }
                    }
                }
            }, Oe = Ce, Me = (a("80e9"), Object(u["a"])(Oe, xe, ke, !1, null, "44793736", null)), je = Me.exports,
            Ie = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "right-board"}, [a("el-tabs", {
                    staticClass: "center-tabs",
                    model: {
                        value: e.currentTab, callback: function (t) {
                            e.currentTab = t
                        }, expression: "currentTab"
                    }
                }, [a("el-tab-pane", {attrs: {label: "组件属性", name: "field"}}), a("el-tab-pane", {
                    attrs: {
                        label: "表单属性",
                        name: "form"
                    }
                })], 1), a("div", {staticClass: "field-box"}, [a("a", {
                    staticClass: "document-link",
                    attrs: {target: "_blank", href: e.documentLink, title: "查看组件文档"}
                }, [a("i", {staticClass: "el-icon-link"})]), a("el-scrollbar", {staticClass: "right-scrollbar"}, [a("el-form", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "field" === e.currentTab && e.showField,
                        expression: "currentTab==='field' && showField"
                    }], attrs: {size: "small", "label-width": "90px"}
                }, [e.activeData.__config__.changeTag ? a("el-form-item", {attrs: {label: "组件类型"}}, [a("el-select", {
                    style: {width: "100%"},
                    attrs: {placeholder: "请选择组件类型"},
                    on: {change: e.tagChange},
                    model: {
                        value: e.activeData.__config__.tagIcon, callback: function (t) {
                            e.$set(e.activeData.__config__, "tagIcon", t)
                        }, expression: "activeData.__config__.tagIcon"
                    }
                }, e._l(e.tagList, (function (t) {
                    return a("el-option-group", {key: t.label, attrs: {label: t.label}}, e._l(t.options, (function (t) {
                        return a("el-option", {
                            key: t.__config__.label,
                            attrs: {label: t.__config__.label, value: t.__config__.tagIcon}
                        }, [a("svg-icon", {
                            staticClass: "node-icon",
                            attrs: {"icon-class": t.__config__.tagIcon}
                        }), a("span", [e._v(" " + e._s(t.__config__.label))])], 1)
                    })), 1)
                })), 1)], 1) : e._e(), void 0 !== e.activeData.__vModel__ ? a("el-form-item", {attrs: {label: "字段名"}}, [a("el-input", {
                    attrs: {placeholder: "请输入字段名（v-model）"},
                    model: {
                        value: e.activeData.__vModel__, callback: function (t) {
                            e.$set(e.activeData, "__vModel__", t)
                        }, expression: "activeData.__vModel__"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.__config__.componentName ? a("el-form-item", {attrs: {label: "组件名"}}, [e._v(" " + e._s(e.activeData.__config__.componentName) + " ")]) : e._e(), void 0 !== e.activeData.__config__.label ? a("el-form-item", {attrs: {label: "标题"}}, [a("el-input", {
                    attrs: {placeholder: "请输入标题"},
                    on: {input: e.changeRenderKey},
                    model: {
                        value: e.activeData.__config__.label, callback: function (t) {
                            e.$set(e.activeData.__config__, "label", t)
                        }, expression: "activeData.__config__.label"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.placeholder ? a("el-form-item", {attrs: {label: "占位提示"}}, [a("el-input", {
                    attrs: {placeholder: "请输入占位提示"},
                    on: {input: e.changeRenderKey},
                    model: {
                        value: e.activeData.placeholder, callback: function (t) {
                            e.$set(e.activeData, "placeholder", t)
                        }, expression: "activeData.placeholder"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["start-placeholder"] ? a("el-form-item", {attrs: {label: "开始占位"}}, [a("el-input", {
                    attrs: {placeholder: "请输入占位提示"},
                    model: {
                        value: e.activeData["start-placeholder"], callback: function (t) {
                            e.$set(e.activeData, "start-placeholder", t)
                        }, expression: "activeData['start-placeholder']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["end-placeholder"] ? a("el-form-item", {attrs: {label: "结束占位"}}, [a("el-input", {
                    attrs: {placeholder: "请输入占位提示"},
                    model: {
                        value: e.activeData["end-placeholder"], callback: function (t) {
                            e.$set(e.activeData, "end-placeholder", t)
                        }, expression: "activeData['end-placeholder']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.__config__.span ? a("el-form-item", {attrs: {label: "表单栅格"}}, [a("el-slider", {
                    attrs: {
                        max: 24,
                        min: 1,
                        marks: {12: ""}
                    }, on: {change: e.spanChange}, model: {
                        value: e.activeData.__config__.span, callback: function (t) {
                            e.$set(e.activeData.__config__, "span", t)
                        }, expression: "activeData.__config__.span"
                    }
                })], 1) : e._e(), "rowFormItem" === e.activeData.__config__.layout && void 0 !== e.activeData.gutter ? a("el-form-item", {attrs: {label: "栅格间隔"}}, [a("el-input-number", {
                    attrs: {
                        min: 0,
                        placeholder: "栅格间隔"
                    }, model: {
                        value: e.activeData.gutter, callback: function (t) {
                            e.$set(e.activeData, "gutter", t)
                        }, expression: "activeData.gutter"
                    }
                })], 1) : e._e(), "rowFormItem" === e.activeData.__config__.layout && void 0 !== e.activeData.type ? a("el-form-item", {attrs: {label: "布局模式"}}, [a("el-radio-group", {
                    model: {
                        value: e.activeData.type,
                        callback: function (t) {
                            e.$set(e.activeData, "type", t)
                        },
                        expression: "activeData.type"
                    }
                }, [a("el-radio-button", {attrs: {label: "default"}}), a("el-radio-button", {attrs: {label: "flex"}})], 1)], 1) : e._e(), void 0 !== e.activeData.justify && "flex" === e.activeData.type ? a("el-form-item", {attrs: {label: "水平排列"}}, [a("el-select", {
                    style: {width: "100%"},
                    attrs: {placeholder: "请选择水平排列"},
                    model: {
                        value: e.activeData.justify, callback: function (t) {
                            e.$set(e.activeData, "justify", t)
                        }, expression: "activeData.justify"
                    }
                }, e._l(e.justifyOptions, (function (e, t) {
                    return a("el-option", {key: t, attrs: {label: e.label, value: e.value}})
                })), 1)], 1) : e._e(), void 0 !== e.activeData.align && "flex" === e.activeData.type ? a("el-form-item", {attrs: {label: "垂直排列"}}, [a("el-radio-group", {
                    model: {
                        value: e.activeData.align,
                        callback: function (t) {
                            e.$set(e.activeData, "align", t)
                        },
                        expression: "activeData.align"
                    }
                }, [a("el-radio-button", {attrs: {label: "top"}}), a("el-radio-button", {attrs: {label: "middle"}}), a("el-radio-button", {attrs: {label: "bottom"}})], 1)], 1) : e._e(), void 0 !== e.activeData.__config__.labelWidth ? a("el-form-item", {attrs: {label: "标签宽度"}}, [a("el-input", {
                    attrs: {
                        type: "number",
                        placeholder: "请输入标签宽度"
                    }, model: {
                        value: e.activeData.__config__.labelWidth, callback: function (t) {
                            e.$set(e.activeData.__config__, "labelWidth", e._n(t))
                        }, expression: "activeData.__config__.labelWidth"
                    }
                })], 1) : e._e(), e.activeData.style && void 0 !== e.activeData.style.width ? a("el-form-item", {attrs: {label: "组件宽度"}}, [a("el-input", {
                    attrs: {
                        placeholder: "请输入组件宽度",
                        clearable: ""
                    }, model: {
                        value: e.activeData.style.width, callback: function (t) {
                            e.$set(e.activeData.style, "width", t)
                        }, expression: "activeData.style.width"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.__vModel__ ? a("el-form-item", {attrs: {label: "默认值"}}, [a("el-input", {
                    attrs: {
                        value: e.setDefaultValue(e.activeData.__config__.defaultValue),
                        placeholder: "请输入默认值"
                    }, on: {input: e.onDefaultValueInput}
                })], 1) : e._e(), "el-checkbox-group" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "至少应选"}}, [a("el-input-number", {
                    attrs: {
                        value: e.activeData.min,
                        min: 0,
                        placeholder: "至少应选"
                    }, on: {
                        input: function (t) {
                            return e.$set(e.activeData, "min", t || void 0)
                        }
                    }
                })], 1) : e._e(), "el-checkbox-group" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "最多可选"}}, [a("el-input-number", {
                    attrs: {
                        value: e.activeData.max,
                        min: 0,
                        placeholder: "最多可选"
                    }, on: {
                        input: function (t) {
                            return e.$set(e.activeData, "max", t || void 0)
                        }
                    }
                })], 1) : e._e(), e.activeData.__slot__ && void 0 !== e.activeData.__slot__.prepend ? a("el-form-item", {attrs: {label: "前缀"}}, [a("el-input", {
                    attrs: {placeholder: "请输入前缀"},
                    model: {
                        value: e.activeData.__slot__.prepend, callback: function (t) {
                            e.$set(e.activeData.__slot__, "prepend", t)
                        }, expression: "activeData.__slot__.prepend"
                    }
                })], 1) : e._e(), e.activeData.__slot__ && void 0 !== e.activeData.__slot__.append ? a("el-form-item", {attrs: {label: "后缀"}}, [a("el-input", {
                    attrs: {placeholder: "请输入后缀"},
                    model: {
                        value: e.activeData.__slot__.append, callback: function (t) {
                            e.$set(e.activeData.__slot__, "append", t)
                        }, expression: "activeData.__slot__.append"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["prefix-icon"] ? a("el-form-item", {attrs: {label: "前图标"}}, [a("el-input", {
                    attrs: {placeholder: "请输入前图标名称"},
                    model: {
                        value: e.activeData["prefix-icon"], callback: function (t) {
                            e.$set(e.activeData, "prefix-icon", t)
                        }, expression: "activeData['prefix-icon']"
                    }
                }, [a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-thumb"}, on: {
                        click: function (t) {
                            return e.openIconsDialog("prefix-icon")
                        }
                    }, slot: "append"
                }, [e._v(" 选择 ")])], 1)], 1) : e._e(), void 0 !== e.activeData["suffix-icon"] ? a("el-form-item", {attrs: {label: "后图标"}}, [a("el-input", {
                    attrs: {placeholder: "请输入后图标名称"},
                    model: {
                        value: e.activeData["suffix-icon"], callback: function (t) {
                            e.$set(e.activeData, "suffix-icon", t)
                        }, expression: "activeData['suffix-icon']"
                    }
                }, [a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-thumb"}, on: {
                        click: function (t) {
                            return e.openIconsDialog("suffix-icon")
                        }
                    }, slot: "append"
                }, [e._v(" 选择 ")])], 1)], 1) : e._e(), void 0 !== e.activeData["icon"] && "el-button" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "按钮图标"}}, [a("el-input", {
                    attrs: {placeholder: "请输入按钮图标名称"},
                    model: {
                        value: e.activeData["icon"], callback: function (t) {
                            e.$set(e.activeData, "icon", t)
                        }, expression: "activeData['icon']"
                    }
                }, [a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-thumb"}, on: {
                        click: function (t) {
                            return e.openIconsDialog("icon")
                        }
                    }, slot: "append"
                }, [e._v(" 选择 ")])], 1)], 1) : e._e(), "el-cascader" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "选项分隔符"}}, [a("el-input", {
                    attrs: {placeholder: "请输入选项分隔符"},
                    model: {
                        value: e.activeData.separator, callback: function (t) {
                            e.$set(e.activeData, "separator", t)
                        }, expression: "activeData.separator"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.autosize ? a("el-form-item", {attrs: {label: "最小行数"}}, [a("el-input-number", {
                    attrs: {
                        min: 1,
                        placeholder: "最小行数"
                    }, model: {
                        value: e.activeData.autosize.minRows, callback: function (t) {
                            e.$set(e.activeData.autosize, "minRows", t)
                        }, expression: "activeData.autosize.minRows"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.autosize ? a("el-form-item", {attrs: {label: "最大行数"}}, [a("el-input-number", {
                    attrs: {
                        min: 1,
                        placeholder: "最大行数"
                    }, model: {
                        value: e.activeData.autosize.maxRows, callback: function (t) {
                            e.$set(e.activeData.autosize, "maxRows", t)
                        }, expression: "activeData.autosize.maxRows"
                    }
                })], 1) : e._e(), e.isShowMin ? a("el-form-item", {attrs: {label: "最小值"}}, [a("el-input-number", {
                    attrs: {placeholder: "最小值"},
                    model: {
                        value: e.activeData.min, callback: function (t) {
                            e.$set(e.activeData, "min", t)
                        }, expression: "activeData.min"
                    }
                })], 1) : e._e(), e.isShowMax ? a("el-form-item", {attrs: {label: "最大值"}}, [a("el-input-number", {
                    attrs: {placeholder: "最大值"},
                    model: {
                        value: e.activeData.max, callback: function (t) {
                            e.$set(e.activeData, "max", t)
                        }, expression: "activeData.max"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.height ? a("el-form-item", {attrs: {label: "组件高度"}}, [a("el-input-number", {
                    attrs: {placeholder: "高度"},
                    on: {input: e.changeRenderKey},
                    model: {
                        value: e.activeData.height, callback: function (t) {
                            e.$set(e.activeData, "height", t)
                        }, expression: "activeData.height"
                    }
                })], 1) : e._e(), e.isShowStep ? a("el-form-item", {attrs: {label: "步长"}}, [a("el-input-number", {
                    attrs: {placeholder: "步数"},
                    model: {
                        value: e.activeData.step, callback: function (t) {
                            e.$set(e.activeData, "step", t)
                        }, expression: "activeData.step"
                    }
                })], 1) : e._e(), "el-input-number" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "精度"}}, [a("el-input-number", {
                    attrs: {
                        min: 0,
                        placeholder: "精度"
                    }, model: {
                        value: e.activeData.precision, callback: function (t) {
                            e.$set(e.activeData, "precision", t)
                        }, expression: "activeData.precision"
                    }
                })], 1) : e._e(), "el-input-number" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "按钮位置"}}, [a("el-radio-group", {
                    model: {
                        value: e.activeData["controls-position"],
                        callback: function (t) {
                            e.$set(e.activeData, "controls-position", t)
                        },
                        expression: "activeData['controls-position']"
                    }
                }, [a("el-radio-button", {attrs: {label: ""}}, [e._v(" 默认 ")]), a("el-radio-button", {attrs: {label: "right"}}, [e._v(" 右侧 ")])], 1)], 1) : e._e(), void 0 !== e.activeData.maxlength ? a("el-form-item", {attrs: {label: "最多输入"}}, [a("el-input", {
                    attrs: {placeholder: "请输入字符长度"},
                    model: {
                        value: e.activeData.maxlength, callback: function (t) {
                            e.$set(e.activeData, "maxlength", t)
                        }, expression: "activeData.maxlength"
                    }
                }, [a("template", {slot: "append"}, [e._v(" 个字符 ")])], 2)], 1) : e._e(), void 0 !== e.activeData["active-text"] ? a("el-form-item", {attrs: {label: "开启提示"}}, [a("el-input", {
                    attrs: {placeholder: "请输入开启提示"},
                    model: {
                        value: e.activeData["active-text"], callback: function (t) {
                            e.$set(e.activeData, "active-text", t)
                        }, expression: "activeData['active-text']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["inactive-text"] ? a("el-form-item", {attrs: {label: "关闭提示"}}, [a("el-input", {
                    attrs: {placeholder: "请输入关闭提示"},
                    model: {
                        value: e.activeData["inactive-text"], callback: function (t) {
                            e.$set(e.activeData, "inactive-text", t)
                        }, expression: "activeData['inactive-text']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["active-value"] ? a("el-form-item", {attrs: {label: "开启值"}}, [a("el-input", {
                    attrs: {
                        value: e.setDefaultValue(e.activeData["active-value"]),
                        placeholder: "请输入开启值"
                    }, on: {
                        input: function (t) {
                            return e.onSwitchValueInput(t, "active-value")
                        }
                    }
                })], 1) : e._e(), void 0 !== e.activeData["inactive-value"] ? a("el-form-item", {attrs: {label: "关闭值"}}, [a("el-input", {
                    attrs: {
                        value: e.setDefaultValue(e.activeData["inactive-value"]),
                        placeholder: "请输入关闭值"
                    }, on: {
                        input: function (t) {
                            return e.onSwitchValueInput(t, "inactive-value")
                        }
                    }
                })], 1) : e._e(), void 0 !== e.activeData.type && "el-date-picker" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "时间类型"}}, [a("el-select", {
                    style: {width: "100%"},
                    attrs: {placeholder: "请选择时间类型"},
                    on: {change: e.dateTypeChange},
                    model: {
                        value: e.activeData.type, callback: function (t) {
                            e.$set(e.activeData, "type", t)
                        }, expression: "activeData.type"
                    }
                }, e._l(e.dateOptions, (function (e, t) {
                    return a("el-option", {key: t, attrs: {label: e.label, value: e.value}})
                })), 1)], 1) : e._e(), void 0 !== e.activeData.name ? a("el-form-item", {attrs: {label: "文件字段名"}}, [a("el-input", {
                    attrs: {placeholder: "请输入上传文件字段名"},
                    model: {
                        value: e.activeData.name, callback: function (t) {
                            e.$set(e.activeData, "name", t)
                        }, expression: "activeData.name"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.accept ? a("el-form-item", {attrs: {label: "文件类型"}}, [a("el-select", {
                    style: {width: "100%"},
                    attrs: {placeholder: "请选择文件类型", clearable: ""},
                    model: {
                        value: e.activeData.accept, callback: function (t) {
                            e.$set(e.activeData, "accept", t)
                        }, expression: "activeData.accept"
                    }
                }, [a("el-option", {attrs: {label: "图片", value: "image/*"}}), a("el-option", {
                    attrs: {
                        label: "视频",
                        value: "video/*"
                    }
                }), a("el-option", {attrs: {label: "音频", value: "audio/*"}}), a("el-option", {
                    attrs: {
                        label: "excel",
                        value: ".xls,.xlsx"
                    }
                }), a("el-option", {attrs: {label: "word", value: ".doc,.docx"}}), a("el-option", {
                    attrs: {
                        label: "pdf",
                        value: ".pdf"
                    }
                }), a("el-option", {
                    attrs: {
                        label: "txt",
                        value: ".txt"
                    }
                })], 1)], 1) : e._e(), void 0 !== e.activeData.__config__.fileSize ? a("el-form-item", {attrs: {label: "文件大小"}}, [a("el-input", {
                    attrs: {placeholder: "请输入文件大小"},
                    model: {
                        value: e.activeData.__config__.fileSize, callback: function (t) {
                            e.$set(e.activeData.__config__, "fileSize", e._n(t))
                        }, expression: "activeData.__config__.fileSize"
                    }
                }, [a("el-select", {
                    style: {width: "66px"},
                    attrs: {slot: "append"},
                    slot: "append",
                    model: {
                        value: e.activeData.__config__.sizeUnit, callback: function (t) {
                            e.$set(e.activeData.__config__, "sizeUnit", t)
                        }, expression: "activeData.__config__.sizeUnit"
                    }
                }, [a("el-option", {attrs: {label: "KB", value: "KB"}}), a("el-option", {
                    attrs: {
                        label: "MB",
                        value: "MB"
                    }
                }), a("el-option", {
                    attrs: {
                        label: "GB",
                        value: "GB"
                    }
                })], 1)], 1)], 1) : e._e(), void 0 !== e.activeData.action ? a("el-form-item", {attrs: {label: "上传地址"}}, [a("el-input", {
                    attrs: {
                        placeholder: "请输入上传地址",
                        clearable: ""
                    }, model: {
                        value: e.activeData.action, callback: function (t) {
                            e.$set(e.activeData, "action", t)
                        }, expression: "activeData.action"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["list-type"] ? a("el-form-item", {attrs: {label: "列表类型"}}, [a("el-radio-group", {
                    attrs: {size: "small"},
                    model: {
                        value: e.activeData["list-type"], callback: function (t) {
                            e.$set(e.activeData, "list-type", t)
                        }, expression: "activeData['list-type']"
                    }
                }, [a("el-radio-button", {attrs: {label: "text"}}, [e._v(" text ")]), a("el-radio-button", {attrs: {label: "picture"}}, [e._v(" picture ")]), a("el-radio-button", {attrs: {label: "picture-card"}}, [e._v(" picture-card ")])], 1)], 1) : e._e(), void 0 !== e.activeData.type && "el-button" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "按钮类型"}}, [a("el-select", {
                    style: {width: "100%"},
                    model: {
                        value: e.activeData.type, callback: function (t) {
                            e.$set(e.activeData, "type", t)
                        }, expression: "activeData.type"
                    }
                }, [a("el-option", {
                    attrs: {
                        label: "primary",
                        value: "primary"
                    }
                }), a("el-option", {
                    attrs: {
                        label: "success",
                        value: "success"
                    }
                }), a("el-option", {
                    attrs: {
                        label: "warning",
                        value: "warning"
                    }
                }), a("el-option", {attrs: {label: "danger", value: "danger"}}), a("el-option", {
                    attrs: {
                        label: "info",
                        value: "info"
                    }
                }), a("el-option", {
                    attrs: {
                        label: "text",
                        value: "text"
                    }
                })], 1)], 1) : e._e(), void 0 !== e.activeData.__config__.buttonText ? a("el-form-item", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "picture-card" !== e.activeData["list-type"],
                        expression: "'picture-card' !== activeData['list-type']"
                    }], attrs: {label: "按钮文字"}
                }, [a("el-input", {
                    attrs: {placeholder: "请输入按钮文字"},
                    model: {
                        value: e.activeData.__config__.buttonText, callback: function (t) {
                            e.$set(e.activeData.__config__, "buttonText", t)
                        }, expression: "activeData.__config__.buttonText"
                    }
                })], 1) : e._e(), "el-button" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "按钮文字"}}, [a("el-input", {
                    attrs: {placeholder: "请输入按钮文字"},
                    model: {
                        value: e.activeData.__slot__.default, callback: function (t) {
                            e.$set(e.activeData.__slot__, "default", t)
                        }, expression: "activeData.__slot__.default"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["range-separator"] ? a("el-form-item", {attrs: {label: "分隔符"}}, [a("el-input", {
                    attrs: {placeholder: "请输入分隔符"},
                    model: {
                        value: e.activeData["range-separator"], callback: function (t) {
                            e.$set(e.activeData, "range-separator", t)
                        }, expression: "activeData['range-separator']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["picker-options"] ? a("el-form-item", {attrs: {label: "时间段"}}, [a("el-input", {
                    attrs: {placeholder: "请输入时间段"},
                    model: {
                        value: e.activeData["picker-options"].selectableRange, callback: function (t) {
                            e.$set(e.activeData["picker-options"], "selectableRange", t)
                        }, expression: "activeData['picker-options'].selectableRange"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.format ? a("el-form-item", {attrs: {label: "时间格式"}}, [a("el-input", {
                    attrs: {
                        value: e.activeData.format,
                        placeholder: "请输入时间格式"
                    }, on: {
                        input: function (t) {
                            return e.setTimeValue(t)
                        }
                    }
                })], 1) : e._e(), ["el-checkbox-group", "el-radio-group", "el-select"].indexOf(e.activeData.__config__.tag) > -1 ? [a("el-divider", [e._v("选项")]), a("draggable", {
                    attrs: {
                        list: e.activeData.__slot__.options,
                        animation: 340,
                        group: "selectItem",
                        handle: ".option-drag"
                    }
                }, e._l(e.activeData.__slot__.options, (function (t, o) {
                    return a("div", {
                        key: o,
                        staticClass: "select-item"
                    }, [a("div", {staticClass: "select-line-icon option-drag"}, [a("i", {staticClass: "el-icon-s-operation"})]), a("el-input", {
                        attrs: {
                            placeholder: "选项名",
                            size: "small"
                        }, model: {
                            value: t.label, callback: function (a) {
                                e.$set(t, "label", a)
                            }, expression: "item.label"
                        }
                    }), a("el-input", {
                        attrs: {placeholder: "选项值", size: "small", value: t.value},
                        on: {
                            input: function (a) {
                                return e.setOptionValue(t, a)
                            }
                        }
                    }), a("div", {
                        staticClass: "close-btn select-line-icon", on: {
                            click: function (t) {
                                return e.activeData.__slot__.options.splice(o, 1)
                            }
                        }
                    }, [a("i", {staticClass: "el-icon-remove-outline"})])], 1)
                })), 0), a("div", {staticStyle: {"margin-left": "20px"}}, [a("el-button", {
                    staticStyle: {"padding-bottom": "0"},
                    attrs: {icon: "el-icon-circle-plus-outline", type: "text"},
                    on: {click: e.addSelectItem}
                }, [e._v(" 添加选项 ")])], 1), a("el-divider")] : e._e(), ["el-cascader", "el-table"].includes(e.activeData.__config__.tag) ? [a("el-divider", [e._v("选项")]), e.activeData.__config__.dataType ? a("el-form-item", {attrs: {label: "数据类型"}}, [a("el-radio-group", {
                    attrs: {size: "small"},
                    model: {
                        value: e.activeData.__config__.dataType, callback: function (t) {
                            e.$set(e.activeData.__config__, "dataType", t)
                        }, expression: "activeData.__config__.dataType"
                    }
                }, [a("el-radio-button", {attrs: {label: "dynamic"}}, [e._v(" 动态数据 ")]), a("el-radio-button", {attrs: {label: "static"}}, [e._v(" 静态数据 ")])], 1)], 1) : e._e(), "dynamic" === e.activeData.__config__.dataType ? [a("el-form-item", {attrs: {label: "接口地址"}}, [a("el-input", {
                    attrs: {
                        title: e.activeData.__config__.url,
                        placeholder: "请输入接口地址",
                        clearable: ""
                    }, on: {
                        blur: function (t) {
                            return e.$emit("fetch-data", e.activeData)
                        }
                    }, model: {
                        value: e.activeData.__config__.url, callback: function (t) {
                            e.$set(e.activeData.__config__, "url", t)
                        }, expression: "activeData.__config__.url"
                    }
                }, [a("el-select", {
                    style: {width: "85px"}, attrs: {slot: "prepend"}, on: {
                        change: function (t) {
                            return e.$emit("fetch-data", e.activeData)
                        }
                    }, slot: "prepend", model: {
                        value: e.activeData.__config__.method, callback: function (t) {
                            e.$set(e.activeData.__config__, "method", t)
                        }, expression: "activeData.__config__.method"
                    }
                }, [a("el-option", {attrs: {label: "get", value: "get"}}), a("el-option", {
                    attrs: {
                        label: "post",
                        value: "post"
                    }
                }), a("el-option", {attrs: {label: "put", value: "put"}}), a("el-option", {
                    attrs: {
                        label: "delete",
                        value: "delete"
                    }
                })], 1)], 1)], 1), a("el-form-item", {attrs: {label: "数据位置"}}, [a("el-input", {
                    attrs: {placeholder: "请输入数据位置"},
                    on: {
                        blur: function (t) {
                            return e.$emit("fetch-data", e.activeData)
                        }
                    },
                    model: {
                        value: e.activeData.__config__.dataPath, callback: function (t) {
                            e.$set(e.activeData.__config__, "dataPath", t)
                        }, expression: "activeData.__config__.dataPath"
                    }
                })], 1), e.activeData.props && e.activeData.props.props ? [a("el-form-item", {attrs: {label: "标签键名"}}, [a("el-input", {
                    attrs: {placeholder: "请输入标签键名"},
                    model: {
                        value: e.activeData.props.props.label, callback: function (t) {
                            e.$set(e.activeData.props.props, "label", t)
                        }, expression: "activeData.props.props.label"
                    }
                })], 1), a("el-form-item", {attrs: {label: "值键名"}}, [a("el-input", {
                    attrs: {placeholder: "请输入值键名"},
                    model: {
                        value: e.activeData.props.props.value, callback: function (t) {
                            e.$set(e.activeData.props.props, "value", t)
                        }, expression: "activeData.props.props.value"
                    }
                })], 1), a("el-form-item", {attrs: {label: "子级键名"}}, [a("el-input", {
                    attrs: {placeholder: "请输入子级键名"},
                    model: {
                        value: e.activeData.props.props.children, callback: function (t) {
                            e.$set(e.activeData.props.props, "children", t)
                        }, expression: "activeData.props.props.children"
                    }
                })], 1)] : e._e()] : e._e(), "static" === e.activeData.__config__.dataType ? a("el-tree", {
                    attrs: {
                        draggable: "",
                        data: e.activeData.options,
                        "node-key": "id",
                        "expand-on-click-node": !1,
                        "render-content": e.renderContent
                    }
                }) : e._e(), "static" === e.activeData.__config__.dataType ? a("div", {staticStyle: {"margin-left": "20px"}}, [a("el-button", {
                    staticStyle: {"padding-bottom": "0"},
                    attrs: {icon: "el-icon-circle-plus-outline", type: "text"},
                    on: {click: e.addTreeItem}
                }, [e._v(" 添加父级 ")])], 1) : e._e(), a("el-divider")] : e._e(), void 0 !== e.activeData.__config__.optionType ? a("el-form-item", {attrs: {label: "选项样式"}}, [a("el-radio-group", {
                    model: {
                        value: e.activeData.__config__.optionType,
                        callback: function (t) {
                            e.$set(e.activeData.__config__, "optionType", t)
                        },
                        expression: "activeData.__config__.optionType"
                    }
                }, [a("el-radio-button", {attrs: {label: "default"}}, [e._v(" 默认 ")]), a("el-radio-button", {attrs: {label: "button"}}, [e._v(" 按钮 ")])], 1)], 1) : e._e(), void 0 !== e.activeData["active-color"] ? a("el-form-item", {attrs: {label: "开启颜色"}}, [a("el-color-picker", {
                    model: {
                        value: e.activeData["active-color"],
                        callback: function (t) {
                            e.$set(e.activeData, "active-color", t)
                        },
                        expression: "activeData['active-color']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["inactive-color"] ? a("el-form-item", {attrs: {label: "关闭颜色"}}, [a("el-color-picker", {
                    model: {
                        value: e.activeData["inactive-color"],
                        callback: function (t) {
                            e.$set(e.activeData, "inactive-color", t)
                        },
                        expression: "activeData['inactive-color']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.__config__.showLabel && void 0 !== e.activeData.__config__.labelWidth ? a("el-form-item", {attrs: {label: "显示标签"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.__config__.showLabel,
                        callback: function (t) {
                            e.$set(e.activeData.__config__, "showLabel", t)
                        },
                        expression: "activeData.__config__.showLabel"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.branding ? a("el-form-item", {attrs: {label: "品牌烙印"}}, [a("el-switch", {
                    on: {input: e.changeRenderKey},
                    model: {
                        value: e.activeData.branding, callback: function (t) {
                            e.$set(e.activeData, "branding", t)
                        }, expression: "activeData.branding"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["allow-half"] ? a("el-form-item", {attrs: {label: "允许半选"}}, [a("el-switch", {
                    model: {
                        value: e.activeData["allow-half"],
                        callback: function (t) {
                            e.$set(e.activeData, "allow-half", t)
                        },
                        expression: "activeData['allow-half']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["show-text"] ? a("el-form-item", {attrs: {label: "辅助文字"}}, [a("el-switch", {
                    on: {change: e.rateTextChange},
                    model: {
                        value: e.activeData["show-text"], callback: function (t) {
                            e.$set(e.activeData, "show-text", t)
                        }, expression: "activeData['show-text']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["show-score"] ? a("el-form-item", {attrs: {label: "显示分数"}}, [a("el-switch", {
                    on: {change: e.rateScoreChange},
                    model: {
                        value: e.activeData["show-score"], callback: function (t) {
                            e.$set(e.activeData, "show-score", t)
                        }, expression: "activeData['show-score']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["show-stops"] ? a("el-form-item", {attrs: {label: "显示间断点"}}, [a("el-switch", {
                    model: {
                        value: e.activeData["show-stops"],
                        callback: function (t) {
                            e.$set(e.activeData, "show-stops", t)
                        },
                        expression: "activeData['show-stops']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.range ? a("el-form-item", {attrs: {label: "范围选择"}}, [a("el-switch", {
                    on: {change: e.rangeChange},
                    model: {
                        value: e.activeData.range, callback: function (t) {
                            e.$set(e.activeData, "range", t)
                        }, expression: "activeData.range"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.__config__.border && "default" === e.activeData.__config__.optionType ? a("el-form-item", {attrs: {label: "是否带边框"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.__config__.border,
                        callback: function (t) {
                            e.$set(e.activeData.__config__, "border", t)
                        },
                        expression: "activeData.__config__.border"
                    }
                })], 1) : e._e(), "el-color-picker" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "颜色格式"}}, [a("el-select", {
                    style: {width: "100%"},
                    attrs: {placeholder: "请选择颜色格式", clearable: ""},
                    on: {change: e.colorFormatChange},
                    model: {
                        value: e.activeData["color-format"], callback: function (t) {
                            e.$set(e.activeData, "color-format", t)
                        }, expression: "activeData['color-format']"
                    }
                }, e._l(e.colorFormatOptions, (function (e, t) {
                    return a("el-option", {key: t, attrs: {label: e.label, value: e.value}})
                })), 1)], 1) : e._e(), void 0 === e.activeData.size || "button" !== e.activeData.__config__.optionType && !e.activeData.__config__.border && "el-color-picker" !== e.activeData.__config__.tag && "el-button" !== e.activeData.__config__.tag ? e._e() : a("el-form-item", {attrs: {label: "组件尺寸"}}, [a("el-radio-group", {
                    model: {
                        value: e.activeData.size,
                        callback: function (t) {
                            e.$set(e.activeData, "size", t)
                        },
                        expression: "activeData.size"
                    }
                }, [a("el-radio-button", {attrs: {label: "medium"}}, [e._v(" 中等 ")]), a("el-radio-button", {attrs: {label: "small"}}, [e._v(" 较小 ")]), a("el-radio-button", {attrs: {label: "mini"}}, [e._v(" 迷你 ")])], 1)], 1), void 0 !== e.activeData["show-word-limit"] ? a("el-form-item", {attrs: {label: "输入统计"}}, [a("el-switch", {
                    model: {
                        value: e.activeData["show-word-limit"],
                        callback: function (t) {
                            e.$set(e.activeData, "show-word-limit", t)
                        },
                        expression: "activeData['show-word-limit']"
                    }
                })], 1) : e._e(), "el-input-number" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "严格步数"}}, [a("el-switch", {
                    model: {
                        value: e.activeData["step-strictly"],
                        callback: function (t) {
                            e.$set(e.activeData, "step-strictly", t)
                        },
                        expression: "activeData['step-strictly']"
                    }
                })], 1) : e._e(), "el-cascader" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "任选层级"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.props.props.checkStrictly,
                        callback: function (t) {
                            e.$set(e.activeData.props.props, "checkStrictly", t)
                        },
                        expression: "activeData.props.props.checkStrictly"
                    }
                })], 1) : e._e(), "el-cascader" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "是否多选"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.props.props.multiple,
                        callback: function (t) {
                            e.$set(e.activeData.props.props, "multiple", t)
                        },
                        expression: "activeData.props.props.multiple"
                    }
                })], 1) : e._e(), "el-cascader" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "展示全路径"}}, [a("el-switch", {
                    model: {
                        value: e.activeData["show-all-levels"],
                        callback: function (t) {
                            e.$set(e.activeData, "show-all-levels", t)
                        },
                        expression: "activeData['show-all-levels']"
                    }
                })], 1) : e._e(), "el-cascader" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "可否筛选"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.filterable,
                        callback: function (t) {
                            e.$set(e.activeData, "filterable", t)
                        },
                        expression: "activeData.filterable"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.clearable ? a("el-form-item", {attrs: {label: "能否清空"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.clearable,
                        callback: function (t) {
                            e.$set(e.activeData, "clearable", t)
                        },
                        expression: "activeData.clearable"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.__config__.showTip ? a("el-form-item", {attrs: {label: "显示提示"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.__config__.showTip,
                        callback: function (t) {
                            e.$set(e.activeData.__config__, "showTip", t)
                        },
                        expression: "activeData.__config__.showTip"
                    }
                })], 1) : e._e(), "el-upload" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "多选文件"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.multiple,
                        callback: function (t) {
                            e.$set(e.activeData, "multiple", t)
                        },
                        expression: "activeData.multiple"
                    }
                })], 1) : e._e(), void 0 !== e.activeData["auto-upload"] ? a("el-form-item", {attrs: {label: "自动上传"}}, [a("el-switch", {
                    model: {
                        value: e.activeData["auto-upload"],
                        callback: function (t) {
                            e.$set(e.activeData, "auto-upload", t)
                        },
                        expression: "activeData['auto-upload']"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.readonly ? a("el-form-item", {attrs: {label: "是否只读"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.readonly,
                        callback: function (t) {
                            e.$set(e.activeData, "readonly", t)
                        },
                        expression: "activeData.readonly"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.disabled ? a("el-form-item", {attrs: {label: "是否禁用"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.disabled,
                        callback: function (t) {
                            e.$set(e.activeData, "disabled", t)
                        },
                        expression: "activeData.disabled"
                    }
                })], 1) : e._e(), "el-select" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "能否搜索"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.filterable,
                        callback: function (t) {
                            e.$set(e.activeData, "filterable", t)
                        },
                        expression: "activeData.filterable"
                    }
                })], 1) : e._e(), "el-select" === e.activeData.__config__.tag ? a("el-form-item", {attrs: {label: "是否多选"}}, [a("el-switch", {
                    on: {change: e.multipleChange},
                    model: {
                        value: e.activeData.multiple, callback: function (t) {
                            e.$set(e.activeData, "multiple", t)
                        }, expression: "activeData.multiple"
                    }
                })], 1) : e._e(), void 0 !== e.activeData.__config__.required ? a("el-form-item", {attrs: {label: "是否必填"}}, [a("el-switch", {
                    model: {
                        value: e.activeData.__config__.required,
                        callback: function (t) {
                            e.$set(e.activeData.__config__, "required", t)
                        },
                        expression: "activeData.__config__.required"
                    }
                })], 1) : e._e(), e.activeData.__config__.layoutTree ? [a("el-divider", [e._v("布局结构树")]), a("el-tree", {
                    attrs: {
                        data: [e.activeData.__config__],
                        props: e.layoutTreeProps,
                        "node-key": "renderKey",
                        "default-expand-all": "",
                        draggable: ""
                    }, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            var o = t.node, n = t.data;
                            return a("span", {}, [a("span", {staticClass: "node-label"}, [a("svg-icon", {
                                staticClass: "node-icon",
                                attrs: {"icon-class": n.__config__ ? n.__config__.tagIcon : n.tagIcon}
                            }), e._v(" " + e._s(o.label) + " ")], 1)])
                        }
                    }], null, !1, 3924665115)
                })] : e._e(), Array.isArray(e.activeData.__config__.regList) ? [a("el-divider", [e._v("正则校验")]), e._l(e.activeData.__config__.regList, (function (t, o) {
                    return a("div", {key: o, staticClass: "reg-item"}, [a("span", {
                        staticClass: "close-btn",
                        on: {
                            click: function (t) {
                                return e.activeData.__config__.regList.splice(o, 1)
                            }
                        }
                    }, [a("i", {staticClass: "el-icon-close"})]), a("el-form-item", {attrs: {label: "表达式"}}, [a("el-input", {
                        attrs: {placeholder: "请输入正则"},
                        model: {
                            value: t.pattern, callback: function (a) {
                                e.$set(t, "pattern", a)
                            }, expression: "item.pattern"
                        }
                    })], 1), a("el-form-item", {
                        staticStyle: {"margin-bottom": "0"},
                        attrs: {label: "错误提示"}
                    }, [a("el-input", {
                        attrs: {placeholder: "请输入错误提示"},
                        model: {
                            value: t.message, callback: function (a) {
                                e.$set(t, "message", a)
                            }, expression: "item.message"
                        }
                    })], 1)], 1)
                })), a("div", {staticStyle: {"margin-left": "20px"}}, [a("el-button", {
                    attrs: {
                        icon: "el-icon-circle-plus-outline",
                        type: "text"
                    }, on: {click: e.addReg}
                }, [e._v(" 添加规则 ")])], 1)] : e._e()], 2), a("el-form", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "form" === e.currentTab,
                        expression: "currentTab === 'form'"
                    }], attrs: {size: "small", "label-width": "90px"}
                }, [a("el-form-item", {attrs: {label: "表单名"}}, [a("el-input", {
                    attrs: {placeholder: "请输入表单名（ref）"},
                    model: {
                        value: e.formConf.formRef, callback: function (t) {
                            e.$set(e.formConf, "formRef", t)
                        }, expression: "formConf.formRef"
                    }
                })], 1), a("el-form-item", {attrs: {label: "表单模型"}}, [a("el-input", {
                    attrs: {placeholder: "请输入数据模型"},
                    model: {
                        value: e.formConf.formModel, callback: function (t) {
                            e.$set(e.formConf, "formModel", t)
                        }, expression: "formConf.formModel"
                    }
                })], 1), a("el-form-item", {attrs: {label: "校验模型"}}, [a("el-input", {
                    attrs: {placeholder: "请输入校验模型"},
                    model: {
                        value: e.formConf.formRules, callback: function (t) {
                            e.$set(e.formConf, "formRules", t)
                        }, expression: "formConf.formRules"
                    }
                })], 1), a("el-form-item", {attrs: {label: "表单尺寸"}}, [a("el-radio-group", {
                    model: {
                        value: e.formConf.size,
                        callback: function (t) {
                            e.$set(e.formConf, "size", t)
                        },
                        expression: "formConf.size"
                    }
                }, [a("el-radio-button", {attrs: {label: "medium"}}, [e._v(" 中等 ")]), a("el-radio-button", {attrs: {label: "small"}}, [e._v(" 较小 ")]), a("el-radio-button", {attrs: {label: "mini"}}, [e._v(" 迷你 ")])], 1)], 1), a("el-form-item", {attrs: {label: "标签对齐"}}, [a("el-radio-group", {
                    model: {
                        value: e.formConf.labelPosition,
                        callback: function (t) {
                            e.$set(e.formConf, "labelPosition", t)
                        },
                        expression: "formConf.labelPosition"
                    }
                }, [a("el-radio-button", {attrs: {label: "left"}}, [e._v(" 左对齐 ")]), a("el-radio-button", {attrs: {label: "right"}}, [e._v(" 右对齐 ")]), a("el-radio-button", {attrs: {label: "top"}}, [e._v(" 顶部对齐 ")])], 1)], 1), a("el-form-item", {attrs: {label: "标签宽度"}}, [a("el-input", {
                    attrs: {
                        type: "number",
                        placeholder: "请输入标签宽度"
                    }, model: {
                        value: e.formConf.labelWidth, callback: function (t) {
                            e.$set(e.formConf, "labelWidth", e._n(t))
                        }, expression: "formConf.labelWidth"
                    }
                })], 1), a("el-form-item", {attrs: {label: "栅格间隔"}}, [a("el-input-number", {
                    attrs: {
                        min: 0,
                        placeholder: "栅格间隔"
                    }, model: {
                        value: e.formConf.gutter, callback: function (t) {
                            e.$set(e.formConf, "gutter", t)
                        }, expression: "formConf.gutter"
                    }
                })], 1), a("el-form-item", {attrs: {label: "禁用表单"}}, [a("el-switch", {
                    model: {
                        value: e.formConf.disabled,
                        callback: function (t) {
                            e.$set(e.formConf, "disabled", t)
                        },
                        expression: "formConf.disabled"
                    }
                })], 1), a("el-form-item", {attrs: {label: "表单按钮"}}, [a("el-switch", {
                    model: {
                        value: e.formConf.formBtns,
                        callback: function (t) {
                            e.$set(e.formConf, "formBtns", t)
                        },
                        expression: "formConf.formBtns"
                    }
                })], 1), a("el-form-item", {attrs: {label: "显示未选中组件边框"}}, [a("el-switch", {
                    model: {
                        value: e.formConf.unFocusedComponentBorder,
                        callback: function (t) {
                            e.$set(e.formConf, "unFocusedComponentBorder", t)
                        },
                        expression: "formConf.unFocusedComponentBorder"
                    }
                })], 1)], 1)], 1)], 1), a("treeNode-dialog", {
                    attrs: {visible: e.dialogVisible, title: "添加选项"},
                    on: {
                        "update:visible": function (t) {
                            e.dialogVisible = t
                        }, commit: e.addNode
                    }
                }), a("icons-dialog", {
                    attrs: {visible: e.iconsVisible, current: e.activeData[e.currentIconModel]},
                    on: {
                        "update:visible": function (t) {
                            e.iconsVisible = t
                        }, select: e.setIcon
                    }
                })], 1)
            }, Ee = [], Le = (a("3c75"), a("49a5")), Te = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", [a("el-dialog", e._g(e._b({
                    attrs: {"close-on-click-modal": !1, "modal-append-to-body": !1},
                    on: {open: e.onOpen, close: e.onClose}
                }, "el-dialog", e.$attrs, !1), e.$listeners), [a("el-row", {attrs: {gutter: 0}}, [a("el-form", {
                    ref: "elForm",
                    attrs: {model: e.formData, rules: e.rules, size: "small", "label-width": "100px"}
                }, [a("el-col", {attrs: {span: 24}}, [a("el-form-item", {
                    attrs: {
                        label: "选项名",
                        prop: "label"
                    }
                }, [a("el-input", {
                    attrs: {placeholder: "请输入选项名", clearable: ""},
                    model: {
                        value: e.formData.label, callback: function (t) {
                            e.$set(e.formData, "label", t)
                        }, expression: "formData.label"
                    }
                })], 1)], 1), a("el-col", {attrs: {span: 24}}, [a("el-form-item", {
                    attrs: {
                        label: "选项值",
                        prop: "value"
                    }
                }, [a("el-input", {
                    attrs: {placeholder: "请输入选项值", clearable: ""},
                    model: {
                        value: e.formData.value, callback: function (t) {
                            e.$set(e.formData, "value", t)
                        }, expression: "formData.value"
                    }
                }, [a("el-select", {
                    style: {width: "100px"},
                    attrs: {slot: "append"},
                    slot: "append",
                    model: {
                        value: e.dataType, callback: function (t) {
                            e.dataType = t
                        }, expression: "dataType"
                    }
                }, e._l(e.dataTypeOptions, (function (e, t) {
                    return a("el-option", {key: t, attrs: {label: e.label, value: e.value, disabled: e.disabled}})
                })), 1)], 1)], 1)], 1)], 1)], 1), a("div", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.handelConfirm}
                }, [e._v(" 确定 ")]), a("el-button", {on: {click: e.close}}, [e._v(" 取消 ")])], 1)], 1)], 1)
            }, ze = [], $e = "drawingItems", Pe = "1.2", Be = "DRAWING_ITEMS_VERSION", Re = "idGlobal", Ve = "treeNodeId",
            Ae = "formConf";

        function Se() {
            var e = localStorage.getItem(Be);
            if (e !== Pe) return localStorage.setItem(Be, Pe), Fe([]), null;
            var t = localStorage.getItem($e);
            return t ? JSON.parse(t) : null
        }

        function Fe(e) {
            localStorage.setItem($e, JSON.stringify(e))
        }

        function Ne() {
            var e = localStorage.getItem(Re);
            return e ? parseInt(e, 10) : 100
        }

        function qe(e) {
            localStorage.setItem(Re, "".concat(e))
        }

        function We() {
            var e = localStorage.getItem(Ve);
            return e ? parseInt(e, 10) : 100
        }

        function Ue(e) {
            localStorage.setItem(Ve, "".concat(e))
        }

        function Ke() {
            var e = localStorage.getItem(Ae);
            return e ? JSON.parse(e) : null
        }

        function He(e) {
            localStorage.setItem(Ae, JSON.stringify(e))
        }

        var Ge = We(), Je = {
            components: {}, inheritAttrs: !1, props: [], data: function () {
                return {
                    id: Ge,
                    formData: {label: void 0, value: void 0},
                    rules: {
                        label: [{required: !0, message: "请输入选项名", trigger: "blur"}],
                        value: [{required: !0, message: "请输入选项值", trigger: "blur"}]
                    },
                    dataType: "string",
                    dataTypeOptions: [{label: "字符串", value: "string"}, {label: "数字", value: "number"}]
                }
            }, computed: {}, watch: {
                "formData.value": function (e) {
                    this.dataType = Object(ee["d"])(e) ? "number" : "string"
                }, id: function (e) {
                    Ue(e)
                }
            }, created: function () {
            }, mounted: function () {
            }, methods: {
                onOpen: function () {
                    this.formData = {label: void 0, value: void 0}
                }, onClose: function () {
                }, close: function () {
                    this.$emit("update:visible", !1)
                }, handelConfirm: function () {
                    var e = this;
                    this.$refs.elForm.validate((function (t) {
                        t && ("number" === e.dataType && (e.formData.value = parseFloat(e.formData.value)), e.formData.id = e.id++, e.$emit("commit", e.formData), e.close())
                    }))
                }
            }
        }, Ye = Je, Ze = Object(u["a"])(Ye, Te, ze, !1, null, "454850e0", null), Qe = Ze.exports, Xe = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "icon-dialog"}, [a("el-dialog", e._g(e._b({
                attrs: {
                    width: "980px",
                    "modal-append-to-body": !1
                }, on: {open: e.onOpen, close: e.onClose}
            }, "el-dialog", e.$attrs, !1), e.$listeners), [a("div", {
                attrs: {slot: "title"},
                slot: "title"
            }, [e._v(" 选择图标 "), a("el-input", {
                style: {width: "260px"},
                attrs: {size: "mini", placeholder: "请输入图标名称", "prefix-icon": "el-icon-search", clearable: ""},
                model: {
                    value: e.key, callback: function (t) {
                        e.key = t
                    }, expression: "key"
                }
            })], 1), a("ul", {staticClass: "icon-ul"}, e._l(e.iconList, (function (t) {
                return a("li", {
                    key: t, class: e.active === t ? "active-item" : "", on: {
                        click: function (a) {
                            return e.onSelect(t)
                        }
                    }
                }, [a("i", {class: t}), a("div", [e._v(e._s(t))])])
            })), 0)])], 1)
        }, et = [], tt = a("cfcd"), at = tt.map((function (e) {
            return "el-icon-".concat(e)
        })), ot = {
            inheritAttrs: !1, props: ["current"], data: function () {
                return {iconList: at, active: null, key: ""}
            }, watch: {
                key: function (e) {
                    this.iconList = e ? at.filter((function (t) {
                        return t.indexOf(e) > -1
                    })) : at
                }
            }, methods: {
                onOpen: function () {
                    this.active = this.current, this.key = ""
                }, onClose: function () {
                }, onSelect: function (e) {
                    this.active = e, this.$emit("select", e), this.$emit("update:visible", !1)
                }
            }
        }, nt = ot, it = (a("d8d7"), Object(u["a"])(nt, Xe, et, !1, null, "3ba3d51c", null)), lt = it.exports, ct = {
            formRef: "elForm",
            formModel: "formData",
            size: "medium",
            labelPosition: "right",
            labelWidth: 100,
            formRules: "rules",
            gutter: 15,
            disabled: !1,
            span: 24,
            formBtns: !0
        }, rt = [{
            __config__: {
                label: "单行文本",
                labelWidth: null,
                showLabel: !0,
                changeTag: !0,
                tag: "el-input",
                tagIcon: "input",
                defaultValue: void 0,
                required: !0,
                layout: "colFormItem",
                span: 24,
                document: "https://element.eleme.cn/#/zh-CN/component/input",
                regList: []
            },
            __slot__: {prepend: "", append: ""},
            placeholder: "请输入",
            style: {width: "100%"},
            clearable: !0,
            "prefix-icon": "",
            "suffix-icon": "",
            maxlength: null,
            "show-word-limit": !1,
            readonly: !1,
            disabled: !1
        }, {
            __config__: {
                label: "多行文本",
                labelWidth: null,
                showLabel: !0,
                tag: "el-input",
                tagIcon: "textarea",
                defaultValue: void 0,
                required: !0,
                layout: "colFormItem",
                span: 24,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/input"
            },
            type: "textarea",
            placeholder: "请输入",
            autosize: {minRows: 4, maxRows: 4},
            style: {width: "100%"},
            maxlength: null,
            "show-word-limit": !1,
            readonly: !1,
            disabled: !1
        }, {
            __config__: {
                label: "密码",
                showLabel: !0,
                labelWidth: null,
                changeTag: !0,
                tag: "el-input",
                tagIcon: "password",
                defaultValue: void 0,
                layout: "colFormItem",
                span: 24,
                required: !0,
                regList: [],
                document: "https://element.eleme.cn/#/zh-CN/component/input"
            },
            __slot__: {prepend: "", append: ""},
            placeholder: "请输入",
            "show-password": !0,
            style: {width: "100%"},
            clearable: !0,
            "prefix-icon": "",
            "suffix-icon": "",
            maxlength: null,
            "show-word-limit": !1,
            readonly: !1,
            disabled: !1
        }, {
            __config__: {
                label: "计数器",
                showLabel: !0,
                changeTag: !0,
                labelWidth: null,
                tag: "el-input-number",
                tagIcon: "number",
                defaultValue: void 0,
                span: 24,
                layout: "colFormItem",
                required: !0,
                regList: [],
                document: "https://element.eleme.cn/#/zh-CN/component/input-number"
            },
            placeholder: "",
            min: void 0,
            max: void 0,
            step: 1,
            "step-strictly": !1,
            precision: void 0,
            "controls-position": "",
            disabled: !1
        }, {
            __config__: {
                label: "编辑器",
                showLabel: !0,
                changeTag: !0,
                labelWidth: null,
                tag: "tinymce",
                tagIcon: "rich-text",
                defaultValue: null,
                span: 24,
                layout: "colFormItem",
                required: !0,
                regList: [],
                document: "http://tinymce.ax-z.cn"
            }, placeholder: "请输入", height: 300, branding: !1
        }], st = [{
            __config__: {
                label: "下拉选择",
                showLabel: !0,
                labelWidth: null,
                tag: "el-select",
                tagIcon: "select",
                layout: "colFormItem",
                span: 24,
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/select"
            },
            __slot__: {options: [{label: "选项一", value: 1}, {label: "选项二", value: 2}]},
            placeholder: "请选择",
            style: {width: "100%"},
            clearable: !0,
            disabled: !1,
            filterable: !1,
            multiple: !1
        }, {
            __config__: {
                label: "级联选择",
                url: "https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList",
                method: "get",
                dataPath: "list",
                dataConsumer: "options",
                showLabel: !0,
                labelWidth: null,
                tag: "el-cascader",
                tagIcon: "cascader",
                layout: "colFormItem",
                defaultValue: [],
                dataType: "dynamic",
                span: 24,
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/cascader"
            },
            options: [{id: 1, value: 1, label: "选项1", children: [{id: 2, value: 2, label: "选项1-1"}]}],
            placeholder: "请选择",
            style: {width: "100%"},
            props: {props: {multiple: !1, label: "label", value: "value", children: "children"}},
            "show-all-levels": !0,
            disabled: !1,
            clearable: !0,
            filterable: !1,
            separator: "/"
        }, {
            __config__: {
                label: "单选框组",
                labelWidth: null,
                showLabel: !0,
                tag: "el-radio-group",
                tagIcon: "radio",
                changeTag: !0,
                defaultValue: void 0,
                layout: "colFormItem",
                span: 24,
                optionType: "default",
                regList: [],
                required: !0,
                border: !1,
                document: "https://element.eleme.cn/#/zh-CN/component/radio"
            },
            __slot__: {options: [{label: "选项一", value: 1}, {label: "选项二", value: 2}]},
            style: {},
            size: "medium",
            disabled: !1
        }, {
            __config__: {
                label: "多选框组",
                tag: "el-checkbox-group",
                tagIcon: "checkbox",
                defaultValue: [],
                span: 24,
                showLabel: !0,
                labelWidth: null,
                layout: "colFormItem",
                optionType: "default",
                required: !0,
                regList: [],
                changeTag: !0,
                border: !1,
                document: "https://element.eleme.cn/#/zh-CN/component/checkbox"
            },
            __slot__: {options: [{label: "选项一", value: 1}, {label: "选项二", value: 2}]},
            style: {},
            size: "medium",
            min: null,
            max: null,
            disabled: !1
        }, {
            __config__: {
                label: "开关",
                tag: "el-switch",
                tagIcon: "switch",
                defaultValue: !1,
                span: 24,
                showLabel: !0,
                labelWidth: null,
                layout: "colFormItem",
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/switch"
            },
            style: {},
            disabled: !1,
            "active-text": "",
            "inactive-text": "",
            "active-color": null,
            "inactive-color": null,
            "active-value": !0,
            "inactive-value": !1
        }, {
            __config__: {
                label: "滑块",
                tag: "el-slider",
                tagIcon: "slider",
                defaultValue: null,
                span: 24,
                showLabel: !0,
                layout: "colFormItem",
                labelWidth: null,
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/slider"
            }, disabled: !1, min: 0, max: 100, step: 1, "show-stops": !1, range: !1
        }, {
            __config__: {
                label: "时间选择",
                tag: "el-time-picker",
                tagIcon: "time",
                defaultValue: null,
                span: 24,
                showLabel: !0,
                layout: "colFormItem",
                labelWidth: null,
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/time-picker"
            },
            placeholder: "请选择",
            style: {width: "100%"},
            disabled: !1,
            clearable: !0,
            "picker-options": {selectableRange: "00:00:00-23:59:59"},
            format: "HH:mm:ss",
            "value-format": "HH:mm:ss"
        }, {
            __config__: {
                label: "时间范围",
                tag: "el-time-picker",
                tagIcon: "time-range",
                span: 24,
                showLabel: !0,
                labelWidth: null,
                layout: "colFormItem",
                defaultValue: null,
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/time-picker"
            },
            style: {width: "100%"},
            disabled: !1,
            clearable: !0,
            "is-range": !0,
            "range-separator": "至",
            "start-placeholder": "开始时间",
            "end-placeholder": "结束时间",
            format: "HH:mm:ss",
            "value-format": "HH:mm:ss"
        }, {
            __config__: {
                label: "日期选择",
                tag: "el-date-picker",
                tagIcon: "date",
                defaultValue: null,
                showLabel: !0,
                labelWidth: null,
                span: 24,
                layout: "colFormItem",
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/date-picker"
            },
            placeholder: "请选择",
            type: "date",
            style: {width: "100%"},
            disabled: !1,
            clearable: !0,
            format: "yyyy-MM-dd",
            "value-format": "yyyy-MM-dd",
            readonly: !1
        }, {
            __config__: {
                label: "日期范围",
                tag: "el-date-picker",
                tagIcon: "date-range",
                defaultValue: null,
                span: 24,
                showLabel: !0,
                labelWidth: null,
                required: !0,
                layout: "colFormItem",
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/date-picker"
            },
            style: {width: "100%"},
            type: "daterange",
            "range-separator": "至",
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            disabled: !1,
            clearable: !0,
            format: "yyyy-MM-dd",
            "value-format": "yyyy-MM-dd",
            readonly: !1
        }, {
            __config__: {
                label: "评分",
                tag: "el-rate",
                tagIcon: "rate",
                defaultValue: 0,
                span: 24,
                showLabel: !0,
                labelWidth: null,
                layout: "colFormItem",
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/rate"
            }, style: {}, max: 5, "allow-half": !1, "show-text": !1, "show-score": !1, disabled: !1
        }, {
            __config__: {
                label: "颜色选择",
                tag: "el-color-picker",
                tagIcon: "color",
                span: 24,
                defaultValue: null,
                showLabel: !0,
                labelWidth: null,
                layout: "colFormItem",
                required: !0,
                regList: [],
                changeTag: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/color-picker"
            }, "show-alpha": !1, "color-format": "", disabled: !1, size: "medium"
        }, {
            __config__: {
                label: "上传",
                tag: "el-upload",
                tagIcon: "upload",
                layout: "colFormItem",
                defaultValue: null,
                showLabel: !0,
                labelWidth: null,
                required: !0,
                span: 24,
                showTip: !1,
                buttonText: "点击上传",
                regList: [],
                changeTag: !0,
                fileSize: 2,
                sizeUnit: "MB",
                document: "https://element.eleme.cn/#/zh-CN/component/upload"
            },
            __slot__: {"list-type": !0},
            action: "https://jsonplaceholder.typicode.com/posts/",
            disabled: !1,
            accept: "",
            name: "file",
            "auto-upload": !0,
            "list-type": "text",
            multiple: !1
        }], dt = [{
            __config__: {
                layout: "rowFormItem",
                tagIcon: "row",
                label: "行容器",
                layoutTree: !0,
                document: "https://element.eleme.cn/#/zh-CN/component/layout#row-attributes"
            }, type: "default", justify: "start", align: "top"
        }, {
            __config__: {
                label: "按钮",
                showLabel: !0,
                changeTag: !0,
                labelWidth: null,
                tag: "el-button",
                tagIcon: "button",
                span: 24,
                layout: "colFormItem",
                document: "https://element.eleme.cn/#/zh-CN/component/button"
            },
            __slot__: {default: "主要按钮"},
            type: "primary",
            icon: "el-icon-search",
            round: !1,
            size: "medium",
            plain: !1,
            circle: !1,
            disabled: !1
        }, {
            __config__: {
                layout: "colFormItem",
                tagIcon: "table",
                tag: "el-table",
                document: "https://element.eleme.cn/#/zh-CN/component/table",
                span: 24,
                formId: 101,
                renderKey: 1595761764203,
                componentName: "row101",
                showLabel: !0,
                changeTag: !0,
                labelWidth: null,
                label: "表格[开发中]",
                dataType: "dynamic",
                method: "get",
                dataPath: "list",
                dataConsumer: "data",
                url: "https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/tableData",
                children: [{
                    __config__: {layout: "raw", tag: "el-table-column", renderKey: 0xe836c21d0f9},
                    prop: "date",
                    label: "日期"
                }, {
                    __config__: {layout: "raw", tag: "el-table-column", renderKey: 0xe836c21d0f8},
                    prop: "address",
                    label: "地址"
                }, {
                    __config__: {layout: "raw", tag: "el-table-column", renderKey: 0xe836c21d0f7},
                    prop: "name",
                    label: "名称"
                }, {
                    __config__: {
                        layout: "raw",
                        tag: "el-table-column",
                        renderKey: 1595774496335,
                        children: [{
                            __config__: {
                                label: "按钮",
                                tag: "el-button",
                                tagIcon: "button",
                                layout: "raw",
                                renderKey: 1595779809901
                            },
                            __slot__: {default: "主要按钮"},
                            type: "primary",
                            icon: "el-icon-search",
                            round: !1,
                            size: "medium"
                        }]
                    }, label: "操作"
                }]
            },
            data: [],
            directives: [{name: "loading", value: !0}],
            border: !0,
            type: "default",
            justify: "start",
            align: "top"
        }], ut = {
            date: "yyyy-MM-dd",
            week: "yyyy 第 WW 周",
            month: "yyyy-MM",
            year: "yyyy",
            datetime: "yyyy-MM-dd HH:mm:ss",
            daterange: "yyyy-MM-dd",
            monthrange: "yyyy-MM",
            datetimerange: "yyyy-MM-dd HH:mm:ss"
        }, _t = ["tinymce"], pt = {
            components: {TreeNodeDialog: Qe, IconsDialog: lt},
            props: ["showField", "activeData", "formConf"],
            data: function () {
                return {
                    currentTab: "field",
                    currentNode: null,
                    dialogVisible: !1,
                    iconsVisible: !1,
                    currentIconModel: null,
                    dateTypeOptions: [{label: "日(date)", value: "date"}, {
                        label: "周(week)",
                        value: "week"
                    }, {label: "月(month)", value: "month"}, {label: "年(year)", value: "year"}, {
                        label: "日期时间(datetime)",
                        value: "datetime"
                    }],
                    dateRangeTypeOptions: [{label: "日期范围(daterange)", value: "daterange"}, {
                        label: "月范围(monthrange)",
                        value: "monthrange"
                    }, {label: "日期时间范围(datetimerange)", value: "datetimerange"}],
                    colorFormatOptions: [{label: "hex", value: "hex"}, {label: "rgb", value: "rgb"}, {
                        label: "rgba",
                        value: "rgba"
                    }, {label: "hsv", value: "hsv"}, {label: "hsl", value: "hsl"}],
                    justifyOptions: [{label: "start", value: "start"}, {label: "end", value: "end"}, {
                        label: "center",
                        value: "center"
                    }, {label: "space-around", value: "space-around"}, {
                        label: "space-between",
                        value: "space-between"
                    }],
                    layoutTreeProps: {
                        label: function (e, t) {
                            var a = e.__config__;
                            return e.componentName || "".concat(a.label, ": ").concat(e.__vModel__)
                        }
                    }
                }
            },
            computed: {
                documentLink: function () {
                    return this.activeData.__config__.document || "https://element.eleme.cn/#/zh-CN/component/installation"
                }, dateOptions: function () {
                    return void 0 !== this.activeData.type && "el-date-picker" === this.activeData.__config__.tag ? void 0 === this.activeData["start-placeholder"] ? this.dateTypeOptions : this.dateRangeTypeOptions : []
                }, tagList: function () {
                    return [{label: "输入型组件", options: rt}, {label: "选择型组件", options: st}]
                }, activeTag: function () {
                    return this.activeData.__config__.tag
                }, isShowMin: function () {
                    return ["el-input-number", "el-slider"].indexOf(this.activeTag) > -1
                }, isShowMax: function () {
                    return ["el-input-number", "el-slider", "el-rate"].indexOf(this.activeTag) > -1
                }, isShowStep: function () {
                    return ["el-input-number", "el-slider"].indexOf(this.activeTag) > -1
                }
            },
            watch: {
                formConf: {
                    handler: function (e) {
                        He(e)
                    }, deep: !0
                }
            },
            methods: {
                addReg: function () {
                    this.activeData.__config__.regList.push({pattern: "", message: ""})
                }, addSelectItem: function () {
                    this.activeData.__slot__.options.push({label: "", value: ""})
                }, addTreeItem: function () {
                    ++this.idGlobal, this.dialogVisible = !0, this.currentNode = this.activeData.options
                }, renderContent: function (e, t) {
                    var a = this, o = t.node, n = t.data;
                    t.store;
                    return e("div", {class: "custom-tree-node"}, [e("span", [o.label]), e("span", {class: "node-operation"}, [e("i", {
                        on: {
                            click: function () {
                                return a.append(n)
                            }
                        }, class: "el-icon-plus", attrs: {title: "添加"}
                    }), e("i", {
                        on: {
                            click: function () {
                                return a.remove(o, n)
                            }
                        }, class: "el-icon-delete", attrs: {title: "删除"}
                    })])])
                }, append: function (e) {
                    e.children || this.$set(e, "children", []), this.dialogVisible = !0, this.currentNode = e.children
                }, remove: function (e, t) {
                    this.activeData.__config__.defaultValue = [];
                    var a = e.parent, o = a.data.children || a.data, n = o.findIndex((function (e) {
                        return e.id === t.id
                    }));
                    o.splice(n, 1)
                }, addNode: function (e) {
                    this.currentNode.push(e)
                }, setOptionValue: function (e, t) {
                    e.value = Object(ee["d"])(t) ? +t : t
                }, setDefaultValue: function (e) {
                    return Array.isArray(e) ? e.join(",") : "boolean" === typeof e ? "".concat(e) : e
                }, onDefaultValueInput: function (e) {
                    Object(Le["isArray"])(this.activeData.__config__.defaultValue) ? this.$set(this.activeData.__config__, "defaultValue", e.split(",").map((function (e) {
                        return Object(ee["d"])(e) ? +e : e
                    }))) : ["true", "false"].indexOf(e) > -1 ? this.$set(this.activeData.__config__, "defaultValue", JSON.parse(e)) : this.$set(this.activeData.__config__, "defaultValue", Object(ee["d"])(e) ? +e : e)
                }, onSwitchValueInput: function (e, t) {
                    ["true", "false"].indexOf(e) > -1 ? this.$set(this.activeData, t, JSON.parse(e)) : this.$set(this.activeData, t, Object(ee["d"])(e) ? +e : e)
                }, setTimeValue: function (e, t) {
                    var a = "week" === t ? ut.date : e;
                    this.$set(this.activeData.__config__, "defaultValue", null), this.$set(this.activeData, "value-format", a), this.$set(this.activeData, "format", e)
                }, spanChange: function (e) {
                    this.formConf.span = e
                }, multipleChange: function (e) {
                    this.$set(this.activeData.__config__, "defaultValue", e ? [] : "")
                }, dateTypeChange: function (e) {
                    this.setTimeValue(ut[e], e)
                }, rangeChange: function (e) {
                    this.$set(this.activeData.__config__, "defaultValue", e ? [this.activeData.min, this.activeData.max] : this.activeData.min)
                }, rateTextChange: function (e) {
                    e && (this.activeData["show-score"] = !1)
                }, rateScoreChange: function (e) {
                    e && (this.activeData["show-text"] = !1)
                }, colorFormatChange: function (e) {
                    this.activeData.__config__.defaultValue = null, this.activeData["show-alpha"] = e.indexOf("a") > -1, this.activeData.__config__.renderKey = +new Date
                }, openIconsDialog: function (e) {
                    this.iconsVisible = !0, this.currentIconModel = e
                }, setIcon: function (e) {
                    this.activeData[this.currentIconModel] = e
                }, tagChange: function (e) {
                    var t = rt.find((function (t) {
                        return t.__config__.tagIcon === e
                    }));
                    t || (t = st.find((function (t) {
                        return t.__config__.tagIcon === e
                    }))), this.$emit("tag-change", t)
                }, changeRenderKey: function () {
                    _t.includes(this.activeData.__config__.tag) && (this.activeData.__config__.renderKey = +new Date)
                }
            }
        }, ft = pt, mt = (a("3d38"), Object(u["a"])(ft, Ie, Ee, !1, null, "48152a99", null)), vt = mt.exports, ht = [{
            __config__: {
                label: "单行文本",
                labelWidth: null,
                showLabel: !0,
                changeTag: !0,
                tag: "el-input",
                tagIcon: "input",
                defaultValue: void 0,
                required: !0,
                layout: "colFormItem",
                span: 24,
                document: "https://element.eleme.cn/#/zh-CN/component/input",
                regList: [{pattern: "/^1(3|4|5|7|8|9)\\d{9}$/", message: "手机号格式错误"}]
            },
            __slot__: {prepend: "", append: ""},
            __vModel__: "mobile",
            placeholder: "请输入手机号",
            style: {width: "100%"},
            clearable: !0,
            "prefix-icon": "el-icon-mobile",
            "suffix-icon": "",
            maxlength: 11,
            "show-word-limit": !0,
            readonly: !1,
            disabled: !1
        }], bt = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", [a("el-dialog", e._g(e._b({
                attrs: {
                    width: "500px",
                    "close-on-click-modal": !1,
                    "modal-append-to-body": !1
                }, on: {open: e.onOpen, close: e.onClose}
            }, "el-dialog", e.$attrs, !1), e.$listeners), [a("el-row", {attrs: {gutter: 15}}, [a("el-form", {
                ref: "elForm",
                attrs: {model: e.formData, rules: e.rules, size: "medium", "label-width": "100px"}
            }, [a("el-col", {attrs: {span: 24}}, [a("el-form-item", {
                attrs: {
                    label: "生成类型",
                    prop: "type"
                }
            }, [a("el-radio-group", {
                model: {
                    value: e.formData.type, callback: function (t) {
                        e.$set(e.formData, "type", t)
                    }, expression: "formData.type"
                }
            }, e._l(e.typeOptions, (function (t, o) {
                return a("el-radio-button", {
                    key: o,
                    attrs: {label: t.value, disabled: t.disabled}
                }, [e._v(" " + e._s(t.label) + " ")])
            })), 1)], 1), e.showFileName ? a("el-form-item", {
                attrs: {
                    label: "文件名",
                    prop: "fileName"
                }
            }, [a("el-input", {
                attrs: {placeholder: "请输入文件名", clearable: ""},
                model: {
                    value: e.formData.fileName, callback: function (t) {
                        e.$set(e.formData, "fileName", t)
                    }, expression: "formData.fileName"
                }
            })], 1) : e._e()], 1)], 1)], 1), a("div", {
                attrs: {slot: "footer"},
                slot: "footer"
            }, [a("el-button", {on: {click: e.close}}, [e._v(" 取消 ")]), a("el-button", {
                attrs: {type: "primary"},
                on: {click: e.handelConfirm}
            }, [e._v(" 确定 ")])], 1)], 1)], 1)
        }, gt = [], wt = {
            inheritAttrs: !1, props: ["showFileName"], data: function () {
                return {
                    formData: {fileName: void 0, type: "file"},
                    rules: {
                        fileName: [{required: !0, message: "请输入文件名", trigger: "blur"}],
                        type: [{required: !0, message: "生成类型不能为空", trigger: "change"}]
                    },
                    typeOptions: [{label: "页面", value: "file"}, {label: "弹窗", value: "dialog"}]
                }
            }, computed: {}, watch: {}, mounted: function () {
            }, methods: {
                onOpen: function () {
                    this.showFileName && (this.formData.fileName = "".concat(+new Date, ".vue"))
                }, onClose: function () {
                }, close: function (e) {
                    this.$emit("update:visible", !1)
                }, handelConfirm: function () {
                    var e = this;
                    this.$refs.elForm.validate((function (t) {
                        t && (e.$emit("confirm", Object(g["a"])({}, e.formData)), e.close())
                    }))
                }
            }
        }, yt = wt, Dt = Object(u["a"])(yt, bt, gt, !1, null, "5c9eaea8", null), xt = Dt.exports, kt = {
            itemBtns: function (e, t, a, o) {
                var n = this.$listeners, i = n.copyItem, l = n.deleteItem;
                return [e("span", {
                    class: "drawing-item-copy", attrs: {title: "复制"}, on: {
                        click: function (e) {
                            i(t, o), e.stopPropagation()
                        }
                    }
                }, [e("i", {class: "el-icon-copy-document"})]), e("span", {
                    class: "drawing-item-delete",
                    attrs: {title: "删除"},
                    on: {
                        click: function (e) {
                            l(a, o), e.stopPropagation()
                        }
                    }
                }, [e("i", {class: "el-icon-delete"})])]
            }
        }, Ct = {
            colFormItem: function (e, t, a, o) {
                var n = this, i = this.$listeners.activeItem, l = t.__config__, c = Ot.apply(this, arguments),
                    r = this.activeId === l.formId ? "drawing-item active-from-item" : "drawing-item";
                this.formConf.unFocusedComponentBorder && (r += " unfocus-bordered");
                var s = l.labelWidth ? "".concat(l.labelWidth, "px") : null;
                return !1 === l.showLabel && (s = "0"), e("el-col", {
                    attrs: {span: l.span},
                    class: r,
                    nativeOn: {
                        click: function (e) {
                            i(t), e.stopPropagation()
                        }
                    }
                }, [e("el-form-item", {
                    attrs: {
                        "label-width": s,
                        label: l.showLabel ? l.label : "",
                        required: l.required
                    }
                }, [e(O["a"], {
                    key: l.renderKey, attrs: {conf: t}, on: {
                        input: function (e) {
                            n.$set(l, "defaultValue", e)
                        }
                    }
                }, [c])]), kt.itemBtns.apply(this, arguments)])
            }, rowFormItem: function (e, t, a, o) {
                var n = this.$listeners.activeItem, i = t.__config__,
                    l = this.activeId === i.formId ? "drawing-row-item active-from-item" : "drawing-row-item",
                    c = Ot.apply(this, arguments);
                return "flex" === t.type && (c = e("el-row", {
                    attrs: {
                        type: t.type,
                        justify: t.justify,
                        align: t.align
                    }
                }, [c])), e("el-col", {attrs: {span: i.span}}, [e("el-row", {
                    attrs: {gutter: i.gutter},
                    class: l,
                    nativeOn: {
                        click: function (e) {
                            n(t), e.stopPropagation()
                        }
                    }
                }, [e("span", {class: "component-name"}, [i.componentName]), e(y.a, {
                    attrs: {
                        list: i.children || [],
                        animation: 340,
                        group: "componentsGroup"
                    }, class: "drag-wrapper"
                }, [c]), kt.itemBtns.apply(this, arguments)])])
            }, raw: function (e, t, a, o) {
                var n = this, i = t.__config__, l = Ot.apply(this, arguments);
                return e(O["a"], {
                    key: i.renderKey, attrs: {conf: t}, on: {
                        input: function (e) {
                            n.$set(i, "defaultValue", e)
                        }
                    }
                }, [l])
            }
        };

        function Ot(e, t, a, o) {
            var n = this, i = t.__config__;
            return Array.isArray(i.children) ? i.children.map((function (t, a) {
                var o = Ct[t.__config__.layout];
                return o ? o.call(n, e, t, a, i.children) : Mt.call(n)
            })) : null
        }

        function Mt() {
            throw new Error("没有与".concat(this.currentItem.__config__.layout, "匹配的layout"))
        }

        var jt, It, Et, Lt, Tt, zt = {
                components: {render: O["a"], draggable: y.a},
                props: ["currentItem", "index", "drawingList", "activeId", "formConf"],
                render: function (e) {
                    var t = Ct[this.currentItem.__config__.layout];
                    return t ? t.call(this, e, this.currentItem, this.index, this.drawingList) : Mt.call(this)
                }
            }, $t = zt, Pt = Object(u["a"])($t, jt, It, !1, null, null, null), Bt = Pt.exports, Rt = Se(), Vt = Ke(),
            At = Ne(), St = {
                components: {
                    draggable: y.a,
                    render: O["a"],
                    FormDrawer: De,
                    JsonDrawer: je,
                    RightPanel: vt,
                    CodeTypeDialog: xt,
                    DraggableItem: Bt
                }, data: function () {
                    return {
                        idGlobal: At,
                        formConf: ct,
                        inputComponents: rt,
                        selectComponents: st,
                        layoutComponents: dt,
                        labelWidth: 100,
                        drawingList: ht,
                        drawingData: {},
                        activeId: ht[0].formId,
                        drawerVisible: !1,
                        formData: {},
                        dialogVisible: !1,
                        jsonDrawerVisible: !1,
                        generateConf: null,
                        showFileName: !1,
                        activeData: ht[0],
                        saveDrawingListDebounce: Object(D["debounce"])(340, Fe),
                        saveIdGlobalDebounce: Object(D["debounce"])(340, qe),
                        leftComponents: [{title: "输入型组件", list: rt}, {title: "选择型组件", list: st}, {title: "布局型组件", list: dt}]
                    }
                }, computed: {}, watch: {
                    "activeData.__config__.label": function (e, t) {
                        void 0 !== this.activeData.placeholder && this.activeData.__config__.tag && Lt === this.activeId && (this.activeData.placeholder = this.activeData.placeholder.replace(t, "") + e)
                    }, activeId: {
                        handler: function (e) {
                            Lt = e
                        }, immediate: !0
                    }, drawingList: {
                        handler: function (e) {
                            this.saveDrawingListDebounce(e), 0 === e.length && (this.idGlobal = 100)
                        }, deep: !0
                    }, idGlobal: {
                        handler: function (e) {
                            this.saveIdGlobalDebounce(e)
                        }, immediate: !0
                    }
                }, mounted: function () {
                    var e = this;
                    Array.isArray(Rt) && Rt.length > 0 ? this.drawingList = Rt : this.drawingList = ht, this.activeFormItem(this.drawingList[0]), Vt && (this.formConf = Vt), _e((function (e) {
                        Et = e
                    }));
                    var t = new C.a("#copyNode", {
                        text: function (t) {
                            var a = e.generateCode();
                            return e.$notify({title: "成功", message: "代码已复制到剪切板，可粘贴。", type: "success"}), a
                        }
                    });
                    t.on("error", (function (t) {
                        e.$message.error("代码复制失败")
                    }))
                }, methods: {
                    setObjectValueReduce: function (e, t, a) {
                        var o = t.split(".");
                        o.reduce((function (e, t, n) {
                            return o.length === n + 1 ? e[t] = a : Object(ee["e"])(e[t]) || (e[t] = {}), e[t]
                        }), e)
                    }, setRespData: function (e, t) {
                        var a = e.__config__, o = a.dataPath, n = a.renderKey, i = a.dataConsumer;
                        if (o && i) {
                            var l = o.split(".").reduce((function (e, t) {
                                return e[t]
                            }), t);
                            this.setObjectValueReduce(e, i, l);
                            var c = this.drawingList.findIndex((function (e) {
                                return e.__config__.renderKey === n
                            }));
                            c > -1 && this.$set(this.drawingList, c, e)
                        }
                    }, fetchData: function (e) {
                        var t = this, a = e.__config__, o = a.dataType, n = a.method, i = a.url;
                        "dynamic" === o && n && i && (this.setLoading(e, !0), this.$axios({
                            method: n,
                            url: i
                        }).then((function (a) {
                            t.setLoading(e, !1), t.setRespData(e, a.data)
                        })))
                    }, setLoading: function (e, t) {
                        var a = e.directives;
                        if (Array.isArray(a)) {
                            var o = a.find((function (e) {
                                return "loading" === e.name
                            }));
                            o && (o.value = t)
                        }
                    }, activeFormItem: function (e) {
                        this.activeData = e, this.activeId = e.__config__.formId
                    }, onEnd: function (e) {
                        e.from !== e.to && (this.fetchData(Tt), this.activeData = Tt, this.activeId = this.idGlobal)
                    }, addComponent: function (e) {
                        var t = this.cloneComponent(e);
                        this.fetchData(t), this.drawingList.push(t), this.activeFormItem(t)
                    }, cloneComponent: function (e) {
                        var t = Object(ee["b"])(e), a = t.__config__;
                        return a.span = this.formConf.span, this.createIdAndKey(t), void 0 !== t.placeholder && (t.placeholder += a.label), Tt = t, Tt
                    }, createIdAndKey: function (e) {
                        var t = this, a = e.__config__;
                        return a.formId = ++this.idGlobal, a.renderKey = "".concat(a.formId).concat(+new Date), "colFormItem" === a.layout ? e.__vModel__ = "field".concat(this.idGlobal) : "rowFormItem" === a.layout && (a.componentName = "row".concat(this.idGlobal), !Array.isArray(a.children) && (a.children = []), delete a.label), Array.isArray(a.children) && (a.children = a.children.map((function (e) {
                            return t.createIdAndKey(e)
                        }))), e
                    }, AssembleFormData: function () {
                        this.formData = Object(g["a"])({fields: Object(ee["b"])(this.drawingList)}, this.formConf)
                    }, generate: function (e) {
                        var t = this["exec".concat(Object(ee["f"])(this.operationType))];
                        this.generateConf = e, t && t(e)
                    }, execRun: function (e) {
                        this.AssembleFormData(), this.drawerVisible = !0
                    }, execDownload: function (e) {
                        var t = this.generateCode(), a = new Blob([t], {type: "text/plain;charset=utf-8"});
                        Object(x["saveAs"])(a, e.fileName)
                    }, execCopy: function (e) {
                        document.getElementById("copyNode").click()
                    }, empty: function () {
                        var e = this;
                        this.$confirm("确定要清空所有组件吗？", "提示", {type: "warning"}).then((function () {
                            e.drawingList = [], e.idGlobal = 100
                        }))
                    }, drawingItemCopy: function (e, t) {
                        var a = Object(ee["b"])(e);
                        a = this.createIdAndKey(a), t.push(a), this.activeFormItem(a)
                    }, drawingItemDelete: function (e, t) {
                        var a = this;
                        t.splice(e, 1), this.$nextTick((function () {
                            var e = a.drawingList.length;
                            e && a.activeFormItem(a.drawingList[e - 1])
                        }))
                    }, generateCode: function () {
                        var e = this.generateConf.type;
                        this.AssembleFormData();
                        var t = z(Object(G["a"])(this.formData, e)), a = T(H(this.formData, e)), o = $(Z(this.formData));
                        return Et.html(a + t + o, ee["a"].html)
                    }, showJson: function () {
                        this.AssembleFormData(), this.jsonDrawerVisible = !0
                    }, download: function () {
                        this.dialogVisible = !0, this.showFileName = !0, this.operationType = "download"
                    }, run: function () {
                        this.dialogVisible = !0, this.showFileName = !1, this.operationType = "run"
                    }, copy: function () {
                        this.dialogVisible = !0, this.showFileName = !1, this.operationType = "copy"
                    }, tagChange: function (e) {
                        var t = this;
                        e = this.cloneComponent(e);
                        var a = e.__config__;
                        e.__vModel__ = this.activeData.__vModel__, a.formId = this.activeId, a.span = this.activeData.__config__.span, this.activeData.__config__.tag = a.tag, this.activeData.__config__.tagIcon = a.tagIcon, this.activeData.__config__.document = a.document, Object(b["a"])(this.activeData.__config__.defaultValue) === Object(b["a"])(a.defaultValue) && (a.defaultValue = this.activeData.__config__.defaultValue), Object.keys(e).forEach((function (a) {
                            void 0 !== t.activeData[a] && (e[a] = t.activeData[a])
                        })), this.activeData = e, this.updateDrawingList(e, this.drawingList)
                    }, updateDrawingList: function (e, t) {
                        var a = this, o = t.findIndex((function (e) {
                            return e.__config__.formId === a.activeId
                        }));
                        o > -1 ? t.splice(o, 1, e) : t.forEach((function (t) {
                            Array.isArray(t.__config__.children) && a.updateDrawingList(e, t.__config__.children)
                        }))
                    }, refreshJson: function (e) {
                        this.drawingList = Object(ee["b"])(e.fields), delete e.fields, this.formConf = e
                    }
                }
            }, Ft = St, Nt = (a("6828"), Object(u["a"])(Ft, v, h, !1, null, null, null)), qt = Nt.exports;
        l.a.use(m.a);
        var Wt = [{path: "/", name: "home", component: qt}, {
            path: "/parser", name: "parser", component: function () {
                return a.e("parser-example").then(a.bind(null, "b8fa"))
            }
        }, {
            path: "/tinymce", name: "tinymce", component: function () {
                return a.e("tinymce-example").then(a.bind(null, "a5aa"))
            }
        }], Ut = new m.a({routes: Wt}), Kt = Ut, Ht = (a("b20f"), function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return e.isExternal ? a("div", e._g({
                staticClass: "svg-external-icon svg-icon",
                style: e.styleExternalIcon
            }, e.$listeners)) : a("svg", e._g({
                class: e.svgClass,
                attrs: {"aria-hidden": "true"}
            }, e.$listeners), [a("use", {attrs: {"xlink:href": e.iconName}})])
        }), Gt = [];

        function Jt(e) {
            return /^(https?:|mailto:|tel:)/.test(e)
        }

        var Yt = {
            name: "SvgIcon",
            props: {iconClass: {type: String, required: !0}, className: {type: String, default: ""}},
            computed: {
                isExternal: function () {
                    return Jt(this.iconClass)
                }, iconName: function () {
                    return "#icon-".concat(this.iconClass)
                }, svgClass: function () {
                    return this.className ? "svg-icon ".concat(this.className) : "svg-icon"
                }, styleExternalIcon: function () {
                    return {
                        mask: "url(".concat(this.iconClass, ") no-repeat 50% 50%"),
                        "-webkit-mask": "url(".concat(this.iconClass, ") no-repeat 50% 50%")
                    }
                }
            }
        }, Zt = Yt, Qt = (a("c2eb"), Object(u["a"])(Zt, Ht, Gt, !1, null, "19957a58", null)), Xt = Qt.exports;
        l.a.component("svg-icon", Xt);
        var ea = a("51ff"), ta = function (e) {
            return e.keys().map(e)
        };
        ta(ea);
        var aa = a("82ae"), oa = a.n(aa), na = a("31c6");
        l.a.component("tinymce", na["a"]), l.a.config.productionTip = !1, l.a.prototype.$axios = oa.a, new l.a({
            router: Kt,
            render: function (e) {
                return e(p)
            }
        }).$mount("#app")
    }, "8bbf": function (e, t) {
        e.exports = Vue
    }, 9413: function (e, t, a) {
        "use strict";
        a.r(t);
        a("9719");
        t["default"] = {
            options: function (e, t, a) {
                var o = [];
                return t.__slot__.options.forEach((function (a) {
                    "button" === t.__config__.optionType ? o.push(e("el-checkbox-button", {attrs: {label: a.value}}, [a.label])) : o.push(e("el-checkbox", {
                        attrs: {
                            label: a.value,
                            border: t.border
                        }
                    }, [a.label]))
                })), o
            }
        }
    }, 9977: function (e, t, a) {
        var o = {
            "./el-button.js": "aace",
            "./el-checkbox-group.js": "9413",
            "./el-input.js": "167d",
            "./el-radio-group.js": "2cfa",
            "./el-select.js": "7f29",
            "./el-upload.js": "0f88"
        };

        function n(e) {
            var t = i(e);
            return a(t)
        }

        function i(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }

        n.keys = function () {
            return Object.keys(o)
        }, n.resolve = i, e.exports = n, n.id = "9977"
    }, "9d82": function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-upload",
            use: "icon-upload-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-upload"><defs><style type="text/css"></style></defs><path d="M530.944 458.24l4.8 3.456 122.176 106.816a32 32 0 0 1-37.44 51.584l-4.672-3.392L546.56 556.16v280.704a32 32 0 0 1-26.24 31.488l-5.76 0.512a32 32 0 0 1-31.424-26.24l-0.512-5.76-0.064-280.704-69.12 60.48a32 32 0 0 1-40.96 0.896l-4.16-3.968a32 32 0 0 1-0.96-40.96l4.032-4.16 122.176-106.816a32 32 0 0 1 37.312-3.456zM497.92 128c128.128 0 239.168 82.304 275.52 199.04 123.968 11.264 221.312 113.088 221.312 237.44 0 128.128-103.68 232.96-234.88 238.272h-5.888l-35.52 0.192a32 32 0 0 1-0.192-64l35.264-0.128 4.672-0.064c96.384-3.84 172.544-80.896 172.544-174.272 0-96.128-80.512-174.464-179.584-174.464h-1.984a32 32 0 0 1-32-25.28C695.872 264.96 604.736 192 497.92 192 381.824 192 285.44 277.76 274.816 388.48a32 32 0 0 1-28.352 28.8c-83.968 9.152-147.84 78.208-147.84 159.552l0.192 7.936c3.84 85.76 77.056 154.112 166.592 154.112h45.632a32 32 0 0 1 0 64h-45.632C142.016 802.944 40.32 708.032 34.88 586.88l-0.192-9.28c0-106.88 76.352-197.184 179.968-219.904C239.488 226.112 357.76 128 497.856 128z" p-id="7923" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, a31c: function (e, t, a) {
    }, a393: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-cascader",
            use: "icon-cascader-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-cascader"><defs><style type="text/css"></style></defs><path d="M772.87036133 734.06115723c-43.34106445 0-80.00793458 27.93273926-93.76831055 66.57714843H475.90991211c-56.60705567 0-102.66723633-46.06018067-102.66723633-102.66723633V600.82446289h305.859375c13.76037598 38.64440918 50.42724609 66.57714844 93.76831055 66.57714844 55.12390137 0 99.94812012-44.82421875 99.94812012-99.94812012S827.9942627 467.50537109 772.87036133 467.50537109c-43.34106445 0-80.00793458 27.93273926-93.76831055 66.57714844H373.24267578V401.01062011h321.92687989c55.12390137 0 99.94812012-44.82421875 99.94812011-99.94812011V190.07312011C795.11767578 134.94921875 750.29345703 90.125 695.16955567 90.125H251.12963867C196.0057373 90.125 151.18151855 134.94921875 151.18151855 190.07312011V301.0625c0 55.12390137 44.82421875 99.94812012 99.94812012 99.94812012h55.53588867v296.96044921c0 93.35632325 75.97045898 169.32678223 169.32678224 169.32678223h203.19213866c13.76037598 38.64440918 50.42724609 66.57714844 93.76831055 66.57714844 55.12390137 0 99.94812012-44.82421875 99.94812012-99.94812012s-44.90661622-99.86572266-100.03051758-99.86572265z m0-199.89624024c18.37463379 0 33.28857422 14.91394043 33.28857422 33.28857423s-14.91394043 33.28857422-33.28857422 33.28857421-33.28857422-14.91394043-33.28857422-33.28857421 14.91394043-33.28857422 33.28857422-33.28857422zM217.75866699 301.0625V190.07312011c0-18.37463379 14.91394043-33.28857422 33.28857423-33.28857421h444.03991698c18.37463379 0 33.28857422 14.91394043 33.28857422 33.28857422V301.0625c0 18.37463379-14.91394043 33.28857422-33.28857422 33.28857422H251.12963867c-18.37463379 0-33.37097168-14.91394043-33.37097168-33.28857422z m555.11169434 566.23535156c-18.37463379 0-33.28857422-14.91394043-33.28857422-33.28857422 0-18.37463379 14.91394043-33.28857422 33.28857422-33.28857422s33.28857422 14.91394043 33.28857422 33.28857422c0.08239747 18.29223633-14.91394043 33.28857422-33.28857422 33.28857422z" p-id="972" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, aace: function (e, t, a) {
        "use strict";
        a.r(t), t["default"] = {
            default: function (e, t, a) {
                return t.__slot__[a]
            }
        }
    }, afc4: function (e, t) {
        tinymce.addI18n("zh_CN", {
            Redo: "重做",
            Undo: "撤销",
            Cut: "剪切",
            Copy: "复制",
            Paste: "粘贴",
            "Select all": "全选",
            "New document": "新文件",
            Ok: "确定",
            Cancel: "取消",
            "Visual aids": "网格线",
            Bold: "粗体",
            Italic: "斜体",
            Underline: "下划线",
            Strikethrough: "删除线",
            Superscript: "上标",
            Subscript: "下标",
            "Clear formatting": "清除格式",
            "Align left": "左边对齐",
            "Align center": "中间对齐",
            "Align right": "右边对齐",
            Justify: "两端对齐",
            "Bullet list": "项目符号",
            "Numbered list": "编号列表",
            "Decrease indent": "减少缩进",
            "Increase indent": "增加缩进",
            Close: "关闭",
            Formats: "格式",
            "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.": "你的浏览器不支持打开剪贴板，请使用Ctrl+X/C/V等快捷键。",
            Headers: "标题",
            "Header 1": "标题1",
            "Header 2": "标题2",
            "Header 3": "标题3",
            "Header 4": "标题4",
            "Header 5": "标题5",
            "Header 6": "标题6",
            Headings: "标题",
            "Heading 1": "标题1",
            "Heading 2": "标题2",
            "Heading 3": "标题3",
            "Heading 4": "标题4",
            "Heading 5": "标题5",
            "Heading 6": "标题6",
            Preformatted: "预先格式化的",
            Div: "Div",
            Pre: "Pre",
            Code: "代码",
            Paragraph: "段落",
            Blockquote: "引文区块",
            Inline: "文本",
            Blocks: "基块",
            "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "当前为纯文本粘贴模式，再次点击可以回到普通粘贴模式。",
            Fonts: "字体",
            "Font Sizes": "字号",
            Class: "类型",
            "Browse for an image": "浏览图像",
            OR: "或",
            "Drop an image here": "拖放一张图像至此",
            Upload: "上传",
            Block: "块",
            Align: "对齐",
            Default: "默认",
            Circle: "空心圆",
            Disc: "实心圆",
            Square: "方块",
            "Lower Alpha": "小写英文字母",
            "Lower Greek": "小写希腊字母",
            "Lower Roman": "小写罗马字母",
            "Upper Alpha": "大写英文字母",
            "Upper Roman": "大写罗马字母",
            "Anchor...": "锚点...",
            Name: "名称",
            Id: "标识符",
            "Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.": "标识符应该以字母开头，后跟字母、数字、破折号、点、冒号或下划线。",
            "You have unsaved changes are you sure you want to navigate away?": "你还有文档尚未保存，确定要离开？",
            "Restore last draft": "恢复上次的草稿",
            "Special character...": "特殊字符...",
            "Source code": "源代码",
            "Insert/Edit code sample": "插入/编辑代码示例",
            Language: "语言",
            "Code sample...": "示例代码...",
            "Color Picker": "选色器",
            R: "R",
            G: "G",
            B: "B",
            "Left to right": "从左到右",
            "Right to left": "从右到左",
            "Emoticons...": "表情符号...",
            "Metadata and Document Properties": "元数据和文档属性",
            Title: "标题",
            Keywords: "关键词",
            Description: "描述",
            Robots: "机器人",
            Author: "作者",
            Encoding: "编码",
            Fullscreen: "全屏",
            Action: "操作",
            Shortcut: "快捷键",
            Help: "帮助",
            Address: "地址",
            "Focus to menubar": "移动焦点到菜单栏",
            "Focus to toolbar": "移动焦点到工具栏",
            "Focus to element path": "移动焦点到元素路径",
            "Focus to contextual toolbar": "移动焦点到上下文菜单",
            "Insert link (if link plugin activated)": "插入链接 (如果链接插件已激活)",
            "Save (if save plugin activated)": "保存(如果保存插件已激活)",
            "Find (if searchreplace plugin activated)": "查找(如果查找替换插件已激活)",
            "Plugins installed ({0}):": "已安装插件 ({0}):",
            "Premium plugins:": "优秀插件：",
            "Learn more...": "了解更多...",
            "You are using {0}": "你正在使用 {0}",
            Plugins: "插件",
            "Handy Shortcuts": "快捷键",
            "Horizontal line": "水平分割线",
            "Insert/edit image": "插入/编辑图片",
            "Image description": "图片描述",
            Source: "地址",
            Dimensions: "大小",
            "Constrain proportions": "保持纵横比",
            General: "普通",
            Advanced: "高级",
            Style: "样式",
            "Vertical space": "垂直边距",
            "Horizontal space": "水平边距",
            Border: "边框",
            "Insert image": "插入图片",
            "Image...": "图片...",
            "Image list": "图片列表",
            "Rotate counterclockwise": "逆时针旋转",
            "Rotate clockwise": "顺时针旋转",
            "Flip vertically": "垂直翻转",
            "Flip horizontally": "水平翻转",
            "Edit image": "编辑图片",
            "Image options": "图片选项",
            "Zoom in": "放大",
            "Zoom out": "缩小",
            Crop: "裁剪",
            Resize: "调整大小",
            Orientation: "方向",
            Brightness: "亮度",
            Sharpen: "锐化",
            Contrast: "对比度",
            "Color levels": "颜色层次",
            Gamma: "伽马值",
            Invert: "反转",
            Apply: "应用",
            Back: "后退",
            "Insert date/time": "插入日期/时间",
            "Date/time": "日期/时间",
            "Insert/Edit Link": "插入/编辑链接",
            "Insert/edit link": "插入/编辑链接",
            "Text to display": "显示文字",
            Url: "地址",
            "Open link in...": "链接打开位置...",
            "Current window": "当前窗口",
            None: "无",
            "New window": "在新窗口打开",
            "Remove link": "删除链接",
            Anchors: "锚点",
            "Link...": "链接...",
            "Paste or type a link": "粘贴或输入链接",
            "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "你所填写的URL地址为邮件地址，需要加上mailto:前缀吗？",
            "The URL you entered seems to be an external link. Do you want to add the required http:// prefix?": "你所填写的URL地址属于外部链接，需要加上http://:前缀吗？",
            "Link list": "链接列表",
            "Insert video": "插入视频",
            "Insert/edit video": "插入/编辑视频",
            "Insert/edit media": "插入/编辑媒体",
            "Alternative source": "镜像",
            "Alternative source URL": "替代来源网址",
            "Media poster (Image URL)": "封面(图片地址)",
            "Paste your embed code below:": "将内嵌代码粘贴在下面:",
            Embed: "内嵌",
            "Media...": "多媒体...",
            "Nonbreaking space": "不间断空格",
            "Page break": "分页符",
            "Paste as text": "粘贴为文本",
            Preview: "预览",
            "Print...": "打印...",
            Save: "保存",
            Find: "查找",
            "Replace with": "替换为",
            Replace: "替换",
            "Replace all": "全部替换",
            Previous: "上一个",
            Next: "下一个",
            "Find and replace...": "查找并替换...",
            "Could not find the specified string.": "未找到搜索内容.",
            "Match case": "区分大小写",
            "Find whole words only": "全字匹配",
            "Spell check": "拼写检查",
            Ignore: "忽略",
            "Ignore all": "全部忽略",
            Finish: "完成",
            "Add to Dictionary": "添加到字典",
            "Insert table": "插入表格",
            "Table properties": "表格属性",
            "Delete table": "删除表格",
            Cell: "单元格",
            Row: "行",
            Column: "列",
            "Cell properties": "单元格属性",
            "Merge cells": "合并单元格",
            "Split cell": "拆分单元格",
            "Insert row before": "在上方插入",
            "Insert row after": "在下方插入",
            "Delete row": "删除行",
            "Row properties": "行属性",
            "Cut row": "剪切行",
            "Copy row": "复制行",
            "Paste row before": "粘贴到上方",
            "Paste row after": "粘贴到下方",
            "Insert column before": "在左侧插入",
            "Insert column after": "在右侧插入",
            "Delete column": "删除列",
            Cols: "列",
            Rows: "行",
            Width: "宽",
            Height: "高",
            "Cell spacing": "单元格外间距",
            "Cell padding": "单元格内边距",
            "Show caption": "显示标题",
            Left: "左对齐",
            Center: "居中",
            Right: "右对齐",
            "Cell type": "单元格类型",
            Scope: "范围",
            Alignment: "对齐方式",
            "H Align": "水平对齐",
            "V Align": "垂直对齐",
            Top: "顶部对齐",
            Middle: "垂直居中",
            Bottom: "底部对齐",
            "Header cell": "表头单元格",
            "Row group": "行组",
            "Column group": "列组",
            "Row type": "行类型",
            Header: "表头",
            Body: "表体",
            Footer: "表尾",
            "Border color": "边框颜色",
            "Insert template...": "插入模板...",
            Templates: "模板",
            Template: "模板",
            "Text color": "文字颜色",
            "Background color": "背景色",
            "Custom...": "自定义...",
            "Custom color": "自定义颜色",
            "No color": "无",
            "Remove color": "移除颜色",
            "Table of Contents": "内容列表",
            "Show blocks": "显示区块边框",
            "Show invisible characters": "显示不可见字符",
            "Word count": "字数",
            Count: "计数",
            Document: "文档",
            Selection: "选择",
            Words: "单词",
            "Words: {0}": "字数：{0}",
            "{0} words": "{0} 字",
            File: "文件",
            Edit: "编辑",
            Insert: "插入",
            View: "视图",
            Format: "格式",
            Table: "表格",
            Tools: "工具",
            "Powered by {0}": "由{0}驱动",
            "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "在编辑区按ALT-F9打开菜单，按ALT-F10打开工具栏，按ALT-0查看帮助",
            "Image title": "图片标题",
            "Border width": "边框宽度",
            "Border style": "边框样式",
            Error: "错误",
            Warn: "警告",
            Valid: "有效",
            "To open the popup, press Shift+Enter": "按Shitf+Enter键打开对话框",
            "Rich Text Area. Press ALT-0 for help.": "编辑区。按Alt+0键打开帮助。",
            "System Font": "系统字体",
            "Failed to upload image: {0}": "图片上传失败: {0}",
            "Failed to load plugin: {0} from url {1}": "插件加载失败: {0} 来自链接 {1}",
            "Failed to load plugin url: {0}": "插件加载失败 链接: {0}",
            "Failed to initialize plugin: {0}": "插件初始化失败: {0}",
            example: "示例",
            Search: "搜索",
            All: "全部",
            Currency: "货币",
            Text: "文字",
            Quotations: "引用",
            Mathematical: "数学",
            "Extended Latin": "拉丁语扩充",
            Symbols: "符号",
            Arrows: "箭头",
            "User Defined": "自定义",
            "dollar sign": "美元符号",
            "currency sign": "货币符号",
            "euro-currency sign": "欧元符号",
            "colon sign": "冒号",
            "cruzeiro sign": "克鲁赛罗币符号",
            "french franc sign": "法郎符号",
            "lira sign": "里拉符号",
            "mill sign": "密尔符号",
            "naira sign": "奈拉符号",
            "peseta sign": "比塞塔符号",
            "rupee sign": "卢比符号",
            "won sign": "韩元符号",
            "new sheqel sign": "新谢克尔符号",
            "dong sign": "越南盾符号",
            "kip sign": "老挝基普符号",
            "tugrik sign": "图格里克符号",
            "drachma sign": "德拉克马符号",
            "german penny symbol": "德国便士符号",
            "peso sign": "比索符号",
            "guarani sign": "瓜拉尼符号",
            "austral sign": "澳元符号",
            "hryvnia sign": "格里夫尼亚符号",
            "cedi sign": "塞地符号",
            "livre tournois sign": "里弗弗尔符号",
            "spesmilo sign": "spesmilo符号",
            "tenge sign": "坚戈符号",
            "indian rupee sign": "印度卢比",
            "turkish lira sign": "土耳其里拉",
            "nordic mark sign": "北欧马克",
            "manat sign": "马纳特符号",
            "ruble sign": "卢布符号",
            "yen character": "日元字样",
            "yuan character": "人民币元字样",
            "yuan character, in hong kong and taiwan": "元字样（港台地区）",
            "yen/yuan character variant one": "元字样（大写）",
            "Loading emoticons...": "加载表情符号...",
            "Could not load emoticons": "不能加载表情符号",
            People: "人类",
            "Animals and Nature": "动物和自然",
            "Food and Drink": "食物和饮品",
            Activity: "活动",
            "Travel and Places": "旅游和地点",
            Objects: "物件",
            Flags: "旗帜",
            Characters: "字符",
            "Characters (no spaces)": "字符(无空格)",
            "{0} characters": "{0} 个字符",
            "Error: Form submit field collision.": "错误: 表单提交字段冲突。",
            "Error: No form element found.": "错误: 没有表单控件。",
            Update: "更新",
            "Color swatch": "颜色样本",
            Turquoise: "青绿色",
            Green: "绿色",
            Blue: "蓝色",
            Purple: "紫色",
            "Navy Blue": "海军蓝",
            "Dark Turquoise": "深蓝绿色",
            "Dark Green": "深绿色",
            "Medium Blue": "中蓝色",
            "Medium Purple": "中紫色",
            "Midnight Blue": "深蓝色",
            Yellow: "黄色",
            Orange: "橙色",
            Red: "红色",
            "Light Gray": "浅灰色",
            Gray: "灰色",
            "Dark Yellow": "暗黄色",
            "Dark Orange": "深橙色",
            "Dark Red": "深红色",
            "Medium Gray": "中灰色",
            "Dark Gray": "深灰色",
            "Light Green": "浅绿色",
            "Light Yellow": "浅黄色",
            "Light Red": "浅红色",
            "Light Purple": "浅紫色",
            "Light Blue": "浅蓝色",
            "Dark Purple": "深紫色",
            "Dark Blue": "深蓝色",
            Black: "黑色",
            White: "白色",
            "Switch to or from fullscreen mode": "切换全屏模式",
            "Open help dialog": "打开帮助对话框",
            history: "历史",
            styles: "样式",
            formatting: "格式化",
            alignment: "对齐",
            indentation: "缩进",
            "permanent pen": "记号笔",
            comments: "备注",
            "Format Painter": "格式刷",
            "Insert/edit iframe": "插入/编辑框架",
            Capitalization: "大写",
            lowercase: "小写",
            UPPERCASE: "大写",
            "Title Case": "首字母大写",
            "Permanent Pen Properties": "永久笔属性",
            "Permanent pen properties...": "永久笔属性...",
            Font: "字体",
            Size: "字号",
            "More...": "更多...",
            "Spellcheck Language": "拼写检查语言",
            "Select...": "选择...",
            Preferences: "首选项",
            Yes: "是",
            No: "否",
            "Keyboard Navigation": "键盘指引",
            Version: "版本",
            Anchor: "锚点",
            "Special character": "特殊符号",
            "Code sample": "代码示例",
            Color: "颜色",
            Emoticons: "表情",
            "Document properties": "文档属性",
            Image: "图片",
            "Insert link": "插入链接",
            Target: "打开方式",
            Link: "链接",
            Poster: "封面",
            Media: "媒体",
            Print: "打印",
            Prev: "上一个",
            "Find and replace": "查找和替换",
            "Whole words": "全字匹配",
            Spellcheck: "拼写检查",
            Caption: "标题",
            "Insert template": "插入模板"
        })
    }, b20f: function (e, t, a) {
    }, b62d: function (e, t, a) {
    }, beaa: function (e, t, a) {
        "use strict";
        t["a"] = {
            "el-input": "blur",
            "el-input-number": "blur",
            "el-select": "change",
            "el-radio-group": "change",
            "el-checkbox-group": "change",
            "el-cascader": "change",
            "el-time-picker": "change",
            "el-date-picker": "change",
            "el-rate": "change",
            tinymce: "blur"
        }
    }, c2eb: function (e, t, a) {
        "use strict";
        a("648e")
    }, c630: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-rich-text",
            use: "icon-rich-text-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-rich-text"><defs><style type="text/css"></style></defs><path d="M834.2654461 933.87476599H189.7345539A99.37494442 99.37494442 0 0 1 90.12523401 834.2654461V189.7345539A99.37494442 99.37494442 0 0 1 189.7345539 90.12523401h644.53089221A99.37494442 99.37494442 0 0 1 933.87476599 189.7345539v644.53089221A99.37494442 99.37494442 0 0 1 834.2654461 933.87476599zM189.7345539 140.04708127a49.68747262 49.68747262 0 0 0-49.68747263 49.68747263v644.53089221a49.68747262 49.68747262 0 0 0 49.68747262 49.68747262h644.53089221a49.68747262 49.68747262 0 0 0 49.68747263-49.68747262V189.7345539a49.68747262 49.68747262 0 0 0-49.68747263-49.68747263z" p-id="1803" /><path d="M561.68747262 239.18765188h247.73423676a23.43748728 23.43748728 0 0 1 24.84373673 24.84373591 23.43748728 23.43748728 0 0 1-24.84373673 24.84373589H561.68747262a23.43748728 23.43748728 0 0 1-24.84373672-24.84373589 23.43748728 23.43748728 0 0 1 24.84373672-24.84373591z m0 123.9843057h247.73423676a24.84373591 24.84373591 0 0 1 0 49.68747262H561.68747262a24.84373591 24.84373591 0 1 1 0-49.68747262z m0 123.98430652h247.73423676a24.84373591 24.84373591 0 0 1 0 49.68747181H561.68747262a24.84373591 24.84373591 0 0 1 0-49.68747181zM214.57829062 611.1405698h594.84341876a24.84373591 24.84373591 0 0 1 0 49.68747263H214.57829062a24.84373591 24.84373591 0 0 1 0-49.68747263z m0 123.98430652h594.84341876a24.84373591 24.84373591 0 0 1 0 49.6874718H214.57829062a24.84373591 24.84373591 0 1 1 0-49.6874718z m52.03122061-280.07797001h133.82805103l32.10935696 81.79682959h46.87497372l-123.51555642-297.65608402H311.14073697l-121.40618308 297.65608403h46.87497373z m61.87496594-156.32803812a171.56240497 171.56240497 0 0 0 4.92187226-19.68748901 72.18745972 72.18745972 0 0 1 5.15624688 19.68748901l49.45309717 123.98430652H279.03137918z" p-id="1804" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, c88b: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return i
        }));
        a("9719");
        var o = {};

        function n(e, t) {
            var a = document.getElementById(e), n = t || function () {
            };
            if (!a) {
                o[e] = [];
                var i = document.createElement("script");
                i.src = e, i.id = e, i.async = 1, document.body.appendChild(i);
                var l = "onload" in i ? c.bind(i) : r.bind(i);
                l(i)
            }

            function c(t) {
                var a = this;
                t.onload = function () {
                    a.onerror = a.onload = null, o[e].forEach((function (e) {
                        e(null, t)
                    })), delete o[e]
                }, t.onerror = function () {
                    a.onerror = a.onload = null, n(new Error("Failed to load ".concat(e)), t)
                }
            }

            function r(t) {
                var a = this;
                t.onreadystatechange = function () {
                    "complete" !== a.readyState && "loaded" !== a.readyState || (a.onreadystatechange = null, o[e].forEach((function (e) {
                        e(null, t)
                    })), delete o[e])
                }
            }

            o[e].push(n)
        }

        function i(e, t) {
            var a = e.shift();
            e.length ? n(a, (function () {
                return i(e, t)
            })) : n(a, t)
        }

        t["a"] = n
    }, c95d: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-row",
            use: "icon-row-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-row"><defs><style type="text/css"></style></defs><path d="M152 854.856875h325.7146875V237.715625H134.856875v600q0 6.99375 5.0746875 12.0684375T152 854.856875z m737.143125-17.1421875v-600H546.284375v617.1421875H872q6.99375 0 12.0684375-5.07375t5.0746875-12.0684375z m68.5715625-651.429375V837.715625q0 35.3821875-25.16625 60.5484375T872 923.4284375H152q-35.383125 0-60.5484375-25.1653125T66.284375 837.7146875V186.284375q0-35.3821875 25.16625-60.5484375T152 100.5715625h720q35.383125 0 60.5484375 25.1653125t25.16625 60.5484375z" p-id="1183" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, cfcd: function (e) {
        e.exports = JSON.parse('["platform-eleme","eleme","delete-solid","delete","s-tools","setting","user-solid","user","phone","phone-outline","more","more-outline","star-on","star-off","s-goods","goods","warning","warning-outline","question","info","remove","circle-plus","success","error","zoom-in","zoom-out","remove-outline","circle-plus-outline","circle-check","circle-close","s-help","help","minus","plus","check","close","picture","picture-outline","picture-outline-round","upload","upload2","download","camera-solid","camera","video-camera-solid","video-camera","message-solid","bell","s-cooperation","s-order","s-platform","s-fold","s-unfold","s-operation","s-promotion","s-home","s-release","s-ticket","s-management","s-open","s-shop","s-marketing","s-flag","s-comment","s-finance","s-claim","s-custom","s-opportunity","s-data","s-check","s-grid","menu","share","d-caret","caret-left","caret-right","caret-bottom","caret-top","bottom-left","bottom-right","back","right","bottom","top","top-left","top-right","arrow-left","arrow-right","arrow-down","arrow-up","d-arrow-left","d-arrow-right","video-pause","video-play","refresh","refresh-right","refresh-left","finished","sort","sort-up","sort-down","rank","loading","view","c-scale-to-original","date","edit","edit-outline","folder","folder-opened","folder-add","folder-remove","folder-delete","folder-checked","tickets","document-remove","document-delete","document-copy","document-checked","document","document-add","printer","paperclip","takeaway-box","search","monitor","attract","mobile","scissors","umbrella","headset","brush","mouse","coordinate","magic-stick","reading","data-line","data-board","pie-chart","data-analysis","collection-tag","film","suitcase","suitcase-1","receiving","collection","files","notebook-1","notebook-2","toilet-paper","office-building","school","table-lamp","house","no-smoking","smoking","shopping-cart-full","shopping-cart-1","shopping-cart-2","shopping-bag-1","shopping-bag-2","sold-out","sell","present","box","bank-card","money","coin","wallet","discount","price-tag","news","guide","male","female","thumb","cpu","link","connection","open","turn-off","set-up","chat-round","chat-line-round","chat-square","chat-dot-round","chat-dot-square","chat-line-square","message","postcard","position","turn-off-microphone","microphone","close-notification","bangzhu","time","odometer","crop","aim","switch-button","full-screen","copy-document","mic","stopwatch","medal-1","medal","trophy","trophy-1","first-aid-kit","discover","place","location","location-outline","location-information","add-location","delete-location","map-location","alarm-clock","timer","watch-1","watch","lock","unlock","key","service","mobile-phone","bicycle","truck","ship","basketball","football","soccer","baseball","wind-power","light-rain","lightning","heavy-rain","sunrise","sunrise-1","sunset","sunny","cloudy","partly-cloudy","cloudy-and-sunny","moon","moon-night","dish","dish-1","food","chicken","fork-spoon","knife-fork","burger","tableware","sugar","dessert","ice-cream","hot-water","water-cup","coffee-cup","cold-drink","goblet","goblet-full","goblet-square","goblet-square-full","refrigerator","grape","watermelon","cherry","apple","pear","orange","coffee","ice-tea","ice-drink","milk-tea","potato-strips","lollipop","ice-cream-square","ice-cream-round"]')
    }, d1df: function (e, t, a) {
    }, d8d7: function (e, t, a) {
        "use strict";
        a("5d2b")
    }, d8dc: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-radio",
            use: "icon-radio-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-radio"><defs><style type="text/css"></style></defs><path d="M507.39346659 71.84873358c241.53533667 0 437.39770766 195.85422109 437.39770767 437.37442191 0 241.53766571-195.86237099 437.38955776-437.39770767 437.38955776-241.50040803 0-437.34997219-195.85189205-437.34997219-437.38955776C70.0434944 267.70295467 265.89189347 71.84873358 507.39346659 71.84873358L507.39346659 71.84873358zM507.39346659 282.81899805c-125.00686734 0-226.37039389 101.38914133-226.37039388 226.41813048 0 125.01268821 101.36352768 226.39717262 226.37039388 226.39717262 125.04295993 0 226.42395136-101.38448441 226.42395136-226.39717262C733.81625401 384.20813938 632.43642653 282.81899805 507.39346659 282.81899805L507.39346659 282.81899805zM507.39346659 120.78172615c-214.46664192 0-388.42047261 173.95150279-388.4204726 388.44026539 0 214.51204949 173.95499463 388.46122325 388.4204726 388.46122325 214.52369237 0 388.46005817-173.94800981 388.46005818-388.46122325C895.85236082 294.73322894 721.91715897 120.78172615 507.39346659 120.78172615z" p-id="880" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, d9b9: function (e, t, a) {
        "use strict";
        a("d1df")
    }, e6df: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-date-range",
            use: "icon-date-range-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-date-range"><defs><style type="text/css"></style></defs><path d="M887.466667 192.853333h-100.693334V119.466667c0-10.24-6.826667-17.066667-17.066666-17.066667s-17.066667 6.826667-17.066667 17.066667v73.386666H303.786667V119.466667c0-10.24-6.826667-17.066667-17.066667-17.066667s-17.066667 6.826667-17.066667 17.066667v73.386666H168.96c-46.08 0-85.333333 37.546667-85.333333 85.333334V836.266667c0 46.08 37.546667 85.333333 85.333333 85.333333H887.466667c46.08 0 85.333333-37.546667 85.333333-85.333333V278.186667c0-47.786667-37.546667-85.333333-85.333333-85.333334z m-718.506667 34.133334h100.693333v66.56c0 10.24 6.826667 17.066667 17.066667 17.066666s17.066667-6.826667 17.066667-17.066666v-66.56h450.56v66.56c0 10.24 6.826667 17.066667 17.066666 17.066666s17.066667-6.826667 17.066667-17.066666v-66.56H887.466667c27.306667 0 51.2 22.186667 51.2 51.2v88.746666H117.76v-88.746666c0-29.013333 22.186667-51.2 51.2-51.2zM887.466667 887.466667H168.96c-27.306667 0-51.2-22.186667-51.2-51.2V401.066667H938.666667V836.266667c0 27.306667-22.186667 51.2-51.2 51.2z" p-id="1377" /><path d="M858.453333 493.226667H327.68c-10.24 0-17.066667 6.826667-17.066667 17.066666v114.346667h-116.053333c-10.24 0-17.066667 6.826667-17.066667 17.066667v133.12c0 10.24 6.826667 17.066667 17.066667 17.066666H460.8c10.24 0 17.066667-6.826667 17.066667-17.066666v-114.346667h380.586666c10.24 0 17.066667-6.826667 17.066667-17.066667v-133.12c0-10.24-6.826667-17.066667-17.066667-17.066666z m-413.013333 34.133333v97.28h-98.986667v-97.28h98.986667z m-230.4 131.413333h98.986667v98.986667h-98.986667v-98.986667z m131.413333 97.28v-97.28h98.986667v97.28h-98.986667z m133.12-228.693333h97.28v98.986667h-97.28v-98.986667z m131.413334 0h98.986666v98.986667h-98.986666v-98.986667z m230.4 97.28h-98.986667v-98.986667h98.986667v98.986667z" p-id="1378" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, eb1c: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a("09f1"), n = a.n(o), i = a("d6af"), l = a.n(i), c = new n.a({
            id: "icon-slider",
            use: "icon-slider-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-slider"><defs><style type="text/css"></style></defs><path d="M951.453125 476.84375H523.671875a131.8359375 131.8359375 0 0 0-254.1796875 0H72.546875v70.3125h196.9453125a131.8359375 131.8359375 0 0 0 254.1796875 0H951.453125z" p-id="1239" /></symbol>'
        });
        l.a.add(c);
        t["default"] = c
    }, ed08: function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "f", (function () {
            return titleCase
        })), __webpack_require__.d(__webpack_exports__, "d", (function () {
            return isNumberStr
        })), __webpack_require__.d(__webpack_exports__, "c", (function () {
            return exportDefault
        })), __webpack_require__.d(__webpack_exports__, "a", (function () {
            return beautifierConf
        })), __webpack_require__.d(__webpack_exports__, "b", (function () {
            return deepClone
        })), __webpack_require__.d(__webpack_exports__, "e", (function () {
            return isObjectObject
        }));
        var C_Users_jjz_Documents_WeChat_Files_wxid_9409994104912_FileStorage_File_2021_04_form_generator_form_generator_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bbc6"),
            core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("58af"),
            core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__),
            core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aa0d"),
            core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__),
            core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1f5d"),
            core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__),
            core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9719"),
            core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__),
            core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("de23"),
            core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__),
            core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cd57"),
            core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__),
            core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4882"),
            core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__),
            core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("186d"),
            core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);

        function indent(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            if (0 === t) return e;
            var o, n = t < 0, i = [], l = "";
            if (n) t *= -1, o = new RegExp("(^\\s{0,".concat(t * a, "})"), "g"); else for (var c = 0; c < t * a; c++) l += " ";
            return e.split("\n").forEach((function (e) {
                e = n ? e.replace(o, "") : l + e, i.push(e)
            })), i.join("\n")
        }

        function titleCase(e) {
            return e.replace(/( |^)[a-z]/g, (function (e) {
                return e.toUpperCase()
            }))
        }

        function camelCase(e) {
            return e.replace(/-[a-z]/g, (function (e) {
                return e.substr(-1).toUpperCase()
            }))
        }

        function isNumberStr(e) {
            return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(e)
        }

        var exportDefault = "export default ", beautifierConf = {
            html: {
                indent_size: "2",
                indent_char: " ",
                max_preserve_newlines: "-1",
                preserve_newlines: !1,
                keep_array_indentation: !1,
                break_chained_methods: !1,
                indent_scripts: "separate",
                brace_style: "end-expand",
                space_before_conditional: !0,
                unescape_strings: !1,
                jslint_happy: !1,
                end_with_newline: !0,
                wrap_line_length: "110",
                indent_inner_html: !0,
                comma_first: !1,
                e4x: !0,
                indent_empty_lines: !0
            },
            js: {
                indent_size: "2",
                indent_char: " ",
                max_preserve_newlines: "-1",
                preserve_newlines: !1,
                keep_array_indentation: !1,
                break_chained_methods: !1,
                indent_scripts: "normal",
                brace_style: "end-expand",
                space_before_conditional: !0,
                unescape_strings: !1,
                jslint_happy: !0,
                end_with_newline: !0,
                wrap_line_length: "110",
                indent_inner_html: !0,
                comma_first: !1,
                e4x: !0,
                indent_empty_lines: !0
            }
        };

        function stringify(e) {
            return JSON.stringify(e, (function (e, t) {
                return "function" === typeof t ? "".concat(t) : t
            }))
        }

        function parse(str) {
            JSON.parse(str, (function (k, v) {
                return v.indexOf && v.indexOf("function") > -1 ? eval("(".concat(v, ")")) : v
            }))
        }

        function jsonClone(e) {
            return parse(stringify(e))
        }

        function deepClone(e) {
            var t = Object.prototype.toString;
            if (!e || "object" !== Object(C_Users_jjz_Documents_WeChat_Files_wxid_9409994104912_FileStorage_File_2021_04_form_generator_form_generator_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(e)) return e;
            if (e.nodeType && "cloneNode" in e) return e.cloneNode(!0);
            if ("[object Date]" === t.call(e)) return new Date(e.getTime());
            if ("[object RegExp]" === t.call(e)) {
                var a = [];
                return e.global && a.push("g"), e.multiline && a.push("m"), e.ignoreCase && a.push("i"), new RegExp(e.source, a.join(""))
            }
            var o = Array.isArray(e) ? [] : e.constructor ? new e.constructor : {};
            for (var n in e) o[n] = deepClone(e[n]);
            return o
        }

        var toStr = Function.prototype.call.bind(Object.prototype.toString);

        function isObjectObject(e) {
            return "[object Object]" === toStr(e)
        }

        function isObjectArray(e) {
            return "[object Array]" === toStr(e)
        }

        function isObjectNull(e) {
            return "[object Null]" === toStr(e)
        }

        function isObjectUnde(e) {
            return "[object Undefined]" === toStr(e)
        }
    }, f4a7: function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function () {
            return makeUpJs
        }));
        var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9719"),
            core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__),
            core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4882"),
            core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__),
            core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6390"),
            core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__),
            core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("12b5"),
            core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__),
            util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("49a5"),
            util__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__),
            _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ed08"),
            _ruleTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("beaa"),
            units = {KB: "1024", MB: "1024 / 1024", GB: "1024 / 1024 / 1024"}, confGlobal,
            inheritAttrs = {file: "", dialog: "inheritAttrs: false,"};

        function makeUpJs(e, t) {
            confGlobal = e = Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__["b"])(e);
            var a = [], o = [], n = [], i = [], l = mixinMethod(t), c = [], r = [];
            e.fields.forEach((function (e) {
                buildAttributes(e, a, o, n, l, i, c, r)
            }));
            var s = buildexport(e, t, a.join("\n"), o.join("\n"), n.join("\n"), c.join("\n"), i.join("\n"), l.join("\n"), r.join("\n"));
            return confGlobal = null, s
        }

        function buildAttributes(e, t, a, o, n, i, l, c) {
            var r = e.__config__, s = e.__slot__;
            if (buildData(e, t), buildRules(e, a), (e.options || s && s.options && s.options.length) && (buildOptions(e, o), "dynamic" === r.dataType)) {
                var d = "".concat(e.__vModel__, "Options"),
                    u = Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__["f"])(d), _ = "get".concat(u);
                buildOptionMethod(_, d, n, e), callInCreated(_, c)
            }
            e.props && e.props.props && buildProps(e, i), e.action && "el-upload" === r.tag && (l.push("".concat(e.__vModel__, "Action: '").concat(e.action, "',\n      ").concat(e.__vModel__, "fileList: [],")), n.push(buildBeforeUpload(e)), e["auto-upload"] || n.push(buildSubmitUpload(e))), r.children && r.children.forEach((function (e) {
                buildAttributes(e, t, a, o, n, i, l, c)
            }))
        }

        function callInCreated(e, t) {
            t.push("this.".concat(e, "()"))
        }

        function mixinMethod(e) {
            var t = [], a = {
                file: confGlobal.formBtns ? {
                    submitForm: "submitForm() {\n        this.$refs['".concat(confGlobal.formRef, "'].validate(valid => {\n          if(!valid) return\n          // TODO 提交表单\n        })\n      },"),
                    resetForm: "resetForm() {\n        this.$refs['".concat(confGlobal.formRef, "'].resetFields()\n      },")
                } : null,
                dialog: {
                    onOpen: "onOpen() {},",
                    onClose: "onClose() {\n        this.$refs['".concat(confGlobal.formRef, "'].resetFields()\n      },"),
                    close: "close() {\n        this.$emit('update:visible', false)\n      },",
                    handelConfirm: "handelConfirm() {\n        this.$refs['".concat(confGlobal.formRef, "'].validate(valid => {\n          if(!valid) return\n          this.close()\n        })\n      },")
                }
            }, o = a[e];
            return o && Object.keys(o).forEach((function (e) {
                t.push(o[e])
            })), t
        }

        function buildData(e, t) {
            var a = e.__config__;
            if (void 0 !== e.__vModel__) {
                var o = JSON.stringify(a.defaultValue);
                t.push("".concat(e.__vModel__, ": ").concat(o, ","))
            }
        }

        function buildRules(scheme, ruleList) {
            var config = scheme.__config__;
            if (void 0 !== scheme.__vModel__) {
                var rules = [];
                if (_ruleTrigger__WEBPACK_IMPORTED_MODULE_6__["a"][config.tag]) {
                    if (config.required) {
                        var type = Object(util__WEBPACK_IMPORTED_MODULE_4__["isArray"])(config.defaultValue) ? "type: 'array'," : "",
                            message = Object(util__WEBPACK_IMPORTED_MODULE_4__["isArray"])(config.defaultValue) ? "请至少选择一个".concat(config.label) : scheme.placeholder;
                        void 0 === message && (message = "".concat(config.label, "不能为空")), rules.push("{ required: true, ".concat(type, " message: '").concat(message, "', trigger: '").concat(_ruleTrigger__WEBPACK_IMPORTED_MODULE_6__["a"][config.tag], "' }"))
                    }
                    config.regList && Object(util__WEBPACK_IMPORTED_MODULE_4__["isArray"])(config.regList) && config.regList.forEach((function (item) {
                        item.pattern && rules.push("{ pattern: ".concat(eval(item.pattern), ", message: '").concat(item.message, "', trigger: '").concat(_ruleTrigger__WEBPACK_IMPORTED_MODULE_6__["a"][config.tag], "' }"))
                    })), ruleList.push("".concat(scheme.__vModel__, ": [").concat(rules.join(","), "],"))
                }
            }
        }

        function buildOptions(e, t) {
            if (void 0 !== e.__vModel__) {
                var a = e.options;
                a || (a = e.__slot__.options), "dynamic" === e.__config__.dataType && (a = []);
                var o = "".concat(e.__vModel__, "Options: ").concat(JSON.stringify(a), ",");
                t.push(o)
            }
        }

        function buildProps(e, t) {
            var a = "".concat(e.__vModel__, "Props: ").concat(JSON.stringify(e.props.props), ",");
            t.push(a)
        }

        function buildBeforeUpload(e) {
            var t = e.__config__, a = units[t.sizeUnit], o = "", n = "", i = [];
            t.fileSize && (o = "let isRightSize = file.size / ".concat(a, " < ").concat(t.fileSize, "\n    if(!isRightSize){\n      this.$message.error('文件大小超过 ").concat(t.fileSize).concat(t.sizeUnit, "')\n    }"), i.push("isRightSize")), e.accept && (n = "let isAccept = new RegExp('".concat(e.accept, "').test(file.type)\n    if(!isAccept){\n      this.$message.error('应该选择").concat(e.accept, "类型的文件')\n    }"), i.push("isAccept"));
            var l = "".concat(e.__vModel__, "BeforeUpload(file) {\n    ").concat(o, "\n    ").concat(n, "\n    return ").concat(i.join("&&"), "\n  },");
            return i.length ? l : ""
        }

        function buildSubmitUpload(e) {
            var t = "submitUpload() {\n    this.$refs['".concat(e.__vModel__, "'].submit()\n  },");
            return t
        }

        function buildOptionMethod(e, t, a, o) {
            var n = o.__config__,
                i = "".concat(e, "() {\n    // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的\n    this.$axios({\n      method: '").concat(n.method, "',\n      url: '").concat(n.url, "'\n    }).then(resp => {\n      var { data } = resp\n      this.").concat(t, " = data.").concat(n.dataPath, "\n    })\n  },");
            a.push(i)
        }

        function buildexport(e, t, a, o, n, i, l, c, r) {
            var s = "".concat(_utils_index__WEBPACK_IMPORTED_MODULE_5__["c"], "{\n  ").concat(inheritAttrs[t], "\n  components: {},\n  props: [],\n  data () {\n    return {\n      ").concat(e.formModel, ": {\n        ").concat(a, "\n      },\n      ").concat(e.formRules, ": {\n        ").concat(o, "\n      },\n      ").concat(i, "\n      ").concat(n, "\n      ").concat(l, "\n    }\n  },\n  computed: {},\n  watch: {},\n  created () {\n    ").concat(r, "\n  },\n  mounted () {},\n  methods: {\n    ").concat(c, "\n  }\n}");
            return s
        }
    }
});