import{j as r}from"./iframe-DzjGvN4s.js";import{H as n}from"./Heading-J6woGLR_.js";import c from"./Default.stories-BLekU_R0.js";import{N as a}from"./Notification-CfDjJ5UP.js";import{T as p}from"./Text--QhKw61r.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./index-CvRHkpxf.js";import"./Heading-DMPfqJKh.js";import"./RSPContexts-D4WEG-B8.js";import"./utils-CaY6-C_T.js";import"./AlertIcon-C0w0dGgz.js";import"./IconWarning-s7NSVc-U.js";import"./remote-cWDQ0h3n.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./context-kL1uqGsw.js";import"./Button-BJ_Dg9g5.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzmY1str.js";import"./ProgressBar-BHFfTD-E.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-7qQt_FP7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3so-j8A.js";import"./useFocus-DFbK7vZ5.js";import"./useFocusRing-wMvVuuCP.js";import"./useFocusable-CvI9gOnC.js";import"./Link-Bj886ruI.js";import"./dynamic-D8j0vgwF.js";import"./browser-DnRnaS9W.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./Text-CsTzsUsp.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
