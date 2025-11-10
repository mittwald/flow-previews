import{j as e}from"./iframe-D4AGuMnx.js";import{A as n}from"./Alert-DRlhPKAM.js";import{H as i}from"./Heading-BsaQzqWp.js";import{C as d}from"./Content-CrST6Q2Z.js";import{B as o}from"./Button-DtTeM47l.js";import{A as m}from"./ActionGroup-CVIQhVAR.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DIdf3aQ3.js";import"./IconWarning-BC3tK9kj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIyscBzo.js";import"./index-Cd_u2pV_.js";import"./index-DNvdHJqk.js";import"./useLocalizedStringFormatter-BNVQM74q.js";import"./context-Bzk-5tqO.js";import"./dynamic-oZwQWaGw.js";import"./RSPContexts-B4Pxvc-Q.js";import"./utils-CqMmhAxq.js";import"./Text-BtpbrdrH.js";import"./browser-3OZPWisM.js";import"./EmulatedBoldText-IEU2-xTn.js";import"./LoadingSpinner-u-oBwaFl.js";import"./Button-84EHC3SL.js";import"./ProgressBar-_bs3wo-c.js";import"./Hidden-BnByJu4s.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B0_rzNcg.js";import"./useFocusable-qdXI3c9W.js";import"./getActionGroupSlot-y53Ggupv.js";import"./useStatic-CK2cw9Tx.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
