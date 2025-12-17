import{j as r}from"./iframe-CQakcPxy.js";import{N as o}from"./NumberField-C_a0Y4ui.js";import{L as t}from"./Label-Bciz4GF2.js";import{F as c}from"./FieldDescription-DGqoCi4X.js";import{F as g}from"./FieldError-8S-oU2Os.js";import{C as x,a as b}from"./ContextualHelpTrigger-CnTt6gpW.js";import{B as h}from"./Button-BgdUtfaQ.js";import{T as F}from"./Text-BtxvTgzr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-7TLC4lNV.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./clsx-B-dksMZM.js";import"./index-Cea8xGLH.js";import"./IconChevronDown-DRX1rHio.js";import"./remote-DEFV7i-V.js";import"./IconChevronUp-DaT1Ll9Q.js";import"./IconMinus-DyrykuW_.js";import"./IconPlus-BIMoqNbg.js";import"./useControlledHostValueProps-BZjTuBfL.js";import"./Button-CodSfk9S.js";import"./utils-kpK_hrRV.js";import"./ProgressBar-Dp4X-EbZ.js";import"./Label-CTPlNXVy.js";import"./Hidden-BPFiveoH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./context-CTwP8X6y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";import"./FieldError-CB5plbtQ.js";import"./Text-C-10tsQv.js";import"./Form-Cw0lrebL.js";import"./Group-EK03D1ng.js";import"./Input-BcEHoXQP.js";import"./useControlledState-BdjUlaE2.js";import"./useFormValidation-8JnUx94A.js";import"./useSpinButton-UWeRgJGL.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./useFormReset-DCX2Qfen.js";import"./useEvent-Des4UomZ.js";import"./useTextField-ChzRdWGu.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-BPWM_X_l.js";import"./Popover-BybQ1H5j.js";import"./OverlayContextProvider-CGlhX4oZ.js";import"./context-BwdTo_HZ.js";import"./useStatic-BotBIdFp.js";import"./Dialog-B0kzP3Mz.js";import"./RSPContexts-BrDe4Bm2.js";import"./OverlayArrow-C79QRDx0.js";import"./Collection-Ci9d0blp.js";import"./CollectionBuilder-BUmJa08T.js";import"./SelectionIndicator-vLsFNsIa.js";import"./Separator-D8Y3LrcI.js";import"./SelectionManager-1KeHygA_.js";import"./useCollator-INJOKvYJ.js";import"./FocusScope-Bt02kxJY.js";import"./VisuallyHidden-B_I1UO8l.js";import"./useOverlayController-DnqhdB7Q.js";import"./OverlayTrigger-ewIDRAFx.js";import"./IconInfo-BWnzaeUk.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./browser-n5THB09p.js";import"./EmulatedBoldText-BugEiGRa.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
