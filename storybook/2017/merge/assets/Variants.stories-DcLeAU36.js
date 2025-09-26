import{j as r}from"./iframe-ygucezpU.js";import{H as a}from"./Heading-CwsWyhxJ.js";import b from"./Default.stories-Djb_UMEa.js";import{N as n}from"./Notification-MfC7jCBP.js";import{T as p}from"./Text-c8GLfZrX.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv8w3zYd.js";import"./mergeRefs-C0ZYRiin.js";import"./index-BaLSpMVi.js";import"./Heading-Bxqgoihn.js";import"./RSPContexts-Bg25W6Pr.js";import"./utils-Dm2BIGqk.js";import"./AlertIcon-BoY9zsTJ.js";import"./IconWarning-Cs0D7_PK.js";import"./useLocalizedStringFormatter-TZqZqT18.js";import"./context-DzmzBjoy.js";import"./Button-Dsp-uMAe.js";import"./LoadingSpinner-DHdSJfkf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CrpDhUsv.js";import"./ProgressBar-CbOwlFL2.js";import"./Label-BffVQixZ.js";import"./Hidden-sZrOLhP9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BIOlG5Yn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqrMcV_T.js";import"./useFocus-BBcZge3l.js";import"./useFocusRing-CFbBFNPO.js";import"./useFocusable-CmrOOHc4.js";import"./Link-DPVICX3j.js";import"./dynamic-DtVcInqU.js";import"./browser-BpjCDOvP.js";import"./EmulatedBoldText-oasbrdcJ.js";import"./Text-DGTV1FYP.js";const sr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
