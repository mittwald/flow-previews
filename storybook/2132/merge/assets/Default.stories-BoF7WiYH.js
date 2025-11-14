import{j as e}from"./iframe-D4i-5dyB.js";import{A as n}from"./Alert-BxysIfVE.js";import{H as i}from"./Heading-CqgoaxDG.js";import{C as d}from"./Content-BMj6l0HC.js";import{B as o}from"./Button-C5iEQf44.js";import{A as m}from"./ActionGroup-DfaF4Ihs.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CoWnPqgJ.js";import"./IconWarning-CMFXnZAS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BnDJ-hIk.js";import"./mergeRefs-BSb0Bje6.js";import"./index-BqFsReNE.js";import"./useLocalizedStringFormatter-Csijhnwe.js";import"./context-C76p02_s.js";import"./dynamic-l-Dsj5TR.js";import"./RSPContexts-BOewTbeY.js";import"./utils-BWp3lM8P.js";import"./Text-D-HEhYG-.js";import"./browser-Cwp7r97w.js";import"./EmulatedBoldText-wsap70PU.js";import"./LoadingSpinner-DCo1rAvM.js";import"./Button-BNk2Wifn.js";import"./ProgressBar-B4smC8yo.js";import"./Hidden-MqQXQobC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BHC6C08N.js";import"./useFocusable-COObapRc.js";import"./getActionGroupSlot-CzwDHsH8.js";import"./useStatic-CrV_XbcB.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
