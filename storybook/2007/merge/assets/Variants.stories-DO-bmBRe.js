import{j as r}from"./iframe-QYa5fCvd.js";import{H as a}from"./Heading-Dho9wAM0.js";import b from"./Default.stories-Dyx2_Hma.js";import{N as n}from"./Notification-CjKB_kYg.js";import{T as p}from"./Text-D98HT4db.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./Heading-ghp5YyKn.js";import"./RSPContexts-uNufUlk-.js";import"./utils-lb8KrrIv.js";import"./AlertIcon-CvCYqD3R.js";import"./IconWarning-DEqdDiS_.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./context-BsMul4n4.js";import"./Button-DtEggira.js";import"./LoadingSpinner-DKDkxF6a.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-u3ZYuRRI.js";import"./ProgressBar-BeUyRfom.js";import"./Label-fRERrzCf.js";import"./Hidden-Py6KbP61.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DR9sPTrv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKI1i-pB.js";import"./useFocus-D2QZKYlR.js";import"./useFocusRing-sLc_Aawe.js";import"./useFocusable-DEca05gc.js";import"./Link-M0xbFHUi.js";import"./dynamic-BhpRGc-9.js";import"./browser-BNaQCdYt.js";import"./EmulatedBoldText-BuggfMa1.js";import"./Text-BD3o8xQb.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
