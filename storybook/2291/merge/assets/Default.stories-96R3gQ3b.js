import{j as r}from"./iframe-1hZ9wzBW.js";import{N as o}from"./NumberField-BrtkVBPq.js";import{L as t}from"./Label-D0cGucr-.js";import{F as c}from"./FieldDescription-BgHJgSRB.js";import{F as g}from"./FieldError-BLPNRQRQ.js";import{C as x,a as b}from"./ContextualHelpTrigger-DZ9PPE_m.js";import{B as h}from"./Button-7Po4DI29.js";import{T as F}from"./Text-BF_GklVB.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-B-hW6CDY.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./clsx-B-dksMZM.js";import"./index-dx0Fbu95.js";import"./IconWarning-Bq_05zLs.js";import"./remote-CnwnRZPi.js";import"./useControlledHostValueProps-CUKmYRsD.js";import"./Button-XLqKqFxh.js";import"./utils-CnJx27u5.js";import"./ProgressBar-fkOF9esE.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CrikywT0.js";import"./context-Dx8Lg4Ma.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNGT1V3C.js";import"./useFocus-iMNco4FL.js";import"./useFocusRing-DJmPDLK7.js";import"./useFocusable-CvXOfqVX.js";import"./FieldError-y4Ibnc6j.js";import"./Text-B1mgaTQV.js";import"./Form-BqoDw02I.js";import"./Group-D37MkbfD.js";import"./Input-BD7vx0Sp.js";import"./useControlledState-DAXJPifs.js";import"./useFormValidation-yU8XYtwO.js";import"./useSpinButton-CBGXDozv.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./useFormReset-HcR3N4q2.js";import"./useEvent-CxVl1HjR.js";import"./useTextField-B8x37Qq1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D19RpsJk.js";import"./AlertIcon-fApV2-nR.js";import"./Popover-Bxp3aiNM.js";import"./useOverlayController-C-EZcKCT.js";import"./context-Ci4eovAp.js";import"./useStatic-BSOtV-Rw.js";import"./OverlayContextProvider-DZK4ly6O.js";import"./Dialog-DTOlRROi.js";import"./RSPContexts-Da-kz4p_.js";import"./OverlayArrow-CJR0hx1K.js";import"./Collection-C5nhmh42.js";import"./CollectionBuilder-CdqbO1wf.js";import"./SelectionIndicator-22830iwM.js";import"./Separator-gCfZ79Ls.js";import"./SelectionManager-C1YqHNWY.js";import"./useCollator-7JXdm9sI.js";import"./FocusScope-Dxs6Wric.js";import"./VisuallyHidden-UazS1TBU.js";import"./OverlayTrigger-DkAzLvEk.js";import"./LoadingSpinner-CBIfE8tz.js";import"./browser-jjcexMIs.js";import"./EmulatedBoldText-D3kC_v2V.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
