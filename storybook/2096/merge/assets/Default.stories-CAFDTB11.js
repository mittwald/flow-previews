import{j as e}from"./iframe-Tz0J7D4Y.js";import{A as a}from"./Alert-DqB19IgY.js";import{H as i}from"./Heading-BX6R3J-D.js";import{C as d}from"./Content-ChPaHqfU.js";import{B as n}from"./Button-DpdNCW8h.js";import{A as m}from"./ActionGroup-B5YBX1jR.js";import"./index-nuYtCEEu.js";import"./AlertIcon-b1gPnXMX.js";import"./IconWarning-GPTcuJJ8.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./index-DcQDRvJj.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./context-B1lt5Uf-.js";import"./dynamic-CoftMrEe.js";import"./Heading-BOPXGrjC.js";import"./RSPContexts-DMflUE_X.js";import"./utils-ja91N2Nx.js";import"./Text-C3A_eB8w.js";import"./browser-D-jX3MAX.js";import"./EmulatedBoldText-BtDnNRTP.js";import"./Text-c129sBMT.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BC9SKpFI.js";import"./ProgressBar-netLLnC9.js";import"./Label-CPyZQCy0.js";import"./Hidden-DjVegiGf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Uehxuchb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dhdcn6rN.js";import"./useFocus-rnV-N6wP.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocusable-CEtDZmZ1.js";import"./getActionGroupSlot-DlZypVxI.js";import"./useStatic-BDAMVNvv.js";const Q={title:"Status/Alert",component:a,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},t={render:r=>e.jsx(a,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},s={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(n,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(n,{children:"Update"}),e.jsx(n,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
