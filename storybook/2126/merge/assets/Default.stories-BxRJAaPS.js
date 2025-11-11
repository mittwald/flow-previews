import{j as e}from"./iframe-sw6YBGs2.js";import{A as n}from"./Alert-BrKf053k.js";import{H as i}from"./Heading-BjeBhvap.js";import{C as d}from"./Content-B9ARa_I0.js";import{B as o}from"./Button-C3vsBXq_.js";import{A as m}from"./ActionGroup-BXh7v2Sj.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DOBK5Qiy.js";import"./IconWarning-Mo4x9W3y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-9kUQeyVn.js";import"./index-CQ8O5V0p.js";import"./index-DXtHeKIw.js";import"./useLocalizedStringFormatter-D1DdJ7gx.js";import"./context-C55dwVSC.js";import"./dynamic-DI3ra1Po.js";import"./RSPContexts-DsElqAB8.js";import"./utils-DUnEZ_OM.js";import"./Text-BcvoGUvL.js";import"./browser-CM4mIXp1.js";import"./EmulatedBoldText-2hgsjV1R.js";import"./LoadingSpinner-Bc_cKoW-.js";import"./Button-C9KiGU0p.js";import"./ProgressBar-LVLLuOf0.js";import"./Hidden-CsbjM4Ab.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CuXwNFI9.js";import"./useFocusable-D0OMOiNw.js";import"./getActionGroupSlot-xCaZiuyA.js";import"./useStatic-3-oc9s-0.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
