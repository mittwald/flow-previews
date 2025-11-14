import{j as e}from"./iframe-U-SQzk2U.js";import{A as n}from"./Alert-PBaqSyU5.js";import{H as i}from"./Heading-LgN9kaRj.js";import{C as d}from"./Content-DqP6eARh.js";import{B as o}from"./Button-B_mH5guI.js";import{A as m}from"./ActionGroup-QOnDMJ0K.js";import"./index-nuYtCEEu.js";import"./AlertIcon-81NvLES1.js";import"./IconWarning-CDCEBJyf.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B4D8aI1U.js";import"./index-CCRDw9Jm.js";import"./index-CS9SnKd_.js";import"./useLocalizedStringFormatter-DxYjk-pp.js";import"./context-DG48XepE.js";import"./dynamic-BNi_8Fxs.js";import"./RSPContexts-CXcRuCAV.js";import"./utils-DoPZZ_D6.js";import"./Text-MZxPcWY_.js";import"./browser-w1PF0DBJ.js";import"./EmulatedBoldText-2j5mm0bP.js";import"./LoadingSpinner-CC-MYLRK.js";import"./Button-DBw5Ol_w.js";import"./ProgressBar-CipRA_mB.js";import"./Hidden-D2mi6DaR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B2IDcSiC.js";import"./useFocusable-Ctp8Cukd.js";import"./getActionGroupSlot-BsOJ1KeF.js";import"./useStatic-BAhUJhAM.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
