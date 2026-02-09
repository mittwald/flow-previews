import{r as h,j as r}from"./iframe-BzN-GDSV.js";import{P as m}from"./PasswordCreationField-DYMHJOxG.js";import{L as u}from"./Label-aAQCtXm8.js";import{B as g}from"./Button-CqLQCx50.js";import{m as C}from"./IconWarning-Dq5gBH8b.js";import{C as w}from"./CopyButton-uybmFWt2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CBHHoCBf.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./clsx-B-dksMZM.js";import"./index-jqMu6fsr.js";import"./Action-DMSKmOJg.js";import"./context-CO_pcEBI.js";import"./useStatic-BCK3u9CD.js";import"./browser-BZan5p2Q.js";import"./getActionGroupSlot-CEsFjkmd.js";import"./FieldDescription-CPA3vpEK.js";import"./Text-w8Xk5tzh.js";import"./EmulatedBoldText-Bg-XhDZU.js";import"./Text-9Slz249r.js";import"./utils-DZiSZNRH.js";import"./Tooltip-jHHI1xlH.js";import"./OverlayArrow-45O3XaxD.js";import"./useFocus-CD9nXzJ_.js";import"./ProgressBar-BhNLuOhb.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D4-tvGJV.js";import"./context-CV01TaOS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DeK7XLS9.js";import"./useControlledState-VicJRSad.js";import"./useFocusable-CZxxukff.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./ContextualHelpTrigger-B-LVvw4_.js";import"./Popover-DxjLrjat.js";import"./useOverlayController-CQvNW7BN.js";import"./OverlayContextProvider-LhIWYE9-.js";import"./Dialog-D-_l-Dz2.js";import"./Button-CTrxkMff.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CKBw2syN.js";import"./RSPContexts-836Xa0kI.js";import"./Collection-Ckv3RK5p.js";import"./CollectionBuilder-P-tNz_Gd.js";import"./SelectionIndicator-Clnr_8iz.js";import"./Separator-grnmoeTC.js";import"./SelectionManager-TX1M696V.js";import"./useEvent-D8LZAcV8.js";import"./useCollator-6LAjsKx4.js";import"./FocusScope-BMhRfsbp.js";import"./VisuallyHidden-DwmcGrU0.js";import"./OverlayTrigger-DARUzxHp.js";import"./Heading-_0-NRbck.js";import"./Heading-Cy7B52s5.js";import"./useFieldComponent-DWIvkE7m.js";import"./FieldError-C55-OsIs.js";import"./FieldError-DErqUxVb.js";import"./AlertText-_Zms_FAC.js";import"./AlertIcon-CN2JBdj6.js";import"./useControlledHostValueProps-SG0om-EY.js";import"./TextField-CEYcqWGv.js";import"./Form-BzSZff5w.js";import"./Group-C5-ujBH7.js";import"./Input-C4dwqHoB.js";import"./useTextField-Czkfh9lB.js";import"./useFormReset-C_nKv_ku.js";import"./useFormValidation-Bm80HquG.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DwhPZLF8.js";import"./remote-DmyBa_Y3.js";import"./react-children-utilities-D7lqcx1n.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
