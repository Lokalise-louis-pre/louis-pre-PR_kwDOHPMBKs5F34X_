"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[693],{"./src/components/Textarea/Textarea.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories,defaultStory:()=>defaultStory,rows:()=>rows,withError:()=>withError});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),useErrorId=__webpack_require__("./src/utils/hooks/useErrorId.ts"),InputErrorMessage=__webpack_require__("./src/components/InputErrorMessage/InputErrorMessage.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),inputStyle=__webpack_require__("./src/utils/styles/inputStyle.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts");const Textarea=styled_components_browser_esm.ZP.textarea`
    ${inputStyle.gf};
    padding: ${(0,spacing.W)(3)};
    max-width: 100%;
`,Container=styled_components_browser_esm.ZP.div`
    width: 100%;
    display: grid;
    gap: ${(0,spacing.W)(1)};
    grid-template-columns: minmax(50px, 1fr); /* This ensures Textarea doesn't overflow 100% */
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea_Textarea=_ref=>{let{error,rows=3,...props}=_ref;const errorId=(0,useErrorId.P)();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Textarea,{...props,rows,error:!!error,"aria-invalid":!!error,"aria-errormessage":errorId}),!!error&&"boolean"!=typeof error&&(0,jsx_runtime.jsx)(InputErrorMessage.f,{id:errorId,children:error})]})};Textarea_Textarea.displayName="Textarea";try{Textarea_Textarea.displayName="Textarea",Textarea_Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{error:{defaultValue:null,description:"Renders a form validation `InputErrorMessage` when passed as `string | string[]`, or just applies error styling when `true`.",name:"error",required:!1,type:{name:"string | boolean | string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea_Textarea.__docgenInfo,name:"Textarea",path:"src/components/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(Textarea_Textarea,_extends({onChange:e=>{updateArgs({value:e.target.value})}},args,{mdxType:"Textarea"}))};Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Forms/Textarea",component:Textarea_Textarea,parameters:{controls:{sort:"requiredFirst"}},argTypes:{value:{control:{type:"text"}},error:{control:{type:"text"}}},mdxType:"Meta"}),(0,esm.kt)("h1",{id:"textarea"},"Textarea"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Textarea designed for longer and larger text input that may span multiple lines."),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Textarea } from '@lokalise/louis';\n\nexport default () => {\n    const [value, setValue] = useState();\n    return <Textarea value={value} onChange={(e) => setValue(e.target.value)} />;\n};\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4029%3A21039",target:"_blank"},"Figma Source File | Textarea"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Textarea_Textarea,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",{id:"rows"},"Rows"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Default",mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Rows",args:{rows:10},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"with-error"},"With Error"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"With Error",args:{error:"Please enter a valid input"},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handleChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  return <Textarea onChange={handleChange} {...args} />;\n}"}};const rows=Template.bind({});rows.storyName="Rows",rows.args={rows:10},rows.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handleChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  return <Textarea onChange={handleChange} {...args} />;\n}"}};const withError=Template.bind({});withError.storyName="With Error",withError.args={error:"Please enter a valid input"},withError.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handleChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n  return <Textarea onChange={handleChange} {...args} />;\n}"}};const componentMeta={title:"Components/Forms/Textarea",parameters:{controls:{sort:"requiredFirst"}},component:Textarea_Textarea,argTypes:{value:{control:{type:"text"}},error:{control:{type:"text"}}},includeStories:["defaultStory","rows","withError"]},mdxStoryNameToKey={Default:"defaultStory",Rows:"rows","With Error":"withError"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Textarea_stories=componentMeta,__namedExportsOrder=["Template","defaultStory","rows","withError"]},"./src/components/InputErrorMessage/InputErrorMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>InputErrorMessage});var react=__webpack_require__("./node_modules/react/index.js"),BoxImportant=__webpack_require__("./src/foundations/icons/BoxImportant.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts");const Error=styled_components_browser_esm.ZP.div`
    font-family: ${(0,fontFamily.I)("default")};
    ${(0,typography.c)("message")}

    color: ${(0,color.$)("red.600")};
    display: grid;
    gap: ${(0,spacing.W)(1)};
    grid-template-columns: min-content auto;
    align-items: center;
`,IconContainer=styled_components_browser_esm.ZP.div`
    align-self: flex-start;
    font-size: 16px;
    display: flex;
    align-items: center;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const uniqueChildren=children=>Array.from(new Set(react.Children.toArray(children))),InputErrorMessage=_ref=>{let{children,id,className}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:uniqueChildren(children).map((child=>!!child&&(0,jsx_runtime.jsxs)(Error,{"aria-live":"assertive",id,className,children:[(0,jsx_runtime.jsx)(IconContainer,{children:(0,jsx_runtime.jsx)(BoxImportant.m,{color:"red.400"})}),child]},`${child}`)))})};try{InputErrorMessage.displayName="InputErrorMessage",InputErrorMessage.__docgenInfo={description:"",displayName:"InputErrorMessage",props:{children:{defaultValue:null,description:"Renders text content in the error message.",name:"children",required:!0,type:{name:"Messages"}},id:{defaultValue:null,description:"Sets a unique id for the error message.",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"]={docgenInfo:InputErrorMessage.__docgenInfo,name:"InputErrorMessage",path:"src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/BoxImportant.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>BoxImportant});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BoxImportant=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{fillRule:"evenodd",clipRule:"evenodd",d:"M2 10c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8Zm7.20371 4.0062h1.59999v-1.6H9.20371v1.6Zm0-3.1999h1.59999V6.00627H9.20371v4.80003Z"})})};BoxImportant.displayName="BoxImportant";try{BoxImportant.displayName="BoxImportant",BoxImportant.__docgenInfo={description:"",displayName:"BoxImportant",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/BoxImportant.tsx#BoxImportant"]={docgenInfo:BoxImportant.__docgenInfo,name:"BoxImportant",path:"src/foundations/icons/BoxImportant.tsx#BoxImportant"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgIcon=_ref=>{let{color="inherit",size="inherit",ariaLabel,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.uJ,{color,size,...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children})};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"background.input"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>SvgIconG,Lq:()=>SvgIconRect,VA:()=>SvgIconClipPath,o3:()=>SvgIconPath,uJ:()=>SvgRoot,x:()=>SvgIconDefs});var _utils_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/excludeProps.ts");const reservedKeywords=["currentColor","inherit"],colorTypesDefaults={color:"inherit",fill:"currentColor",stroke:void 0},colorHelper=(colorType,inputColor,props)=>inputColor&&!reservedKeywords.includes(inputColor)?(0,_utils_theme__WEBPACK_IMPORTED_MODULE_0__.$)(inputColor)(props):colorTypesDefaults[colorType],commonStyles=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.iv`
    pointer-events: all;
    box-sizing: border-box;
    color: ${_ref=>{let{color:svgColor,...props}=_ref;return colorHelper("color",svgColor,props)}};
    fill: ${_ref2=>{let{fill,...props}=_ref2;return colorHelper("fill",fill,props)}};
    stroke: ${_ref3=>{let{stroke,...props}=_ref3;return colorHelper("stroke",stroke,props)}};
    font-size: ${props=>props.size};
