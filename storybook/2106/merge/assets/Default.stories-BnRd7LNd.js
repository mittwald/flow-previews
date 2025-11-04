import{j as e}from"./iframe-oci4ptrj.js";import{A as n}from"./Alert-CAKY88Nb.js";import{H as i}from"./Heading-C66T-W7d.js";import{C as d}from"./Content-Bcd3Dcbz.js";import{B as o}from"./Button-eO-ASnyK.js";import{A as m}from"./ActionGroup-BCSCA9xU.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CnQ2e6rw.js";import"./IconWarning-DHgEivld.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C2w89MO3.js";import"./index-DzNagtAD.js";import"./index-BOV_kcUj.js";import"./useLocalizedStringFormatter-d3uviZeO.js";import"./context-DcUd--Pd.js";import"./dynamic-Bjr85D4p.js";import"./RSPContexts-Ba4NKIWK.js";import"./utils-BqyPjKLh.js";import"./Text-BC4L9_-c.js";import"./browser-CA-_dWQR.js";import"./EmulatedBoldText-DLGY6dL5.js";import"./LoadingSpinner-Ce9YNblG.js";import"./Button-KMwH7pyb.js";import"./ProgressBar-BWGxJHnn.js";import"./Hidden-BTg-KeYM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-GHPD41Xj.js";import"./useFocusable-Dp9h7abG.js";import"./getActionGroupSlot-DN_BwUZY.js";import"./useStatic-Dg5syQGi.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
