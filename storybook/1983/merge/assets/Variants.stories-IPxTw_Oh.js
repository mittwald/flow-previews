import{j as r}from"./iframe-Ci7am5-x.js";import{H as a}from"./Heading-D4H4HR75.js";import b from"./Default.stories-Ca4U3iwm.js";import{N as n}from"./Notification-DggCDONa.js";import{T as p}from"./Text-QWIhyI-d.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQR7cNuW.js";import"./mergeRefs-BZZ4k-un.js";import"./index-BSkYpBON.js";import"./Heading-De3U1nCH.js";import"./RSPContexts-DC069Ofk.js";import"./utils-D8LfxOEa.js";import"./AlertIcon-O33C-hsO.js";import"./IconWarning-CzB8zWov.js";import"./useLocalizedStringFormatter-BI8Ehzs7.js";import"./context-CzmRZySI.js";import"./Button-BxQcAiXL.js";import"./LoadingSpinner-t4rMaxgL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ByeNiRqN.js";import"./ProgressBar-D-kh5LUH.js";import"./Label-j8HR0Ono.js";import"./Hidden-6Fb8M7jx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-TZmyIU6H.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C06syjH3.js";import"./useFocus-ayIEkHl9.js";import"./useFocusRing-D6Pp4FJL.js";import"./useFocusable-ChczIcK6.js";import"./Link-C-u-DJPN.js";import"./dynamic-BJQQnM_P.js";import"./browser-1MQn7X-d.js";import"./EmulatedBoldText-Cc0xL4Af.js";import"./Text-CnPMclzL.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
