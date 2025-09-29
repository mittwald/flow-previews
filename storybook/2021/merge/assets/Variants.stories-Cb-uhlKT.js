import{j as r}from"./iframe-BEnK-FWT.js";import{H as a}from"./Heading-CM2cHxtn.js";import b from"./Default.stories-D4BzlrHP.js";import{N as n}from"./Notification-27i5X-Vw.js";import{T as p}from"./Text-DfapAs8s.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvB_ZVBE.js";import"./index-BPBs0lX7.js";import"./index-DmntYai2.js";import"./Heading-BLcTsrbo.js";import"./RSPContexts-BUhaye_C.js";import"./utils-HuzRHECM.js";import"./AlertIcon-BkAMeecS.js";import"./IconWarning-Du8jrWof.js";import"./useLocalizedStringFormatter-DxstFItm.js";import"./context-B1E8CUSR.js";import"./Button-Du_IXIsC.js";import"./LoadingSpinner-BRr-XCzk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDOmUSXw.js";import"./ProgressBar-VOq4RT67.js";import"./Label-DpqaIvZR.js";import"./Hidden-B8h_3GWf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DH4gBFQn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BT-0Cvdy.js";import"./useFocus-DNN1vAkK.js";import"./useFocusRing-Bx80huIr.js";import"./useFocusable-B7vzQveK.js";import"./Link-UbWnZjFN.js";import"./dynamic-DjJiwxiO.js";import"./browser-CXszXSov.js";import"./EmulatedBoldText-DzLnbGXm.js";import"./Text-pg5s_iHF.js";const sr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const ir=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,ir as __namedExportsOrder,sr as default};
