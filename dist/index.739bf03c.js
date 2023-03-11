// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gHDMI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
var _app = require("./app");
var _dataApi = require("./services/dataApi");
(0, _dataApi.initStore)();
const appComponent = (0, _app.createAppComponent)();
root.append(appComponent);
window.addEventListener("beforeunload", ()=>(0, _dataApi.saveInStorage)());

},{"./app":"8lRBv","./services/dataApi":"1s0qC"}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAppComponent", ()=>createAppComponent);
var _container = require("./shared/container");
var _todoComponents = require("./components/todoComponents");
var _dataApi = require("./services/dataApi");
function createAppComponent() {
    const counters = (0, _todoComponents.createCounterComponent)();
    const dataContainer = (0, _todoComponents.createDataContainerComponent)(counters.updateValues);
    dataContainer.loadData((0, _dataApi.store).getAll());
    const deleteForm = (0, _todoComponents.createDeleteFormComponent)(dataContainer.deleteAllCards, dataContainer.deleteCard);
    const addForm = (0, _todoComponents.createAddFormComponent)(dataContainer.addCard);
    const actionLine1 = (0, _container.createContainerComponent)({
        id: "actionLine1",
        className: "action-line",
        children: [
            deleteForm,
            addForm
        ]
    });
    const filterForm = (0, _todoComponents.createFilterFormComponent)(dataContainer.displayFilter);
    const actionLine2 = (0, _container.createContainerComponent)({
        id: "actionLine2",
        className: "action-line",
        children: [
            counters.element,
            filterForm
        ]
    });
    const appComponent = document.createDocumentFragment();
    appComponent.append(actionLine1, actionLine2, dataContainer.element);
    return appComponent;
}

},{"./shared/container":"5TBQR","./components/todoComponents":"d3DpB","./services/dataApi":"1s0qC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5TBQR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createContainerComponent", ()=>createContainerComponent);
var _utils = require("../utils");
const createElement = (tagName, id, className)=>(0, _utils.renderElement)(tagName, {
        id,
        className
    });
const createContainerComponent = (props = {})=>{
    const { tagName ="div" , id , className , children =null , onClick  } = props;
    const element = createElement(tagName, id, className);
    if (Array.isArray(children) && children.length) element.append(...children);
    if (onClick && typeof onClick === "function") element.addEventListener("click", onClick);
    return element;
};

},{"../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krKbQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uid", ()=>(0, _tools.uid));
parcelHelpers.export(exports, "isObject", ()=>(0, _tools.isObject));
parcelHelpers.export(exports, "renderElement", ()=>(0, _renderElement.renderElement));
var _renderElement = require("./renderElement");
var _tools = require("./tools");

},{"./renderElement":"b3IX9","./tools":"icNPX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3IX9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderElement", ()=>renderElement);
const renderElement = (tagName, options = {})=>{
    let element = document.createElement(tagName);
    let customProperties = [
        "innerHTML",
        "className",
        "class",
        "classList",
        "checked",
        "readOnly"
    ];
    for(const prop in options){
        if (!options[prop]) continue;
        if (!customProperties.includes(prop)) element.setAttribute(prop, options[prop]);
        else switch(prop){
            case "innerHTML":
            case "checked":
            case "classList":
            case "className":
            case "readOnly":
                element[prop] = options[prop];
                break;
            default:
                break;
        }
    }
    return element;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"icNPX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uid", ()=>uid);
