import{j as r}from"./iframe-BBX1MRm7.js";import{N as o}from"./NumberField-CkDKrmDI.js";import{L as t}from"./Label-rzq6PBW8.js";import{F as c}from"./FieldDescription-D0h9kvob.js";import{F as g}from"./FieldError-DhG2ZYTr.js";import{C as x,a as b}from"./ContextualHelpTrigger-DtsneTo-.js";import{B as h}from"./Button-BqkPfHUM.js";import{T as F}from"./Text-bZjB6G95.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-B_qWTKJx.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./clsx-B-dksMZM.js";import"./index-CaVys9ny.js";import"./IconWarning-D1rdipwB.js";import"./remote-DQSNjr8v.js";import"./useControlledHostValueProps-DKX7miYN.js";import"./Button-BJia7Ggt.js";import"./utils-BavrKavc.js";import"./ProgressBar-BlLvdox5.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CwE3wslu.js";import"./context-CZSumH6g.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C19iJYYn.js";import"./useFocus-CEW7w8cP.js";import"./useFocusRing-Bm9tRP_O.js";import"./useFocusable-DP1OjJqD.js";import"./FieldError-C_UdMObt.js";import"./Text-Dx1GcOD_.js";import"./Form-CFIny17O.js";import"./Group-C1xuy7HP.js";import"./Input-DVyLg-xr.js";import"./useControlledState-hVcOsExM.js";import"./useFormValidation-CjGCqCfM.js";import"./useSpinButton-DoXlYfJ6.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./useFormReset--Sx8IrxJ.js";import"./useEvent-9YiOq-bW.js";import"./useTextField-Bwh7GfLW.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BesKIlLk.js";import"./AlertIcon-Bzw_XkQ4.js";import"./Popover-DfKYmgoY.js";import"./useOverlayController-UE1-I0TE.js";import"./context-CbNZJEnz.js";import"./useStatic-eT6_SwdI.js";import"./OverlayContextProvider-CeB4MDIB.js";import"./Dialog-DxFT1h3e.js";import"./RSPContexts-Bzvj4RyS.js";import"./OverlayArrow-CEy0Lp_c.js";import"./Collection-KvAmq1BM.js";import"./CollectionBuilder-CT5wpjPQ.js";import"./SelectionIndicator-BhUr7H-C.js";import"./Separator-CBat6_46.js";import"./SelectionManager-BqxHDxhn.js";import"./useCollator-BBRvdoV2.js";import"./FocusScope-geYyY5OG.js";import"./VisuallyHidden-B0NnPUX1.js";import"./OverlayTrigger-D5NXWXDN.js";import"./LoadingSpinner-D7vBft_f.js";import"./browser-94--rh0I.js";import"./EmulatedBoldText-B_ZrZeLf.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
