import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{H as a}from"./Heading-Csp-_DUy.js";import b from"./Default.stories-uifbfcjq.js";import{N as n}from"./Notification-BPrlP7Ap.js";import{T as p}from"./Text-BwHAtMVi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnD-oO9S.js";import"./index-IBhSrjl6.js";import"./flowComponent-C3EXXnsB.js";import"./index-DdDGTNSf.js";import"./index-C0qn59OO.js";import"./Heading-BCoG4c8D.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-CzVyYWZn.js";import"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./v4-CtRu48qb.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-C0hcVHEt.js";import"./IconApp-Bw6C1rcI.js";import"./IconWarning-CYpqa6CU.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Link-DrKvyNAw.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DZCrAIzv.js";import"./useFocusRing-DzGSygZM.js";import"./useFocusable-CdO2YIL_.js";import"./Button-Bennxrpq.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-By9gTf-N.js";import"./Button-DrJb4gk9.js";import"./ProgressBar-CZau9lss.js";import"./Label-aZfeS6Au.js";import"./Hidden-C5TwESSa.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-PTaPc_Ci.js";const cr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},i={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},s={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,f,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,S,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const mr=["Info","Warning","Danger","Success"];export{i as Danger,t as Info,s as Success,o as Warning,mr as __namedExportsOrder,cr as default};
