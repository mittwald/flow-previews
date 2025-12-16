import{j as e}from"./iframe-VGYf9uSR.js";import{L as t}from"./Label--ix077tG.js";import{F as u}from"./FieldError-CLzXjLUN.js";import{C as s}from"./CheckboxGroup-Bb-fL7SB.js";import{C as r}from"./Checkbox-CYKBG0Ur.js";import{C as d}from"./CheckboxButton-51ipoJl2.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-lamhxTiw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BJkjz94f.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./context-CKMs_ua8.js";import"./ProgressBar-Bb-cXNA8.js";import"./utils-BB4afhje.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./FieldError-AWx0XaHn.js";import"./browser-BY7YAvyX.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./IconDanger-B5Kx1O1H.js";import"./ColumnLayout-_AI_IjGY.js";import"./useMakeFocusable-C14dKqua.js";import"./useFieldComponent-DiUYLu0s.js";import"./Activity-CX_biUm5.js";import"./TranslationProvider-Ck575ucT.js";import"./OverlayContextProvider-Tja93TmG.js";import"./context-DPoGZDoo.js";import"./Button-DHkv2oj9.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./useStatic-DRLyxIeE.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Text-CGbJaU4z.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconCheckboxEmpty-CWaEUbQu.js";import"./Form-CEBTvUmY.js";import"./useFormValidation-DNcRsa8m.js";import"./useToggleState-BaOAdKf3.js";import"./useFormReset-D2LFGRel.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,de={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},i={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(t,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...l.parameters?.docs?.source}}};const ue=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{p as CheckboxButtons,c as CheckboxDisabled,a as CheckboxGroupDisabled,l as ColumnLayout,i as Default,n as ReadOnly,m as WithFieldError,ue as __namedExportsOrder,de as default};
