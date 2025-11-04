import{j as e}from"./iframe-CRkLAjqu.js";import{A as n}from"./Alert-P7MV_jtv.js";import{H as i}from"./Heading-y35Y4q5x.js";import{C as d}from"./Content-RElVSMrp.js";import{B as o}from"./Button-iYH795Vf.js";import{A as m}from"./ActionGroup-BFn71X1Q.js";import"./index-nuYtCEEu.js";import"./AlertIcon-pJx2ML-T.js";import"./IconWarning-4dYG6Emm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DkSEV7yV.js";import"./index-DwXT3Bgk.js";import"./index-CMjPCm5R.js";import"./useLocalizedStringFormatter-lA2Sw6DW.js";import"./context-DLoU3qmJ.js";import"./dynamic-C-Z2ndaa.js";import"./RSPContexts-Bb59CEQZ.js";import"./utils-BtHHKbwG.js";import"./Text-SnGLDLtK.js";import"./browser-C4srWScu.js";import"./EmulatedBoldText-UBCiYBJN.js";import"./LoadingSpinner-DRDb2q6e.js";import"./Button-CPrLpUny.js";import"./ProgressBar-N5kov_o0.js";import"./Hidden-PDlBagOD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-PsHB6P7A.js";import"./useFocusable-ybZYv2TC.js";import"./getActionGroupSlot-D4mouN9v.js";import"./useStatic-CAsZlBox.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
