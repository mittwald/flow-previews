import{j as r}from"./iframe-BuRyV86k.js";import{N as o}from"./NumberField-PVKWqmYF.js";import{L as t}from"./Label-D5Mh9PbX.js";import{F as c}from"./FieldDescription-DTtWzPY6.js";import{F as g}from"./FieldError-CyZxViQf.js";import{C as x,a as b}from"./ContextualHelpTrigger-C6PxEnH2.js";import{B as h}from"./Button-CyndH9Xm.js";import{T as F}from"./Text-DPwKDAaR.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Duyh6ShH.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./clsx-B-dksMZM.js";import"./index-DXDzX26U.js";import"./IconWarning-DAJxMizk.js";import"./remote-Cg9OAbJn.js";import"./useControlledHostValueProps-BxMuxOiL.js";import"./Button-0f0DNfgK.js";import"./utils-DCjU3VYp.js";import"./ProgressBar-sJd2s29u.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9drM0Q_0.js";import"./context-C6SHLczB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B_1LlkAk.js";import"./useFocus-CQWcTqjz.js";import"./useFocusRing-CY0UXM2e.js";import"./useFocusable-CtKU_QIU.js";import"./FieldError-BEkkBW9r.js";import"./Text-D3tRocSh.js";import"./Form-C4eLdnUU.js";import"./Group-Ct0D2Y45.js";import"./Input-BOqi5cwZ.js";import"./useControlledState-DYwoO1wA.js";import"./useFormValidation-DZRdJrD7.js";import"./useSpinButton-CX_BUm7V.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./useFormReset-BkHfz2ea.js";import"./useEvent-LxFJ0S3x.js";import"./useTextField-CPw5IR_g.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cq6PpkxX.js";import"./AlertIcon-CtbR1iuV.js";import"./Popover-BVSj5O_5.js";import"./useOverlayController-BJSaXgbE.js";import"./context-BBsiVWSW.js";import"./useStatic-Bozflp-3.js";import"./OverlayContextProvider-BEH_6rpJ.js";import"./Dialog-aD4BOG19.js";import"./RSPContexts-Czmfvb19.js";import"./OverlayArrow-DmdSnWXA.js";import"./Collection-BEHIjUyH.js";import"./CollectionBuilder-W32wrNWH.js";import"./SelectionIndicator-r0KfSIub.js";import"./Separator-Bz6jqVd_.js";import"./SelectionManager-CGRbj4b-.js";import"./useCollator-rSEenu5t.js";import"./FocusScope-DBYeUwg2.js";import"./VisuallyHidden-BxxKUxYt.js";import"./OverlayTrigger-BevBDs3M.js";import"./LoadingSpinner-BX044VJ0.js";import"./browser-DvnOBVed.js";import"./EmulatedBoldText-m_25Q3I7.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
