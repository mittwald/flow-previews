import{r as h,j as r}from"./iframe-B-_izELn.js";import{P as m}from"./PasswordCreationField-CkhOGPjq.js";import{L as u}from"./Label-xN0BMhRq.js";import{B as g}from"./Button-rB1lHab_.js";import{m as C}from"./IconWarning-DXXSRvhn.js";import{C as w}from"./CopyButton-ByCStsSO.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bdsqC1kS.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./clsx-B-dksMZM.js";import"./index-C24wTi9Q.js";import"./Action-CmZvSofW.js";import"./context--GYGv0Su.js";import"./useStatic-k4uG0_kr.js";import"./browser-C9rDHpHO.js";import"./getActionGroupSlot-DlereTwl.js";import"./FieldDescription-Bm61smCN.js";import"./Text-B9UK706u.js";import"./EmulatedBoldText-DO19SLv9.js";import"./Text-Cbq-V_qs.js";import"./utils-CTzaLK4l.js";import"./Tooltip-DmrzTt2y.js";import"./OverlayArrow-C1kYwcM3.js";import"./useFocus-BKzgn786.js";import"./ProgressBar-CGHlOl5l.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZiDffWU.js";import"./context-CP_ivtNk.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-tdUQVzVH.js";import"./useFocusable-I-aSrCr_.js";import"./useFocusRing-DHjGYA3Q.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./ContextualHelpTrigger-h5qI-wui.js";import"./Popover-BgKMlpHY.js";import"./useOverlayController-DRATrlGn.js";import"./OverlayContextProvider-CZWz1i-_.js";import"./Dialog-C6Hf8kgU.js";import"./Button-RawUYYof.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CDCEcfQ2.js";import"./RSPContexts-k_uvwm8O.js";import"./Collection-BlKc58PT.js";import"./CollectionBuilder-C9MyseWf.js";import"./SelectionIndicator-ey4emqqq.js";import"./Separator-xctm41Qr.js";import"./SelectionManager-Bstf7-gd.js";import"./useEvent-DwiqP_vq.js";import"./useCollator-Sj9w00om.js";import"./FocusScope-BQUCV4aX.js";import"./VisuallyHidden-DwaExAJM.js";import"./OverlayTrigger-DaYOrCfk.js";import"./Heading-BAMsaaGA.js";import"./Heading-DVKq7Ots.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-Kyt2SdHG.js";import"./FieldError-C2OlbqQW.js";import"./FieldError-2QNeUIGm.js";import"./AlertText-BdI1vJoj.js";import"./AlertIcon-DHh3kTXL.js";import"./useControlledHostValueProps-DNK8lF1k.js";import"./TextField-BAIaIFS9.js";import"./Form-CwweEOY6.js";import"./Group-CL4KrlTp.js";import"./Input-Ch7XH0d5.js";import"./useTextField-BA5-wrv-.js";import"./useFormReset-BUoUtOhQ.js";import"./useFormValidation-d7hQTD7K.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BCeR-IPA.js";import"./remote-DY2XWwFP.js";import"./react-children-utilities-z83JSavt.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
