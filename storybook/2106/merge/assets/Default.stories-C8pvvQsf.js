import{j as e}from"./iframe-C3RmV_vn.js";import{A as n}from"./Alert-D_C58G56.js";import{H as i}from"./Heading-BU4qnENK.js";import{C as d}from"./Content-DSufA99H.js";import{B as o}from"./Button-DaazfuBy.js";import{A as m}from"./ActionGroup-DaI6rKw9.js";import"./index-nuYtCEEu.js";import"./AlertIcon-0DtXBii2.js";import"./IconWarning-BE2KSBI-.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFlBLvPJ.js";import"./index-C-ZjcPlt.js";import"./index-hkSQrj3P.js";import"./useLocalizedStringFormatter-ChCCrZ8e.js";import"./context-DCRPXx9V.js";import"./dynamic-YRcCSNg3.js";import"./RSPContexts-BOh9wduO.js";import"./utils-D8HC0yU-.js";import"./Text-CaziZxQU.js";import"./browser-DymlHLTF.js";import"./EmulatedBoldText-CI-5ODle.js";import"./LoadingSpinner-DyOalyyw.js";import"./Button-CgyHIJsr.js";import"./ProgressBar-CDrPZwEB.js";import"./Hidden-CChVoDJ-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BIAWuC29.js";import"./useFocusable-C2zASQXP.js";import"./getActionGroupSlot-BgdQ1S-5.js";import"./useStatic-_h3OjEkL.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
