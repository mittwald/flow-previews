import{j as e}from"./iframe-cREoqKkU.js";import{C as s}from"./CheckboxGroup-C-mYffA_.js";import{L as i}from"./Label-DZvsfDgY.js";import{F as B}from"./FieldError-B5o1ZaV9.js";import{C as r}from"./Checkbox-D-laK_V0.js";import{C as d}from"./CheckboxButton-BRivzkZT.js";import"./ColumnLayout-CTjoby71.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CoBIOD9m.js";import"./mergeRefs-qT8HekK4.js";import"./index-sbMuRXJ-.js";import"./FormField.module-B9AzUSUD.js";import"./useLocalizedStringFormatter-VGcwbP3j.js";import"./context-B2t2DGfo.js";import"./Label-CiJ2ihSa.js";import"./utils-yXINXq--.js";import"./Hidden-lwWUIJBj.js";import"./IconWarning-BZ0g_Se0.js";import"./FieldError-CvRuj6qL.js";import"./Text-IBVIMvOc.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-BbhueAoC.js";import"./Form-FfGMTlZb.js";import"./useFocus-DdT7TrV6.js";import"./useLabel-lx63atcd.js";import"./usePress-CDwaJuL4.js";import"./useFocusRing-BqHxEjMi.js";import"./useToggleState-DNwTfAm-.js";import"./useFormReset-D4g7a1lX.js";import"./useFocusable-6okJE7SL.js";import"./useControlledState-CU5MoX31.js";import"./VisuallyHidden--yTRKci1.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:E("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},a={args:{isDisabled:!0}},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(B,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,b,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,v,j;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var O,L,g;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...(g=(L=c.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var G,D,R;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var S,f,W;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...(W=(f=l.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};const de=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{c as CheckboxButtons,n as CheckboxDisabled,a as CheckboxGroupDisabled,l as ColumnLayout,t as Default,p as WithFieldError,de as __namedExportsOrder,le as default};
