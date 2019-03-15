/*!
* rete-vue-render-plugin v0.3.3 
* (c) 2019  
* Released under the ISC license.
*/
function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import Vue from 'vue';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

Vue.filter('kebab', function (str) {
  var replace = function replace(s) {
    return s.toLowerCase().replace(/ /g, '-');
  };

  return Array.isArray(str) ? str.map(replace) : replace(str);
});

var mixin = {
  props: ['node', 'editor', 'bindSocket', 'bindControl'],
  methods: {
    inputs: function inputs() {
      return Array.from(this.node.inputs.values());
    },
    outputs: function outputs() {
      return Array.from(this.node.outputs.values());
    },
    controls: function controls() {
      return Array.from(this.node.controls.values());
    },
    selected: function selected() {
      return this.editor.selected.contains(this.node) ? 'selected' : '';
    }
  },
  directives: {
    socket: {
      bind: function bind(el, binding, vnode) {
        vnode.context.bindSocket(el, binding.arg, binding.value);
      },
      update: function update(el, binding, vnode) {
        vnode.context.bindSocket(el, binding.arg, binding.value);
      }
    },
    control: {
      bind: function bind(el, binding, vnode) {
        if (!binding.value) return;
        vnode.context.bindControl(el, binding.value);
      }
    }
  }
};

