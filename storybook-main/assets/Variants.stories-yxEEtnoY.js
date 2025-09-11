import{j as r}from"./iframe-BsMxae-o.js";import{H as a}from"./Heading-YHeaSeUe.js";import b from"./Default.stories-BR4uUYwB.js";import{N as n}from"./Notification-UH-c7zmL.js";import{T as p}from"./Text-B7cMlOzY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D65IVLY2.js";import"./mergeRefs-CbyFhnfd.js";import"./index-ChzAh0kZ.js";import"./Heading-CvCiAr4K.js";import"./RSPContexts-Bo0-inYM.js";import"./utils-BMVQSkne.js";import"./AlertIcon-DQDGIYzK.js";import"./IconWarning-B9I94qHq.js";import"./useLocalizedStringFormatter-BCH9SnbZ.js";import"./context-DrnfoIRz.js";import"./Button-DfdH0gMv.js";import"./LoadingSpinner-B-hN89-2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Cr74-zWI.js";import"./ProgressBar-D3b6UtGt.js";import"./Label-CyhUcAwc.js";import"./Hidden-BVtLBYcf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BvYe3LSr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DrYqgVGE.js";import"./useFocus-HKqTfwLq.js";import"./useFocusRing-DtSDG_eK.js";import"./useFocusable-DYhRFaOI.js";import"./Link-FNIu49o-.js";import"./dynamic-DKDa4OpU.js";import"./browser-BOk4ZIfK.js";import"./EmulatedBoldText-CNMoZ52h.js";import"./Text-B7BhLbkb.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
