import{j as e}from"./iframe-Dld40DlB.js";import{A as n}from"./Alert-CVS5nIOt.js";import{H as i}from"./Heading-BAwA_6k1.js";import{C as d}from"./Content-DhIy2dEF.js";import{B as o}from"./Button-DIo8wcxN.js";import{A as m}from"./ActionGroup-BphLBlE9.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CxtEeq0v.js";import"./IconWarning-Bslq8B7t.js";import"./clsx-B-dksMZM.js";import"./flowComponent-g3olMzzw.js";import"./index-Dshvly-6.js";import"./index-CruVUoMH.js";import"./useLocalizedStringFormatter-BddSeuov.js";import"./context-CvXLvg4O.js";import"./dynamic-DLhXud-a.js";import"./RSPContexts-DRmXF-Vp.js";import"./utils-D4Q7WLr3.js";import"./Text-TesoHDfv.js";import"./browser-bPFV2Ji3.js";import"./EmulatedBoldText-Df4Xti5W.js";import"./LoadingSpinner-C26eHY8y.js";import"./Button-rvCZddFR.js";import"./ProgressBar-A7FXjRZm.js";import"./Hidden-CiXaNdIj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BAtU7oif.js";import"./useFocusable-BrkdujEf.js";import"./getActionGroupSlot-DKSLC32H.js";import"./useStatic-C-DsDLNz.js";const F={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},s={render:r=>e.jsx(n,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(o,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(o,{children:"Update"}),e.jsx(o,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
