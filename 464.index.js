"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[464],{491:(n,e,t)=>{let r,o;t.r(e),t.d(e,{default:()=>R,generate:()=>g,initSync:()=>T,initThreadPool:()=>m,wbg_rayon_PoolBuilder:()=>h,wbg_rayon_start_worker:()=>p}),n=t.hmd(n);const _=new Array(128).fill(void 0);function i(n){return _[n]}_.push(void 0,null,!0,!1);let u=_.length;function c(n){const e=i(n);return function(n){n<132||(_[n]=u,u=n)}(n),e}const b="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&b.decode();let a=null;function f(n,e){return n>>>=0,b.decode((null!==a&&a.buffer===o.memory.buffer||(a=new Uint8Array(o.memory.buffer)),a).slice(n,n+e))}function s(n){u===_.length&&_.push(_.length+1);const e=u;return u=_[e],_[e]=n,e}let w=null;function l(){return null!==w&&w.buffer===o.memory.buffer||(w=new Int32Array(o.memory.buffer)),w}let d=null;function g(n,e,t){try{const b=o.__wbindgen_add_to_stack_pointer(-16);o.generate(b,n,e,t);var r=l()[b/4+0],_=l()[b/4+1],i=(u=r,c=_,u>>>=0,(null!==d&&d.buffer===o.memory.buffer||(d=new Uint8ClampedArray(o.memory.buffer)),d).subarray(u/1,u/1+c)).slice();return o.__wbindgen_free(r,1*_,1),i}finally{o.__wbindgen_add_to_stack_pointer(16)}var u,c}function y(n,e){try{return n.apply(this,e)}catch(n){o.__wbindgen_exn_store(s(n))}}function m(n){return c(o.initThreadPool(n))}function p(n){o.wbg_rayon_start_worker(n)}class h{static __wrap(n){n>>>=0;const e=Object.create(h.prototype);return e.__wbg_ptr=n,e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,n}free(){const n=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(n)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){o.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function v(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(n){c(n)},e.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=function(n){let e;try{e=i(n)instanceof Window}catch(n){e=!1}return e},e.wbg.__wbg_crypto_d05b68a3572bb8ca=function(n){return s(i(n).crypto)},e.wbg.__wbindgen_is_object=function(n){const e=i(n);return"object"==typeof e&&null!==e},e.wbg.__wbg_process_b02b3570280d0366=function(n){return s(i(n).process)},e.wbg.__wbg_versions_c1cb42213cedf0f5=function(n){return s(i(n).versions)},e.wbg.__wbg_node_43b1089f407e4ec2=function(n){return s(i(n).node)},e.wbg.__wbindgen_is_string=function(n){return"string"==typeof i(n)},e.wbg.__wbg_msCrypto_10fc94afee92bd76=function(n){return s(i(n).msCrypto)},e.wbg.__wbg_require_9a7e0f667ead4995=function(){return y((function(){return s(n.require)}),arguments)},e.wbg.__wbindgen_is_function=function(n){return"function"==typeof i(n)},e.wbg.__wbindgen_string_new=function(n,e){return s(f(n,e))},e.wbg.__wbg_getRandomValues_7e42b4fb8779dc6d=function(){return y((function(n,e){i(n).getRandomValues(i(e))}),arguments)},e.wbg.__wbg_randomFillSync_b70ccbdf4926a99d=function(){return y((function(n,e){i(n).randomFillSync(c(e))}),arguments)},e.wbg.__wbg_newnoargs_c62ea9419c21fbac=function(n,e){return s(new Function(f(n,e)))},e.wbg.__wbg_call_90c26b09837aba1c=function(){return y((function(n,e){return s(i(n).call(i(e)))}),arguments)},e.wbg.__wbindgen_object_clone_ref=function(n){return s(i(n))},e.wbg.__wbg_self_f0e34d89f33b99fd=function(){return y((function(){return s(self.self)}),arguments)},e.wbg.__wbg_window_d3b084224f4774d7=function(){return y((function(){return s(window.window)}),arguments)},e.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return y((function(){return s(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_35dfdd59a4da3e74=function(){return y((function(){return s(t.g.global)}),arguments)},e.wbg.__wbindgen_is_undefined=function(n){return void 0===i(n)},e.wbg.__wbg_call_5da1969d7cd31ccd=function(){return y((function(n,e,t){return s(i(n).call(i(e),i(t)))}),arguments)},e.wbg.__wbg_buffer_a448f833075b71ba=function(n){return s(i(n).buffer)},e.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=function(n,e,t){return s(new Uint8Array(i(n),e>>>0,t>>>0))},e.wbg.__wbg_new_8f67e318f15d7254=function(n){return s(new Uint8Array(i(n)))},e.wbg.__wbg_set_2357bf09366ee480=function(n,e,t){i(n).set(i(e),t>>>0)},e.wbg.__wbg_newwithlength_6c2df9e2f3028c43=function(n){return s(new Uint8Array(n>>>0))},e.wbg.__wbg_subarray_2e940e41c0f5a1d9=function(n,e,t){return s(i(n).subarray(e>>>0,t>>>0))},e.wbg.__wbindgen_throw=function(n,e){throw new Error(f(n,e))},e.wbg.__wbindgen_module=function(){return s(k.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return s(o.memory)},e.wbg.__wbg_startWorkers_2ee336a9694dda13=function(n,e,o){const _=async function(n,e,o){if(0===o.numThreads())throw new Error("num_threads must be > 0.");const _={module:n,memory:e,receiver:o.receiver()};r=await Promise.all(Array.from({length:o.numThreads()},(async()=>{const n=new Worker(new URL(t.p+t.u(491),t.b),{type:void 0});return n.postMessage(_),await new Promise((e=>n.addEventListener("message",e,{once:!0}))),n}))),o.build()}(c(n),c(e),h.__wrap(o));return s(_)},e}function A(n,e){n.wbg.memory=e||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function W(n,e){return o=n.exports,k.__wbindgen_wasm_module=e,w=null,a=null,d=null,o.__wbindgen_start(),o}function T(n,e){if(void 0!==o)return o;const t=v();return A(t,e),n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n)),W(new WebAssembly.Instance(n,t),n)}async function k(n,e){if(void 0!==o)return o;void 0===n&&(n=new URL(t(298),t.b));const r=v();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),A(r,e);const{instance:_,module:i}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,r);return W(_,i)}const R=k},298:(n,e,t)=>{n.exports=t.p+"62826e22912e5b70002f.wasm"}}]);