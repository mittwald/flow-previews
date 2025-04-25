import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-F2Fta7eo.js";import{H as a}from"./Heading-CVcuk9IU.js";import b from"./Default.stories-d7obr1Ys.js";import{N as n}from"./Notification-CviRE4oF.js";import{T as p}from"./Text-Co8YuBQZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-mOzFaxmg.js";import"./mergeRefs-12BfVTtv.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./Heading-AP9WPpJD.js";import"./RSPContexts-DhZDYkwS.js";import"./utils-D0arg4qg.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./AlertIcon-VjCKLxh9.js";import"./IconWarning-BAx4oXKp.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./Button-CBOqZ-Ym.js";import"./LoadingSpinner-BE7sMQyP.js";import"./Button-DCaCfXLp.js";import"./ProgressBar-bhmU_ZvQ.js";import"./Label-wLZ3I4V9.js";import"./Hidden-aaDrlwOM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DB0A2tZF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-Tcmfb9SA.js";import"./Link-BCgo8-GG.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Text-AN1gvCNp.js";const nr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},i={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},s={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const pr=["Info","Warning","Danger","Success"];export{i as Danger,t as Info,s as Success,o as Warning,pr as __namedExportsOrder,nr as default};
