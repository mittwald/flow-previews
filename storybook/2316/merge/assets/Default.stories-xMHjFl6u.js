import{j as r}from"./iframe-BWSm23JV.js";import{N as o}from"./NumberField-D_kDLOSk.js";import{L as t}from"./Label-T9tt80_8.js";import{F as c}from"./FieldDescription-DaTX6mR9.js";import{F as g}from"./FieldError-DNnGmqvO.js";import{C as x,a as b}from"./ContextualHelpTrigger-7Bj_v541.js";import{B as h}from"./Button-B45r898z.js";import{T as F}from"./Text-BaJ5HEnd.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Cr8cfCaw.js";import"./flowComponent-JjUcob8a.js";import"./index-dkn6ScVQ.js";import"./clsx-B-dksMZM.js";import"./index-D0YiHBOl.js";import"./IconWarning-R37DsKRA.js";import"./remote-DcEXMbRM.js";import"./useControlledHostValueProps-BuR1Cm_k.js";import"./Button-DWVSyZOa.js";import"./utils-Dla7ZNEN.js";import"./ProgressBar-CVcTQ1yy.js";import"./Label--12nIVsO.js";import"./Hidden-C-tiV80t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C6wIzqCz.js";import"./context-4oRtfVxK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C_E4YsZw.js";import"./useFocus-CrlSoDhl.js";import"./useFocusRing-CI0bGTjl.js";import"./useFocusable-7cwTszGB.js";import"./FieldError-BA3GdU0H.js";import"./Text-DreghWw5.js";import"./Form-DKTVNEPJ.js";import"./Group-BVyYtesD.js";import"./Input-Cdu3oBr0.js";import"./useControlledState-BdTYoDdO.js";import"./useFormValidation-C5ZFiF_6.js";import"./useSpinButton-Cneza5Qi.js";import"./useLocalizedStringFormatter-BKZxLutv.js";import"./useFormReset-DeveCpy2.js";import"./useEvent-BAiWPb0X.js";import"./useTextField-C3k-FBa_.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-b5oldDtH.js";import"./AlertIcon-CwdoSZHL.js";import"./Popover-BA8B3sEd.js";import"./useOverlayController-dPOs3tXC.js";import"./context-DzxYIN56.js";import"./useStatic-B14v8lYB.js";import"./OverlayContextProvider-Bxu2XFRl.js";import"./Dialog-uisnl94N.js";import"./RSPContexts--whDujQs.js";import"./OverlayArrow-Lv31M_SN.js";import"./Collection-7HXUzyj9.js";import"./CollectionBuilder-CIbQ3PZQ.js";import"./SelectionIndicator-2rIWK9av.js";import"./Separator-7FCd2LVI.js";import"./SelectionManager-CahjVjpE.js";import"./useCollator-68O4Bddb.js";import"./FocusScope-C7G-5g6h.js";import"./VisuallyHidden-BTdnLv2k.js";import"./OverlayTrigger-Cn0zy4Sq.js";import"./LoadingSpinner-CWXG4qcN.js";import"./browser-S_Q3Hufb.js";import"./EmulatedBoldText-Bqi8zNtS.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
