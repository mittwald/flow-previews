import{C as r}from"./ColumnLayout-BGHswle4.js";import{R as e}from"./index-Cs7sjTYM.js";import{T as l}from"./TextField-CMeKVKVs.js";import{L as t}from"./Label-CO5M3hOC.js";import{I as a}from"./InlineAlert-bC3b3kgz.js";import{H as m}from"./Heading-DX7WZ0dZ.js";import{S as c}from"./Section-Bl0rsqTn.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-B8519rlc.js";import"./FormField.module-wrv9k4jB.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./IconApp-cbKfffKH.js";import"./flowComponent-DyesJS-l.js";import"./index-BU4L-DQy.js";import"./IconWarning-BmXw-fb5.js";import"./Form-DAtDAkn6.js";import"./useFocusable-DdFCD-YN.js";import"./utils-CgpzwoFP.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Text-BgIWd_-0.js";import"./FieldDescription-DYyg7ms0.js";import"./Text-CznU2Vxk.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Input-BPUwJsxH.js";import"./Hidden-BsXGu--s.js";import"./Label-BRZ8BO2K.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-8-06sg4o.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./StatusIcon-BLhet5uR.js";import"./Heading-2-efPYe9.js";import"./RSPContexts-BseA8goh.js";import"./Activity-CPnWONG0.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./Header-8TqMsGve.js";const de={title:"Structure/ColumnLayout",component:r,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(r,{...n},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))))},o={},i={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(r,{...n,m:[2,1]},e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))))},u={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(r,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))))},s={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,'Gap size: "s"')),e.createElement(r,{...n,gap:"s"},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "m"')),e.createElement(r,{...n,gap:"m"},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "l"')),e.createElement(r,{...n,gap:"l"},e.createElement(l,null,e.createElement(t,null,"First name")),e.createElement(l,null,e.createElement(t,null,"Last name")),e.createElement(l,null,e.createElement(t,null,"Street")),e.createElement(l,null,e.createElement(t,null,"House number"))))};var p,d,E;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(E=(d=o.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};var L,b,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const Ee=["Default","CustomValueM","AllCustomValues","Gaps"];export{u as AllCustomValues,i as CustomValueM,o as Default,s as Gaps,Ee as __namedExportsOrder,de as default};
