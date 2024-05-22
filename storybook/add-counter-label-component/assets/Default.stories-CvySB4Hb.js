import{C as o}from"./ColumnLayout-B78AueES.js";import{R as e}from"./index-uCp2LrAq.js";import{T as t}from"./TextField-C0-hKnbT.js";import{L as l}from"./Label-DvKf7Vpa.js";import{I as u}from"./InlineAlert-pwz3QY2u.js";import{H as s}from"./Heading-BnYMjqIa.js";import{S as i}from"./Section-BzwMtCy5.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-BvPCPNYl.js";import"./FormField.module-4TCsvFMM.js";import"./flowComponent-CNW7-kvN.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./IconApp-C8mhOEhl.js";import"./IconWarning-CzCYt-nQ.js";import"./Form-DZXnnIG4.js";import"./useFocusable-DIAzcF9v.js";import"./utils-DZgOXw50.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-D6Zjnbf0.js";import"./Input-DX5EHvrS.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BQk6lJ-q.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./StatusIcon-t2Oh37UU.js";import"./RSPContexts-CJnKmcd7.js";import"./Activity-Ck-RMSDT.js";const Y={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(i,null,e.createElement(u,null,e.createElement(s,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},r={},a={render:n=>e.createElement(i,null,e.createElement(u,null,e.createElement(s,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},m={render:n=>e.createElement(i,null,e.createElement(u,null,e.createElement(s,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(F=m.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const Z=["Default","CustomValueM","AllCustomValues"];export{m as AllCustomValues,a as CustomValueM,r as Default,Z as __namedExportsOrder,Y as default};
