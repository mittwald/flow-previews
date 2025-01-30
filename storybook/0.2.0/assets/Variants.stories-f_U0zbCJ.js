import{j as r}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{H as a}from"./Heading-rI9d-VUT.js";import b from"./Default.stories-qGX4qmYe.js";import{N as n}from"./Notification-DZHSoweu.js";import{T as p}from"./Text-CaginIuu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-DxoeBNET.js";import"./index-CFEY-m6m.js";import"./index-ByctJgwf.js";import"./Heading-DOuNAX0R.js";import"./RSPContexts-BG_vMng8.js";import"./utils-DjOXyFua.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-DJsyMfof.js";import"./IconApp-DYEF1khQ.js";import"./IconWarning-DAGL0qzm.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Link-C01lbCyx.js";import"./filterDOMProps-BSfnXAP7.js";import"./usePress-lNW0gZrs.js";import"./useFocusRing-CvMz7Q_e.js";import"./useFocusable-CNLx9CCl.js";import"./Button-5K6As1fH.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-C2VB9MCl.js";import"./Button-D76OI_vo.js";import"./ProgressBar-ZJQghT0g.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Text-BK3pbL47.js";const cr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},i={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},s={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