`,commonExcludedProps=["fill","color","stroke"],SvgRoot=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.svg.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
    width: 1em;
    height: 1em;
`,SvgIconPath=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.path.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
`,SvgIconRect=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.rect.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
`,SvgIconG=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.g.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
`,SvgIconDefs=(_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.circle.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
`,_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.linearGradient.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
`,_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.defs.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
`),SvgIconClipPath=(_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.stop.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
`,_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.clipPath.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)})`
    ${commonStyles};
`)},"./src/utils/hooks/useErrorId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>useErrorId});var react_uid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-uid/dist/es2015/hooks.js");const useErrorId=()=>(0,react_uid__WEBPACK_IMPORTED_MODULE_0__.H)()("error-id")},"./src/utils/styles/inputStyle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NH:()=>withInputContainerStyle,RP:()=>withInputSizeVariants,WC:()=>inputHeight,dC:()=>smallInputHeight,gf:()=>withInputStyle,hJ:()=>withInputDisabledStyle,jR:()=>withInputFieldStyle});var _styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/color.ts"),_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/modifier.ts"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/typography.ts"),_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/radius.ts"),_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/theme/spacing.ts"),_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/theme/fontFamily.ts"),_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/theme/variants.ts");const withInputErrorStyle=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    border-color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("red.600")};
`,withInputErrorModifier=(0,_theme__WEBPACK_IMPORTED_MODULE_2__.c)("error",withInputErrorStyle),withInputDisabledStyle=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("content.disabled")};
    background-color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("surface.secondary")};
    border-color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("border.primary")};

    &:hover,
    [data-dev-state='hover'] & {
        border-color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("border.primary")};
    }

    &:focus,
    [data-dev-state='focus'] & {
        border-color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("border.primary")};
    }

    &::placeholder {
        color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("content.disabled")};
    }
