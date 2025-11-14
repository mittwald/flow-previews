import{j as e}from"./iframe-C60aMdie.js";import{A as n}from"./Alert-BJKw0QeS.js";import{H as i}from"./Heading-DAaBZvd2.js";import{C as d}from"./Content-CEAhgMHe.js";import{B as o}from"./Button-jX--b59C.js";import{A as m}from"./ActionGroup-pA_bsRMT.js";import"./index-nuYtCEEu.js";import"./AlertIcon-C7zTMkoz.js";import"./IconWarning-B5fkZC-l.js";import"./clsx-B-dksMZM.js";import"./flowComponent-jCG2SJhp.js";import"./index-my9L9zM2.js";import"./index-CLR1PkMI.js";import"./useLocalizedStringFormatter-CwhdRj3j.js";import"./context-CbOMBxRf.js";import"./dynamic-CVq1BkmJ.js";import"./RSPContexts-DTGtZjZs.js";import"./utils-BQFwVYY5.js";import"./Text-SUPQTMUT.js";import"./browser-CNA-G9XW.js";import"./EmulatedBoldText-gDNBGAzw.js";import"./LoadingSpinner-EerxDvmb.js";import"./Button-CvbHAn2i.js";import"./ProgressBar-B_mDm1JC.js";import"./Hidden-BZIUhw-w.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DC3IjPh5.js";import"./useFocusable-Dew49z7P.js";import"./getActionGroupSlot-CdLyQOZc.js";import"./useStatic-vNm-dgAB.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
