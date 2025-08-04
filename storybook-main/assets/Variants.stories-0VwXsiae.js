import{j as r}from"./iframe-CPZzz606.js";import{H as a}from"./Heading-C5GWYBNF.js";import b from"./Default.stories-DFCyHl8U.js";import{N as n}from"./Notification-DBk2G6bS.js";import{T as p}from"./Text-DzdHITqg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRqwxMEv.js";import"./mergeRefs-C0rS3-iA.js";import"./index-DEYSJV5h.js";import"./Heading-BNuzDqIF.js";import"./RSPContexts-CvcQ69I6.js";import"./utils-hIOiRbRa.js";import"./AlertIcon-CdxXjd2Q.js";import"./IconWarning-BPgxt_jx.js";import"./useLocalizedStringFormatter-DPLafpGQ.js";import"./context-CViJrtm-.js";import"./Button-pCBSultP.js";import"./LoadingSpinner-BcRThk1E.js";import"./Button-Duf2neHD.js";import"./ProgressBar-Bt4eS-sP.js";import"./Label-NfUS4-fW.js";import"./Hidden-Dc7FsRzF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-z4mqv1Jd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx1ggqha.js";import"./useFocus-C_gNEsKA.js";import"./useFocusRing-B6XF-T5t.js";import"./useFocusable-Ci-OciRZ.js";import"./Link-Dqwjgxvx.js";import"./dynamic-DKDa4OpU.js";import"./browser-CzF8oOuQ.js";import"./EmulatedBoldText-28L-LsQV.js";import"./Text-BoUJhWX_.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
