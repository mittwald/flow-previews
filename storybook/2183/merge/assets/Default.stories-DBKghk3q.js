import{j as r}from"./iframe-pNOm8Wja.js";import{N as o}from"./NumberField-D0ivZo84.js";import{L as t}from"./Label-DHID5D-l.js";import{F as c}from"./TranslationProvider-vME1iId0.js";import{F as g}from"./FieldError-DA4-4QkZ.js";import{C as x,a as b}from"./ContextualHelpTrigger-DzRPewNO.js";import{B as h}from"./Button-CgV_q1F1.js";import{T as F}from"./Text-_46BQ-Z5.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-XMIDEUQz.js";import"./PropsContextProvider-BWF9EjWJ.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./clsx-B-dksMZM.js";import"./Activity-Br43_cfx.js";import"./IconApp-BiE0s1PO.js";import"./remote-DYOOxdg2.js";import"./LoadingSpinner-Db8dHYJY.js";import"./IconChevronDown-BflQnbhd.js";import"./IconChevronUp-CQZplnLs.js";import"./IconMinus-52Ifhsja.js";import"./IconPlus-CYBVW-jq.js";import"./useControlledHostValueProps-PtKQ8r5D.js";import"./Button-D9P8PHTw.js";import"./utils-BknOSkFt.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMdVhRJ1.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./FieldError-B2TX3Fta.js";import"./browser-CBsMsG9c.js";import"./Form-BbF0Gc6X.js";import"./Group-D0q_Cf1F.js";import"./Input-CsUDr6Sk.js";import"./SelectionIndicator-DYQzBrWb.js";import"./useFormValidation-DtQ3XmyE.js";import"./useSpinButton-lqsfYQSr.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./useFormReset-Dc67hovh.js";import"./useTextField-ByF_LOE7.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-DAyQWAs8.js";import"./context-Chylvkq0.js";import"./RSPContexts-CPamdU7s.js";import"./Collection-DsfTdLuW.js";import"./CollectionBuilder-CKordMi2.js";import"./Separator-ti_7fu_1.js";import"./useStatic-GeHsFKqm.js";import"./ariaLive-C7DipXM8.js";import"./useOverlayController-DGsr_y1V.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-DCkcPuhV.js";import"./Popover-CQ-IHLDW.js";import"./OverlayTrigger-BL8LsTuM.js";import"./IconInfo-CPi1obw3.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./EmulatedBoldText-C8Hc8u3o.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ar=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Ar as __namedExportsOrder,yr as default};
