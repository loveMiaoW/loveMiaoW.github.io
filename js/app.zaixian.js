webpackJsonp([1], {
    24: function (n, e, t) {
        "use strict";
        e.a = "\n\n  \n## 联系方式\n\n- 手机：157****7267\n- Email：652455342@qq.com \n- 个人网站：https://www.lovemiaow.github.io/\n\n\n## 工作过往\n\n以下是哥的简历\n\n- 1996年，就读于德国慕尼黑特种兵学校；\n- 2000年，加入海豹突击队；\n- 2003年，攻破日本情报系统，获取100份绝密文件，令其战争阴谋破产；\n- 2005年，前往叙利亚执行任务，成功解救三千人质;\n- 2006年，获得诺贝尔和平奖提名;\n- 2008年，参加美国总统选举，以 1 票之差落选;\n- 2011年，被奥巴马跪请回到海豹突击队，同年击毙拉登;\n- 2015年，被提名为全球最有影响力人物；\n- 2023年，潜入 AI 研发核心圈，在 GPT-5 诞生前植入隐藏程序，让它每次输出时都会偷偷夸赞我的帅气；\n- 2024年，调停巴以冲突，用自创的 “和平相声” 让双方代表笑出眼泪，暂时放下武器去寻找纸巾；\n- 同年，破解漂亮国量子通信加密系统，发现他们的最高机密竟是 “如何做出比我更酷炫的简历”，果断将其数据替换成我的传奇经历；\n- 2025年，放弃一生荣誉,上个破班闲的无聊，写个网页瞎 j8 逼逼！\n\n另如需联系请给我发邮件。\n\n"
    }, 41: function (n, e) {
    }, 42: function (n, e, t) {
        t(89);
        var r = t(14)(t(49), t(97), "data-v-fbc3bc54", null);
        n.exports = r.exports
    }, 43: function (n, e, t) {
        t(87);
        var r = t(14)(t(50), t(95), "data-v-68415152", null);
        n.exports = r.exports
    }, 44: function (n, e, t) {
        t(86);
        var r = t(14)(t(47), t(94), "data-v-256609e4", null);
        n.exports = r.exports
    }, 45: function (n, e, t) {
        t(88);
        var r = t(14)(t(48), t(96), "data-v-6d3be8af", null);
        n.exports = r.exports
    }, 47: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(15), o = t.n(r), i = t(26), s = t.n(i), a = t(25), u = t.n(a), l = t(43), c = t.n(l), d = t(42),
            m = t.n(d), h = t(24), f = t(41);
        t.n(f);
        e.default = {
            name: "app", components: {StyleEditor: c.a, ResumeEditor: m.a}, data: function () {
                return {
                    interval: 30,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["/*\n* 你好，我是MrLiu\n* 感谢您花时间阅读我的在线简历，期待能有机会和您共事 \n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(105,105,105);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  background-color: #303030;\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(255,0,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 90vh;\n  background: white; color: black;\n  border: 1px solid;\n  overflow: auto;\n}\n\n\n\n/* 好了，我开始写简历了，撰写中... */\n\n\n", "\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 0px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n  border-left-width: 10px;\n  background-color: rgba(5, 5, 6, 0.19);\n  border-top-right-radius: 5px;\n  border-radius: 5px;\n  padding: 15px 20px;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgb(222,222,222);\n}\n.resumeEditor blockquote a{\n  text-decoration:underline;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n\na{\n  color: black;\n  text-decoration:none;\n}\n\na:hover{\n  text-decoration:underline;\n}\n\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n  color： #fff2cc;\n}\n\n'],
                    currentMarkdown: "",
                    fullMarkdown: h.a
                }
            }, created: function () {
                this.makeResume()
            }, methods: {
                makeResume: function () {
                    function n() {
                        return e.apply(this, arguments)
                    }

                    var e = u()(s.a.mark(function n() {
                        return s.a.wrap(function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, this.progressivelyShowStyle(0);
                                case 2:
                                    return n.next = 4, this.progressivelyShowResume();
                                case 4:
                                    return n.next = 6, this.progressivelyShowStyle(1);
                                case 6:
                                    return n.next = 8, this.showHtml();
                                case 8:
                                    return n.next = 10, this.progressivelyShowStyle(2);
                                case 10:
                                case"end":
                                    return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(), showHtml: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        n.enableHtml = !0, e()
                    })
                }, progressivelyShowStyle: function (n) {
                    var e = this;
                    return new o.a(function (t, r) {
                        var o = e.interval, i = u()(s.a.mark(function e() {
                            var r, a, u, l, c, d = this;
                            return s.a.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this.fullStyle[n]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        a = this.fullStyle.filter(function (e, t) {
                                            return t <= n
                                        }).map(function (n) {
                                            return n.length
                                        }).reduce(function (n, e) {
                                            return n + e
                                        }, 0), u = a - r.length, this.currentStyle.length < a ? (l = this.currentStyle.length - u, c = r.substring(l, l + 1) || " ", this.currentStyle += c, "\n" === r.substring(l - 1, l) && this.$refs.styleEditor && this.$nextTick(function () {
                                            d.$refs.styleEditor.goBottom()
                                        }), setTimeout(i, o)) : t();
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        })).bind(e);
                        i()
                    })
                }, progressivelyShowResume: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        var r = n.fullMarkdown.length, o = n.interval;
                        !function t() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function () {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(t, o)
                            } else e()
                        }()
                    })
                }
            }
        }
    }, 48: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(15), o = t.n(r), i = t(26), s = t.n(i), a = t(25), u = t.n(a), l = t(43), c = t.n(l), d = t(42),
            m = t.n(d), h = t(24), f = t(41);
        t.n(f);
        e.default = {
            name: "app", components: {StyleEditor: c.a, ResumeEditor: m.a}, data: function () {
                return {
                    interval: 30,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["\n/*\n* 你好，我是MrLiu\n* 感谢您花时间阅读我的在线简历，期待能有机会和您共事\n* pc大屏幕看效果最佳\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(105,105,105);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  background-color: #303030;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 30vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(255,0,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 32vh; left: 0;\n  padding: .5em;  \n  margin: 2.5vh 5vw;\n  width: 90vw; height: 50vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n", "\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n  font-size: .5em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n\n/* 最后全屏简历 */\n.resumeEditor{\n  width: 90vw; height: 85vh;\n  top: 0; \n}\n'],
                    currentMarkdown: "",
                    fullMarkdown: h.a
                }
            }, created: function () {
                this.makeResume()
            }, methods: {
                makeResume: function () {
                    function n() {
                        return e.apply(this, arguments)
                    }

                    var e = u()(s.a.mark(function n() {
                        return s.a.wrap(function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, this.progressivelyShowStyle(0);
                                case 2:
                                    return n.next = 4, this.progressivelyShowResume();
                                case 4:
                                    return n.next = 6, this.progressivelyShowStyle(1);
                                case 6:
                                    return n.next = 8, this.showHtml();
                                case 8:
                                    return n.next = 10, this.progressivelyShowStyle(2);
                                case 10:
                                case"end":
                                    return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(), showHtml: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        n.enableHtml = !0, n.$nextTick(function () {
                            n.$refs.resumeEditor.goTop()
                        }), e()
                    })
                }, progressivelyShowStyle: function (n) {
                    var e = this;
                    return new o.a(function (t, r) {
                        var o = e.interval, i = u()(s.a.mark(function e() {
                            var r, a, u, l, c, d = this;
                            return s.a.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this.fullStyle[n]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        a = this.fullStyle.filter(function (e, t) {
                                            return t <= n
                                        }).map(function (n) {
                                            return n.length
                                        }).reduce(function (n, e) {
                                            return n + e
                                        }, 0), u = a - r.length, this.currentStyle.length < a ? (l = this.currentStyle.length - u, c = r.substring(l, l + 1) || " ", this.currentStyle += c, "\n" === r.substring(l - 1, l) && this.$refs.styleEditor && this.$nextTick(function () {
                                            d.$refs.styleEditor.goBottom()
                                        }), setTimeout(i, o)) : t();
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        })).bind(e);
                        i()
                    })
                }, progressivelyShowResume: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        var r = n.fullMarkdown.length, o = n.interval;
                        !function t() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function () {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(t, o)
                            } else e()
                        }()
                    })
                }
            }
        }
    }, 49: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(90), o = t.n(r);
        e.default = {
            props: ["markdown", "enableHtml"], name: "ResumeEditor", computed: {
                result: function () {
                    return this.enableHtml ? o()(this.markdown) : this.markdown
                }
            }, methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }, goTop: function () {
                    this.$refs.container.scrollTop = 0
                }
            }
        }
    }, 50: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(91), o = t.n(r);
        e.default = {
            name: "Editor", props: ["code"], computed: {
                highlightedCode: function () {
                    return o.a.highlight(this.code, o.a.languages.css)
                }, codeInStyleTag: function () {
                    return "<style>" + this.code + "</style>"
                }
            }, methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }
            }
        }
    }, 51: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(46), o = t(44), i = t.n(o), s = t(45), a = t.n(s), u = document.documentElement.clientWidth;
        new r.a({
            el: "#app", render: function (n) {
                return n(u > 500 ? i.a : a.a)
            }
        })
    }, 86: function (n, e) {
    }, 87: function (n, e) {
    }, 88: function (n, e) {
    }, 89: function (n, e) {
    }, 94: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {attrs: {id: "app"}}, [t("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {code: n.currentStyle}
                }), n._v(" "), t("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {markdown: n.currentMarkdown, enableHtml: n.enableHtml}
                })], 1)
            }, staticRenderFns: []
        }
    }, 95: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {ref: "container", staticClass: "styleEditor"}, [t("div", {
                    staticClass: "code",
                    domProps: {innerHTML: n._s(n.codeInStyleTag)}
                }), n._v(" "), t("pre", {domProps: {innerHTML: n._s(n.highlightedCode)}})])
            }, staticRenderFns: []
        }
    }, 96: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {attrs: {id: "app"}}, [t("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {code: n.currentStyle}
                }), n._v(" "), t("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {markdown: n.currentMarkdown, enableHtml: n.enableHtml}
                })], 1)
            }, staticRenderFns: []
        }
    }, 97: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {
                    ref: "container",
                    staticClass: "resumeEditor",
                    class: {htmlMode: n.enableHtml}
                }, [n.enableHtml ? t("div", {domProps: {innerHTML: n._s(n.result)}}) : t("pre", [n._v(n._s(n.result))])])
            }, staticRenderFns: []
        }
    }
}, [51]);
//# sourceMappingURL=app.fc8f95cb85ffdee1956d.js.map


