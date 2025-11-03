import{j as e}from"./iframe-Bx5EipPE.js";import{A as n}from"./Alert-DWOWH2LA.js";import{H as i}from"./Heading-DhAPxMie.js";import{C as d}from"./Content-BPEEMkM8.js";import{B as o}from"./Button-CFmBk-Ho.js";import{A as m}from"./ActionGroup-No0FdeaF.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DV0ec5yj.js";import"./IconWarning-sXt69lXW.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DV1r5tPv.js";import"./index-13Ss2Q1C.js";import"./index-B2U9nMUa.js";import"./useLocalizedStringFormatter-2_Ttu7_B.js";import"./context-CiBo84na.js";import"./dynamic-DMwV73o9.js";import"./RSPContexts-ByW7h33h.js";import"./utils-CqLTISaK.js";import"./Text-cL2QlUTP.js";import"./browser-YP_S1MMX.js";import"./EmulatedBoldText-DBVghW6y.js";import"./LoadingSpinner-BBcen_x5.js";import"./Button-CMS0XqzI.js";import"./ProgressBar-CLZ_h9h8.js";import"./Hidden-DlcLHRCE.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B-aBTfr6.js";import"./useFocusable-C9Y_kWrv.js";import"./getActionGroupSlot-B1Q5BOiy.js";import"./useStatic-BSnv9Wf7.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
