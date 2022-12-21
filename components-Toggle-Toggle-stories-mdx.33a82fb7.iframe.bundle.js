"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9062],{"./src/components/Toggle/Toggle.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories,toggle:()=>toggle});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts");const ToggleLabel=styled_components_browser_esm.ZP.label`
    all: initial;
    cursor: pointer;
    font-family: ${(0,fontFamily.I)("default")};
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    border-radius: ${(0,radius.q)("md")};
    border: 1px solid ${(0,color.$)("border.secondary")};
    position: relative;
    user-select: none;
    overflow: hidden;
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    min-width: max-content;
`,ToggleHandle=styled_components_browser_esm.ZP.span`
    padding: ${(0,spacing.W)(1)};
    text-align: center;
    color: ${(0,color.$)("neutral1")};
    background-color: ${(0,color.$)("border.secondary")};

    ${(0,modifier.c)("highlighted",styled_components_browser_esm.iv`
            color: ${(0,color.$)("content.white")};
            background-color: ${(0,color.$)("primary.500")};
        `)}
`,ToggleInput=styled_components_browser_esm.ZP.input`
    // To fight specificity issues, we wrap this class with input.class-name selector
    // which makes it more specific than global bootstrap styles.
    input& {
        // Overrides for global css
        all: initial;
        position: absolute !important;
        margin: none;
        line-height: initial;

        border: none;
        clip: rect(0px, 0px, 0px, 0px);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0px;
        overflow: hidden;
        white-space: nowrap;
    }
`,ToggleMask=styled_components_browser_esm.ZP.span`
    width: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: ${(0,color.$)("background.primary")};
    transition: transform 0.05s ease-in;

    ${ToggleInput}[aria-checked="true"] ~ & {
        transform: translateX(100%);
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=_ref=>{let{className,...props}=_ref;const{checked,defaultChecked}=props;return(0,jsx_runtime.jsxs)(ToggleLabel,{className,children:[(0,jsx_runtime.jsx)(ToggleInput,{type:"checkbox",role:"switch","aria-checked":Boolean(checked)||Boolean(defaultChecked),...props}),(0,jsx_runtime.jsx)(ToggleHandle,{highlighted:!0,"aria-hidden":"true",children:"On"}),(0,jsx_runtime.jsx)(ToggleHandle,{"aria-hidden":"true",children:"Off"}),(0,jsx_runtime.jsx)(ToggleMask,{"aria-hidden":"true"})]})};Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}var hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(Toggle,_extends({},args,{onChange:e=>updateArgs({checked:e.target.checked}),mdxType:"Toggle"}))};Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Forms/Toggle",component:Toggle,parameters:{controls:{sort:"requiredFirst"}},argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},mdxType:"Meta"}),(0,esm.kt)("h1",{id:"toggle"},"Toggle"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Toggle allows users to turn an individual option on or off. Changing a toggle should take immediate effect and should not require the user to click Save or Submit to apply the new state."),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Toggle } from '@lokalise/louis';\n\nexport default () => {\n    const [checked, setChecked] = useState(false);\n    return <Toggle checked={checked} onChange={(e) => setChecked(e.target.checked)} />;\n};\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=11056%3A30188&t=r39e6HnjBbidt5cB-0",target:"_blank"},"Figma Source File | Toggle"))),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Toggle",mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const toggle=Template.bind({});toggle.storyName="Toggle",toggle.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  return <Toggle {...args} onChange={e => updateArgs({\n    checked: e.target.checked\n  })} />;\n}"}};const componentMeta={title:"Components/Forms/Toggle",parameters:{controls:{sort:"requiredFirst"}},component:Toggle,argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},includeStories:["toggle"]},mdxStoryNameToKey={Toggle:"toggle"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Toggle_stories=componentMeta,__namedExportsOrder=["Template","toggle"]},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/modifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>modifier});const modifier=(prop,trueCss)=>props=>("function"==typeof prop?prop(props):props[prop])?trueCss:void 0},"./src/utils/theme/radius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>radius});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const radius=radiusPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(radiusPath,theme.radii)))},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}}}]);
//# sourceMappingURL=components-Toggle-Toggle-stories-mdx.33a82fb7.iframe.bundle.js.map