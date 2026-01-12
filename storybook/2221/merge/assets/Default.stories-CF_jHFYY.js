import{j as r}from"./iframe-Ca6Y6Qbd.js";import{N as o}from"./NumberField-C5ChECul.js";import{L as t}from"./Label-BiOSulbp.js";import{F as c}from"./FieldDescription-CPhIvjGD.js";import{F as g}from"./FieldError-Btuc_7Om.js";import{C as x,a as b}from"./ContextualHelpTrigger-C-tpRNIq.js";import{B as h}from"./Button-Cmpvhu71.js";import{T as F}from"./Text-BEUemzSa.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Drxg4ucu.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./clsx-B-dksMZM.js";import"./index-dqS1_mS3.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./useControlledHostValueProps-DPBYxvo9.js";import"./Button-BwNAbkAI.js";import"./utils-CgPiupY7.js";import"./ProgressBar-CbWR67C5.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./context-BSVjMcq9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-7njUzVdk.js";import"./useFocus-YlOppDM-.js";import"./useFocusRing-DB26dgIQ.js";import"./useFocusable-DsA9Nlin.js";import"./FieldError-DTh-affr.js";import"./Text-XI5tIYL5.js";import"./Form-DvyEl8-X.js";import"./Group-DMrJjXdW.js";import"./Input-zU6xkduX.js";import"./useControlledState-CsFJYMR6.js";import"./useFormValidation-CFRjiWi1.js";import"./useSpinButton-Cw4xt7bS.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./useFormReset-QXLzcWbc.js";import"./useEvent-CONOGrCj.js";import"./useTextField-DJ9r6KnP.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";import"./Popover-DUAQfyPS.js";import"./useOverlayController-D-zjYsKH.js";import"./context-BIxaIE9W.js";import"./useStatic-CLFM6Rz8.js";import"./OverlayContextProvider-Bf0QUNhT.js";import"./Dialog-B1e_uHMT.js";import"./RSPContexts-CuMU_eQB.js";import"./OverlayArrow-BonLfIYe.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./SelectionManager-08rbWnYj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./VisuallyHidden-DA0DNDbd.js";import"./OverlayTrigger-ONQN5d76.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./browser-CbMIui3y.js";import"./EmulatedBoldText-B497YwdM.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
