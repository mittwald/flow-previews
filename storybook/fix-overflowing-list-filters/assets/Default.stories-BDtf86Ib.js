import{C as r}from"./ColumnLayout-BGHswle4.js";import{R as e}from"./index-Cs7sjTYM.js";import{T as l}from"./TextField-D2LvcAO0.js";import{L as t}from"./Label-B95_EtR8.js";import{I as a}from"./InlineAlert-CA2WnmVd.js";import{H as m}from"./Heading-DhSqWfdk.js";import{S as c}from"./Section-BrNw2ZwX.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-ZdNv-NfM.js";import"./FormField.module-DKr-bq5L.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./IconApp-BOae6dD3.js";import"./flowComponent-D7ioKQ_2.js";import"./index-Cf-03bMR.js";import"./IconWarning-DMnbQijb.js";import"./Form-Ds7Vg32t.js";import"./useFocusRing-CRCkdtud.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./utils-Bcr9fq-m.js";import"./Text-KzcdCwWD.js";import"./FieldDescription-Zt0u1cSn.js";import"./Text-rn9R6Aq3.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Input-DCO5aFG7.js";import"./Hidden-DMUPAT4b.js";import"./Label-D_v1lLm2.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-BTDyoD38.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./useFocusable-B6dIjavV.js";import"./StatusIcon-Bu8Ld5YB.js";import"./Heading-CS0RTEE1.js";import"./RSPContexts-BseA8goh.js";import"./Activity-CPnWONG0.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BSVICx61.js";import"./CollectionBuilder-C1pJ_vaJ.js";import"./Header-R7RwfTAD.js";const Ee={title:"Structure/ColumnLayout",component:r,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(r,{...n},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))))},o={},i={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(r,{...n,m:[2,1]},e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))))},u={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(r,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))))},s={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,'Gap size: "s"')),e.createElement(r,{...n,gap:"s"},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "m"')),e.createElement(r,{...n,gap:"m"},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "l"')),e.createElement(r,{...n,gap:"l"},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))))};var p,d,E;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(E=(d=o.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};var L,b,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Section>
      <InlineAlert>
        <Heading>s: [1] (default), m: [2, 1], l: [2, 1] (inherited)</Heading>
      </InlineAlert>
      <ColumnLayout {...props} m={[2, 1]}>
        <TextField>
          <Label>Street</Label>
        </TextField>
        <TextField>
          <Label>House number</Label>
        </TextField>
      </ColumnLayout>
    </Section>
}`,...(F=(b=i.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var x,T,S;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Section>
      <InlineAlert>
        <Heading>s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]</Heading>
      </InlineAlert>
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
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var H,g,C;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <Section>
      <InlineAlert>
        <Heading>Gap size: "s"</Heading>
      </InlineAlert>
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
      <InlineAlert>
        <Heading>Gap size: "m"</Heading>
      </InlineAlert>
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
      <InlineAlert>
        <Heading>Gap size: "l"</Heading>
      </InlineAlert>
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
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const Le=["Default","CustomValueM","AllCustomValues","Gaps"];export{u as AllCustomValues,i as CustomValueM,o as Default,s as Gaps,Le as __namedExportsOrder,Ee as default};
