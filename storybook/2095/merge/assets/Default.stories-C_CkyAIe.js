import{j as e}from"./iframe-DGdLAJHm.js";import{A as a}from"./Alert-B5fwkZNS.js";import{H as i}from"./Heading-CRDqmGt0.js";import{C as d}from"./Content-BFwogZ0y.js";import{B as n}from"./Button-B6Mqr-fI.js";import{A as m}from"./ActionGroup-CQD4NXmL.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DxCavQbn.js";import"./IconWarning-BY1Q-g8P.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./index-BZginMRh.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./context-CokKTPHD.js";import"./dynamic-DckDcmFh.js";import"./Heading-DVxPUCYC.js";import"./RSPContexts-4eF2sDK2.js";import"./utils-DMxNMt2r.js";import"./Text-DFxon6If.js";import"./browser-DtJMxQoE.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Text-C5DwW8tZ.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-De2YyQVb.js";import"./ProgressBar-NfwVy8TS.js";import"./Label-DCzhvZl0.js";import"./Hidden-DDvTcAlv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B2gRAimw.js";import"./useFocus-Cj45nHC3.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./useStatic-BT4grvBi.js";const Q={title:"Status/Alert",component:a,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},t={render:r=>e.jsx(a,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},s={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(n,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(n,{children:"Update"}),e.jsx(n,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
