import{C as a}from"./ColumnLayout-B78AueES.js";import{R as e}from"./index-uCp2LrAq.js";import{T as t}from"./TextField-Cw-QnNz-.js";import{L as r}from"./Label-BfZsFn3a.js";import{I as i}from"./InlineAlert-Cvloj2ZB.js";import{H as p}from"./Heading-Dx4e16v2.js";import{S as u}from"./Section-pYJvHIu7.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TextFieldBase-Cfc8pxAA.js";import"./FormField.module-B1Ek3pwS.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./IconApp-DZ6iFK1V.js";import"./flowComponent-D0hgC601.js";import"./index-BOkhicXD.js";import"./IconWarning-D5KLWx1O.js";import"./Form-CP-B8ZEw.js";import"./useFocusRing-DQ9q31uS.js";import"./useLabel-C-G_TB0Q.js";import"./useLabels-CrvI0Xse.js";import"./utils-DsDc2z3f.js";import"./Text-DAlZawmB.js";import"./FieldDescription-C_JyU3ZG.js";import"./Text-EyCvEgnK.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./Input-oGq534xr.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D51lDO-b.js";import"./useControlledState-B8AA3oOY.js";import"./useFocusable-R-ZPDh0R.js";import"./Label-C3uTUzzd.js";import"./StatusIcon-B0hbQAvJ.js";import"./RSPContexts-CJnKmcd7.js";import"./Activity-DYbiBj6P.js";import"./ContextMenuSection-yQw222rb.js";import"./PopoverTrigger-C35F8xkT.js";import"./OverlayTrigger-6VtsQuLn.js";import"./OverlayArrow-C3Uw9j7L.js";import"./number-nHrFdSb-.js";import"./usePress-v15KrNwr.js";import"./FocusScope-tP5bytlL.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-rZYQhwXt.js";import"./context-1gARON2y.js";import"./useSelector-CYhu1s7z.js";import"./Action-D1MPQzaf.js";import"./dynamic-DKDa4OpU.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-CPOND5Y7.js";import"./Header-CFQsHu-x.js";import"./SelectionManager-BXcc41yp.js";import"./useEvent-YC2gB4eD.js";import"./Separator-DHXedzvY.js";const Ce={title:"Structure/ColumnLayout",component:a,parameters:{controls:{exclude:["s","m","l","className"]}},render:l=>e.createElement(u,null,e.createElement(i,null,e.createElement(p,null,"s: [1] (default), m: [1, 1] (default), l: [1, 1, 1] (default)")),e.createElement(a,{...l},e.createElement(t,null,e.createElement(r,null,"First name")),e.createElement(t,null,e.createElement(r,null,"Last name")),e.createElement(t,null,e.createElement(r,null,"Street")),e.createElement(t,null,e.createElement(r,null,"House number"))))},n={},m={render:l=>e.createElement(u,null,e.createElement(i,null,e.createElement(p,null,"s: [1] (default), m: [2, 1], l: [2, 1] (inherited)")),e.createElement(a,{...l,m:[2,1]},e.createElement(t,null,e.createElement(r,null,"Street")),e.createElement(t,null,e.createElement(r,null,"House number"))))},o={render:l=>e.createElement(u,null,e.createElement(i,null,e.createElement(p,null,"s: [2, 1], m: [3, 2, 1], l: [4, 3, 2, 1]")),e.createElement(a,{...l,s:[2,1],m:[3,2,1],l:[4,3,2,1]},e.createElement(t,null,e.createElement(r,null,"First name")),e.createElement(t,null,e.createElement(r,null,"Last name")),e.createElement(t,null,e.createElement(r,null,"Street")),e.createElement(t,null,e.createElement(r,null,"House number"))))};var s,c,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var E,L,b;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(L=m.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var x,F,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(F=o.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const He=["Default","CustomValueM","AllCustomValues"];export{o as AllCustomValues,m as CustomValueM,n as Default,He as __namedExportsOrder,Ce as default};
