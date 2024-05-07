"use strict";(self.webpackChunktinnguyen=self.webpackChunktinnguyen||[]).push([[7720],{6691:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>h,toc:()=>l});var o=e(4848),c=e(8453);const s={},r="Constructor v\xe0 destructor trong Python",h={id:"Python/Python c\u01a1 b\u1ea3n/py-oop-con-des",title:"Constructor v\xe0 destructor trong Python",description:"---",source:"@site/docs/Python/Python c\u01a1 b\u1ea3n/py-oop-con-des.md",sourceDirName:"Python/Python c\u01a1 b\u1ea3n",slug:"/Python/Python c\u01a1 b\u1ea3n/py-oop-con-des",permalink:"/docs/Python/Python c\u01a1 b\u1ea3n/py-oop-con-des",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Number",permalink:"/docs/Python/Python c\u01a1 b\u1ea3n/numbers"},next:{title:"Class v\xe0 c\xe1ch khai b\xe1o class trong Python",permalink:"/docs/Python/Python c\u01a1 b\u1ea3n/py-oop-overview"}},i={},l=[{value:"1. Ph\u01b0\u01a1ng th\u1ee9c kh\u1edfi t\u1ea1o - constructor",id:"1-ph\u01b0\u01a1ng-th\u1ee9c-kh\u1edfi-t\u1ea1o---constructor",level:2},{value:"2. Ph\u01b0\u01a1ng th\u1ee9c h\u1ee7y b\u1ecf - deconstructor",id:"2-ph\u01b0\u01a1ng-th\u1ee9c-h\u1ee7y-b\u1ecf---deconstructor",level:2},{value:"Ngu\u1ed3n",id:"ngu\u1ed3n",level:2}];function a(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.useMDXComponents)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"constructor-v\xe0-destructor-trong-python",children:"Constructor v\xe0 destructor trong Python"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"1-ph\u01b0\u01a1ng-th\u1ee9c-kh\u1edfi-t\u1ea1o---constructor",children:"1. Ph\u01b0\u01a1ng th\u1ee9c kh\u1edfi t\u1ea1o - constructor"}),"\n",(0,o.jsx)(t.p,{children:"Ph\u01b0\u01a1ng th\u1ee9c kh\u1edfi t\u1ea1o l\xe0 m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c \u0111\u1eb7c bi\u1ec7t \u1edf trong class, ph\u01b0\u01a1ng th\u1ee9c n\xe0y m\u1eb7c \u0111\u1ecbnh s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi khi kh\u1edfi t\u1ea1o class. Ph\u01b0\u01a1ng th\u1ee9c \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 kh\u1edfi t\u1ea1o c\xe1c thu\u1ed9c, x\u1eed l\xfd ph\u01b0\u01a1ng th\u1ee9c ho\u1eb7c l\xe0 d\xf9ng \u0111\u1ec3 nh\u1eadn c\xe1c tham s\u1ed1 truy\u1ec1n v\xe0o class khi kh\u1edfi t\u1ea1o."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"C\xfa ph\xe1p"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class className:\n    def __init__(self, param1, param2,...):\n"})}),"\n",(0,o.jsx)(t.p,{children:"\xdd ngh\u0129a:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"className"})," l\xe0 t\xean class."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"param1, param2,..."})," l\xe0 c\xe1c tham s\u1ed1 mu\u1ed1n nh\u1eadn khi k\xe8m khi kh\u1edfi t\u1ea1o class."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"VD:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'class Person:\n    def __init__(self):\n        print("Class person \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o!")\n        \nperson = Person()\n\n# KQ: \nClass person \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o!\n'})}),"\n",(0,o.jsx)(t.h2,{id:"2-ph\u01b0\u01a1ng-th\u1ee9c-h\u1ee7y-b\u1ecf---deconstructor",children:"2. Ph\u01b0\u01a1ng th\u1ee9c h\u1ee7y b\u1ecf - deconstructor"}),"\n",(0,o.jsx)(t.p,{children:"Tr\xe1i ng\u01b0\u1ee3c v\u1edbi ph\u01b0\u01a1ng th\u1ee9c kh\u1edfi t\u1ea1o, th\xec ph\u01b0\u01a1ng th\u1ee9c h\u1ee7y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi khi class \u0111\u01b0\u1ee3c h\u1ee7y,. Ph\u01b0\u01a1ng th\u1ee9c d\xf9ng \u0111\u1ec3 gi\u1ea3i ph\xf3ng t\xe0i nguy\xean c\u1ee7a class."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"C\xfa ph\xe1p khai b\xe1o:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"def __del__(self):\n    # code\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Khai b\xe1o m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c c\xf3 t\xean l\xe0 ",(0,o.jsx)(t.code,{children:"__del__"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"VD:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Person:\n    def __init__(self, name, age, male):\n        print(\"Class person \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o!\")\n        print(\"Name: %s - Age: %d - Male: %d\" %(name, age, male))\n    def __del__(self):\n        print('Class Person \u0111\u01b0\u1ee3c h\u1ee7y')\nperson = Person('Lacoski', 22, True)\n# k\u1ebft qu\u1ea3: \n# Class person \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o!\n# Name: Vu Thanh Tai - Age: 22 - Male: 1\n# Class Person \u0111\u01b0\u1ee3c h\u1ee7y\n"})}),"\n",(0,o.jsx)(t.h2,{id:"ngu\u1ed3n",children:"Ngu\u1ed3n"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://toidicode.com/constructor-va-destructor-trong-python-358.html",children:"https://toidicode.com/constructor-va-destructor-trong-python-358.html"})})]})}function d(n={}){const{wrapper:t}={...(0,c.useMDXComponents)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},8453:(n,t,e)=>{e.r(t),e.d(t,{MDXProvider:()=>h,useMDXComponents:()=>r});var o=e(6540);const c={},s=o.createContext(c);function r(n){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function h(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),o.createElement(s.Provider,{value:t},n.children)}}}]);