import{C as o}from"./ColumnLayout-B78AueES.js";import{R as e}from"./index-uCp2LrAq.js";import{T as t}from"./TextField-D9qGeHXk.js";import{L as l}from"./Label-Dj7FCTIi.js";import{I as u}from"./InlineAlert-CdMeh_t0.js";import{H as i}from"./Heading-yRmJ4OM8.js";import{S as s}from"./Section-CCAXujHi.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-DEQfgtuS.js";import"./FormField.module-CYbc3W13.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./IconApp-CJl9NOSQ.js";import"./flowComponent-ICaMEJBy.js";import"./index-BOkhicXD.js";import"./IconWarning-BVHxHP_W.js";import"./Form-BOwpWbru.js";import"./useFocusable-DpEA8Hsr.js";import"./utils-DZgOXw50.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-D6Zjnbf0.js";import"./FieldDescription-CBfQUxcO.js";import"./Text-D2IU3xaq.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Input-AN0YuBj3.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BQk6lJ-q.js";import"./StatusIcon-BSViOm-4.js";import"./RSPContexts-CJnKmcd7.js";import"./Activity-Ck-RMSDT.js";const le={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:r=>e.createElement(s,null,e.createElement(u,null,e.createElement(i,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...r},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},n={},m={render:r=>e.createElement(s,null,e.createElement(u,null,e.createElement(i,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...r,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:r=>e.createElement(s,null,e.createElement(u,null,e.createElement(i,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...r,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(L=m.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var x,F,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(F=a.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const re=["Default","CustomValueM","AllCustomValues"];export{a as AllCustomValues,m as CustomValueM,n as Default,re as __namedExportsOrder,le as default};
