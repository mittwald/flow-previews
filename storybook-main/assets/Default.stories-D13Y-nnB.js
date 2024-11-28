import{C as r}from"./ColumnLayout-BuKdk97R.js";import{R as e}from"./index-B-o1Wr-g.js";import{T as t}from"./TextField-CHKVa1oe.js";import{L as l}from"./Label-DmbcA-Bx.js";import{A as a}from"./Alert-B--0cfGj.js";import{H as m}from"./Heading-Bn-Oekdv.js";import{S as c}from"./Section-CPo1cU51.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DWb7RnwM.js";import"./index-ynQ6n1pc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextFieldBase-a6T7hk4j.js";import"./FormField.module-D60e0pfz.js";import"./IconApp-BTi5eST8.js";import"./flowComponent-D6-TVbjo.js";import"./index-DolzVqEf.js";import"./IconWarning-fFpik5u2.js";import"./FieldError-CjNivrvv.js";import"./useFocusRing-CTDVvBmm.js";import"./utils-CCebJm36.js";import"./Text-CByKVUtS.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-DUHOTkLn.js";import"./Text-B5qFq-QV.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Form-B_VAMaUE.js";import"./useLabel-DrlXsFf-.js";import"./Input-IHjXEmTc.js";import"./Hidden-CRdWNeH8.js";import"./Label-BFvRcNt5.js";import"./useTextField-EYrZGk_G.js";import"./useFormReset-DMREOE0P.js";import"./useControlledState-BgxdDqm0.js";import"./useFocusable-CjESOWAx.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-1C6j6emi.js";import"./Heading--STTcIhS.js";import"./RSPContexts-BT50PPhj.js";import"./ContextMenu.module-37Y7DEq9.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";const Ee={title:"Structure/ColumnLayout",component:r,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(r,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},o={},u={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(r,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},i={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(r,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},s={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,'Gap size: "s"')),e.createElement(r,{...n,gap:"s"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "m"')),e.createElement(r,{...n,gap:"m"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "l"')),e.createElement(r,{...n,gap:"l"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var p,d,E;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(E=(d=o.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};var L,b,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Section>
      <Alert>
        <Heading>s: [1] (default), m: [2, 1], l: [2, 1] (inherited)</Heading>
      </Alert>
      <ColumnLayout {...props} m={[2, 1]}>
        <TextField>
          <Label>Street</Label>
        </TextField>
        <TextField>
          <Label>House number</Label>
        </TextField>
      </ColumnLayout>
    </Section>
}`,...(F=(b=u.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var x,T,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Section>
      <Alert>
        <Heading>s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]</Heading>
      </Alert>
      <ColumnLayout {...props} s={[2, 1]} m={[3, 2, 1]} l={[4, 3, 2, 1]}>
        <TextField>
          <Label>First name</Label>
        </TextField>
        <TextField>
          <Label>Last name</Label>
        </TextField>
        <TextField>
          <Label>Street</Label>
        </TextField>
        <TextField>
          <Label>House number</Label>
        </TextField>
      </ColumnLayout>
    </Section>
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var H,g,C;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <Section>
      <Alert>
        <Heading>Gap size: "s"</Heading>
      </Alert>
      <ColumnLayout {...props} gap="s">
        <TextField>
          <Label>First name</Label>
        </TextField>
        <TextField>
          <Label>Last name</Label>
        </TextField>
        <TextField>
          <Label>Street</Label>
        </TextField>
        <TextField>
          <Label>House number</Label>
        </TextField>
      </ColumnLayout>
      <Alert>
        <Heading>Gap size: "m"</Heading>
      </Alert>
      <ColumnLayout {...props} gap="m">
        <TextField>
          <Label>First name</Label>
        </TextField>
        <TextField>
          <Label>Last name</Label>
        </TextField>
        <TextField>
          <Label>Street</Label>
        </TextField>
        <TextField>
          <Label>House number</Label>
        </TextField>
      </ColumnLayout>
      <Alert>
        <Heading>Gap size: "l"</Heading>
      </Alert>
      <ColumnLayout {...props} gap="l">
        <TextField>
          <Label>First name</Label>
        </TextField>
        <TextField>
          <Label>Last name</Label>
        </TextField>
        <TextField>
          <Label>Street</Label>
        </TextField>
        <TextField>
          <Label>House number</Label>
        </TextField>
      </ColumnLayout>
    </Section>
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const Le=["Default","CustomValueM","AllCustomValues","Gaps"];export{i as AllCustomValues,u as CustomValueM,o as Default,s as Gaps,Le as __namedExportsOrder,Ee as default};
