import{C as o}from"./ColumnLayout-B78AueES.js";import{R as e}from"./index-uCp2LrAq.js";import{T as t}from"./TextField-DSQ6uq1G.js";import{L as l}from"./Label-BY3EaM6R.js";import{I as u}from"./InlineAlert-HAY4mJyK.js";import{H as i}from"./Heading-B4aimG7t.js";import{S as s}from"./Section-T1sW0Q56.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-DJyBvsbU.js";import"./FormField.module-DLyvTZxu.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./IconApp-CYLgAyW6.js";import"./flowComponent-BTm_-Ap-.js";import"./index-BOkhicXD.js";import"./IconWarning-BMz2Im20.js";import"./Form-BOwpWbru.js";import"./useFocusable-DpEA8Hsr.js";import"./utils-DZgOXw50.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-D6Zjnbf0.js";import"./Input-AN0YuBj3.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BQk6lJ-q.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./StatusIcon-tZPfpmmR.js";import"./RSPContexts-CJnKmcd7.js";import"./Activity-Ck-RMSDT.js";const Z={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(s,null,e.createElement(u,null,e.createElement(i,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},r={},a={render:n=>e.createElement(s,null,e.createElement(u,null,e.createElement(i,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},m={render:n=>e.createElement(s,null,e.createElement(u,null,e.createElement(i,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(L=a.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var x,F,f;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(F=m.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const $=["Default","CustomValueM","AllCustomValues"];export{m as AllCustomValues,a as CustomValueM,r as Default,$ as __namedExportsOrder,Z as default};
