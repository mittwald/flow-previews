import{r as h,j as r}from"./iframe-DFKQ2QsC.js";import{P as m}from"./PasswordCreationField-m2RjAJE0.js";import{L as u}from"./Label-DluzxSj2.js";import{B as g}from"./Button-CumhvKwr.js";import{m as C}from"./IconWarning-BuA9AHid.js";import{C as w}from"./CopyButton-KmAhLnmG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-8YXtFeDo.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./clsx-B-dksMZM.js";import"./index-BLTW5Tcp.js";import"./Action-C10g_G2S.js";import"./context-DCw83PuI.js";import"./useStatic-BfD-d5xb.js";import"./browser-C3pjfYL0.js";import"./getActionGroupSlot-FEsE5GBK.js";import"./FieldDescription-DOCm5Umg.js";import"./Text-BEPoPMFj.js";import"./EmulatedBoldText-CZthuZwX.js";import"./Text-D27_pVCF.js";import"./utils-BJXdD5he.js";import"./Tooltip-bTpc3hQe.js";import"./OverlayArrow-D6jpYtlx.js";import"./useFocus-BuPH9-PX.js";import"./ProgressBar-DQlWH-Q4.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CurstbwI.js";import"./context-m8OE0ddO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Dltr6KPm.js";import"./useControlledState-DUrZ8j4h.js";import"./useFocusable-C6PlbLtm.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./ContextualHelpTrigger-DeRGbcI5.js";import"./Popover-D_QG3gy8.js";import"./useOverlayController-r9uf67Om.js";import"./OverlayContextProvider-C7UAkNVd.js";import"./Dialog-BtwdVLzC.js";import"./Button-DBkz1b5H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CE-sEEB4.js";import"./RSPContexts-ta7dPUPH.js";import"./Collection-C9L-nPBS.js";import"./CollectionBuilder-DCYsymNm.js";import"./SelectionIndicator-BFMZIIpU.js";import"./Separator-VmOMLBSn.js";import"./SelectionManager-6OiS_y3h.js";import"./useEvent-my0xaAeI.js";import"./useCollator-CO4w-iZj.js";import"./FocusScope-B8-7lMpW.js";import"./VisuallyHidden-CKDTSDk1.js";import"./OverlayTrigger-BT52IZK9.js";import"./Heading-DbtDsfGc.js";import"./Heading-DOKJ2uYX.js";import"./useFieldComponent-R5E6D8Ic.js";import"./FieldError-DdERfCze.js";import"./FieldError-Bmf3SAas.js";import"./AlertText-BC9iPezU.js";import"./AlertIcon-D5_dS1m5.js";import"./useControlledHostValueProps-BODmqCgi.js";import"./TextField-wg5tZKN2.js";import"./Form-DKz1zkHn.js";import"./Group-BbkN3tYf.js";import"./Input-9YEFu8mh.js";import"./useTextField-DC60nVA8.js";import"./useFormReset-DwR8gwPw.js";import"./useFormValidation-BX6OQ_jJ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DwolGT18.js";import"./remote-BP8uJVcU.js";import"./react-children-utilities-q3_e5KMf.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
