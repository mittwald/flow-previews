import{j as r}from"./iframe-D6sRUaJR.js";import{H as a}from"./Heading-VHTO0fC-.js";import b from"./Default.stories-D9oy0NST.js";import{N as n}from"./Notification-DpwPbOGQ.js";import{T as p}from"./Text-CzI-SNLy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-uwmcWe.js";import"./mergeRefs-BZVZ0dhZ.js";import"./index-BUpOoE4F.js";import"./Heading-C1baIQPk.js";import"./RSPContexts-BRIM2Iem.js";import"./utils-Qm7xLU3y.js";import"./AlertIcon-WpaWTRER.js";import"./IconWarning-D8wqW4GU.js";import"./useLocalizedStringFormatter-6HxLbkJZ.js";import"./context-DolFftfM.js";import"./Button-BCWx4ySg.js";import"./LoadingSpinner-m9O8-gUX.js";import"./Button-Bca1GoSv.js";import"./ProgressBar-Bwt4IvIC.js";import"./Label-CQsKsXsC.js";import"./Hidden-DCXhQTtV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BTkVtPxw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-uE3muS2D.js";import"./useFocus-CTtv6tdW.js";import"./useFocusRing-eR86HLCW.js";import"./useFocusable-BOGY22Am.js";import"./Link-B8GPZDZE.js";import"./dynamic-DKDa4OpU.js";import"./browser-lItX59Of.js";import"./EmulatedBoldText-_TSizv1d.js";import"./Text-C9PfWAJQ.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
