import{j as e}from"./iframe-Czve8Ng1.js";import{C as s}from"./CheckboxGroup-CmyloxTo.js";import{L as i}from"./Label-FUFGZTqe.js";import{F as B}from"./FieldError-JfKFDbH2.js";import{C as r}from"./Checkbox-CwzmEUF_.js";import{C as d}from"./CheckboxButton-CHHDQEHP.js";import"./ColumnLayout-eTrEY9Hp.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DLHfSyo1.js";import"./mergeRefs-BkScJl_E.js";import"./index-SeEX-dzh.js";import"./FormField.module-B9AzUSUD.js";import"./useLocalizedStringFormatter-uQUw7qmu.js";import"./context-D03EQw3p.js";import"./Label-BfVvFZj4.js";import"./utils-C85tsJLi.js";import"./Hidden-B3217TUg.js";import"./IconWarning-YJtY_uKm.js";import"./FieldError-CNai_82t.js";import"./Text-xUaxq5aV.js";import"./filterDOMProps-CghfNOdR.js";import"./RSPContexts-dpque2BF.js";import"./Form-B2b0RBd7.js";import"./useFocus-DLNoddQ5.js";import"./useLabel-BFN45BzM.js";import"./usePress-8K4_ozuW.js";import"./useFocusRing-Bu3hVrpu.js";import"./useToggleState-CNvQGslN.js";import"./useFormReset-BM4kigyU.js";import"./useFocusable-DPi5-Rks.js";import"./useControlledState-BeXkP8kb.js";import"./VisuallyHidden-DTvv8wPC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:E("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},a={args:{isDisabled:!0}},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(B,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,b,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
