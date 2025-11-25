import{j as e}from"./iframe-ChXgWPPC.js";import{A as n}from"./Alert-BVyhkX9T.js";import{H as s}from"./Heading-DMHDZ_u6.js";import{T as c}from"./Text-B34O2ICL.js";import{C as m}from"./Content-BASnjacW.js";import{B as i}from"./Button-DdSGnULn.js";import{A as h}from"./ActionGroup-BMrZFOui.js";import{L as u}from"./LayoutCard-CyxN8E7I.js";import{S as l}from"./Section-EbTwCLIg.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DTTgmXrL.js";import"./IconWarning-BNdWvzeJ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DLnOhNG7.js";import"./index-BEhDMpqQ.js";import"./index-CUhsAGa6.js";import"./useLocalizedStringFormatter-6uEz2p-j.js";import"./context-29WSV5fn.js";import"./dynamic-nfc0SAk9.js";import"./RSPContexts-T2aOxEw5.js";import"./utils-DiB9MypO.js";import"./browser-DjrPe_WT.js";import"./EmulatedBoldText-BEs_gMjx.js";import"./LoadingSpinner-K2z7KZMw.js";import"./Button-DACNP5IV.js";import"./ProgressBar-Cav1e1WF.js";import"./Hidden-DouN_7bs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CVyMmbQQ.js";import"./useFocusable-CRhE58ZF.js";import"./context-7RM43Tkb.js";import"./Collection-TEOU7cw3.js";import"./CollectionBuilder-CTYVMSyP.js";import"./SelectionIndicator-C4aBFtUw.js";import"./Separator-Dg3iBkBi.js";import"./useStatic-DmmsCa0X.js";const Z={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},a={render:r=>e.jsx(n,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(i,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(i,{children:"Update"}),e.jsx(i,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},d={render:r=>e.jsxs(u,{children:[e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Email address"}),e.jsx(c,{children:p.long})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(c,{children:p.long})]})]}),globals:{backgrounds:"dark"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const $=["Default","WithContent","WithActionGroup","AboveSections"];export{d as AboveSections,a as Default,o as WithActionGroup,t as WithContent,$ as __namedExportsOrder,Z as default};
