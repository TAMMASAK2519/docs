"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[7482],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return o?a.createElement(f,r(r({ref:t},p),{},{components:o})):a.createElement(f,r({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3182:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const i={id:"faucet",title:"How to Use the Testnet Faucet",sidebar_label:"Get Testnet Tokens",description:"Using the Avail Testnet Faucet",keywords:["docs","avail","explorer","accounts","faucet","funding"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,s={unversionedId:"about/faucet",id:"about/faucet",title:"How to Use the Testnet Faucet",description:"Using the Avail Testnet Faucet",source:"@site/docs/about/faucet.md",sourceDirName:"about",slug:"/about/faucet",permalink:"/about/faucet",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/about/faucet.md",tags:[],version:"current",lastUpdatedBy:"Dan Mills",lastUpdatedAt:1704316032,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{id:"faucet",title:"How to Use the Testnet Faucet",sidebar_label:"Get Testnet Tokens",description:"Using the Avail Testnet Faucet",keywords:["docs","avail","explorer","accounts","faucet","funding"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Use the Explorer",permalink:"/about/explorer"},next:{title:"Set Your Identity",permalink:"/about/identity"}},l={},c=[{value:"Account Verification Process",id:"account-verification-process",level:2},{value:"Obtaining Test AVL Tokens from Discord",id:"obtaining-test-avl-tokens-from-discord",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An automated faucet on Discord has been configured to distribute Avail tokens (AVL) for the Goldberg testnet."),(0,n.kt)("admonition",{title:"Please note",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The verification step is ",(0,n.kt)("strong",{parentName:"li"},"mandatory for all users.")),(0,n.kt)("li",{parentName:"ul"},"The faucet is designed to distribute small amounts of AVL for testing purposes, not large quantities for validator bonding or similar activities."),(0,n.kt)("li",{parentName:"ul"},"We appreciate that the verification process may be inconvenient for some users. However, it is necessary to prevent spam and ensure a fair distribution of test tokens. As time goes we will be looking into ways to make the process easier."))),(0,n.kt)("h2",{id:"account-verification-process"},"Account Verification Process"),(0,n.kt)("p",null,"To prevent spam and ensure a fair distribution of test tokens, Avail has introduced a mandatory verification process based on ",(0,n.kt)("a",{parentName:"p",href:"https://passport-verifier.avail.tools/"},(0,n.kt)("ins",null,"Gitcoin Passport")),". This process links your wallet address to your Discord account. If you are not already a member of the Avail community, please join the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/y6fHnxZQX8"},(0,n.kt)("ins",null,"Avail Discord server"))," first."),(0,n.kt)("admonition",{title:"Please note",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Gitcoin only supports the validation of EVM based addresses. You can still use your substrate based address to receive tokens from the faucet once you have completed the verification process.")),(0,n.kt)("p",null,"Follow these steps to complete the verification:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("a",{parentName:"p",href:"https://passport-verifier.avail.tools/"},(0,n.kt)("ins",null,"Avail Faucet Verification page")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click on the "Connect Wallet" button in the center of the page. You can choose from several wallet providers. For this demonstration, we will be using ',(0,n.kt)("a",{parentName:"p",href:"https://www.subwallet.app/"},(0,n.kt)("ins",null,"SubWallet")),"."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/1.png",alt:"Connect Wallet",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A window will appear listing various wallet options. When prompted, verify and approve the connection request."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/2.png",alt:"Wallet Options",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure you don't have any pending connections, or else you won't be able to connect your wallet address.\nIf the connection is successful, you will be able to see your linked account on the top right-hand corner of the page."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/4.png",alt:"Connected Wallet",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'You will then need to connect your Discord account. Click on "Connect Discord" and authorize the requested permissions.Review the message prompt and click "Authorize". Your page should now look something like this:'),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/5.png",alt:"Discord connected",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click on "Submit Gitcoin Passport" to complete the verification process.'),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/5b.png",alt:"Gitcoin passport submitted successfully",width:"95%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Please note that you need a score of at least "20" to be verified. If your score is below 20, your screen will look something like this (however, see note below):'),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/5c.png",alt:"Gitcoin passport submission failed ",width:"85%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can work on your Gitcoin score from ",(0,n.kt)("a",{parentName:"p",href:"https://passport.gitcoin.co/#/dashboard"},"their dashboard"),". You can also check out ",(0,n.kt)("a",{parentName:"p",href:"https://docs.passport.gitcoin.co/"},"Gitcoin docs")," for more information.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Finally, click on the "Give role" button. This will give your linked Discord ID a role named ',(0,n.kt)("inlineCode",{parentName:"p"},"verified-faucet")," that will allow you to use the faucet."))),(0,n.kt)("p",null,"Ensure that your Discord account is connected as it will be used in the following steps. You will also be able to see your connected Discord account that is verified on the top right-hand corner of the page."),(0,n.kt)("p",null,"Note: We have received reports from users with more than 20 points that are still getting the error page on the verifier. In that case, please refresh your stamps at the bottom of the Passport page, reload the page, reload the verifier site and wait a bit. We are looking into the problem, thank you!"),(0,n.kt)("h2",{id:"obtaining-test-avl-tokens-from-discord"},"Obtaining Test AVL Tokens from Discord"),(0,n.kt)("admonition",{title:"Please note",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"/deposit")," command has a cooldown period. You can use it only once every 3 hours."))),(0,n.kt)("p",null,"After completing the account verification process, you can obtain test AVL tokens:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Avail Discord, navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"#goldberg-faucet")," channel.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the command ",(0,n.kt)("inlineCode",{parentName:"p"},"/deposit <your-address>")," to request AVL tokens."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/6.png",alt:"Verification Confirmation",width:"100%"})),(0,n.kt)("p",{parentName:"li"},"Should you attempt to use the faucet with an unverified Discord account or a different address, you will encounter the following message."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/9.png",alt:"Verification Confirmation",width:"100%"})),(0,n.kt)("p",{parentName:"li"},"Your wallet will receive 5 AVL tokens once the transaction status is marked as ",(0,n.kt)("inlineCode",{parentName:"p"},"Complete"),". You can request AVL tokens every 3 hours."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/faucet/8.png",alt:"Transaction Complete",width:"50%"})))),(0,n.kt)("p",null,"If you encounter any issues, please feel free to reach out to the Avail team and greater community on Discord."))}d.isMDXComponent=!0}}]);