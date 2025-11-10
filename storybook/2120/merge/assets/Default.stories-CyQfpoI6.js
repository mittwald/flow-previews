import{j as e}from"./iframe-DVp3wyW8.js";import{A as n}from"./Alert-CEm4e_SW.js";import{H as i}from"./Heading-VOEAcbBw.js";import{C as d}from"./Content-O95-U-Qr.js";import{B as o}from"./Button-BGy_040K.js";import{A as m}from"./ActionGroup-pi-cPFOK.js";import"./index-nuYtCEEu.js";import"./AlertIcon-C0fW6UTj.js";import"./IconWarning-btspmSaz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DOD6KTqp.js";import"./index-CSWZRCbA.js";import"./index-CnZiUiqa.js";import"./useLocalizedStringFormatter-BDNlhScJ.js";import"./context-BTkZkFrl.js";import"./dynamic-DGFrs7WZ.js";import"./RSPContexts-CQ8PUfHG.js";import"./utils-CK_bkg3x.js";import"./Text-x2NLhZ_6.js";import"./browser-qRiPvlbV.js";import"./EmulatedBoldText-CHhmc0Op.js";import"./LoadingSpinner-BvAyWbCS.js";import"./Button-ComzTzlH.js";import"./ProgressBar-BEtx-YzR.js";import"./Hidden-QjALVdSt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Drt37fC5.js";import"./useFocusable-CbEG4JhP.js";import"./getActionGroupSlot-D9iU03Oh.js";import"./useStatic-INcP8lHW.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
