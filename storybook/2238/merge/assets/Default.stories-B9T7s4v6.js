import{j as r}from"./iframe-B6FtZzVw.js";import{N as o}from"./NumberField-ByX1s2Ys.js";import{L as t}from"./Label-gGsAWD9A.js";import{F as c}from"./FieldDescription-DCDO5HYP.js";import{F as g}from"./FieldError-CuRjPN5X.js";import{C as x,a as b}from"./ContextualHelpTrigger-CEo8w5YR.js";import{B as h}from"./Button-HJgKWCOC.js";import{T as F}from"./Text-DPYEhwNL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BNMXDSB6.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./clsx-B-dksMZM.js";import"./index-DprtUoGy.js";import"./IconWarning-DEHpO9Uw.js";import"./remote-B6WYv1J0.js";import"./useControlledHostValueProps-CYn0S2kn.js";import"./Button-DJB2g2P-.js";import"./utils-B053wNrY.js";import"./ProgressBar-WnFa3ztv.js";import"./Label-BRHOOf6S.js";import"./Hidden-BRZRxZbR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CPIz2b8c.js";import"./context-D8VymAHE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bff_bCDv.js";import"./useFocus-DnpGAVhn.js";import"./useFocusRing-C0rO9rWF.js";import"./useFocusable-CPP8dzW4.js";import"./FieldError-BtAF49NH.js";import"./Text-Dn3IEVOe.js";import"./Form-CujqqqIN.js";import"./Group-Vwt0vhiT.js";import"./Input-CxAJMr-1.js";import"./useControlledState-ByagjwsX.js";import"./useFormValidation-C7j9z4Fo.js";import"./useSpinButton-CrxK7CMm.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./useFormReset-CRRhvvtY.js";import"./useEvent-CIqm2Tiz.js";import"./useTextField-DaLyIGOE.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-CXHYUzbK.js";import"./useOverlayController-B2SRK6I3.js";import"./context-DELIC-Xh.js";import"./useStatic-Du0weed2.js";import"./OverlayContextProvider-Cz4fsNbA.js";import"./Dialog-CxhUJg_S.js";import"./RSPContexts-Drji9jIz.js";import"./OverlayArrow-SzptHD46.js";import"./Collection-queVBp1u.js";import"./CollectionBuilder-D0uz5fgl.js";import"./SelectionIndicator-DqsRzLxq.js";import"./Separator-CFp2GX75.js";import"./SelectionManager-CX268vg2.js";import"./useCollator-DzvnCMzb.js";import"./FocusScope-Dv-pZR3t.js";import"./VisuallyHidden-kv_mk74c.js";import"./OverlayTrigger-DubAi8QM.js";import"./LoadingSpinner-DXuLs3WE.js";import"./browser-D2cTR9e8.js";import"./EmulatedBoldText-DD0WhK6h.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
