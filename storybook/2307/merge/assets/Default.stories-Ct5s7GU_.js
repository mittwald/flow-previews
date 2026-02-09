import{r as h,j as r}from"./iframe-XxUhdOIM.js";import{P as m}from"./PasswordCreationField-j81SGjlY.js";import{L as u}from"./Label-C4UQ1ENb.js";import{B as g}from"./Button-CGELadBW.js";import{m as C}from"./IconWarning-HmbpUhBv.js";import{C as w}from"./CopyButton-CCK9rjvM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DlcFrL20.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./clsx-B-dksMZM.js";import"./index-BSqFjc_t.js";import"./Action-uIBgr6h7.js";import"./context-DxgidNIJ.js";import"./useStatic-BtKbO9c7.js";import"./browser-DmOXQPuo.js";import"./getActionGroupSlot-UY0N-ZIa.js";import"./FieldDescription-Czgw_F0J.js";import"./Text-Cnwgd4MT.js";import"./EmulatedBoldText-p9aRLsBg.js";import"./Text-CyqmbAxA.js";import"./utils-BCq0Cvc3.js";import"./Tooltip-YC4psSGn.js";import"./OverlayArrow-4i6vqPwo.js";import"./useFocus-EZLK-muK.js";import"./ProgressBar-DoY0_w5k.js";import"./Label-ChQ-hUoB.js";import"./Hidden-Bb8MHfhN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BmkrUKzN.js";import"./context-DoTCerLu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B4cqEnOC.js";import"./useControlledState-BjbUFAiJ.js";import"./useFocusable-BMaOCfpv.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./ContextualHelpTrigger-BILPv0Zz.js";import"./Popover-CwounBp0.js";import"./useOverlayController-BEKeYHy5.js";import"./OverlayContextProvider-DKE9AqME.js";import"./Dialog-Cu17hg-L.js";import"./Button-C5sfG3Jr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C6bNQEHg.js";import"./RSPContexts-CtuUzpub.js";import"./Collection-Cp4O_cQl.js";import"./CollectionBuilder-CZOzXtpj.js";import"./SelectionIndicator-BvCJtDxS.js";import"./Separator-B_vWzLB2.js";import"./SelectionManager-BFRX4BxM.js";import"./useEvent-CS7e6qWg.js";import"./useCollator-C4FEsSYx.js";import"./FocusScope-Bd3CxSOo.js";import"./VisuallyHidden-BH7c3L8h.js";import"./OverlayTrigger-B9bnxvcN.js";import"./Heading-zbsC8ORu.js";import"./Heading-CZTrf3Od.js";import"./useFieldComponent-DmQ0NGCO.js";import"./FieldError-DsyIPYpb.js";import"./FieldError-D3qoIyxA.js";import"./AlertText-D9H4kctD.js";import"./AlertIcon-B-eIAqAY.js";import"./useControlledHostValueProps-CthJo39J.js";import"./TextField-CDsZNH3S.js";import"./Form-COPMshHH.js";import"./Group-Dd2BG_us.js";import"./Input-dBdn1-_7.js";import"./useTextField-CwerKLqg.js";import"./useFormReset-CjY5_fDt.js";import"./useFormValidation-nWIFBTgB.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-eRWTE9TH.js";import"./remote-6r6BNiZ9.js";import"./react-children-utilities-CIoXxu0-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