//
//
//
//
//
//
//
var script = {
  props: ['type', 'socket']
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "socket",
    class: _vm._f("kebab")([_vm.type, _vm.socket.name]),
    attrs: { title: _vm.socket.name }
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-4f0cd593_0", { source: "\n.socket[data-v-4f0cd593] {\n  display: inline-block;\n  cursor: pointer;\n  border: 1px solid white;\n  border-radius: 12px;\n  width: 24px;\n  height: 24px;\n  margin: 6px;\n  vertical-align: middle;\n  background: #96b38a;\n  z-index: 2;\n  box-sizing: border-box;\n}\n.socket[data-v-4f0cd593]:hover {\n    border-width: 4px;\n}\n.socket.multiple[data-v-4f0cd593] {\n    border-color: yellow;\n}\n.socket.output[data-v-4f0cd593] {\n    margin-right: -12px;\n}\n.socket.input[data-v-4f0cd593] {\n    margin-left: -12px;\n}\n\n/*# sourceMappingURL=Socket.vue.map */", map: {"version":3,"sources":["C:\\dev\\rete\\vue-render-plugin/C:\\dev\\rete\\vue-render-plugin/C:\\dev\\rete\\vue-render-plugin\\src\\Socket.vue","Socket.vue"],"names":[],"mappings":";AAgBA;EACA,sBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,oBAAA;EACA,WAAA;EACA,uBAAA;CAQA;AAnBA;IAaA,kBAAA;CAAA;AAbA;IAeA,qBAAA;CAAA;AAfA;IAiBA,oBAAA;CAAA;AAjBA;IAmBA,mBAAA;CAAA;;ACdA,sCAAsC","file":"Socket.vue","sourcesContent":[null,".socket {\n  display: inline-block;\n  cursor: pointer;\n  border: 1px solid white;\n  border-radius: 12px;\n  width: 24px;\n  height: 24px;\n  margin: 6px;\n  vertical-align: middle;\n  background: #96b38a;\n  z-index: 2;\n  box-sizing: border-box; }\n  .socket:hover {\n    border-width: 4px; }\n  .socket.multiple {\n    border-color: yellow; }\n  .socket.output {\n    margin-right: -12px; }\n  .socket.input {\n    margin-left: -12px; }\n\n/*# sourceMappingURL=Socket.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-4f0cd593";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "C:\\dev\\rete\\vue-render-plugin\\src\\Socket.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Socket = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

//
var script$1 = {
  mixins: [mixin],
  components: {
    Socket: Socket
  }
};

/* script */
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "node",
      class: _vm._f("kebab")([_vm.selected(), _vm.node.name])
    },
    [
      _c("div", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.node.name) + " PEPE")
      ]),
      _vm._l(_vm.outputs(), function(output) {
        return _c(
          "div",
          { key: output.key, staticClass: "output" },
          [
            _c("div", { staticClass: "output-title" }, [
              _vm._v(_vm._s(output.name))
            ]),
            _c("Socket", {
              directives: [
                {
                  name: "socket",
                  rawName: "v-socket:output",
                  value: output,
                  expression: "output",
                  arg: "output"
                }
              ],
              attrs: { type: "output", socket: output.socket }
            })
          ],
          1
        )
      }),
      _vm._l(_vm.controls(), function(control) {
        return _c("div", {
          directives: [
            {
              name: "control",
              rawName: "v-control",
              value: control,
              expression: "control"
            }
          ],
          staticClass: "control"
        })
      }),
      _vm._l(_vm.inputs(), function(input) {
        return _c(
          "div",
          { key: input.key, staticClass: "input" },
          [
            _c("Socket", {
              directives: [
                {
                  name: "socket",
                  rawName: "v-socket:input",
                  value: input,
                  expression: "input",
                  arg: "input"
                }
              ],
              attrs: { type: "input", socket: input.socket }
            }),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !input.showControl(),
                    expression: "!input.showControl()"
                  }
                ],
                staticClass: "input-title"
              },
              [_vm._v(_vm._s(input.name))]
            ),
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: input.showControl(),
                  expression: "input.showControl()"
                },
                {
                  name: "control",
                  rawName: "v-control",
                  value: input.control,
                  expression: "input.control"
                }
              ],
              staticClass: "input-control"
            })
          ],
          1
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-0ae94f42_0", { source: "\n.node[data-v-0ae94f42] {\n  background: rgba(110, 136, 255, 0.8);\n  border: 2px solid #4e58bf;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: 180px;\n  height: auto;\n  padding-bottom: 6px;\n  box-sizing: content-box;\n  position: relative;\n  user-select: none;\n}\n.node[data-v-0ae94f42]:hover {\n    background: rgba(130, 153, 255, 0.8);\n}\n.node.selected[data-v-0ae94f42] {\n    background: #ffd92c;\n    border-color: #e3c000;\n}\n.node .title[data-v-0ae94f42] {\n    color: white;\n    font-family: sans-serif;\n    font-size: 18px;\n    padding: 8px;\n}\n.node .output[data-v-0ae94f42] {\n    text-align: right;\n}\n.node .input[data-v-0ae94f42] {\n    text-align: left;\n}\n.node .input-title[data-v-0ae94f42], .node .output-title[data-v-0ae94f42] {\n    vertical-align: middle;\n    color: white;\n    display: inline-block;\n    font-family: sans-serif;\n    font-size: 14px;\n    margin: 6px;\n    line-height: 24px;\n}\n.node .input-control[data-v-0ae94f42] {\n    z-index: 1;\n    width: calc(100% - 36px);\n    vertical-align: middle;\n    display: inline-block;\n}\n.node .control[data-v-0ae94f42] {\n    padding: 6px 18px;\n}\n\n/*# sourceMappingURL=Node.vue.map */", map: {"version":3,"sources":["C:\\dev\\rete\\vue-render-plugin/C:\\dev\\rete\\vue-render-plugin/C:\\dev\\rete\\vue-render-plugin\\src\\Node.vue","Node.vue"],"names":[],"mappings":";AAwCA;EACA,qCAAA;EACA,0BAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,oBAAA;EACA,wBAAA;EACA,mBAAA;EACA,kBAAA;CA6BA;AAvCA;IAYA,qCAAA;CAAA;AAZA;IAcA,oBAAA;IACA,sBAAA;CAAA;AAfA;IAiBA,aAAA;IACA,wBAAA;IACA,gBAAA;IACA,aAAA;CAAA;AApBA;IAsBA,kBAAA;CAAA;AAtBA;IAwBA,iBAAA;CAAA;AAxBA;IA0BA,uBAAA;IACA,aAAA;IACA,sBAAA;IACA,wBAAA;IACA,gBAAA;IACA,YAAA;IACA,kBAAA;CAAA;AAhCA;IAkCA,WAAA;IACA,yBAAA;IACA,uBAAA;IACA,sBAAA;CAAA;AArCA;IAuCA,kBAAA;CAAA;;ACtCA,oCAAoC","file":"Node.vue","sourcesContent":[null,".node {\n  background: rgba(110, 136, 255, 0.8);\n  border: 2px solid #4e58bf;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: 180px;\n  height: auto;\n  padding-bottom: 6px;\n  box-sizing: content-box;\n  position: relative;\n  user-select: none; }\n  .node:hover {\n    background: rgba(130, 153, 255, 0.8); }\n  .node.selected {\n    background: #ffd92c;\n    border-color: #e3c000; }\n  .node .title {\n    color: white;\n    font-family: sans-serif;\n    font-size: 18px;\n    padding: 8px; }\n  .node .output {\n    text-align: right; }\n  .node .input {\n    text-align: left; }\n  .node .input-title, .node .output-title {\n    vertical-align: middle;\n    color: white;\n    display: inline-block;\n    font-family: sans-serif;\n    font-size: 14px;\n    margin: 6px;\n    line-height: 24px; }\n  .node .input-control {\n    z-index: 1;\n    width: calc(100% - 36px);\n    vertical-align: middle;\n    display: inline-block; }\n  .node .control {\n    padding: 6px 18px; }\n\n/*# sourceMappingURL=Node.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-0ae94f42";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "C:\\dev\\rete\\vue-render-plugin\\src\\Node.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Node = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

function createVue(el, vueComponent, vueProps) {
  var app = new Vue({
    render: function render(h) {
      return h(vueComponent, {
        props: vueProps
      });
    }
  });
  var nodeEl = document.createElement('div');
  el.appendChild(nodeEl);
  app.$mount(nodeEl);
  return app;
}

function createNode(editor, _ref) {
  var el = _ref.el,
      node = _ref.node,
      component = _ref.component,
      bindSocket = _ref.bindSocket,
      bindControl = _ref.bindControl;
  var vueComponent = component.component || Node;

  var vueProps = _objectSpread({}, component.props, {
    node: node,
    editor: editor,
    bindSocket: bindSocket,
    bindControl: bindControl
  });

  var app = createVue(el, vueComponent, vueProps);
  node.vueContext = app.$children[0];
  return app;
}

function createControl(editor, _ref2) {
  var el = _ref2.el,
      control = _ref2.control;
  var vueComponent = control.component;

  var vueProps = _objectSpread({}, control.props, {
    getData: control.getData.bind(control),
    putData: control.putData.bind(control)
  });

  var app = createVue(el, vueComponent, vueProps);
  control.vueContext = app.$children[0];
  return app;
}

var update = function update(entity) {
  return new Promise(function (res) {
    if (entity.vueContext) entity.vueContext.$forceUpdate();
    entity.vueContext.$nextTick(res);
  });
};

function install(editor, params) {
  editor.on('rendernode', function (_ref3) {
    var el = _ref3.el,
        node = _ref3.node,
        component = _ref3.component,
        bindSocket = _ref3.bindSocket,
        bindControl = _ref3.bindControl;
    if (component.render && component.render !== 'vue') return;
    node._vue = createNode(editor, {
      el: el,
      node: node,
      component: component,
      bindSocket: bindSocket,
      bindControl: bindControl
    });
    node.update =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return update(node);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  });
  editor.on('rendercontrol', function (_ref5) {
    var el = _ref5.el,
        control = _ref5.control;
    if (control.render && control.render !== 'vue') return;
    control._vue = createControl(editor, {
      el: el,
      control: control
    });
    control.update =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return update(control);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  });
  editor.on('connectioncreated connectionremoved', function (connection) {
    update(connection.output.node);
    update(connection.input.node);
  });
  editor.on('nodeselected', function () {
    editor.nodes.map(update);
  });
}

var index = {
  name: 'vue-render',
  install: install,
  mixin: mixin,
  Node: Node,
  Socket: Socket
};

export default index;
//# sourceMappingURL=vue-render-plugin.esm.js.map
