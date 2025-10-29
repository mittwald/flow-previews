import{j as e}from"./iframe-CUHqcL_I.js";import{A as n}from"./Alert-9S7EMKOb.js";import{H as i}from"./Heading-Do04wJKe.js";import{C as d}from"./Content-TYeYRqFP.js";import{B as o}from"./Button-DrygTKxs.js";import{A as m}from"./ActionGroup-C9uFf6fw.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Dy-osvDK.js";import"./IconWarning-C3AAIkW7.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BjSKuQCX.js";import"./index-CrtpoxY-.js";import"./index-CTAmePsE.js";import"./useLocalizedStringFormatter-CdK5FACb.js";import"./context-DsJ462Ut.js";import"./dynamic-B87jRkTU.js";import"./RSPContexts-CQETDyCZ.js";import"./utils-yOUeLBa9.js";import"./Text-9dBC56cL.js";import"./browser-Cw9CdHqj.js";import"./EmulatedBoldText-3j1WcMoY.js";import"./LoadingSpinner-tg8gDUA6.js";import"./Button-Gx1b59X2.js";import"./ProgressBar-CSMSR9VB.js";import"./Hidden-DlQVfkRs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DaG9LpkP.js";import"./useFocusable-BfYOI4CR.js";import"./getActionGroupSlot-C3SbOV1Z.js";import"./useStatic-D0HQJKJl.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
