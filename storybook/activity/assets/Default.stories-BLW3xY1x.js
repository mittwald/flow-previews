import{C as o}from"./ColumnLayout-B78AueES.js";import{R as e}from"./index-uCp2LrAq.js";import{T as t}from"./index-DEfEmVRZ.js";import"./index-CSewQKTb.js";import{I as i}from"./InlineAlert-Dm6u5bu4.js";import"./index-mMkq7dwn.js";import"./index-CpQwDZ82.js";import{S as u}from"./Section-Ce2jV9YY.js";import{H as s}from"./Heading-p2MPOftY.js";import{L as l}from"./Label-CfDHK9n-.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DtRoiBSD.js";import"./FormField.module-Des02XVA.js";import"./flowComponent-CvYijzQN.js";import"./index-BOkhicXD.js";import"./IconApp-BMlMz8UD.js";import"./IconWarning-BWQh0yHy.js";import"./Form-DzhzTTqI.js";import"./useFocusable-DdMdjPK0.js";import"./utils-DWaAzItp.js";import"./useLabel-C6gbbzAU.js";import"./useLabels-LW5SiPO7.js";import"./Text-5ecqfi7M.js";import"./Input-HbuZbdfw.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-CgH7zaje.js";import"./useControlledState-B8AA3oOY.js";import"./Label-CTTMUmjq.js";import"./index-BPImkm1B.js";import"./StatusIcon-TcZwWrhd.js";import"./useLocalizedStringFormatter-5VR59M9e.js";import"./index-C1tRuZrD.js";import"./RSPContexts-CJnKmcd7.js";i.__docgenInfo={description:"",methods:[],displayName:"InlineAlert"};const ee={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},r={},m={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
