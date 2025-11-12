import{j as e}from"./iframe-DvmgUBW7.js";import{A as n}from"./Alert-DS4wdr90.js";import{H as i}from"./Heading-CqrprVNa.js";import{C as d}from"./Content-BTmNLdH3.js";import{B as o}from"./Button-C1BHOQWK.js";import{A as m}from"./ActionGroup-CjT6ddTh.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DccMdP4x.js";import"./IconWarning-Dv-oLMD9.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iNmw-pXL.js";import"./index-CaPeyytj.js";import"./index-BNqf21ov.js";import"./useLocalizedStringFormatter-xkNVf5KH.js";import"./context-DzqJJy5k.js";import"./dynamic-BrPxZX7i.js";import"./RSPContexts-DdvBd_E1.js";import"./utils-BtCbht9n.js";import"./Text-Dbew3mLe.js";import"./browser-DnTWaRxE.js";import"./EmulatedBoldText-xJj6r1Ey.js";import"./LoadingSpinner-DLZner8z.js";import"./Button-mFUbi7ER.js";import"./ProgressBar-CrOV3NyN.js";import"./Hidden-9CBDywx2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BavcHLfj.js";import"./useFocusable-CKxgRqhR.js";import"./getActionGroupSlot-BfXlTAt-.js";import"./useStatic-Jt5HUTTZ.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
