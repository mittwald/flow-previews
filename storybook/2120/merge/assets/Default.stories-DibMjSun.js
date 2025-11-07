import{j as e}from"./iframe-DhEtuAZk.js";import{A as n}from"./Alert-C0_k9BWo.js";import{H as i}from"./Heading-w8VDel3v.js";import{C as d}from"./Content-B5pw8O7y.js";import{B as o}from"./Button-BY9Kr7Ye.js";import{A as m}from"./ActionGroup-ESJbAOgN.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CX41xz4j.js";import"./IconWarning-CZNr6BH3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Sd9fxQN7.js";import"./index-Cjw7dVYj.js";import"./index-DWS6YMK5.js";import"./useLocalizedStringFormatter-TlIqT86R.js";import"./context-B4_4eL8K.js";import"./dynamic-CwxkBJO8.js";import"./RSPContexts-CP8S-33J.js";import"./utils-DSKmOAaE.js";import"./Text-CrxTC35E.js";import"./browser-CRwqe8Ti.js";import"./EmulatedBoldText-DZREZbVk.js";import"./LoadingSpinner-DZTinZ99.js";import"./Button-DH0rVXA4.js";import"./ProgressBar-CCRGuqks.js";import"./Hidden-Dx0nOzpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CtGm1hSf.js";import"./useFocusable-GlgNOWPt.js";import"./getActionGroupSlot-B2enF2gG.js";import"./useStatic-OTFolAlH.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
