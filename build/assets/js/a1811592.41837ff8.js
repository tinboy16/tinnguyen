"use strict";(self.webpackChunktinnguyen=self.webpackChunktinnguyen||[]).push([[7455],{6463:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>s,frontMatter:()=>h,metadata:()=>r,toc:()=>d});var c=e(4848),i=e(8453);const h={},a="Dictionary",r={id:"Python/Python c\u01a1 b\u1ea3n/dictionary",title:"Dictionary",description:"---",source:"@site/docs/Python/Python c\u01a1 b\u1ea3n/dictionary.md",sourceDirName:"Python/Python c\u01a1 b\u1ea3n",slug:"/Python/Python c\u01a1 b\u1ea3n/dictionary",permalink:"/docs/Python/Python c\u01a1 b\u1ea3n/dictionary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C\xe2u l\u1ec7nh \u0111i\u1ec1u ki\u1ec7n trong python",permalink:"/docs/Python/Python c\u01a1 b\u1ea3n/conditional"},next:{title:"L\xe0m vi\u1ec7c v\u1edbi File",permalink:"/docs/Python/Python c\u01a1 b\u1ea3n/file"}},o={},d=[{value:"C\xe1c thu\u1ed9c t\xednh c\u1ee7a key",id:"c\xe1c-thu\u1ed9c-t\xednh-c\u1ee7a-key",level:2},{value:"Truy c\u1eadp c\xe1c gi\xe1 tr\u1ecb trong Dictionary",id:"truy-c\u1eadp-c\xe1c-gi\xe1-tr\u1ecb-trong-dictionary",level:2},{value:"C\u1eadp nh\u1eadt Dictionary",id:"c\u1eadp-nh\u1eadt-dictionary",level:2},{value:"X\xf3a ph\u1ea7n t\u1eed Dictionary",id:"x\xf3a-ph\u1ea7n-t\u1eed-dictionary",level:2},{value:"C\xe1c h\xe0m h\u1ed7 tr\u1ee3 (xem th\xeam docs)",id:"c\xe1c-h\xe0m-h\u1ed7-tr\u1ee3-xem-th\xeam-docs",level:2},{value:"Ngu\u1ed3n",id:"ngu\u1ed3n",level:2}];function l(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.useMDXComponents)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"dictionary",children:"Dictionary"}),"\n",(0,c.jsx)(t.hr,{}),"\n",(0,c.jsxs)(t.p,{children:["Dictionary l\xe0 m\u1ed9t t\u1eadp h\u1ee3p c\xe1c c\u1eb7p key v\xe0 value kh\xf4ng c\xf3 th\u1ee9 t\u1ef1. N\xf3 l\xe0 m\u1ed9t container m\xe0 ch\u1ee9a d\u1eef li\u1ec7u, \u0111\u01b0\u1ee3c bao quanh b\u1edfi c\xe1c d\u1ea5u ngo\u1eb7c m\xf3c \u0111\u01a1n ",(0,c.jsx)(t.code,{children:"{}"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["M\u1ed7i c\u1eb7p ",(0,c.jsx)(t.code,{children:"key-value"})," \u0111\u01b0\u1ee3c xem nh\u01b0 l\xe0 m\u1ed9t item. Key m\xe0 \u0111\xe3 truy\u1ec1n cho item \u0111\xf3 ph\u1ea3i l\xe0 duy nh\u1ea5t, trong khi \u0111\xf3 value c\xf3 th\u1ec3 l\xe0 b\u1ea5t k\u1ef3 ki\u1ec3u gi\xe1 tr\u1ecb n\xe0o. ",(0,c.jsx)(t.code,{children:"Key"})," ph\u1ea3i l\xe0 m\u1ed9t ki\u1ec3u d\u1eef li\u1ec7u kh\xf4ng thay \u0111\u1ed5i ",(0,c.jsx)(t.code,{children:"(immutable)"})," nh\u01b0 chu\u1ed7i, s\u1ed1 ho\u1eb7c tuple."]}),"\n",(0,c.jsxs)(t.p,{children:["Key v\xe0 value \u0111\u01b0\u1ee3c ph\xe2n bi\u1ec7t ri\xeang r\u1ebd b\u1edfi m\u1ed9t d\u1ea5u hai ch\u1ea5m ",(0,c.jsx)(t.code,{children:"(:)"}),". C\xe1c item ph\xe2n bi\u1ec7t nhau b\u1edfi m\u1ed9t d\u1ea5u ph\u1ea3y ",(0,c.jsx)(t.code,{children:"(,)"}),"."]}),"\n",(0,c.jsx)(t.p,{children:"VD:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-python",children:"data={100:'Hoang', 101:'Nam', 102:'Binh'}\nprint data\n\n# KQ\n{100: 'Hoang', 101: 'Nam', 102: 'Binh'}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"c\xe1c-thu\u1ed9c-t\xednh-c\u1ee7a-key",children:"C\xe1c thu\u1ed9c t\xednh c\u1ee7a key"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"Key ph\u1ea3i l\xe0 duy nh\u1ea5t, n\u1ebfu key b\u1ecb l\u1eb7p k\u1ebft qu\u1ea3 g\xe1n cu\u1ed1i c\xf9ng s\u1ebd \u0111\u01b0\u1ee3c c\xf4ng nh\u1eadn"}),"\n",(0,c.jsxs)(t.li,{children:["Key ph\u1ea3i thu\u1ed9c d\u1ea1ng ",(0,c.jsx)(t.code,{children:"immutable"}),", nh\u01b0 list ho\u1eb7c s\u1ed1, tuple"]}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"truy-c\u1eadp-c\xe1c-gi\xe1-tr\u1ecb-trong-dictionary",children:"Truy c\u1eadp c\xe1c gi\xe1 tr\u1ecb trong Dictionary"}),"\n",(0,c.jsx)(t.p,{children:"Kh\xf4ng th\u1ec3 truy c\u1eadp b\u1eb1ng ch\u1ec9 m\u1ee5c trong Dictionary, c\xe1c gi\xe1 tr\u1ecb trong Dictionary c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c truy c\u1eadp th\xf4ng qua c\xe1c key."}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"C\xfa ph\xe1p:"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-python",children:"<ten_dictionary>[key]\n"})}),"\n",(0,c.jsx)(t.p,{children:"VD:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-python",children:"data1={'Id':100, 'Ten':'Thanh', 'Nghenghiep':'Developer'}\ndata2={'Id':101, 'Ten':'Chinh', 'Nghenghiep':'Trainer'}\nprint \"Id cua nhan vien dau tien la\",data1['Id']\nprint \"Id cua nhan vien thu hai la\",data2['Id']\nprint \"Ten cua nhan vien dau tien la:\",data1['Ten']\nprint \"Nghe nghiep cua nhan vien thu hai la:\",data2['Nghenghiep']\n"})}),"\n",(0,c.jsx)(t.h2,{id:"c\u1eadp-nh\u1eadt-dictionary",children:"C\u1eadp nh\u1eadt Dictionary"}),"\n",(0,c.jsx)(t.p,{children:"Item (c\u1eb7p key-value) c\xf3 th\u1ec3 c\u1eadp nh\u1eadt. Ki\u1ec3u cho ph\xe9p th\xeam m\u1ed9t entry m\u1edbi ho\u1eb7c m\u1ed9t c\u1eb7p key-value m\u1edbi, s\u1eeda \u0111\u1ed5i m\u1ed9t entry \u0111\xe3 t\u1ed3n t\u1ea1i."}),"\n",(0,c.jsx)(t.p,{children:"VD:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-python",children:"data1={'Id':100, 'Ten':'Thanh', 'Nghenghiep':'Developer'}\ndata2={'Id':101, 'Ten':'Chinh', 'Nghenghiep':'Trainer'}\ndata1['Nghenghiep']='Manager' # s\u1eeda\ndata2['Mucluong']=17000000    # Th\xeam m\u1edbi\ndata1['Mucluong']=12000000    # Them m\u1edbi\nprint data1\nprint data2\n"})}),"\n",(0,c.jsx)(t.h2,{id:"x\xf3a-ph\u1ea7n-t\u1eed-dictionary",children:"X\xf3a ph\u1ea7n t\u1eed Dictionary"}),"\n",(0,c.jsx)(t.p,{children:"Ki\u1ec3u cho ph\xe9p c\xf3 th\u1ec3 x\xf3a m\u1ed9t ph\u1ea7n t\u1eed \u0111\u01a1n ho\u1eb7c x\xf3a to\xe0n b\u1ed9 n\u1ed9i dung c\u1ee7a Dictionary. S\u1eed d\u1ee5ng l\u1ec7nh del \u0111\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c ho\u1ea1t \u0111\u1ed9ng n\xe0y."}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"C\xfa ph\xe1p"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-python",children:"# Xoa phan tu\ndel ten_dictionary[key]\n\n# Xoa toan bo\ndel ten_dictionary\n"})}),"\n",(0,c.jsx)(t.p,{children:"VD:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-python",children:"data={100:'Hoang', 101:'Thanh', 102:'Nam'}\ndel data[102]\nprint data\ndel data\n\n#KQ\n{100: 'Hoang', 101: 'Thanh'}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"c\xe1c-h\xe0m-h\u1ed7-tr\u1ee3-xem-th\xeam-docs",children:"C\xe1c h\xe0m h\u1ed7 tr\u1ee3 (xem th\xeam docs)"}),"\n",(0,c.jsx)(t.h2,{id:"ngu\u1ed3n",children:"Ngu\u1ed3n"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"http://vietjack.com/python/dictionary_trong_python.jsp",children:"http://vietjack.com/python/dictionary_trong_python.jsp"})})]})}function s(n={}){const{wrapper:t}={...(0,i.useMDXComponents)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.r(t),e.d(t,{MDXProvider:()=>r,useMDXComponents:()=>a});var c=e(6540);const i={},h=c.createContext(i);function a(n){const t=c.useContext(h);return c.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),c.createElement(h.Provider,{value:t},n.children)}}}]);