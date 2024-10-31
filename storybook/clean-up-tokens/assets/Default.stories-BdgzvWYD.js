import{C as r}from"./ColumnLayout-BGHswle4.js";import{R as e}from"./index-Cs7sjTYM.js";import{T as t}from"./TextField-DhjMVM_2.js";import{L as l}from"./Label-Caz8bPl_.js";import{A as a}from"./Alert-hoWA5CCZ.js";import{H as m}from"./Heading-HreUFEA3.js";import{S as c}from"./Section-Da5IeeDg.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-C-B6CBMZ.js";import"./FormField.module-D9W6fCI1.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./IconApp-Cq7w81Gv.js";import"./flowComponent-aK1NJH1f.js";import"./index-Cf-03bMR.js";import"./IconWarning-CJaqzhMN.js";import"./FieldError-C27s8X8S.js";import"./utils-Cd8r7pc9.js";import"./Text-Bnjm0IRl.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-Cgk00Q-U.js";import"./Text-34Ntf1C-.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Form-CN49erGr.js";import"./useFocusRing-CqFdZJbR.js";import"./useLabel-BA8WH6BO.js";import"./Input-DQOx7cuX.js";import"./Hidden-C2kgQquV.js";import"./Label-C-iBdzH7.js";import"./useTextField-C7hRpfYI.js";import"./useFormReset-BmVKDtZT.js";import"./useControlledState-B7K2eYzO.js";import"./useFocusable-CKybZYMg.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-D8awVa0f.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";const Ee={title:"Structure/ColumnLayout",component:r,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(r,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},o={},u={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(r,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},i={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(r,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},s={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,'Gap size: "s"')),e.createElement(r,{...n,gap:"s"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "m"')),e.createElement(r,{...n,gap:"m"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "l"')),e.createElement(r,{...n,gap:"l"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var p,d,E;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(E=(d=o.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};var L,b,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
