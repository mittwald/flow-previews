import{j as e}from"./iframe-DxwcgvDR.js";import{A as n}from"./Alert-dpgOlODz.js";import{H as i}from"./Heading-DPk654Hf.js";import{C as d}from"./Content-CvN0_ss6.js";import{B as o}from"./Button-DpmT-Qin.js";import{A as m}from"./ActionGroup-DAojqoGf.js";import"./index-nuYtCEEu.js";import"./AlertIcon-B3A4X_sK.js";import"./IconWarning-CXkzDcrG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9gZXDBr.js";import"./index-Hde59aEk.js";import"./index-BbnRfAJ3.js";import"./useLocalizedStringFormatter-DgjeZvep.js";import"./context-CGBA4dD2.js";import"./dynamic-BXIRoUAY.js";import"./RSPContexts-C4NdBiWw.js";import"./utils-n6_FFOiQ.js";import"./Text-0mdbe7by.js";import"./browser-Cqe1LxfT.js";import"./EmulatedBoldText-Bkaq8qYh.js";import"./LoadingSpinner-BQdOHNHu.js";import"./Button-DnBmTQ11.js";import"./ProgressBar-BcO4kXd3.js";import"./Hidden-Dz5WTy5W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CNIgQMUD.js";import"./useFocusable-CfD6tvJl.js";import"./getActionGroupSlot-DtMTeAyj.js";import"./useStatic-CjurL4ph.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
