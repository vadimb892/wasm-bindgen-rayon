"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67],{67:(n,e,t)=>{let r;t.r(e),t.d(e,{default:()=>A,generate:()=>l,initSync:()=>p}),n=t.hmd(n);const i=new Array(32).fill(void 0);function o(n){return i[n]}i.push(void 0,null,!0,!1);let u=i.length;const _=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});_.decode();let c=new Uint8Array;function b(){return 0===c.byteLength&&(c=new Uint8Array(r.memory.buffer)),c}function a(n,e){return _.decode(b().subarray(n,n+e))}function f(n){u===i.length&&i.push(i.length+1);const e=u;return u=i[e],i[e]=n,e}let s=new Int32Array;function w(){return 0===s.byteLength&&(s=new Int32Array(r.memory.buffer)),s}let g=new Uint8ClampedArray;function l(n,e,t){try{const b=r.__wbindgen_add_to_stack_pointer(-16);r.generate(b,n,e,t);var i=w()[b/4+0],o=w()[b/4+1],u=(_=i,c=o,(0===g.byteLength&&(g=new Uint8ClampedArray(r.memory.buffer)),g).subarray(_/1,_/1+c)).slice();return r.__wbindgen_free(i,1*o),u}finally{r.__wbindgen_add_to_stack_pointer(16)}var _,c}function d(n,e){try{return n.apply(this,e)}catch(n){r.__wbindgen_exn_store(f(n))}}function y(){const e={wbg:{}};return e.wbg.__wbg_crypto_e1d53a1d73fb10b8=function(n){return f(o(n).crypto)},e.wbg.__wbindgen_is_object=function(n){const e=o(n);return"object"==typeof e&&null!==e},e.wbg.__wbg_process_038c26bf42b093f8=function(n){return f(o(n).process)},e.wbg.__wbg_versions_ab37218d2f0b24a8=function(n){return f(o(n).versions)},e.wbg.__wbg_node_080f4b19d15bc1fe=function(n){return f(o(n).node)},e.wbg.__wbindgen_is_string=function(n){return"string"==typeof o(n)},e.wbg.__wbindgen_object_drop_ref=function(n){!function(n){const e=o(n);(function(n){n<36||(i[n]=u,u=n)})(n)}(n)},e.wbg.__wbg_msCrypto_6e7d3e1f92610cbb=function(n){return f(o(n).msCrypto)},e.wbg.__wbg_require_78a3dcfbdba9cbce=function(){return d((function(){return f(n.require)}),arguments)},e.wbg.__wbindgen_is_function=function(n){return"function"==typeof o(n)},e.wbg.__wbindgen_string_new=function(n,e){return f(a(n,e))},e.wbg.__wbg_randomFillSync_6894564c2c334c42=function(){return d((function(n,e,t){var r,i;o(n).randomFillSync((r=e,i=t,b().subarray(r/1,r/1+i)))}),arguments)},e.wbg.__wbg_getRandomValues_805f1c3d65988a5a=function(){return d((function(n,e){o(n).getRandomValues(o(e))}),arguments)},e.wbg.__wbg_newnoargs_b5b063fc6c2f0376=function(n,e){return f(new Function(a(n,e)))},e.wbg.__wbg_call_97ae9d8645dc388b=function(){return d((function(n,e){return f(o(n).call(o(e)))}),arguments)},e.wbg.__wbindgen_object_clone_ref=function(n){return f(o(n))},e.wbg.__wbg_self_6d479506f72c6a71=function(){return d((function(){return f(self.self)}),arguments)},e.wbg.__wbg_window_f2557cc78490aceb=function(){return d((function(){return f(window.window)}),arguments)},e.wbg.__wbg_globalThis_7f206bda628d5286=function(){return d((function(){return f(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_ba75c50d1cf384f4=function(){return d((function(){return f(t.g.global)}),arguments)},e.wbg.__wbindgen_is_undefined=function(n){return void 0===o(n)},e.wbg.__wbg_call_168da88779e35f61=function(){return d((function(n,e,t){return f(o(n).call(o(e),o(t)))}),arguments)},e.wbg.__wbg_buffer_3f3d764d4747d564=function(n){return f(o(n).buffer)},e.wbg.__wbg_new_8c3f0052272a457a=function(n){return f(new Uint8Array(o(n)))},e.wbg.__wbg_set_83db9690f9353e79=function(n,e,t){o(n).set(o(e),t>>>0)},e.wbg.__wbg_length_9e1ae1900cb0fbd5=function(n){return o(n).length},e.wbg.__wbg_newwithlength_f5933855e4f48a19=function(n){return f(new Uint8Array(n>>>0))},e.wbg.__wbg_subarray_58ad4efbb5bcb886=function(n,e,t){return f(o(n).subarray(e>>>0,t>>>0))},e.wbg.__wbindgen_throw=function(n,e){throw new Error(a(n,e))},e.wbg.__wbindgen_memory=function(){return f(r.memory)},e}function m(n,e){return r=n.exports,h.__wbindgen_wasm_module=e,s=new Int32Array,c=new Uint8Array,g=new Uint8ClampedArray,r}function p(n){const e=y();return n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n)),m(new WebAssembly.Instance(n,e),n)}async function h(n){void 0===n&&(n=new URL(t(689),t.b));const e=y();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:r,module:i}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,e);return m(r,i)}const A=h},689:(n,e,t)=>{n.exports=t.p+"5819d3891a04d644bed2.wasm"}}]);