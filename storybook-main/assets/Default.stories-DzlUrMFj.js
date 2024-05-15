import{C as o}from"./ColumnLayout-B78AueES.js";import{R as e}from"./index-uCp2LrAq.js";import{T as t}from"./index-BlDUqneG.js";import"./index-4ISF3mB6.js";import{I as i}from"./InlineAlert-Tj2XmlAV.js";import"./index-DBwtFXUY.js";import"./index-DQKv4fYo.js";import{S as u}from"./Section-CuaXIQ-d.js";import{H as s}from"./Heading-C8jbU2Yt.js";import{L as l}from"./Label-B73AfSWH.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DE18P8CR.js";import"./FormField.module-CNftIp2h.js";import"./flowComponent-OTWiITmK.js";import"./index-7Bm5Bt6L.js";import"./index-BOkhicXD.js";import"./IconApp-CexgHYRw.js";import"./IconWarning-_6-e0GkB.js";import"./Form-DC_Jaq0Q.js";import"./useFocusable-BGYghl-O.js";import"./utils-CHnd_qWz.js";import"./useLabel-CRisioBB.js";import"./useLabels-7II0TQXO.js";import"./Text-QhWkLhD7.js";import"./Input-DZsvBgax.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Co0XpM0Q.js";import"./useControlledState-B8AA3oOY.js";import"./Label-D2L52JVz.js";import"./index-MwP6Ybl1.js";import"./StatusIcon-DrPoSZL2.js";import"./useLocalizedStringFormatter-Cwaj61aR.js";import"./index-DBUGr6AP.js";import"./RSPContexts-CJnKmcd7.js";i.__docgenInfo={description:"",methods:[],displayName:"InlineAlert"};const te={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},r={},m={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const le=["Default","CustomValueM","AllCustomValues"];export{a as AllCustomValues,m as CustomValueM,r as Default,le as __namedExportsOrder,te as default};
