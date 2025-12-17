import{j as r}from"./iframe-B9uPShpw.js";import{N as o}from"./NumberField-z9qmrkoI.js";import{L as t}from"./Label-KwkmvcNF.js";import{F as c}from"./FieldDescription-DLWMndWC.js";import{F as g}from"./FieldError-CWcQNDFm.js";import{C as x,a as b}from"./ContextualHelpTrigger-CLxJ50AJ.js";import{B as h}from"./Button-BmSId73m.js";import{T as F}from"./Text-CNAgZ6Gu.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BtkWQmwv.js";import"./flowComponent-DaNB93st.js";import"./index-BHigKFJv.js";import"./clsx-B-dksMZM.js";import"./index-C-9nCgVF.js";import"./IconApp-Dlsy_N62.js";import"./remote-BWMO5jwH.js";import"./IconChevronDown-CaU58I3K.js";import"./IconChevronUp-7HtjgX8H.js";import"./IconMinus-Cts0nYhr.js";import"./IconPlus-BMByyLMK.js";import"./useControlledHostValueProps-BbXEocRi.js";import"./Button-CfSbOp9X.js";import"./utils-Daj4d2Cf.js";import"./ProgressBar-BCTL0_PO.js";import"./Label-DMYXGfMz.js";import"./Hidden-DXuNaD-Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CcI46r6t.js";import"./context-C9xya_TD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CIPi1cMp.js";import"./useFocus-BRHOSDKu.js";import"./useFocusRing-kdNWDtkT.js";import"./useFocusable-3eJpH5lU.js";import"./FieldError-B2c6KACK.js";import"./Text-BY4f0OUC.js";import"./Form-CxeKG7IW.js";import"./Group-DF2dyCo5.js";import"./Input-D-KO421J.js";import"./useControlledState-DaoeHdVs.js";import"./useFormValidation-Bgk2NLp4.js";import"./useSpinButton-BlpkoJc0.js";import"./useLocalizedStringFormatter-BoeFAG81.js";import"./useFormReset-BDYhp5bc.js";import"./useEvent-B8UCcaDh.js";import"./useTextField-DSbVcLWI.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-q09hWhBt.js";import"./Popover-BVGGuKiU.js";import"./OverlayContextProvider-pgZNK9TS.js";import"./context-B0UTB4Wa.js";import"./useStatic-DxPieb3u.js";import"./Dialog-D67Qmi5f.js";import"./RSPContexts-D3LiPnZ6.js";import"./OverlayArrow-D2N0P4yy.js";import"./Collection-CsRpAj9n.js";import"./CollectionBuilder-g4fV9EQ5.js";import"./SelectionIndicator-C2YxFtZ5.js";import"./Separator-BAZWFUsp.js";import"./SelectionManager-CuNUAezw.js";import"./useCollator-YFGcYRYP.js";import"./FocusScope-DabbQPzk.js";import"./VisuallyHidden-C1crbJmY.js";import"./useOverlayController-hWFovTxl.js";import"./OverlayTrigger-C31b0Mhi.js";import"./IconInfo-Bfvw7frE.js";import"./IconX-9DqQUbWU.js";import"./IconCheck-CR4Xfb4H.js";import"./LoadingSpinner-Du_twv2V.js";import"./ariaLive-BNqOvCbo.js";import"./browser-DkOndk9b.js";import"./EmulatedBoldText-CttSSL63.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
