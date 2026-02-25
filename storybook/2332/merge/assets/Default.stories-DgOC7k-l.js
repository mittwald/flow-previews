import{j as r}from"./iframe-DCel2PhG.js";import{N as o}from"./NumberField-DpFudR4L.js";import{L as t}from"./Label-DVkF56bm.js";import{F as c}from"./FieldDescription-ChM1MP2a.js";import{F as g}from"./FieldError-DI0hFked.js";import{C as x,a as b}from"./ContextualHelpTrigger-bHjB4hdv.js";import{B as h}from"./Button-CjhaH8vt.js";import{T as F}from"./Text-CfcNN3C1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CWMmv0d5.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./clsx-B-dksMZM.js";import"./index-DcvCSlSd.js";import"./IconWarning-CNMqfC0c.js";import"./remote-MfAOzJwE.js";import"./useControlledHostValueProps-DRZV2yGu.js";import"./Button-Dbr1_oBf.js";import"./utils-jFfJrK0I.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-V0mABmwM.js";import"./context-ChvTJ1gc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-l6QeQysM.js";import"./useFocus-BSXyJlKK.js";import"./useFocusRing-D6latAqm.js";import"./useFocusable-CF_X-2Wu.js";import"./FieldError-QICB5hyW.js";import"./Text-H5k4jR7L.js";import"./Form-BsISnRaP.js";import"./Group-yuR7pI6G.js";import"./Input-D8WhG3Nd.js";import"./useControlledState-uXSCouXp.js";import"./useFormValidation-CVEw0jVb.js";import"./useSpinButton-CXwX6w2r.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./useFormReset-DvzBERJE.js";import"./useEvent-CN9vdLun.js";import"./useTextField-C88_NvvV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CGICoaW7.js";import"./AlertIcon-C6GnHejw.js";import"./Popover-C8zyal55.js";import"./useOverlayController-BAgKybrq.js";import"./useStatic-Gj7JsFzP.js";import"./OverlayContextProvider-BfHmVY35.js";import"./Dialog-BnrJ3EGg.js";import"./RSPContexts-BWRH8UQz.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./SelectionIndicator-DYHfPyq2.js";import"./Separator-BB0Sm4E2.js";import"./SelectionManager-CIJEtr4-.js";import"./useCollator-qJfX3fiN.js";import"./FocusScope-BrLtMtFa.js";import"./VisuallyHidden-giqV-lwH.js";import"./OverlayTrigger-BYr1biz5.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./browser-ChoxEgkm.js";import"./EmulatedBoldText-6uMsyrU3.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
