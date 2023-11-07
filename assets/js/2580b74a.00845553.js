"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[6066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,g=s["".concat(c,".").concat(h)]||s[h]||d[h]||i;return n?l.createElement(g,r(r({ref:t},u),{},{components:n})):l.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));n(4996);const i={id:"light-client",title:"How to Run an Avail Light Client",sidebar_label:"Run a Light Client",description:"Learn how to run an Avail Light Client.",keywords:["docs","avail","node","light client","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,o={unversionedId:"operate/node/light-client",id:"operate/node/light-client",title:"How to Run an Avail Light Client",description:"Learn how to run an Avail Light Client.",source:"@site/docs/operate/node/0010-light-client.md",sourceDirName:"operate/node",slug:"/operate/node/light-client",permalink:"/operate/node/light-client",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/node/0010-light-client.md",tags:[],version:"current",lastUpdatedBy:"salmad3",lastUpdatedAt:1699369009,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:10,frontMatter:{id:"light-client",title:"How to Run an Avail Light Client",sidebar_label:"Run a Light Client",description:"Learn how to run an Avail Light Client.",keywords:["docs","avail","node","light client","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Get Testnet Tokens",permalink:"/about/faucet"},next:{title:"Operate a Node",permalink:"/category/operate-a-node"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Hardware Specifications",id:"hardware-specifications",level:3},{value:"Latest release",id:"latest-release",level:3},{value:"Run on an Existing Network",id:"run-on-an-existing-network",level:2},{value:"Run Locally",id:"run-locally",level:2},{value:"Build From Source",id:"build-from-source",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Run a Relay node",id:"run-a-relay-node",level:3},{value:"Run a Full Node",id:"run-a-full-node",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide outlines how to set up an Avail light client. You can either:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#run-the-avail-light-client-on-an-existing-network"},(0,a.kt)("ins",null,"Run the light client on an existing network"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#run-the-light-client-locally"},(0,a.kt)("ins",null,"Run the light client locally")))),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"hardware-specifications"},"Hardware Specifications"),(0,a.kt)("p",null,"The Avail light client is designed to run on resource-constrained and low powered devices. However, we recommend the following configuration to set up your Avail light client."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component"),(0,a.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,a.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"4GB"),(0,a.kt)("td",{parentName:"tr",align:null},"8GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU (amd64/x86 architecture)"),(0,a.kt)("td",{parentName:"tr",align:null},"2 core"),(0,a.kt)("td",{parentName:"tr",align:null},"4 core")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Storage (SSD)"),(0,a.kt)("td",{parentName:"tr",align:null},"20-40 GB"),(0,a.kt)("td",{parentName:"tr",align:null},"200-300 GB")))),(0,a.kt)("h3",{id:"latest-release"},"Latest release"),(0,a.kt)("p",null,"You can find the latest release binary in the ",(0,a.kt)("inlineCode",{parentName:"p"},"avail-light")," repository."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Repository"),(0,a.kt)("th",{parentName:"tr",align:null},"Latest Release"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail-light"},(0,a.kt)("ins",null,"avail-light"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail-light/releases/tag/v1.7.3"},(0,a.kt)("ins",null,"v1.7.3")))))),(0,a.kt)("h2",{id:"run-on-an-existing-network"},"Run on an Existing Network"),(0,a.kt)("p",null,"In this example, you will download the light client and connect to an existing public network."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the latest Avail light client ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail-light/releases/"},(0,a.kt)("ins",null,"release")),". The light client is available pre-built for different architectures.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you prefer building the light client yourself, see ",(0,a.kt)("a",{parentName:"p",href:"#build-the-avail-light-client-from-source"},(0,a.kt)("ins",null,"build the Avail light client from source")),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the light client with the following pre-defined configuration file:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./avail-light --network goldberg\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"If you want to supply your own ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail-light#configuration-reference"},(0,a.kt)("ins",null,"configuration file")),", use:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./avail-light --config config.yaml --network goldberg\n")),(0,a.kt)("p",null,"That's it \ud83c\udf89! You have successfully run the light client and connected to a public network. The light client should show output similar to the following:"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Sample output "),(0,a.kt)("p",null,"The client output should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'2023-06-04T02:56:31.871284Z  INFO avail_light::telemetry: Metrics server on http://0.0.0.0:9520/metrics\n2023-06-04T02:56:31.884271Z  INFO avail_light::http: RPC running on http://127.0.0.1:7000\n2023-06-04T02:56:31.884386Z  INFO avail_light::network: Local peer id: PeerId("12D3KooWQ77VEayXfSPWcj6ucAGcjZRTL8ANmtjsuULoyToGSBoo"). Public key: Ed25519(PublicKey(compressed): d44de4113b372855a655f1675325379705aa7a273698194e8e6814dab7791a).\n2023-06-04T02:56:31.884605Z  INFO Server::run{addr=127.0.0.1:7000}: warp::server: listening on http://127.0.0.1:7000\n2023-06-04T02:56:31.892181Z  INFO avail_light::network::event_loop: Local node is listening on "/ip4/127.0.0.1/udp/37000/quic-v1"\n2023-06-04T02:56:31.892487Z  INFO avail_light: Bootstraping the DHT with bootstrap nodes...\n2023-06-04T02:56:31.892487Z  INFO avail_light::network::event_loop: Local node is listening on "/ip4/192.168.1.146/udp/37000/quic-v1"\n2023-06-04T02:56:31.892540Z  INFO avail_light::network::event_loop: Local node is listening on "/ip4/127.0.0.1/tcp/37000"\n2023-06-04T02:56:31.892745Z  INFO avail_light::network::event_loop: Local node is listening on "/ip4/192.168.1.146/tcp/37000"\n2023-06-04T02:56:42.220179Z  INFO avail_light::rpc: Connection established to the node: wss://goldberg.avail.tools:443/ws <v1.6.0-99b85257d6b/data-avail/9>\n2023-06-04T02:56:42.444576Z  INFO avail_light::light_client: Starting light client...\n2023-06-04T02:56:43.453935Z  INFO avail_light::subscriptions: Received finalized block header header.number=2074\n2023-06-04T02:56:43.455236Z  INFO avail_light::light_client: Processing finalized block block_number=2074 block_delay=0\n2023-06-04T02:56:43.456055Z  INFO avail_light::light_client: Random cells generated: 4 block_number=2074 cells_requested=4\n2023-06-04T02:56:43.617885Z  INFO avail_light::light_client: Number of cells fetched from DHT: 0 block_number=2074 cells_from_dht=0\n2023-06-04T02:56:43.820098Z  INFO avail_light::light_client: Number of cells fetched from RPC: 4 block_number=2074 cells_from_rpc=4\n2023-06-04T02:56:43.889260Z  INFO avail_light::light_client: Completed 4 verification rounds in     433.968ms block_number=2074\n2023-06-04T02:56:43.889395Z  INFO avail_light::light_client: Confidence factor: 93.75 block_number=2074 confidence=93.75\n2023-06-04T02:56:43.889495Z  INFO avail_light::light_client: Partition cells received. Time elapsed:    0ns block_number=2074 partition_retrieve_time_elapsed=0.0 partition_cells_fetched=4\n2023-06-04T02:56:44.050133Z  INFO avail_light::light_client: DHT PUT operation success rate: inf block_number=2074\n2023-06-04T02:56:44.050211Z  INFO avail_light::light_client: 4 cells inserted into DHT. Time elapsed:   160.697ms block_number=2074 partition_dht_insert_time_elapsed=0.160697\n'))),(0,a.kt)("h2",{id:"run-locally"},"Run Locally"),(0,a.kt)("p",null,"If you want to connect the Avail light client to a local network, you will need to run your own Avail node and your own Avail light client bootstrap node."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the Avail ",(0,a.kt)("a",{parentName:"p",href:"/docs/operate/node/binaries"},(0,a.kt)("ins",null,"node")),". For local set-up, run the node in ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," mode:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./data-avail --dev\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run a ",(0,a.kt)("a",{parentName:"p",href:"/operate/node/bootstrap"},(0,a.kt)("ins",null,"bootstrap node")),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the bootstrap node is running, use the following command to run your client:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./avail-light --network local\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you want to supply your own ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail-light#configuration-reference"},(0,a.kt)("ins",null,"configuration file")),", use:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./avail-light --config config.yaml --network local\n")))),(0,a.kt)("h2",{id:"build-from-source"},"Build From Source"),(0,a.kt)("p",null,"You can build the light client directly from source."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/availproject/avail-light.git\ncd avail-light\ncargo build --release\n")),(0,a.kt)("p",null,"Find the resulting ",(0,a.kt)("inlineCode",{parentName:"p"},"avail-light")," binary in the ",(0,a.kt)("inlineCode",{parentName:"p"},"target/release")," directory."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("h3",{id:"run-a-relay-node"},"Run a Relay node"),(0,a.kt)("p",null,"We provide an Avail light client relay node that can help you with running your light client from behing NAT and firewalls. Find more information on running a relay node ",(0,a.kt)("a",{parentName:"p",href:"/operate/node/relay"},(0,a.kt)("ins",null,"here")),"."),(0,a.kt)("h3",{id:"run-a-full-node"},"Run a Full Node"),(0,a.kt)("p",null,"Consider running a full node by following the deployment guide ",(0,a.kt)("a",{parentName:"p",href:"/operate/node/binaries"},(0,a.kt)("ins",null,"here")),"."))}d.isMDXComponent=!0}}]);