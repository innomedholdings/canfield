"use strict";(self.webpackChunkinnomed_canfield=self.webpackChunkinnomed_canfield||[]).push([[993],{2627:function(e,t,r){r.d(t,{xu:function(){return p},rj:function(){return y},Ug:function(){return _},Kq:function(){return N},xv:function(){return C},gC:function(){return w}});var n=r(7294),a=r(9276);function i(e){const t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function o(e,t){return Array.isArray(e)?e.map((e=>null===e?null:t(e))):i(e)?Object.keys(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{}):null!=e?t(e):null}var l=r(5336),c=r(4520);function s(e){const t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}var m=r(2494),d=r(8387);function u(e){return n.Children.toArray(e).filter((e=>(0,n.isValidElement)(e)))}(0,a.Gp)((function(e,t){const{ratio:r=4/3,children:i,className:c,...s}=e,m=n.Children.only(i),d=(0,l.cx)("chakra-aspect-ratio",c);return n.createElement(a.m$.div,{ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:o(r,(e=>1/e*100+"%"))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...s},m)})).displayName="AspectRatio",(0,a.Gp)((function(e,t){const r=(0,a.mq)("Badge",e),{className:i,...o}=(0,c.Lr)(e);return n.createElement(a.m$.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...o,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})})).displayName="Badge";var p=(0,a.m$)("div");p.displayName="Box";var f=(0,a.Gp)((function(e,t){const{size:r,centerContent:a=!0,...i}=e,o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return n.createElement(p,{ref:t,boxSize:r,__css:{...o,flexShrink:0,flexGrow:0},...i})}));f.displayName="Square",(0,a.Gp)((function(e,t){const{size:r,...a}=e;return n.createElement(f,{size:r,ref:t,borderRadius:"9999px",...a})})).displayName="Circle",(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}}).displayName="Center";var g={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)((function(e,t){const{axis:r="both",...i}=e;return n.createElement(a.m$.div,{ref:t,__css:g[r],...i,position:"absolute"})}));(0,a.Gp)((function(e,t){const r=(0,a.mq)("Code",e),{className:i,...o}=(0,c.Lr)(e);return n.createElement(a.m$.code,{ref:t,className:(0,l.cx)("chakra-code",e.className),...o,__css:{display:"inline-block",...r}})})).displayName="Code",(0,a.Gp)((function(e,t){const{className:r,centerContent:i,...o}=(0,c.Lr)(e),s=(0,a.mq)("Container",e);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-container",r),...o,__css:{...s,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})})).displayName="Container",(0,a.Gp)((function(e,t){const{borderLeftWidth:r,borderBottomWidth:i,borderTopWidth:o,borderRightWidth:s,borderWidth:m,borderStyle:d,borderColor:u,...p}=(0,a.mq)("Divider",e),{className:f,orientation:g="horizontal",__css:y,...h}=(0,c.Lr)(e),x={vertical:{borderLeftWidth:r||s||m||"1px",height:"100%"},horizontal:{borderBottomWidth:i||o||m||"1px",width:"100%"}};return n.createElement(a.m$.hr,{ref:t,"aria-orientation":g,...h,__css:{...p,border:"0",borderColor:u,borderStyle:d,...x[g],...y},className:(0,l.cx)("chakra-divider",f)})})).displayName="Divider",(0,a.Gp)((function(e,t){const{direction:r,align:i,justify:o,wrap:l,basis:c,grow:s,shrink:m,...d}=e,u={display:"flex",flexDirection:r,alignItems:i,justifyContent:o,flexWrap:l,flexBasis:c,flexGrow:s,flexShrink:m};return n.createElement(a.m$.div,{ref:t,__css:u,...d})})).displayName="Flex";var y=(0,a.Gp)((function(e,t){const{templateAreas:r,gap:i,rowGap:o,columnGap:l,column:c,row:s,autoFlow:m,autoRows:d,templateRows:u,autoColumns:p,templateColumns:f,...g}=e,y={display:"grid",gridTemplateAreas:r,gridGap:i,gridRowGap:o,gridColumnGap:l,gridAutoColumns:p,gridColumn:c,gridRow:s,gridAutoFlow:m,gridAutoRows:d,gridTemplateRows:u,gridTemplateColumns:f};return n.createElement(a.m$.div,{ref:t,__css:y,...g})}));function h(e){return o(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}y.displayName="Grid",(0,a.Gp)((function(e,t){const{area:r,colSpan:i,colStart:o,colEnd:l,rowEnd:c,rowSpan:m,rowStart:d,...u}=e,p=s({gridArea:r,gridColumn:h(i),gridRow:h(m),gridColumnStart:o,gridColumnEnd:l,gridRowStart:d,gridRowEnd:c});return n.createElement(a.m$.div,{ref:t,__css:p,...u})})).displayName="GridItem",(0,a.Gp)((function(e,t){const r=(0,a.mq)("Heading",e),{className:i,...o}=(0,c.Lr)(e);return n.createElement(a.m$.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...o,__css:r})})).displayName="Heading";(0,a.Gp)((function(e,t){const r=(0,a.mq)("Mark",e),i=(0,c.Lr)(e);return n.createElement(p,{ref:t,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})}));(0,a.Gp)((function(e,t){const r=(0,a.mq)("Kbd",e),{className:i,...o}=(0,c.Lr)(e);return n.createElement(a.m$.kbd,{ref:t,className:(0,l.cx)("chakra-kbd",i),...o,__css:{fontFamily:"mono",...r}})})).displayName="Kbd",(0,a.Gp)((function(e,t){const r=(0,a.mq)("Link",e),{className:i,isExternal:o,...s}=(0,c.Lr)(e);return n.createElement(a.m$.a,{target:o?"_blank":void 0,rel:o?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",i),...s,__css:r})})).displayName="Link";(0,a.Gp)((function(e,t){const{isExternal:r,target:i,rel:o,className:c,...s}=e;return n.createElement(a.m$.a,{...s,ref:t,className:(0,l.cx)("chakra-linkbox__overlay",c),rel:r?"noopener noreferrer":o,target:r?"_blank":i,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})})),(0,a.Gp)((function(e,t){const{className:r,...i}=e;return n.createElement(a.m$.div,{ref:t,position:"relative",...i,className:(0,l.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})}));var[x,v]=(0,d.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),b=(0,a.Gp)((function(e,t){const r=(0,a.jC)("List",e),{children:i,styleType:o="none",stylePosition:l,spacing:s,...m}=(0,c.Lr)(e),d=u(i),p=s?{"& > *:not(style) ~ *:not(style)":{mt:s}}:{};return n.createElement(x,{value:r},n.createElement(a.m$.ul,{ref:t,listStyleType:o,listStylePosition:l,role:"list",__css:{...r.container,...p},...m},d))}));b.displayName="List",(0,a.Gp)(((e,t)=>{const{as:r,...a}=e;return n.createElement(b,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})})).displayName="OrderedList",(0,a.Gp)((function(e,t){const{as:r,...a}=e;return n.createElement(b,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})})).displayName="UnorderedList",(0,a.Gp)((function(e,t){const r=v();return n.createElement(a.m$.li,{ref:t,...e,__css:r.item})})).displayName="ListItem",(0,a.Gp)((function(e,t){const r=v();return n.createElement(m.JO,{ref:t,role:"presentation",...e,__css:r.icon})})).displayName="ListIcon",(0,a.Gp)((function(e,t){const{columns:r,spacingX:i,spacingY:l,spacing:c,minChildWidth:s,...m}=e,d=(0,a.Fg)(),u=s?function(e,t){return o(e,(e=>{const r=(0,a.LP)("sizes",e,"number"==typeof(n=e)?`${n}px`:n)(t);var n;return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`}))}(s,d):o(r,(e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`));return n.createElement(y,{ref:t,gap:c,columnGap:i,rowGap:l,templateColumns:u,...m})})).displayName="SimpleGrid",(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var k="& > *:not(style) ~ *:not(style)";var E=e=>n.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});E.displayName="StackItem";var N=(0,a.Gp)(((e,t)=>{const{isInline:r,direction:i,align:c,justify:s,spacing:m="0.5rem",wrap:d,children:p,divider:f,className:g,shouldWrapChildren:y,...h}=e,x=r?"row":i??"column",v=(0,n.useMemo)((()=>function(e){const{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[k]:o(r,(e=>n[e]))}}({direction:x,spacing:m})),[x,m]),b=(0,n.useMemo)((()=>function(e){const{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":o(r,(e=>n[e]))}}({spacing:m,direction:x})),[m,x]),N=!!f,_=!y&&!N,w=(0,n.useMemo)((()=>{const e=u(p);return _?e:e.map(((t,r)=>{const a=void 0!==t.key?t.key:r,i=r+1===e.length,o=y?n.createElement(E,{key:a},t):t;if(!N)return o;const l=(0,n.cloneElement)(f,{__css:b}),c=i?null:l;return n.createElement(n.Fragment,{key:a},o,c)}))}),[f,b,N,_,y,p]),C=(0,l.cx)("chakra-stack",g);return n.createElement(a.m$.div,{ref:t,display:"flex",alignItems:c,justifyContent:s,flexDirection:v.flexDirection,flexWrap:d,className:C,__css:N?{}:{[k]:v[k]},...h},w)}));N.displayName="Stack";var _=(0,a.Gp)(((e,t)=>n.createElement(N,{align:"center",...e,direction:"row",ref:t})));_.displayName="HStack";var w=(0,a.Gp)(((e,t)=>n.createElement(N,{align:"center",...e,direction:"column",ref:t})));w.displayName="VStack";var C=(0,a.Gp)((function(e,t){const r=(0,a.mq)("Text",e),{className:i,align:o,decoration:m,casing:d,...u}=(0,c.Lr)(e),p=s({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.createElement(a.m$.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...p,...u,__css:r})}));function S(e){return"number"==typeof e?`${e}px`:e}C.displayName="Text",(0,a.Gp)((function(e,t){const{spacing:r="0.5rem",spacingX:i,spacingY:s,children:m,justify:d,direction:u,align:p,className:f,shouldWrapChildren:g,...y}=e,h=(0,n.useMemo)((()=>{const{spacingX:e=r,spacingY:t=r}={spacingX:i,spacingY:s};return{"--chakra-wrap-x-spacing":t=>o(e,(e=>S((0,c.fr)("space",e)(t)))),"--chakra-wrap-y-spacing":e=>o(t,(t=>S((0,c.fr)("space",t)(e)))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:d,alignItems:p,flexDirection:u,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[r,i,s,d,p,u]),x=(0,n.useMemo)((()=>g?n.Children.map(m,((e,t)=>n.createElement(G,{key:t},e))):m),[m,g]);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-wrap",f),overflow:"hidden",...y},n.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:h},x))})).displayName="Wrap";var G=(0,a.Gp)((function(e,t){const{className:r,...i}=e;return n.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,l.cx)("chakra-wrap__listitem",r),...i})}));G.displayName="WrapItem"},3667:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(2627),a=r(7294),i=r(9276),o=r(4040);function l(e,t=[]){const r=Object.assign({},e);for(const n of t)n in r&&delete r[n];return r}var c=(0,i.Gp)((function(e,t){const{htmlWidth:r,htmlHeight:n,alt:i,...o}=e;return a.createElement("img",{width:r,height:n,ref:t,alt:i,...o})}));c.displayName="NativeImage";var s=(0,i.Gp)((function(e,t){const{fallbackSrc:r,fallback:n,src:s,srcSet:m,align:d,fit:u,loading:p,ignoreFallback:f,crossOrigin:g,fallbackStrategy:y="beforeLoadOrError",referrerPolicy:h,...x}=e,v=null!=p||f||!(void 0!==r||void 0!==n),b=function(e){const{loading:t,src:r,srcSet:n,onLoad:i,onError:l,crossOrigin:c,sizes:s,ignoreFallback:m}=e,[d,u]=(0,a.useState)("pending");(0,a.useEffect)((()=>{u(r?"loading":"pending")}),[r]);const p=(0,a.useRef)(),f=(0,a.useCallback)((()=>{if(!r)return;g();const e=new Image;e.src=r,c&&(e.crossOrigin=c),n&&(e.srcset=n),s&&(e.sizes=s),t&&(e.loading=t),e.onload=e=>{g(),u("loaded"),null==i||i(e)},e.onerror=e=>{g(),u("failed"),null==l||l(e)},p.current=e}),[r,c,n,s,i,l,t]),g=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,o.G)((()=>{if(!m)return"loading"===d&&f(),()=>{g()}}),[d,f,m]),m?"loaded":d}({...e,ignoreFallback:v}),k=((e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t)(b,y),E={ref:t,objectFit:u,objectPosition:d,...v?x:l(x,["onError","onLoad"])};return k?n||a.createElement(i.m$.img,{as:c,className:"chakra-image__placeholder",src:r,...E}):a.createElement(i.m$.img,{as:c,src:s,srcSet:m,crossOrigin:g,loading:p,referrerPolicy:h,className:"chakra-image",...E})}));s.displayName="Image";(0,i.Gp)(((e,t)=>a.createElement(i.m$.img,{ref:t,as:c,className:"chakra-image",...e})));var m=r(1883),d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=a.createContext&&a.createContext(d),p=function(){return p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function g(e){return e&&e.map((function(e,t){return a.createElement(e.tag,p({key:t},e.attr),g(e.child))}))}function y(e){return function(t){return a.createElement(h,p({attr:p({},e.attr)},t),g(e.child))}}function h(e){var t=function(t){var r,n=e.attr,i=e.size,o=e.title,l=f(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:p(p({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==u?a.createElement(u.Consumer,null,(function(e){return t(e)})):t(d)}function x(e){return y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function v(e){let{children:t}=e;return a.createElement(n.xu,null,a.createElement(n.Ug,{bgColor:"gray.800"},a.createElement(n.xu,{m:"3",fontSize:"2xl",color:"red.400"},a.createElement(m.Link,{to:"/"},a.createElement(s,{src:"https://www.canfieldsci.com/common/images/graphics/logo-canfield-site.png"})))),a.createElement(n.xu,null,t),a.createElement(n.gC,{p:3,minH:20,bgColor:"gray.900",bgGradient:"linear(to-t, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.5))",justifyContent:"center",color:"gray.300"},a.createElement(n.xv,null,"(주)이노메드홀딩스"),a.createElement(n.xv,null,"(04322) 서울특별시 용산구 한강대로 257, 2층(갈월동, 청룡빌딩)"),a.createElement(n.xu,{mt:3},a.createElement(n.xv,null,"제품문의 : 02-715-7166 "),a.createElement(n.Ug,null,a.createElement(x,null)," ",a.createElement(n.xv,null,"david@innomed.co.kr")))))}}}]);
//# sourceMappingURL=065a369f4f1e9b0044145ff6a0c0dcef8c3e0aec-3829d62e7a88ed72842d.js.map