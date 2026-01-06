import{r as h,j as r}from"./iframe-BAg_Vkif.js";import{P as m}from"./PasswordCreationField-z_X3SXy6.js";import{L as u}from"./Label-DDreQZVm.js";import{B as g}from"./Button-CNza9GnT.js";import{o as C}from"./IconWarning-eOJWxr99.js";import{C as w}from"./CopyButton-CvMxT_K_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-eE1nsZvE.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./clsx-B-dksMZM.js";import"./index-ClwrdcL8.js";import"./Action-BOjxF4Dl.js";import"./context-BAbefeLZ.js";import"./useStatic-DpED2Oge.js";import"./browser-CG8hIWrH.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./FieldDescription-BcT__64l.js";import"./Text-Cv_CDcg6.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./Text-B1sdohWQ.js";import"./utils-BI8UFEcl.js";import"./Tooltip-DRmqfEDE.js";import"./OverlayArrow-CH26SGjP.js";import"./useFocus-L8RhZ1QR.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./context-Dr2F39lD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C63VSZxO.js";import"./useFocusable-0NuZ-hi3.js";import"./useFocusRing-D5C_zsQK.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./ContextualHelpTrigger-B_EOy6mK.js";import"./Popover-DljJ0khj.js";import"./useOverlayController-DRKioFUp.js";import"./OverlayContextProvider-Bkht6Vbm.js";import"./Dialog-BlnwYq_Z.js";import"./Button-UGLVSCHM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNrva4v9.js";import"./RSPContexts-DM5FD37h.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./VisuallyHidden-0Cja9mQD.js";import"./OverlayTrigger-JJZBSc9G.js";import"./Heading-Dn2ss8TC.js";import"./Heading-DM0DAFfT.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-B6Kjd1ej.js";import"./FieldError-C6VlTPyB.js";import"./FieldError-CzfSrdz6.js";import"./InlineAlert-mZj4wy81.js";import"./AlertIcon-Ce-Fu2Pm.js";import"./useControlledHostValueProps-Ccn5EjqQ.js";import"./TextField-yGQ0KKZp.js";import"./Form-YKM3tWZS.js";import"./Group-W4MUpB1W.js";import"./Input-E6SU_N0O.js";import"./useTextField-v_8aHGWN.js";import"./useFormReset-cz3XyTOd.js";import"./useFormValidation-2zAOI2ZU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BktXBT1I.js";import"./remote-OUS6bpte.js";import"./react-children-utilities-Ck8_pp6j.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
