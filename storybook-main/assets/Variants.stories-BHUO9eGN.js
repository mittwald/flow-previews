import{j as r}from"./iframe-F0_qnNmG.js";import{H as a}from"./Heading-DUYmd3Yr.js";import b from"./Default.stories-CWYGuntc.js";import{N as n}from"./Notification-B79wLiCw.js";import{T as p}from"./Text-DO7iLNcc.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./index-Bz7U0goG.js";import"./Heading-CslUe0CH.js";import"./RSPContexts-B8tkrJ5_.js";import"./utils-sDrdBfYO.js";import"./AlertIcon-BemjvR31.js";import"./IconWarning-uipPPHio.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./context-BBFKgyN5.js";import"./Button-6GY0aJmr.js";import"./LoadingSpinner-Ct4VP7lS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-vo1xOT6L.js";import"./ProgressBar-BhbNzFL_.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0DSh--k.js";import"./useFocus-DXNQJCU_.js";import"./useFocusRing-DNaFw-NR.js";import"./useFocusable-ueFnB-zi.js";import"./Link-BfpJk8hc.js";import"./dynamic-Bv8wQ4eA.js";import"./browser-Cnb-FwPQ.js";import"./EmulatedBoldText-nQ9KrBk1.js";import"./Text-aPdZ_B4g.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
