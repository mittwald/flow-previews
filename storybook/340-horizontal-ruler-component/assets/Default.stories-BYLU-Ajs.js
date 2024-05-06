import{C as o}from"./ColumnLayout-B-_pjxL2.js";import{R as e}from"./index-BwDkhjyp.js";import{T as t}from"./index-BMO0Nt4U.js";import"./index-BfxlIjbh.js";import{I as i}from"./InlineAlert-CN1jDpi2.js";import"./index-BrB6CA44.js";import"./index-bse4AL1V.js";import{S as u}from"./Section-CYTWzavO.js";import{H as s}from"./Heading-uHidQQTA.js";import{L as l}from"./Label-C8DEhvL-.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BgjmZZNM.js";import"./FormField.module-BqUTl5iu.js";import"./flowComponent-Bzcp-389.js";import"./index-X5uBQEpu.js";import"./index-B8XB3FuZ.js";import"./IconApp-Bb0sM1mV.js";import"./IconWarning-CLj4DHmJ.js";import"./Form-MXGUzDjW.js";import"./useFocusable-LawXdULP.js";import"./utils-B2_e5HNY.js";import"./useLabel-BeKP7_XB.js";import"./useLabels-C0fIA4N3.js";import"./Text-BgNBscSb.js";import"./Input-DV7ZKJVj.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-C0zRxOhr.js";import"./useControlledState-C0C-dzuH.js";import"./Label-DFB5ayN_.js";import"./index-DVAIL5TL.js";import"./StatusIcon-D42LZUL6.js";import"./useLocalizedStringFormatter-IXxfzPeK.js";import"./RSPContexts-Bc9pl35m.js";i.__docgenInfo={description:"",methods:[],displayName:"InlineAlert"};const ee={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},r={},m={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const te=["Default","CustomValueM","AllCustomValues"];export{a as AllCustomValues,m as CustomValueM,r as Default,te as __namedExportsOrder,ee as default};
