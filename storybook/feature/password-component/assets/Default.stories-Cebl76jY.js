import{C as o}from"./ColumnLayout-B78AueES.js";import{R as e}from"./index-uCp2LrAq.js";import{T as t}from"./TextField-CBUQcrAR.js";import{L as l}from"./Label-SpZFRJ_k.js";import{I as i}from"./InlineAlert-Bv-P7TOp.js";import{H as u}from"./Heading-BCjHoBHi.js";import{S as s}from"./Section-DgGPYImf.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-BmY0W8Z1.js";import"./FormField.module-BkyQag6w.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./IconApp-DWya8WHB.js";import"./flowComponent-Cll4pGCY.js";import"./index-BOkhicXD.js";import"./IconWarning-CVIujYNc.js";import"./Form-pLdcVy8a.js";import"./useFocusable-B1CfUGG-.js";import"./utils-DZgOXw50.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-3FUNhTNc.js";import"./FieldDescription-DwIkflUx.js";import"./Text-Dgrf8S-7.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-Bpx1Gtyq.js";import"./TextField-BGn1ZlWC.js";import"./Input-CK4H1fha.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BzjXWGX7.js";import"./StatusIcon-D62bjPgK.js";import"./RSPContexts-CJnKmcd7.js";import"./Activity-Ck-RMSDT.js";import"./ContextMenu.module-CAjBRoKS.js";import"./Collection-BZQFS83W.js";import"./Header-CL3U4zra.js";const ae={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...r},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},n={},m={render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...r,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...r,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(F=a.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const oe=["Default","CustomValueM","AllCustomValues"];export{a as AllCustomValues,m as CustomValueM,n as Default,oe as __namedExportsOrder,ae as default};
