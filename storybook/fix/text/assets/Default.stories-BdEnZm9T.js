import{C as o}from"./ColumnLayout-B-_pjxL2.js";import{R as e}from"./index-BwDkhjyp.js";import{T as t}from"./TextField-NQfT0v-l.js";import{L as l}from"./Label-BD5VUJI0.js";import{I as i}from"./InlineAlert-DJKzVZj5.js";import{H as u}from"./Heading-DVg7wytp.js";import{S as s}from"./Section-BeFlFaPG.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-04oBdWE1.js";import"./FormField.module-DQthEUsq.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./IconApp-ZB_mDMmk.js";import"./flowComponent-DpPOHS38.js";import"./index-B8XB3FuZ.js";import"./IconWarning-BtAGI7Yn.js";import"./Form-CuH0gdtx.js";import"./useFocusable-C-qOUFhv.js";import"./utils-CcQIssJO.js";import"./useLabel-BaXqGmeE.js";import"./useLabels-kg7v6Afk.js";import"./Text-DqgvIX4k.js";import"./FieldDescription-BaZaDuDS.js";import"./Text-BXlBw2yu.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./Input-CmsFj7Gh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-CfqvoD0r.js";import"./useControlledState-C0C-dzuH.js";import"./Label-J_0igrPF.js";import"./StatusIcon-Bf46Ku1G.js";import"./RSPContexts-Bc9pl35m.js";import"./Activity-Cov3f-FH.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-wxk3VkXl.js";import"./Header-tof3fAA-.js";const me={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...r},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},n={},m={render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...r,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...r,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(F=a.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const ae=["Default","CustomValueM","AllCustomValues"];export{a as AllCustomValues,m as CustomValueM,n as Default,ae as __namedExportsOrder,me as default};
