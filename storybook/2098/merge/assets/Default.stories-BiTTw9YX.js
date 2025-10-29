import{j as r}from"./iframe-B8r8XrPb.js";import{N as o}from"./NumberField-CX4BRAlz.js";import{L as t}from"./Label-PmVCxAho.js";import{F as c}from"./FieldDescription-B6QY2e39.js";import{F as g}from"./FieldError-Cr-OeICt.js";import{C as x,a as b}from"./ContextualHelpTrigger-0Jdr5s5r.js";import{B as h}from"./Button-x8S8uZ_3.js";import{T as F}from"./Text-CxxNxEUo.js";import"./index-nuYtCEEu.js";import"./useFieldComponent-DByhNd_z.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./clsx-B-dksMZM.js";import"./index-ChMccDi0.js";import"./utils-B2sHMxfy.js";import"./Text-DsIbOJYe.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-BX2g1WFh.js";import"./IconWarning-BnpSGPSL.js";import"./ReactAriaControlledValueFix-PV676lWb.js";import"./Button-DOtSsu3o.js";import"./ProgressBar-9fERUQ0g.js";import"./Label-DhvUjtv7.js";import"./Hidden-C0uurl-T.js";import"./useLabel-Bn_yI2FK.js";import"./context-d7knuPTA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BPC_OlSs.js";import"./useFocus-Co_XlsN_.js";import"./useFocusRing-DGaivw0f.js";import"./useFocusable-USAcjdfT.js";import"./Form-C0W2Agsa.js";import"./Group-DkjxT4kZ.js";import"./Input-Cyh52Hgt.js";import"./useControlledState-Dhb_P5xS.js";import"./useFormValidation-DuuScCCl.js";import"./useSpinButton-xd5u1ryO.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./useFormReset-Cpg0SQow.js";import"./useEvent-BY3XUUFC.js";import"./useTextField-BBBf5j1Z.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-CHTa2a8I.js";import"./context-tqHfsDuk.js";import"./useStatic-Qi3p0Ena.js";import"./OverlayContextProvider-C-xiKcZu.js";import"./Dialog-DJ22CsqV.js";import"./RSPContexts-Do_0M-hc.js";import"./OverlayArrow-Cf4VI4sB.js";import"./Collection-Dst8UlSd.js";import"./CollectionBuilder-C1D-HmCC.js";import"./SelectionIndicator-BHwOxkNR.js";import"./Separator-BqgRmmFG.js";import"./SelectionManager-kzjy3-H4.js";import"./useCollator-CG3LD3jQ.js";import"./FocusScope-DHLNAyY7.js";import"./VisuallyHidden-DvNHrLSk.js";import"./ClearPropsContextView-CH1TrHU5.js";import"./OverlayTrigger-e3uC-u8g.js";import"./ControlledNotification-DGY7ssQ6.js";import"./LoadingSpinner-bZO-WOXG.js";import"./browser-5JWtNQpe.js";import"./EmulatedBoldText-DH8-rljC.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
