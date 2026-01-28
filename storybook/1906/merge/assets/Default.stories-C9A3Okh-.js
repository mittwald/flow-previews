import{j as e}from"./iframe-CFLRrV9_.js";import{S as o}from"./SearchField-BmpQmBbN.js";import{L as n}from"./Label-DDweLn-B.js";import{F as c}from"./FieldDescription-B2DMaMC5.js";import{F as d}from"./FieldError-BY_h0DzJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CywuRKF5.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./clsx-B-dksMZM.js";import"./index-24zjo-Kb.js";import"./Button-C6DtPvCF.js";import"./IconWarning-DnD-gw4t.js";import"./remote-BB1QWzBE.js";import"./Text-DEmvrg4f.js";import"./browser-6ZyX-izP.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./Text-DCjLwlBM.js";import"./utils-9RAZgTTl.js";import"./LoadingSpinner-D6sn6dKn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./context-bb3yZDI9.js";import"./Button-CQ9x5Ymh.js";import"./ProgressBar-CAwZsQPk.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C42gu-3e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-LdOf-GEu.js";import"./useFocus-DD1T6bJ4.js";import"./useFocusRing-DRVonXEI.js";import"./useFocusable-CQU1ZNCF.js";import"./useControlledHostValueProps-BmnwSt4u.js";import"./FieldError-D073kW89.js";import"./RSPContexts-CrNZITQd.js";import"./Form-HxVpGshA.js";import"./Group-Cb05qa-m.js";import"./Input-QBFM7ItQ.js";import"./useControlledState-BS0DqA_d.js";import"./useTextField-DIM1ridr.js";import"./useFormReset-BcY6_uyQ.js";import"./useFormValidation-Cm_zD3mV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BwXe_CUh.js";import"./AlertIcon-Dk-GLzZT.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <FieldDescription>Press enter to search</FieldDescription>
    </SearchField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <Label>Suche</Label>
    </SearchField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props} defaultValue="test" isInvalid>
      <FieldError>Invalid search value</FieldError>
    </SearchField>
}`,...m.parameters?.docs?.source}}};const pr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError"];export{t as Default,i as Disabled,s as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,pr as __namedExportsOrder,ar as default};
