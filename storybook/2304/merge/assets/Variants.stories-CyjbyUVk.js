import{j as r}from"./iframe-DQCyQvTg.js";import{H as n}from"./Heading-BJYyanRr.js";import c from"./Default.stories-Cb6OG7ej.js";import{N as a}from"./Notification-DLYOQjuI.js";import{T as p}from"./Text-Dy3rf6Sf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./index-vqo-_XTj.js";import"./Heading-CbA3ZoPp.js";import"./RSPContexts-CbSXEXlJ.js";import"./utils-B-47qEzM.js";import"./AlertIcon-BB94ofCu.js";import"./IconWarning-BsBEN2i7.js";import"./remote-DwYKdEj8.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./context-BVR1xsiE.js";import"./Button-BuvZu5FH.js";import"./LoadingSpinner-C2L8sUPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BqVXXUXM.js";import"./ProgressBar-CvxDZlN2.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CgNKGrTG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BDNCZxcv.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./useFocusable-Bi17AcBv.js";import"./Link-p8kO255Q.js";import"./dynamic-CLdLSboA.js";import"./browser-NLzega1a.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./Text-dCr4PfuU.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
