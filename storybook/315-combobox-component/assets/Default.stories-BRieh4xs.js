import{C as o}from"./ColumnLayout-B78AueES.js";import{R as e}from"./index-uCp2LrAq.js";import{T as t}from"./index-CLJk_5g7.js";import"./index-B__7BxyL.js";import{I as i}from"./InlineAlert-CdMy4V_9.js";import"./index-KxW2TRL5.js";import"./index-Cb02gwrs.js";import{S as u}from"./Section-BQe7walp.js";import{H as s}from"./Heading-4tYTrSDh.js";import{L as l}from"./Label-hD4PBlz8.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cgt-y8q0.js";import"./FormField.module-Co8ldtVA.js";import"./flowComponent-CvmVviyC.js";import"./index-BOkhicXD.js";import"./IconApp-FFx7s__U.js";import"./IconWarning-CZBb_lzG.js";import"./Form-BZ0PxO7a.js";import"./useFocusable-Ci2wVYze.js";import"./utils-BGsKKjDw.js";import"./useLabel-Cohmypox.js";import"./useLabels-COLBOOlB.js";import"./Text-Daiml_5e.js";import"./Input-zmw4YJce.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-B-YRps-i.js";import"./useControlledState-B8AA3oOY.js";import"./Label-tIxD_xLh.js";import"./index-hy2JOLlu.js";import"./StatusIcon-BNTYcmFD.js";import"./useLocalizedStringFormatter-CsLYpn7N.js";import"./RSPContexts-CJnKmcd7.js";i.__docgenInfo={description:"",methods:[],displayName:"InlineAlert"};const $={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},r={},m={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(L=m.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var f,x,F;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const ee=["Default","CustomValueM","AllCustomValues"];export{a as AllCustomValues,m as CustomValueM,r as Default,ee as __namedExportsOrder,$ as default};
