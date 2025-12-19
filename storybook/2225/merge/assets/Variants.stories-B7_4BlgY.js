import{j as r}from"./iframe-DyIQYB7R.js";import{H as n}from"./Heading-C6tbK1yl.js";import c from"./Default.stories-CYrqOnrS.js";import{N as a}from"./Notification-BmN6aAy9.js";import{T as p}from"./Text-DP5VQe4y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./index-BAJQpnn3.js";import"./Heading-BomgGhUe.js";import"./RSPContexts-D0G5Z96Z.js";import"./utils-Br5k-T_U.js";import"./AlertIcon--LZTg8-U.js";import"./IconWarning-BlqJF_wS.js";import"./remote-CduUCN7o.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./context-DQwa7-Zw.js";import"./Button-C3sAJBlh.js";import"./LoadingSpinner-BJz_a5cm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BuUG1_MS.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DBMxrrfH.js";import"./useFocus-MkZ0Yize.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocusable-BzRC0Akk.js";import"./Link-BHjryOZC.js";import"./dynamic-tPr8Th1P.js";import"./browser-Dsy2EDmz.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <strong>My Project</strong> is over 80%
        utilized.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <strong>example.de</strong>.
      </Text>
    </Notification>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <strong>My WordPress</strong> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const K=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,K as __namedExportsOrder,J as default};
