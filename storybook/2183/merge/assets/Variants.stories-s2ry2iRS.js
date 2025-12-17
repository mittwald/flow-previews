import{j as r}from"./iframe-BzW-9mMD.js";import{H as n}from"./Heading-CFmOB0E2.js";import c from"./Default.stories-BYyZ7p-A.js";import{N as a}from"./Notification-DfuSE2sW.js";import{T as p}from"./Text-V56jcQh9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./index-DBI39Uex.js";import"./Heading-C_mfasv9.js";import"./RSPContexts-B2m0CCTC.js";import"./utils-BrWwMsiw.js";import"./AlertIcon-CURcKiiP.js";import"./IconApp-BdfgmDZu.js";import"./remote-BEBWGiXy.js";import"./IconDanger-BcSmAgIr.js";import"./IconInfo-BMahyVNn.js";import"./IconCircleCheck-CtMIN61o.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./context-42ert5Ah.js";import"./Button-kdt8pR0M.js";import"./IconX-w5RRSC5U.js";import"./IconCheck-ORikD9Q4.js";import"./LoadingSpinner-D5sbFVGI.js";import"./ariaLive-CVrDG-JG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgUosL-f.js";import"./ProgressBar-o-cVdTXN.js";import"./Label-CGJ_PWGO.js";import"./Hidden-Dd9I5XIl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Fj4NeiZR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLlpULp.js";import"./useFocus-dCAgOHv-.js";import"./useFocusRing-g2ZbegJf.js";import"./useFocusable-CVjqM_08.js";import"./IconClose-8oKInEzR.js";import"./Link-DgCghcYH.js";import"./IconDownload-EZOkzY-D.js";import"./dynamic-C266PTaS.js";import"./browser-C2fMNT9-.js";import"./EmulatedBoldText-xlY4BdXR.js";import"./Text-lCB5Bcpt.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const or=["Info","Warning","Danger","Success"];export{s as Danger,o as Info,i as Success,e as Warning,or as __namedExportsOrder,tr as default};
