import{j as e}from"./iframe-DO9N3msj.js";import{A as n}from"./Alert-CmVL1g9g.js";import{H as i}from"./Heading-DFXUXxT1.js";import{C as d}from"./Content-o-E4J5v4.js";import{B as o}from"./Button-DK3gLuJ3.js";import{A as m}from"./ActionGroup-BuBCswp0.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Cx9uM7rV.js";import"./IconWarning-BWr56wBK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBgkl_gr.js";import"./index-DPecbs7H.js";import"./index-BKd7rs_c.js";import"./useLocalizedStringFormatter-DC2cqCZD.js";import"./context-BjTRJu3f.js";import"./dynamic-DUGX_GEz.js";import"./RSPContexts-dbdihzDr.js";import"./utils-Cu-DyEOs.js";import"./Text-D7GNIHqq.js";import"./browser-hD6iDIbH.js";import"./EmulatedBoldText-CL2lsqyO.js";import"./LoadingSpinner-k8RqOHze.js";import"./Button-CwTEoZMR.js";import"./ProgressBar-DB2HZm0N.js";import"./Hidden-C-R9QW7n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-8nZAdgRB.js";import"./useFocusable-ahyCDO6Q.js";import"./getActionGroupSlot-B34s0y1B.js";import"./useStatic-KZCckyWk.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
