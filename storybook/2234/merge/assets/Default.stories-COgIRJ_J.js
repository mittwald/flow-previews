import{j as r}from"./iframe-y-Qy_Rwm.js";import{N as o}from"./NumberField-BPWil32M.js";import{L as t}from"./Label-DwZ1nY2p.js";import{F as c}from"./FieldDescription-CpWKNI_h.js";import{F as g}from"./FieldError-CHdxAWDK.js";import{C as x,a as b}from"./ContextualHelpTrigger-DYvEEZTa.js";import{B as h}from"./Button-BD4RfixQ.js";import{T as F}from"./Text-Dc6HCiIC.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BPtwnKvp.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./clsx-B-dksMZM.js";import"./index-DHyBIfcz.js";import"./IconWarning-CSZkcfVi.js";import"./remote-DXSfp6Hy.js";import"./useControlledHostValueProps-Br1cey4W.js";import"./Button-CDSdTdYv.js";import"./utils-Ek_OXClQ.js";import"./ProgressBar-Bi5AZMSy.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oIpNFQLF.js";import"./context-ukqkFony.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ginTfsZX.js";import"./useFocus-L_xbSTvo.js";import"./useFocusRing-TFugmXCf.js";import"./useFocusable-BPLcErJ9.js";import"./FieldError-B0Ilb29D.js";import"./Text-BUjonAbB.js";import"./Form-DvQjUgdb.js";import"./Group-_NOX1hM3.js";import"./Input-YVfVzY4s.js";import"./useControlledState-BivKNDQQ.js";import"./useFormValidation-49dCeNRi.js";import"./useSpinButton-DqnMYZ5h.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./useFormReset-DmoJehYX.js";import"./useEvent-D3WWLcmI.js";import"./useTextField-DGsPnemp.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CnTSLXpj.js";import"./AlertIcon-B-ySDH61.js";import"./Popover-E3KXF6KA.js";import"./useOverlayController-BBvbe3oK.js";import"./context-CYZaYtgr.js";import"./useStatic-6QMcNdFE.js";import"./OverlayContextProvider-B0VW5X20.js";import"./Dialog-yt0PwtsU.js";import"./RSPContexts-D6kJ8Blw.js";import"./OverlayArrow-BfgbGjhP.js";import"./Collection-wMGDOUBU.js";import"./CollectionBuilder-DNjjGXjQ.js";import"./SelectionIndicator-Ccu7nnnp.js";import"./Separator-BVG5NTNP.js";import"./SelectionManager-DlKr1lyz.js";import"./useCollator-QROY5xcX.js";import"./FocusScope-GXsPqTvD.js";import"./VisuallyHidden-uuI_aPdk.js";import"./OverlayTrigger-Ikn2lzdj.js";import"./LoadingSpinner-CaEX00sr.js";import"./browser-BkGSrLgH.js";import"./EmulatedBoldText-BWRuiDih.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
