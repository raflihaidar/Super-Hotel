"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_AdminPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/AdminPage.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/AdminPage.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./resources/js/routes.js");
/* harmony import */ var _icons_DashboardIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/DashboardIcon.vue */ "./resources/js/icons/DashboardIcon.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'AdminPage',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var handleClick = function handleClick(item) {
      _routes__WEBPACK_IMPORTED_MODULE_1__["default"].push({
        name: item.route
      });
      sidebar.value.forEach(function (data) {
        data.status = data === item;
        data.submenu.forEach(function (value) {
          value.status = false;
        });
      });
    };
    var handleSubmenuClick = function handleSubmenuClick(menu, submenu) {
      _routes__WEBPACK_IMPORTED_MODULE_1__["default"].push({
        name: submenu.route
      });
      sidebar.value.forEach(function (data) {
        data.status = data === menu;
        data.submenu.forEach(function (value) {
          value.status = value === submenu;
        });
      });
    };
    var sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Dashboard',
      route: 'dashboard',
      status: true,
      hasSubmenu: false,
      submenu: [],
      icon: _icons_DashboardIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, {
      name: 'Master Room',
      route: '',
      status: true,
      hasSubmenu: true,
      submenu: [{
        name: 'Room',
        route: 'room',
        status: false,
        icon: function icon() {
          return __webpack_require__.e(/*! import() */ "resources_js_icons_RoomIcon_vue").then(__webpack_require__.t.bind(__webpack_require__, /*! ../icons/RoomIcon.vue */ "./resources/js/icons/RoomIcon.vue", 23));
        }
      }, {
        name: 'Category',
        route: 'category',
        status: false,
        icon: function icon() {
          return __webpack_require__.e(/*! import() */ "resources_js_icons_CategoryIcon_vue").then(__webpack_require__.t.bind(__webpack_require__, /*! ../icons/CategoryIcon.vue */ "./resources/js/icons/CategoryIcon.vue", 23));
        }
      }, {
        name: 'Booking',
        status: false
      }],
      icon: function icon() {
        return __webpack_require__.e(/*! import() */ "resources_js_icons_RoomMasterIcon_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../icons/RoomMasterIcon.vue */ "./resources/js/icons/RoomMasterIcon.vue"));
      }
    }, {
      name: 'Staff Management',
      route: '',
      status: true,
      hasSubmenu: true,
      submenu: [{
        name: 'Staff',
        route: 'staff',
        status: false,
        icon: function icon() {
          return __webpack_require__.e(/*! import() */ "resources_js_icons_StaffIcon_vue").then(__webpack_require__.t.bind(__webpack_require__, /*! ../icons/StaffIcon.vue */ "./resources/js/icons/StaffIcon.vue", 23));
        }
      }, {
        name: 'Shift',
        route: 'shift',
        status: false,
        icon: function icon() {
          return __webpack_require__.e(/*! import() */ "resources_js_icons_ShiftIcon_vue").then(__webpack_require__.t.bind(__webpack_require__, /*! ../icons/ShiftIcon.vue */ "./resources/js/icons/ShiftIcon.vue", 23));
        }
      }, {
        name: 'Divisi',
        route: 'divisi',
        status: false,
        icon: function icon() {
          return __webpack_require__.e(/*! import() */ "resources_js_icons_ShiftIcon_vue").then(__webpack_require__.t.bind(__webpack_require__, /*! ../icons/ShiftIcon.vue */ "./resources/js/icons/ShiftIcon.vue", 23));
        }
      }],
      icon: function icon() {
        return __webpack_require__.e(/*! import() */ "resources_js_icons_StaffManagementIcon_vue").then(__webpack_require__.t.bind(__webpack_require__, /*! ../icons/StaffManagementIcon.vue */ "./resources/js/icons/StaffManagementIcon.vue", 23));
      }
    }, {
      name: 'Guest',
      route: 'guest',
      status: false,
      hasSubmenu: false,
      submenu: [],
      icon: function icon() {
        return __webpack_require__.e(/*! import() */ "resources_js_icons_GuestIcon_vue").then(__webpack_require__.t.bind(__webpack_require__, /*! ../icons/GuestIcon.vue */ "./resources/js/icons/GuestIcon.vue", 23));
      }
    }]);
    var __returned__ = {
      handleClick: handleClick,
      handleSubmenuClick: handleSubmenuClick,
      sidebar: sidebar,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get router() {
        return _routes__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      DashboardIconVue: _icons_DashboardIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/icons/DashboardIcon.vue?vue&type=template&id=f140146c":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/icons/DashboardIcon.vue?vue&type=template&id=f140146c ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 22 21"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
}, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
}, null, -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, [].concat(_hoisted_4));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/AdminPage.vue?vue&type=template&id=44135c48":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/AdminPage.vue?vue&type=template&id=44135c48 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
  "class": "fixed top-0 z-50 w-full bg-green-700 text-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-3 py-3 lg:px-5 lg:pl-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center justify-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center justify-start rtl:justify-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "data-drawer-target": "sidebar-multi-level-sidebar",
  "data-drawer-toggle": "sidebar-multi-level-sidebar",
  "aria-controls": "sidebar-multi-level-sidebar",
  type: "button",
  "class": "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Open sidebar"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  "aria-hidden": "true",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "clip-rule": "evenodd",
  "fill-rule": "evenodd",
  d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "flex ms-2 md:me-24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "w-10 h-10 text-center",
  alt: "Super Hotel Logo"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
}, "Super Hotel")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center ms-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600",
  "aria-expanded": "false",
  "data-dropdown-toggle": "dropdown-user"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Open user menu"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "w-8 h-8 rounded-full",
  src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  alt: "user photo"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600",
  id: "dropdown-user"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 py-3",
  role: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm text-gray-900 dark:text-white",
  role: "none"
}, " Neil Sims "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm font-medium text-gray-900 truncate dark:text-gray-300",
  role: "none"
}, " neil.sims@flowbite.com ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "py-1",
  role: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
  role: "menuitem"
}, "Dashboard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
  role: "menuitem"
}, "Settings")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
  role: "menuitem"
}, "Earnings")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
  role: "menuitem"
}, "Sign out")])])])])])])])], -1 /* HOISTED */);
var _hoisted_2 = {
  id: "sidebar-multi-level-sidebar",
  "class": "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700",
  "aria-label": "Sidebar"
};
var _hoisted_3 = {
  "class": "h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800"
};
var _hoisted_4 = {
  "class": "ms-3"
};
var _hoisted_5 = {
  key: 1
};
var _hoisted_6 = ["aria-controls", "data-collapse-toggle"];
var _hoisted_7 = {
  "class": "flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-3 h-3",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 10 6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m1 1 4 4 4-4"
})], -1 /* HOISTED */);
var _hoisted_9 = ["id"];
var _hoisted_10 = ["onClick"];
var _hoisted_11 = {
  "class": "p-4 sm:ml-64"
};
var _hoisted_12 = {
  "class": "p-4 mt-14"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.sidebar, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
      "class": "space-y-2 font-medium",
      key: index
    }, [!item.hasSubmenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      key: 0,
      to: {
        name: item.route
      },
      onClick: function onClick($event) {
        return $setup.handleClick(item);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item.status ? 'bg-green-700 text-white hover:bg-green-900' : '', "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"])
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.icon), {
          "class": "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
          "aria-hidden": "true"
        })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to", "onClick", "class"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "class": "flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      "aria-controls": 'dropdown ' + item.name,
      "data-collapse-toggle": 'dropdown ' + item.name
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.icon), {
      "class": "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
      "aria-hidden": "true"
    })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), _hoisted_8], 8 /* PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
      id: 'dropdown ' + item.name,
      "class": "hidden py-2 space-y-2"
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.submenu, function (value, submenuIndex) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
        key: submenuIndex,
        onClick: function onClick($event) {
          return $setup.handleSubmenuClick(item, value);
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: {
          name: value.route
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([value.status ? 'bg-green-700 text-white hover:bg-green-900' : '', "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.name), 1 /* TEXT */)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to", "class"])], 8 /* PROPS */, _hoisted_10);
    }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_9)]))]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/assets/logo.png":
