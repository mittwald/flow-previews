import{j as r}from"./iframe-BJ1-yygM.js";import{N as o}from"./NumberField-DNg-h_GQ.js";import{L as t}from"./Label-bQxZtSdp.js";import{F as c}from"./FieldDescription-Rja0j7vU.js";import{F as g}from"./FieldError-lhJwSH7g.js";import{C as x,a as b}from"./ContextualHelpTrigger-UT1RMToZ.js";import{B as h}from"./Button-Cjtrvck7.js";import{T as F}from"./Text-DheJl8Kj.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CZz1dHQJ.js";import"./flowComponent-DQ1h1TR6.js";import"./index-Du7YS11i.js";import"./clsx-B-dksMZM.js";import"./index-BJaBKPR5.js";import"./IconChevronDown-CrWkAVaz.js";import"./remote-CmT8aojC.js";import"./IconChevronUp-CTjIaNDi.js";import"./IconMinus-BkqQpWgW.js";import"./IconPlus-DcnD1nGG.js";import"./useControlledHostValueProps-eN6I3MnG.js";import"./Button-DhOdN5WZ.js";import"./utils-CcDDSJ_p.js";import"./ProgressBar-M3cNuExw.js";import"./Label-CzmfrLRz.js";import"./Hidden-DoQenIIt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C_0uKhPF.js";import"./context-CjOncL0b.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqKRozC0.js";import"./useFocus-BC8nQK7S.js";import"./useFocusRing-D91RCqts.js";import"./useFocusable-CM2LayHg.js";import"./FieldError-6-KO0iYn.js";import"./Text-CgGmMVxG.js";import"./Form-BhOz7HsW.js";import"./Group-D63yskOW.js";import"./Input-BS77WJBr.js";import"./useControlledState-CbxGCAex.js";import"./useFormValidation-tUUfdeof.js";import"./useSpinButton-D3Z7ucfp.js";import"./useLocalizedStringFormatter-C5JOLvkZ.js";import"./useFormReset-DyV6pE3E.js";import"./useEvent-BqUxelCP.js";import"./useTextField-Cjm7LB6I.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-CYKvK3jT.js";import"./Popover-BUtdYAK1.js";import"./OverlayContextProvider-Dkf9ZMKi.js";import"./context-C5k-fmhI.js";import"./useStatic-hN62Mrr5.js";import"./Dialog-e6B9GMJE.js";import"./RSPContexts-50ouH6ts.js";import"./OverlayArrow-C2s0LJSp.js";import"./Collection-BVEk6ex7.js";import"./CollectionBuilder-CVOjzY3Z.js";import"./SelectionIndicator-OOMR3Qmo.js";import"./Separator-CwS8pNTz.js";import"./SelectionManager-cQe1qOty.js";import"./useCollator-DQ7H9sze.js";import"./FocusScope-CXPBJiEJ.js";import"./VisuallyHidden-BOLsTiDm.js";import"./useOverlayController-DHl1wDZH.js";import"./OverlayTrigger-5palw4T3.js";import"./IconInfo-D8-cEu7p.js";import"./IconX-n5-6JmhA.js";import"./IconCheck-B4qlzGu9.js";import"./LoadingSpinner-Bwp7e6t0.js";import"./ariaLive-C1jz4QjY.js";import"./browser-DT5Kx7EO.js";import"./EmulatedBoldText-DCklMUI5.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ur=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,d as WithUnit,Ur as __namedExportsOrder,Ir as default};
