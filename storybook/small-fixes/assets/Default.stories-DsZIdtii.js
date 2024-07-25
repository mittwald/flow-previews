import{C as o}from"./ColumnLayout-C9LwylRg.js";import{R as e}from"./index-Cs7sjTYM.js";import{T as t}from"./TextField-RDLX3yu2.js";import{L as l}from"./Label-CYWf0UOp.js";import{I as i}from"./InlineAlert-BqIAWuNe.js";import{H as u}from"./Heading-Cs03TZSA.js";import{S as s}from"./Section-C2Z6e2-1.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-Dny-85r0.js";import"./FormField.module-B2X-N4DF.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./IconApp-Cq2nF_H2.js";import"./flowComponent-CmFvo3FE.js";import"./index-BMdlDBjA.js";import"./IconWarning-CT4MKmtH.js";import"./Form-CAaH4S7w.js";import"./useFocusable-CMUHH7RC.js";import"./utils-Ca6JWPXc.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Text-Bu-3W4UG.js";import"./FieldDescription-bxWB_3l6.js";import"./Text-CKRVNL4F.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./Input-CDvJXsrx.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./Label-D7wSVlkX.js";import"./StatusIcon-CWHySg3U.js";import"./RSPContexts-BseA8goh.js";import"./Activity-CPnWONG0.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BEvGW34q.js";import"./Header-Dl17m4NE.js";const me={title:"Structure/ColumnLayout",component:o,parameters:{controls:{exclude:["s","m","l","className"]}},render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(o,{...r},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},n={},m={render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(o,{...r,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},a={render:r=>e.createElement(s,null,e.createElement(i,null,e.createElement(u,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(o,{...r,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
