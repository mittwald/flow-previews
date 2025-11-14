import{j as e}from"./iframe-tJv_x5rY.js";import{A as n}from"./Alert-BSKDhqn2.js";import{H as i}from"./Heading-DBV7hltH.js";import{C as d}from"./Content-B6i-pyoJ.js";import{B as o}from"./Button-BFrhyxcx.js";import{A as m}from"./ActionGroup-ofmp5p0b.js";import"./index-nuYtCEEu.js";import"./AlertIcon-BmIRgy9X.js";import"./IconWarning-3nJf9pka.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BVSszHbm.js";import"./index-CMtXtWIZ.js";import"./index-zslH_nwp.js";import"./useLocalizedStringFormatter-CiAHydpr.js";import"./context-DzrJfCbv.js";import"./dynamic-D0IhEVDX.js";import"./RSPContexts-B20KOh4s.js";import"./utils-CzbxkoY8.js";import"./Text-Dguu0ahS.js";import"./browser-TdwBVE6G.js";import"./EmulatedBoldText-BtPGtFYn.js";import"./LoadingSpinner-Bcrzivl8.js";import"./Button-DANMsRvu.js";import"./ProgressBar-DMZ3QrgP.js";import"./Hidden-CHKvPT1V.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Dd-6aCTP.js";import"./useFocusable-Cd_sv4rm.js";import"./getActionGroupSlot-Bx9-2150.js";import"./useStatic-ChHmkVJf.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
