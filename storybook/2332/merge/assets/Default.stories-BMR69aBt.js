import{j as r}from"./iframe-DewKgIpk.js";import{N as o}from"./NumberField-BfmSKlKr.js";import{L as t}from"./Label-DtIMFOsj.js";import{F as c}from"./FieldDescription-skgZIegf.js";import{F as g}from"./FieldError-B3PY7-i2.js";import{C as x,a as b}from"./ContextualHelpTrigger-C0KWDT-M.js";import{B as h}from"./Button-DK1DwTQu.js";import{T as F}from"./Text-CAhyjFWz.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-D7thqSXy.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./clsx-B-dksMZM.js";import"./index-BPUeLBAn.js";import"./IconWarning-CrJxptLM.js";import"./remote-B1GLKgHd.js";import"./useControlledHostValueProps-mMjKsrzf.js";import"./Button-DrtrHFmq.js";import"./utils-CUPQPHYu.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D1gJfZCU.js";import"./context-DymIffM8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-S1YnS57K.js";import"./useFocus-ChnOBFmm.js";import"./useFocusRing-DiJDuYpp.js";import"./useFocusable-DVz_n5zl.js";import"./FieldError-BKx1r64I.js";import"./Text-CIY7d5XG.js";import"./Form-CIigNYkb.js";import"./Group-BwRkGpTi.js";import"./Input-BM_jCh0C.js";import"./useControlledState-AVItU9lZ.js";import"./useFormValidation-CdyRJz3a.js";import"./useSpinButton-MfeoF0zQ.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./useFormReset-w2Qnh74g.js";import"./useEvent-CLk-ZyZx.js";import"./useTextField-CayEBnIr.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";import"./Popover-NNrICePK.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./OverlayContextProvider-DCwrSRDv.js";import"./Dialog-BgAnH5cc.js";import"./RSPContexts-CJFisqoy.js";import"./OverlayArrow-C0FkFBtp.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./SelectionIndicator-BpbXr_mp.js";import"./Separator-CzQZZCJK.js";import"./SelectionManager-COdXd1z8.js";import"./useCollator-Ip-lvHDB.js";import"./FocusScope-BsYVWh0v.js";import"./VisuallyHidden-DNvpUE5M.js";import"./OverlayTrigger-CV6rtyLj.js";import"./LoadingSpinner-CskkGazD.js";import"./browser-D8jMTJt0.js";import"./EmulatedBoldText-DxGIr34d.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const Wr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Wr as __namedExportsOrder,Rr as default};
