import{j as r}from"./iframe-BECefjM4.js";import{N as o}from"./NumberField-CFSzktDH.js";import{L as t}from"./Label-CVvbUjW4.js";import{F as c}from"./FieldDescription-BgERXXFv.js";import{F as g}from"./FieldError-B21MiKyw.js";import{C as x,a as b}from"./ContextualHelpTrigger-uSPRjr5o.js";import{B as h}from"./Button-DAjxqCNq.js";import{T as F}from"./Text-lZ2PbEqF.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-B5iNz-5m.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./clsx-B-dksMZM.js";import"./index-BGQ8HYEh.js";import"./IconWarning-CvVn1QxU.js";import"./remote-CqI4D0us.js";import"./useControlledHostValueProps-Del_bpsM.js";import"./Button-CUoWVSdf.js";import"./utils-bqUpXLHN.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d0BVjP-J.js";import"./context-iJTSqlsV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-427CihAL.js";import"./useFocus-CIRpkrn7.js";import"./useFocusRing-DIpVtkGc.js";import"./useFocusable-DTBBh1VF.js";import"./FieldError-8R1qsZQS.js";import"./Text-IrzRAzMs.js";import"./Form-FdseNRzi.js";import"./Group-BHV0qvDi.js";import"./Input-BXsG1hsf.js";import"./useControlledState-2Tdfwl5E.js";import"./useFormValidation-I8j-SbQp.js";import"./useSpinButton-k5vWUYEG.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./useFormReset-CDquwT_C.js";import"./useEvent-C3AnDdDF.js";import"./useTextField-CmkUv5OG.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";import"./Popover-BRqnQ0aL.js";import"./useOverlayController-7vnF_84u.js";import"./context-mnhTcWwX.js";import"./useStatic-Bcu2QKMg.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./Dialog-BvIZXNXz.js";import"./RSPContexts-C61Ijawi.js";import"./OverlayArrow-C6gZr2kK.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./SelectionIndicator-B2vofSgQ.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useCollator-r-PMcESO.js";import"./FocusScope-CjCXh94P.js";import"./VisuallyHidden-GWiC-wFe.js";import"./OverlayTrigger-Cg8XmR5v.js";import"./LoadingSpinner-DXxHNnrx.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
