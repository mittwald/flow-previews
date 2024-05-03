import{C as o}from"./ColumnLayout-B-_pjxL2.js";import{R as e}from"./index-BwDkhjyp.js";import{T as t}from"./index-C9qYVs5U.js";import"./index-CZYo53nU.js";import{I as i}from"./InlineAlert-BYpyRASO.js";import"./index-BVe1Ob2o.js";import"./index-Du6MAD5T.js";import{S as u}from"./Section-DI4VIJzp.js";import{H as s}from"./Heading-DJHKz8W4.js";import{L as l}from"./Label-DDYD1iYc.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DleXkfFV.js";import"./FormField.module-D54uLd6o.js";import"./flowComponent-C-onzJUu.js";import"./index-B8XB3FuZ.js";import"./IconApp-O1Ko_agd.js";import"./IconWarning-CPLPaO8l.js";import"./Form-Dlp6bjBW.js";import"./useFocusable-B-LauCUn.js";import"./utils-DRHmYb2_.js";import"./useLabel-BI_LBsYD.js";import"./useLabels-Bmsr8nBw.js";import"./Text-COwT3C7Z.js";import"./Input-BQ8JcjYo.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-bp4irgL8.js";import"./useControlledState-C0C-dzuH.js";import"./Label-BaB2g2WF.js";import"./index-CA4_K4hJ.js";import"./StatusIcon-KSGRJTYR.js";import"./useLocalizedStringFormatter-DayyQCdx.js";import"./RSPContexts-Bc9pl35m.js";i.__docgenInfo={description:"",methods:[],displayName:"InlineAlert"};const $={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},r={},m={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
