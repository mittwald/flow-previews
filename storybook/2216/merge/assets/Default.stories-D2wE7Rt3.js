import{j as r}from"./iframe-CYPvHnuu.js";import{N as o}from"./NumberField-CkdsoKWh.js";import{L as t}from"./Label-BTRY4Fha.js";import{F as c}from"./FieldDescription-RtGqf3oZ.js";import{F as g}from"./FieldError-BvWeuB1p.js";import{C as x,a as b}from"./ContextualHelpTrigger-Bykr48e8.js";import{B as h}from"./Button-DytH811E.js";import{T as F}from"./Text-B7HPZf5X.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-K4osF3of.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./clsx-B-dksMZM.js";import"./index-CuYxJU0p.js";import"./IconWarning-CxTd4Ejc.js";import"./remote-jfB-IGaC.js";import"./useControlledHostValueProps-Di6e6qke.js";import"./Button-BM3lF2Ud.js";import"./utils---ZBHqUT.js";import"./ProgressBar-Ds4kKwS2.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DsmrWctO.js";import"./context-Dv0AyQUz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAll9lzw.js";import"./useFocus-Besr2u9O.js";import"./useFocusRing-CwF8Yxqy.js";import"./useFocusable-DNqkvuS2.js";import"./FieldError-DKbYNsKn.js";import"./Text-CELcxyth.js";import"./Form-Bjo4WKP7.js";import"./Group-B-UmyINm.js";import"./Input-C71-o0Ak.js";import"./useControlledState-CzL0wnxp.js";import"./useFormValidation-BOj1NNIZ.js";import"./useSpinButton-BVkSrbs6.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./useFormReset-DMfMEm_f.js";import"./useEvent-ZUbDwjtd.js";import"./useTextField-310WTtjr.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-DqKpgaaL.js";import"./useOverlayController-Dk-2lmPH.js";import"./context-BIqaEuJx.js";import"./useStatic-Clnm1k9a.js";import"./OverlayContextProvider-B5UEEssH.js";import"./Dialog-DVySTr_M.js";import"./RSPContexts-B-l9PBN7.js";import"./OverlayArrow-c0UAwNBy.js";import"./Collection-CC7kOuB5.js";import"./CollectionBuilder-CcAo9kg0.js";import"./SelectionIndicator-CQjOYyqW.js";import"./Separator-B0yS3gpc.js";import"./SelectionManager-D6v8Hpa5.js";import"./useCollator-D2xCK0iS.js";import"./FocusScope-CPpTYY10.js";import"./VisuallyHidden-DQ4VZa68.js";import"./OverlayTrigger-D4_TWVNj.js";import"./LoadingSpinner-If-eK7wE.js";import"./browser-DHkGBw9W.js";import"./EmulatedBoldText-BplpewOf.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Rr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Rr as __namedExportsOrder,Or as default};
