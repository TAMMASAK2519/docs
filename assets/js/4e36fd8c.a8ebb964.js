"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));n(4996);const o={id:"full-node-binaries",title:"How to Run a Full Node using Binaries",sidebar_label:"Run a Full Node using Binaries",sidebar_position:1,description:"Learn how to run an Avail full node using binaries.",keywords:["docs","avail","node","full node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png"},i=void 0,l={unversionedId:"node/full-node/full-node-binaries",id:"node/full-node/full-node-binaries",title:"How to Run a Full Node using Binaries",description:"Learn how to run an Avail full node using binaries.",source:"@site/docs/node/full-node/full-node-binaries.md",sourceDirName:"node/full-node",slug:"/node/full-node/full-node-binaries",permalink:"/node/full-node/full-node-binaries",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/node/full-node/full-node-binaries.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1693499846,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:1,frontMatter:{id:"full-node-binaries",title:"How to Run a Full Node using Binaries",sidebar_label:"Run a Full Node using Binaries",sidebar_position:1,description:"Learn how to run an Avail full node using binaries.",keywords:["docs","avail","node","full node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png"},sidebar:"nodeSidebar",previous:{title:"Types of Nodes",permalink:"/node/node-types"},next:{title:"Run a Full Node Using Docker",permalink:"/node/full-node/full-node-docker"}},s={},d=[{value:"Before you Start",id:"before-you-start",level:2},{value:"Quick Full Node Setup",id:"quick-full-node-setup",level:2},{value:"Building From Source",id:"building-from-source",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"before-you-start"},"Before you Start"),(0,r.kt)("p",null,"The instructions below assume a Linux distribution with ",(0,r.kt)("inlineCode",{parentName:"p"},"apt")," (Debian,\nfor example), but you may be able to adapt them to a different\ndistribution. It's also common for users to run nodes on a cloud\nserver. The following list of standard hardware is a recommendation of\nhardware specs that your environment should have:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,r.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4GB RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"8GB RAM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2 core CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"4 core CPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20-40 GB SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"200-300 GB SSD")))),(0,r.kt)("admonition",{title:"Alternate networks & releases",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All instructions below are for the ",(0,r.kt)("strong",{parentName:"p"},"Kate testnet")," network. To join a\ndifferent network, you may need to download a different node version\nfrom the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail/releases"},"node releases\npage")," and a chain\nspecification file for the specific network. Contact the Avail team if\nyou have questions.")),(0,r.kt)("h2",{id:"quick-full-node-setup"},"Quick Full Node Setup"),(0,r.kt)("p",null,"This is the easiest way to get started."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the node binary and chain specification file for the\nnetwork you want to join:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Node Binary"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain Specification File"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain Info Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kate Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/releases/tag/v1.6.2-rc1"},"v1.6.2-rc1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/configs/kate/chainspec.raw.json"},"chainspec.raw.json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/configs/kate/chaininfo.txt"},"Chain Info")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unpack both files into a folder, and run the node from that folder (adjust for\nplatform or version in the downloaded binary name):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./data-avail --port 30333 --base-path `pwd`/data --chain `pwd`/chainspec.raw.json\n")),(0,r.kt)("p",{parentName:"li"},"The node should output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'2023-06-03 20:36:29 Avail Node\n2023-06-03 20:36:29 \u270c\ufe0f  version 1.6.0-99b85257d6b\n2023-06-03 20:36:29 \u2764\ufe0f  by Anonymous, 2017-2023\n2023-06-03 20:36:29 \ud83d\udccb Chain specification: Avail Kate Testnet\n2023-06-03 20:36:29 \ud83c\udff7  Node name: bewildered-distance-1229\n2023-06-03 20:36:29 \ud83d\udc64 Role: FULL\n2023-06-03 20:36:29 \ud83d\udcbe Database: RocksDb at /Users/thunder/code/avail/data/chains/Avail Testnet_6831251e-0222-11ee-a2c3-c90377335962/db/full\n2023-06-03 20:36:29 \u26d3  Native runtime: data-avail-9 (data-avail-0.tx1.au11)\n2023-06-03 20:36:35 \ud83d\udc76 Creating empty BABE epoch changes on what appears to be first startup.\n2023-06-03 20:36:35 \ud83c\udff7  Local node identity is: 12D3KooWPt7odw3aeq7azZDugXjNuUvQNPU58n1VRBzY1YBqsjkr\n2023-06-03 20:36:35 Prometheus metrics extended with avail metrics\n2023-06-03 20:36:35 \ud83d\udcbb Operating system: macos\n2023-06-03 20:36:35 \ud83d\udcbb CPU architecture: aarch64\n2023-06-03 20:36:35 \ud83d\udce6 Highest known block at #0\n2023-06-03 20:36:35 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2023-06-03 20:36:35 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]\n2023-06-03 20:36:35 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]\n2023-06-03 20:36:35 \ud83c\udfc1 CPU score: 724.71 MiBs\n2023-06-03 20:36:35 \ud83c\udfc1 Memory score: 41.49 GiBs\n2023-06-03 20:36:35 \ud83c\udfc1 Disk score (seq. writes): 1.91 GiBs\n2023-06-03 20:36:35 \ud83c\udfc1 Disk score (rand. writes): 454.66 MiBs\n')),(0,r.kt)("p",{parentName:"li"},"It will also be listed on the ",(0,r.kt)("a",{parentName:"p",href:"http://telemetry.avail.tools/"},"Avail\nTelemetry"),' site under the "Node\nname" that appears in the node command output. Note that there are\nnetwork tabs at the top, select the one for the network you joined.'))),(0,r.kt)("p",null,"That's all! You are now running an Avail full node \ud83c\udf89"),(0,r.kt)("h2",{id:"building-from-source"},"Building From Source"),(0,r.kt)("p",null,"We recommend the quick setup above, but if you prefer to build the\nnode from source (e.g. if you are developing a pallet or need a\nversion for which there aren't binaries available), then follow these\ninstructions to build it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install dependencies. You may need to adjust these for a different\nLinux distribution, or if you already have Rust installed. Note\nthat Avail currently requires a nightly Rust build:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo apt install make clang pkg-config libssl-dev build-essential\ncurl https://sh.rustup.rs -sSf | sh\nsource $HOME/.cargo/env\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\nrustc --version # verify rust is working, print the installed version\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select the appropriate node version From the table in the "Quick\nFull Node Setup" section above, and download the source. You may\nalso use ',(0,r.kt)("inlineCode",{parentName:"p"},"git"),", but be sure to download a specific release tag.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unpack the sources and build the binary with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cargo build --release -p data-avail\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Create a working directory and copy the binary into that directory,\nand follow the rest of the "Quick Full Node Setup" instructions to\ndownload the appropriate chain specification file and run the node.'))),(0,r.kt)("admonition",{title:"Run Avail Locally",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are working on the node itself, it can be useful to run a local dev node with temporary datastore:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./data-avail --dev --tmp\n"))))}c.isMDXComponent=!0}}]);