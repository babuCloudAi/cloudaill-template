(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    4575: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 2145)),
        Promise.resolve().then(s.bind(s, 3418)),
        Promise.resolve().then(s.bind(s, 2406)),
        Promise.resolve().then(s.bind(s, 6499)),
        Promise.resolve().then(s.bind(s, 4913)),
        Promise.resolve().then(s.t.bind(s, 4080, 23)),
        Promise.resolve().then(s.t.bind(s, 4332, 23)),
        Promise.resolve().then(s.t.bind(s, 4822, 23));
    },
    6499: function (e, t, s) {
      "use strict";
      var i = s(7437),
        n = s(6290),
        a = s(2265);
      t.default = () => {
        let [e, t] = (0, a.useState)(""),
          [s, r] = (0, a.useState)(""),
          [l, o] = (0, a.useState)(""),
          c = async () => {
            try {
              var s;
              let i = await (0, n.a8)(
                ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819")
                  .concat("/contact/form?formType=subscribe"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: e,
                    isSubscribed: !0,
                    site: "engro-microsite",
                  }),
                }
              );
              if (
                ((
                  null == i
                    ? void 0
                    : null === (s = i.data) || void 0 === s
                    ? void 0
                    : s.InsertedID
                )
                  ? (t(""),
                    o("Thank you for your Subscribing"),
                    setTimeout(() => {
                      o("");
                    }, 2e3))
                  : r("Email is already subscribed"),
                i.ok)
              )
                throw Error("response status: ".concat(i.status));
            } catch (e) {
              console.log(e);
            }
          };
        return (0, i.jsx)("div", {
          children: (0, i.jsxs)("div", {
            className: "latest_blog_container",
            children: [
              (0, i.jsx)("h3", {
                children: "Driving Innovation, Delivering Excellence",
              }),
              (0, i.jsx)("div", {
                className: "form_container relative",
                children: (0, i.jsxs)("form", {
                  action: "",
                  children: [
                    (0, i.jsxs)("div", {
                      style: { position: "relative", width: "100%" },
                      className: "wraper",
                      children: [
                        (0, i.jsx)("input", {
                          className: "input_sec",
                          type: "text",
                          placeholder: "Enter Your Email Address",
                          value: e,
                          onChange: (e) => t(e.target.value),
                          required: !0,
                          "aria-label": "Enter Your Email Address",
                        }),
                        l && !s
                          ? (0, i.jsx)("span", {
                              className: "subscribe_validations",
                              style: { color: "green", top: "3.5rem" },
                              children: l,
                            })
                          : "",
                        s && !l
                          ? (0, i.jsx)("span", {
                              className: "subscribe_validations",
                              children: s,
                            })
                          : "",
                      ],
                    }),
                    (0, i.jsx)("button", {
                      className: "btn",
                      onClick: (t) => {
                        t.preventDefault();
                        let s = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
                        s
                          ? (r(""), c(t))
                          : "" === e
                          ? r(" Please Enter Email")
                          : s || r("Email is not valid");
                      },
                      children: "Submit",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    4913: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = s(7437),
        n = s(6648);
      function a(e) {
        let { src: t } = e;
        return t;
      }
      t.default = (e) => {
        let {
          src: t,
          alt: s,
          priority: r = !1,
          className: l = "",
          width: o = "720",
          height: c = "360",
        } = e;
        return (0, i.jsx)(n.default, {
          className: l,
          src: t,
          alt: s,
          width: o,
          height: c,
          priority: r,
          loader: a,
        });
      };
    },
    2145: function (e, t, s) {
      "use strict";
      var i = s(7437);
      t.default = () =>
        (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("noscript", {
            children: (0, i.jsx)("iframe", {
              src: "https://www.googletagmanager.com/ns.html?id=GTM-TD562M6L",
              height: "0",
              width: "0",
              style: { display: "none", visibility: "hidden" },
            }),
          }),
        });
    },
    3418: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return c;
        },
      });
      var i = s(7437),
        n = s(2265),
        a = s(4913);
      let r = [
        // {
        //   title: "Expertise and Solutions",
        //   url: "#",
        //   isDropdown: !0,
        //   children: [
        //     {
        //       title: "IoT Solutions",
        //       url: "/expertise-and-solutions/iot-solutions",
        //     },
        //     {
        //       title: "Cloud Security",
        //       url: "/expertise-and-solutions/cloud-security",
        //     },
        //     {
        //       title: "AI/ML Solutions",
        //       url: "/expertise-and-solutions/ai-ml-solutions",
        //     },
        //     {
        //       title: "Database Management",
        //       url: "/expertise-and-solutions/database-management",
        //     },
        //     {
        //       title: "Media and OTT Solutions",
        //       url: "/expertise-and-solutions/media-and-ott-solutions",
        //     },
        //     {
        //       title: "Multi-Cloud Infrastructure Management",
        //       url: "/expertise-and-solutions/multi-cloud-infrastructure-management",
        //     },
        //     {
        //       title: "Application Development and Modernization",
        //       url: "/expertise-and-solutions/application-development-and-modernization",
        //     },
        //   ],
        // },
        { title: "Home", url: "/index.html", isDropdown: !1, children: [] },
        {
          title: "About Us",
          url: "/about-us.html",
          isDropdown: !1,
          children: [],
        },
        {
          title: "Services",
          url: "#",
          isDropdown: !0,
          children: [
            {
              title: "Enterprise Modernization",
              url: "/servicespages/enterprise_modernization.html",
            },
            {
              title: "Digital Transformation",
              url: "/servicespages/digital_transformation.html",
            },
            { title: "IT Staffing", url: "/servicespages/itstaffing.html" },
          ],
        },
        { title: "Careers", url: "/", isDropdown: !1, children: [] },
      ];
      var l = s(6463);
      let o = (e) => {
        let { item: t, showSidebar: s, setShowSideBar: a, currentPath: r } = e,
          [l, o] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          s || o(!1);
        }, [s]);
        let c = (e) => {
          e.preventDefault(), o(!l);
        };
        return (0, i.jsxs)("li", {
          className: s ? "has-sub" : "",
          children: [
            s &&
              (0, i.jsx)("span", {
                onClick: () => o(!l),
                className: "submenu-button".concat(l ? "submenu-opened" : ""),
              }),
            (0, i.jsxs)("a", {
              href: null == t ? void 0 : t.url,
              onClick: (e) => {
                c(e);
              },
              children: [
                null == t ? void 0 : t.title,
                " ",
                (0, i.jsx)("i", { className: "arrow down" }),
              ],
            }),
            (0, i.jsx)("ul", {
              className: "header_dropdown_items ".concat(l ? "open" : "close"),
              children: t.children.map((e, t) =>
                (0, i.jsx)(
                  "li",
                  {
                    onClick: () => a(!1),
                    children: (0, i.jsx)("a", {
                      className: e.url === r ? "activeMenuTab" : "",
                      href: e.url,
                      children: e.title,
                    }),
                  },
                  t + e
                )
              ),
            }),
          ],
        });
      };
      var c = () => {
        let [e, t] = (0, n.useState)(!1),
          s = (0, l.usePathname)(),
          c = () => {
            document.querySelector("main").addEventListener("click", (e) => {
              t(!1);
            });
          };
        return (
          (0, n.useEffect)(() => {
            c();
          }, []),
          (0, i.jsx)("section", {
            className: "top_container",
            children: (0, i.jsx)("header", {
              children: (0, i.jsx)("section", {
                className: e
                  ? "logo_menu_cont sidebar_active"
                  : "logo_menu_cont",
                children: (0, i.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, i.jsx)("a", {
                      href: "/",
                      children: (0, i.jsx)(a.default, {
                        className: "logo",
                        src: "/images/cloudai_logo_header.svg",
                        alt: "logo",
                        width: "300",
                        height: "40",
                      }),
                    }),
                    (0, i.jsx)("section", {
                      className: "primary-wrap sidenav sidemenu nav-wrap",
                      id: "push_sidebar",
                      children: (0, i.jsx)("div", {
                        className: "main-menu primary-nav",
                        children: (0, i.jsx)("nav", {
                          className: "offscreen-navigation",
                          children: (0, i.jsx)("ul", {
                            className: "nav",
                            children: r.map((n, a) =>
                              n.isDropdown
                                ? (0, i.jsx)(
                                    o,
                                    {
                                      item: n,
                                      showSidebar: e,
                                      setShowSideBar: t,
                                      currentPath: s,
                                    },
                                    a
                                  )
                                : (0, i.jsx)(
                                    "li",
                                    {
                                      onClick: () => t(!1),
                                      children: (0, i.jsx)("a", {
                                        className:
                                          n.url === s ? "activeMenuTab" : "",
                                        href: n.url,
                                        children: n.title,
                                      }),
                                    },
                                    a
                                  )
                            ),
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "menu_mob",
                      children: [
                        (0, i.jsx)("a", {
                          href: "/contact-us.html",
                          className: "btn",
                          children: "Contact Us",
                        }),
                        (0, i.jsx)("div", {
                          className: "show_mobile",
                          children: (0, i.jsxs)("button", {
                            type: "button",
                            className:
                              "side-menu-open side-menu-trigger nav-trigger",
                            "aria-label": "Menu",
                            onClick: () => {
                              t(!e);
                            },
                            children: [
                              (0, i.jsxs)("span", {
                                className: "menu-btn-icon sidebarBtn",
                                children: [
                                  (0, i.jsx)("span", { className: "bar" }),
                                  " ",
                                  (0, i.jsx)("span", { className: "bar" }),
                                  (0, i.jsx)("span", { className: "bar" }),
                                ],
                              }),
                              (0, i.jsx)("span", {
                                className: "menu-text",
                                children: "Menu",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
    },
    2406: function (e, t, s) {
      "use strict";
      var i = s(7437),
        n = s(2265);
      t.default = () => {
        let [e, t] = (0, n.useState)("0");
        return (0, i.jsx)("div", {
          className: "social_sec",
          children: [
            // {
            //   title: "Facebook",
            //   imageSrc: "/images/fb.svg",
            //   hoverImageSrc: "/images/fb_hvr.svg",
            //   url: "https://www.facebook.com/EngroTechnologies/",
            //   className: "display_none",
            // },
            {
              title: "Linkdin",
              imageSrc: "/images/linkedin.svg",
              hoverImageSrc: "/images/linkedin.svg",
              url: "https://www.linkedin.com/company/cloudai-technologies/posts/?feedView=all",
            },
            // {
            //   title: "Instagram",
            //   imageSrc: "/images/insta.svg",
            //   hoverImageSrc: "/images/insta_hvr.svg",
            //   url: "https://www.instagram.com/engrotechnologies/",
            //   className: "display_none",
            // },
            // {
            //   title: "Twitter",
            //   imageSrc: "/images/x.svg",
            //   hoverImageSrc: "/images/x_hvr.svg",
            //   url: "https://x.com/EngroTech",
            //   className: "display_none",
            // },
          ].map((s, n) =>
            (0, i.jsx)(
              "a",
              {
                href: s.url,
                target: "_blank",
                onMouseOver: (e) => {
                  t(null == s ? void 0 : s.title);
                },
                onMouseOut: (e) => {
                  t("0");
                },
                children:
                  e == (null == s ? void 0 : s.title)
                    ? (0, i.jsx)("img", {
                        src: null == s ? void 0 : s.hoverImageSrc,
                        alt: s.title,
                        width: 40,
                        height: 40,
                      })
                    : (0, i.jsx)("img", {
                        src: s.imageSrc,
                        alt: s.title,
                        width: 40,
                        height: 40,
                      }),
              },
              n
            )
          ),
        });
      };
    },
    6290: function (e, t, s) {
      "use strict";
      s.d(t, {
        a8: function () {
          return i;
        },
      });
      let i = async function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          let s = { ...t, cache: "no-store" },
            i = await fetch(e, { ...s });
          if (!i.ok) throw Error("Network response was not ok");
          return await i.json();
        } catch (e) {
          return s;
        }
      };
    },
    4822: function () {},
    4332: function () {},
  },
  function (e) {
    e.O(0, [6865, 6648, 143, 2971, 7023, 1744], function () {
      return e((e.s = 4575));
    }),
      (_N_E = e.O());
  },
]);
