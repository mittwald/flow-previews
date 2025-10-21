import{r as h,j as r}from"./iframe-D_6zdLny.js";import{P as m}from"./PasswordCreationField-Bju299oi.js";import{L as u}from"./Label-DYStaM4r.js";import{B as g}from"./Button-Hd0_GbPh.js";import{l as C}from"./IconWarning-L8yPVfI5.js";import{C as w}from"./CopyButton-CdGSUHnu.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./Group-DD12aKc0.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocus-D07R-Di8.js";import"./Input-DeyWgLjK.js";import"./Hidden-BN9nl5w0.js";import"./TextField-DJdiP2AD.js";import"./RSPContexts-0i8aci_3.js";import"./Form-BEwxiqG9.js";import"./useLabel-BujF7oZS.js";import"./Label-iDSBX_9z.js";import"./useTextField-CgNiWdPW.js";import"./useFormReset-jO9kfZl0.js";import"./useControlledState-G8Ia7XKM.js";import"./useFocusable-pGYT2QRf.js";import"./useFormValidation-B8Bdwi3p.js";import"./FormField.module-CqWyJNQI.js";import"./Action-CDIAK01E.js";import"./context-BfwnKq6d.js";import"./useStatic-MV172PRo.js";import"./browser-D7xr6uHh.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./FieldError-ojCue57q.js";import"./FieldDescription-BmjEGOaL.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./Tooltip-CBeddeiC.js";import"./ClearPropsContextView-BWtGAMVv.js";import"./OverlayArrow-vA-0UH51.js";import"./ProgressBar-DN3pMQzV.js";import"./context-BMSZp_sq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./ReactAriaControlledValueFix-CrUxtzb_.js";import"./ContextualHelpTrigger-BPPTMqzq.js";import"./Popover-B3PEdI3k.js";import"./useOverlayController-ClIsDnWC.js";import"./OverlayContextProvider-D1-D5Oi5.js";import"./Dialog-RcAnAvxk.js";import"./Button-Dk-D3x3z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-HrT7PLB3.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./OverlayTrigger-DoYQAlMH.js";import"./ControlledNotification-BZb_de0x.js";import"./Heading-DUx_7A94.js";import"./Heading-CDoCnjT3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-B8yM6Auw.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./react-children-utilities-CrsSGPVd.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
