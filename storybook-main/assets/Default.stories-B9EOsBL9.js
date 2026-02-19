import{j as r}from"./iframe-C9fwoqx7.js";import{N as o}from"./NumberField-DNrwL-9K.js";import{L as t}from"./Label-DUuytyEq.js";import{F as c}from"./FieldDescription-DltXYTvv.js";import{F as g}from"./FieldError-v5ZAFD64.js";import{C as x,a as b}from"./ContextualHelpTrigger-Dj2UTy1u.js";import{B as h}from"./Button-C7pOzOnK.js";import{T as F}from"./Text-D7jvp7G5.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-HwWxBPXP.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./clsx-B-dksMZM.js";import"./index-CbFgIt9G.js";import"./IconWarning-slnz76yl.js";import"./remote-B-ZPT6P_.js";import"./useControlledHostValueProps-BHcv3dRP.js";import"./Button-DDn45mdd.js";import"./utils-Cx2L-iDs.js";import"./ProgressBar-Dby2U7oR.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BNdvaiV7.js";import"./context-C2ecxi5G.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-tgKXO9PL.js";import"./useFocus-CMKZ5vES.js";import"./useFocusRing-s7_3pCWo.js";import"./useFocusable-CQiYog1P.js";import"./FieldError-CEVb6xPQ.js";import"./Text-xqSfQxLT.js";import"./Form-Dcg-_ctE.js";import"./Group-BetC_vI7.js";import"./Input-DtMnFP30.js";import"./useControlledState-BJuMvqvK.js";import"./useFormValidation-B19EocOE.js";import"./useSpinButton-BKfWqiGI.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./useFormReset-Bm_Lqolg.js";import"./useEvent-bSDrPC6p.js";import"./useTextField-B1VR3mtO.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-GfFdH1ck.js";import"./AlertIcon-Bz6wfr4x.js";import"./Popover-BDNR50NM.js";import"./useOverlayController-CqYUXVnh.js";import"./useStatic-9-ugXzKa.js";import"./OverlayContextProvider-DAx33Jid.js";import"./Dialog-yhzZwH_k.js";import"./RSPContexts-mF4XBTs4.js";import"./OverlayArrow-DDmkn5_8.js";import"./Collection-C29JJn0j.js";import"./CollectionBuilder-ta_UQL8r.js";import"./SelectionIndicator-nEc_xgxs.js";import"./Separator-ykHU2h0d.js";import"./SelectionManager-D2Ty-b9W.js";import"./useCollator-CTWpXcx6.js";import"./FocusScope-Ci8EWXmX.js";import"./VisuallyHidden-1IKUNS-e.js";import"./OverlayTrigger-BodK83ZQ.js";import"./LoadingSpinner-BWPVzhoG.js";import"./browser-B4JTTu9h.js";import"./EmulatedBoldText-CtQh5tnB.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