`,withInputDisabledModifier=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${(0,_theme__WEBPACK_IMPORTED_MODULE_2__.c)("disabled",withInputDisabledStyle)}

    &:disabled {
        ${withInputDisabledStyle}
    }
`,withInputContainerStyle=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    box-sizing: border-box;

    ${(0,_theme__WEBPACK_IMPORTED_MODULE_3__.c)("description")};

    width: 100%;
    color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("content.primary")};
    border: 1px solid ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("border.primary")};
    border-radius: ${(0,_theme__WEBPACK_IMPORTED_MODULE_4__.q)("md")};
    transition: border-color ease-in-out 0.15s;
    padding: ${(0,_theme__WEBPACK_IMPORTED_MODULE_5__.W)(2,3)};
    background-color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("background.input")};

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }

    &:hover,
    [data-dev-state='hover'] & {
        border-color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.300")};
    }

    &:focus-within,
    [data-dev-state='focus'] & {
        border-color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("primary.500")};
    }

    ${withInputErrorModifier}
    ${withInputDisabledModifier}
`,withInputFieldStyle=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    box-sizing: content-box;
    -webkit-font-smoothing: subpixel-antialiased;

    font-family: ${(0,_theme__WEBPACK_IMPORTED_MODULE_6__.I)("default")};
    ${(0,_theme__WEBPACK_IMPORTED_MODULE_3__.c)("description")};
    color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("content.primary")};
    background: none;

    &&&:focus,
    &&&:focus-visible,
    [data-dev-state='focus'] &&& {
        outline: none !important;
    }

    &::placeholder {
        ${(0,_theme__WEBPACK_IMPORTED_MODULE_3__.c)("description")};
        color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("content.secondary")};
    }

    ${withInputErrorModifier}
    ${withInputDisabledModifier}
`,withInputStyle=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${withInputContainerStyle};
    ${withInputFieldStyle};

    // Unfortunately, we need order of container -> input, but we need certain props from container
    // so we override those here. Currently I don't see way to combine those styles cleaner.
    box-sizing: border-box;
    background: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("background.input")};
`,inputHeight=35,smallInputHeight=30,inputElementHeight=inputHeight-2,smallInputElementHeight=smallInputHeight-2,withInputSizeVariants=(sizeStyles={small:_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
        height: ${smallInputElementHeight}px;
        min-height: ${smallInputElementHeight}px;
        line-height: ${smallInputElementHeight}px;
        ${(0,_theme__WEBPACK_IMPORTED_MODULE_3__.c)("caption1")};

        &::placeholder {
            ${(0,_theme__WEBPACK_IMPORTED_MODULE_3__.c)("caption1")}
        }

        &::-moz-placeholder {
            line-height: ${smallInputElementHeight}px;
        }
    `,default:_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
        height: ${inputElementHeight}px;
        min-height: ${inputElementHeight}px;
        line-height: ${inputElementHeight}px;

        &::-moz-placeholder {
            line-height: ${inputElementHeight}px;
        }
    `},(0,_theme__WEBPACK_IMPORTED_MODULE_7__.o)("inputSize",sizeStyles,"default"));var sizeStyles},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/excludeProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>excludeProps});const excludeProps=props=>(prop,defaultValidatorFn)=>!props.includes(prop)&&defaultValidatorFn(prop)},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/modifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>modifier});const modifier=(prop,trueCss)=>props=>("function"==typeof prop?prop(props):props[prop])?trueCss:void 0},"./src/utils/theme/radius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>radius});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const radius=radiusPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(radiusPath,theme.radii)))},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./src/utils/theme/variants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>variants});const variants=(prop,allVariants,fallback)=>props=>allVariants["function"==typeof prop?prop(props):props[prop]??fallback]},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useUID,H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-"+index:"val-"+item:map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},createSource=(generateUID(),function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:generateUID()}}),counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){return react.useState(function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(react.useContext(source)))},useUID=function(){return useUIDState()[0].uid},useUIDSeed=function(){return useUIDState()[0].gen}}}]);
//# sourceMappingURL=components-Textarea-Textarea-stories-mdx.2c69893b.iframe.bundle.js.map