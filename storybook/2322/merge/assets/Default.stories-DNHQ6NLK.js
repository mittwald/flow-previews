import{j as r}from"./iframe-jPI25t47.js";import{N as o}from"./NumberField-ArG2vBmk.js";import{L as t}from"./Label-CVxkn5sg.js";import{F as c}from"./FieldDescription-BijM-gJh.js";import{F as g}from"./FieldError-DPfGZS1P.js";import{C as x,a as b}from"./ContextualHelpTrigger-DHc558Lv.js";import{B as h}from"./Button-CMdL10Ys.js";import{T as F}from"./Text-CzRKl4Rn.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CHdLkU8r.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./clsx-B-dksMZM.js";import"./index-mBlsDuvj.js";import"./IconWarning-D8uDJDej.js";import"./remote-B_as-6Bm.js";import"./useControlledHostValueProps-AQocOlOa.js";import"./Button-GVmiAxmL.js";import"./utils-DssEHlsW.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./context-yJg27e0-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bv9bKc9w.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./FieldError-C3mwkvrq.js";import"./Text-BUiBuDRU.js";import"./Form-BeysAUF2.js";import"./Group-CAA0eQzC.js";import"./Input-DUaj7rN4.js";import"./useControlledState-CujVadxA.js";import"./useFormValidation-aAlw1sTR.js";import"./useSpinButton-Dy8IMmq-.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./useFormReset-DGTIvKtn.js";import"./useEvent-DZfip6aA.js";import"./useTextField-BD2R3zQz.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";import"./Popover-BMY2UlYP.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./Dialog-C4XHiXzR.js";import"./RSPContexts-COITpNJr.js";import"./OverlayArrow-2srpU7pW.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./OverlayTrigger-DoiiNK8E.js";import"./LoadingSpinner-DhHtGG23.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
