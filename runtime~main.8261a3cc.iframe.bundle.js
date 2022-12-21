(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({614:"components-Popover-Popover-stories-mdx",693:"components-Textarea-Textarea-stories-mdx",731:"components-Menu-Menu-stories-mdx",769:"foundations-designTokens-transitionTime-stories-mdx",818:"components-Skeleton-Skeleton-stories-mdx",911:"components-Input-Input-stories-mdx",995:"components-Radio-Radio-stories-mdx",1054:"components-Card-Card-stories-mdx",1237:"components-Portal-Portal-stories-mdx",1558:"foundations-designTokens-typography-stories-mdx",1882:"foundations-designTokens-zIndices-stories-mdx",1889:"foundations-themes-overview-stories-mdx",1893:"components-TopBanner-TopBanner-stories-mdx",2239:"components-Editable-Editable-stories-mdx",2548:"components-InputErrorMessage-InputErrorMessage-stories-mdx",2611:"components-Button-Button-stories-mdx",2667:"components-Select-Select-stories-mdx",3392:"overview-intro-stories-mdx",3507:"components-Spacer-Spacer-stories-mdx",3612:"components-Label-Label-stories-mdx",4403:"foundations-icons-icons-stories-mdx",4517:"components-ViewButtonGroup-ViewButtonGroup-stories-mdx",4811:"components-DateRangePicker-DateRangePicker-stories-mdx",4982:"components-Code-Code-stories-mdx",5071:"components-DatePicker-DatePicker-stories-mdx",5876:"components-ThemeProvider-ThemeProvider-stories-mdx",6025:"components-Checkbox-Checkbox-stories-mdx",6298:"components-Pagination-Pagination-stories-mdx",6513:"components-Table-Table-stories-mdx",6590:"overview-changelog-stories-mdx",6666:"components-Hint-Hint-stories-mdx",6675:"components-Flex-Flex-stories-mdx",6850:"foundations-designTokens-radius-stories-mdx",7097:"foundations-designTokens-space-stories-mdx",7497:"components-Stats-Stats-stories-mdx",7566:"components-IconButton-IconButton-stories-mdx",7568:"utils-theme-theme-stories-mdx",7828:"components-Loading-Loading-stories-mdx",8082:"components-Tag-Tag-stories-mdx",8143:"components-SearchInput-SearchInput-stories-mdx",8180:"components-Modal-Modal-stories-mdx",8576:"components-Toast-Toast-stories-mdx",8836:"components-Avatar-Avatar-stories-mdx",9010:"foundations-designTokens-color-colors-stories-mdx",9021:"components-Tabs-Tabs-stories-mdx",9062:"components-Toggle-Toggle-stories-mdx",9093:"components-Alert-Alert-stories-mdx",9306:"components-ProgressBar-ProgressBar-stories-mdx",9394:"components-Tooltip-Tooltip-stories-mdx",9691:"components-Link-Link-stories-mdx",9931:"components-StepWizard-StepWizard-stories-mdx"}[chunkId]||chunkId)+"."+{385:"87e042e2",614:"393761c5",693:"2c69893b",731:"a4b071e7",745:"d7cd1ad1",769:"405e3d3b",818:"aca3b1e4",897:"027b5891",911:"7c3664d6",995:"86aea5eb",1054:"3dcfbc7f",1214:"290f82c8",1237:"2add59e1",1558:"55f97382",1619:"958b6d1d",1882:"8c472d5c",1889:"2fb5926a",1893:"e75eb692",2239:"b35f3234",2548:"70efb480",2551:"351b848d",2567:"e032b66c",2611:"1c010317",2667:"aba7714b",2897:"9ca52565",3143:"4689e995",3150:"8eed02f7",3392:"7fcfcfd1",3507:"c20148cd",3612:"017a5834",3648:"56d214eb",3735:"0abf75d7",4403:"7cd22211",4517:"676ded72",4811:"54450c4f",4982:"1a74b6e3",5051:"35232e44",5071:"0685938f",5229:"bf3e072a",5764:"9742c0e0",5876:"20375d68",5935:"37239166",6025:"c5e3a6fa",6298:"bd9e0cef",6513:"5dc68656",6590:"24af555e",6666:"565ca9c9",6675:"0c885cdc",6701:"06d6c22c",6850:"98a2440e",6908:"3ad1e1d4",7097:"ff09c055",7497:"3dff0e1e",7566:"b32387bf",7568:"4c3f3a8f",7828:"c8a424dc",8082:"6c431fe8",8140:"44e4a26e",8143:"d23ea3b7",8180:"f743eac7",8576:"760d5388",8836:"0e32c4bb",9010:"ba059ffb",9021:"7bde93be",9062:"33a82fb7",9093:"0b2153fe",9306:"2bd36099",9394:"c976416f",9691:"c9f3a1a3",9807:"a40a601a",9931:"a459473b"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@lokalise/louis:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@lokalise/louis:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();