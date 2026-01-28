import{j as r}from"./iframe-B-26223i.js";import{N as o}from"./NumberField-Bg06OHX0.js";import{L as t}from"./Label-htHf1MZ3.js";import{F as c}from"./FieldDescription-DQk95Kge.js";import{F as g}from"./FieldError-DKJxt2u7.js";import{C as x,a as b}from"./ContextualHelpTrigger-DYImvMVH.js";import{B as h}from"./Button-B60fo84_.js";import{T as F}from"./Text-C25EED6m.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-eul3OsXk.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./clsx-B-dksMZM.js";import"./index-CMj-JRml.js";import"./IconWarning-CfZm6euj.js";import"./remote-CUr3PG4h.js";import"./useControlledHostValueProps-mi_fea-8.js";import"./Button-C9Zg0tM0.js";import"./utils-CprJ_klo.js";import"./ProgressBar-DwD1l90a.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUREvcwl.js";import"./context-B9n95xcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlwAXRn7.js";import"./useFocus-DYSsUR82.js";import"./useFocusRing-DATGHg9y.js";import"./useFocusable-CRgLtiVg.js";import"./FieldError-B1RwUwkr.js";import"./Text-CrdzXlCc.js";import"./Form-Vtk-UJSV.js";import"./Group-DQX_CbI0.js";import"./Input-C02u9QAf.js";import"./useControlledState-CCY4nzRh.js";import"./useFormValidation-CodwuA9r.js";import"./useSpinButton-CWFJSyKK.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./useFormReset-BQreYCpE.js";import"./useEvent-C1z2hzAA.js";import"./useTextField-CNHOwRrb.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-SDytihrL.js";import"./AlertIcon-Bi7YC7dH.js";import"./Popover-iofx4eop.js";import"./useOverlayController-Bd-vbTeq.js";import"./context-JKAIHclB.js";import"./useStatic-DyURBROl.js";import"./OverlayContextProvider-DL8WNCgz.js";import"./Dialog-COoPEj_z.js";import"./RSPContexts-Braq8AdO.js";import"./OverlayArrow-Cnkc5XCY.js";import"./Collection-DFxwbH7P.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./SelectionIndicator-DrGDjKtL.js";import"./Separator-Bc4LdP2j.js";import"./SelectionManager-BbjsNIkI.js";import"./useCollator-cEvXopFB.js";import"./FocusScope-BG92zKg5.js";import"./VisuallyHidden-DpBOnOEH.js";import"./OverlayTrigger-DHG4FXf-.js";import"./LoadingSpinner-CNdw31t2.js";import"./browser-DNWQphaZ.js";import"./EmulatedBoldText-Co4v7GV8.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
