import{j as e}from"./iframe-CgbY7LhW.js";import{A as n}from"./Alert-B_kIhVrI.js";import{H as s}from"./Heading-B5jO-5Wf.js";import{T as c}from"./Text-DYTEpYR_.js";import{C as m}from"./Content-CEEnoGhP.js";import{B as i}from"./Button-SVEMHQlh.js";import{A as h}from"./ActionGroup-CmB_jI0r.js";import{L as u}from"./LayoutCard-vyJIg7vB.js";import{S as l}from"./Section-vgTzgtmS.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DNdzJj2o.js";import"./IconWarning-B_M4h9wv.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CIzRpviz.js";import"./index-DzXy7NVI.js";import"./index-BGPntLpu.js";import"./useLocalizedStringFormatter-n70-9iPv.js";import"./context-CFrKoiSq.js";import"./dynamic-BL-wVa7i.js";import"./RSPContexts-a1gWmxyS.js";import"./utils-CrtKH5yx.js";import"./browser-B9s1Wzc0.js";import"./EmulatedBoldText-B0grik2o.js";import"./LoadingSpinner-D5GUeRWw.js";import"./Button-B3Gd0dhU.js";import"./ProgressBar-DkKo9kM8.js";import"./Hidden-C39TrB4S.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BLRAUViD.js";import"./useFocusable-CK20RdZz.js";import"./context-BZ4nmd66.js";import"./Collection-AJHavNni.js";import"./CollectionBuilder-vSLB7roW.js";import"./SelectionIndicator-DAnIk2iR.js";import"./Separator-Dbfv1-4R.js";import"./useStatic-DAnqOhq-.js";const Z={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},a={render:r=>e.jsx(n,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(i,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(i,{children:"Update"}),e.jsx(i,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},d={render:r=>e.jsxs(u,{children:[e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Email address"}),e.jsx(c,{children:p.long})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(c,{children:p.long})]})]}),globals:{backgrounds:"dark"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
