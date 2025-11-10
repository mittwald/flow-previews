import{j as e}from"./iframe-Bb2Dt4gO.js";import{A as n}from"./Alert-lk5o4gl5.js";import{H as i}from"./Heading-BwEM0wnm.js";import{C as d}from"./Content-DXm5Datb.js";import{B as o}from"./Button-4ByktXkK.js";import{A as m}from"./ActionGroup-CCvmBmqO.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Bt1YKJtK.js";import"./IconWarning-ncqjKY0i.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJrXYk4c.js";import"./index-DhaS9Xnk.js";import"./index-P4MnPsl7.js";import"./useLocalizedStringFormatter-C4xJr-3b.js";import"./context-OBblbX9f.js";import"./dynamic-BQ6J2UuW.js";import"./RSPContexts-ScA0jBqq.js";import"./utils-BRWgyZeC.js";import"./Text-DlHja6rG.js";import"./browser-C45ETDbe.js";import"./EmulatedBoldText-BkxAkbDy.js";import"./LoadingSpinner-BExDoLYl.js";import"./Button-BSQSoIIB.js";import"./ProgressBar-DmgKKf3-.js";import"./Hidden-DZjS-0Re.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BqqueoK_.js";import"./useFocusable-BsZWsXG_.js";import"./getActionGroupSlot-BbHFGHkf.js";import"./useStatic-CQaBBZXk.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