parcelHelpers.export(exports, "isObject", ()=>isObject);
const uid = ()=>Date.now().toString(36) + Math.random().toString(36).slice(2);
const isObject = (obj)=>obj != null && obj.constructor.name === "Object";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3DpB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAddFormComponent", ()=>(0, _addForm.createAddFormComponent));
parcelHelpers.export(exports, "createDeleteFormComponent", ()=>(0, _deleteForm.createDeleteFormComponent));
parcelHelpers.export(exports, "createCounterComponent", ()=>(0, _counters.createCounterComponent));
parcelHelpers.export(exports, "createFilterFormComponent", ()=>(0, _filters.createFilterFormComponent));
parcelHelpers.export(exports, "createDataContainerComponent", ()=>(0, _dataContainer.createDataContainerComponent));
parcelHelpers.export(exports, "createTodoItemComponent", ()=>(0, _todoItem.createTodoItemComponent));
var _addForm = require("./addForm");
var _deleteForm = require("./deleteForm");
var _counters = require("./counters");
var _filters = require("./filters");
var _dataContainer = require("./dataContainer");
var _todoItem = require("./todoItem");

},{"./addForm":"jkg5r","./deleteForm":"32ixy","./counters":"dD8c0","./filters":"hYIgi","./dataContainer":"22vKF","./todoItem":"eN0Sx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jkg5r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAddFormComponent", ()=>createAddFormComponent);
var _shared = require("../shared");
const createAddFormComponent = (onAddHandler)=>{
    const enterNewTextInput = (0, _shared.createTextboxComponent)({
        className: "new-value-text-input",
        placeholder: "Enter todo..."
    });
    const addNewItemBtn = (0, _shared.createButtonComponent)({
        className: "btn add-btn",
        value: "Add",
        onClick: (e)=>{
            e.preventDefault();
            const text = enterNewTextInput.value;
            enterNewTextInput.value = null;
            onAddHandler(text);
        }
    });
    const form = (0, _shared.createContainerComponent)({
        tagName: "form",
        className: "add-form",
        children: [
            enterNewTextInput,
            addNewItemBtn
        ]
    });
    return form;
};

},{"../shared":"fTPlb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTPlb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCheckboxComponent", ()=>(0, _checkbox.createCheckboxComponent));
parcelHelpers.export(exports, "createTextboxComponent", ()=>(0, _textbox.createTextboxComponent));
parcelHelpers.export(exports, "createButtonComponent", ()=>(0, _button.createButtonComponent));
parcelHelpers.export(exports, "createContainerComponent", ()=>(0, _container.createContainerComponent));
var _button = require("./button");
var _checkbox = require("./checkbox");
var _container = require("./container");
var _textbox = require("./textbox");

},{"./button":"9wssx","./checkbox":"ls5r7","./container":"5TBQR","./textbox":"9vimN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wssx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createButtonComponent", ()=>createButtonComponent);
var _utils = require("../utils");
const createElement = (className, value)=>(0, _utils.renderElement)("input", {
        type: "button",
        value,
        className
    });
const createButtonComponent = (props = {})=>{
    const { className , value , onClick  } = props;
    const element = createElement(className, value);
    if (onClick && typeof onClick === "function") element.addEventListener("click", onClick);
    return element;
};

},{"../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ls5r7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCheckboxComponent", ()=>createCheckboxComponent);
var _utils = require("../utils");
const createCheckboxComponent = (props = {})=>{
    const { className , checked , disabled , onChange  } = props;
    const element = (0, _utils.renderElement)("input", {
        type: "checkbox",
        className,
        checked,
        disabled
    });
    if (onChange && typeof onChange === "function") element.addEventListener("change", onChange);
    return element;
};

},{"../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vimN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTextboxComponent", ()=>createTextboxComponent);
var _utils = require("../utils");
const createElement = (className, value, placeholder, readOnly)=>(0, _utils.renderElement)("input", {
        type: "text",
        value,
        className,
        placeholder,
        readOnly
    });
