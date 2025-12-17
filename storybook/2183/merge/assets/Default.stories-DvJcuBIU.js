import{r as h,j as r}from"./iframe-CxIv4jMu.js";import{L as u}from"./Label-B_OvHsx4.js";import{B as g}from"./Button-Bv_lacgK.js";import"./IconApp-DXeuriH2.js";import{I as C}from"./IconDanger-WvpDQ4XT.js";import{C as w}from"./CopyButton-B_OVXDNN.js";import{P as m}from"./PasswordCreationField-C5hy6Um2.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-40FWo67L.js";import"./index-B5A5s8TF.js";import"./index-4jtxG-aw.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./context-XT4iJWgw.js";import"./Label-V3_Oag-T.js";import"./utils-BWuSdLWz.js";import"./Hidden-BIUsGAI2.js";import"./IconX-VSIHB7dF.js";import"./IconCheck-BZoeQ1G_.js";import"./Text-D7X_oIFw.js";import"./browser-mUCbKcee.js";import"./EmulatedBoldText-CtDmIXSm.js";import"./Text-C4fvncMS.js";import"./LoadingSpinner-BEv7DDuA.js";import"./ariaLive-BX5sV3Jf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BuINZUdg.js";import"./Button-FNhyxeGp.js";import"./ProgressBar-azejEpMz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-hxWbe3_X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CUBbufY7.js";import"./useFocus-ng3bQXxT.js";import"./useFocusRing-DX51MXuJ.js";import"./useFocusable-BUu5DuL9.js";import"./IconCopy-Bvykplfe.js";import"./Tooltip-BmNnNWRM.js";import"./OverlayArrow-C0nssBLY.js";import"./useControlledState-BE-Fn8Ja.js";import"./react-children-utilities-Ct3qss3x.js";import"./Action-Cq4Le8fd.js";import"./useStatic-WZbZ24So.js";import"./getActionGroupSlot-D-5616e_.js";import"./context-Di3B4AKc.js";import"./dynamic-BljurmiM.js";import"./FieldDescription-BwqMpCOu.js";import"./TranslationProvider-DjJ7Ysmq.js";import"./IconCircleCheck-bQcd4hme.js";import"./ContextualHelpTrigger-Ci3fLzs9.js";import"./Popover-J4OcnVW4.js";import"./OverlayContextProvider-B75krDNs.js";import"./Dialog-RjPLqENq.js";import"./RSPContexts-B1brESnT.js";import"./Collection-qySzQ4Tg.js";import"./CollectionBuilder-DsWaPC9T.js";import"./SelectionIndicator-BuBcSB3l.js";import"./Separator-DMSGPcYD.js";import"./SelectionManager-Do_Ta6ts.js";import"./useEvent-C9rtN4FC.js";import"./useCollator-CNR9Oibt.js";import"./FocusScope-D8y0iQpb.js";import"./VisuallyHidden-UJJZphkq.js";import"./useOverlayController-Bkc1EAsb.js";import"./OverlayTrigger-Dib8Vm9x.js";import"./IconInfo-BNrVxMDi.js";import"./Heading-DUie4X3j.js";import"./Heading-CMp60a3q.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-gOqU5qjG.js";import"./FieldError-DD8s_Iuw.js";import"./FieldError-B56fKNUE.js";import"./useControlledHostValueProps-DABy4eCt.js";import"./TextField-BBMRgmeU.js";import"./Form-48q0jMI2.js";import"./Group-SdAlNVRd.js";import"./Input-F9Cu5nN7.js";import"./useTextField-BmAs3MOD.js";import"./useFormReset-BBuG3pIa.js";import"./useFormValidation-NfxZ5VuI.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
