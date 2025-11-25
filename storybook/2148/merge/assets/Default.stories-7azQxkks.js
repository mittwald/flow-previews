import{j as e}from"./iframe-kjkHkmuG.js";import{A as n}from"./Alert-LMEN0RsN.js";import{H as s}from"./Heading-C6qiLJW3.js";import{T as c}from"./Text-D4QcDsPt.js";import{C as m}from"./Content-DOMtlypw.js";import{B as i}from"./Button-B7VtDimI.js";import{A as h}from"./ActionGroup-B72bwf7M.js";import{L as u}from"./LayoutCard-BdOAhJjJ.js";import{S as l}from"./Section-Di6ereWQ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CX0jvCdY.js";import"./IconWarning-CMakOX5C.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CipIzjpW.js";import"./index-CkW5Yidx.js";import"./index-Ce5Nlxxb.js";import"./useLocalizedStringFormatter-CWdDsDMk.js";import"./context-DKZTM6pY.js";import"./dynamic-BmAGjafL.js";import"./RSPContexts-1NZhJNvl.js";import"./utils-uJ4-NNRC.js";import"./browser-i7jAx1Fh.js";import"./EmulatedBoldText-CsxaKUEU.js";import"./LoadingSpinner-CCMWfn-z.js";import"./Button-CPb8XJRj.js";import"./ProgressBar-SgmdiFAI.js";import"./Hidden-C9LFy0Lp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CunmVmWl.js";import"./useFocusable-DMxxipCc.js";import"./context-DelhS3-G.js";import"./Collection-BGAg5cVl.js";import"./CollectionBuilder-C24jMLh-.js";import"./SelectionIndicator-2ey5txuw.js";import"./Separator-_AMhP75A.js";import"./useStatic-BQelcXwM.js";const Z={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},a={render:r=>e.jsx(n,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(i,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(i,{children:"Update"}),e.jsx(i,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},d={render:r=>e.jsxs(u,{children:[e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Email address"}),e.jsx(c,{children:p.long})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(c,{children:p.long})]})]}),globals:{backgrounds:"dark"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
