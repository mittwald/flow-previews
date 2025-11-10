import{j as e}from"./iframe-CVnOevS7.js";import{A as n}from"./Alert-C0tO03bG.js";import{H as i}from"./Heading-DfGW7LfL.js";import{C as d}from"./Content-BmyMaCIf.js";import{B as o}from"./Button-Cf7B0HY9.js";import{A as m}from"./ActionGroup-B3X5o9oq.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DHgwBo_e.js";import"./IconWarning-B_svJUl9.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./index-Cr689PiB.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./context-B1NGcly_.js";import"./dynamic-DEpoJ_Zh.js";import"./RSPContexts-DjbnK2VB.js";import"./utils-CGDhhS2B.js";import"./Text-Bxez-FPO.js";import"./browser-DLVk8Qjw.js";import"./EmulatedBoldText-FqR_2DOA.js";import"./LoadingSpinner-CSIBpLRI.js";import"./Button-DX-sXAbn.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";import"./getActionGroupSlot-CQ6F0YI_.js";import"./useStatic-CGYI-bhE.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
