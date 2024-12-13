(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6681],
  {
    5539: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(6290),
        l = a(2265),
        o = a(4913);
      i.default = (e) => {
        let { playListData: i, pageData: a } = e,
          [r, s] = (0, l.useState)([]),
          [c, d] = (0, l.useState)(""),
          [m, x] = (0, l.useState)(""),
          [h, p] = (0, l.useState)(1),
          k = "https://xmsapifo.engro.in/api/frontend/v2/",
          u = async () => {
            try {
              var e;
              let i = await (0, n.a8)(
                "".concat(k).concat("819").concat("/settings/blogcategories/en")
              );
              s(
                null == i
                  ? void 0
                  : null === (e = i.data) || void 0 === e
                  ? void 0
                  : e.items
              );
            } catch (e) {
              console.log(e);
            }
          },
          v = async function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            try {
              var i;
              let a = await (0, n.a8)(
                "".concat(k).concat("819").concat("/blog/docs/en"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    limit: 6 * e,
                    offset: 0,
                    filters: c ? [{ field: "category", value: [c] }] : [],
                  }),
                }
              );
              if (
                (null == a ? void 0 : a.data) &&
                (null == a
                  ? void 0
                  : null === (i = a.data) || void 0 === i
                  ? void 0
                  : i.length) > 0
              ) {
                let e =
                  null == a
                    ? void 0
                    : a.data.filter(
                        (e) =>
                          (null == e ? void 0 : e.status.toLowerCase()) ===
                          "published"
                      );
                x(e);
              }
            } catch (e) {
              console.log(e);
            }
          };
        return (
          (0, l.useEffect)(() => {
            u(), v(1);
          }, []),
          (0, l.useEffect)(() => {
            v(h);
          }, [c, h]),
          (0, t.jsxs)("div", {
            className: "tabs_wrapper",
            children: [
              (null == a ? void 0 : a.displayTabs)
                ? (0, t.jsxs)("ul", {
                    className: "tabs",
                    children: [
                      (0, t.jsx)("li", {
                        className: "" === c ? "active" : "",
                        id: "event_tab1",
                        onClick: (e) => {
                          e.preventDefault(), d(""), p(1);
                        },
                        children: "All Blogs",
                      }),
                      r && r.length > 0
                        ? r.map((e, i) =>
                            (0, t.jsx)(
                              "li",
                              {
                                onClick: (i) => {
                                  i.preventDefault(),
                                    d(null == e ? void 0 : e.value),
                                    p(1);
                                },
                                className:
                                  c === (null == e ? void 0 : e.value)
                                    ? "active"
                                    : "",
                                children: null == e ? void 0 : e.label,
                              },
                              i
                            )
                          )
                        : null,
                    ],
                  })
                : "",
              (0, t.jsx)("div", {
                className: "tabs_container",
                children: (0, t.jsx)("div", {
                  className: "tab_content active",
                  "data-tab": "event_tab1",
                  children: (0, t.jsx)("div", {
                    className: "review_listing",
                    children:
                      m && m.length > 0
                        ? m.map((e) => {
                            var i;
                            let n =
                              (e.images &&
                                e.images.length > 0 &&
                                e.images[0].imageUrl[0]) ||
                              "";
                            return (0, t.jsxs)("div", {
                              className: "list_box",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "img_sec",
                                  children: (0, t.jsx)("a", {
                                    href: "#",
                                    children: (0, t.jsx)(o.default, {
                                      src: n,
                                      alt: e.name,
                                    }),
                                  }),
                                }),
                                (0, t.jsx)("p", { children: e.category }),
                                (0, t.jsx)("h3", { children: e.name }),
                                (0, t.jsxs)("a", {
                                  href:
                                    null !==
                                      (i = ""
                                        .concat(null == a ? void 0 : a.pageUrl)
                                        .concat(null == e ? void 0 : e.slug)) &&
                                    void 0 !== i
                                      ? i
                                      : "",
                                  className: "read_more",
                                  children: [
                                    "Read Blog",
                                    (0, t.jsxs)("svg", {
                                      width: "16",
                                      height: "16",
                                      viewBox: "0 0 16 16",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [
                                        (0, t.jsx)("path", {
                                          d: "M0.995117 8.12085L14.2541 8.12085",
                                          stroke: "#023540",
                                          "stroke-width": "1.79444",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        }),
                                        (0, t.jsx)("path", {
                                          d: "M8.57227 1.72778L14.965 8.12049L8.57227 14.5132",
                                          stroke: "#023540",
                                          "stroke-width": "1.79444",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            });
                          })
                        : "",
                  }),
                }),
              }),
              m.length >= 6 * h
                ? (0, t.jsx)("div", {
                    className: "btn_sec",
                    onClick: (e) => {
                      e.preventDefault(), p(h + 1);
                    },
                    children: (0, t.jsx)("a", {
                      href: "#",
                      className: "btn",
                      children: "Load More",
                    }),
                  })
                : null,
            ],
          })
        );
      };
    },
    4929: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(6290),
        l = a(2265);
      i.default = (e) => {
        let { playListData: i, pageUrl: a } = e,
          [o, r] = (0, l.useState)({
            position: !1,
            location: !1,
            department: !1,
          }),
          [s, c] = (0, l.useState)({
            position: [],
            location: [],
            department: [],
          }),
          [d, m] = (0, l.useState)({
            position: [],
            location: [],
            department: [],
          }),
          [x, h] = (0, l.useState)({
            position: "",
            location: "",
            department: "",
          }),
          [p, k] = (0, l.useState)([]),
          [u, v] = (0, l.useState)(0),
          [y, g] = (0, l.useState)(6),
          E = async (e) => {
            let i = [];
            try {
              var a;
              return (
                (null == (i = await (0, n.a8)(e))
                  ? void 0
                  : null === (a = i.data) || void 0 === a
                  ? void 0
                  : a.items) || []
              );
            } catch (e) {
              return console.log(e), [];
            }
          },
          A = async () => {
            try {
              let e = "https://xmsapifo.engro.in/api/frontend/v2/",
                [i = [], a = [], t = []] = await Promise.all([
                  E("".concat(e).concat("819", "/settings/positions/en")),
                  E("".concat(e).concat("819", "/settings/locations/en")),
                  E("".concat(e).concat("819", "/settings/departments/en")),
                ]);
              c({ position: i, location: a, department: t }),
                m({ position: i, location: a, department: t });
            } catch (e) {
              console.log(e), c({ position: [], location: [], department: [] });
            }
          };
        (0, l.useEffect)(() => {
          var e, a;
          A(),
            (null == i
              ? void 0
              : null === (e = i.content) || void 0 === e
              ? void 0
              : e.length) >= y
              ? k(i.content.slice(0, y))
              : k(i.content),
            v(
              null == i
                ? void 0
                : null === (a = i.content) || void 0 === a
                ? void 0
                : a.length
            );
        }, []);
        let f = (e) => {
            e.preventDefault(),
              g(y + 6),
              p.length <= i.content.length && k([...i.content.slice(0, 6 * y)]);
          },
          B = function (e, a) {
            let t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
            r((e) => ({ ...e, [a]: !1 })),
              t.length > 0
                ? k(() => {
                    let e = i.content;
                    return (
                      t.map(function () {
                        let i =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "";
                        e = e.filter((e) => {
                          var a;
                          return null == e
                            ? void 0
                            : null === (a = e[i]) || void 0 === a
                            ? void 0
                            : a.toLowerCase().includes(n[i].toLowerCase());
                        });
                      }),
                      e
                    );
                  })
                : a &&
                  k(() => {
                    let t = i.content.filter((i) => {
                      var t;
                      return null === (t = i[a]) || void 0 === t
                        ? void 0
                        : t.toLowerCase().includes(e.toLowerCase().trim());
                    });
                    return v(null == t ? void 0 : t.length), t;
                  }),
              c((e) => ({ ...e, [a]: d[a] }));
          },
          b = (e, i) => {
            e.preventDefault(),
              e.target.value.length > 1
                ? r((e) => ({
                    position: "position" == i,
                    department: "department" == i,
                    location: "location" == i,
                  }))
                : r({ position: !1, location: !1, department: !1 }),
              h((a) => {
                var t, n;
                return (
                  null == e ||
                    null === (t = e.target) ||
                    void 0 === t ||
                    t.value,
                  {
                    ...a,
                    [i]:
                      null == e
                        ? void 0
                        : null === (n = e.target) || void 0 === n
                        ? void 0
                        : n.value,
                  }
                );
              }),
              c((a) => ({
                ...a,
                [i]: d[i].filter((i) => {
                  var a, t, n, l;
                  return null == i
                    ? void 0
                    : null === (l = i.name) || void 0 === l
                    ? void 0
                    : l
                        .toLowerCase()
                        .includes(
                          null == e
                            ? void 0
                            : null === (n = e.target) || void 0 === n
                            ? void 0
                            : null === (t = n.value) || void 0 === t
                            ? void 0
                            : null === (a = t.toLowerCase()) || void 0 === a
                            ? void 0
                            : a.trim()
                        );
                }),
              }));
          },
          S = (e, i, a) => {
            e.preventDefault();
            let t = {};
            h(
              (e) => (
                (t = { ...e, [a]: null == i ? void 0 : i.name }),
                { ...e, [a]: null == i ? void 0 : i.name }
              )
            );
            let n = Object.keys(t).reduce(
              (e, i) => (t[i].length > 0 ? [...e, i] : e),
              []
            );
            B(null == i ? void 0 : i.name, a, n, t);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: "select_option_cont",
              children: [
                (0, t.jsxs)("div", {
                  className: "selection_box",
                  children: [
                    (0, t.jsx)("input", {
                      type: "select",
                      className: "input_sec",
                      placeholder: "Position",
                      value: x.position,
                      onChange: (e) => b(e, "position"),
                    }),
                    (0, t.jsx)("a", {
                      href: "",
                      className: "arrow down",
                      onClick: (e) => {
                        e.preventDefault(),
                          r((e) => ({
                            position: !e.position,
                            department: !1,
                            location: !1,
                          }));
                      },
                    }),
                    o.position &&
                      (0, t.jsx)("div", {
                        className: "open_box",
                        style: { display: "block" },
                        children: (0, t.jsx)("ul", {
                          children:
                            s.position.length > 0
                              ? s.position.map((e, i) =>
                                  (0, t.jsx)(
                                    "li",
                                    {
                                      onClick: (i) => {
                                        S(i, e, "position");
                                      },
                                      children: (0, t.jsx)("a", {
                                        href: "#",
                                        children:
                                          null == e
                                            ? void 0
                                            : e.name.toUpperCase(),
                                      }),
                                    },
                                    i
                                  )
                                )
                              : (0, t.jsx)(
                                  "li",
                                  {
                                    children: (0, t.jsx)("a", {
                                      href: "#",
                                      children: "No Data Found",
                                    }),
                                  },
                                  "no_data"
                                ),
                        }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "selection_box",
                  children: [
                    (0, t.jsx)("input", {
                      type: "text",
                      className: "input_sec",
                      placeholder: "Location",
                      value: x.location,
                      onChange: (e) => b(e, "location"),
                    }),
                    (0, t.jsx)("a", {
                      href: "",
                      className: "arrow down",
                      onClick: (e) => {
                        e.preventDefault(),
                          r((e) => ({
                            location: !e.location,
                            position: !1,
                            department: !1,
                          }));
                      },
                    }),
                    o.location &&
                      (0, t.jsx)("div", {
                        className: "open_box",
                        style: { display: "block" },
                        children: (0, t.jsx)("ul", {
                          children:
                            s.location.length > 0
                              ? s.location.map((e, i) =>
                                  (0, t.jsx)(
                                    "li",
                                    {
                                      onClick: (i) => {
                                        S(i, e, "location");
                                      },
                                      children: (0, t.jsx)("a", {
                                        href: "#",
                                        children:
                                          null == e
                                            ? void 0
                                            : e.name.toUpperCase(),
                                      }),
                                    },
                                    i
                                  )
                                )
                              : (0, t.jsx)(
                                  "li",
                                  {
                                    children: (0, t.jsx)("a", {
                                      href: "#",
                                      children: "No Data Found",
                                    }),
                                  },
                                  "no_data"
                                ),
                        }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "selection_box",
                  children: [
                    (0, t.jsx)("input", {
                      type: "text",
                      className: "input_sec",
                      placeholder: "Department",
                      value: x.department,
                      onChange: (e) => b(e, "department"),
                    }),
                    (0, t.jsx)("a", {
                      href: "",
                      className: "arrow down",
                      onClick: (e) => {
                        e.preventDefault(),
                          r((e) => ({
                            department: !e.department,
                            location: !1,
                            position: !1,
                          }));
                      },
                    }),
                    o.department &&
                      (0, t.jsx)("div", {
                        className: "open_box",
                        style: { display: "block" },
                        children: (0, t.jsx)("ul", {
                          children:
                            s.department.length > 0
                              ? s.department.map((e, i) =>
                                  (0, t.jsx)(
                                    "li",
                                    {
                                      onClick: (i) => {
                                        S(i, e, "department");
                                      },
                                      children: (0, t.jsx)("a", {
                                        href: "#",
                                        children:
                                          null == e
                                            ? void 0
                                            : e.name.toUpperCase(),
                                      }),
                                    },
                                    i
                                  )
                                )
                              : (0, t.jsx)(
                                  "li",
                                  {
                                    children: (0, t.jsx)("a", {
                                      href: "#",
                                      children: "No Data Found",
                                    }),
                                  },
                                  "no_data"
                                ),
                        }),
                      }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "selection_result_container",
              children: p.map((e, i) => {
                let n = new Date(
                  null == e ? void 0 : e.createdAt
                ).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                });
                return (0, t.jsx)(t.Fragment, {
                  children:
                    (null == e ? void 0 : e.name) &&
                    (null == e ? void 0 : e.name.length) > 3 &&
                    (0, t.jsxs)(
                      "div",
                      {
                        className: "result_box",
                        children: [
                          (0, t.jsx)("span", {
                            className: "date",
                            children: n,
                          }),
                          (0, t.jsx)("h3", {
                            children: null == e ? void 0 : e.name,
                          }),
                          (0, t.jsx)("p", {
                            children: null == e ? void 0 : e.description,
                          }),
                          (0, t.jsx)("div", {
                            className: "tags_container",
                            children:
                              (null == e ? void 0 : e.tags) &&
                              (null == e ? void 0 : e.tags.length) > 0 &&
                              (null == e
                                ? void 0
                                : e.tags.map((e, i) =>
                                    (0, t.jsx)(
                                      "a",
                                      { href: "#", children: e },
                                      i
                                    )
                                  )),
                          }),
                          (0, t.jsx)("a", {
                            href: ""
                              .concat(a, "/")
                              .concat(null == e ? void 0 : e.key, "?jobId=")
                              .concat(null == e ? void 0 : e.jobId),
                            className: "apply_now",
                            children: "Apply Now",
                          }),
                        ],
                      },
                      i
                    ),
                });
              }),
            }),
            0 == p.length
              ? (0, t.jsx)("div", {
                  className: "openings_no_data_found",
                  children: (0, t.jsx)("span", { children: "No Data Found" }),
                })
              : null,
            p.length > 0 &&
              u > p.length &&
              (0, t.jsx)("div", {
                className: "btn_sec",
                onClick: (e) => f(e),
                children: (0, t.jsx)("a", {
                  href: "#",
                  className: "btn",
                  children: "Load More",
                }),
              }),
          ],
        });
      };
    },
    3276: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(6290),
        l = a(2265);
      i.default = () => {
        let [e, i] = (0, l.useState)({
            email: "",
            name: "",
            mobile: "",
            businessType: "",
            message: "",
          }),
          [a, o] = (0, l.useState)(!1),
          [r, s] = (0, l.useState)(0),
          c = [
            { name: "Select Business Type", value: "" },
            { name: "Project", value: "Project" },
            { name: "Partnership", value: "Partnership" },
            { name: "Resource Management", value: "Resource Management" },
          ],
          [d, m] = (0, l.useState)({}),
          [x, h] = (0, l.useState)(""),
          [p, k] = (0, l.useState)(""),
          u = (e) => {
            let { name: a, value: t = "" } = e.target;
            ("email" === a || "mobile" === a) && (t = t.replace(/\s+/g, "")),
              p.length > 0 && k(""),
              i((e) => ({ ...e, [a]: t }));
          },
          v = async () => {
            let a = { ...e };
            (a.name = a.name.trim()), (a.message = a.message.trim());
            try {
              var t;
              let e = await (0, n.a8)(
                ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819")
                  .concat("/contact/form?formType=contactUs"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ site: "engro-microsite", ...a }),
                }
              );
              if (
                ((null == e
                  ? void 0
                  : null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.InsertedID) &&
                  (i({
                    email: "",
                    name: "",
                    mobile: "",
                    businessType: "",
                    message: "",
                  }),
                  s(0),
                  h(
                    "Thank you for your submission. We will get back to you soon."
                  ),
                  setTimeout(() => {
                    h("");
                  }, 5e3)),
                0 == Object.keys(e).length &&
                  k(
                    "We already received your request. We will get back to you shortly."
                  ),
                e.ok)
              )
                throw Error("response status: ".concat(e.status));
            } catch (e) {
              console.log(e);
            }
          },
          y = async (i) => {
            i.preventDefault();
            let {
                email: a,
                name: t,
                mobile: n,
                businessType: l,
                message: o,
              } = e,
              r = {};
            t || (r.name = "Name is required"),
              a
                ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a) ||
                  (r.email = "Invalid email address")
                : (r.email = "Email is required"),
              n
                ? /^\d{4,20}$/.test(n) ||
                  (r.mobile = "Invalid phone number (must be 4 to 20 digits)")
                : (r.mobile = "Phone Number is required"),
              Object.keys(r).length > 0 ? m(r) : (m(r), v());
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("form", {
            className: "form_sec",
            onSubmit: (e) => y(e),
            children: [
              (0, t.jsxs)("div", {
                className: "form_row",
                children: [
                  (0, t.jsxs)("div", {
                    style: { position: "relative" },
                    className: "form_col",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "name",
                        children: "Name*",
                      }),
                      (0, t.jsx)("input", {
                        type: "text",
                        placeholder: "Enter your Name",
                        value: e.name,
                        className: "input_sec",
                        name: "name",
                        id: "name",
                        required: !0,
                        onChange: u,
                      }),
                      d.name &&
                        (0, t.jsx)("span", {
                          className: "form-error",
                          style: { color: "red" },
                          children: d.name,
                        }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    style: { position: "relative" },
                    className: "form_col",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "email",
                        children: "Email*",
                      }),
                      (0, t.jsx)("input", {
                        type: "text",
                        placeholder: "Enter Your Email",
                        value: e.email,
                        className: "input_sec",
                        name: "email",
                        id: "email",
                        required: !0,
                        onChange: u,
                      }),
                      d.email &&
                        (0, t.jsx)("span", {
                          className: "form-error",
                          children: d.email,
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "form_row",
                children: [
                  (0, t.jsxs)("div", {
                    style: { position: "relative" },
                    className: "form_col",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "mobile",
                        children: "Phone Number* ",
                      }),
                      (0, t.jsx)("input", {
                        type: "text",
                        placeholder: "Enter Your Phone Number",
                        value: e.mobile,
                        className: "input_sec",
                        name: "mobile",
                        id: "mobile",
                        required: !0,
                        onChange: u,
                      }),
                      d.mobile &&
                        (0, t.jsx)("span", {
                          className: "form-error mobile-error",
                          children: d.mobile,
                        }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    style: { position: "relative" },
                    className: "form_col",
                    children: [
                      d.businessType &&
                        (0, t.jsx)("span", {
                          className: "form-error",
                          children: d.businessType,
                        }),
                      (0, t.jsx)("label", {
                        htmlFor: "businessType",
                        children: "Business Type",
                      }),
                      (0, t.jsxs)("div", {
                        style: { position: "relative", width: "100%" },
                        children: [
                          (0, t.jsx)("input", {
                            type: "text",
                            id: "businessType",
                            className: "input_sec",
                            placeholder: "Business Type",
                            value: c[r].name,
                            onClick: () => o(!a),
                          }),
                          (0, t.jsx)("span", {
                            href: "",
                            className: "business_arrow_down down",
                            onClick: (e) => {
                              e.preventDefault(), o(!a);
                            },
                          }),
                          a &&
                            (0, t.jsx)("div", {
                              className: "busniess_type_open_box",
                              style: { display: "block" },
                              children: (0, t.jsx)("ul", {
                                children: c.map((n, l) =>
                                  (0, t.jsx)(
                                    "li",
                                    {
                                      onClick: (t) => {
                                        s(l),
                                          o(!a),
                                          i({
                                            ...e,
                                            businessType:
                                              null == n ? void 0 : n.name,
                                          });
                                      },
                                      children: (0, t.jsx)("span", {
                                        href: "#",
                                        children: null == n ? void 0 : n.name,
                                      }),
                                    },
                                    l
                                  )
                                ),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                style: { position: "relative" },
                className: "form_row contact-us-text-area",
                children: [
                  (0, t.jsx)("label", {
                    htmlFor: "message",
                    children: "Message",
                  }),
                  (0, t.jsx)("textarea", {
                    name: "message",
                    id: "message",
                    value: e.message,
                    onChange: u,
                    maxLength: 500,
                    placeholder: "Write Your Message",
                  }),
                  x &&
                    (0, t.jsx)("span", {
                      className: "submit-status",
                      style: {
                        color: "green",
                        position: "absolute",
                        left: "6px",
                      },
                      children: x,
                    }),
                  p &&
                    (0, t.jsx)("span", {
                      className: "form-error submit-status",
                      children: p,
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "form_row",
                children: (0, t.jsx)("input", {
                  type: "submit",
                  value: "Submit",
                  className: "btn",
                  onClick: (e) => y(e),
                }),
              }),
            ],
          }),
        });
      };
    },
    9357: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return c;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(5964);
      let o = (e) => {
        let { onClick: i, activeIndex: a, myIndex: n } = e;
        return (0, t.jsx)("button", {
          className: "dot",
          onClick: i,
          style: {
            backgroundColor:
              a == n ? "rgba(2, 53, 64, 1)" : "rgba(199, 232, 232, 1)",
          },
        });
      };
      function r(e) {
        let { content: i = [] } = e,
          a = (0, n.useRef)(),
          [r, s] = (0, n.useState)(0),
          c =
            null == i
              ? void 0
              : i.map((e, i) =>
                  (0, t.jsx)(
                    "li",
                    {
                      className: "splide__slide",
                      children: (0, t.jsxs)("div", {
                        className: "row_box",
                        children: [
                          (0, t.jsx)("h4", {
                            children: (null == e ? void 0 : e.name) || "",
                          }),
                          (0, t.jsx)("p", {
                            children:
                              (null == e ? void 0 : e.description) || "",
                          }),
                        ],
                      }),
                    },
                    i
                  )
                ),
          d = (e) => {
            s(e), a.current.swiper.slideTo(e);
          };
        return (0, t.jsxs)("div", {
          className: "splide ui_ux_slider",
          children: [
            (0, t.jsx)(l.default, {
              onSlideChange: (e) => {
                s(null == e ? void 0 : e.activeIndex);
              },
              swiperRef: a,
              sliderComponents: c,
              autoplayOptions: !1,
              spaceBetween: 40,
            }),
            (0, t.jsx)("div", {
              className: "features_slider_dots_container",
              children:
                null == c
                  ? void 0
                  : c.map((e, i) =>
                      (0, t.jsx)(
                        o,
                        { myIndex: i, activeIndex: r, onClick: () => d(i) },
                        i
                      )
                    ),
            }),
          ],
        });
      }
      let s = (e) => {
        let { name: i = "", desc: a = "", active: n = !1, onClick: l } = e;
        return (0, t.jsxs)("div", {
          className: "faqs",
          children: [
            (0, t.jsx)("button", {
              onClick: l,
              className: "accordion ".concat(n ? "active" : ""),
              children: i,
            }),
            (0, t.jsx)("div", {
              className: "panel ".concat(n ? "show_accordion_item" : ""),
              children: (0, t.jsx)("div", {
                className: "text_row",
                children: (0, t.jsx)("p", { children: a }),
              }),
            }),
          ],
        });
      };
      function c(e) {
        let { content: i } = e,
          [a, l] = (0, n.useState)(0),
          o = (e) => {
            l(e);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: "faqs_container",
              children:
                null == i
                  ? void 0
                  : i.map((e, i) =>
                      (0, t.jsx)(
                        s,
                        {
                          name: null == e ? void 0 : e.name,
                          desc: null == e ? void 0 : e.description,
                          active: a == i,
                          onClick: () => o(i),
                        },
                        i
                      )
                    ),
            }),
            (0, t.jsx)(r, { content: i }),
          ],
        });
      }
    },
    7402: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(6290),
        l = a(2265),
        o = a(4913),
        r = a(5964);
      i.default = (e) => {
        let { playListData: i } = e,
          [a, s] = (0, l.useState)([]),
          [c, d] = (0, l.useState)(""),
          [m, x] = (0, l.useState)([]),
          [h, p] = (0, l.useState)([]),
          [k, u] = (0, l.useState)(!1),
          [v, y] = (0, l.useState)(""),
          [g, E] = (0, l.useState)(1),
          A = "https://xmsapifo.engro.in/api/frontend/v2/",
          f = (0, l.useRef)(),
          [B, b] = (0, l.useState)([]),
          [S, D] = (0, l.useState)(!0),
          j = function () {
            var e, i;
            let a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            "prev" == a
              ? f.current.swiper.slidePrev()
              : f.current.swiper.slideNext(),
              (null === (i = f.current) || void 0 === i
                ? void 0
                : null === (e = i.swiper) || void 0 === e
                ? void 0
                : e.realIndex) !== 0 && D(!1);
          },
          C = async () => {
            try {
              var e, i;
              let a = await (0, n.a8)(
                ""
                  .concat(A)
                  .concat("819")
                  .concat("/settings/gallerycategories/en")
              );
              (null == a
                ? void 0
                : null === (e = a.data) || void 0 === e
                ? void 0
                : e.items) &&
                s(
                  null == a
                    ? void 0
                    : null === (i = a.data) || void 0 === i
                    ? void 0
                    : i.items
                );
            } catch (e) {
              console.log(e);
            }
          },
          w = async () => {
            try {
              var e;
              let i = await (0, n.a8)(
                "".concat(A).concat("819").concat("/galleries/docs/en"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    limit: 6 * g,
                    offset: 0,
                    filters: c ? [{ field: "category", value: [c] }] : [],
                  }),
                }
              );
              if (
                (null == i ? void 0 : i.data) &&
                (null == i
                  ? void 0
                  : null === (e = i.data) || void 0 === e
                  ? void 0
                  : e.length) > 0
              ) {
                let e =
                  null == i
                    ? void 0
                    : i.data.reduce(
                        (e, i) =>
                          (null == i ? void 0 : i.gallery) &&
                          (null == i ? void 0 : i.gallery.length) > 0
                            ? [...e, ...(null == i ? void 0 : i.gallery)]
                            : e,
                        []
                      );
                p(null == i ? void 0 : i.data), x(e);
              }
            } catch (e) {
              console.log(e);
            }
          };
        (0, l.useEffect)(() => {
          C(), w();
        }, []),
          (0, l.useEffect)(() => {
            w();
          }, [c]);
        let N = (e) => {
            u(!0), y(e);
          },
          I = () => {
            let e = m
              .slice(0, 30)
              .reduce(
                (e, i) =>
                  (null == i ? void 0 : i.imageUrl) !== v
                    ? [...e, null == i ? void 0 : i.imageUrl]
                    : e,
                []
              );
            return [v, ...e].map((e, i) =>
              (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)(
                  "figure",
                  { children: (0, t.jsx)(o.default, { src: e, alt: e }) },
                  i
                ),
              })
            );
          };
        return (
          (0, l.useEffect)(() => {
            b(I());
          }, [v]),
          (0, t.jsxs)("div", {
            className: "tabs_wrapper",
            children: [
              a && a.length > 0
                ? (0, t.jsxs)("ul", {
                    className: "tabs event_gallery",
                    children: [
                      (0, t.jsx)("li", {
                        className: "" === c ? "active" : "",
                        id: "event_tab1",
                        onClick: (e) => {
                          e.preventDefault(), d(""), E(1);
                        },
                        children: "All",
                      }),
                      a && a.length > 0
                        ? a.map((e, i) =>
                            (0, t.jsx)(
                              "li",
                              {
                                onClick: (i) => {
                                  i.preventDefault(),
                                    d(null == e ? void 0 : e.value),
                                    E(1);
                                },
                                className:
                                  c === (null == e ? void 0 : e.value)
                                    ? "active"
                                    : "",
                                children: null == e ? void 0 : e.label,
                              },
                              i
                            )
                          )
                        : null,
                    ],
                  })
                : null,
              (0, t.jsx)("div", {
                className: "tabs_container event_gallery",
                children: (0, t.jsxs)("div", {
                  className: "tab_content active",
                  "data-tab": "event_tab1",
                  children: [
                    m && m.length > 0
                      ? m.map((e, i) =>
                          i < 6 * g
                            ? (0, t.jsx)(
                                "div",
                                {
                                  className: "img_sec",
                                  children: (0, t.jsxs)("a", {
                                    href: "#",
                                    children: [
                                      (0, t.jsx)(o.default, {
                                        src: null == e ? void 0 : e.imageUrl,
                                        alt: null == e ? void 0 : e.name,
                                        className: "img_sec_img",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "img_details",
                                        onClick: (i) => {
                                          i.preventDefault(),
                                            N(null == e ? void 0 : e.imageUrl);
                                        },
                                        children: (0, t.jsx)("img", {
                                          src: "/images/magnifying-glass-svgrepo-com.svg",
                                          alt: "magnify",
                                          className: "img_details_img",
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                i
                              )
                            : ""
                        )
                      : null,
                    m.length > 6 * g
                      ? (0, t.jsx)("div", {
                          className: "btn_sec",
                          onClick: (e) => {
                            e.preventDefault(), E(g + 1);
                          },
                          children: (0, t.jsx)("a", {
                            href: "#",
                            className: "btn",
                            children: "Load More",
                          }),
                        })
                      : null,
                  ],
                }),
              }),
              k
                ? (0, t.jsx)("div", {
                    className: "popup_rapper",
                    children: (0, t.jsxs)("div", {
                      className: "popup_img_rapper",
                      children: [
                        (0, t.jsx)("span", {
                          className: "close_popup",
                          onClick: (e) => {
                            e.preventDefault(), u(!1), D(!1);
                          },
                          children: "X",
                        }),
                        (0, t.jsx)("div", {
                          className: "popup_left_arrow",
                          onClick: (e) => {
                            e.preventDefault(), S || j("prev");
                          },
                          style: {
                            cursor: S ? "not-allowed" : "pointer",
                            opacity: S ? 0.5 : 1,
                          },
                          children: (0, t.jsx)("img", {
                            src: "/images/ArrowCircleRight.svg",
                          }),
                        }),
                        B && B.length > 0
                          ? (0, t.jsx)(r.default, {
                              autoplayOptions: !1,
                              sliderComponents: B,
                              swiperRef: f,
                              loop: !1,
                            })
                          : null,
                        (0, t.jsx)("div", {
                          className: "popup_right_arrow",
                          onClick: (e) => {
                            e.preventDefault(), j("next");
                          },
                          children: (0, t.jsx)("img", {
                            src: "/images/ArrowCircleRight.svg",
                          }),
                        }),
                      ],
                    }),
                  })
                : null,
            ],
          })
        );
      };
    },
    1392: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(2265),
        l = a(4913);
      i.default = (e) => {
        let { playListData: i } = e,
          [a, o] = (0, n.useState)(),
          [r, s] = (0, n.useState)({ desktop: "", mobile: "" });
        return (
          (0, n.useEffect)(() => {
            if (
              (i.otherData.images.map((e) =>
                (
                  null == e
                    ? void 0
                    : e.imageCategory.toLowerCase().includes("mobile")
                )
                  ? s((i) => ({ ...i, mobile: e.imageUrl[0] }))
                  : s((i) => ({ ...i, desktop: e.imageUrl[0] }))
              ),
              void 0 !== window)
            ) {
              let e = () => {
                o(window.innerWidth);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                window.removeEventListener("resize", e)
              );
            }
          }, []),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "image_sec",
              children: (0, t.jsx)("picture", {
                className: "galary_picture",
                children:
                  a < 650
                    ? (0, t.jsx)(l.default, {
                        src: r.mobile,
                        alt: "galary",
                        width: 335,
                        height: 320,
                      })
                    : (0, t.jsx)(l.default, {
                        src: r.desktop,
                        alt: "galary",
                        width: 1250,
                        height: 500,
                      }),
              }),
            }),
          })
        );
      };
    },
    6728: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return n;
        },
      });
      var t = a(7437);
      function n(e) {
        let { data: i } = e,
          a =
            (null == i ? void 0 : i.displaySecondaryButton) &&
            (null == i ? void 0 : i.secondaryButtonUrl) &&
            (null == i ? void 0 : i.secondaryButtonLabel) &&
            !isNaN(new Date(i.secondaryButtonDisplayUntil).getTime()) &&
            new Date(null == i ? void 0 : i.secondaryButtonDisplayUntil) >
              new Date();
        return (0, t.jsx)(t.Fragment, {
          children: a
            ? (0, t.jsx)("a", {
                href: null == i ? void 0 : i.secondaryButtonUrl,
                className: "btn event_buttn",
                children: null == i ? void 0 : i.secondaryButtonLabel,
              })
            : null,
        });
      }
    },
    4913: function (e, i, a) {
      "use strict";
      a.r(i);
      var t = a(7437),
        n = a(6648);
      function l(e) {
        let { src: i } = e;
        return i;
      }
      i.default = (e) => {
        let {
          src: i,
          alt: a,
          priority: o = !1,
          className: r = "",
          width: s = "720",
          height: c = "360",
        } = e;
        return (0, t.jsx)(n.default, {
          className: r,
          src: i,
          alt: a,
          width: s,
          height: c,
          priority: o,
          loader: l,
        });
      };
    },
    4612: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(6290),
        l = a(2265);
      i.default = () => {
        let [e, i] = (0, l.useState)({ email: "", name: "", mobile: "" }),
          [a, o] = (0, l.useState)({}),
          [r, s] = (0, l.useState)(""),
          [c, d] = (0, l.useState)(""),
          m = (e) => {
            let { name: a, value: t = "" } = e.target;
            ("email" === a || "mobile" === a) && (t = t.replace(/\s+/g, "")),
              c.length > 0 && d(""),
              i((e) => ({ ...e, [a]: t }));
          },
          x = async () => {
            let a = { ...e };
            a.name = a.name.trim();
            try {
              var t;
              let e = await (0, n.a8)(
                ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819")
                  .concat("/contact/form?formType=mediaOperation"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ site: "engro-microsite", ...a }),
                }
              );
              if (
                ((null == e
                  ? void 0
                  : null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.InsertedID) &&
                  (i({ email: "", name: "", mobile: "" }),
                  s(
                    "Thank you for your submission. We will get back to you soon."
                  ),
                  setTimeout(() => {
                    s("");
                  }, 5e3)),
                0 == Object.keys(e).length &&
                  d(
                    "We already received your request. We will get back to you shortly."
                  ),
                e.ok)
              )
                throw Error("response status: ".concat(e.status));
            } catch (e) {
              console.log(null == e ? void 0 : e.status),
                d(
                  "We already received your request. We will get back to you shortly."
                );
            }
          },
          h = async (i) => {
            i.preventDefault();
            let { email: a, name: t, mobile: n } = e,
              l = {};
            t || (l.name = "Name is required"),
              a
                ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a) ||
                  (l.email = "Invalid email address")
                : (l.email = "Email is required"),
              n
                ? /^\d{4,20}$/.test(n) ||
                  (l.mobile = "Invalid phone number (must be 4 to 20 digits)")
                : (l.mobile = "Phone Number is required"),
              Object.keys(l).length > 0 ? o(l) : (o(l), x());
          };
        return (0, t.jsx)("div", {
          className: "right_details",
          children: (0, t.jsxs)("form", {
            className: "form_sec",
            children: [
              (0, t.jsxs)("div", {
                className: "form_row",
                children: [
                  (0, t.jsxs)("div", {
                    className: "form_col",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "name",
                        children: "Name*",
                      }),
                      (0, t.jsx)("input", {
                        type: "text",
                        required: !0,
                        placeholder: "Enter your Name",
                        id: "name",
                        name: "name",
                        value: e.name,
                        className: "input_sec",
                        onChange: m,
                      }),
                      " ",
                      a.name &&
                        (0, t.jsx)("span", {
                          className: "form-error",
                          style: { color: "red" },
                          children: a.name,
                        }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "form_col",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "email",
                        children: "Email*",
                      }),
                      (0, t.jsx)("input", {
                        type: "text",
                        required: !0,
                        id: "email",
                        name: "email",
                        placeholder: "Enter Your Email",
                        value: e.email,
                        onChange: m,
                        className: "input_sec",
                      }),
                      a.email &&
                        (0, t.jsx)("span", {
                          className: "form-error",
                          children: a.email,
                        }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "form_col",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "mobile",
                        children: "Phone Number* ",
                      }),
                      (0, t.jsx)("input", {
                        type: "text",
                        placeholder: "Enter Your Phone Number",
                        required: !0,
                        id: "mobile",
                        name: "mobile",
                        value: e.mobile,
                        onChange: m,
                        className: "input_sec",
                      }),
                      " ",
                      a.mobile &&
                        (0, t.jsx)("span", {
                          className: "form-error mobile-error",
                          children: a.mobile,
                        }),
                      r &&
                        (0, t.jsx)("span", {
                          className: "submit-status",
                          style: { color: "green" },
                          children: r,
                        }),
                      c &&
                        (0, t.jsx)("span", {
                          className: "form-error submit-status",
                          style: {
                            color: "red",
                            position: "relative",
                            top: "0px",
                          },
                          children: c,
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "form_row",
                children: (0, t.jsx)("input", {
                  type: "submit",
                  value: "Submit",
                  className: "btn",
                  onClick: (e) => h(e),
                }),
              }),
            ],
          }),
        });
      };
    },
    8119: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(2265),
        l = a(4913);
      i.default = (e) => {
        let { playListData: i, pageName: a = "" } = e,
          [o, r] = (0, n.useState)([]),
          [s, c] = (0, n.useState)(1),
          d = () => {
            c(s + 1),
              o.length <= i.content.length && r([...i.content.slice(0, 4 * s)]);
          };
        return (
          (0, n.useEffect)(() => {
            d();
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: "review_listing",
                children:
                  o &&
                  o.length > 0 &&
                  o.map((e, i) => {
                    let n =
                        (e.images &&
                          e.images.length > 0 &&
                          e.images[0].imageUrl[0]) ||
                        "",
                      o =
                        a && (null == e ? void 0 : e.slug)
                          ? ""
                              .concat(a, "/")
                              .concat(null == e ? void 0 : e.slug)
                          : "javascript:void(0)";
                    return (0, t.jsxs)(
                      "div",
                      {
                        className: "list_box",
                        children: [
                          (0, t.jsx)("div", {
                            className: "img_sec",
                            children: (0, t.jsx)("a", {
                              href: o || "javascript:void(0)",
                              children: (0, t.jsx)(l.default, {
                                src: n,
                                alt: null == e ? void 0 : e.name,
                                width: 775,
                                height: 410,
                              }),
                            }),
                          }),
                          (0, t.jsx)("h3", {
                            children: null == e ? void 0 : e.name,
                          }),
                          (0, t.jsxs)("a", {
                            href: o || "",
                            className: "read_more",
                            children: [
                              "View Case Study",
                              (0, t.jsxs)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, t.jsx)("path", {
                                    d: "M0.995117 8.12085L14.2541 8.12085",
                                    stroke: "#023540",
                                    "stroke-width": "1.79444",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                  }),
                                  (0, t.jsx)("path", {
                                    d: "M8.57227 1.72778L14.965 8.12049L8.57227 14.5132",
                                    stroke: "#023540",
                                    "stroke-width": "1.79444",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      i
                    );
                  }),
              }),
              o.length > 0 && (null == i ? void 0 : i.content.length) > o.length
                ? (0, t.jsx)("div", {
                    className: "load_more_section",
                    children: (0, t.jsx)("div", {
                      className: "btn_sec",
                      onClick: (e) => {
                        e.preventDefault(), d();
                      },
                      children: (0, t.jsx)("a", {
                        href: "javascript:void(0)",
                        className: "btn",
                        children: "Load More",
                      }),
                    }),
                  })
                : null,
            ],
          })
        );
      };
    },
    5568: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return s;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(5964),
        o = a(4913);
      function r(e) {
        var i;
        let { data: a = {} } = e,
          { images: n = [{ imageUrl: [""] }] } = a,
          [{ imageUrl: l = [""] }] = n;
        return (0, t.jsxs)("div", {
          className: "features_img_item",
          children: [
            (0, t.jsx)("p", {
              children: (null == a ? void 0 : a.description) || "",
            }),
            (0, t.jsx)("div", {
              children: (0, t.jsx)(o.default, {
                src: l[0],
                alt:
                  null == a
                    ? void 0
                    : null === (i = a.image) || void 0 === i
                    ? void 0
                    : i.altText,
                width: 842,
                height: 593,
              }),
            }),
          ],
        });
      }
      function s(e) {
        let { content: i = [] } = e,
          a = (0, n.useRef)(null),
          [o, s] = (0, n.useState)(0),
          c = null == i ? void 0 : i.map((e, i) => (0, t.jsx)(r, { data: e })),
          d = (e) => {
            a.current && a.current.swiper.slideTo(e);
          };
        return (0, t.jsxs)("div", {
          className: "features_slider_layout",
          children: [
            (0, t.jsx)("div", {
              className: "left_part",
              children:
                null == i
                  ? void 0
                  : i.map((e, i) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: "feature_headline ".concat(
                            o == i ? "active_feat" : ""
                          ),
                          onClick: () => d(i),
                          children: [
                            (0, t.jsx)("div", { className: "fea_dot" }),
                            (0, t.jsx)("h4", {
                              children: null == e ? void 0 : e.name,
                            }),
                          ],
                        },
                        i
                      )
                    ),
            }),
            (0, t.jsx)("div", {
              className: "right_part",
              children: (0, t.jsx)(l.default, {
                onSlideChange: (e) => {
                  s(e.realIndex);
                },
                autoplayOptions: !1,
                speed: 2e3,
                loop: !0,
                swiperRef: a,
                sliderComponents: c,
              }),
            }),
          ],
        });
      }
    },
    7202: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return r;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(5964);
      let o = (e) => {
        let { onClick: i, activeIndex: a, myIndex: n } = e;
        return (0, t.jsx)("button", {
          className: "dot",
          onClick: i,
          style: { backgroundColor: a == n ? "var(--yellow)" : "#DFE8E9" },
        });
      };
      function r(e) {
        let { content: i } = e,
          a = (0, n.useRef)(),
          [r, s] = (0, n.useState)(0),
          c = (e) => {
            s(e), a.current.swiper.slideTo(e);
          },
          d =
            null == i
              ? void 0
              : i.map((e, i) => {
                  let { name: a = "", description: n = "" } = e;
                  return (0, t.jsx)("li", {
                    className: "splide__slide",
                    children: (0, t.jsxs)("div", {
                      className: "row_box",
                      children: [
                        (0, t.jsx)("h4", { children: a }),
                        (0, t.jsx)("p", { children: n }),
                      ],
                    }),
                  });
                });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(l.default, {
              swiperRef: a,
              sliderComponents: d,
              onSlideChange: (e) => {
                s(null == e ? void 0 : e.activeIndex);
              },
              autoplayOptions: !1,
              spaceBetween: 30,
            }),
            (0, t.jsx)("div", {
              className: "scrollable_content_dots_container",
              children:
                null == d
                  ? void 0
                  : d.map((e, i) =>
                      (0, t.jsx)(
                        o,
                        { myIndex: i, activeIndex: r, onClick: () => c(i) },
                        i
                      )
                    ),
            }),
          ],
        });
      }
    },
    5979: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(19),
        l = a(9582),
        o = a(8364),
        r = a(6098),
        s = a(4913),
        c = a(2265);
      i.default = (e) => {
        var i;
        let { cardData: a = [], playListInfo: d = {} } = e;
        return (
          l.p8.registerPlugin(r.ScrollTrigger),
          (0, n.V)(
            () => {
              let e = new o.Z();
              e.on("scroll", (e) => {
                r.ScrollTrigger.update;
              }),
                l.p8.ticker.add((i) => {
                  e.raf(1e3 * i);
                }),
                l.p8.ticker.lagSmoothing(0);
              let i = l.p8.utils.toArray(".card"),
                a = l.p8.utils.toArray(".content-placeholder"),
                t = () => {
                  let e = window.innerWidth,
                    i = window.innerHeight;
                  if (e <= 600)
                    return 432 == e && 838 == i
                      ? "+=".concat(0.9 * i, "vh")
                      : "+=".concat(1 * i, "vh");
                  if (e > 600 && e <= 700) return "+=".concat(0.75 * i, "vh");
                  if (e > 700 && e <= 780) return "+=".concat(1 * i, "vh");
                  if (e > 780 && e <= 1024) return "+=".concat(0.65 * i, "vh");
                  if (e >= 1024 && e <= 1200)
                    return 1143 == e
                      ? "+=".concat(1.1 * i, "vh")
                      : 1194 == e
                      ? "+=".concat(0.85 * i, "vh")
                      : "+=".concat(0.8 * i, "vh");
                  if (e > 1200 && e <= 1300) return "+=".concat(1.1 * i, "vh");
                  if (e > 1300 && e <= 1400)
                    return 1366 == e && i > 800 && i <= 1024
                      ? "+=".concat(0.8 * i, "vh")
                      : "+=".concat(1.1 * i, "vh");
                  else if (e > 1400 && e <= 1800)
                    return "+=".concat(0.875 * i, "vh");
                  else if (e > 1800 && e <= 2040)
                    return "+=".concat(0.85 * i, "vh");
                  else if (e > 2040) return "+=".concat(0.78 * i, "vh");
                },
                n = (e) => {
                  let i = window.innerWidth;
                  return i <= 780 || (i > 780 && i < 1024)
                    ? "".concat(20 + 2.5 * e, "%")
                    : i >= 1024 && i <= 1300
                    ? "".concat(20 + 1 * e, "%")
                    : i > 1300 && i <= 1400
                    ? "".concat(20 + 2.5 * e, "%")
                    : i > 1400 && i <= 2040
                    ? "".concat(20 + 2.5 * e, "%")
                    : i > 2040
                    ? "".concat(20 + 2 * e, "%")
                    : void 0;
                };
              i.forEach((e, i) => {
                a[i];
                let o = 1,
                  r = 1;
                i !== a.length - 1 &&
                  ((r = 0.22 + 0.1 * i),
                  (o = 1 - (a.length - 1) / 10 + 0.1 * i)),
                  l.p8.timeline().to(e, {
                    scaleX: o,
                    transformOrigin: "top center",
                    ease: "none",
                    stagger: 0.5,
                    opacity: r,
                    scrollTrigger: {
                      trigger: e,
                      start: "top ".concat(n(i)),
                      end: "bottom ".concat(t()),
                      endTrigger: ".end-anim",
                      pin: e,
                      pinSpacing: !1,
                      scrub: !0,
                      invalidateOnRefresh: !0,
                    },
                  });
              });
            },
            {
              dependencies: [
                null === (i = window) || void 0 === i ? void 0 : i.innerWidth,
              ],
            }
          ),
          (0, c.useEffect)(() => {
            let e = () => {
              r.ScrollTrigger.refresh();
            };
            return (
              window.addEventListener("resize", e),
              e(),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: "cards-box",
                children:
                  a &&
                  a.length > 0 &&
                  a.map((e, i) => {
                    var a;
                    let n =
                      ((null == e ? void 0 : e.images) &&
                        (null == e ? void 0 : e.images.length) > 0 &&
                        (null == e
                          ? void 0
                          : null === (a = e.images[0]) || void 0 === a
                          ? void 0
                          : a.imageUrl[0])) ||
                      "";
                    return (0, t.jsx)(
                      "div",
                      {
                        className: "card",
                        children: (0, t.jsxs)("div", {
                          className: "content-placeholder",
                          children: [
                            (0, t.jsx)("div", {
                              className: "row",
                              children: (0, t.jsxs)("div", {
                                className: "details",
                                children: [
                                  (0, t.jsx)("h3", {
                                    children: null == e ? void 0 : e.name,
                                  }),
                                  (0, t.jsx)("p", {
                                    children:
                                      null == e ? void 0 : e.description,
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "image_side",
                              children: (0, t.jsx)("span", {
                                className: "img_sec",
                                children: (0, t.jsx)(s.default, {
                                  src: n,
                                  alt: null == e ? void 0 : e.name,
                                  width: 320,
                                  height: 320,
                                }),
                              }),
                            }),
                          ],
                        }),
                      },
                      i
                    );
                  }),
              }),
              (0, t.jsx)("div", { className: "end-anim" }),
            ],
          })
        );
      };
    },
    8294: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(2265),
        l = a(5964);
      let o = (e) => {
          let { imageUrl: i } = e;
          return (0, t.jsx)("li", {
            className: "splide__slide",
            children: (0, t.jsx)("div", {
              className: "full_image",
              children: (0, t.jsx)("img", { src: i, alt: "" }),
            }),
          });
        },
        r = (e) => {
          let { onClick: i, activeIndex: a, myIndex: n } = e;
          return (0, t.jsx)("button", {
            className: "dot",
            onClick: i,
            style: { backgroundColor: a == n ? "var(--yellow)" : "#DFE8E9" },
          });
        };
      i.default = (e) => {
        var i;
        let { resultsImg: a = [] } = e,
          [s, c] = (0, n.useState)(0),
          d = (0, n.useRef)(),
          m = (e) => {
            var i, a;
            c(e),
              null == d ||
                null === (a = d.current) ||
                void 0 === a ||
                null === (i = a.swiper) ||
                void 0 === i ||
                i.slideTo(e);
          };
        return (0, t.jsx)("div", {
          className: "image_slider_details casestudy_results_slider_image",
          children: (0, t.jsx)("div", {
            className: "splide strategy_slider",
            children: (0, t.jsx)("div", {
              className: "splide__track",
              children: (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(l.default, {
                    onSlideChange: (e) => {
                      c(null == e ? void 0 : e.activeIndex);
                    },
                    swiperRef: d,
                    className: "splide__list",
                    spaceBetween: 30,
                    speed: 300,
                    sliderComponents:
                      null == a
                        ? void 0
                        : a.map(function () {
                            let e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "";
                            return (0, t.jsx)(o, { imageUrl: e });
                          }),
                    loop: !1,
                    autoplayOptions: !1,
                    slidesPerView: 1,
                    freeMode: !1,
                    breakpoints: {
                      320: { slidesPerView: 1 },
                      900: { slidesPerView: 1 },
                    },
                  }),
                  (0, t.jsx)("div", {
                    className: "achievements_dots_container",
                    style: { display: "flex" },
                    children:
                      null === (i = a || []) || void 0 === i
                        ? void 0
                        : i.map((e, i) =>
                            (0, t.jsx)(
                              r,
                              {
                                myIndex: i,
                                activeIndex: s,
                                onClick: () => m(i),
                              },
                              i
                            )
                          ),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    2771: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return s;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(2914),
        o = JSON.parse(
          '{"v":"5.9.0","fr":30,"ip":0,"op":306,"w":666,"h":667,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":331,"h":334,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_1","w":519,"h":518,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_2","w":787,"h":789,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_3","w":1061,"h":1065,"u":"","p":"data:image/png;base64,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","e":1},{"id":"comp_0","nm":"Group 5","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Path 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[65.706,44.659,0],"ix":2,"l":2},"a":{"a":0,"k":[56.493,32.592,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.496,0.836],[0,0],[0,0],[-2.062,3.362],[-3.334,2.108],[-3.922,0.422],[-3.705,-1.351],[0,0],[0,0],[-4.038,2.299],[-4.646,-0.015],[-4.548,-3.257],[-1.823,-5.288],[0,0],[0,0],[-2.909,-4.046],[-0.012,-4.982],[4.467,-4.467],[6.318,-0.004],[0,0],[2.685,2.389],[0.42,3.57],[-2.058,2.946]],"o":[[0,0],[0,0],[0.368,-3.927],[2.062,-3.362],[3.333,-2.107],[3.921,-0.421],[0,0],[0,0],[2.359,-4.003],[4.038,-2.298],[5.593,0.023],[4.547,3.256],[0,0],[0,0],[4.72,1.599],[2.908,4.046],[-0.005,6.318],[-4.467,4.467],[0,0],[-3.594,-0.002],[-2.685,-2.389],[-0.419,-3.569],[2.057,-2.947]],"v":[[11.265,36.234],[11.961,36.068],[12.028,35.355],[15.721,24.276],[23.922,15.962],[34.949,12.118],[46.541,13.532],[47.322,13.818],[47.745,13.101],[57.507,3.484],[70.76,0],[86.348,5.042],[96.141,18.176],[96.301,18.639],[96.766,18.797],[108.496,27.477],[112.986,41.359],[106.002,58.201],[89.16,65.184],[14.667,65.184],[4.92,61.472],[0.1,52.221],[2.644,42.106]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":14.5,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":40.361,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":65,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":90.861,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":115.5,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":141.361,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":166,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":191.861,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":216.5,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":242.361,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":267,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":292.861,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":317.5,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":343.361,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":368,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":393.861,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":418.5,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":444.361,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":469,"s":[100.485,91.254,0],"e":[100.485,88.397,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.28,"y":1},"o":{"x":0.333,"y":0},"t":494.861,"s":[100.485,88.397,0],"e":[100.485,91.254,0],"to":[0,0,0],"ti":[0,0,0]},{"t":519.5}],"ix":2,"l":2},"a":{"a":0,"k":[4.847,4.847,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.677,0],[0,2.677],[-2.677,0],[0,-2.677]],"o":[[-2.677,0],[0,-2.677],[2.677,0],[0,2.677]],"v":[[4.847,9.694],[0,4.847],[4.847,0],[9.694,4.847]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 9","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path 4","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-3.462,-1.639,0],"ix":2,"l":2},"a":{"a":0,"k":[4.046,6.486,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-1.557],[-2.569,0],[-0.333,0]],"o":[[0,0],[0,1.557],[3.022,0],[0,0]],"v":[[0,0],[0,9.412],[3.614,12.972],[8.091,12.972]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 4","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Path 7","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-64.712,4.847,0],"ix":2,"l":2},"a":{"a":0,"k":[4.848,4.847,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.677,0],[0,2.677],[2.677,0],[0,-2.677]],"o":[[2.677,0],[0,-2.677],[-2.677,0],[0,2.677]],"v":[[4.847,9.694],[9.695,4.847],[4.847,0],[0,4.847]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 7","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Path 2","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-56.47,-1.639,0],"ix":2,"l":2},"a":{"a":0,"k":[4.046,6.486,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-1.557],[2.569,0],[0.333,0]],"o":[[0,0],[0,1.557],[-3.022,0],[0,0]],"v":[[8.091,0],[8.091,9.412],[4.477,12.972],[0,12.972]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Path 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":7,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":32.861,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":57.5,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":83.361,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":108,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":133.861,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":158.5,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":184.361,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":209,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":234.861,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":259.5,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":285.361,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":310,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":335.861,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":360.5,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":386.361,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":411,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":1},"o":{"x":0.333,"y":0},"t":436.861,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":461.5,"s":[42.477,106.306,0],"e":[42.477,103.449,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.28,"y":1},"o":{"x":0.333,"y":0},"t":487.361,"s":[42.477,103.449,0],"e":[42.477,106.306,0],"to":[0,0,0],"ti":[0,0,0]},{"t":512}],"ix":2,"l":2},"a":{"a":0,"k":[4.847,4.847,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.677,0],[0,2.677],[2.677,0],[0,-2.677]],"o":[[2.677,0],[0,-2.677],[-2.677,0],[0,2.677]],"v":[[4.848,9.694],[9.695,4.847],[4.848,0],[0,4.847]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 8","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Path 3","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[13.359,-9.18,0],"ix":2,"l":2},"a":{"a":0,"k":[4.137,14.027,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.031,-2.632],[2.274,0],[0.334,0]],"o":[[0,0],[-0.031,2.632],[-2.274,0],[0,0]],"v":[[8.261,0],[8.261,23.492],[4.478,28.054],[0,28.054]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Path 10","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[51.304,4.847,0],"ix":2,"l":2},"a":{"a":0,"k":[4.847,4.847,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.677,0],[0,2.677],[-2.677,0],[0,-2.677]],"o":[[-2.677,0],[0,-2.677],[2.677,0],[0,2.677]],"v":[[4.847,9.694],[0,4.847],[4.847,0],[9.694,4.847]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 10","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Path 5","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[42.725,-9.18,0],"ix":2,"l":2},"a":{"a":0,"k":[4.137,14.027,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.031,-2.632],[-2.274,0],[-0.334,0]],"o":[[0,0],[0.031,2.632],[2.274,0],[0,0]],"v":[[0.014,0],[0.014,23.492],[3.797,28.054],[8.275,28.054]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 5","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Path 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":0,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":25.861,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":50.5,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":76.361,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":101,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":126.861,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":151.5,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":177.361,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":202,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":227.861,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":252.5,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":278.361,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":303,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":328.861,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":353.5,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":379.361,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":404,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":429.861,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.53,"y":0},"t":454.5,"s":[65.881,115.673,0],"e":[65.881,112.815,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.28,"y":1},"o":{"x":0.333,"y":0},"t":480.361,"s":[65.881,112.815,0],"e":[65.881,115.673,0],"to":[0,0,0],"ti":[0,0,0]},{"t":505}],"ix":2,"l":2},"a":{"a":0,"k":[4.847,4.848,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.677,0],[0,2.677],[-2.677,0],[0,-2.677]],"o":[[-2.677,0],[0,-2.677],[2.677,0],[0,2.677]],"v":[[4.847,9.695],[0,4.847],[4.847,0],[9.694,4.847]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 11","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Path 6","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[4.847,-16.142,0],"ix":2,"l":2},"a":{"a":0,"k":[0,16.142,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,0],[0,32.284]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 6","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"cp":true,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Group 5","parent":92,"refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.28],"y":[1]},"o":{"x":[0.53],"y":[0]},"t":102,"s":[0],"e":[100]},{"t":132}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[66,66,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.28,0.28,0.28],"y":[1,1,1]},"o":{"x":[0.53,0.53,0.53],"y":[0,0,0]},"t":102,"s":[66.957,66.957,100],"e":[86.957,86.957,100]},{"t":132}],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"f","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0,0],[131.412,0],[131.412,131.412],[0,131.412]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"f":{"a":0,"k":[0,0],"ix":2},"nm":"Mask 1"}],"w":132,"h":132,"ip":102,"op":1902,"st":102,"cp":true,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Ellipse 13","parent":92,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":-8,"s":[100],"e":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.4],"y":[0]},"t":92,"s":[0],"e":[100]},{"t":112}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.28],"y":[1]},"o":{"x":[0.45],"y":[0]},"t":106,"s":[0],"e":[360]},{"t":173}],"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.644,0.644,0.772],"y":[1.141,1.141,-2.626]},"o":{"x":[0.516,0.516,0.439],"y":[0,0,0]},"t":0,"s":[60.87,60.87,100],"e":[0,0,100]},{"i":{"x":[0.622,0.622,0.739],"y":[1,1,1]},"o":{"x":[0.294,0.294,0.406],"y":[0.015,0.015,1.405]},"t":92,"s":[0,0,100],"e":[100,100,100]},{"t":112}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.917647058824,0.956862745098,0.956862745098,1],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":255,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":3,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":22.6,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":2,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":5,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":6,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":7,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":8,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":9,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":10,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":11,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":12,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":13,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":14,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":15,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":16,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":17,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":18,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":19,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[205.736,205.736],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843017578,0.207824707031,0.2509765625,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":92,"op":1800,"st":16,"cp":true,"bm":0},{"ddd":0,"ind":45,"ty":4,"nm":"Path 20","parent":50,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.471,24.128,0],"ix":2,"l":2},"a":{"a":0,"k":[4.613,4.613,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.544,0],[0,2.544],[-2.544,0],[0,-2.544]],"o":[[-2.544,0],[0,-2.544],[2.544,0],[0,2.544]],"v":[[4.613,9.225],[0,4.612],[4.613,0],[9.226,4.612]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 20","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":46,"ty":4,"nm":"Group 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[98.115,332.318,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[57.956,51.741],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false}],"ip":126,"op":1800,"st":0,"cp":true,"bm":0},{"ddd":0,"ind":47,"ty":4,"nm":"Path 19","parent":50,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.471,-2.204,0],"ix":2,"l":2},"a":{"a":0,"k":[20.054,6.957,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.895,0.672],[-7.233,0],[-5.367,-4.032],[0.655,-0.857],[0,0],[0.869,0.65],[5.195,0],[3.853,-2.881],[0.693,0.906],[0,0]],"o":[[5.367,-4.032],[7.233,0],[0.895,0.672],[0,0],[-0.693,0.906],[-3.853,-2.881],[-5.195,0],[-0.869,0.65],[0,0],[-0.655,-0.857]],"v":[[0.783,6.451],[20.054,0],[39.325,6.451],[39.697,9.234],[36.721,13.126],[33.887,13.504],[20.054,8.919],[6.221,13.504],[3.387,13.126],[0.411,9.234]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":192,"s":[1,1,1,1],"e":[0.015686275437,0.709803938866,0.666666686535,1]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":212,"s":[0.015686275437,0.709803938866,0.666666686535,1],"e":[1,1,1,1]},{"t":232}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 19","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":48,"ty":4,"nm":"Path 18","parent":50,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.471,10.201,0],"ix":2,"l":2},"a":{"a":0,"k":[11.669,5.524,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.721,0.939],[0,0],[-0.904,0.677],[-4.077,0],[-3.046,-2.278],[0.644,-0.838],[0,0],[0.855,0.611],[2.01,0],[1.527,-1.092]],"o":[[0,0],[-0.644,-0.838],[3.046,-2.278],[4.077,0],[0.904,0.677],[0,0],[-0.721,0.939],[-1.527,-1.092],[-2.01,0],[-0.855,0.611]],"v":[[3.396,10.262],[0.413,6.383],[0.774,3.617],[11.669,0],[22.565,3.617],[22.925,6.383],[19.942,10.262],[17.077,10.648],[11.669,8.92],[6.262,10.648]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":192,"s":[1,1,1,1],"e":[0.015686275437,0.709803938866,0.666666686535,1]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":212,"s":[0.015686275437,0.709803938866,0.666666686535,1],"e":[1,1,1,1]},{"t":232}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 18","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":49,"ty":4,"nm":"Path 17","parent":50,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.471,-14.609,0],"ix":2,"l":2},"a":{"a":0,"k":[28.978,8.391,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.658,-0.86],[0,0],[0.872,0.656],[8.37,0],[6.213,-4.677],[0.686,0.897],[0,0],[-0.889,0.672],[-10.381,0],[-7.739,-5.859]],"o":[[0,0],[-0.686,0.897],[-6.213,-4.677],[-8.37,0],[-0.872,0.656],[0,0],[-0.658,-0.86],[7.739,-5.859],[10.381,0],[0.889,0.672]],"v":[[57.545,12.097],[54.564,15.995],[51.74,16.372],[28.978,8.92],[6.216,16.372],[3.391,15.995],[0.411,12.097],[0.781,9.312],[28.978,0],[57.175,9.312]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":192,"s":[1,1,1,1],"e":[0.015686275437,0.709803938866,0.666666686535,1]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":212,"s":[0.015686275437,0.709803938866,0.666666686535,1],"e":[1,1,1,1]},{"t":232}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 17","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":50,"ty":4,"nm":"Group 6","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.28],"y":[1]},"o":{"x":[0.45],"y":[0]},"t":104,"s":[0],"e":[-1]},{"t":173}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.28,"y":1},"o":{"x":0.45,"y":0},"t":104,"s":[30.644,0.175,0],"e":[-204.293,0,0],"to":[0,0,0],"ti":[0,0,0]},{"t":173}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[76.957,76.957,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[127.487,128.483],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":51,"ty":4,"nm":"Ellipse 5","parent":50,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.917647058824,0.956862745098,0.956862745098,1],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":255,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":3,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":22.6,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[127.487,128.483],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 5","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":52,"ty":2,"nm":"Ellipse 20.png","cl":"png","parent":51,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":2,"ix":10},"p":{"a":0,"k":[0.877,-2.074,0],"ix":2,"l":2},"a":{"a":0,"k":[165.5,167,0],"ix":1,"l":2},"s":{"a":0,"k":[49.615,49.615,100],"ix":6,"l":2}},"ao":0,"ip":126,"op":1800,"st":0,"cp":false,"bm":0},{"ddd":0,"ind":53,"ty":4,"nm":"Path 16","parent":58,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.013,12.778,0],"ix":2,"l":2},"a":{"a":0,"k":[1.808,2.682,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0.517],[0.999,0],[0,-0.998],[-0.347,-0.329],[0,0],[0,0],[0,0]],"o":[[0,-0.998],[-0.999,0],[0,0.517],[0,0],[0,0],[0,0],[0.347,-0.329]],"v":[[3.616,1.808],[1.808,0],[0,1.808],[0.565,3.119],[0.565,5.364],[3.051,5.364],[3.051,3.119]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 16","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":54,"ty":4,"nm":"Path 15","parent":58,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-0.001,12.778,0],"ix":2,"l":2},"a":{"a":0,"k":[6.507,5.505,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.83,0],[0,0],[0,-0.829],[0,0],[0.829,0],[0,0],[0,0.83],[0,0]],"o":[[0,0],[0.829,0],[0,0],[0,0.83],[0,0],[-0.83,0],[0,0],[0,-0.829]],"v":[[1.502,0],[11.512,0],[13.014,1.501],[13.014,9.509],[11.512,11.011],[1.502,11.011],[0,9.509],[0,1.501]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 15","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":55,"ty":4,"nm":"Path 14","parent":58,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-0.001,4.27,0],"ix":2,"l":2},"a":{"a":0,"k":[4.884,3.633,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.693,0],[0,-2.693],[0,0],[-0.624,0],[0,0.624],[0,0],[-1.447,0],[0,-1.446],[0,0],[-0.624,0],[0,0.624],[0,0]],"o":[[-2.693,0],[0,0],[0,0.624],[0.624,0],[0,0],[0,-1.446],[1.446,0],[0,0],[0,0.624],[0.624,0],[0,0],[0,-2.693]],"v":[[4.884,0],[0,4.883],[0,6.135],[1.13,7.265],[2.26,6.135],[2.26,4.883],[4.884,2.26],[7.507,4.883],[7.507,6.135],[8.637,7.265],[9.768,6.135],[9.768,4.883]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 14","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":56,"ty":4,"nm":"Path 13","parent":58,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-0.001,11.398,0],"ix":2,"l":2},"a":{"a":0,"k":[16.759,19.138,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-9.946,-3.434],[0,10.636],[0,0],[0,-0.001]],"o":[[0,0],[0,10.636],[9.946,-3.434],[0,0],[0,-0.001],[0,0]],"v":[[0,4.606],[0,14.763],[16.76,38.276],[33.519,14.763],[33.519,4.606],[33.519,4.606]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0,4.606],[33.519,4.606],[33.519,4.606]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.001,0.001],[-0.002,0.001],[-0.004,0],[-5.27,2.399],[-0.006,-0.003],[-5.798,-0.642]],"o":[[0,0],[0.001,-0.001],[0.002,-0.002],[0.002,-0.001],[5.798,-0.642],[0.005,-0.003],[5.269,2.399],[0,0]],"v":[[0,4.606],[0,4.606],[0.002,4.604],[0.008,4.599],[0.016,4.597],[16.751,0.002],[16.769,0.002],[33.503,4.597]],"c":false},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,4.606],[33.503,4.597]],"c":false},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0.001,0.001]],"o":[[0,0],[0,0]],"v":[[33.519,4.606],[33.517,4.604]],"c":false},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.519,4.606],[33.517,4.604]],"c":false},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[-0.001,-0.001]],"o":[[0.004,0],[0,0]],"v":[[33.503,4.597],[33.511,4.599]],"c":false},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.503,4.597],[33.511,4.599]],"c":false},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[0,0],[-0.001,-0.002]],"o":[[0.003,0.001],[0,0]],"v":[[33.511,4.599],[33.517,4.604]],"c":false},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.511,4.599],[33.517,4.604]],"c":false},"ix":2},"nm":"Path 10","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 13","np":12,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":57,"ty":4,"nm":"Path 12","parent":58,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-0.001,-7.694,0],"ix":2,"l":2},"a":{"a":0,"k":[32.097,18.643,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.579,-8.539],[0,0],[0,0],[0,-4.714],[6.011,0],[0,0],[0,6.011],[-4.304,1.453],[0,0],[0,0],[-4.411,0],[-1.627,-1.518],[0,0],[0,0],[-6.837,0]],"o":[[0,0],[0,0],[4.197,1.512],[0,6.011],[0,0],[-6.01,0],[0,-4.791],[0,0],[0,0],[0.832,-4.167],[2.399,0],[0,0],[0,0],[2.469,-5.948],[8.686,0]],"v":[[56.339,15.287],[56.384,15.939],[56.998,16.16],[64.194,26.402],[53.31,37.286],[10.883,37.286],[0,26.402],[7.401,16.088],[7.949,15.903],[8.062,15.336],[16.984,8.029],[23.189,10.476],[24.243,11.46],[24.795,10.129],[39.963,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":192,"s":[1,1,1,1],"e":[0.015686275437,0.709803938866,0.666666686535,1]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":212,"s":[0.015686275437,0.709803938866,0.666666686535,1],"e":[1,1,1,1]},{"t":232}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 12","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":58,"ty":4,"nm":"Group 4","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.28],"y":[1]},"o":{"x":[0.45],"y":[0]},"t":104,"s":[0],"e":[-1]},{"t":173}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.28,"y":1},"o":{"x":0.45,"y":0},"t":104,"s":[0,-30.608,0],"e":[0,205.219,0],"to":[0,0,0],"ti":[0,0,0]},{"t":173}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[76.957,76.957,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[126.492,128.483],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":60,"ty":2,"nm":"Ellipse 20.png","cl":"png","parent":58,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":2,"ix":10},"p":{"a":0,"k":[-1.81,1.435,0],"ix":2,"l":2},"a":{"a":0,"k":[165.5,167,0],"ix":1,"l":2},"s":{"a":0,"k":[49.615,49.615,100],"ix":6,"l":2}},"ao":0,"ip":126,"op":1800,"st":0,"cp":false,"bm":0},{"ddd":0,"ind":61,"ty":4,"nm":"Path 36","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[12.43,26.512,0],"ix":2,"l":2},"a":{"a":0,"k":[3.936,3.937,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.174,0],[0,2.173],[-2.174,0],[0,-2.174]],"o":[[-2.174,0],[0,-2.174],[2.174,0],[0,2.173]],"v":[[3.936,7.873],[0,3.937],[3.936,0],[7.872,3.937]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 36","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":62,"ty":4,"nm":"Path 35","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.274,16.663,0],"ix":2,"l":2},"a":{"a":0,"k":[3.936,3.937,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.174,0],[0,2.174],[-2.174,0],[0,-2.174]],"o":[[-2.174,0],[0,-2.174],[2.174,0],[0,2.174]],"v":[[3.936,7.873],[0,3.936],[3.936,0],[7.873,3.936]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 35","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":63,"ty":4,"nm":"Path 34","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[15.337,1.108,0],"ix":2,"l":2},"a":{"a":0,"k":[3.936,3.936,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.174,0],[0,2.174],[-2.174,0],[0,-2.174]],"o":[[-2.174,0],[0,-2.174],[2.174,0],[0,2.174]],"v":[[3.936,7.872],[0,3.936],[3.936,0],[7.872,3.936]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 34","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":64,"ty":4,"nm":"Path 33","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[25.195,-8.506,0],"ix":2,"l":2},"a":{"a":0,"k":[3.937,3.937,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.174,0],[0,2.174],[-2.174,0],[0,-2.173]],"o":[[-2.174,0],[0,-2.173],[2.174,0],[0,2.174]],"v":[[3.936,7.873],[0,3.936],[3.936,0],[7.873,3.936]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 33","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":65,"ty":4,"nm":"Path 32","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.03,-18.242,0],"ix":2,"l":2},"a":{"a":0,"k":[3.936,3.936,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.174,0],[0,2.174],[-2.174,0],[0,-2.174]],"o":[[-2.174,0],[0,-2.174],[2.174,0],[0,2.174]],"v":[[3.936,7.872],[0,3.936],[3.936,0],[7.872,3.936]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 32","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":66,"ty":4,"nm":"Path 31","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[8.65,-26.115,0],"ix":2,"l":2},"a":{"a":0,"k":[3.936,3.936,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.174,0],[0,2.174],[-2.174,0],[0,-2.174]],"o":[[-2.174,0],[0,-2.174],[2.174,0],[0,2.174]],"v":[[3.936,7.873],[0,3.936],[3.936,0],[7.872,3.936]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 31","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":67,"ty":4,"nm":"Path 30","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-13.534,-0.639,0],"ix":2,"l":2},"a":{"a":0,"k":[16.16,28.214,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.011,0],[0.151,0.42],[0,0],[0,0],[0.528,0.7],[-0.291,0.829],[0,0],[0,2.443],[-8.998,3.735],[-0.301,-0.194],[0,-0.355],[0,0],[-0.991,-0.613],[0,0],[0,-0.376],[0,0],[0.204,-0.204],[0,0],[0.269,-0.011],[0,0]],"o":[[-0.441,0],[0,0],[0,0],[-0.872,0.043],[-0.527,-0.699],[0,0],[-0.71,-2.271],[0,-9.762],[0.333,-0.14],[0.302,0.204],[0,0],[0,1.163],[0,0],[0.312,0.193],[0,0],[0,0.28],[0,0],[-0.193,0.194],[0,0],[0,-0.011]],"v":[[11.794,56.416],[10.793,55.727],[5.444,41.692],[2.764,41.864],[0.525,40.831],[0.149,38.388],[3.345,29.401],[2.28,22.297],[17.101,0.082],[18.112,0.179],[18.586,1.072],[18.586,15.322],[20.19,18.196],[31.749,25.311],[32.266,26.225],[32.32,45.685],[32.008,46.449],[22.88,55.706],[22.159,56.029],[11.827,56.427]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-0.021,0],[-0.15,-0.419],[0,0],[0,0],[0,0],[0,0],[0,0],[0,1.905],[0,0],[0,-8.331],[-0.71,-2.164],[0.086,-0.226],[0,0],[-0.054,-0.076],[-0.215,0.011],[0,0]],"o":[[0.442,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.625,-1.001],[0,0],[-7.351,3.713],[0,2.336],[0.075,0.226],[0,0],[-0.075,0.194],[0.054,0.075],[0,0],[0.032,0.01]],"v":[[6.165,39.496],[7.166,40.185],[12.516,54.231],[21.653,53.887],[30.167,45.244],[30.124,26.828],[19.07,20.026],[16.444,15.322],[16.444,2.751],[4.432,22.297],[5.498,29.078],[5.487,29.777],[2.172,39.109],[2.237,39.529],[2.624,39.712],[6.09,39.486]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 30","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":68,"ty":4,"nm":"Path 29","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-13.389,-0.441,0],"ix":2,"l":2},"a":{"a":0,"k":[15.003,26.954,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[16.308,14.495],[16.308,0],[13.157,0.804],[5.774,8.282],[1.799,19.641],[3.124,27.971],[0,38.478],[5.017,39.424],[10.602,53.907],[21.203,53.433],[30.007,43.873],[30.007,27.213],[29.344,24.279],[24.043,20.682],[16.944,16.612]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":192,"s":[1,1,1,1],"e":[0.015686275437,0.709803938866,0.666666686535,1]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":212,"s":[0.015686275437,0.709803938866,0.666666686535,1],"e":[1,1,1,1]},{"t":232}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 29","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":69,"ty":4,"nm":"Path 28","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-18.965,17.397,0],"ix":2,"l":2},"a":{"a":0,"k":[3.264,1.643,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.097,0],[0.129,0.484],[-0.581,0.15],[0,0],[-0.151,-0.581],[0.581,-0.15],[0,0]],"o":[[-0.474,0],[-0.151,-0.582],[0,0],[0.581,-0.15],[0.151,0.582],[0,0],[-0.086,0.021]],"v":[[1.079,3.286],[0.035,2.479],[0.81,1.166],[5.18,0.035],[6.493,0.81],[5.718,2.123],[1.348,3.254]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 28","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":70,"ty":4,"nm":"Path 27","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[6.096,19.826,0],"ix":2,"l":2},"a":{"a":0,"k":[5.623,4.079,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.15,0],[0.183,0.398],[0,0],[0,0],[0,0.591],[-0.592,0],[0,0],[-0.172,-0.387],[0,0],[0.538,-0.248]],"o":[[-0.409,0],[0,0],[0,0],[-0.592,0],[0,-0.592],[0,0],[0.419,0],[0,0],[0.248,0.538],[-0.129,0.075]],"v":[[10.182,8.159],[9.202,7.524],[6.77,2.153],[1.076,2.153],[0,1.077],[1.076,0],[7.459,0],[8.438,0.635],[11.15,6.63],[10.612,8.051]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 27","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":71,"ty":4,"nm":"Path 26","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[8.866,12.081,0],"ix":2,"l":2},"a":{"a":0,"k":[8.404,3.374,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.334,0],[0.194,0.151],[0,0],[0,0],[0,0.592],[-0.592,0],[0,0],[-0.183,-0.14],[0,0],[0.355,-0.484]],"o":[[-0.226,0],[0,0],[0,0],[-0.592,0],[0,-0.592],[0,0],[0.226,0],[0,0],[0.473,0.355],[-0.205,0.28]],"v":[[15.736,6.749],[15.101,6.533],[9.16,2.153],[1.076,2.153],[0,1.076],[1.076,0],[9.515,0],[10.15,0.215],[16.371,4.811],[16.597,6.318]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 26","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":72,"ty":4,"nm":"Path 25","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[6.657,1.108,0],"ix":2,"l":2},"a":{"a":0,"k":[6.173,1.076,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.592,0],[0,0],[0,0.592],[-0.592,0],[0,0],[0,-0.592]],"o":[[0,0],[-0.592,0],[0,-0.592],[0,0],[0.592,0],[0,0.592]],"v":[[11.269,2.152],[1.076,2.152],[0,1.076],[1.076,0],[11.269,0],[12.345,1.076]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 25","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":73,"ty":4,"nm":"Path 24","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1.572,-7.729,0],"ix":2,"l":2},"a":{"a":0,"k":[6.286,1.076,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.592,0],[0,0],[0,0.592],[-0.592,0],[0,0],[0,-0.592]],"o":[[0,0],[-0.592,0],[0,-0.592],[0,0],[0.592,0],[0,0.592]],"v":[[11.495,2.153],[1.077,2.153],[0,1.077],[1.077,0],[11.495,0],[12.572,1.077]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 24","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":74,"ty":4,"nm":"Path 23","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[11.753,-18.104,0],"ix":2,"l":2},"a":{"a":0,"k":[3.584,1.076,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.592,0],[0,0],[0,0.592],[-0.592,0],[0,0],[0,-0.592]],"o":[[0,0],[-0.592,0],[0,-0.592],[0,0],[0.592,0],[0,0.592]],"v":[[6.092,2.152],[1.076,2.152],[0,1.076],[1.076,0],[6.092,0],[7.168,1.076]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 23","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":75,"ty":4,"nm":"Path 22","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[4.412,-11.56,0],"ix":2,"l":2},"a":{"a":0,"k":[17.663,4.628,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.592,0],[0,0],[0.204,0.226],[0,0],[0,0],[0,0.592],[-0.591,0],[0,0],[-0.204,-0.226],[0,0],[0,0],[0,-0.592]],"o":[[0,0],[-0.301,0],[0,0],[0,0],[-0.591,0],[0,-0.592],[0,0],[0.301,0],[0,0],[0,0],[0.592,0],[0,0.592]],"v":[[34.238,9.256],[24.443,9.256],[23.658,8.912],[17.318,2.152],[1.076,2.152],[0,1.076],[1.076,0],[17.792,0],[18.577,0.344],[24.917,7.104],[34.249,7.104],[35.325,8.18]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 22","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":76,"ty":4,"nm":"Path 21","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-3.181,-23.335,0],"ix":2,"l":2},"a":{"a":0,"k":[10.07,2.562,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.118,0],[0.054,0.011],[0,0],[-0.086,0.592],[-0.592,-0.097],[0,0],[0,0],[-0.204,-0.56],[0.56,-0.205],[0,0]],"o":[[-0.054,0],[0,0],[-0.592,-0.086],[0.086,-0.592],[0,0],[0,0],[0.559,-0.204],[0.205,0.56],[0,0],[-0.108,0.032]],"v":[[10.871,5.124],[10.72,5.113],[0.926,3.768],[0.011,2.551],[1.227,1.637],[10.752,2.95],[18.696,0.065],[20.073,0.711],[19.427,2.089],[11.226,5.07]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 21","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":77,"ty":4,"nm":"Group 9","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.28],"y":[1]},"o":{"x":[0.45],"y":[0]},"t":104,"s":[0],"e":[-1]},{"t":173}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.28,"y":1},"o":{"x":0.45,"y":0},"t":104,"s":[-30.644,0.175,0],"e":[204.293,0,0],"to":[0,0,0],"ti":[0,0,0]},{"t":173}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[76.957,76.957,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[127.487,128.483],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":78,"ty":3,"nm":"Ellipse 6","parent":77,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.917647058824,0.956862745098,0.956862745098,1],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":255,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":3,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":22.6,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":79,"ty":2,"nm":"Ellipse 20.png","cl":"png","parent":78,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":3,"ix":10},"p":{"a":0,"k":[0.254,-0.798,0],"ix":2,"l":2},"a":{"a":0,"k":[165.5,167,0],"ix":1,"l":2},"s":{"a":0,"k":[50.341,50.341,100],"ix":6,"l":2}},"ao":0,"ip":126,"op":1800,"st":0,"cp":false,"bm":0},{"ddd":0,"ind":80,"ty":4,"nm":"Path 45","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18.787,12.187,0],"ix":2,"l":2},"a":{"a":0,"k":[9.405,15.869,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.626,0],[0,0],[0,-1.626],[0,0],[-1.625,0],[0,0],[0,1.626],[0,0]],"o":[[0,0],[-1.625,0],[0,0],[0,1.626],[0,0],[1.626,0],[0,0],[0,-1.626]],"v":[[15.868,0],[2.942,0],[0,2.943],[0,28.794],[2.942,31.737],[15.868,31.737],[18.811,28.794],[18.811,2.943]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-0.753,0],[0,0],[0,0],[-1.03,0],[0,0],[0,1.03],[0,0],[0,0],[0,-0.754],[0,0],[0.754,0],[0,0],[0,0.754],[0,0]],"o":[[0,0],[0,0],[0,1.03],[0,0],[1.03,0],[0,0],[0,0],[0.754,0],[0,0],[0,0.754],[0,0],[-0.753,0],[0,0],[0,-0.754]],"v":[[2.942,1.577],[3.231,1.577],[3.231,2.943],[5.097,4.809],[13.714,4.809],[15.58,2.943],[15.58,1.577],[15.868,1.577],[17.234,2.943],[17.234,28.794],[15.868,30.16],[2.942,30.16],[1.577,28.794],[1.577,2.943]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0.159],[0,0],[0,0],[0,0],[0.159,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0.159],[0,0],[-0.16,0]],"v":[[4.808,2.943],[4.808,1.577],[14.002,1.577],[14.002,2.943],[13.714,3.232],[5.097,3.232]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 45","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":81,"ty":4,"nm":"Path 44","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18.787,-1.278,0],"ix":2,"l":2},"a":{"a":0,"k":[5.385,1.616,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-0.595,0],[0,0],[0,0.595]],"o":[[0,0],[0,0],[0,0.595],[0,0],[0.595,0],[0,0]],"v":[[10.771,0],[0,0],[0,2.155],[1.077,3.231],[9.694,3.231],[10.771,2.155]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 44","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":82,"ty":4,"nm":"Path 43","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18.786,12.186,0],"ix":2,"l":2},"a":{"a":0,"k":[8.617,15.08,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.19,0],[0,0],[0,-1.19],[0,0],[-1.19,0],[0,0],[0,1.19]],"o":[[0,-1.19],[0,0],[-1.19,0],[0,0],[0,1.19],[0,0],[1.19,0],[0,0]],"v":[[17.234,2.154],[15.08,0],[2.154,0],[0,2.154],[0,28.006],[2.154,30.16],[15.08,30.16],[17.234,28.006]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":192,"s":[1,1,1,1],"e":[0.015686275437,0.709803938866,0.666666686535,1]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":212,"s":[0.015686275437,0.709803938866,0.666666686535,1],"e":[1,1,1,1]},{"t":232}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 43","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":83,"ty":4,"nm":"Path 42","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.141,11.965,0],"ix":2,"l":2},"a":{"a":0,"k":[4.582,0.581,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0,0],[9.163,0],[9.163,1.163],[0,1.163]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 42","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":84,"ty":4,"nm":"Path 41","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.14,-10.224,0],"ix":2,"l":2},"a":{"a":0,"k":[30.254,16.36,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-2.546],[0,0],[0,0],[0,0],[-2.547,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,-2.546],[0,0],[2.547,0]],"v":[[60.508,4.628],[60.508,32.719],[0,32.719],[0,4.628],[4.628,0],[55.88,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":192,"s":[1,1,1,1],"e":[0.015686275437,0.709803938866,0.666666686535,1]},{"i":{"x":[0.43],"y":[1]},"o":{"x":[0.57],"y":[0]},"t":212,"s":[0.015686275437,0.709803938866,0.666666686535,1],"e":[1,1,1,1]},{"t":232}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 41","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":85,"ty":4,"nm":"Path 40","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.14,11.965,0],"ix":2,"l":2},"a":{"a":0,"k":[30.254,3.775,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-2.547,0],[0,0],[0,2.277],[0,0]],"o":[[0,0],[0,2.277],[0,0],[2.547,0],[0,0],[0,0]],"v":[[0,0],[0,3.411],[4.628,7.549],[55.88,7.549],[60.508,3.411],[60.508,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[34.835,4.315],[25.673,4.315],[25.673,3.276],[34.835,3.276]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 40","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":86,"ty":4,"nm":"Path 39","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.14,19.298,0],"ix":2,"l":2},"a":{"a":0,"k":[1.965,2.395,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0,0],[3.93,0],[3.93,4.791],[0,4.791]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 39","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":87,"ty":4,"nm":"Path 38","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.14,23.832,0],"ix":2,"l":2},"a":{"a":0,"k":[6.314,0.977,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.268,-1.117],[0,0],[-1.197,0],[0,0]],"o":[[0,0],[0.268,-1.117],[0,0],[1.197,0]],"v":[[12.628,1.954],[0,1.954],[2.465,0],[10.163,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.98431372549,0.674509803922,0.207843137255,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 38","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":88,"ty":4,"nm":"Path 37","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.14,-0.888,0],"ix":2,"l":2},"a":{"a":0,"k":[31.917,27.359,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.311,0],[0,0],[0,0],[0,0],[0,3.474],[0,0],[3.461,0],[0,0],[0,-3.474],[0,0],[-3.462,0],[0,0],[0,0],[0,0],[0,-2.311],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[3.461,0],[0,0],[0,-3.474],[0,0],[-3.462,0],[0,0],[0,3.474],[0,0],[0,0],[0,0],[-2.31,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-2.311]],"v":[[35.766,49.439],[35.545,49.439],[35.545,45.649],[57.544,45.649],[63.834,39.358],[63.834,6.29],[57.544,0],[6.291,0],[0,6.29],[0,39.358],[6.291,45.649],[28.289,45.649],[28.289,49.439],[28.068,49.439],[23.871,53.637],[23.871,54.217],[23.871,54.717],[24.371,54.717],[39.463,54.717],[39.963,54.717],[39.963,54.217],[39.963,53.637]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-0.361,-0.573],[0,0],[-0.721,0]],"o":[[0.722,0],[0,0],[0.361,-0.573],[0,0]],"v":[[35.766,51.602],[37.484,52.555],[26.35,52.555],[28.068,51.602]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[30.452,49.439],[30.452,45.649],[33.382,45.649],[33.382,49.439]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[2.27,0],[0,0],[0,2.27],[0,0],[0,0]],"o":[[0,2.27],[0,0],[-2.271,0],[0,0],[0,0],[0,0]],"v":[[61.671,39.358],[57.544,43.486],[6.291,43.486],[2.163,39.358],[2.163,36.044],[61.671,36.044]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-2.271,0],[0,0],[0,-2.27]],"o":[[0,0],[0,0],[0,-2.27],[0,0],[2.27,0],[0,0]],"v":[[61.671,33.882],[2.163,33.882],[2.163,6.29],[6.291,2.163],[57.544,2.163],[61.671,6.29]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.007843137255,0.207843137255,0.250980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 37","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":89,"ty":4,"nm":"Group 10","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.28],"y":[1]},"o":{"x":[0.45],"y":[0]},"t":104,"s":[0],"e":[-1]},{"t":173}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.28,"y":1},"o":{"x":0.45,"y":0},"t":104,"s":[0,30.867,0],"e":[0,-204.611,0],"to":[0,0,0],"ti":[0,0,0]},{"t":173}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[76.957,76.957,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[126.492,126.492],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":90,"ty":3,"nm":"Ellipse 7","parent":89,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":25,"nm":"Drop Shadow","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"Shadow Color","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0.917647058824,0.956862745098,0.956862745098,1],"ix":1}},{"ty":0,"nm":"Opacity","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":255,"ix":2}},{"ty":0,"nm":"Direction","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"Distance","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":3,"ix":4}},{"ty":0,"nm":"Softness","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":22.6,"ix":5}},{"ty":7,"nm":"Shadow Only","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"ip":126,"op":1801,"st":1,"cp":true,"bm":0},{"ddd":0,"ind":91,"ty":2,"nm":"Ellipse 20.png","cl":"png","parent":90,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":1,"ix":10},"p":{"a":0,"k":[0.106,-0.443,0],"ix":2,"l":2},"a":{"a":0,"k":[165.5,167,0],"ix":1,"l":2},"s":{"a":0,"k":[49.615,49.615,100],"ix":6,"l":2}},"ao":0,"ip":126,"op":1800,"st":0,"cp":false,"bm":0},{"ddd":0,"ind":92,"ty":4,"nm":"Ellipse 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.29],"y":[1]},"o":{"x":[0.4],"y":[0]},"t":0,"s":[0],"e":[100]},{"t":52}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[332.581,329.448,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.513,0.513,0.667],"y":[1,1,1]},"o":{"x":[0.5,0.5,0.5],"y":[0,0,0]},"t":0,"s":[70,70,100],"e":[120,120,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.278,0.278,0.333],"y":[0,0,0]},"t":31,"s":[120,120,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":52,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":72,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":92,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":112,"s":[115,115,100],"e":[100,100,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":132,"s":[100,100,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":152,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":172,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":192,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":212,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":232,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":252,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.56,0.56,0.833],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":272,"s":[115,115,100],"e":[110,110,100]},{"t":292}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":2,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":5,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":6,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":7,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":8,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":9,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":10,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":11,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":12,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":13,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":14,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":15,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":16,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":17,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":18,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":19,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[205.736,205.736],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":16,"cp":true,"bm":0},{"ddd":0,"ind":93,"ty":2,"nm":"Ellipse 25.png","cl":"png","parent":92,"refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.29],"y":[1]},"o":{"x":[0.4],"y":[0]},"t":0,"s":[0],"e":[100]},{"t":52}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-0.074,-0.407,0],"ix":2,"l":2},"a":{"a":0,"k":[259.5,259,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"cp":false,"bm":0},{"ddd":0,"ind":94,"ty":4,"nm":"Ellipse 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.29],"y":[1]},"o":{"x":[0.4],"y":[0]},"t":3,"s":[0],"e":[100]},{"t":57}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[332.664,329.448,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.513,0.513,0.667],"y":[1,1,1]},"o":{"x":[0.5,0.5,0.5],"y":[0,0,0]},"t":3,"s":[27,27,100],"e":[120,120,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.278,0.278,0.333],"y":[0,0,0]},"t":36,"s":[120,120,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":57,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":77,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":97,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":117,"s":[115,115,100],"e":[100,100,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":137,"s":[100,100,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":157,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":177,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":197,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":217,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":237,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":257,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.56,0.56,0.833],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":277,"s":[115,115,100],"e":[110,110,100]},{"t":297}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":2,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":5,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":6,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":7,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":8,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":9,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":10,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":11,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":12,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":13,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":14,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":15,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":16,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":17,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":18,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":19,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[339.666,341.084],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":21,"cp":true,"bm":0},{"ddd":0,"ind":95,"ty":2,"nm":"Ellipse 24.png","cl":"png","parent":94,"refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.29],"y":[1]},"o":{"x":[0.4],"y":[0]},"t":3,"s":[0],"e":[100]},{"t":57}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.305,-0.862,0],"ix":2,"l":2},"a":{"a":0,"k":[393.5,394.5,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"cp":false,"bm":0},{"ddd":0,"ind":96,"ty":4,"nm":"Ellipse 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.29],"y":[1]},"o":{"x":[0.4],"y":[0]},"t":5,"s":[0],"e":[100]},{"t":61}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[332.664,329.448,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.513,0.513,0.667],"y":[1,1,1]},"o":{"x":[0.5,0.5,0.5],"y":[0,0,0]},"t":5,"s":[9,9,100],"e":[120,120,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.278,0.278,0.333],"y":[0,0,0]},"t":40,"s":[120,120,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":61,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":81,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":103,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":123,"s":[115,115,100],"e":[100,100,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":145,"s":[100,100,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":165,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":187,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":207,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":226,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.427,0.427,0.667],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":246,"s":[115,115,100],"e":[110,110,100]},{"i":{"x":[0.556,0.556,0.833],"y":[1,1,1]},"o":{"x":[0.382,0.382,0.167],"y":[0,0,0]},"t":265,"s":[110,110,100],"e":[115,115,100]},{"i":{"x":[0.56,0.56,0.833],"y":[1,1,1]},"o":{"x":[0.421,0.421,0.167],"y":[0,0,0]},"t":285,"s":[115,115,100],"e":[110,110,100]},{"t":304}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":2,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":5,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":6,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":7,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":8,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":9,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":10,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":11,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":12,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":13,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Overshoot","np":3,"mn":"ADBE Slider Control","ix":14,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Bounce","np":3,"mn":"ADBE Slider Control","ix":15,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Scale - Friction","np":3,"mn":"ADBE Slider Control","ix":16,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Overshoot","np":3,"mn":"ADBE Slider Control","ix":17,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":20,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Bounce","np":3,"mn":"ADBE Slider Control","ix":18,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]},{"ty":5,"nm":"Opacity - Friction","np":3,"mn":"ADBE Slider Control","ix":19,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":40,"ix":1,"x":"var $bm_rt;\\n$bm_rt = clamp(value, 0, 100);"}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-131.743,0],[0,-132.293],[131.743,0],[0,132.293]],"o":[[131.743,0],[0,132.293],[-131.743,0],[0,-132.293]],"v":[[0,-239.537],[238.541,0],[0,239.537],[-238.541,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[-161.363,0],[0,-162.037],[161.363,0],[0,162.037]],"o":[[161.363,0],[0,162.037],[-161.363,0],[0,-162.037]],"v":[[-2.975,-290.407],[289.2,2.987],[-2.975,296.381],[-295.149,2.987]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":26,"cp":true,"bm":0},{"ddd":0,"ind":97,"ty":2,"nm":"Ellipse 23.png","cl":"png","parent":96,"refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.29],"y":[1]},"o":{"x":[0.4],"y":[0]},"t":5,"s":[0],"e":[100]},{"t":61}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1.215,0.047,0],"ix":2,"l":2},"a":{"a":0,"k":[530.5,532.5,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"cp":false,"bm":0}],"markers":[{"tm":112,"cm":"1","dr":0}]}'
        ),
        r = a.t(o, 2),
        s = () => {
          let [e, i] = (0, n.useState)(),
            [a, o] = (0, n.useState)({ width: "600px", height: "600px" });
          (0, n.useLayoutEffect)(() => {
            i(window.innerWidth);
          }, []);
          let s = () => {
            i(window.innerWidth);
          };
          return (
            (0, n.useLayoutEffect)(
              () => (
                window.addEventListener("resize", s),
                () => {
                  window.removeEventListener("resize", s);
                }
              ),
              []
            ),
            (0, n.useLayoutEffect)(() => {
              e <= 1270 && e > 1260
                ? o({ width: "500px", height: "500px" })
                : e <= 1e3 && e > 767
                ? o({ width: "400px", height: "400px" })
                : e <= 767 && e > 500
                ? o({ width: "500px", height: "500px" })
                : e <= 500
                ? o({ width: "360px", height: "360px" })
                : o({ width: "600px", height: "600px" });
            }, [e]),
            (0, t.jsx)("div", {
              children: (0, t.jsx)(l.J5, {
                keepLastFrame: !0,
                autoplay: !0,
                src: r,
                style: { height: a.width, width: a.height },
                renderer: "svg",
              }),
            })
          );
        };
    },
    3525: function (e, i, a) {
      "use strict";
      a.r(i),
        a.d(i, {
          default: function () {
            return r;
          },
        });
      var t = a(7437),
        n = a(2265),
        l = a(5964);
      let o = (e) => {
        let { onClick: i, activeIndex: a, myIndex: n } = e;
        return (0, t.jsx)("button", {
          className: "dot",
          onClick: i,
          style: { backgroundColor: a == n ? "var(--yellow)" : "#DFE8E9" },
        });
      };
      function r(e) {
        var i, a, r;
        let { componentArray: s, autoPlay: c = !1 } = e,
          [d, m] = (0, n.useState)(0),
          x = (0, n.useRef)(),
          h = (e) => {
            m(e), x.current.swiper.slideTo(e);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(l.default, {
              onSlideChange: (e) => {
                m(null == e ? void 0 : e.activeIndex);
              },
              swiperRef: x,
              className: "splide__list",
              spaceBetween: 30,
              speed: 3e3,
              sliderComponents: s,
              loop: c,
              autoplayOptions: !!c && { delay: 0, disableOnInteraction: !1 },
              slidesPerView: Math.min(
                null !== (a = null == s ? void 0 : s.length) && void 0 !== a
                  ? a
                  : 0,
                4
              ),
              freeMode: !1,
              breakpoints: {
                320: { slidesPerView: 2, autoplay: !1 },
                900: {
                  slidesPerView: Math.min(
                    null !== (r = null == s ? void 0 : s.length) && void 0 !== r
                      ? r
                      : 0,
                    4
                  ),
                },
              },
            }),
            (0, t.jsx)("div", {
              className: "achievements_dots_container",
              children:
                null == s
                  ? void 0
                  : null ===
                      (i = s.filter(
                        (e, i) => i < (null == s ? void 0 : s.length) - 1
                      )) || void 0 === i
                  ? void 0
                  : i.map((e, i) =>
                      (0, t.jsx)(
                        o,
                        { myIndex: i, activeIndex: d, onClick: () => h(i) },
                        i
                      )
                    ),
            }),
          ],
        });
      }
    },
    9314: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(2265);
      i.default = (e) => {
        let { faqTabList: i, faqData: a, faqPlaylistInfo: l } = e,
          [o, r] = (0, n.useState)(0),
          [s, c] = (0, n.useState)(0);
        return (0, t.jsx)("section", {
          className: "milestone_container",
          id: "key_".concat((null == l ? void 0 : l.key) || "faq"),
          children: (0, t.jsxs)("div", {
            className: "container",
            children: [
              (0, t.jsx)("h2", { children: null == l ? void 0 : l.name }),
              (0, t.jsxs)("div", {
                className: "tabs_wrapper",
                children: [
                  (0, t.jsx)("ul", {
                    className: "tabs",
                    children: (i || []).map((e, i) =>
                      (0, t.jsx)(
                        "li",
                        {
                          className: "".concat(o === i ? "active" : ""),
                          id: "services",
                          onClick: () => {
                            r(i), c(0);
                          },
                          children: null == e ? void 0 : e.value,
                        },
                        i
                      )
                    ),
                  }),
                  (0, t.jsx)("div", {
                    className: "tabs_container",
                    children: (a || []).map((e, i) =>
                      (0, t.jsx)("div", {
                        className: "tab_content ".concat(
                          o === i ? "active" : ""
                        ),
                        "data-tab": "services",
                        children: (0, t.jsx)("div", {
                          className: "faqs_container",
                          children: e.map((e, i) =>
                            (0, t.jsxs)("div", {
                              className: "faqs",
                              children: [
                                (0, t.jsx)("button", {
                                  className: "accordion ".concat(
                                    s === i ? "active" : ""
                                  ),
                                  onClick: () => c(i),
                                  children: null == e ? void 0 : e.name,
                                }),
                                (0, t.jsx)("div", {
                                  className: "panel",
                                  style:
                                    s === i
                                      ? {
                                          maxHeight: "6rem",
                                          transition:
                                            "max-height 0.6s ease-out",
                                        }
                                      : {},
                                  children: (0, t.jsx)("div", {
                                    className: "text_row",
                                    children: (0, t.jsx)("p", {
                                      children: null == e ? void 0 : e.answer,
                                    }),
                                  }),
                                }),
                              ],
                            })
                          ),
                        }),
                      })
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    97: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(6290),
        l = a(2265);
      i.default = (e) => {
        let { data: i = [] } = e,
          [a, o] = (0, l.useState)(""),
          [r, s] = (0, l.useState)(""),
          [c, d] = (0, l.useState)(""),
          [m, x] = (0, l.useState)(""),
          [h, p] = (0, l.useState)({}),
          [k, u] = (0, l.useState)(!1),
          v = async () => {
            try {
              var e;
              let i = await (0, n.a8)(
                ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819")
                  .concat("/contact/form?formType=digitalSolution"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: a,
                    solutionType: r,
                    site: "engro-microsite",
                  }),
                }
              );
              if (
                ((
                  null == i
                    ? void 0
                    : null === (e = i.data) || void 0 === e
                    ? void 0
                    : e.InsertedID
                )
                  ? (o(""),
                    s(""),
                    d(""),
                    x(
                      "Thank you for your submission. We will get back to you soon."
                    ),
                    setTimeout(() => {
                      x("");
                    }, 1e4))
                  : d("Email is already subscribed"),
                i.ok)
              )
                throw Error("response status: ".concat(i.status));
            } catch (e) {
              console.log(e);
            }
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            className: "right_details",
            children: [
              (0, t.jsx)("div", {
                className: "form_container",
                children: (0, t.jsx)("div", {
                  style: { position: "relative" },
                  className: "form_col",
                  children: (0, t.jsxs)("div", {
                    style: { position: "relative", width: "100%" },
                    children: [
                      (0, t.jsx)("input", {
                        type: "text",
                        id: "Select Soultions",
                        className: "input_sec",
                        placeholder: "Select Solutions",
                        value: r,
                        onClick: () => u(!k),
                        style: {
                          padding: "5px",
                          width: "100%",
                          border: "none",
                          cursor: "pointer",
                        },
                      }),
                      (0, t.jsx)("span", {
                        className: "business_arrow_down down",
                        onClick: (e) => {
                          e.preventDefault(), u(!k);
                        },
                      }),
                      k &&
                        (0, t.jsx)("div", {
                          className: "select_solution_type_open_box",
                          children: (0, t.jsx)("ul", {
                            className: "select_solutions_Point",
                            children: [
                              { name: "IoT Solutions", value: "IoT Solutions" },
                              {
                                name: "Cloud Security",
                                value: "Cloud Security",
                              },
                              {
                                name: "AI/ML Solutions",
                                value: "AI/ML Solutions",
                              },
                              {
                                name: "Database Management",
                                value: "Database Management",
                              },
                              {
                                name: "Media and OTT Solutions",
                                value: "Media and OTT Solutions",
                              },
                              {
                                name: "Multi-Cloud Infrastructure Management",
                                value: "Multi-Cloud Infrastructure Management",
                              },
                              {
                                name: "Application Development and Modernization",
                                value:
                                  "Application Development and Modernization",
                              },
                            ].map((e, i) =>
                              (0, t.jsx)(
                                "li",
                                {
                                  onClick: (i) => {
                                    u(!k), s(e.value), d("");
                                  },
                                  children: (0, t.jsx)("span", {
                                    href: "#",
                                    className: "",
                                    children: null == e ? void 0 : e.name,
                                  }),
                                },
                                i
                              )
                            ),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: "form_container",
                children: (0, t.jsxs)("form", {
                  children: [
                    (0, t.jsx)("input", {
                      className: "input_sec",
                      type: "text",
                      placeholder: "Enter your email address",
                      value: a,
                      onChange: (e) => o(e.target.value),
                    }),
                    (0, t.jsx)("button", {
                      className: "btn",
                      onClick: (e) => {
                        e.preventDefault();
                        let i = "Select Solution" !== r && r,
                          t = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a);
                        t && i
                          ? (d(""), v(e))
                          : "" === a
                          ? d(" Please Enter Email")
                          : t || d("Email Is Not Valid"),
                          i || d("Please Select Solution");
                      },
                      children: "Get Started",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("span", {
                className: "validation_message",
                style: {
                  color: m ? "green" : "crimson",
                  opacity: c || m ? 1 : 0,
                },
                children: m || c,
              }),
            ],
          }),
        });
      };
    },
    6822: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(6290),
        l = a(2265);
      i.default = () => {
        let e = ""
            .concat("https://xmsapifo.engro.in/api/frontend/v2/")
            .concat("819", "/settings/countries/en"),
          [i, a] = (0, l.useState)({
            name: "",
            email: "",
            company: "",
            countryCode: "+971",
            mobile: "",
          }),
          [o, r] = (0, l.useState)([]);
        (0, l.useEffect)(() => {
          (0, n.a8)(e).then((e) => {
            var i;
            r(
              (null == e
                ? void 0
                : null === (i = e.data) || void 0 === i
                ? void 0
                : i.items) || []
            );
          });
        }, []);
        let [s, c] = (0, l.useState)(""),
          [d, m] = (0, l.useState)({
            name: "",
            email: "",
            mobile: "",
            company: "",
          }),
          x = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          h = /^[0-9]{10}$/,
          p = (e) => {
            let { name: i, value: t } = e.target;
            a((e) => ({ ...e, [i]: t })), m((e) => ({ ...e, [i]: "" }));
          },
          k = () => {
            let e = !0,
              a = "",
              t = "",
              n = "",
              l = "";
            return (
              "" === i.name.trim() &&
                ((a = "Please enter your name."), (e = !1)),
              x.test(i.email) ||
                ((t = "Please enter a valid email address."), (e = !1)),
              h.test(i.mobile) ||
                ((n = "Please enter a valid 10-digit phone number."), (e = !1)),
              "" === i.company.trim() &&
                ((l = "Please enter your company name."), (e = !1)),
              m({ name: a, email: t, mobile: n, company: l }),
              e
            );
          },
          u = async (e) => {
            if ((e.preventDefault(), k()))
              try {
                var t;
                let e = await (0, n.a8)(
                  ""
                    .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                    .concat("819")
                    .concat("/contact/form?formType=gitex"),
                  {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...i, site: "engro-microsite" }),
                  }
                );
                if (
                  ((null == e
                    ? void 0
                    : null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.InsertedID) &&
                    (a({
                      name: "",
                      email: "",
                      company: "",
                      countryCode: "+971",
                      mobile: "",
                    }),
                    c(
                      "Thank you for your submission. We will get back to you soon."
                    ),
                    setTimeout(() => {
                      c("");
                    }, 3e4)),
                  !e.ok)
                )
                  throw Error("Failed to submit form");
              } catch (e) {
                console.log(e);
              }
          };
        return (0, t.jsxs)("div", {
          className: "image_side",
          children: [
            (0, t.jsxs)("form", {
              action: "",
              className: "form_sec",
              onSubmit: u,
              children: [
                (0, t.jsxs)("div", {
                  className: "form_row",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "form_col",
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "name",
                          children: "Name",
                        }),
                        (0, t.jsx)("input", {
                          type: "text",
                          name: "name",
                          placeholder: "Enter your Name",
                          value: i.name,
                          onChange: p,
                          className: "input_sec",
                        }),
                        d.name &&
                          (0, t.jsx)("p", {
                            className: "error_msg",
                            style: { color: "red" },
                            children: d.name,
                          }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "form_col",
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "email",
                          children: "Email",
                        }),
                        (0, t.jsx)("input", {
                          type: "text",
                          name: "email",
                          placeholder: "Enter Your Email",
                          value: i.email,
                          onChange: p,
                          className: "input_sec",
                        }),
                        d.email &&
                          (0, t.jsx)("p", {
                            className: "error_msg",
                            style: { color: "red" },
                            children: d.email,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "form_row",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "form_col",
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "company",
                          children: "Company",
                        }),
                        (0, t.jsx)("input", {
                          type: "text",
                          name: "company",
                          placeholder: "Enter Your Company Name",
                          value: i.company,
                          onChange: p,
                          className: "input_sec",
                        }),
                        d.company &&
                          (0, t.jsx)("p", {
                            className: "error_msg",
                            style: { color: "red" },
                            children: d.company,
                          }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "form_col phone",
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "phone",
                          children: "Phone Number",
                        }),
                        (0, t.jsxs)("div", {
                          className: "input_section_row",
                          children: [
                            (0, t.jsxs)("select", {
                              name: "countryCode",
                              value: null == i ? void 0 : i.countryCode,
                              onChange: p,
                              className: "small input_sec",
                              children: [
                                (0, t.jsx)("option", {
                                  value: null == i ? void 0 : i.countryCode,
                                  hidden: !0,
                                  children: null == i ? void 0 : i.countryCode,
                                }),
                                null == o
                                  ? void 0
                                  : o.map((e) =>
                                      (0, t.jsx)(
                                        "option",
                                        {
                                          value:
                                            null == e ? void 0 : e.callingCode,
                                          children:
                                            null == e ? void 0 : e.label,
                                        },
                                        null == e ? void 0 : e.callingCode
                                      )
                                    ),
                              ],
                            }),
                            (0, t.jsx)("input", {
                              type: "text",
                              name: "mobile",
                              placeholder: "Enter Your Phone Number",
                              value: i.mobile,
                              onChange: p,
                              className: "phone input_sec",
                            }),
                          ],
                        }),
                        d.mobile &&
                          (0, t.jsx)("p", {
                            className: "error_msg",
                            style: { color: "red" },
                            children: d.mobile,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "form_row",
                  children: (0, t.jsx)("input", {
                    type: "submit",
                    value: "Let's Connect",
                    className: "btn",
                  }),
                }),
              ],
            }),
            (0, t.jsx)("p", { style: { color: "green" } }),
            (0, t.jsx)("span", {
              style: {
                display: "block",
                width: "80%",
                textAlign: "center",
                color: "green",
              },
              children: s || "",
            }),
          ],
        });
      };
    },
    7509: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return E;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(4913);
      a(9133);
      var o = a(6290);
      let r = "https://xmsapifo.engro.in/api/frontend/v2/";
      function s(e) {
        let { activeTabName: i, setActiveTabName: a } = e,
          [l, s] = (0, n.useState)([]),
          c = async () => {
            try {
              var e, i;
              let a = await (0, o.a8)(
                ""
                  .concat(r)
                  .concat("819")
                  .concat("/settings/reportcategories/en")
              );
              (null == a
                ? void 0
                : null === (e = a.data) || void 0 === e
                ? void 0
                : e.items) &&
                s(
                  null == a
                    ? void 0
                    : null === (i = a.data) || void 0 === i
                    ? void 0
                    : i.items
                );
            } catch (e) {
              console.log("Error:", err);
            }
          };
        return (
          (0, n.useEffect)(() => {
            c();
          }, []),
          (0, t.jsx)(t.Fragment, {
            children:
              l && (null == l ? void 0 : l.length) > 0
                ? (0, t.jsx)("ul", {
                    className: "tab_btns scroll",
                    children: l.map((e, n) =>
                      (0, t.jsx)(
                        "li",
                        {
                          className:
                            i === (null == e ? void 0 : e.value)
                              ? "active"
                              : "",
                          onClick: () => a(null == e ? void 0 : e.value),
                          children: null == e ? void 0 : e.label,
                        },
                        n
                      )
                    ),
                  })
                : null,
          })
        );
      }
      function c(e) {
        let { activeTabName: i } = e,
          [a, l] = (0, n.useState)([]),
          s = async () => {
            try {
              var e;
              let a = await (0, o.a8)(
                "".concat(r).concat("819").concat("/reports/docs/en"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    limit: 40,
                    offset: 0,
                    filters: i ? [{ field: "category", value: [i] }] : [],
                  }),
                }
              );
              if (
                (null == a ? void 0 : a.data) &&
                (null == a
                  ? void 0
                  : null === (e = a.data) || void 0 === e
                  ? void 0
                  : e.length) > 0
              ) {
                let [e = { documents: [] }] = null == a ? void 0 : a.data,
                  { documents: i = [] } = e;
                l(i);
              }
            } catch (e) {
              console.log("Error:", e);
            }
          };
        return ((0, n.useEffect)(() => {
          s();
        }, [i]),
        (null == a ? void 0 : a.length) == 0)
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsx)(t.Fragment, {
              children: a.map(function () {
                var e;
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { docFile: [{ path: "" }] },
                  a = arguments.length > 1 ? arguments[1] : void 0,
                  { docFile: n } = i,
                  l = null === (e = n[0]) || void 0 === e ? void 0 : e.path;
                return (0,
                t.jsx)("li", { className: "report_item", children: (0, t.jsx)("a", { href: l, download: null == i ? void 0 : i.name, target: "_blank", children: null == i ? void 0 : i.name }) }, a);
              }),
            });
      }
      let d = "https://xmsapifo.engro.in/api/frontend/v2/";
      function m(e) {
        let { activeTabName: i, setActiveTabName: a } = e,
          [l, r] = (0, n.useState)([]),
          s = async () => {
            try {
              var e, i;
              let a = await (0, o.a8)(
                ""
                  .concat(d)
                  .concat("819")
                  .concat("/settings/noticescategories/en")
              );
              (null == a
                ? void 0
                : null === (e = a.data) || void 0 === e
                ? void 0
                : e.items) &&
                r(
                  null == a
                    ? void 0
                    : null === (i = a.data) || void 0 === i
                    ? void 0
                    : i.items
                );
            } catch (e) {
              console.log("Error:", err);
            }
          };
        return (
          (0, n.useEffect)(() => {
            s();
          }, []),
          (0, t.jsx)(t.Fragment, {
            children:
              l && (null == l ? void 0 : l.length) > 0
                ? (0, t.jsx)("ul", {
                    className: "tab_btns scroll",
                    children: l.map((e, n) =>
                      (0, t.jsx)(
                        "li",
                        {
                          className:
                            i === (null == e ? void 0 : e.value)
                              ? "active"
                              : "",
                          onClick: () => a(null == e ? void 0 : e.value),
                          children: null == e ? void 0 : e.label,
                        },
                        n
                      )
                    ),
                  })
                : null,
          })
        );
      }
      function x(e) {
        let { activeTabName: i } = e,
          [a, l] = (0, n.useState)([]),
          r = async () => {
            try {
              var e;
              let a = await (0, o.a8)(
                "".concat(d).concat("819").concat("/notices/docs/en"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    limit: 40,
                    offset: 0,
                    filters: i ? [{ field: "category", value: [i] }] : [],
                  }),
                }
              );
              if (
                (null == a ? void 0 : a.data) &&
                (null == a
                  ? void 0
                  : null === (e = a.data) || void 0 === e
                  ? void 0
                  : e.length) > 0
              ) {
                let [e = { documents: [] }] = null == a ? void 0 : a.data,
                  { documents: i = [] } = e;
                l(i);
              }
            } catch (e) {
              console.log("Error:", e);
            }
          };
        return ((0, n.useEffect)(() => {
          r();
        }, [i]),
        (null == a ? void 0 : a.length) == 0)
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsx)(t.Fragment, {
              children: a.map(function () {
                var e;
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { docFile: [{ path: "" }] },
                  a = arguments.length > 1 ? arguments[1] : void 0,
                  { docFile: n } = i,
                  l = null === (e = n[0]) || void 0 === e ? void 0 : e.path;
                return (0,
                t.jsx)("li", { className: "report_item", children: (0, t.jsx)("a", { href: l, download: null == i ? void 0 : i.name, target: "_blank", children: null == i ? void 0 : i.name }) }, a);
              }),
            });
      }
      let h = "https://xmsapifo.engro.in/api/frontend/v2/";
      function p(e) {
        let { tabData: i } = e,
          [a, l] = (0, n.useState)([]),
          r = async () => {
            try {
              var e;
              let a = await (0, o.a8)(
                "".concat(h).concat("819").concat("/groupCompanies/docs/en"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    limit: 40,
                    offset: 0,
                    filters: (null == i ? void 0 : i.value)
                      ? [
                          {
                            field: "category",
                            value: [null == i ? void 0 : i.value],
                          },
                        ]
                      : [],
                  }),
                }
              );
              if (
                (null == a ? void 0 : a.data) &&
                (null == a
                  ? void 0
                  : null === (e = a.data) || void 0 === e
                  ? void 0
                  : e.length) > 0
              ) {
                let [e = { documents: [] }] = null == a ? void 0 : a.data,
                  { documents: i = [] } = e;
                l(i);
              }
            } catch (e) {
              console.log("Error:", e);
            }
          };
        return (
          (0, n.useEffect)(() => {
            r();
          }, [null == i ? void 0 : i.value]),
          (0, t.jsx)("div", {
            className: "acc_content",
            children: (0, t.jsx)("ul", {
              className: "gp_docs_list scroll",
              children:
                null == a
                  ? void 0
                  : a.map(function () {
                      var e;
                      let i =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { docFile: [{ path: "" }] },
                        a = arguments.length > 1 ? arguments[1] : void 0,
                        { docFile: n } = i,
                        l =
                          null === (e = n[0]) || void 0 === e ? void 0 : e.path;
                      return (0,
                      t.jsx)("li", { className: "gp_doc_list_item", children: (0, t.jsx)("a", { href: l, download: null == i ? void 0 : i.name, target: "_blank", children: null == i ? void 0 : i.name }) }, a);
                    }),
            }),
          })
        );
      }
      function k(e) {
        let { activeTabName: i, setActiveTabName: a } = e,
          [l, r] = (0, n.useState)([]),
          s = async () => {
            try {
              var e, i;
              let a = await (0, o.a8)(
                ""
                  .concat(h)
                  .concat("819")
                  .concat("/settings/groupcompaniescategories/en")
              );
              (null == a
                ? void 0
                : null === (e = a.data) || void 0 === e
                ? void 0
                : e.items) &&
                r(
                  null == a
                    ? void 0
                    : null === (i = a.data) || void 0 === i
                    ? void 0
                    : i.items
                );
            } catch (e) {
              console.log("Error:", err);
            }
          };
        return (
          (0, n.useEffect)(() => {
            s();
          }, []),
          (0, t.jsx)("ul", {
            className: "gp_accordian_container",
            children:
              null == l
                ? void 0
                : l.map((e, n) =>
                    (0, t.jsxs)(
                      "li",
                      {
                        className: "gp_accordian_item ".concat(
                          i === (null == e ? void 0 : e.value) ? "active" : ""
                        ),
                        onClick: () => a(null == e ? void 0 : e.value),
                        children: [
                          (0, t.jsxs)("div", {
                            className: "gp_item_header",
                            children: [
                              (0, t.jsx)("span", {
                                children: null == e ? void 0 : e.label,
                              }),
                              (0, t.jsx)("span", {
                                className: "down_icon",
                                children: (0, t.jsx)("i", {
                                  className: "arrow down",
                                }),
                              }),
                            ],
                          }),
                          i === (null == e ? void 0 : e.value)
                            ? (0, t.jsx)(p, { tabData: e })
                            : null,
                        ],
                      },
                      n
                    )
                  ),
          })
        );
      }
      function u() {
        let [e, i] = (0, n.useState)([]),
          a = async () => {
            try {
              var e;
              let a = await (0, o.a8)(
                ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819")
                  .concat("/policies/docs/en"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ limit: 40, offset: 0 }),
                }
              );
              if (
                (null == a ? void 0 : a.data) &&
                (null == a
                  ? void 0
                  : null === (e = a.data) || void 0 === e
                  ? void 0
                  : e.length) > 0
              ) {
                let [e = { documents: [] }] = null == a ? void 0 : a.data,
                  { documents: t = [] } = e;
                i(t);
              }
            } catch (e) {
              console.log("Error:", e);
            }
          };
        return ((0, n.useEffect)(() => {
          a();
        }, []),
        (null == e ? void 0 : e.length) == 0)
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsx)(t.Fragment, {
              children: e.map(function () {
                var e;
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { docFile: [{ path: "" }] },
                  a = arguments.length > 1 ? arguments[1] : void 0,
                  { docFile: n } = i,
                  l = null === (e = n[0]) || void 0 === e ? void 0 : e.path;
                return (0,
                t.jsx)("li", { className: "report_item", children: (0, t.jsx)("a", { href: l, download: null == i ? void 0 : i.name, target: "_blank", children: null == i ? void 0 : i.name }) }, a);
              }),
            });
      }
      function v() {
        let [e, i] = (0, n.useState)([]),
          a = async () => {
            try {
              var e;
              let a = await (0, o.a8)(
                ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819")
                  .concat("/csr/docs/en"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ limit: 40, offset: 0 }),
                }
              );
              if (
                (null == a ? void 0 : a.data) &&
                (null == a
                  ? void 0
                  : null === (e = a.data) || void 0 === e
                  ? void 0
                  : e.length) > 0
              ) {
                let [e = { documents: [] }] = null == a ? void 0 : a.data,
                  { documents: t = [] } = e;
                i(t);
              }
            } catch (e) {
              console.log("Error:", e);
            }
          };
        return ((0, n.useEffect)(() => {
          a();
        }, []),
        (null == e ? void 0 : e.length) == 0)
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsx)(t.Fragment, {
              children: e.map(function () {
                var e;
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { docFile: [{ path: "" }] },
                  a = arguments.length > 1 ? arguments[1] : void 0,
                  { docFile: n } = i,
                  l = null === (e = n[0]) || void 0 === e ? void 0 : e.path;
                return (0,
                t.jsx)("li", { className: "report_item", children: (0, t.jsx)("a", { href: l, download: null == i ? void 0 : i.name, target: "_blank", children: null == i ? void 0 : i.name }) }, a);
              }),
            });
      }
      function y() {
        let [e, i] = (0, n.useState)([]),
          a = async () => {
            try {
              var e;
              let a = await (0, o.a8)(
                ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819")
                  .concat("/committees/docs/en"),
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ limit: 40, offset: 0 }),
                }
              );
              if (
                (null == a ? void 0 : a.data) &&
                (null == a
                  ? void 0
                  : null === (e = a.data) || void 0 === e
                  ? void 0
                  : e.length) > 0
              ) {
                let [e = { documents: [] }] = null == a ? void 0 : a.data,
                  { documents: t = [] } = e;
                i(t);
              }
            } catch (e) {
              console.log("Error:", e);
            }
          };
        return ((0, n.useEffect)(() => {
          a();
        }, []),
        (null == e ? void 0 : e.length) == 0)
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsx)(t.Fragment, {
              children: e.map(function () {
                var e;
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { docFile: [{ path: "" }] },
                  a = arguments.length > 1 ? arguments[1] : void 0,
                  { docFile: n } = i,
                  l = null === (e = n[0]) || void 0 === e ? void 0 : e.path;
                return (0,
                t.jsx)("li", { className: "report_item", children: (0, t.jsx)("a", { href: l, download: null == i ? void 0 : i.name, target: "_blank", children: null == i ? void 0 : i.name }) }, a);
              }),
            });
      }
      let g = {
        management: (e) => {
          let { playListData: i } = e,
            a =
              (null == i
                ? void 0
                : i.content.filter(
                    (e) => (null == e ? void 0 : e.category) == "teamMember"
                  )) || [];
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "tab_content active",
              "data-tab": "quick_link_tab3",
              children: (0, t.jsxs)("div", {
                className: "tab_details_cont",
                children: [
                  (0, t.jsx)("h3", {
                    children:
                      "Board of Directors & Key Managerial Personnel (KMPs)",
                  }),
                  (0, t.jsx)("div", {
                    className: "scroll_sec scroll",
                    children:
                      a && (null == a ? void 0 : a.length) > 0
                        ? a.map((e, i) => {
                            let a =
                              (e.images &&
                                e.images.length > 0 &&
                                e.images[0].imageUrl[0]) ||
                              "";
                            return (0, t.jsxs)(
                              "div",
                              {
                                className: "row_box w_img management_details",
                                children: [
                                  (0, t.jsx)(l.default, {
                                    src: a,
                                    alt: null == e ? void 0 : e.name,
                                    className: "thumb_img",
                                    width: 96,
                                    height: 88,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "management_details_box",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: "name",
                                        children: null == e ? void 0 : e.name,
                                      }),
                                      (0, t.jsxs)("p", {
                                        children: [
                                          " ",
                                          null == e ? void 0 : e.designation,
                                        ],
                                      }),
                                      (0, t.jsx)("p", {
                                        children:
                                          null == e ? void 0 : e.description,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              i
                            );
                          })
                        : null,
                  }),
                ],
              }),
            }),
          });
        },
        investorGrievance: (e) => {
          let { playListData: i } = e,
            a =
              (null == i
                ? void 0
                : i.content.filter(
                    (e) => (null == e ? void 0 : e.category) == "investor"
                  )) || [];
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "tab_content active",
              "data-tab": "quick_link_tab3",
              children: (0, t.jsxs)("div", {
                className: "tab_details_cont",
                children: [
                  (0, t.jsx)("h3", { children: "Grievance" }),
                  (0, t.jsxs)("div", {
                    className: "scroll_sec scroll grievance_details_container",
                    children: [
                      (0, t.jsx)("h4", { children: "Contact Details" }),
                      (0, t.jsx)("div", {
                        className: "grievance_details_box_container",
                        children:
                          a && (null == a ? void 0 : a.length) > 0
                            ? a.map((e, i) =>
                                (0, t.jsxs)(
                                  "div",
                                  {
                                    className: "details_box",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "box_contact_name",
                                        children: (0, t.jsx)("span", {
                                          children:
                                            null == e ? void 0 : e.designation,
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "box_contact_details",
                                        children: [
                                          (0, t.jsx)("h4", {
                                            children:
                                              null == e ? void 0 : e.name,
                                          }),
                                          (0, t.jsx)("p", {
                                            children:
                                              null == e
                                                ? void 0
                                                : e.description,
                                          }),
                                          (null == e ? void 0 : e.email)
                                            ? (0, t.jsxs)("p", {
                                                children: [
                                                  " ",
                                                  "Email: ".concat(
                                                    null == e ? void 0 : e.email
                                                  ),
                                                ],
                                              })
                                            : "",
                                        ],
                                      }),
                                    ],
                                  },
                                  i
                                )
                              )
                            : "",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        businessOverview: (e) => {
          let { pageData: i } = e;
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "tab_content active",
              "data-tab": "quick_link_tab2",
              children: (0, t.jsxs)("div", {
                className: "tab_details_cont",
                children: [
                  (0, t.jsx)("h3", { children: "Business Overview" }),
                  (0, t.jsx)("div", {
                    className: "scroll_sec scroll",
                    dangerouslySetInnerHTML: {
                      __html: "\n           ".concat(
                        null == i ? void 0 : i.pageContent,
                        "\n          "
                      ),
                    },
                  }),
                ],
              }),
            }),
          });
        },
        keyMilestones: () => {
          let [e, i] = (0, n.useState)([]),
            a = async () => {
              var e;
              let a = ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819", "/settings/yearslist/en"),
                t = ""
                  .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                  .concat("819", "/milestones/docs/en"),
                n = {
                  limit: 10,
                  offset: 0,
                  filters: [{ field: "category", value: [] }],
                },
                l = await (0, o.a8)(a),
                r = (
                  (null == l
                    ? void 0
                    : null === (e = l.data) || void 0 === e
                    ? void 0
                    : e.items) || []
                )
                  .sort((e, i) => e.value - i.value)
                  .map((e) => {
                    let { label: i, value: a } = e;
                    return { label: i, value: a };
                  }),
                s = [],
                c = r.map((e) => {
                  let { value: i } = e,
                    a = { ...n, filters: [{ field: "category", value: [i] }] };
                  return (0, o.a8)(t, {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(a),
                  });
                });
              await Promise.allSettled(c)
                .then((e) => {
                  e &&
                    (null == e ? void 0 : e.length) &&
                    (e || []).forEach((e, i) => {
                      if ((null == e ? void 0 : e.status) === "fulfilled") {
                        var a;
                        let t = [
                          ...((null == e
                            ? void 0
                            : null === (a = e.value) || void 0 === a
                            ? void 0
                            : a.data) || {}),
                        ];
                        s.push({ year: r[i].label, content: t });
                      }
                    });
                })
                .catch((e) => {
                  console.error("Error in API calls:", e);
                }),
                i(s);
            };
          return (
            (0, n.useEffect)(() => {
              a();
            }, []),
            (0, t.jsx)("div", {
              className: "tab_content active",
              "data-tab": "quick_link_tab3",
              children: (0, t.jsxs)("div", {
                className: "tab_details_cont",
                children: [
                  (0, t.jsx)("h3", { children: "Key Milestones" }),
                  (0, t.jsx)("div", {
                    className: "scroll_sec scroll",
                    children: (0, t.jsx)("div", {
                      class: "table-container",
                      children: (0, t.jsxs)("table", {
                        class: "milestone-table",
                        children: [
                          (0, t.jsx)("thead", {
                            children: (0, t.jsxs)("tr", {
                              children: [
                                (0, t.jsx)("th", { children: "Year" }),
                                (0, t.jsx)("th", {
                                  children:
                                    "Timeline of Major Events / Milestones",
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("tbody", {
                            children:
                              null == e
                                ? void 0
                                : e.map((e) => {
                                    var i;
                                    return (0, t.jsxs)("tr", {
                                      children: [
                                        (0, t.jsx)("td", {
                                          children:
                                            (null == e ? void 0 : e.year) || "",
                                        }),
                                        (0, t.jsx)("td", {
                                          children: (0, t.jsx)("ul", {
                                            children:
                                              null == e
                                                ? void 0
                                                : null === (i = e.content) ||
                                                  void 0 === i
                                                ? void 0
                                                : i.map((e) =>
                                                    (0, t.jsx)("li", {
                                                      children: (0, t.jsx)(
                                                        "p",
                                                        {
                                                          children:
                                                            (null == e
                                                              ? void 0
                                                              : e.description) ||
                                                            "",
                                                        }
                                                      ),
                                                    })
                                                  ),
                                          }),
                                        }),
                                      ],
                                    });
                                  }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        reportsAnReturns: function (e) {
          let [i, a] = (0, n.useState)("financials");
          return (0, t.jsx)("div", {
            className: "tab_content active",
            children: (0, t.jsxs)("div", {
              className: "tab_details_cont",
              children: [
                (0, t.jsx)("h3", { children: "Reports an Returns" }),
                (0, t.jsx)(s, { activeTabName: i, setActiveTabName: a }),
                (0, t.jsx)("ul", {
                  className: "reports_tab_content scroll",
                  children: (0, t.jsx)(c, { activeTabName: i }),
                }),
              ],
            }),
          });
        },
        noticesAnDisclosures: function (e) {
          let [i, a] = (0, n.useState)("notices");
          return (0, t.jsx)("div", {
            className: "tab_content active",
            children: (0, t.jsxs)("div", {
              className: "tab_details_cont",
              children: [
                (0, t.jsx)("h3", { children: "Notices and Disclosures" }),
                (0, t.jsx)(m, { activeTabName: i, setActiveTabName: a }),
                (0, t.jsx)("ul", {
                  className: "reports_tab_content scroll",
                  children: (0, t.jsx)(x, { activeTabName: i }),
                }),
              ],
            }),
          });
        },
        groupCompanies: function (e) {
          let [i, a] = (0, n.useState)("");
          return (0, t.jsx)("div", {
            className: "tab_content active",
            children: (0, t.jsxs)("div", {
              className: "tab_details_cont",
              children: [
                (0, t.jsx)("h3", { children: "Group Companies" }),
                (0, t.jsx)(k, { activeTabName: i, setActiveTabName: a }),
              ],
            }),
          });
        },
        policies: function (e) {
          return (0, t.jsx)("div", {
            className: "tab_content active",
            children: (0, t.jsxs)("div", {
              className: "tab_details_cont",
              children: [
                (0, t.jsx)("h3", { children: "Policies" }),
                (0, t.jsx)("ul", {
                  className: "reports_tab_content scroll",
                  children: (0, t.jsx)(u, {}),
                }),
              ],
            }),
          });
        },
        csr: function (e) {
          return (0, t.jsx)("div", {
            className: "tab_content active",
            children: (0, t.jsxs)("div", {
              className: "tab_details_cont",
              children: [
                (0, t.jsx)("h3", { children: "CSR" }),
                (0, t.jsx)("ul", {
                  className: "reports_tab_content scroll",
                  children: (0, t.jsx)(v, {}),
                }),
              ],
            }),
          });
        },
        committees: function (e) {
          return (0, t.jsx)("div", {
            className: "tab_content active",
            children: (0, t.jsxs)("div", {
              className: "tab_details_cont",
              children: [
                (0, t.jsx)("h3", { children: "Committees" }),
                (0, t.jsx)("ul", {
                  className: "reports_tab_content scroll",
                  children: (0, t.jsx)(y, {}),
                }),
              ],
            }),
          });
        },
      };
      var E = (e) => {
        var i, a;
        let { tabsData: l, playListData: o, pageData: r } = e,
          [s, c] = (0, n.useState)("investor_link_tab1");
        return (0, t.jsxs)("div", {
          className: "tabs_wrapper",
          children: [
            (0, t.jsxs)("div", {
              className: "left_quick_links",
              children: [
                (0, t.jsx)("h2", { children: "Investor Relations" }),
                (0, t.jsx)("ul", {
                  className: "tabs",
                  children: l.map((e, i) =>
                    (0, t.jsx)(
                      "li",
                      {
                        className: s == e.id ? "active" : "",
                        id: e.id,
                        onClick: (i) => {
                          i.preventDefault(), c(e.id);
                        },
                        children: e.name,
                      },
                      i
                    )
                  ),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "tabs_container",
              children:
                g[
                  null ===
                    (i = l.find((e) => (null == e ? void 0 : e.id) === s)) ||
                  void 0 === i
                    ? void 0
                    : i.component
                ] &&
                n.createElement(
                  g[
                    null ===
                      (a = l.find((e) => (null == e ? void 0 : e.id) === s)) ||
                    void 0 === a
                      ? void 0
                      : a.component
                  ],
                  { playListData: o, pageData: r }
                ),
            }),
          ],
        });
      };
    },
    2826: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(2265);
      i.default = (e) => {
        var i, a;
        let {
            yearsTabList: l = [],
            milestonesPlaylist: o,
            milestonesData: r = [],
          } = e,
          [s, c] = (0, n.useState)(0),
          [d, m] = (0, n.useState)(null);
        return (0, t.jsx)("section", {
          className: "milestone_container",
          children: (0, t.jsxs)("div", {
            className: "container",
            children: [
              (0, t.jsx)("h2", { children: "Our Milestones" }),
              (0, t.jsxs)("div", {
                className: "tabs_wrapper",
                children: [
                  (0, t.jsx)("ul", {
                    className: "tabs",
                    children:
                      null === (i = l || []) || void 0 === i
                        ? void 0
                        : i.map((e, i) =>
                            (0, t.jsx)(
                              "li",
                              {
                                className: s === i ? "active" : "",
                                id: "year_".concat(e.value),
                                onClick: () => c(i),
                                children: e.label,
                              },
                              e.value
                            )
                          ),
                  }),
                  (0, t.jsx)("div", {
                    className: "tabs_container",
                    children:
                      null === (a = r || []) || void 0 === a
                        ? void 0
                        : a.map((e, i) => {
                            var a, n;
                            if (s !== i) return null;
                            let l = e.filter((e, i) => i % 2 == 0) || [],
                              o = e.filter((e, i) => i % 2 != 0) || [];
                            return (0, t.jsxs)(
                              "div",
                              {
                                className:
                                  s === i
                                    ? "tab_content active"
                                    : "tab_content",
                                "data-tab": "year_".concat(
                                  null == e ? void 0 : e.category
                                ),
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "faqs_container",
                                    children:
                                      null === (a = l || []) || void 0 === a
                                        ? void 0
                                        : a.map((e, i) =>
                                            (0, t.jsxs)(
                                              "div",
                                              {
                                                className: "faqs",
                                                children: [
                                                  (0, t.jsx)("button", {
                                                    onClick: () =>
                                                      m(i === d ? null : i),
                                                    className:
                                                      i === d
                                                        ? "accordion active"
                                                        : "accordion",
                                                    children:
                                                      null == e
                                                        ? void 0
                                                        : e.name,
                                                  }),
                                                  i === d &&
                                                    (0, t.jsx)("div", {
                                                      className: "panel",
                                                      style: {
                                                        maxHeight: "200px",
                                                        transition:
                                                          "max-height 0.5s ease-out",
                                                      },
                                                      children: (0, t.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "text_row points",
                                                          dangerouslySetInnerHTML:
                                                            {
                                                              __html:
                                                                (null == e
                                                                  ? void 0
                                                                  : e.content) ||
                                                                "",
                                                            },
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              },
                                              i
                                            )
                                          ),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "faqs_container",
                                    children:
                                      null === (n = o || []) || void 0 === n
                                        ? void 0
                                        : n.map((e, i) =>
                                            (0, t.jsxs)(
                                              "div",
                                              {
                                                className: "faqs",
                                                children: [
                                                  (0, t.jsx)("button", {
                                                    onClick: () =>
                                                      m(
                                                        i + l.length === d
                                                          ? null
                                                          : i + l.length
                                                      ),
                                                    className:
                                                      i + l.length === d
                                                        ? "accordion active"
                                                        : "accordion",
                                                    children:
                                                      null == e
                                                        ? void 0
                                                        : e.name,
                                                  }),
                                                  i + l.length === d &&
                                                    (0, t.jsx)("div", {
                                                      className: "panel",
                                                      style: {
                                                        maxHeight: "200px",
                                                        transition:
                                                          "max-height 0.2s ease-out",
                                                      },
                                                      children: (0, t.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "text_row points",
                                                          dangerouslySetInnerHTML:
                                                            {
                                                              __html:
                                                                (null == e
                                                                  ? void 0
                                                                  : e.content) ||
                                                                "",
                                                            },
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              },
                                              i
                                            )
                                          ),
                                  }),
                                ],
                              },
                              e.category
                            );
                          }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    8458: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return c;
        },
      });
      var t = a(7437),
        n = a(2265);
      class l extends n.Component {
        componentDidCatch(e, i) {
          console.error("Error:", e),
            console.error("Error Info:", i),
            this.setState({ errorDetails: e, hasError: !0 });
        }
        render() {
          return this.state.hasError
            ? (0, t.jsxs)("span", {
                children: [" ", this.state.errorDetails.toString()],
              })
            : this.props.children;
        }
        constructor(e) {
          super(e), (this.state = { hasError: !1, errorDetails: {} });
        }
      }
      var o = a(19),
        r = a(1204),
        s = a(9582);
      s.ZP.registerPlugin(r.i);
      var c = (e) => {
        let { name: i = "", description: a = "" } = e,
          [r, c] = (0, n.useState)(!1),
          d = (0, n.useRef)(null);
        return (
          (0, o.V)(() => {
            let e = document.querySelector(".fade_overlay");
            s.ZP.timeline({
              scrollTrigger: {
                trigger: e,
                start: "top center",
                end: "bottom center",
                scrub: !0,
              },
            }).to(e, {
              opacity: 0,
              duration: 1,
              onComplete: () => {
                s.ZP.timeline({
                  scrollTrigger: {
                    trigger: e,
                    start: "bottom center",
                    end: "bottom center",
                    scrub: !0,
                  },
                });
              },
            });
          }),
          (0, t.jsx)(l, {
            children: (0, t.jsx)("section", {
              className: "about_container relative",
              children: (0, t.jsxs)("div", {
                className: "container",
                children: [
                  (0, t.jsx)("h3", { className: "head_txt", children: i }),
                  (0, t.jsxs)("div", {
                    ref: d,
                    className: "about_txt ".concat(r ? "show" : ""),
                    children: [
                      a,
                      (0, t.jsx)("span", { className: "fade_overlay " }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    212: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return d;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(6290),
        o = () => {
          let [e, i] = (0, n.useState)({ email: "", name: "", message: "" }),
            [a, o] = (0, n.useState)({}),
            [r, s] = (0, n.useState)(""),
            [c, d] = (0, n.useState)(""),
            m = (e) => {
              let { name: a, value: t = "" } = e.target;
              "email" === a && (t = t.replace(/\s+/g, "")),
                c.length > 0 && d(""),
                i((e) => ({ ...e, [a]: t }));
            },
            x = async () => {
              let a = { ...e };
              (a.name = a.name.trim()), (a.message = a.message.trim());
              try {
                var t;
                let e = await (0, l.a8)(
                  ""
                    .concat("https://xmsapifo.engro.in/api/frontend/v2/")
                    .concat("819")
                    .concat("/contact/form?formType=investor"),
                  {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ site: "engro-microsite", ...a }),
                  }
                );
                if (
                  ((null == e
                    ? void 0
                    : null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.InsertedID) &&
                    (i({ email: "", name: "", message: "" }),
                    s(
                      "Thank you for your submission. We will get back to you soon."
                    ),
                    setTimeout(() => {
                      s("");
                    }, 5e3)),
                  0 == Object.keys(e).length &&
                    d(
                      "We already received your request. We will get back to you shortly."
                    ),
                  e.ok)
                )
                  throw Error("response status: ".concat(e.status));
              } catch (e) {
                console.log(e);
              }
            },
            h = async (i) => {
              i.preventDefault();
              let { email: a, name: t } = e,
                n = {};
              t || (n.name = "Name is required"),
                a
                  ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      a
                    ) || (n.email = "Invalid email address")
                  : (n.email = "Email is required"),
                Object.keys(n).length > 0 ? o(n) : (o(n), x());
            };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "tab_content active",
              "data-tab": "quick_link_tab1",
              children: (0, t.jsxs)("div", {
                className: "tab_details_cont",
                children: [
                  (0, t.jsx)("h3", {
                    children: "Subscribe to investor updates",
                  }),
                  (0, t.jsxs)("form", {
                    className: "form_sec",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "form_row",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "form_col",
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: "name",
                                children: "Name*",
                              }),
                              (0, t.jsx)("input", {
                                type: "text",
                                placeholder: "Enter your Name",
                                value: e.name,
                                className: "input_sec",
                                id: "name",
                                name: "name",
                                required: !0,
                                onChange: m,
                              }),
                              a.name &&
                                (0, t.jsx)("span", {
                                  className: "form-error",
                                  style: { color: "red" },
                                  children: a.name,
                                }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "form_col",
                            style: { position: "relative" },
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: "email",
                                children: "Email*",
                              }),
                              (0, t.jsx)("input", {
                                type: "text",
                                placeholder: "Enter Your Email",
                                value: e.email,
                                className: "input_sec",
                                id: "email",
                                name: "email",
                                required: !0,
                                onChange: m,
                              }),
                              a.email &&
                                (0, t.jsx)("span", {
                                  className: "form-error",
                                  style: { color: "red" },
                                  children: a.email,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "form_row contact-us-text-area",
                        style: { position: "relative" },
                        children: [
                          (0, t.jsx)("label", {
                            htmlFor: "message",
                            children: "Message",
                          }),
                          (0, t.jsx)("textarea", {
                            name: "message",
                            id: "message",
                            value: e.message,
                            onChange: m,
                            maxLength: 500,
                            placeholder: "Write Your Message",
                          }),
                          r &&
                            (0, t.jsx)("span", {
                              className: "submit-status",
                              style: {
                                color: "green",
                                position: "absolute",
                                left: "6px",
                              },
                              children: r,
                            }),
                          c &&
                            (0, t.jsx)("span", {
                              className: "form-error submit-status",
                              children: c,
                            }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "form_row",
                        children: (0, t.jsx)("input", {
                          type: "submit",
                          value: "Submit",
                          className: "btn",
                          onClick: h,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        r = (e) => {
          let { pageData: i } = e;
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "tab_content active",
              "data-tab": "quick_link_tab2",
              children: (0, t.jsxs)("div", {
                className: "tab_details_cont",
                children: [
                  (0, t.jsx)("h3", { children: "Glossary of terms" }),
                  (0, t.jsx)("div", {
                    className: "scroll_sec scroll",
                    dangerouslySetInnerHTML: {
                      __html: "\n             ".concat(
                        null == i ? void 0 : i.pageContent,
                        "\n            "
                      ),
                    },
                  }),
                ],
              }),
            }),
          });
        },
        s = a(4913),
        c = (e) => {
          var i;
          let { playListData: a } = e;
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "tab_content active",
              "data-tab": "quick_link_tab3",
              children: (0, t.jsxs)("div", {
                className: "tab_details_cont",
                children: [
                  (0, t.jsx)("h3", { children: "Investor Grievance" }),
                  (0, t.jsx)("div", {
                    className: "scroll_sec scroll",
                    children:
                      (null == a ? void 0 : a.content) &&
                      (null == a
                        ? void 0
                        : null === (i = a.content) || void 0 === i
                        ? void 0
                        : i.length) > 0
                        ? null == a
                          ? void 0
                          : a.content.map((e, i) => {
                              let a =
                                (e.images &&
                                  e.images.length > 0 &&
                                  e.images[0].imageUrl[0]) ||
                                "";
                              return (0, t.jsxs)(
                                "div",
                                {
                                  className: "row_box w_img",
                                  children: [
                                    (0, t.jsx)(s.default, {
                                      src: a,
                                      alt: null == e ? void 0 : e.name,
                                      className: "thumb_img",
                                      width: 96,
                                      height: 88,
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "name",
                                      children: null == e ? void 0 : e.name,
                                    }),
                                    (0, t.jsx)("p", {
                                      children:
                                        null == e ? void 0 : e.description,
                                    }),
                                    (0, t.jsx)("br", {}),
                                    (0, t.jsxs)("p", {
                                      children: [
                                        " ",
                                        "Email: ".concat(
                                          null == e ? void 0 : e.email
                                        ),
                                      ],
                                    }),
                                  ],
                                },
                                i
                              );
                            })
                        : null,
                  }),
                ],
              }),
            }),
          });
        },
        d = (e) => {
          let { tabsData: i, playListData: a, pageData: l } = e,
            [s, d] = (0, n.useState)("quick_link_tab1");
          return (0, t.jsxs)("div", {
            className: "tabs_wrapper",
            children: [
              (0, t.jsxs)("div", {
                className: "left_quick_links",
                children: [
                  (0, t.jsx)("h2", { children: "Quick Links to resources" }),
                  (0, t.jsx)("ul", {
                    className: "tabs",
                    children: i.map((e, i) =>
                      (0, t.jsx)(
                        "li",
                        {
                          id: e.id,
                          onClick: (i) => {
                            i.preventDefault(), d(e.id);
                          },
                          children: e.name,
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "tabs_container",
                children: [
                  "quick_link_tab1" == s
                    ? (0, t.jsx)(o, {})
                    : "quick_link_tab2" == s
                    ? (0, t.jsx)(r, { pageData: l })
                    : "quick_link_tab3" == s
                    ? (0, t.jsx)(c, { playListData: a })
                    : null,
                  " ",
                ],
              }),
            ],
          });
        };
    },
    6219: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(2265);
      i.default = (e) => {
        var i, a;
        let { playListName: l = "", reportsContent: o = [] } = e,
          [r, s] = (0, n.useState)(0);
        return (0, t.jsx)("section", {
          className: "reports_container",
          children: (0, t.jsxs)("div", {
            className: "container",
            children: [
              (0, t.jsx)("h2", { children: l }),
              (0, t.jsxs)("div", {
                className: "tabs_wrapper",
                children: [
                  (0, t.jsx)("ul", {
                    className: "tabs",
                    children:
                      null === (i = o || []) || void 0 === i
                        ? void 0
                        : i.map((e, i) =>
                            (0, t.jsx)("li", {
                              className: r === i ? "active" : "",
                              id: "report_tab".concat(i + 1),
                              onClick: () => s(i),
                              children: null == e ? void 0 : e.name,
                            })
                          ),
                  }),
                  (0, t.jsx)("div", {
                    className: "tabs_container",
                    children:
                      null === (a = o || []) || void 0 === a
                        ? void 0
                        : a.map((e, i) => {
                            var a;
                            return (0, t.jsx)("div", {
                              className: "tab_content ".concat(
                                r === i ? "active" : ""
                              ),
                              "data-tab": "report_tab".concat(i + 1),
                              children: (0, t.jsx)("ul", {
                                className: "reports",
                                children:
                                  null ===
                                    (a =
                                      (null == e ? void 0 : e.documents) ||
                                      []) || void 0 === a
                                    ? void 0
                                    : a.map((e) => {
                                        var i, a;
                                        let n =
                                          (null == e
                                            ? void 0
                                            : null === (a = e.docFile) ||
                                              void 0 === a
                                            ? void 0
                                            : null === (i = a[0]) ||
                                              void 0 === i
                                            ? void 0
                                            : i.path) || "";
                                        return (0, t.jsx)("li", {
                                          children: (0, t.jsxs)("a", {
                                            href: n,
                                            download:
                                              null == e ? void 0 : e.name,
                                            target: "_blank",
                                            children: [
                                              null == e ? void 0 : e.name,
                                              (0, t.jsx)("img", {
                                                src: "./images/download.svg",
                                                alt: "download",
                                              }),
                                            ],
                                          }),
                                        });
                                      }),
                              }),
                            });
                          }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    2654: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return r;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(5964);
      let o = (e) => {
        let { onClick: i, myIndex: a, activeIndex: n } = e;
        return (0, t.jsx)("div", {
          className: "ver_dot",
          style: { backgroundColor: a == n ? "var(--blue)" : "#C7E8E8" },
          onClick: i,
        });
      };
      function r(e) {
        let { componentsArr: i } = e,
          a = (0, n.useRef)(),
          [r, s] = (0, n.useState)(0),
          c = (e) => {
            s(e), a.current.swiper.slideTo(e);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: "ver_dots_container",
              children:
                null == i
                  ? void 0
                  : i.map((e, i) =>
                      (0, t.jsx)(o, {
                        activeIndex: r,
                        myIndex: i,
                        onClick: () => {
                          c(i);
                        },
                      })
                    ),
            }),
            (0, t.jsx)(l.default, {
              mousewheel: !0,
              onSlideChange: (e) => {
                s(null == e ? void 0 : e.activeIndex);
              },
              swiperRef: a,
              sliderComponents: i,
              autoplayOptions: !1,
              className: "splide__list",
              direction: "vertical",
              breakpoints: {
                300: { direction: "horizontal" },
                767: { direction: "vertical" },
              },
            }),
          ],
        });
      }
    },
    855: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return o;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(5964);
      function o(e) {
        let { slidesArray: i } = e,
          a = (0, n.useRef)();
        return (0, t.jsx)("section", {
          className: "slider_container",
          children: (0, t.jsx)("div", {
            className: "splide tagslider",
            "aria-label": "Slide Container",
            children: (0, t.jsx)(l.default, {
              speed: 200,
              swiperRef: a,
              mousewheel: { releaseOnEdges: !0, forceToAxis: !0 },
              slidesPerView: 1.3,
              sliderComponents: i,
              autoplayOptions: !1,
              spaceBetween: 27,
              pagination: !1,
              breakpoints: {
                320: { mousewheel: !1 },
                768: {
                  slidesPerView: 1.3,
                  mousewheel: { releaseOnEdges: !0, forceToAxis: !0 },
                },
                800: { slidesPerView: 2.5 },
                1200: { slidesPerView: 3.5 },
              },
            }),
          }),
        });
      }
    },
    7431: function (e, i, a) {
      "use strict";
      a.r(i),
        a.d(i, {
          default: function () {
            return r;
          },
        });
      var t = a(7437),
        n = a(2265),
        l = a(5964),
        o = a(4913);
      function r(e) {
        let { componentArray: i, displayBtns: a = !0, displayDots: r = !0 } = e,
          s = (0, n.useRef)(),
          c = (e) => {
            "prev" == e
              ? s.current.swiper.slidePrev()
              : s.current.swiper.slideNext();
          },
          [d, m] = (0, n.useState)(!1),
          x = () => {
            r && (window.innerWidth <= 850 ? m(!0) : m(!1));
          };
        return (
          (0, n.useEffect)(
            () => (
              window.addEventListener("resize", x()),
              () => {
                window.removeEventListener("resize", x());
              }
            ),
            []
          ),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: "bg_modern_slider" }),
              (0, t.jsx)(l.default, {
                pagination: !!d && { clickable: !0 },
                swiperRef: s,
                autoplayOptions: !1,
                sliderComponents: i,
                navigation: !1,
                speed: 420,
                centered: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                effectProps: {
                  effect: "cards",
                  cardsEffect: {
                    slideShadows: !1,
                    rotate: !1,
                    perSlideOffset: 10.5,
                  },
                },
                loop: !0,
                breakpoints: {
                  320: {
                    cardsEffect: { perSlideOffset: 9 },
                    pagination: { clickable: !0 },
                  },
                  768: {
                    cardsEffect: { perSlideOffset: 10.5 },
                    pagination: { clickable: !0 },
                  },
                  1024: { pagination: !1 },
                },
              }),
              a
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("button", {
                        className: "prev_btn",
                        "aria-label": "prev_btn",
                        onClick: () => {
                          c("prev");
                        },
                        children: (0, t.jsx)(o.default, {
                          src: "/images/ArrowCircleRight.png",
                          alt: "left button",
                          width: 60,
                          height: 60,
                        }),
                      }),
                      (0, t.jsx)("button", {
                        className: "next_btn",
                        "aria-label": "next_btn",
                        onClick: () => {
                          c("next");
                        },
                        children: (0, t.jsx)(o.default, {
                          src: "/images/ArrowCircleRight.png",
                          alt: "left button",
                          width: 60,
                          height: 60,
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          })
        );
      }
    },
    5964: function (e, i, a) {
      "use strict";
      a.r(i),
        a.d(i, {
          default: function () {
            return r;
          },
        });
      var t = a(7437),
        n = a(2265),
        l = a(3267),
        o = a(1212);
      function r(e) {
        let {
            initialSlide: i = 0,
            spaceBetween: a = 0,
            slidesPerView: r = 1,
            freeMode: s = !1,
            loop: c = !1,
            autoplayOptions: d = { delay: 1e3, disableOnInteraction: !1 },
            speed: m = 500,
            sliderComponents: x = [],
            onSlideChange: h = () => {},
            className: p = "",
            centered: k = !1,
            breakpoints: u = {},
            pagination: v = !1,
            slidesOffsetBefore: y = 0,
            navigation: g = !1,
            swiperRef: E = null,
            direction: A = "horizontal",
            touchRatio: f = 1,
            effectProps: B = {},
            mousewheel: b = !1,
          } = e,
          S = (0, n.useMemo)(() => Object.values(o), []);
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              (null == E ? void 0 : E.current) && E.current.swiper.update();
            };
            return (
              window.addEventListener("orientationchange", e),
              () => {
                window.removeEventListener("orientationchange", e);
              }
            );
          }, [E]),
          (0, t.jsx)(l.tq, {
            ref: E,
            className: p,
            initialSlide: i,
            mousewheel: b,
            spaceBetween: a,
            slidesPerView: r,
            onSlideChange: h,
            direction: A,
            freeMode: s,
            loop: c,
            autoplay: d,
            speed: m,
            slidesOffsetBefore: y,
            centeredSlides: k,
            modules: S,
            breakpoints: u,
            pagination: v,
            touchRatio: f,
            ...B,
            children:
              x && Array.isArray(x)
                ? x.map((e, i) => (0, t.jsx)(l.o5, { children: e }, i))
                : null,
          })
        );
      }
      a(3767), a(2507);
    },
    8640: function (e, i, a) {
      "use strict";
      a.d(i, {
        default: function () {
          return o;
        },
      });
      var t = a(7437),
        n = a(2265),
        l = a(5964);
      function o(e) {
        let { componentsArr: i } = e,
          a = (0, n.useRef)(),
          [o, r] = (0, n.useState)(0);
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.default, {
            onSlideChange: (e) => {
              r(null == e ? void 0 : e.activeIndex);
            },
            swiperRef: a,
            spaceBetween: 20,
            sliderComponents: i,
            className: "splide__list",
            slidesPerView: 3,
            autoplayOptions: !1,
            breakpoints: {
              320: { slidesPerView: 1.1 },
              768: { slidesPerView: 2.5, spaceBetween: 20 },
              900: { slidesPerView: 3 },
            },
          }),
        });
      }
    },
    3560: function (e, i, a) {
      "use strict";
      var t = a(7437),
        n = a(19),
        l = a(9582),
        o = a(2265),
        r = a(1204),
        s = a(8364);
      l.p8.registerPlugin(r.i),
        (i.default = (e) => {
          var i;
          let { items: a = [], name: c = "", description: d = "" } = e,
            m =
              360 /
              ((null === (i = a || []) || void 0 === i ? void 0 : i.length) > 0
                ? a.length
                : 1),
            [x, h] = (0, o.useState)(-m || 0),
            [p, k] = (0, o.useState)({ width: 1024, height: 800 }),
            u = (0, o.useRef)(null),
            v = () => {
              var e, i;
              k({
                width:
                  null === (e = window) || void 0 === e ? void 0 : e.innerWidth,
                height:
                  null === (i = window) || void 0 === i
                    ? void 0
                    : i.innerHeight,
              });
            };
          (0, o.useEffect)(
            () => (
              window.addEventListener("resize", v()),
              () => {
                window.removeEventListener("resize", v());
              }
            ),
            []
          );
          let y = () => {
              let e = p.width,
                i = p.height;
              return (Math.min(e, i) * (e > i ? 0.75 : 0.85)) / 2 / 16;
            },
            g = () => {
              let e = p.height;
              if (e < 480) return "+=150";
              if (e >= 480 && e < 768) return "+=3050";
              if ((e >= 768 && e < 1024) || (e >= 1024 && e < 1366))
                return "+=3000";
              if (e >= 1366 && e < 1920) return "+=3000";
              if (e >= 1920 && e < 2560) return "+=5000";
              if (e >= 2560 && e < 3840) return "+=8000";
              else return "+=8000";
            };
          (0, n.V)(() => {
            let e = new s.Z();
            e.on("scroll", (e) => {
              r.i.update;
            }),
              l.p8.ticker.add((i) => {
                e.raf(1e3 * i);
              }),
              l.p8.ticker.lagSmoothing(0);
            let i = document.querySelector(".circle-item-details"),
              a = i.clientHeight,
              t = i.scrollHeight,
              n = i.querySelectorAll(".circle-item-details > div");
            return (
              l.p8.timeline().to(".transform_process_container", {
                scrollTrigger: {
                  trigger: ".animate-process-container",
                  start: "center center",
                  end: g(),
                  scrub: !0,
                  pin: !0,
                  invalidateOnRefresh: !0,
                  onUpdate: (e) => {
                    let o = (null == e ? void 0 : e.progress) || 0;
                    h((1 - o) * (360 - m)),
                      l.p8.to(".circle-item-details", {
                        scrollTop: 0.9 * o * (t - a),
                        ease: "none",
                        duration: 0,
                      }),
                      (() => {
                        let e = i.getBoundingClientRect(),
                          a = e.top + e.height / 2;
                        n.forEach((i) => {
                          let t = i.getBoundingClientRect(),
                            n = t.top + t.height / 2,
                            o = e.height / 2;
                          l.p8.to(i, {
                            opacity:
                              0.4 +
                              0.7 * Math.sin(((n - a) / o) * (Math.PI / 1.75)),
                          });
                        });
                      })();
                  },
                },
              }),
              () => {
                var e;
                null === r.i ||
                  void 0 === r.i ||
                  null === (e = r.i.getAll()) ||
                  void 0 === e ||
                  e.forEach((e) => (null == e ? void 0 : e.kill()));
              }
            );
          }, [a]),
            (0, o.useEffect)(() => {
              let e = () => {
                r.i.refresh(), v();
              };
              window.addEventListener("resize", e), e();
              let i = u.current;
              if (i) {
                i.style.overflow = "hidden";
                let a = (e) => {
                  e.stopPropagation();
                };
                return (
                  i.addEventListener("touchmove", a, { passive: !0 }),
                  () => {
                    window.removeEventListener("resize", e),
                      i.removeEventListener("touchmove", a);
                  }
                );
              }
              return () => {
                window.removeEventListener("resize", e);
              };
            }, []);
          let E = function (e) {
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "rotation",
                a = e % 360;
              return a > 90 && a < 270
                ? 0.2 + 1.5 * Math.pow(Math.sin(((a - 90) / 180) * Math.PI), 5)
                : "img" === i
                ? 0
                : 0.2;
            },
            A = function (e) {
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "rotation",
                a = e % 360;
              return a > 90 && a < 270
                ? 0.2 + 1 * Math.pow(Math.sin(((a - 90) / 180) * Math.PI), 5)
                : "img" === i
                ? 0
                : void 0;
            },
            f = {
              body: { display: "grid", justifyContent: "center" },
              main: {
                borderColor: "#EEE",
                borderRadius: "10px",
                borderWidth: "2px",
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                position: "relative",
              },
              item: { position: "absolute", transformOrigin: "center center" },
              img: {
                width: "".concat(
                  (0.25 * Math.min(p.width, p.height)) / 2 / 16,
                  "rem"
                ),
                display: "block",
                margin: "0 auto",
              },
              spinBox: {
                height: "".concat(2 * y(), "rem"),
                width: "".concat(2 * y(), "rem"),
                position: "relative",
                borderRadius: "50%",
                border: "2px dashed #E0E0E0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            };
          return (0, t.jsx)("div", {
            className: "transform_process_container",
            children: (0, t.jsx)(
              "section",
              {
                className: "process_container animate-process-container",
                children: (0, t.jsx)("div", {
                  className: "container",
                  children: (0, t.jsxs)("div", {
                    className: "process_section",
                    children: [
                      (0, t.jsx)("div", {
                        className: "details circle-item-details",
                        ref: u,
                        children:
                          null == a
                            ? void 0
                            : a.map((e) =>
                                (0, t.jsxs)("div", {
                                  className: "spinwheel-content-box",
                                  children: [
                                    (0, t.jsx)("h2", {
                                      children:
                                        (null == e ? void 0 : e.name) || "",
                                    }),
                                    (0, t.jsx)("p", {
                                      children:
                                        (null == e ? void 0 : e.description) ||
                                        "",
                                    }),
                                  ],
                                })
                              ),
                      }),
                      (0, t.jsx)("div", {
                        className: "circle_section custom-circle_section",
                        children: (0, t.jsx)("div", {
                          style: f.body,
                          children: (0, t.jsx)("div", {
                            style: f.main,
                            children: (0, t.jsxs)("div", {
                              style: { ...f.spinBox },
                              children: [
                                a.length > 0 &&
                                  a.map((e, i) => {
                                    var a, n, l;
                                    let o =
                                        (null == e
                                          ? void 0
                                          : null === (l = e.images) ||
                                            void 0 === l
                                          ? void 0
                                          : null === (n = l[0]) || void 0 === n
                                          ? void 0
                                          : null === (a = n.imageUrl) ||
                                            void 0 === a
                                          ? void 0
                                          : a[0]) || "",
                                      r = 180 + (x + i * m),
                                      s = 100 - 80 * A(r, "img");
                                    return (0, t.jsx)(
                                      "div",
                                      {
                                        style: {
                                          ...f.item,
                                          transform: "rotate("
                                            .concat(r, "deg) translate(")
                                            .concat(y(), "rem) scale(")
                                            .concat(E(r), ")"),
                                        },
                                        children: (0, t.jsx)("img", {
                                          src: o,
                                          style: {
                                            ...f.img,
                                            rotate: "".concat(360 - r, "deg"),
                                            filter: "grayscale(".concat(
                                              s,
                                              "%)"
                                            ),
                                          },
                                          alt:
                                            (null == e ? void 0 : e.name) || "",
                                        }),
                                      },
                                      i
                                    );
                                  }),
                                (0, t.jsxs)("div", {
                                  className: "process-circle-center-details",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "circle-center-headline",
                                      children: c,
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "circle-center-body",
                                      children: d,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              },
              "process-container"
            ),
          });
        });
    },
    6290: function (e, i, a) {
      "use strict";
      a.d(i, {
        a8: function () {
          return t;
        },
      });
      let t = async function (e) {
        let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          let a = { ...i, cache: "no-store" },
            t = await fetch(e, { ...a });
          if (!t.ok) throw Error("Network response was not ok");
          return await t.json();
        } catch (e) {
          return a;
        }
      };
    },
    9133: function () {},
    2507: function () {},
  },
]);
