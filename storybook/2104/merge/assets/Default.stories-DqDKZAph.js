import{j as e}from"./iframe-CXJD44gU.js";import{A as n}from"./Alert-C1LKtwr3.js";import{H as i}from"./Heading-BqJcdYMf.js";import{C as d}from"./Content-BcWGfTxO.js";import{B as o}from"./Button-Cqh03G4a.js";import{A as m}from"./ActionGroup-D292NLNL.js";import"./index-nuYtCEEu.js";import"./AlertIcon-D9uZzc44.js";import"./IconWarning-BGBHXtCn.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BFLjIfgO.js";import"./index-BSMrjjpe.js";import"./index-CRJWytS4.js";import"./useLocalizedStringFormatter-Cml1CPb-.js";import"./context-FTDoYYrb.js";import"./dynamic-By6FwFol.js";import"./RSPContexts-DduoqfxZ.js";import"./utils-BNVflTSU.js";import"./Text-D7qfRA1L.js";import"./browser-BB5suZC2.js";import"./EmulatedBoldText-BVX9n63_.js";import"./LoadingSpinner-GTDlM8Wf.js";import"./Button-BYCRTXMY.js";import"./ProgressBar-DkMPzF4_.js";import"./Hidden-DV6zenYn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B8UGa5Q8.js";import"./useFocusable-BH-e1Dk3.js";import"./getActionGroupSlot-B4xny-oM.js";import"./useStatic-Dhs2fcV6.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
