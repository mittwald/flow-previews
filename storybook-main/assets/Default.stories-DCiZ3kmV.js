import{j as e}from"./iframe-Cn_Uksv1.js";import{A as n}from"./Alert-CTEBmpK4.js";import{H as i}from"./Heading-BQmLpAQ1.js";import{C as d}from"./Content-BOlga6nV.js";import{B as o}from"./Button-uqtApCO2.js";import{A as m}from"./ActionGroup-UNAE9QI0.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CsVXI5gr.js";import"./IconWarning-ktzgJVul.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoFR225t.js";import"./index-BOejRIbk.js";import"./index-C0zdnCAL.js";import"./useLocalizedStringFormatter-m-f5OqYO.js";import"./context-B2OLF-YE.js";import"./dynamic-DNsdEAu1.js";import"./RSPContexts-CKwSRM_H.js";import"./utils-B-f9gd93.js";import"./Text-D6EVKQHX.js";import"./browser-BnRg_GS1.js";import"./EmulatedBoldText-CxLJaoXr.js";import"./LoadingSpinner-DSg47w65.js";import"./Button-FEoS725w.js";import"./ProgressBar-DsWps5dj.js";import"./Hidden-BL9AL94n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DLygjq4p.js";import"./useFocusable-DAjGW8_c.js";import"./getActionGroupSlot-DY0CPGpV.js";import"./useStatic-CJPRi5oj.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
