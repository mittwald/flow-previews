import{j as r}from"./iframe-BoCc-iJU.js";import{N as o}from"./NumberField-B8QOFjKI.js";import{L as t}from"./Label-DGwnCcrv.js";import{F as c}from"./FieldDescription-DAwt_2_X.js";import{F as g}from"./FieldError-gHUqbDM9.js";import{C as x,a as b}from"./ContextualHelpTrigger-Dz4BHHHd.js";import{B as h}from"./Button-XooD-Xiy.js";import{T as F}from"./Text-CxsQklp2.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BP-lIfvD.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./clsx-B-dksMZM.js";import"./index-CpJJlR3B.js";import"./IconApp-C2RMdkv5.js";import"./remote-DSbtRD5R.js";import"./IconChevronDown-D9tEXZzD.js";import"./IconChevronUp-CUVmTPlI.js";import"./IconMinus-FO5fZv69.js";import"./IconPlus-CPRI0QfB.js";import"./useControlledHostValueProps-Cdc0IVz3.js";import"./Button-D6UvikyC.js";import"./utils-P0pc5_a9.js";import"./ProgressBar-2FpoVhjA.js";import"./Label-E_BXoGJl.js";import"./Hidden-7MHP_c1E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-msUyYt71.js";import"./context-BrFrKL-P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./FieldError-Cv1yZmyj.js";import"./Text-CwFr0z0b.js";import"./Form-AyX8lm4h.js";import"./Group-DUY-xJc3.js";import"./Input-BVdlr_HZ.js";import"./useControlledState-Bp_HlHxi.js";import"./useFormValidation-DSNLWRBM.js";import"./useSpinButton-ojZHExW6.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./useFormReset-Bkd1XrYX.js";import"./useEvent-2MJ1vmf8.js";import"./useTextField-Zsr4se75.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-CyJfzsCE.js";import"./Popover-4GpCHo5o.js";import"./OverlayContextProvider-CAxGx9pi.js";import"./context-xz8cKbOL.js";import"./useStatic-BIG45Iee.js";import"./Dialog-CZPzdPg7.js";import"./RSPContexts-ZqX2hjEE.js";import"./OverlayArrow-BflVffdz.js";import"./Collection-CTIB5Yac.js";import"./CollectionBuilder-pq_KYGFA.js";import"./SelectionIndicator-DXYS_YB1.js";import"./Separator-MSKztmUd.js";import"./SelectionManager-gKDO3ABG.js";import"./useCollator-8xA0jmsd.js";import"./FocusScope-DAKoy3Tt.js";import"./VisuallyHidden-Dalv-eS5.js";import"./useOverlayController--iCs4C_D.js";import"./OverlayTrigger-BZeciITt.js";import"./IconInfo-Dl8EXL_5.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./browser-BzlHG3zD.js";import"./EmulatedBoldText-CBFTpxXk.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const vr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,d as WithUnit,vr as __namedExportsOrder,Ur as default};
