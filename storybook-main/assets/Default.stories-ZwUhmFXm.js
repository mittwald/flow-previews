import{r as h,j as r}from"./iframe-BLisfkW1.js";import{P as m}from"./PasswordCreationField-1zFjF3D-.js";import{L as u}from"./Label-C4q0QTf_.js";import{B as g}from"./Button-BfYq4-Jl.js";import{m as C}from"./IconWarning-Chxh05Fa.js";import{C as w}from"./CopyButton-87VtO5MK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B3kpKjwM.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./clsx-B-dksMZM.js";import"./index-CURFR8tK.js";import"./ActionBatch-Ba3fo7J6.js";import"./useOverlayController-UaqgI9Sz.js";import"./useStatic-Cf1wupkY.js";import"./browser-1YnzmFhG.js";import"./getActionGroupSlot-JAeF61ot.js";import"./FieldDescription-C0N-joI8.js";import"./Text-BzdTXRF7.js";import"./EmulatedBoldText-w1zEViUr.js";import"./Text-CMQTkDl6.js";import"./utils-B2KexK2G.js";import"./Tooltip-BW14Cule.js";import"./OverlayArrow-CazCWSIw.js";import"./useFocus-CasiJiIj.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DktisoZ5.js";import"./context-B09EtTwC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-whNl8W73.js";import"./useControlledState-BzKS6zrg.js";import"./useFocusable-2bJXkpaN.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./ContextualHelpTrigger-CC3P8Y97.js";import"./Popover-CG9tv1E3.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./Dialog-YGNnE7N8.js";import"./Button-BryrJTx5.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bt2uh0Mh.js";import"./RSPContexts-C6v4G0P9.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./VisuallyHidden-y8IU71vp.js";import"./OverlayTrigger-47H3bobw.js";import"./Heading-D7iYFS4a.js";import"./Heading-BRGk0Lny.js";import"./useFieldComponent-DG2srt-t.js";import"./FieldError-ClH5zNHK.js";import"./FieldError-BmP7KZUf.js";import"./AlertText-DXmhqwQY.js";import"./AlertIcon-BH2ywHIc.js";import"./useControlledHostValueProps-ioDLOzJF.js";import"./TextField-BR3eT1Aq.js";import"./Form-mlAsayVr.js";import"./Group-PbN8ryVA.js";import"./Input-BNQv7Er9.js";import"./useTextField-Dd6gALjE.js";import"./useFormReset-fweVV-SC.js";import"./useFormValidation-BvwbNbVP.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./remote-fMZF2a4s.js";import"./react-children-utilities-CzU4xKRl.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
