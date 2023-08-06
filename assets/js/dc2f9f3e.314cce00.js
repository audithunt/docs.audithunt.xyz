"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[570],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},i="How to prepare repository for Audit?",s={unversionedId:"How_to/how_to_prepare_repository",id:"How_to/how_to_prepare_repository",title:"How to prepare repository for Audit?",description:"1. Make Your Repository Public",source:"@site/docs/How_to/how_to_prepare_repository.md",sourceDirName:"How_to",slug:"/How_to/how_to_prepare_repository",permalink:"/How_to/how_to_prepare_repository",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Process of using the Platform",permalink:"/Introduction/process"},next:{title:"How to submit audit request?",permalink:"/How_to/how_to_submit_audit_request"}},l={},u=[{value:"1. Make Your Repository Public",id:"1-make-your-repository-public",level:2},{value:"2. Set Up the Audit Hunt Issue Template",id:"2-set-up-the-audit-hunt-issue-template",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-prepare-repository-for-audit"},"How to prepare repository for Audit?"),(0,n.kt)("h2",{id:"1-make-your-repository-public"},"1. Make Your Repository Public"),(0,n.kt)("p",null,"Audit Hunt relies on community-driven efforts, and auditors must be able to access and review your smart contract's source code."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to your GitHub repository."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Settings"),"."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Options")," tab, scroll down to the Danger Zone section."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Change visibility"),".\nChoose ",(0,n.kt)("strong",{parentName:"li"},"Public")," and follow the prompts to make your repository publicly accessible.")),(0,n.kt)("h2",{id:"2-set-up-the-audit-hunt-issue-template"},"2. Set Up the Audit Hunt Issue Template"),(0,n.kt)("p",null,"Using a standardized issue template ensures that all audit submissions are consistent, making it easier for you to review and address them. Audit Hunt provides a template to ensure this consistency."),(0,n.kt)("p",null,"How to Add the Template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/audithunt/Issue-Template/blob/main/.github/ISSUE_TEMPLATE/audit-hunt.md"},"Audit Hunt's issue template")," and click on the Raw button. Copy all the content."),(0,n.kt)("li",{parentName:"ul"},"Go to your GitHub repository and click on the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," tab."),(0,n.kt)("li",{parentName:"ul"},"In General tab find section ",(0,n.kt)("strong",{parentName:"li"},"Features")," and click on ",(0,n.kt)("strong",{parentName:"li"},"Issues"),"."),(0,n.kt)("li",{parentName:"ul"},"If not already activated, click on ",(0,n.kt)("strong",{parentName:"li"},"Set up templates"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add template")," and choose ",(0,n.kt)("strong",{parentName:"li"},"Custom template"),"."),(0,n.kt)("li",{parentName:"ul"},"Clicl ",(0,n.kt)("strong",{parentName:"li"},"Preview and edit"),"."),(0,n.kt)("li",{parentName:"ul"},"Paste the content you copied from the Audit Hunt issue template."),(0,n.kt)("li",{parentName:"ul"},'At this stage make sure to add "audithunt" label to your template.\nIt is important for your submissions to be recognized and indexed by the Audit Hunt platform, every audit issue must be tagged with the "audithunt" label.'),(0,n.kt)("li",{parentName:"ul"},"Ensure you name the template something recognizable, like Audit Hunt Submission."),(0,n.kt)("li",{parentName:"ul"},"And click ",(0,n.kt)("strong",{parentName:"li"},"Propose changes and commit these changes"))),(0,n.kt)("p",null,"By following the above steps, your repository will be primed and ready for a smooth auditing process on the Audit Hunt platform. Best of luck with your audit!"))}m.isMDXComponent=!0}}]);