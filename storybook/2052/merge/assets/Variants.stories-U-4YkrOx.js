import{j as r}from"./iframe-hiH37hms.js";import{H as a}from"./Heading-OoTPR-HK.js";import b from"./Default.stories-Cczi9kNf.js";import{N as n}from"./Notification-D0rPhW6b.js";import{T as p}from"./Text-CsOmTVyE.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./index-BJu77HCL.js";import"./Heading-CRf9y3R9.js";import"./RSPContexts-DTJHlpNa.js";import"./utils-JHWv327y.js";import"./AlertIcon-I8RXIybV.js";import"./IconWarning-Cse0Xf0Q.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./context-DRH00eGt.js";import"./Button-BrzTi3gr.js";import"./LoadingSpinner-DMdJqtIF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSe0nnji.js";import"./ProgressBar-CDjSE3x2.js";import"./Label-C0jnYKOc.js";import"./Hidden-XcASwwlw.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhsWghka.js";import"./useFocus-B9-o-MIg.js";import"./useFocusRing-WUR2BD9e.js";import"./useFocusable-C2_7lwWJ.js";import"./Link-CelcyI2A.js";import"./dynamic-BmCJXizF.js";import"./browser-BuBe5AKm.js";import"./EmulatedBoldText-BNkr3bPM.js";import"./Text-UKwjxOKq.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
