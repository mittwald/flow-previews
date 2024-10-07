import{C as r}from"./ColumnLayout-BGHswle4.js";import{R as e}from"./index-Cs7sjTYM.js";import{T as t}from"./TextField-xtUr0coG.js";import{L as l}from"./Label-CV7xN_BM.js";import{A as a}from"./Alert-B5x2uT5Z.js";import{H as m}from"./Heading-CmdTkRZ-.js";import{S as c}from"./Section-DNlg1UrX.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-DyPd5_sS.js";import"./FormField.module-ExQut69c.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./IconApp-OI763F0y.js";import"./flowComponent-mVHdDF_7.js";import"./index-Cf-03bMR.js";import"./IconWarning-DnIf0GKe.js";import"./Form-BJmzrAR9.js";import"./useFocusRing-CRCkdtud.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./utils-BBsc42SX.js";import"./Text-C0gOxGaJ.js";import"./FieldDescription-CpxHb4F0.js";import"./Text-CTCoi9MV.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Input-BRW8j_n9.js";import"./Hidden-DMUPAT4b.js";import"./Label-DgAfL5vK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-BfWoRbPu.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./useFocusable-D6sODRzj.js";import"./AlertIcon-CVukmBgy.js";import"./Heading-D2dIVyzg.js";import"./RSPContexts-BseA8goh.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BSVICx61.js";import"./CollectionBuilder-C1pJ_vaJ.js";import"./Header-BikxQE8J.js";const de={title:"Structure/ColumnLayout",component:r,parameters:{controls:{exclude:["s","m","l","className"]}},render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(r,{...n},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},o={},u={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(r,{...n,m:[2,1]},e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},i={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(r,{...n,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))},s={render:n=>e.createElement(c,null,e.createElement(a,null,e.createElement(m,null,'Gap size: "s"')),e.createElement(r,{...n,gap:"s"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "m"')),e.createElement(r,{...n,gap:"m"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))),e.createElement(a,null,e.createElement(m,null,'Gap size: "l"')),e.createElement(r,{...n,gap:"l"},e.createElement(t,null,e.createElement(l,null,"First name")),e.createElement(t,null,e.createElement(l,null,"Last name")),e.createElement(t,null,e.createElement(l,null,"Street")),e.createElement(t,null,e.createElement(l,null,"House number"))))};var p,d,E;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(E=(d=o.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};var L,b,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Section>
      <Alert>
        <Heading>s: [1] (default), m: [2, 1], l: [2, 1] (inherited)</Heading>
      </Alert>
      <ColumnLayout {...props} m={[2, 1]}>
        <TextField>
          <Label>Street</Label>
        </TextField>
        <TextField>
          <Label>House number</Label>
        </TextField>
      </ColumnLayout>
    </Section>
}`,...(F=(b=u.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var x,T,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Section>
      <Alert>
        <Heading>s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]</Heading>
      </Alert>
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
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var H,g,C;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <Section>
      <Alert>
        <Heading>Gap size: "s"</Heading>
      </Alert>
      <ColumnLayout {...props} gap="s">
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
      <Alert>
        <Heading>Gap size: "m"</Heading>
      </Alert>
      <ColumnLayout {...props} gap="m">
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
      <Alert>
        <Heading>Gap size: "l"</Heading>
      </Alert>
      <ColumnLayout {...props} gap="l">
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
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const Ee=["Default","CustomValueM","AllCustomValues","Gaps"];export{i as AllCustomValues,u as CustomValueM,o as Default,s as Gaps,Ee as __namedExportsOrder,de as default};
