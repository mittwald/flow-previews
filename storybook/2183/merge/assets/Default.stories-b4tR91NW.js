import{j as r}from"./iframe-D8Xbwx9P.js";import{N as o}from"./NumberField-SeWR-cs7.js";import{L as t}from"./Label-DAN_V0xJ.js";import{F as c}from"./FieldDescription-DheAaCsD.js";import{F as g}from"./FieldError-SqDTuGjU.js";import{C as x,a as b}from"./ContextualHelpTrigger-1Urai1K_.js";import{B as h}from"./Button-DnjfJoF3.js";import{T as F}from"./Text-ZHIm2izM.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BVJ72uhW.js";import"./flowComponent-CigogB48.js";import"./index-CYTinXvO.js";import"./clsx-B-dksMZM.js";import"./index-BkN34slO.js";import"./IconApp-Ch7b1vIu.js";import"./remote-BpFUxGPl.js";import"./IconChevronDown-Cqe-pXk5.js";import"./IconChevronUp-D2g3d71r.js";import"./IconMinus-DrKQJe_L.js";import"./IconPlus-DdCZLMc0.js";import"./useControlledHostValueProps-ZIMeorcT.js";import"./Button-WVOu4VhQ.js";import"./utils-C3Tuzz6i.js";import"./ProgressBar-CVumlVqB.js";import"./Label-rFd_FIkn.js";import"./Hidden-zhCtJ-LB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DE67nUnP.js";import"./context-CMvcEg-k.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CvIVggVb.js";import"./useFocus-D1eNONK1.js";import"./useFocusRing-kQK9kbZa.js";import"./useFocusable-CozNvSU7.js";import"./FieldError-BOU-ptKT.js";import"./Text-C0Eqp9FN.js";import"./Form-BSjJ02XH.js";import"./Group-K-eCqnjR.js";import"./Input-CwYJ6Hjz.js";import"./useControlledState-YZIEyxRh.js";import"./useFormValidation-Bi2FjDm7.js";import"./useSpinButton-BYb2IFbL.js";import"./useLocalizedStringFormatter-CXsD6kYA.js";import"./useFormReset-7Q0iJ7bt.js";import"./useEvent-BrS2p23g.js";import"./useTextField-DKCJiEJc.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-DO15Hi94.js";import"./Popover-D00PjseW.js";import"./OverlayContextProvider-C9wat-C-.js";import"./context-DTPirBdX.js";import"./useStatic-76h0-2Qu.js";import"./Dialog-Du_kPH7o.js";import"./RSPContexts-CsOhl7yw.js";import"./OverlayArrow-CaVIvu7y.js";import"./Collection-CquzgsCv.js";import"./CollectionBuilder-Cl1VQ76h.js";import"./SelectionIndicator-DvsfeWbh.js";import"./Separator-0bv_QzU7.js";import"./SelectionManager-CxpfoWMp.js";import"./useCollator-CoCLyJRC.js";import"./FocusScope-_ezdgzai.js";import"./VisuallyHidden-0JTBVxma.js";import"./useOverlayController-DFfxBH9t.js";import"./OverlayTrigger-DipuCQF3.js";import"./IconInfo-DCSuWSbX.js";import"./IconX-HMFf4w5l.js";import"./IconCheck-Djd4ZBy_.js";import"./LoadingSpinner-CRZU7QZf.js";import"./ariaLive-CRfqyPSL.js";import"./browser-BEcu8ny4.js";import"./EmulatedBoldText-Cd0UPmPK.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const vr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,d as WithUnit,vr as __namedExportsOrder,Ur as default};
