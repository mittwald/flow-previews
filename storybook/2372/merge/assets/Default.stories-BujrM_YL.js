import{j as r}from"./iframe-C1IdntWq.js";import{N as o}from"./NumberField-DpC0hnmQ.js";import{L as t}from"./Label-Be-SvMDa.js";import{F as c}from"./FieldDescription-CN54GY3S.js";import{F as g}from"./FieldError-DsJ8c-ZE.js";import{C as x,a as b}from"./ContextualHelpTrigger-Bwl1TLoX.js";import{B as h}from"./Button-mSWnhOmK.js";import{T as F}from"./Text-W7h8_LNr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-o_u9PYdj.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./clsx-B-dksMZM.js";import"./index-Coy6T-Pa.js";import"./IconWarning-BY-3yqWN.js";import"./remote-DdxKfasm.js";import"./useControlledHostValueProps-B0HcYsZy.js";import"./Button-C7cBjDhV.js";import"./utils-CNo0qaX0.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CAzlzskU.js";import"./context-CuxmdylV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIzz4kJt.js";import"./useFocus-HLQCbRtK.js";import"./useFocusRing-DQuA22ZQ.js";import"./useFocusable-Z0Y9nSjp.js";import"./FieldError-DgBT4dcF.js";import"./Text-CkLpWhuM.js";import"./Form-CijQ_R7m.js";import"./Group-DCbRkIJ9.js";import"./Input-Des9E_um.js";import"./useControlledState-FuYpKfPj.js";import"./useFormValidation-CloSy7V5.js";import"./useSpinButton-BJ4w7gJh.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./useFormReset-CaX1fgpZ.js";import"./useEvent-C_lXtwpa.js";import"./useTextField-DDX9uSSl.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";import"./Popover-BzNCFXu7.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./OverlayContextProvider-Car-oabl.js";import"./Dialog-DaGSiRkj.js";import"./RSPContexts-DcVP09I4.js";import"./OverlayArrow-DbaAbVnX.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./SelectionIndicator-DffOr8wA.js";import"./Separator-B7Oy5oGV.js";import"./SelectionManager-DepyWfPp.js";import"./useCollator-BHhXYjcX.js";import"./FocusScope-C2GkFJYp.js";import"./VisuallyHidden-709t6SxP.js";import"./OverlayTrigger-B9t-MDtI.js";import"./LoadingSpinner-C4dBxxC2.js";import"./browser-WXx3m9ky.js";import"./EmulatedBoldText-COIRRGWk.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
