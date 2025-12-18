import{j as r}from"./iframe-Bqcpbrss.js";import{N as o}from"./NumberField-rBtramA0.js";import{L as t}from"./Label-DkmPPtXy.js";import{F as c}from"./FieldDescription-RQ7xrGTo.js";import{F as g}from"./FieldError-B_AiZFnH.js";import{C as x,a as b}from"./ContextualHelpTrigger-mm5vFTwN.js";import{B as h}from"./Button-Cnlerii9.js";import{T as F}from"./Text-BTcvwTq1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CI3p7oBW.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./clsx-B-dksMZM.js";import"./index-H5GW8qHY.js";import"./IconWarning-dEqiOsyE.js";import"./remote-DG6VBXek.js";import"./useControlledHostValueProps-DyxO0qOy.js";import"./Button-DylF7GCR.js";import"./utils-BJedWkRC.js";import"./ProgressBar-BzgTVPtx.js";import"./Label-B1GY4ZIq.js";import"./Hidden-BSWGkYgd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cn-M2zb9.js";import"./context-BrwEoz3A.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVO_DkHY.js";import"./useFocus-BCtAPQqm.js";import"./useFocusRing-tPpareNh.js";import"./useFocusable-C3Q_jzXL.js";import"./FieldError-DLGH1zeP.js";import"./Text-DG80-Tyy.js";import"./Form-CNSKTjy-.js";import"./Group-CL0L_n-j.js";import"./Input-RoH5kbBf.js";import"./useControlledState-BHyXOHwM.js";import"./useFormValidation-D7KvBPrT.js";import"./useSpinButton-D-ogGRRE.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./useFormReset-BuAWhlth.js";import"./useEvent-DW56id3t.js";import"./useTextField-DAg6DrtL.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-BzwM4JMX.js";import"./useOverlayController-b38M5Zqz.js";import"./context-ChzSVWNL.js";import"./useStatic-DxBp64zy.js";import"./OverlayContextProvider-BiPrc7hD.js";import"./Dialog-Dpg78GNT.js";import"./RSPContexts-DpyQuSVh.js";import"./OverlayArrow-BNJAVeF8.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./SelectionManager-eAq13b4p.js";import"./useCollator-B8UItRx2.js";import"./FocusScope-D6k82O5Z.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./OverlayTrigger-BuPKGzUB.js";import"./LoadingSpinner-CCDMAFHO.js";import"./browser-C4ue27yU.js";import"./EmulatedBoldText-CnuyczSs.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
