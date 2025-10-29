import{j as e}from"./iframe-BQyHcTNh.js";import{A as a}from"./Alert-6LlDWRBY.js";import{H as i}from"./Heading-BZf-WkCq.js";import{C as d}from"./Content-DyhOef0P.js";import{B as n}from"./Button-ieCP1ArV.js";import{A as m}from"./ActionGroup-WBeyu3m_.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CN6Y36_M.js";import"./IconWarning-D8COeLpG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./index-D5h5WobT.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./dynamic-V8J33Kah.js";import"./Heading-C-OseSB1.js";import"./RSPContexts-BtdGc8q9.js";import"./utils-CdCPWCHO.js";import"./Text-_hc15B6K.js";import"./browser-CktdIn7a.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./LoadingSpinner-CEYsHom-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./getActionGroupSlot-DtqoduiB.js";import"./useStatic-CIMbf_kn.js";const Q={title:"Status/Alert",component:a,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},t={render:r=>e.jsx(a,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},s={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(n,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(n,{children:"Update"}),e.jsx(n,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
    </Alert>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
        <Button>Update email address</Button>
      </Content>
    </Alert>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["Default","WithContent","WithActionGroup"];export{t as Default,o as WithActionGroup,s as WithContent,V as __namedExportsOrder,Q as default};