/*!***********************************!*\
  !*** ./resources/assets/logo.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.png?61c102e4614e472bf577aa4a1f108a05");

/***/ }),

/***/ "./resources/js/icons/DashboardIcon.vue":
/*!**********************************************!*\
  !*** ./resources/js/icons/DashboardIcon.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardIcon_vue_vue_type_template_id_f140146c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardIcon.vue?vue&type=template&id=f140146c */ "./resources/js/icons/DashboardIcon.vue?vue&type=template&id=f140146c");
/* harmony import */ var D_xampp_htdocs_super_hotel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_super_hotel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_DashboardIcon_vue_vue_type_template_id_f140146c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/icons/DashboardIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/page/AdminPage.vue":
/*!*****************************************!*\
  !*** ./resources/js/page/AdminPage.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminPage_vue_vue_type_template_id_44135c48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPage.vue?vue&type=template&id=44135c48 */ "./resources/js/page/AdminPage.vue?vue&type=template&id=44135c48");
/* harmony import */ var _AdminPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPage.vue?vue&type=script&setup=true&lang=js */ "./resources/js/page/AdminPage.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_xampp_htdocs_super_hotel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_super_hotel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AdminPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminPage_vue_vue_type_template_id_44135c48__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/page/AdminPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/page/AdminPage.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/page/AdminPage.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminPage.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/AdminPage.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/icons/DashboardIcon.vue?vue&type=template&id=f140146c":
/*!****************************************************************************!*\
  !*** ./resources/js/icons/DashboardIcon.vue?vue&type=template&id=f140146c ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardIcon_vue_vue_type_template_id_f140146c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardIcon_vue_vue_type_template_id_f140146c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardIcon.vue?vue&type=template&id=f140146c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/icons/DashboardIcon.vue?vue&type=template&id=f140146c");


/***/ }),

/***/ "./resources/js/page/AdminPage.vue?vue&type=template&id=44135c48":
/*!***********************************************************************!*\
  !*** ./resources/js/page/AdminPage.vue?vue&type=template&id=44135c48 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminPage_vue_vue_type_template_id_44135c48__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminPage_vue_vue_type_template_id_44135c48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminPage.vue?vue&type=template&id=44135c48 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/AdminPage.vue?vue&type=template&id=44135c48");


/***/ })

}]);