import{j as r}from"./iframe-BZLAsPNC.js";import{N as o}from"./NumberField-JqaoTYgL.js";import{L as t}from"./Label-DKRPZs6o.js";import{F as c}from"./FieldDescription-Dh69MaGI.js";import{F as g}from"./FieldError-D2O_dT2D.js";import{C as x,a as b}from"./ContextualHelpTrigger-LgV73S23.js";import{B as h}from"./Button-CSRJ_rM3.js";import{T as F}from"./Text-oqqebshB.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-C5gewvzz.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./clsx-B-dksMZM.js";import"./index-CYjhUmDO.js";import"./IconWarning-BRgKnpuG.js";import"./remote-DD9qKW4I.js";import"./useControlledHostValueProps-D32lW-Mj.js";import"./Button-YUsFH9mL.js";import"./utils-GBJhPEt0.js";import"./ProgressBar-DjUlq4Bp.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DAhF5fA-.js";import"./context-B1QKiSyt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3AJe8l0.js";import"./useFocus-BAbXgSuO.js";import"./useFocusRing-DUiko_nB.js";import"./useFocusable-CJlLttAU.js";import"./FieldError-B9G53mk8.js";import"./Text-C0MYo1gI.js";import"./Form-CDvikIHs.js";import"./Group-D7D0OI93.js";import"./Input-av1t-akK.js";import"./useControlledState-BdOl-nfx.js";import"./useFormValidation-BLPWS9Vb.js";import"./useSpinButton-Ciqqq73j.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./useFormReset-B4usOE4z.js";import"./useEvent-BRYkpDGi.js";import"./useTextField-BnHH6rYj.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DgwQ_4kg.js";import"./AlertIcon-wpFTQr76.js";import"./Popover-aQEA2L0G.js";import"./useOverlayController-C7H6e68I.js";import"./context-Wd_RxxmY.js";import"./useStatic-CJRmLxnl.js";import"./OverlayContextProvider-BlSJPydV.js";import"./Dialog-BHTl5ZpY.js";import"./RSPContexts-DRyX1L5k.js";import"./OverlayArrow-D53qTIEL.js";import"./Collection-oaJ1OlFu.js";import"./CollectionBuilder-DNc7feWH.js";import"./SelectionIndicator--Gts2DGf.js";import"./Separator-kzi7KXEN.js";import"./SelectionManager-SkouX_in.js";import"./useCollator-CueQXTCK.js";import"./FocusScope-BleEWu6g.js";import"./VisuallyHidden-B55KrhOv.js";import"./OverlayTrigger-CosWzk9C.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./browser-D75BLayN.js";import"./EmulatedBoldText-i2HM1out.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
