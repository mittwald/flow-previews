import{j as e}from"./iframe-BfTJ8OoU.js";import{A as n,L as h}from"./Alert-CFx8_uD8.js";import{H as s}from"./Heading-C_Cd2XWG.js";import{T as c}from"./Text-ChPpwgcs.js";import{C as m}from"./Content-BbEJXFUy.js";import{B as i}from"./Button-CAnEum-p.js";import{A as u}from"./ActionGroup-BXvzv2B4.js";import{S as l}from"./Section-ieM08Mfc.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./AlertIcon-Bk9PFIDr.js";import"./IconWarning-CnDmU8KM.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./context-DfwvGs8v.js";import"./dynamic-BLLy2Odl.js";import"./RSPContexts-B_hP9IPu.js";import"./utils-CAkX6XFC.js";import"./browser-_NOMM9Cq.js";import"./EmulatedBoldText-Do8p-rFi.js";import"./LoadingSpinner-CDSlajDH.js";import"./Button-v46gVvAB.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./context-DqfyIwOm.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./useStatic-DZbTJ5BB.js";const Y={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},a={render:r=>e.jsx(n,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(i,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(u,{children:[e.jsx(i,{children:"Update"}),e.jsx(i,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},d={render:r=>e.jsxs(h,{children:[e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Email address"}),e.jsx(c,{children:p.long})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(c,{children:p.long})]})]}),globals:{backgrounds:"dark"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
    </Alert>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
        <Button>Update email address</Button>
      </Content>
    </Alert>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <LayoutCard>
      <Alert {...props}>
        <Heading>Email address has been archived</Heading>
        <Content>
          As your domain has been deleted, this email address has been archived.
          To be able to send and receive emails, you must rename the address.
        </Content>
      </Alert>
      <Section>
        <Heading>Email address</Heading>
        <Text>{dummyText.long}</Text>
      </Section>
      <Section>
        <Heading>Spam protection</Heading>
        <Text>{dummyText.long}</Text>
      </Section>
    </LayoutCard>,
  globals: {
    backgrounds: "dark"
  }
}`,...d.parameters?.docs?.source}}};const Z=["Default","WithContent","WithActionGroup","AboveSections"];export{d as AboveSections,a as Default,o as WithActionGroup,t as WithContent,Z as __namedExportsOrder,Y as default};
