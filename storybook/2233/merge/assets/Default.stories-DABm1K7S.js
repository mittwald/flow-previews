import{j as r}from"./iframe-BAg_Vkif.js";import{N as o}from"./NumberField-BEB9bFU_.js";import{L as t}from"./Label-DDreQZVm.js";import{F as c}from"./FieldDescription-BcT__64l.js";import{F as g}from"./FieldError-C6VlTPyB.js";import{C as x,a as b}from"./ContextualHelpTrigger-B_EOy6mK.js";import{B as h}from"./Button-CNza9GnT.js";import{T as F}from"./Text-Cv_CDcg6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-B6Kjd1ej.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./clsx-B-dksMZM.js";import"./index-ClwrdcL8.js";import"./IconWarning-eOJWxr99.js";import"./remote-OUS6bpte.js";import"./useControlledHostValueProps-Ccn5EjqQ.js";import"./Button-UGLVSCHM.js";import"./utils-BI8UFEcl.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./context-Dr2F39lD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./FieldError-CzfSrdz6.js";import"./Text-B1sdohWQ.js";import"./Form-YKM3tWZS.js";import"./Group-W4MUpB1W.js";import"./Input-E6SU_N0O.js";import"./useControlledState-C63VSZxO.js";import"./useFormValidation-2zAOI2ZU.js";import"./useSpinButton-VK-SeEsJ.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./useFormReset-cz3XyTOd.js";import"./useEvent-CvZlzKtX.js";import"./useTextField-v_8aHGWN.js";import"./Label.module-CUYTf9Jc.js";import"./InlineAlert-mZj4wy81.js";import"./AlertIcon-Ce-Fu2Pm.js";import"./Popover-DljJ0khj.js";import"./useOverlayController-DRKioFUp.js";import"./context-BAbefeLZ.js";import"./useStatic-DpED2Oge.js";import"./OverlayContextProvider-Bkht6Vbm.js";import"./Dialog-BlnwYq_Z.js";import"./RSPContexts-DM5FD37h.js";import"./OverlayArrow-CH26SGjP.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./SelectionManager-DlI-VKzy.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./VisuallyHidden-0Cja9mQD.js";import"./OverlayTrigger-JJZBSc9G.js";import"./LoadingSpinner-BktXBT1I.js";import"./browser-CG8hIWrH.js";import"./EmulatedBoldText-Dzw3SPd4.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
