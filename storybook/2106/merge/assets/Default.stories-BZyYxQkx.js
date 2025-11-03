import{j as e}from"./iframe-Cvytdoxw.js";import{A as n}from"./Alert-CR-srYX8.js";import{H as i}from"./Heading-CmmEit1O.js";import{C as d}from"./Content-CqmkYIyJ.js";import{B as o}from"./Button-Cr3d2kpx.js";import{A as m}from"./ActionGroup-D9Rk5LUe.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CukGBwNm.js";import"./IconWarning-DXcNdK9V.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BakvHPDm.js";import"./index-D8rYYAP0.js";import"./index-CTthHXbC.js";import"./useLocalizedStringFormatter-Bip3mv8b.js";import"./context-Cn_ZHjoc.js";import"./dynamic-BZ_eTWTP.js";import"./RSPContexts-Cd4dinro.js";import"./utils-cle9p6h6.js";import"./Text-DIznXbTR.js";import"./browser-DEx-HDtZ.js";import"./EmulatedBoldText-D3YXTSUL.js";import"./LoadingSpinner-DkHZrmVz.js";import"./Button-B_aqk9rc.js";import"./ProgressBar-Ba3c9wf0.js";import"./Hidden-C4KiavwU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DUuUR0t2.js";import"./useFocusable-suhCImuH.js";import"./getActionGroupSlot-CmO7nmQr.js";import"./useStatic-Dta6Atim.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
