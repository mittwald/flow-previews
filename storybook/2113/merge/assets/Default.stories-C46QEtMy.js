import{j as e}from"./iframe-Dy6b_FCP.js";import{A as n}from"./Alert-CwCqGima.js";import{H as i}from"./Heading-BfvZKiwZ.js";import{C as d}from"./Content-Cr1BNqiG.js";import{B as o}from"./Button-GOXJIQJf.js";import{A as m}from"./ActionGroup-B4jkAi-7.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Bz-v7qCT.js";import"./IconWarning-DNcE7GB8.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DrrEN2JN.js";import"./index-CVEy0Z38.js";import"./index-DfVSRZN_.js";import"./useLocalizedStringFormatter-IeR6u1dk.js";import"./context-Cmxdn71P.js";import"./dynamic-BsH-tVs9.js";import"./RSPContexts-BxpxaOEB.js";import"./utils-Dr97TsDg.js";import"./Text-1cPTkrsR.js";import"./browser-B3C2hSkY.js";import"./EmulatedBoldText-rn83c_he.js";import"./LoadingSpinner-CtFn_aG9.js";import"./Button-D4hzfdEM.js";import"./ProgressBar-BRblqXhL.js";import"./Hidden-CO8a8gup.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DcnqUpu3.js";import"./useFocusable-CceqWekp.js";import"./getActionGroupSlot-DwP1pd0G.js";import"./useStatic-BBN1iEfx.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
