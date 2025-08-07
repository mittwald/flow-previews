import{j as r}from"./iframe-H6s4LegX.js";import{H as a}from"./Heading-40nVHR7j.js";import b from"./Default.stories-Ctgk3XQt.js";import{N as n}from"./Notification-pEm1bk0Q.js";import{T as p}from"./Text-Wzcs2ORX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BSx1Qve-.js";import"./mergeRefs-DP3Z4rVS.js";import"./index-BCzbKcgZ.js";import"./Heading-DpGChV-N.js";import"./RSPContexts-B4jRuJIy.js";import"./utils-UMD8tMdI.js";import"./AlertIcon-CAoFlRiL.js";import"./IconWarning-BOAgarfH.js";import"./useLocalizedStringFormatter-C86iIvvl.js";import"./context-ByOQKEDv.js";import"./Button-BfyS9OW4.js";import"./LoadingSpinner-BtBwTXqe.js";import"./Button-D43Lcc_s.js";import"./ProgressBar-D5gyotl2.js";import"./Label-CKpM-ud8.js";import"./Hidden-Di30YZNr.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BPkUN2gP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B_R4nnaN.js";import"./useFocus-CgMx6KCt.js";import"./useFocusRing-BEqBdngR.js";import"./useFocusable-C_460OjJ.js";import"./Link-BJVPKwIs.js";import"./dynamic-DKDa4OpU.js";import"./browser-N4t9rK0r.js";import"./EmulatedBoldText-CuIAJdmv.js";import"./Text-W_tYTgvJ.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
