import{j as e}from"./iframe-Dpfie29P.js";import{A as n}from"./Alert-DnH7DHtP.js";import{H as i}from"./Heading-eNsITwkI.js";import{C as d}from"./Content-DRVAYpwC.js";import{B as o}from"./Button-CP1CQ4aA.js";import{A as m}from"./ActionGroup-gCJWvaTU.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CjVy_3fH.js";import"./IconWarning-DahfVj-v.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cjzkqjb4.js";import"./index-__VJVmNO.js";import"./index-B8L1MmPw.js";import"./useLocalizedStringFormatter-DKCw3c-I.js";import"./context-CImZbjU9.js";import"./dynamic-CxKv4_uB.js";import"./RSPContexts-Dy6WsHjT.js";import"./utils-ByCVrYF8.js";import"./Text-BxUYsUAw.js";import"./browser-SX7l3t_S.js";import"./EmulatedBoldText-DQbMaGdb.js";import"./LoadingSpinner-BvFhoBs5.js";import"./Button-CE70VFoQ.js";import"./ProgressBar-DBQgu7rG.js";import"./Hidden-X2etvrQI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B3ev5CsH.js";import"./useFocusable-MRbdgJr0.js";import"./getActionGroupSlot-BIjlchTd.js";import"./useStatic-_lGyJa-K.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