const createTextboxComponent = (props = {})=>{
    const { className , value , placeholder , readOnly , onChange  } = props;
    const element = createElement(className, value, placeholder, readOnly);
    if (onChange && typeof onChange === "function") element.addEventListener("keyup", onChange);
    return element;
};

},{"../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32ixy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDeleteFormComponent", ()=>createDeleteFormComponent);
var _dataApi = require("../services/dataApi");
var _shared = require("../shared");
const createDeleteFormComponent = (deleteAllCardsHandler, deleteCardHandler)=>{
    const deleteAllBtn = (0, _shared.createButtonComponent)({
        className: "btn delete-all-btn",
        value: "Delete All",
        onClick: ()=>deleteAllCardsHandler()
    });
    const deleteLastBtn = (0, _shared.createButtonComponent)({
        className: "btn delete-last-btn",
        value: "Delete Last",
        onClick: ()=>{
            const all = (0, _dataApi.store).getAll();
            if (all.length) deleteCardHandler(all[all.length - 1].id);
            else alert("Todo list is empty");
        }
    });
    const form = (0, _shared.createContainerComponent)({
        className: "delete-actions",
        children: [
            deleteAllBtn,
            deleteLastBtn
        ]
    });
    return form;
};

},{"../services/dataApi":"1s0qC","../shared":"fTPlb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1s0qC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store);
parcelHelpers.export(exports, "generateNewTodoData", ()=>generateNewTodoData);
parcelHelpers.export(exports, "initStore", ()=>initStore);
parcelHelpers.export(exports, "saveInStorage", ()=>saveInStorage);
var _utils = require("../utils");
var _dataStore = require("./dataStore");
const localStorageDataKey = "TODO-LIST";
const store = (0, _dataStore.dataStore).getInstance("dataApiJs");
const generateNewTodoData = (text)=>({
        id: (0, _utils.uid)(),
        checked: false,
        text: text,
        date: new Date().toLocaleDateString()
    });
const initStore = ()=>{
    const storageData = localStorage.getItem(localStorageDataKey);
    const data = JSON.parse(storageData) || [];
    if (data.length) data.forEach((item)=>store.add(item));
};
const saveInStorage = ()=>{
    const data = store.getAll();
    if (!data.length) {
        localStorage.setItem(localStorageDataKey, "[]");
        return;
    }
    localStorage.setItem(localStorageDataKey, JSON.stringify(data));
};

},{"../utils":"krKbQ","./dataStore":"kPycv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPycv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataStore", ()=>dataStore);
var _utils = require("../utils");
const createStoreInstance = (name = "default")=>{
    let source = [];
    return {
        name: name,
        getAll: ()=>[
                ...source
            ],
        getFiltered: (filter)=>[
                ...source.filter(filter)
            ],
        getById: (id)=>({
                ...source.find((item)=>item.id === id)
            }),
        add: (item)=>{
            if (!(0, _utils.isObject)(item) && item.id) return false;
            source.push(item);
            return undefined;
        },
        update: (data)=>{
            if (!(0, _utils.isObject)(data) && data.id) return false;
            let target = source.find((item)=>item.id === data.id);
            if (!target) return false;
            for(const prop in data)if (prop !== "id") target[prop] = data[prop];
            return true;
        },
        delete: (id)=>{
            const newSource = source.filter((item)=>item.id !== id);
            const itemWasDeleted = source.length !== newSource.length;
            source = newSource;
            return itemWasDeleted;
        },
        clean: ()=>{
            source = [];
            return true;
        },
        get length () {
            return source.length;
        }
    };
};
const dataStore = (()=>{
    let instance = null;
    return {
        getInstance: (name)=>{
            if (!instance) instance = createStoreInstance(name);
            return instance;
        }
    };
})();

},{"../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD8c0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateValues", ()=>updateValues);
parcelHelpers.export(exports, "createCounterComponent", ()=>createCounterComponent);
var _dataApi = require("../services/dataApi");
var _utils = require("../utils");
var _shared = require("../shared");
const allCounterText = "All:";
const completedCounterText = "Completed:";
const getCounterContent = (text, value)=>text ? `${text} ${value}` : value;
let allCounter = null;
let completedCounter = null;
const updateValues = ()=>{
    const allValue = (0, _dataApi.store).getAll().length;
    const completedValue = (0, _dataApi.store).getFiltered((todo)=>todo.checked).length;
    if (allCounter) allCounter.innerHTML = getCounterContent(allCounterText, allValue);
    if (completedCounter) completedCounter.innerHTML = getCounterContent(completedCounterText, completedValue);
};
const createCounterComponent = ()=>{
    allCounter = (0, _utils.renderElement)("div", {
        className: "counter",
        innerHTML: getCounterContent(allCounterText, 0)
    });
    completedCounter = (0, _utils.renderElement)("div", {
        className: "counter",
        innerHTML: getCounterContent(completedCounterText, 0)
    });
    const container = (0, _shared.createContainerComponent)({
        className: "counter-list",
        children: [
            allCounter,
            completedCounter
        ]
    });
    updateValues();
    return {
        element: container,
        updateValues
    };
};

},{"../services/dataApi":"1s0qC","../utils":"krKbQ","../shared":"fTPlb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYIgi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createFilterFormComponent", ()=>createFilterFormComponent);
var _shared = require("../shared");
const createFilterFormComponent = (filterHandler)=>{
    const allFilterBtn = (0, _shared.createButtonComponent)({
        className: "btn show-all-btn",
        value: "Show All",
        onClick: ()=>{
            searchFilterInput.value = null;
            filterHandler((item)=>item);
        }
    });
    const completedFilterBtn = (0, _shared.createButtonComponent)({
        className: "btn show-completed-btn",
        value: "Show Completed",
        onClick: ()=>{
            searchFilterInput.value = null;
            filterHandler((item)=>item.checked);
        }
    });
    const searchFilterInput = (0, _shared.createTextboxComponent)({
        className: "search-input",
        placeholder: "Search...",
        onChange: (e)=>{
            const searchText = e.target.value;
            filterHandler((item)=>item.text.includes(searchText));
        }
    });
    const form = (0, _shared.createContainerComponent)({
        className: "filters",
        children: [
            allFilterBtn,
            completedFilterBtn,
            searchFilterInput
        ]
    });
    return form;
};

},{"../shared":"fTPlb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22vKF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDataContainerComponent", ()=>createDataContainerComponent);
var _dataApi = require("../services/dataApi");
var _shared = require("../shared");
var _todoItem = require("./todoItem");
const renderContainer = ()=>{
    const container = (0, _shared.createContainerComponent)({
        id: "todoDataContainer",
        className: "todo-data-container"
    });
    return container;
};
function loadTodos(todoDataList) {
    todoDataList.forEach((data)=>{
        const item = (0, _todoItem.createTodoItemComponent)(data);
        this.append(item);
    });
}
function deleteAllTodos() {
    (0, _dataApi.store).clean();
    this.innerHTML = null;
}
function deleteTodo(id) {
    const data = (0, _dataApi.store).getById(id);
    if (data) {
        (0, _dataApi.store).delete(id);
        const card = this.querySelector(`#${id}`);
        card.remove();
    }
}
function completeTodo(id) {
    (0, _dataApi.store).update({
        id,
        checked: true
    });
    const card = this.querySelector(`#${id}`);
    card.classList.add("completed");
    const checkbox = card.querySelector(".checked-box");
    checkbox.disabled = true;
}
function addTodo(text) {
    const data = (0, _dataApi.generateNewTodoData)(text);
    (0, _dataApi.store).add(data);
    const item = (0, _todoItem.createTodoItemComponent)(data);
    this.append(item);
}
function displayFilter(filter) {
    const showIds = (0, _dataApi.store).getFiltered(filter).map((card)=>card.id);
    const cards = this.querySelectorAll(".card-todo");
    cards.forEach((card)=>{
        if (showIds.includes(card.id)) card.classList.remove("hidden");
        else card.classList.add("hidden");
    });
}
const createDataContainerComponent = (updateCounters)=>{
    const element = renderContainer();
    element.addEventListener("click", (e)=>{
        const target = e.target;
        const todo = target.closest(".card-todo");
        const id = todo?.id;
        if (id && target.classList.contains("checked-box")) {
            completeTodo.call(element, id);
            updateCounters();
        }
        if (id && target.classList.contains("close-todo-btn")) {
            deleteTodo.call(element, id);
            updateCounters();
        }
    });
    return {
        element,
        loadData: loadTodos.bind(element),
        deleteAllCards: ()=>{
            deleteAllTodos.call(element);
            updateCounters();
        },
        deleteCard: (...args)=>{
            deleteTodo.call(element, ...args);
            updateCounters();
        },
        addCard: (...args)=>{
            addTodo.call(element, ...args);
            updateCounters();
        },
        displayFilter: displayFilter.bind(element)
    };
};

},{"../services/dataApi":"1s0qC","../shared":"fTPlb","./todoItem":"eN0Sx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eN0Sx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTodoItemComponent", ()=>createTodoItemComponent);
var _utils = require("../utils");
var _shared = require("../shared");
const createTodoItemComponent = (data)=>{
    const { id , checked , text , date  } = data;
    const card = (0, _shared.createContainerComponent)({
        id,
        className: checked ? "card-todo completed" : "card-todo"
    });
    const checkbox = (0, _shared.createCheckboxComponent)({
        className: "checked-box",
        checked,
        disabled: checked
    });
    const textbox = (0, _shared.createTextboxComponent)({
        className: "text",
        value: text,
        readOnly: true
    });
    const closeBtn = (0, _shared.createButtonComponent)({
        className: "btn close-todo-btn",
        value: "x"
    });
    const dateLabel = (0, _utils.renderElement)("div", {
        className: "create-date",
        innerHTML: date
    });
    card.append(checkbox, textbox, closeBtn, dateLabel);
    return card;
};

},{"../utils":"krKbQ","../shared":"fTPlb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gHDMI","ebWYT"], "ebWYT", "parcelRequire5b66")

//# sourceMappingURL=index.739bf03c.js.map
