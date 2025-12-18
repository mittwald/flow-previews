import{j as r}from"./iframe-BmKAGSU1.js";import{N as o}from"./NumberField-DKXN_xr8.js";import{L as t}from"./Label-8kdX7ehW.js";import{F as c}from"./FieldDescription-C007Rd_u.js";import{F as g}from"./FieldError-DTx5qYoC.js";import{C as x,a as b}from"./ContextualHelpTrigger-Duon5ZW3.js";import{B as h}from"./Button-LvEI1uQm.js";import{T as F}from"./Text-C9Y-BRqi.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DWe8fYc4.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./clsx-B-dksMZM.js";import"./index-D3Sif_iZ.js";import"./IconWarning-imbji-Kz.js";import"./remote-DfYMV5Tv.js";import"./useControlledHostValueProps-ByJyWAjG.js";import"./Button-C5vvsijg.js";import"./utils-g5fx1pEf.js";import"./ProgressBar-Cladi115.js";import"./Label-CQLEPw36.js";import"./Hidden-tXnJ8R5f.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-gR0_832q.js";import"./context-CxuOL-5x.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-JhlebSO6.js";import"./useFocus-BW6_4Fc3.js";import"./useFocusRing-DBug8spT.js";import"./useFocusable-BP0ye7iu.js";import"./FieldError-DtXh5FLR.js";import"./Text-CWVum_CA.js";import"./Form-B3BOXvjK.js";import"./Group-zAJTMebT.js";import"./Input-aV6cWdAR.js";import"./useControlledState-TVCSEq66.js";import"./useFormValidation-BWMCHu6j.js";import"./useSpinButton-Isy5a7J9.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./useFormReset-DXCfJDY-.js";import"./useEvent-B00NxYME.js";import"./useTextField-DiMLAs4x.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-BiEUztWm.js";import"./useOverlayController-BB86-6rb.js";import"./context-B4Nnt3qw.js";import"./useStatic-7Dbn5SyA.js";import"./OverlayContextProvider-BxylxdNW.js";import"./Dialog-DjPgQ4DH.js";import"./RSPContexts-BuF39hXg.js";import"./OverlayArrow-B9cbB1QQ.js";import"./Collection-DGvFsPwb.js";import"./CollectionBuilder-CAguRQCp.js";import"./SelectionIndicator-tnK26Qqc.js";import"./Separator-D_YsxVNC.js";import"./SelectionManager-ohd2qk3I.js";import"./useCollator-3U7lxjuh.js";import"./FocusScope-ByKxlNca.js";import"./VisuallyHidden-Db2xRfqF.js";import"./OverlayTrigger-CUUsPguv.js";import"./LoadingSpinner-ZBVW6cS6.js";import"./browser-SWtWUPW6.js";import"./EmulatedBoldText-DkbId6Zn.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
