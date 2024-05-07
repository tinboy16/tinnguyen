"use strict";(self.webpackChunktinnguyen=self.webpackChunktinnguyen||[]).push([[8046],{1374:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var o=i(4848),s=i(8453);const t={},d=void 0,c={id:"Docker/docker-compose",title:"docker-compose",description:"docker-compose - Connection between containers",source:"@site/docs/Docker/docker-compose.md",sourceDirName:"Docker",slug:"/Docker/docker-compose",permalink:"/docs/Docker/docker-compose",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tri\u1ec3n khai Django v\u1edbi MySQL s\u1eed d\u1ee5ng Docker",permalink:"/docs/Docker/django-mysql-docker"},next:{title:"T\u1ea1o m\u1ed9t images",permalink:"/docs/Docker/docker-images"}},a={},r=[{value:"docker-compose - Connection between containers",id:"docker-compose---connection-between-containers",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.useMDXComponents)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"docker-compose---connection-between-containers",children:"docker-compose - Connection between containers"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://docs.docker.com/compose/overview/",children:(0,o.jsx)(e.strong,{children:"Docker compose"})})," - gi\xfap ch\u1ea1y \u1ee9ng d\u1ee5ng multi-container v\xe0 k\u1ebft n\u1ed1i c\xe1c containers v\u1edbi nhau. File c\u1ea5u h\xecnh docker-compose s\u1eed d\u1ee5ng \u0111\u1ecbnh d\u1ea1ng YAML \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a c\xe1c application\u2019s services, sau \u0111\xf3 ta s\u1ebd start t\u1ea5t c\u1ea3 services \u0111\xe3 c\u1ea5u h\xecnh v\u1edbi m\u1ed9t single command."]}),"\n",(0,o.jsx)(e.p,{children:"H\xe3y xem file docker-compose.yml sau \u0111\xe2y, ch\xfang ta s\u1ebd ch\u1ea1y app nodejs k\u1ebft n\u1ed1i v\u1edbi database mongodb, s\u1eed d\u1ee5ng 2 container:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:'version: \'3\'\n\nservices:\n  app:\n    build:\n      context: ./app\n    container_name: nodejs_app\n    environment:\n      MONGO_URL: "mongodb://db/test"\n    depends_on:\n      - db\n    ports:\n      - "3000:3000"\n\n  db:\n    image: mongo\n    ports:\n      - "27017:27017"\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"version"})," -- s\u1eed d\u1ee5ng c\xfa ph\xe1p c\u1ee7a docker-compose \u1edf version n\xe0o"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"services"})," -- m\u1ed7i service s\u1ebd start m\u1ed9t container t\u01b0\u01a1ng \u1ee9ng"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"build/image"})," -- ch\u1ec9 \u0111\u1ecbnh th\u01b0 m\u1ee5c ch\u1ee9c Dockerfile \u0111\u1ec3 build image ho\u1eb7c s\u1eed d\u0169ng image c\xf3 s\u1eb5n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"depends_on"})," -- li\xean k\u1ebft v\u1edbi container kh\xe1c"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"ports"})," -- expose port"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Cd v\xe0o th\u01b0 m\u1ee5c ",(0,o.jsx)(e.strong,{children:"examples/compose-nodejs"})," v\xe0 ch\u1ea1y l\u1ec7nh b\xean d\u01b0\u1edbi:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"docker-compose up\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"docker-compose up -d"}),": th\xeam tham s\u1ed1 -d \u0111\u1ec3 ch\u1ea1y ng\u1ea7m"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Console output:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'$ docker-compose up\nBuilding app\nStep 1/6 : FROM node:argon\nargon: Pulling from library/node\n3d77ce4481b1: Pull complete\n534514c83d69: Pull complete\nd562b1c3ac3f: Pull complete\n4b85e68dc01d: Pull complete\nf6a66c5de9db: Pull complete\n7a4e7d9a081d: Pull complete\n876b13112871: Pull complete\n95d109ce6b5d: Pull complete\nDigest: sha256:fab73fccce5abc3fade13a99179884a306aa6c5292a2fc11833ee25ca15c1f85\nStatus: Downloaded newer image for node:argon\n ---\x3e ef4b194d8fcf\nStep 2/6 : COPY [".", "/usr/src/"]\n ---\x3e 77453297bcc4\nStep 3/6 : WORKDIR /usr/src\n ---\x3e Running in 0e66e1558d79\nRemoving intermediate container 0e66e1558d79\n ---\x3e 93c58dfb4f3c\nStep 4/6 : RUN npm install\n ---\x3e Running in 581d7c3fa215\nnpm WARN package.json nodejs-testapp@0.0.1 No README data\nmongodb@2.2.36 node_modules/mongodb\n\u251c\u2500\u2500 es6-promise@3.2.1\n\u251c\u2500\u2500 readable-stream@2.2.7 (buffer-shims@1.0.0, inherits@2.0.4, process-nextick-args@1.0.7, util-deprecate@1.0.2, core-util-is@1.0.2, isarray@1.0.0, string_decoder@1.0.3)\n\u2514\u2500\u2500 mongodb-core@2.1.20 (bson@1.0.9, require_optional@1.0.1)\nRemoving intermediate container 581d7c3fa215\n ---\x3e 6aecb6e011c2\nStep 5/6 : EXPOSE 3000\n ---\x3e Running in a4231a690a6c\nRemoving intermediate container a4231a690a6c\n ---\x3e e2853cdafb07\nStep 6/6 : CMD ["node", "index.js"]\n ---\x3e Running in c029f3d74396\nRemoving intermediate container c029f3d74396\n ---\x3e 65573c348797\nSuccessfully built 65573c348797\nSuccessfully tagged compose-nodejs_app:latest\nWARNING: Image for service app was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.\nCreating compose-nodejs_db_1 ... done\nCreating nodejs_app          ... done\nAttaching to compose-nodejs_db_1, nodejs_app\ndb_1   | 2019-10-31T07:46:24.843+0000 I  CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols \'none\'\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten] MongoDB starting : pid=1 port=27017 dbpath=/data/db 64-bit host=29fc7d852755\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten] db version v4.2.1\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten] git version: edf6d45851c0b9ee15548f0f847df141764a317e\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.1.1  11 Sep 2018\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten] allocator: tcmalloc\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten] modules: none\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten] build environment:\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten]     distmod: ubuntu1804\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten]     distarch: x86_64\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten]     target_arch: x86_64\ndb_1   | 2019-10-31T07:46:24.852+0000 I  CONTROL  [initandlisten] options: { net: { bindIp: "*" } }\ndb_1   | 2019-10-31T07:46:24.853+0000 I  STORAGE  [initandlisten] \ndb_1   | 2019-10-31T07:46:24.853+0000 I  STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine\ndb_1   | 2019-10-31T07:46:24.853+0000 I  STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem\ndb_1   | 2019-10-31T07:46:24.853+0000 I  STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=487M,cache_overflow=(file_max=0M),session_max=33000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000,close_scan_interval=10,close_handle_minimum=250),statistics_log=(wait=0),verbose=[recovery_progress,checkpoint_progress],\ndb_1   | 2019-10-31T07:46:25.698+0000 I  STORAGE  [initandlisten] WiredTiger message [1572507985:698408][1:0x7f94a4e00b00], txn-recover: Set global recovery timestamp: (0,0)\ndb_1   | 2019-10-31T07:46:25.721+0000 I  RECOVERY [initandlisten] WiredTiger recoveryTimestamp. Ts: Timestamp(0, 0)\ndb_1   | 2019-10-31T07:46:25.739+0000 I  STORAGE  [initandlisten] Timestamp monitor starting\ndb_1   | 2019-10-31T07:46:25.748+0000 I  CONTROL  [initandlisten] \ndb_1   | 2019-10-31T07:46:25.748+0000 I  CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.\ndb_1   | 2019-10-31T07:46:25.748+0000 I  CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.\ndb_1   | 2019-10-31T07:46:25.748+0000 I  CONTROL  [initandlisten] \ndb_1   | 2019-10-31T07:46:25.750+0000 I  STORAGE  [initandlisten] createCollection: admin.system.version with provided UUID: da3f736f-ad61-4935-adef-23fa08d2eaaf and options: { uuid: UUID("da3f736f-ad61-4935-adef-23fa08d2eaaf") }\ndb_1   | 2019-10-31T07:46:25.787+0000 I  INDEX    [initandlisten] index build: done building index _id_ on ns admin.system.version\ndb_1   | 2019-10-31T07:46:25.788+0000 I  SHARDING [initandlisten] Marking collection admin.system.version as collection version: <unsharded>\ndb_1   | 2019-10-31T07:46:25.788+0000 I  COMMAND  [initandlisten] setting featureCompatibilityVersion to 4.2\ndb_1   | 2019-10-31T07:46:25.788+0000 I  SHARDING [initandlisten] Marking collection local.system.replset as collection version: <unsharded>\ndb_1   | 2019-10-31T07:46:25.788+0000 I  STORAGE  [initandlisten] Flow Control is enabled on this deployment.\ndb_1   | 2019-10-31T07:46:25.788+0000 I  SHARDING [initandlisten] Marking collection admin.system.roles as collection version: <unsharded>\ndb_1   | 2019-10-31T07:46:25.789+0000 I  STORAGE  [initandlisten] createCollection: local.startup_log with generated UUID: 1a2cda6e-3d28-40dd-b97d-7e59d92acef4 and options: { capped: true, size: 10485760 }\ndb_1   | 2019-10-31T07:46:25.837+0000 I  INDEX    [initandlisten] index build: done building index _id_ on ns local.startup_log\ndb_1   | 2019-10-31T07:46:25.838+0000 I  SHARDING [initandlisten] Marking collection local.startup_log as collection version: <unsharded>\ndb_1   | 2019-10-31T07:46:25.839+0000 I  FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory \'/data/db/diagnostic.data\'\ndb_1   | 2019-10-31T07:46:25.843+0000 I  SHARDING [LogicalSessionCacheRefresh] Marking collection config.system.sessions as collection version: <unsharded>\ndb_1   | 2019-10-31T07:46:25.845+0000 I  STORAGE  [LogicalSessionCacheRefresh] createCollection: config.system.sessions with provided UUID: 71927b50-1291-4348-bb9a-3c9ca162c959 and options: { uuid: UUID("71927b50-1291-4348-bb9a-3c9ca162c959") }\ndb_1   | 2019-10-31T07:46:25.849+0000 I  NETWORK  [initandlisten] Listening on /tmp/mongodb-27017.sock\ndb_1   | 2019-10-31T07:46:25.849+0000 I  NETWORK  [initandlisten] Listening on 0.0.0.0\ndb_1   | 2019-10-31T07:46:25.849+0000 I  NETWORK  [initandlisten] waiting for connections on port 27017\ndb_1   | 2019-10-31T07:46:25.869+0000 I  INDEX    [LogicalSessionCacheRefresh] index build: done building index _id_ on ns config.system.sessions\ndb_1   | 2019-10-31T07:46:25.893+0000 I  INDEX    [LogicalSessionCacheRefresh] index build: starting on config.system.sessions properties: { v: 2, key: { lastUse: 1 }, name: "lsidTTLIndex", ns: "config.system.sessions", expireAfterSeconds: 1800 } using method: Hybrid\ndb_1   | 2019-10-31T07:46:25.893+0000 I  INDEX    [LogicalSessionCacheRefresh] build may temporarily use up to 500 megabytes of RAM\ndb_1   | 2019-10-31T07:46:25.893+0000 I  INDEX    [LogicalSessionCacheRefresh] index build: collection scan done. scanned 0 total records in 0 seconds\ndb_1   | 2019-10-31T07:46:25.894+0000 I  INDEX    [LogicalSessionCacheRefresh] index build: inserted 0 keys from external sorter into index in 0 seconds\ndb_1   | 2019-10-31T07:46:25.899+0000 I  INDEX    [LogicalSessionCacheRefresh] index build: done building index lsidTTLIndex on ns config.system.sessions\ndb_1   | 2019-10-31T07:46:25.902+0000 I  SHARDING [LogicalSessionCacheReap] Marking collection config.transactions as collection version: <unsharded>\ndb_1   | 2019-10-31T07:46:26.000+0000 I  SHARDING [ftdc] Marking collection local.oplog.rs as collection version: <unsharded>\nnodejs_app | Server listening at *: 3000\n'})}),"\n",(0,o.jsxs)(e.p,{children:["H\xe3y m\u1edf tr\xecnh duy\u1ec7t truy c\u1eadp v\xe0o ",(0,o.jsx)(e.a,{href:"http://127.0.0.1:3000/",children:"\u0111\u1ecba ch\u1ec9 http://127.0.0.1:3000/"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"Stop v\xe0 remove t\u1ea5t c\u1ea3 c\xe1c c\xe1c container \u0111\xe3 start b\u1eb1ng docker-compose:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"docker-compose down\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Tham kh\u1ea3o th\xeam v\u1ec1 ",(0,o.jsx)(e.a,{href:"https://docs.docker.com/compose/reference/overview/",children:"docker-compose cli"}),"."]})]})}function p(n={}){const{wrapper:e}={...(0,s.useMDXComponents)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},8453:(n,e,i)=>{i.r(e),i.d(e,{MDXProvider:()=>c,useMDXComponents:()=>d});var o=i(6540);const s={},t=o.createContext(s);function d(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);