import{j as e}from"./iframe-DjMRZ933.js";import{A as n}from"./Alert-BcobEuUM.js";import{H as i}from"./Heading-BgHZ1ILD.js";import{C as d}from"./Content-Bcc-jBqm.js";import{B as o}from"./Button-DcZikGPu.js";import{A as m}from"./ActionGroup-7rrFpHFJ.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DmCm2LWR.js";import"./IconWarning-15BQJDPi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dfc22Cns.js";import"./mergeRefs-ktNCKXcN.js";import"./index-CdoC4W9G.js";import"./useLocalizedStringFormatter-D2Pb0dlM.js";import"./context-CMNm5Xu1.js";import"./dynamic-xmc70gpV.js";import"./RSPContexts-xVWKxYWV.js";import"./utils-ChD4yM7Z.js";import"./Text-HqedTJ3_.js";import"./browser-CRatz6fZ.js";import"./EmulatedBoldText-B3brdLrg.js";import"./LoadingSpinner-fSHKWhSv.js";import"./Button-CVSjku2L.js";import"./ProgressBar-B_WWkX7i.js";import"./Hidden-C2WyT6w-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CsWAde4M.js";import"./useFocusable-DMUCbXde.js";import"./getActionGroupSlot-CJeZWLnB.js";import"./useStatic-CBLHZfUJ.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
