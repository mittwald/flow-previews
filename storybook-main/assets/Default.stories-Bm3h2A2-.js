import{j as r}from"./iframe-pcvtdEGM.js";import{N as o}from"./NumberField-DB0QYAGl.js";import{L as t}from"./Label-CRIab_7x.js";import{F as c}from"./FieldDescription-Q7UMdTIm.js";import{F as g}from"./FieldError-Brj1PtAW.js";import{C as x,a as b}from"./ContextualHelpTrigger-XZ8-h-8o.js";import{B as h}from"./Button-uyxj5lKX.js";import{T as F}from"./Text-B9qmJggM.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DX_YsVYS.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./clsx-B-dksMZM.js";import"./index-YznY-g7A.js";import"./IconWarning-BUxMadyi.js";import"./remote-O2EONUZN.js";import"./useControlledHostValueProps-DDcvOf9E.js";import"./Button-C7g9LfsB.js";import"./utils-fsWZtkeO.js";import"./ProgressBar-BJtj52rd.js";import"./Label-BTMeT-8z.js";import"./Hidden-DReGI82W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D_iN71C8.js";import"./context-We2COa_S.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dv_EQiAe.js";import"./useFocus-B8eWYfgC.js";import"./useFocusRing-Zb0us3UP.js";import"./useFocusable-3pO1u96t.js";import"./FieldError-DSNAXrm1.js";import"./Text-DqkI-mFO.js";import"./Form-e5z3-mU_.js";import"./Group-DcVE6dEM.js";import"./Input-OfkHEYOp.js";import"./useControlledState-CJg030Qn.js";import"./useFormValidation-6fXj-s64.js";import"./useSpinButton-BIV7aUVS.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./useFormReset-D7xZNI6Q.js";import"./useEvent-D-kKKOwz.js";import"./useTextField-Cc5HjTsD.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B5gACMbu.js";import"./AlertIcon-CRV-RQ9G.js";import"./Popover-DAaX80Bn.js";import"./useOverlayController-DYra3gnv.js";import"./context-rIsit77n.js";import"./useStatic-BCDrLUdV.js";import"./OverlayContextProvider-B8OuVkDx.js";import"./Dialog-DwYtEz4y.js";import"./RSPContexts-DZfuqB-R.js";import"./OverlayArrow-KSA73Rxs.js";import"./Collection-CigrVSlS.js";import"./CollectionBuilder-Bto5ITGH.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./Separator-CvwRIy8P.js";import"./SelectionManager-DshmmqnA.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./VisuallyHidden-DxWu5xEc.js";import"./OverlayTrigger-AmfCki8T.js";import"./LoadingSpinner-CRozfiA2.js";import"./browser-DdUrC3oM.js";import"./EmulatedBoldText-BoMrbuLQ.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Tr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Tr as __namedExportsOrder,Wr as default};
