import{C as o}from"./ColumnLayout-B-_pjxL2.js";import{R as e}from"./index-BwDkhjyp.js";import{T as t}from"./index-u9_jXk2b.js";import"./index-BUKT1Mbq.js";import{I as i}from"./InlineAlert-BYdYlcg4.js";import"./index-CFi-0kt5.js";import"./index-DkSs81Pt.js";import{S as u}from"./Section-DBLPW7-J.js";import{H as s}from"./Heading-Dpoua6td.js";import{L as l}from"./Label-Dw5IQixM.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C3O-7nAE.js";import"./FormField.module-DvflTJWd.js";import"./flowComponent-Dglj5cqB.js";import"./index-B8XB3FuZ.js";import"./IconApp-_FcSWQQl.js";import"./IconWarning-DZA2CR2B.js";import"./Form-DmVgoquN.js";import"./useFocusable-1hkoevAF.js";import"./utils-DDqfTkhb.js";import"./useLabel-CGKcXo82.js";import"./useLabels-DNsw1HUe.js";import"./Text-Ck09bxUA.js";import"./Input-KxH1mW2Q.js";import"./Label-C1MFjKOK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-DSnLTMjq.js";import"./useFormReset-Dz9no7wq.js";import"./useControlledState-C0C-dzuH.js";import"./index-DA8JinbT.js";import"./StatusIcon-BD6vPyUt.js";import"./useLocalizedStringFormatter-BNfLxuDa.js";import"./Heading-DY1nJOWO.js";import"./RSPContexts-Bc9pl35m.js";i.__docgenInfo={description:"",methods:[],displayName:"InlineAlert"};const te={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},r={},m={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:n=>e.createElement(u,null,e.createElement(i,null,e.createElement(s,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
