import{r as h,j as r}from"./iframe-Dcjk2TLd.js";import{P as m}from"./PasswordCreationField-CtnSBzlF.js";import{L as u}from"./Label-BZxLRpn6.js";import{B as g}from"./Button-D-jN4scm.js";import{m as C}from"./IconWarning-4NWKkNon.js";import{C as w}from"./CopyButton-D9Vkofce.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8BmLFRX.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./clsx-B-dksMZM.js";import"./index-DmOV_yi6.js";import"./Action-D6NQe9wE.js";import"./context-Dbo8u0HC.js";import"./useStatic-DYXSIhuP.js";import"./browser-B8c1tkp7.js";import"./getActionGroupSlot-Cfz4NNN9.js";import"./FieldDescription-DaAB6M4B.js";import"./Text-lyGbob8n.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Text-zDtUk3hp.js";import"./utils-C4npX7la.js";import"./Tooltip-yopeheRo.js";import"./OverlayArrow-Pu-KF2yi.js";import"./useFocus-B7gP7G3p.js";import"./ProgressBar-lCiNiuDc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKc5oqWD.js";import"./context-pAIzfbng.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DBXDF7mL.js";import"./useFocusable-K4tA3zQn.js";import"./useFocusRing-HFiDNYir.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./ContextualHelpTrigger-DT37ma-r.js";import"./Popover-v14vQrIU.js";import"./useOverlayController-Bka7Uz7O.js";import"./OverlayContextProvider-BL4zS0NQ.js";import"./Dialog-Cncwnvc2.js";import"./Button-D3PtZgc0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CbiP5Rr9.js";import"./RSPContexts-0k8dpTCB.js";import"./Collection-CNopuRoq.js";import"./CollectionBuilder-DaoTf73F.js";import"./SelectionIndicator-BH1NdgMT.js";import"./Separator-DtdWWDk6.js";import"./SelectionManager-i-R_bo58.js";import"./useEvent-jxPbXkhM.js";import"./useCollator-CvofTPx7.js";import"./FocusScope-CNP9Koh8.js";import"./VisuallyHidden-D01b8Wlz.js";import"./OverlayTrigger-Cf-WmxV6.js";import"./Heading-BDZY2GXQ.js";import"./Heading-DGchSox2.js";import"./useFieldComponent-1tG_hIZF.js";import"./FieldError-CGpcN3PS.js";import"./FieldError-B9deYV15.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";import"./useControlledHostValueProps-ZAzMZMP3.js";import"./TextField-DtlmSwYr.js";import"./Form-C7OLtkZq.js";import"./Group-BuqfBy6e.js";import"./Input-DoIljc-M.js";import"./useTextField-D1L7S4qu.js";import"./useFormReset-DcYsnWfg.js";import"./useFormValidation-ny_bco9C.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BbHp37hM.js";import"./remote-B1sU4u7F.js";import"./react-children-utilities-BRF88Ijx.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
