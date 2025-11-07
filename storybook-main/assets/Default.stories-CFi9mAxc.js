import{j as e}from"./iframe-Gppgd95h.js";import{A as n}from"./Alert-Bz7S7j10.js";import{H as i}from"./Heading-C1wKNzIE.js";import{C as d}from"./Content-CZbbtpB-.js";import{B as o}from"./Button-CQheULfL.js";import{A as m}from"./ActionGroup-DDS_PemV.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DQP9zo97.js";import"./IconWarning-CXl4-aHF.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBC2W0-6.js";import"./index-eyLLmFq7.js";import"./index-C46OFllo.js";import"./useLocalizedStringFormatter-nMq0Hiqv.js";import"./context-Cby3fyqM.js";import"./dynamic-Dx_-BW_E.js";import"./RSPContexts-uyFjXPd-.js";import"./utils-B4V-7u16.js";import"./Text-ByRCXQub.js";import"./browser-BvSJi_ez.js";import"./EmulatedBoldText-BsRwGIpf.js";import"./LoadingSpinner-CWX_u-O3.js";import"./Button-D2lj5RUi.js";import"./ProgressBar-DZD68PrE.js";import"./Hidden-7U06UOp8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BZLy2WOf.js";import"./useFocusable-DX1uCwgO.js";import"./getActionGroupSlot-PuK0vT60.js";import"./useStatic-DlLFMLM2.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
