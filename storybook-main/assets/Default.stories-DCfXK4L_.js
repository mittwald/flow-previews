import{j as r}from"./iframe-C-IsL8qN.js";import{N as o}from"./NumberField-C1QpTgHo.js";import{L as t}from"./Label-DkhLxI5s.js";import{F as c}from"./FieldDescription-D7MW9J-R.js";import{F as g}from"./FieldError-B5Qpz102.js";import{C as x,a as b}from"./ContextualHelpTrigger-Ct3inmbT.js";import{B as h}from"./Button-CjTDs8dt.js";import{T as F}from"./Text-zEwe4Yc5.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-neJhoipE.js";import"./flowComponent-DS36iIr8.js";import"./index-D9sZegdt.js";import"./clsx-B-dksMZM.js";import"./index-foeybvdq.js";import"./IconWarning-Dgpqm1wd.js";import"./remote-HwzzztjA.js";import"./useControlledHostValueProps-kWLUtspJ.js";import"./Button-Dm6X_wGa.js";import"./utils-CdIT7ixS.js";import"./ProgressBar-ZcSeAule.js";import"./Label-c2neL4nQ.js";import"./Hidden-BbPT9r2h.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C05pQW9y.js";import"./context-D_ogfP81.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bg3iVugG.js";import"./useFocus-NxQ40LWx.js";import"./useFocusRing-DAQnos8V.js";import"./useFocusable-9aQ0aONO.js";import"./FieldError-CqpMndtu.js";import"./Text-CQAUJHD3.js";import"./Form-4JRPVmTA.js";import"./Group-BKVJ7l2V.js";import"./Input-CALEgZ95.js";import"./useControlledState-D6WUL5XM.js";import"./useFormValidation-CE50eLV8.js";import"./useSpinButton-ge5VoaFU.js";import"./useLocalizedStringFormatter-DvhvnQe6.js";import"./useFormReset-ovy8PPed.js";import"./useEvent-BSeSfGFl.js";import"./useTextField-JzBNCLnO.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DKiC9lQT.js";import"./AlertIcon-Dd6PrMrE.js";import"./Popover-DCVoYnRB.js";import"./useOverlayController-BD3uXW3f.js";import"./context-DP3SZV7v.js";import"./useStatic-D3Nt3l-7.js";import"./OverlayContextProvider-BRD-Zchx.js";import"./Dialog-DhruM_-_.js";import"./RSPContexts-dApRMb3S.js";import"./OverlayArrow-Bm7lykW0.js";import"./Collection-BO8FiyTI.js";import"./CollectionBuilder-D--x571F.js";import"./SelectionIndicator-4Vq_x9qO.js";import"./Separator-BkJE4Q3g.js";import"./SelectionManager-tiaDTVEq.js";import"./useCollator-CUcFaXNY.js";import"./FocusScope-DMp-Wrqn.js";import"./VisuallyHidden-B09yhrQ-.js";import"./OverlayTrigger-emDMmbR-.js";import"./LoadingSpinner-DNWLy5dx.js";import"./browser-Dh90zeJL.js";import"./EmulatedBoldText-CbJEOPDL.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
