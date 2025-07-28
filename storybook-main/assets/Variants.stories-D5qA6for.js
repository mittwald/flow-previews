import{j as r}from"./iframe-ABGSKs5r.js";import{H as a}from"./Heading-D-Oz3E6h.js";import b from"./Default.stories-D6GUl5V7.js";import{N as n}from"./Notification-B307q-BD.js";import{T as p}from"./Text-DtVn_38U.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-I2hhpXOk.js";import"./mergeRefs-ARavDgvF.js";import"./index-DcXxLGBR.js";import"./Heading-CwqpXkmg.js";import"./RSPContexts-fBWTPx9Q.js";import"./utils-DiDGDlBS.js";import"./AlertIcon-BA-dTqII.js";import"./IconWarning-CrQ4Sq1v.js";import"./useLocalizedStringFormatter-CvJCn7rq.js";import"./context-DyJmA51t.js";import"./Button-Q43F_r8t.js";import"./LoadingSpinner-Dzzm5nCT.js";import"./Button-iaRAOLSz.js";import"./ProgressBar-CGoCl-ZJ.js";import"./Label-BwOKtJNA.js";import"./Hidden-B4dLwXdT.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DcKqU1cs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BBkNBI46.js";import"./useFocus-Dg7gZngi.js";import"./useFocusRing-Q7Twgd_z.js";import"./useFocusable-BAjBFm0a.js";import"./Link-C-b1YhvE.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJO6t65z.js";import"./EmulatedBoldText-GSAm8QjJ.js";import"./Text-BcmTaKwf.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
