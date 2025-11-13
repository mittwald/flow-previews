import{j as e}from"./iframe-D9rlzAqJ.js";import{A as n}from"./Alert-DuJJ4rT_.js";import{H as i}from"./Heading-BREdtYuh.js";import{C as d}from"./Content-CAVs97j9.js";import{B as o}from"./Button-DfeJaIav.js";import{A as m}from"./ActionGroup-nl-J_ZaJ.js";import"./index-nuYtCEEu.js";import"./AlertIcon-D9lVAGtj.js";import"./IconWarning-DYHE_-m1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DpPOKAlU.js";import"./index-Cnuf1N7w.js";import"./index-BRV6ez6J.js";import"./useLocalizedStringFormatter-sycgthOl.js";import"./context-SsG6f9B0.js";import"./dynamic-C5PGxhSs.js";import"./RSPContexts-BuIr8cKO.js";import"./utils-7I1ZD9XH.js";import"./Text-CDUW2Lw5.js";import"./browser-Dst4DIkE.js";import"./EmulatedBoldText-UlD0huTW.js";import"./LoadingSpinner-CyD3G-ZV.js";import"./Button-Dk6vUitJ.js";import"./ProgressBar-D7ktSTLg.js";import"./Hidden-BT89mVsv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bm-SRwoH.js";import"./useFocusable-DWITSf8K.js";import"./getActionGroupSlot-DGGwKmzg.js";import"./useStatic-gEenggmF.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
    </Alert>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
        <Button>Update email address</Button>
      </Content>
    </Alert>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const I=["Default","WithContent","WithActionGroup"];export{s as Default,a as WithActionGroup,t as WithContent,I as __namedExportsOrder,F as default};
