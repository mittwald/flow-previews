import{j as e}from"./iframe-B_2yjHsp.js";import{A as n}from"./Alert-Ci2W8wzE.js";import{H as i}from"./Heading-DVX5TZYJ.js";import{C as d}from"./Content-CvxJ_sop.js";import{B as o}from"./Button-Da-1LcXr.js";import{A as m}from"./ActionGroup-DmSuXNY0.js";import"./index-nuYtCEEu.js";import"./AlertIcon-D8ErrYA_.js";import"./IconWarning-CUKg7OTE.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BV7e4GQN.js";import"./index-CkiHuacM.js";import"./index-D1oAZySF.js";import"./useLocalizedStringFormatter-tPwVT4HJ.js";import"./context-B3k2yYk7.js";import"./dynamic-BwNG8YI_.js";import"./RSPContexts-v1WzALnr.js";import"./utils-2cwPFhAn.js";import"./Text-hvZATcoQ.js";import"./browser-CwXIoFOI.js";import"./EmulatedBoldText-DedaqQcc.js";import"./LoadingSpinner-BGKVD4AF.js";import"./Button-NNWtmROB.js";import"./ProgressBar-D7qqep5T.js";import"./Hidden-CeFRPKf9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ofK0sPix.js";import"./useFocusable-BOYBZXPk.js";import"./getActionGroupSlot-BtC-t14k.js";import"./useStatic-BbFRD4mD.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
