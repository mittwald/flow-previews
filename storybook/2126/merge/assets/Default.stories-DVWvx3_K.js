import{j as e}from"./iframe-Ye-9ROja.js";import{A as n}from"./Alert-CoX8Glo_.js";import{H as i}from"./Heading-ETrbJF6H.js";import{C as d}from"./Content-J12nk9kF.js";import{B as o}from"./Button-CSXrQkPS.js";import{A as m}from"./ActionGroup-DnXdefyU.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Cms0_lyO.js";import"./IconWarning-C5ScV98r.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVMSJKid.js";import"./index-BD2FLLtY.js";import"./index-MGNRFzGq.js";import"./useLocalizedStringFormatter-8EdZld9N.js";import"./context-BMOJ7e9i.js";import"./dynamic-1eLzqo0n.js";import"./RSPContexts-CFmCNefB.js";import"./utils-CF6YsxS1.js";import"./Text-Bsxj-TZS.js";import"./browser-BcPcK0wn.js";import"./EmulatedBoldText-Bx43jLQW.js";import"./LoadingSpinner-BKm3aKU7.js";import"./Button-COBj9UNQ.js";import"./ProgressBar-Dc-dQlrj.js";import"./Hidden-CYSIeRK5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CJrPyvnd.js";import"./useFocusable-CkKnxemF.js";import"./getActionGroupSlot-Dd6c_7lB.js";import"./useStatic-BBGAeEE_.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
