(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{2499:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/[walletAddress]/transactions/WalletDetails",function(){return i(8539)}])},8539:function(n,e,i){"use strict";i.r(e);var t=i(6042),r=i(9396),l=i(9534),a=i(828),o=i(5893),s=i(7294),d=i(5675),c=i.n(d),u=i(1163),h=i(6540),x=i(2871),p=i(5553),m=i(1132),j=i(1903),Z=i(8360),v=i(431),b=i(8409),f=i(44),y=i(7357),w=i(5861),W=i(6886),g=i(6242),S=i(4267),C=i(4386),I=i(3946),A=i(7918),k=i(6447),_=i(3321),P=i(5240),E=i(5820),L=i(8759),D=i(2734);function T(n){var e=n.children,i=n.value,a=n.index,s=(0,l.Z)(n,["children","value","index"]);return(0,o.jsx)("div",(0,r.Z)((0,t.Z)({role:"tabpanel",hidden:i!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},s),{children:i===a&&(0,o.jsx)(y.Z,{sx:{p:3},children:(0,o.jsx)(w.Z,{children:e})})}))}function B(n){return{id:"full-width-tab-".concat(n),"aria-controls":"full-width-tabpanel-".concat(n)}}var F=function(){var n,e=(0,u.useRouter)(),i=(null==e?void 0:e.query).walletAddress,r=(null==e?void 0:e.query).id,l=(0,h.K)(),d=l.account,F=l.library,M=(0,E.jt)([null==d?void 0:d.toString(),r&&+r,]),z=(0,x.M)(i),N=(0,a.Z)(s.useState(0),2),q=N[0],R=N[1],U=(0,D.Z)(),O=(0,a.Z)(s.useState(0),2);O[0],O[1];var X=function(n,e){R(e)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.Z,{variant:"h5",fontWeight:"bold",my:"24px",children:"Dashboard"}),(0,o.jsxs)(W.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,o.jsx)(W.ZP,{item:!0,xs:6,children:(0,o.jsx)(g.Z,{sx:L.W.cardContainer,children:(0,o.jsxs)(S.Z,{sx:L.W.cardContent,children:[(0,o.jsx)(c(),{src:"/asset/images/walletAvatar.png",width:"220",height:"220",alt:"",className:"rounded-full object-cover"}),(0,o.jsx)(w.Z,{variant:"body1",fontWeight:"bold",mt:1.5,gutterBottom:!0,children:M})," ",(0,o.jsxs)(w.Z,{variant:"body1",children:[(null==i?void 0:i.substring(0,35))+"...",(0,o.jsx)(C.Z,{title:"Copy to clipboard",placement:"top",children:(0,o.jsx)(I.Z,{size:"medium",sx:L.W.iconButton,onClick:function(){i&&navigator.clipboard.writeText(i)},children:(0,o.jsx)(m.Z,{})})}),(0,o.jsx)(C.Z,{title:"View on explore",placement:"top",children:(0,o.jsx)(I.Z,{size:"small",onClick:function(){var n;window.open("https://".concat(null==F?void 0:null===(n=F.network)||void 0===n?void 0:n.name,".etherscan.io/address/").concat(i),"_blank")}})})]}),(0,o.jsx)(A.Z,{label:null==F?void 0:null===(n=F.network)||void 0===n?void 0:n.name,sx:L.W.chip}),(0,o.jsx)(k.Z,{alignItems:"center",direction:"row",mt:1.5,children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(w.Z,{variant:"body1",color:"primary.main",fontSize:"14px",children:"Total Balance"}),(0,o.jsxs)(w.Z,{variant:"h6",color:"primary.main",children:[z?(0,p.formatEther)(z):0," FIL"]})]})})]})})}),(0,o.jsx)(W.ZP,{item:!0,xs:6,children:(0,o.jsx)(g.Z,{sx:L.W.cardContainer,children:(0,o.jsxs)(S.Z,{sx:L.W.cardContent,children:[(0,o.jsxs)(b.Z,{value:q,onChange:X,indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",centered:!0,children:[(0,o.jsx)(f.Z,(0,t.Z)({label:"Deposite"},B(0))),(0,o.jsx)(f.Z,(0,t.Z)({label:"Withdrow"},B(1)))]}),(0,o.jsx)(T,{value:q,index:0,dir:U.direction,children:(0,o.jsxs)("div",{children:["Deposit assets into your wallet.",(0,o.jsx)(w.Z,{variant:"body2",component:"p",my:1,children:"Select Asset"}),(0,o.jsxs)(Z.Z,{fullWidth:!0,variant:"outlined",labelId:"SelectAsset",id:"select",value:"FIL",children:[(0,o.jsx)(v.Z,{value:"FIL",children:"FIL"}),(0,o.jsx)(v.Z,{value:"USDT",children:"USDT"})]}),(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(w.Z,{variant:"body2",component:"p",my:1,children:"Amount"}),(0,o.jsx)(j.Z,{fullWidth:!0,variant:"outlined",type:"number",placeholder:"Enter an amount*",InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:0}},required:!0})]}),(0,o.jsxs)(k.Z,{alignItems:"center",direction:"row",mt:1.5,children:[(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(w.Z,{variant:"body1",color:"primary.main",fontSize:"14px",children:"Available  Balance"}),(0,o.jsxs)(w.Z,{variant:"h6",color:"primary.main",children:[z?(0,p.formatEther)(z):0," FIL"]})]}),(0,o.jsx)(y.Z,{ml:"auto",children:(0,o.jsx)(P.Z,{walletAddress:i,children:(0,o.jsx)(_.Z,{sx:L.W.transactionButton,children:"Deposit"})})})]})]})}),(0,o.jsx)(T,{value:q,index:1,dir:U.direction,children:(0,o.jsxs)("div",{children:["Withdrow from your wallet.",(0,o.jsx)(w.Z,{variant:"body2",component:"p",my:1,children:"Recipient *"}),(0,o.jsx)(j.Z,{fullWidth:!0,variant:"outlined",type:"text",placeholder:"Enter an recipient address*",InputLabelProps:{shrink:!0},required:!0}),(0,o.jsx)(w.Z,{variant:"body2",component:"p",my:1,children:"Select Asset"}),(0,o.jsxs)(Z.Z,{fullWidth:!0,variant:"outlined",labelId:"SelectAsset",id:"select",value:"usedapp",children:[(0,o.jsx)(v.Z,{value:"10",children:"FIL"}),(0,o.jsx)(v.Z,{value:"20",children:"USDT"})]}),(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(w.Z,{variant:"body2",component:"p",my:1,children:"Amount"}),(0,o.jsx)(j.Z,{fullWidth:!0,variant:"outlined",type:"number",placeholder:"Enter an amount*",InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:0}},required:!0})]}),(0,o.jsxs)(k.Z,{alignItems:"center",direction:"row",mt:1.5,children:[(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(w.Z,{variant:"body1",color:"primary.main",fontSize:"14px",children:"Available  Balance"}),(0,o.jsxs)(w.Z,{variant:"h6",color:"primary.main",children:[z?(0,p.formatEther)(z):0," FIL"]})]}),(0,o.jsx)(y.Z,{ml:"auto",children:(0,o.jsx)(P.Z,{walletAddress:i,children:(0,o.jsx)(_.Z,{sx:L.W.transactionButton,children:"Deposit"})})})]})]})})]})})})]})]})};e.default=F},8759:function(n,e,i){"use strict";i.d(e,{W:function(){return t}});var t={tabsContainer:{"& .MuiTabs-indicator":{backgroundColor:"primary.buttonColor"}},tab:{fontSize:"16px",fontWeight:"600","&.Mui-selected":{color:"primary.buttonColor"}},accordionContainer:{my:1.5,borderRadius:"4px !important","&::before":{height:0}},accordionSummary:{"&.MuiAccordionSummary-root.Mui-expanded":{minHeight:"50px"},"& > .MuiAccordionSummary-content.Mui-expanded":{m:"12px 0"}},confirmationText:{color:"primary.buttonColor",flexBasis:"20%",maxWidth:"20%",fontWeight:"600"}}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=2499)}),_N_E=n.O()}]);