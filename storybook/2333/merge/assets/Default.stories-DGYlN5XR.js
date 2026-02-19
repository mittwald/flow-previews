import{j as r}from"./iframe-CaMmm6JB.js";import{N as o}from"./NumberField-DoTZ-AhS.js";import{L as t}from"./Label-7z5ZqOim.js";import{F as c}from"./FieldDescription-ZK4hQ0pT.js";import{F as g}from"./FieldError-gBRSHyIP.js";import{C as x,a as b}from"./ContextualHelpTrigger-BV_yRWYD.js";import{B as h}from"./Button-Ccdb4ZyB.js";import{T as F}from"./Text-BytpHB1v.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-l9GEjfOW.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./clsx-B-dksMZM.js";import"./index-bUizOk6y.js";import"./IconWarning-CjIU5uAw.js";import"./remote-B2IWJRNM.js";import"./useControlledHostValueProps-CqHjqxx6.js";import"./Button-Br8oe_nB.js";import"./utils-BWel_6vJ.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BlkmcG0L.js";import"./context-COlkIlq2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bq52eadg.js";import"./useFocus-CsmVawkN.js";import"./useFocusRing-D0nVGfyc.js";import"./useFocusable-D5loONxI.js";import"./FieldError-rN2a2i1l.js";import"./Text-DltKapPO.js";import"./Form-DUaYRZYC.js";import"./Group-CbQ0bY4b.js";import"./Input-BR-ykejl.js";import"./useControlledState-DS3iWteE.js";import"./useFormValidation-BBrrlMUS.js";import"./useSpinButton-DuPUkMBH.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./useFormReset-B22K348z.js";import"./useEvent-DMru7c0E.js";import"./useTextField-Cus2TleU.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";import"./Popover-DzUJnTX8.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./OverlayContextProvider-_LkIzv60.js";import"./Dialog-YsZQ1_o0.js";import"./RSPContexts-HzcDbyvj.js";import"./OverlayArrow-BudvLkgn.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./OverlayTrigger-BDzY0sMA.js";import"./LoadingSpinner-D3IBMWR2.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
