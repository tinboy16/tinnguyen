"use strict";(self.webpackChunktinnguyen=self.webpackChunktinnguyen||[]).push([[1680],{40:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(4848),c=i(8453);const s={sidebar_position:1},t="Gi\u1edbi thi\u1ec7u Docker",o={id:"Docker/docker-la-gi",title:"Gi\u1edbi thi\u1ec7u Docker",description:"Docker basics",source:"@site/docs/Docker/docker-la-gi.md",sourceDirName:"Docker",slug:"/Docker/docker-la-gi",permalink:"/docs/Docker/docker-la-gi",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Search Bar",permalink:"/docs/overview/search_bar"},next:{title:"Gi\u1edbi Thi\u1ec7u Container trong Docker",permalink:"/docs/Docker/container-trong-docker-la-gi"}},h={},d=[{value:"Docker l\xe0 g\xec?",id:"docker-l\xe0-g\xec",level:2},{value:"\u1ea2o h\xf3a truy\u1ec1n th\u1ed1ng (Virtual Machines) so s\xe1nh v\u1edbi Containers",id:"\u1ea3o-h\xf3a-truy\u1ec1n-th\u1ed1ng-virtual-machines-so-s\xe1nh-v\u1edbi-containers",level:2},{value:"V\xec sao l\u1ea1i d\xf9ng docker ?",id:"v\xec-sao-l\u1ea1i-d\xf9ng-docker-",level:2},{value:"Containers",id:"containers",level:2},{value:"Images",id:"images",level:2}];function l(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.useMDXComponents)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"gi\u1edbi-thi\u1ec7u-docker",children:"Gi\u1edbi thi\u1ec7u Docker"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Docker basics",src:i(2764).default+"",width:"2560",height:"1440"})}),"\n",(0,r.jsx)(e.h2,{id:"docker-l\xe0-g\xec",children:"Docker l\xe0 g\xec?"}),"\n",(0,r.jsx)(e.p,{children:"Docker l\xe0 m\u1ed9t c\xf4ng c\u1ee5 \u1ea3o h\xf3a lightweight m\xe3 ngu\u1ed3n m\u1edf , gi\xfap t\u1ef1 \u0111\u1ed9ng h\xf3a tri\u1ec3n khai application b\xean trong m\u1ed9t container."}),"\n",(0,r.jsx)(e.h2,{id:"\u1ea3o-h\xf3a-truy\u1ec1n-th\u1ed1ng-virtual-machines-so-s\xe1nh-v\u1edbi-containers",children:"\u1ea2o h\xf3a truy\u1ec1n th\u1ed1ng (Virtual Machines) so s\xe1nh v\u1edbi Containers"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"What\u2019s the Diff: VMs vs Containers",src:i(7915).default+"",width:"1440",height:"810"})}),"\n",(0,r.jsx)(e.h2,{id:"v\xec-sao-l\u1ea1i-d\xf9ng-docker-",children:"V\xec sao l\u1ea1i d\xf9ng docker ?"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Docker lightweight v\xe0 t\u1ed1i \u01b0u h\xf3a t\xe0i nguy\xean h\u01a1n VM"}),"\n",(0,r.jsx)(e.li,{children:"Gi\u1ea3 l\u1eadp m\xf4i tr\u01b0\u1eddng server \u1edf d\u01b0\u1edbi m\xe1y local (m\xe1y c\u1ee7a developer)"}),"\n",(0,r.jsx)(e.li,{children:"Th\u1ed1ng nh\u1ea5t v\xe0 chia s\u1ebb m\xf4i tr\u01b0\u1eddng l\u1eadp tr\xecnh cho nh\xf3m l\xe0m vi\u1ec7c"}),"\n",(0,r.jsx)(e.li,{children:"Kh\xf4ng t\u1ea1o nhi\u1ec1u ph\u1ea7n m\u1ec1m r\xe1c trong m\xe1y, khi k\u1ebft th\xfac d\u1ef1 \xe1n ch\u1ec9 c\u1ea7n x\xf3a b\u1ecf container."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"containers",children:"Containers"}),"\n",(0,r.jsxs)(e.p,{children:["Th\xe0nh ph\u1ea7n c\u01a1 b\u1ea3n c\u1ee7a ",(0,r.jsx)(e.code,{children:"Docker"})," l\xe0 ",(0,r.jsx)(e.em,{children:"containers"}),". H\xe3y th\u1eed ch\u1ea1y m\u1ed9t container:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker run hello-world\n#or\ndocker run ubuntu /bin/echo 'Hello world'\n"})}),"\n",(0,r.jsx)(e.p,{children:"D\u1ec5 ph\u1ea3i kh\xf4ng? Xem danh s\xe1ch containers \u0111ang ch\u1ea1y n\xe0o!"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker ps\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\ud83e\udd14 kh\xf4ng c\xf3, h\xe3y th\xeam tham s\u1ed1 ",(0,r.jsx)(e.code,{children:"-a"})," v\xe0o"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker ps -a\n"})}),"\n",(0,r.jsx)(e.p,{children:"\ud83d\ude00 C\xf3 th\u1ec3 xem th\xf4ng tin chi ti\u1ebft container v\u1edbi l\u1ec7nh inspect nh\u01b0 b\xean d\u01b0\u1edbi"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker inspect <container-id>\n"})}),"\n",(0,r.jsx)(e.p,{children:"B\xe2y gi\u1edd h\xe3y th\u1eed start m\u1ed9t container t\u1eeb images ubuntu:18.04"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker run ubuntu:18.04\n"})}),"\n",(0,r.jsxs)(e.p,{children:["(ch\u1ec9 \u0111\u1ecbnh version image (18.04) b\u1eb1ng tag name, sau d\u1ea5u ",(0,r.jsx)(e.code,{children:":"}),")"]}),"\n",(0,r.jsx)(e.p,{children:"\ud83e\udd14 Docker \u0111ang download file \u1ea3nh, r\u1ed3i ch\u1eb3ng c\xf3 g\xec hi\u1ec7n ra, \u0111\u1ec3 xem c\xf3 container n\xe0o \u0111\u01b0\u1ee3c t\u1ea1o kh\xf4ng..."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker ps -a\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Container \u0111\xe3 stop sau khi ch\u1ea1y? H\xe3y th\xeam tham s\u1ed1 ",(0,r.jsx)(e.code,{children:"-it"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker run -it ubuntu:18.04\n"})}),"\n",(0,r.jsx)(e.p,{children:"Cool, Gi\u1edd ch\xfang ta \u0111\xe3 truy c\u1eadp v\xe0o trong container!"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"-t"})," c\u1edd \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh ch\u1ea1y terminal b\xean trong container m\u1edbi."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"-i"})," c\u1edd n\xe0y gi\xfap nh\u1eadn l\u1ec7nh t\u1eeb standard input."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"--rm"})," c\xf3 th\u1ec3 th\xeam c\u1edd n\xe0y \u0111\u1ec3 t\u1ef1 \u0111\u1ed9ng x\xf3a container sau khi stop."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u0110\u1ec3 tho\xe1t, h\xe3y d\xf9ng l\u1ec7nh ",(0,r.jsx)(e.code,{children:"exit"}),". Xem danh s\xe1ch container l\u1ea1i m\u1ed9t l\u1ea7n n\u1eefa:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker ps -a\n"})}),"\n",(0,r.jsxs)(e.p,{children:["M\u1ed7i container c\xf3 m\u1ed9t main process \u0111\u01b0\u1ee3c g\xe1n ",(0,r.jsx)(e.code,{children:"pid 1"}),", main process ch\u1ea1y khi container start, v\xe0 khi main process d\u1eebng container s\u1ebd chuy\u1ec3n sang tr\u1ea1ng th\xe1i stoped, ngay c\u1ea3 khi c\xf3 ti\u1ebfn tr\xecnh kh\xe1c \u0111ang ch\u1ea1y."]}),"\n",(0,r.jsxs)(e.p,{children:["Gi\u1eef cho container ch\u1ea1y ng\u1ea7m b\u1eb1ng tham s\u1ed1 ",(0,r.jsx)(e.code,{children:"-d"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'docker run --name mycontainer -d ubuntu:18.04 /bin/sh -c "while true; do echo hello world; sleep 1; done"\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"-name"})," g\xe1n t\xean cho container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"-d"})," ch\u1ea1y ng\u1ea7m."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"images",children:"Images"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"Images"})," l\xe0 templates m\xe0 docker s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea1o containers. N\u1ebfu h\xecnh dung b\u1eb1ng ",(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Object-oriented_programming",children:"Object Oriented Programming"})," th\xec images gi\u1ed1ng nh\u01b0 ",(0,r.jsx)(e.em,{children:"classes"})," c\xf2n containers gi\u1ed1ng nh\u01b0 ",(0,r.jsx)(e.em,{children:"instances"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"Ki\u1ec3m tra danh s\xe1ch images \u1edf local hi\u1ec7n t\u1ea1i:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker images\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Pull image t\u1eeb ",(0,r.jsx)(e.a,{href:"https://hub.docker.com",children:"the public docker repository"})," v\u1ec1 local repository. Vi\u1ec7c n\xe0y gi\u1ed1ng ",(0,r.jsx)(e.code,{children:"git pull"})," t\u1eeb public ",(0,r.jsx)(e.code,{children:"git"})," repository."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker pull mongo\n"})}),"\n",(0,r.jsx)(e.p,{children:"X\xf3a images"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker rmi <image-id/image-name>\n"})})]})}function a(n={}){const{wrapper:e}={...(0,c.useMDXComponents)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},7915:(n,e,i)=>{i.r(e),i.d(e,{default:()=>r});const r=i.p+"assets/images/container-vs-vm-49dc5ab1e737fcdfbefae19d0dfd5376.webp"},2764:(n,e,i)=>{i.r(e),i.d(e,{default:()=>r});const r=i.p+"assets/images/cover-a83994d770c56d1ac51a0542f7c0c4b3.png"},8453:(n,e,i)=>{i.r(e),i.d(e,{MDXProvider:()=>o,useMDXComponents:()=>t});var r=i(6540);const c={},s=r.createContext(c);function t(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);