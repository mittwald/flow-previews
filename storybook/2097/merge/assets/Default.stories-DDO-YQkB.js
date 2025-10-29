import{j as e}from"./iframe-9LT5pwxo.js";import{A as a}from"./Alert-Cp1x8pnT.js";import{H as i}from"./Heading-CsMeNISd.js";import{C as d}from"./Content-B3h9p_Zt.js";import{B as n}from"./Button-DgX4Ha9j.js";import{A as m}from"./ActionGroup-DkE81dC5.js";import"./index-nuYtCEEu.js";import"./AlertIcon-B-xh6-5s.js";import"./IconWarning-BGmK8I3p.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./index-B4OxUaac.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./context-CZZdPtMN.js";import"./dynamic-Dp02ioFc.js";import"./Heading-BdTxNxt3.js";import"./RSPContexts-D4jozd1E.js";import"./utils-C12iYS2x.js";import"./Text-FZjxGLxv.js";import"./browser-Be7wxfSs.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Text-cT0V7Crl.js";import"./LoadingSpinner-7jpPXpdG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BRQOtLOr.js";import"./ProgressBar-DUkmnmeC.js";import"./Label-B9A8CQ6N.js";import"./Hidden-Dc5yMvqI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D0_ysNiP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CYkWbbQS.js";import"./useFocus-CGIGFm0L.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocusable-6Pd0pdJi.js";import"./getActionGroupSlot-BSebOatG.js";import"./useStatic-C20s3RtG.js";const Q={title:"Status/Alert",component:a,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},t={render:r=>e.jsx(a,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},s={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(n,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(n,{children:"Update"}),e.jsx(n,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
