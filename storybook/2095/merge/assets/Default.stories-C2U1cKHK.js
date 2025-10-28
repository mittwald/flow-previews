import{j as e}from"./iframe-BYlM8TfH.js";import{A as a}from"./Alert-BKWME3b6.js";import{H as i}from"./Heading-CurQq7EL.js";import{C as d}from"./Content-B9Uvl7Ur.js";import{B as n}from"./Button-DrjwoUCb.js";import{A as m}from"./ActionGroup-D2zlXLO9.js";import"./index-nuYtCEEu.js";import"./AlertIcon-BJeOeOP1.js";import"./IconWarning-WQ4wo7kP.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./index-BpRuSIpR.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./context-BxRqKeiD.js";import"./dynamic-BhGDraHV.js";import"./Heading-BrhKeiNO.js";import"./RSPContexts-BeeOgZFj.js";import"./utils-BDqIfUE7.js";import"./Text-ZBSxG77c.js";import"./browser-D2sPcOVM.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./Text-Dc8La0ek.js";import"./LoadingSpinner-CqJPIXvI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmIa1mS-.js";import"./ProgressBar--do5EHZn.js";import"./Label-COiWxsLa.js";import"./Hidden-CSqzjE-Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-IFSjtkUu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kOJVCjd_.js";import"./useFocus-B9vfYs8K.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocusable-SxOERRg1.js";import"./getActionGroupSlot-nR5vf13o.js";import"./useStatic-6sdTMqO6.js";const Q={title:"Status/Alert",component:a,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},t={render:r=>e.jsx(a,{...r,children:e.jsx(i,{children:"Email address has been archived"})})},s={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(n,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsxs(d,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(m,{children:[e.jsx(n,{children:"Update"}),e.jsx(n,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
