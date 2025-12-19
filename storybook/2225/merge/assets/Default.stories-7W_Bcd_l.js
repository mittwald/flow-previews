import{j as r}from"./iframe-DyIQYB7R.js";import{N as o}from"./NumberField-tiNcXfJb.js";import{L as t}from"./Label-Bnl2XRS7.js";import{F as c}from"./FieldDescription-B_xnTVZs.js";import{F as g}from"./FieldError-Drb2NmJE.js";import{C as x,a as b}from"./ContextualHelpTrigger-CVQs5PL_.js";import{B as h}from"./Button-C3sAJBlh.js";import{T as F}from"./Text-DP5VQe4y.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BuMHMJdd.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./clsx-B-dksMZM.js";import"./index-BAJQpnn3.js";import"./IconWarning-BlqJF_wS.js";import"./remote-CduUCN7o.js";import"./useControlledHostValueProps-CeGl1VUq.js";import"./Button-BuUG1_MS.js";import"./utils-Br5k-T_U.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./context-DQwa7-Zw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DBMxrrfH.js";import"./useFocus-MkZ0Yize.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocusable-BzRC0Akk.js";import"./FieldError-CJCkmHNP.js";import"./Text--49tgveg.js";import"./Form-Ce0HMGMO.js";import"./Group-DlHcB2Sx.js";import"./Input-DTEp0DEd.js";import"./useControlledState-C9rhpCZz.js";import"./useFormValidation-BzfV6dUL.js";import"./useSpinButton-NH38DC39.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./useFormReset-DbNMnmkG.js";import"./useEvent-CtnbpMU6.js";import"./useTextField-CiDJOppJ.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-BS-N1A-i.js";import"./useOverlayController-BUDO6s9b.js";import"./context--viOmW11.js";import"./useStatic-CPovvC2L.js";import"./OverlayContextProvider-D2R86dNb.js";import"./Dialog-Bezv0IMM.js";import"./RSPContexts-D0G5Z96Z.js";import"./OverlayArrow-B8joZ1vL.js";import"./Collection-BGTuQL6n.js";import"./CollectionBuilder-DV1KSVZF.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./Separator-BxbCemNh.js";import"./SelectionManager-DkxBPn8A.js";import"./useCollator-CNrMRXe4.js";import"./FocusScope-CPYLtjFE.js";import"./VisuallyHidden-CpJBcPMb.js";import"./OverlayTrigger-Dkelca7C.js";import"./LoadingSpinner-BJz_a5cm.js";import"./browser-Dsy2EDmz.js";import"./EmulatedBoldText-B3WFDqoc.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
