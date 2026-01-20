import{j as e}from"./iframe-C5hcdLE6.js";import{A as t}from"./Alert-CQDLHm4i.js";import{H as s}from"./Heading-DWTXooi-.js";import{T as p}from"./Text-D8uazRXK.js";import{C as m}from"./Content-flaNMbvD.js";import{B as d}from"./Button-CzDqHNvA.js";import{A as h}from"./ActionGroup-BsDXgUZX.js";import{L as u}from"./LayoutCard-Bo0wRuSp.js";import{S as c}from"./Section-Zn6loSDR.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DM3zFbIf.js";import"./IconWarning-BGpxRwU-.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./index-ClIq6yug.js";import"./remote-DfH19er1.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./context-E1uxYtQv.js";import"./dynamic-DE5jfE1R.js";import"./Heading-Y84dBjpP.js";import"./RSPContexts-BMj0h4_3.js";import"./utils-B3GIFt3C.js";import"./browser-BJ6k16eC.js";import"./EmulatedBoldText-G7OdIUUd.js";import"./Text-79_FySwa.js";import"./LoadingSpinner-hJnys7-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX4O7Muw.js";import"./ProgressBar-Cgmeu2qU.js";import"./Label-Cdw77YDw.js";import"./Hidden-CzLEuVYW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DIyDpHH2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyQlFp9g.js";import"./useFocus-Fr_BfSOs.js";import"./useFocusRing-B86g4qKF.js";import"./useFocusable-xzWj-wm9.js";import"./getActionGroupSlot-CVriiRzc.js";import"./useStatic-CWBOctoH.js";import"./ContextMenuSection-Bm4KM0hd.js";import"./Action-CDW165y9.js";import"./context-kwHKhOde.js";import"./Dialog-D66iw0U8.js";import"./OverlayArrow-DN70rght.js";import"./useControlledState-C9jQ4AxE.js";import"./Collection-DXvYJhLm.js";import"./CollectionBuilder-CZUA7JnX.js";import"./SelectionIndicator-B5s74P3-.js";import"./Separator-DaQ1DUjO.js";import"./SelectionManager-Bbl3GIce.js";import"./useEvent-Drml-VA-.js";import"./useCollator-C0ggjMz1.js";import"./FocusScope-CQ3JVi5A.js";import"./VisuallyHidden-n5FPXG3E.js";const Ae={title:"Status/Alert",component:t,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},o={render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(d,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(d,{children:"Update"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},i={render:r=>e.jsxs(u,{children:[e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Email address"}),e.jsx(p,{children:l.long})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(p,{children:l.long})]})]}),globals:{backgrounds:"dark"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
    </Alert>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
        <Button>Update email address</Button>
      </Content>
    </Alert>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
        <ActionGroup>
          <Button>Update</Button>
          <Button variant="soft" color="secondary">
            Delete
          </Button>
        </ActionGroup>
      </Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <LayoutCard>
      <Alert {...props}>
        <Heading>Email address has been archived</Heading>
        <Content>
          As your domain has been deleted, this email address has been archived.
          To be able to send and receive emails, you must rename the address.
        </Content>
      </Alert>
      <Section>
        <Heading>Email address</Heading>
        <Text>{dummyText.long}</Text>
      </Section>
      <Section>
        <Heading>Spam protection</Heading>
        <Text>{dummyText.long}</Text>
      </Section>
    </LayoutCard>,
  globals: {
    backgrounds: "dark"
  }
}`,...i.parameters?.docs?.source}}};const je=["Default","WithContent","WithActionGroup","AboveSections"];export{i as AboveSections,o as Default,a as WithActionGroup,n as WithContent,je as __namedExportsOrder,Ae as default};
