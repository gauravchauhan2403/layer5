(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8113],{53400:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var a=t(67294),r=t(70456).ZP.div.withConfig({displayName:"Terminalstyle__TerminalWrapper",componentId:"sc-q1xllq-0"})(["\n  --blue: #14c6cb;\n  --vagrant-l1: #66a2ff;\n  --white: #fff;\n  --gray-7: #f7f7f9;\n  --gray-6: #dcdde0;\n  --gray-5: #bdbec2;\n  --gray-4: #76767d;    \n  --gray-3: #4c4c53;\n  --gray-2: #323339;\n  --gray-1: #1d1e23;\n  --terminal-radius: 2px;\n  --terminal-title-color: var(--gray-2);\n  --terminal-body-color: var(--gray-1);\n\n  width: 837px;\n\n  .title-bar {\n    display: flex;\n    align-items: center;\n    background: var(--terminal-title-color);\n    width: 100%;\n    height: 46px;\n    border-radius: var(--terminal-radius) var(--terminal-radius) 0 0;\n\n    .title {\n      color: var(--gray-4);\n      font-family: 'Courier New', Courier, monospace;\n      font-size: 13.5px;\n      margin: 0 auto;\n    }\n\n    .window-controls {\n      position: absolute;\n      display: block;\n      list-style: none;\n      margin-left: 16px;\n      margin-top: 0;\n      margin-bottom: 0;\n      padding: 0;\n\n      li {\n        display: inline-block;\n        width: 14px;\n        height: 14px;\n        background: var(--gray-1);\n        border-radius: 12px;\n        margin-right: 7px;\n      }\n    }\n  }\n\n  .content {\n    width: 100%;\n    min-height: 525px;\n    height: 100%;\n    background: var(--terminal-body-color);\n    border-radius: 0 0 var(--terminal-radius) var(--terminal-radius);\n    padding: 24px 32px;\n\n    @media (min-width: 768px) {\n      height: 525px;\n    }\n  }\n\n.overflow-wrapper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: scroll;\n\n  /* Hides the scrollbars */\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n  &::-webkit-scrollbar {\n    /* Safari */\n    -webkit-appearance: none;\n    width: 0;\n    height: 0;\n  }\n\n  .code-wrapper {\n     pre {\n      padding: 0;\n      margin: 0;\n      width: 100%;\n      height: 100%;\n      font-style: normal;\n      font-weight: normal;\n      font-size: 12px;\n      line-height: 27px;\n      white-space: pre-wrap;\n      color: ",";\n      &.short {\n        line-height: 16px;\n      }\n      &.navy {\n        color: var(--vagrant-l1);\n      }\n      &.gray {\n        color: var(--gray-5);\n      }\n      &.white {\n        color: var(--white);\n      }\n\n      @media (min-width: 768px){\n        font-size: 13.5px;\n        line-height: 26px;\n      }\n    }\n  }\n}\n\n.no-scroll-overflow-wrapper {\n\n  .code-wrapper {\n    bottom: 0;\n    position: absolute;\n    min-height: 100%;\n  }\n}"],(function(e){return e.theme.secondaryColor})),l=function(e){var n=e.lines,t=e.title,l=e.noScroll;return a.createElement(r,null,a.createElement("div",{className:"title-bar"},a.createElement("ul",{className:"window-controls"},a.createElement("li",null),a.createElement("li",null),a.createElement("li",null)),t&&a.createElement("div",{className:"title"},t)),a.createElement("div",{className:"content"},a.createElement("div",{className:l?"no-scroll-overflow-wrapper overflow-wrapper":"overflow-wrapper"},a.createElement("div",{className:"code-wrapper"},n&&n.map((function(e,n){return a.createElement(a.Fragment,{key:n},a.createElement("pre",{className:(e.short?"short":"")+" "+(e.color?e.color:"blue")},e.indent&&new Array(2*e.indent).fill({}).map((function(e,n){return a.createElement(a.Fragment,{key:n}," ")})),e.code))}))))))}},96371:function(e,n,t){"use strict";var a=t(63366),r=t(67294),l=(t(25444),t(2359)),i=["childImageSharp","extension","publicURL","alt"];n.Z=function(e){var n=e.childImageSharp,t=e.extension,o=e.publicURL,m=e.alt,c=(0,a.Z)(e,i);return n||"svg"!==t?r.createElement(l.G,Object.assign({image:n.gatsbyImageData},c,{alt:m})):r.createElement("div",{className:"old-gatsby-image-wrapper"},r.createElement("img",{src:o,alt:m}))}},16587:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var a=t(67294),r=t(70456),l=t(20092),i=t(36179),o=t(97264),m=r.ZP.div.withConfig({displayName:"learnlayer5style__LearnLayer5GridWrapper",componentId:"sc-1qfc530-0"})(["\n\n    margin: 3rem auto 6rem;\n\n    .page-header {\n        margin: 0rem auto 0.5rem !important;\n    }\n    .learn-subtitle {\n        text-align: center;\n    }\n\n    .learning-path-cards{\n        margin: auto;\n        justify-content: center;\n        padding: 6rem 0;\n    }\n    .join-community{\n        max-width: 70rem;\n        display: flex;\n        margin: auto;\n        padding: 3rem 4rem;\n        align-items: center;\n        \n        button{\n            margin-top: 1.5rem;\n        }\n    }\n    .join-community_text-and_button{\n        h1{\n            margin-bottom: 1rem;\n        }\n        p{\n            margin: auto;\n            max-width: 42rem;\n        }\n    }\n    @media(max-width: 768px)\n    {\n        .join-community{\n            flex-direction: column;\n            justify-content: center;\n            padding: 3rem 1rem;\n            text-align: center;\n        }\n    }\n    @media(max-width:500px){\n        .learning-path-cards{\n            padding: 6rem 2rem;\n        }\n    }\n"]),c=t(25444),s=t(35318),d=t(57067),u=r.ZP.div.withConfig({displayName:"learn-cardstyle__CardWrapper",componentId:"sc-ka8159-0"})(["\n    max-width: 23.5rem;\n    min-height: 16rem;\n    margin: auto;\n    border-radius: 1rem;\n\n    .card-link{\n        color: black;\n    }\n\n    .card-parent{\n        background: rgba(255, 255, 255);\n        border-top: 5px solid rgb(117, 232, 168);\n        border-radius: 0.25rem;\n        min-height: 16rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        box-shadow: 0px 0.75rem 1rem 0.25rem rgb(0 0 0 / 12%);\n        position: relative;\n    }\n\n    .card-head{\n        display: flex;\n        padding: 1rem;\n        span{\n            border: 1px solid rgb(60 73 79);\n            color: black;\n            border-radius: 0.8rem;\n            padding: 0.05rem 0.75rem;\n            font-size: 1rem;\n        }\n    }\n\n    .card-desc{\n        padding: 0 1rem;\n        .summary {\n            color: rgba(0, 0, 0, 0.75);\n        }\n        p{\n            font-size: 1rem;\n        }\n    }\n\n    .card-subdata {\n        padding: 0 1rem;\n        position: absolute;\n        bottom: 0rem;\n        p{\n            font-size: 1rem;\n            font-weight: 600;\n        }\n    }\n\n    .card-image{\n        text-align: center;\n        position: absolute;\n        bottom: 0.1rem;\n        right: 0.75rem;\n        opacity: 0.2;\n        \n        img{\n            height: 8.5rem;\n            width: 8.5rem;\n        }\n    }\n\n    @media(max-width: 1300px){\n        margin: 1rem auto;\n    }\n"]),p=t(96371),h=function(e){var n=e.tutorial,t=e.courseCount;return a.createElement(u,null,a.createElement(c.Link,{to:n.fields.learnpath,className:"card-link"},a.createElement("div",{style:{borderTop:"5px solid "+n.frontmatter.themeColor},className:"card-parent"},a.createElement("div",null,a.createElement("div",{className:"card-head"},a.createElement("h3",null,n.frontmatter.title?n.frontmatter.title:n.frontmatter.courseTitle),n.frontmatter.status?a.createElement("p",null,a.createElement("span",null,"New")):null),a.createElement("div",{className:"card-desc"},a.createElement("p",{className:"summary"},n.frontmatter.description)),a.createElement("div",{className:"card-subdata"},a.createElement("p",null,t," Course",1===t?"":"s"))),a.createElement("div",{className:"card-image"},a.createElement(p.Z,Object.assign({},n.frontmatter.cardImage,{alt:n.frontmatter.title}))))))},g=r.ZP.div.withConfig({displayName:"learninfostyle__InfoWrapper",componentId:"sc-bniu9s-0"})(["\n\n  margin: 2rem auto;\n\n  .info-row {\n    margin: auto;\n    .col {\n      p {\n        color: rgba(0, 0, 0, 0.7);\n        margin: 1rem auto;\n      }\n\n      @media screen and (max-width: 992px) {\n        margin: 1rem auto;\n      }\n      @media screen and (max-width: 992px) {\n        text-align: center;\n      }\n    }\n  }\n"]),f=function(e,n,t){var a=[];return e.map((function(e){t&&"chapter"===e.node.fields.pageType?e.node.fields[n]&&a.push(e.node.fields[n]):""===t&&e.node.fields[n]&&a.push(e.node.fields[n])})),[...new Set(a)].length},y=function(e){var n=e.courses,t=e.chapters,r=e.meshes,l=f(n,"course",""),i=f(t,"chapter",""),o=f(r,"section","chapter");return a.createElement(g,null,a.createElement(d.X2,{className:"info-row"},a.createElement(d.JX,{xs:12,sm:6,lg:4},a.createElement("h2",null,l," ",1===l?"course":"courses"),a.createElement("p",null,"Learning the service mesh the right way. From the best learing paths by the experts at Layer5 and learn how to mesh.")),a.createElement(d.JX,{xs:12,sm:6,lg:4},a.createElement("h2",null,i," ",1===i?"chapter":"chapters"),a.createElement("p",null,"Learning the service mesh the right way. From the best learing paths by the experts at Layer5 and learn how to mesh.")),a.createElement(d.JX,{xs:12,sm:6,lg:4},a.createElement("h2",null,o," service ",1===o?"mesh":"meshes"," available"),a.createElement("p",null,"Istio, Linkerd"))))},w=r.ZP.div.withConfig({displayName:"what-awaitstyles__WhatAwaitsWrapper",componentId:"sc-wl6x33-0"})(["\n    padding: 1rem;\n    margin: 1rem auto 6rem;\n\n    .what-await-section {\n        margin: 0;\n    }\n\n    .what-await-section-info {\n        align-self: center;\n        padding: 2rem 1rem;\n        flex: 0 0 50%;\n        max-width: 50%;\n        h2{\n            margin: 1rem auto;\n            max-width: 75%;\n        }\n        p {\n            max-width: 75%;\n            margin: auto;\n        }\n    }\n\n    .what-await-section-image {\n        flex: 0 0 50%;\n        max-width: 50%;\n        overflow: hidden;\n        div {\n            margin: auto;\n        }\n    }\n\n    @media screen and (max-width: 1200px) {\n        .what-await-section-info, .what-await-section-image {\n            flex: 0 0 100%;\n            max-width: 100%;\n        }\n    }\n"]),E=t(53400),v=function(){return a.createElement(w,null,a.createElement(d.X2,{className:"what-await-section"},a.createElement(d.JX,{sm:12,md:6,xl:4,className:"what-await-section-info"},a.createElement("h2",null,"What Awaits you"),a.createElement("p",null,"Learning service mesh the right way. From the best learning path by the experts at Layer5 and learn how to mesh")),a.createElement(d.JX,{sm:12,md:6,xl:4,className:"what-await-section-image"},a.createElement(E.Z,{lines:[{code:"$ mesheryctl pattern apply -f canary-v3.yaml",color:"white"},{code:"» Deploying...",color:"navy"},{code:"✓ Deployment successfully rolled out!",color:"green"},{code:"\n"},{code:"» Traffic splitting...",color:"navy"},{code:"✓ 5% of user requests to v3.",color:"green"},{code:"✓ 30% of user requests to v3.",color:"green"},{code:"✓ 60% of user requests to v3.",color:"green"},{code:"✓ 90% of user requests to v3.",color:"green"},{code:"✓ 100% of user requests to v3.",color:"green"},{code:"\n"},{code:"Pattern successfully applied. Rollout of 'canary-v3' completed.",color:"navy"},{code:"» Prerelease URL: https://payments-v3.meshery.run",color:"green"},{code:"» Release URL: https://payments.meshery.run",color:"green"}]}))))},b=t(22626),x=function(){var e=(0,c.useStaticQuery)("3138037654");return a.createElement(m,null,a.createElement(d.W2,null,a.createElement(s.Z,{title:"Learning Paths"}),a.createElement("div",{className:"learn-subtitle"},a.createElement("p",null,"Learn how to service mesh.Learn how to run"),a.createElement("p",null,"Meshery, install Istio and deploy a sample app")),a.createElement(d.X2,{className:"learning-path-cards"},e.learnPaths.nodes.map((function(n){return a.createElement(d.JX,{sm:12,md:6,xl:4,key:n.id},a.createElement(h,{tutorial:n,courseCount:(t=n.fields.learnpath,e.allCourses.nodes.filter((function(e){return e.fields.learnpath===t}))).length}));var t})))),a.createElement(v,null),a.createElement(d.W2,null,a.createElement(y,{courses:e.coursesCount.edges,chapters:e.chaptersCount.edges,meshes:e.meshesCount.edges}),a.createElement("div",{className:"join-community"},a.createElement("div",{className:"join-community_text-and_button"},a.createElement("h1",null,"Don't Learn Alone"),a.createElement("p",null,"Check Out the Layer5 community, Join us on Slack and learn with the community")),a.createElement(b.Z,{secondary:!0,title:"Join Our Talented Community",url:"http://slack.layer5.io/"}))))},N=t(99043),k=t(97956),L=t(38155),C=function(){return a.createElement(r.f6,{theme:L.Z},a.createElement(l.Z,null,a.createElement(k.Z,null),a.createElement(i.Z,{title:"Learn to Service Mesh",description:"Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh",image:"/images/workshops.png"}),a.createElement(o.Z,null),a.createElement(x,null),a.createElement(N.Z,null)))}},35318:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(67294),r=t(25444),l=t(88449),i=t.n(l),o=t(70456).ZP.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"sc-bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),m=t(96371),c=function(e,n){return a.createElement(a.Fragment,null,n?a.createElement(r.Link,{to:"/community/members/"+i()(e.name)},a.createElement("span",null,e.name)):a.createElement("span",null,e.name))},s=function(e){var n=e.category,t=e.title,l=e.subtitle,s=e.author,d=e.thumbnail,u=!1;s&&(u=(0,r.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==s.name})));return a.createElement(o,null,a.createElement("div",{className:"page-header"},d&&a.createElement("div",{className:"feature-image"},a.createElement(m.Z,Object.assign({},d,{imgStyle:{objectFit:"contain"},alt:t}))),a.createElement("h1",{className:"page-title"},t),l&&a.createElement("h3",null,l),n&&a.createElement("div",{className:"breadcrumbs"},a.createElement("span",null,a.createElement("h5",null,"Category:"),a.createElement("p",{key:n},a.createElement(r.Link,{to:"/blog/category/"+i()(n)},a.createElement("span",null,n)))),s&&a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("h5",null,"By:"),a.createElement("p",null,c(s,u))))),!n&&s&&a.createElement("div",{className:"breadcrumbs post"},a.createElement("h5",null,"By:"),a.createElement("span",null,c(s,u)))))}},88449:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}]);
//# sourceMappingURL=component---src-pages-learn-ng-js-636efa56b1186f091ad2.js.map