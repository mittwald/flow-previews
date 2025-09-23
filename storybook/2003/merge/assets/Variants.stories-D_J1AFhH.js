import{j as r}from"./iframe-BJWngGl7.js";import{H as a}from"./Heading-ByO-2qwf.js";import b from"./Default.stories-WIZn6OeF.js";import{N as n}from"./Notification-CYhKgjAU.js";import{T as p}from"./Text-D-lw11hw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DxSnxty7.js";import"./mergeRefs-CeYupt5U.js";import"./index-CMnnMEF7.js";import"./Heading-Cup4Z6Fz.js";import"./RSPContexts-1ZAuRZHz.js";import"./utils-BjLoxrER.js";import"./AlertIcon-C09w9Tao.js";import"./IconWarning-CLxGQCa2.js";import"./useLocalizedStringFormatter-DP6nHzmP.js";import"./context-ZX7huqtR.js";import"./Button-Dpovk5Ay.js";import"./LoadingSpinner-D0Y9UFL7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BC63ENzq.js";import"./ProgressBar-IjP_LWAf.js";import"./Label-jDh2Rcdd.js";import"./Hidden-cZZZgSgN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Lh8Q6d1O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bx1Ga4ml.js";import"./useFocus-B52D3fzv.js";import"./useFocusRing-B_Jq-YSB.js";import"./useFocusable-jxsYQPZM.js";import"./Link-CUH-0kU7.js";import"./dynamic-D7o2EbQn.js";import"./browser-qhbVwDYR.js";import"./EmulatedBoldText-BDv3rega.js";import"./Text-zfbbvU9b.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,S,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const sr=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,sr as __namedExportsOrder,or as default};
