import{j as r}from"./iframe-DU1OTSEW.js";import{N as o}from"./NumberField-DVTUyCJa.js";import{L as t}from"./Label-BFsMAETu.js";import{F as c}from"./FieldDescription-BeeLUpCG.js";import{F as g}from"./FieldError-lAQ6GllT.js";import{C as x,a as b}from"./ContextualHelpTrigger-DdNKcdHO.js";import{B as h}from"./Button-C02FBbwW.js";import{T as F}from"./Text-BlwSaqXM.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DAmXFBUF.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./clsx-B-dksMZM.js";import"./index-Ben_k6_D.js";import"./IconWarning-BOLd-bsg.js";import"./remote-C4J6eDzq.js";import"./useControlledHostValueProps-FQAX2oVh.js";import"./Button-njBxl16I.js";import"./utils-Dj7KEBV3.js";import"./ProgressBar-ZiPbwj7h.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3DB9qnR.js";import"./context-MHXBCA58.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DCIqPyrL.js";import"./useFocus-u6Gylu9g.js";import"./useFocusRing-L_sy4AuI.js";import"./useFocusable-XjJjjkQd.js";import"./FieldError-C-1FXxCh.js";import"./Text-iBzBCpEi.js";import"./Form-DFVlj26J.js";import"./Group-DFJoPzzo.js";import"./Input-BRq7uXwq.js";import"./useControlledState-C4NYpY3o.js";import"./useFormValidation-Bnl6yMKM.js";import"./useSpinButton-kaAdWVw6.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./useFormReset-B6aj4tVR.js";import"./useEvent-BUR3uY3V.js";import"./useTextField-BJo9NeBV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DRGtE0Z7.js";import"./AlertIcon-_4be_GIR.js";import"./Popover-DKS3uTEp.js";import"./useOverlayController-CN_E_UXR.js";import"./useStatic-B4QbuKZS.js";import"./OverlayContextProvider-CEpEJiOz.js";import"./Dialog-rIHNVDTB.js";import"./RSPContexts-CELva0rI.js";import"./OverlayArrow-Bh5zDL_J.js";import"./Collection-BgHGMK_M.js";import"./CollectionBuilder-D9jRpqx4.js";import"./SelectionIndicator-BBXAzCHo.js";import"./Separator-ezkSicQA.js";import"./SelectionManager-BMrQ3jem.js";import"./useCollator-BcGn8FjN.js";import"./FocusScope-BR4Z_k_s.js";import"./VisuallyHidden---d_BDnt.js";import"./OverlayTrigger-Owxo0qVZ.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./browser-B-EQy8Zd.js";import"./EmulatedBoldText-IXPdWydI.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
