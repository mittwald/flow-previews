import{j as e}from"./iframe-BGRRgBVS.js";import{A as n}from"./Alert-DZ3SaNfX.js";import{H as s}from"./Heading-Cumb0HFc.js";import{T as c}from"./Text-DzPdDmfA.js";import{C as m}from"./Content-WUqaR34u.js";import{B as i}from"./Button-DE3NXKd3.js";import{A as h}from"./ActionGroup-J5J8sMqL.js";import{L as u}from"./LayoutCard-BYw3vf8Y.js";import{S as l}from"./Section-CxYjgLxV.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DXcBlIQl.js";import"./IconWarning-H-qi_LLu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DxP1iS0K.js";import"./index-BZgSK6Sm.js";import"./index-BMa1Nvcv.js";import"./useLocalizedStringFormatter-q3-eKfRR.js";import"./context-u16jW8Lq.js";import"./dynamic-BLodhe7F.js";import"./RSPContexts-DYF8VjHX.js";import"./utils-Csx1o_4e.js";import"./browser-ClmblGlM.js";import"./EmulatedBoldText-DrL9qLDd.js";import"./LoadingSpinner-uAo8ll_j.js";import"./Button-BqwVNYKG.js";import"./ProgressBar-DH5v7dhL.js";import"./Hidden-BonuGHXz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DfB0I3XE.js";import"./useFocusable-DNKvZOnB.js";import"./context-BRtiiBiN.js";import"./Collection-CVup-l4E.js";import"./CollectionBuilder-VI38YI2I.js";import"./SelectionIndicator-C9TSpSC8.js";import"./Separator-BlumgMKZ.js";import"./useStatic-CZqew5Ty.js";const Z={title:"Status/Alert",component:n,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},a={render:r=>e.jsx(n,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(i,{children:"Update email address"})]})]})},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(i,{children:"Update"}),e.jsx(i,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},d={render:r=>e.jsxs(u,{children:[e.jsxs(n,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Email address"}),e.jsx(c,{children:p.long})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(c,{children:p.long})]})]}),globals:{backgrounds:"dark"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
