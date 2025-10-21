import{j as e}from"./iframe-CBVsO-nV.js";import{C as s}from"./CheckboxGroup-nAEXtnau.js";import{L as a}from"./Label-nyljzuzS.js";import{F}from"./useFieldComponent-BL--pJL1.js";import{C as r}from"./Checkbox-ltzv9yR7.js";import{C as m}from"./CheckboxButton-D_8KCpzD.js";import"./index-Cun1SEai.js";import"./ColumnLayout-BG1JiXTZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./index-CObDYv0S.js";import"./utils-BP7SriO_.js";import"./useMakeFocusable-D1yavyON.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./Label-Bbbf1klh.js";import"./Hidden-CLTlUYi-.js";import"./Text-GjNUVhom.js";import"./filterDOMProps-CghfNOdR.js";import"./IconWarning-BYVfnYfe.js";import"./react-children-utilities-Da5w6g_X.js";import"./ClearPropsContext-5iY_SzG7.js";import"./RSPContexts-DsHkjJhu.js";import"./Form-CSBASJMX.js";import"./useFormValidation-DWnxi1QZ.js";import"./useFocus-DaXdFBHM.js";import"./useControlledState-CX82Bv9G.js";import"./useFocusRing-CMejcKZt.js";import"./usePress-tISAzguc.js";import"./useToggleState-DPC5joeI.js";import"./useFormReset-0NTNnrBe.js";import"./useFocusable-BZqSTg_W.js";import"./VisuallyHidden-OgSsWZyt.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,Ce={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:P("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(F,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};var u,h,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,C,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var v,j,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(O=(j=n.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var g,R,L;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...(L=(R=c.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var G,D,S;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var f,W,B;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,_,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const ke=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{p as CheckboxButtons,c as CheckboxDisabled,i as CheckboxGroupDisabled,d as ColumnLayout,t as Default,n as ReadOnly,l as WithFieldError,ke as __namedExportsOrder,Ce as default};
