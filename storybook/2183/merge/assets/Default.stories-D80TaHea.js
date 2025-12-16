import{j as r}from"./iframe-ZqGKWCd-.js";import{N as o}from"./NumberField-CL7SfDPs.js";import{L as t}from"./Label-CJicQH7Q.js";import{F as c}from"./FieldDescription-CtBJlXxf.js";import{F as g}from"./FieldError-LLBE4o9B.js";import{C as x,a as b}from"./ContextualHelpTrigger-BPjP-atb.js";import{B as h}from"./Button-BZgO5jCY.js";import{T as F}from"./Text-fsbk1lYn.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-B1bOh1KR.js";import"./flowComponent-DnG4Zld_.js";import"./index-CDScJNB3.js";import"./clsx-B-dksMZM.js";import"./index-BS5rk3Xg.js";import"./IconChevronDown-DOkopHOS.js";import"./remote-QKtGQrQi.js";import"./IconChevronUp-BhG4a1VQ.js";import"./IconMinus-6uCcSDgG.js";import"./IconPlus-BJxMBEmq.js";import"./useControlledHostValueProps-tmC5-mDa.js";import"./Button-CUB1U94R.js";import"./utils-D141Jr51.js";import"./ProgressBar-CwXfcXUd.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./context-zCArMZyI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-_yC0x0cS.js";import"./useFocus-DhU9eZJ-.js";import"./useFocusRing-DbADFAxV.js";import"./useFocusable-BybslKHd.js";import"./FieldError-D5ElVx7m.js";import"./Text-Csqi7mxP.js";import"./Form-CbKBfjBg.js";import"./Group-LIjHZE_9.js";import"./Input-kDKiG0mN.js";import"./useControlledState-CXUvh1Us.js";import"./useFormValidation-EOc_OYLE.js";import"./useSpinButton-DD-6hTDA.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./useFormReset-L-nmEJr1.js";import"./useEvent-U8AR1Bww.js";import"./useTextField-B0bavF7F.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-9fNDXdlu.js";import"./Popover-DwfGd10d.js";import"./OverlayContextProvider-Dy2hc-Zf.js";import"./context-C6xdvZ0U.js";import"./useStatic-CPFMlQst.js";import"./Dialog-CUnVff-C.js";import"./RSPContexts-SeDUPtJk.js";import"./OverlayArrow-CDGB6Pw4.js";import"./Collection-CvOok_qh.js";import"./CollectionBuilder-BKjwMGq6.js";import"./SelectionIndicator-JiamtxED.js";import"./Separator-wVg1dl70.js";import"./SelectionManager-CZWi_Odb.js";import"./useCollator-uzPz00g8.js";import"./FocusScope-CNoX19qM.js";import"./VisuallyHidden-Izi45t00.js";import"./useOverlayController-vqkxV1o1.js";import"./OverlayTrigger-XTAv7ShH.js";import"./IconInfo-DEicSxyO.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./browser-BUvHTeNk.js";import"./EmulatedBoldText-Ro5KrcKA.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ur=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,d as WithUnit,Ur as __namedExportsOrder,Ir as default};
