import{r as h,j as r}from"./iframe-HxmydubW.js";import{P as m}from"./PasswordCreationField-BwH_FtRn.js";import{L as u}from"./Label-Jo5QLCir.js";import{B as g}from"./Button-CfZWs4w7.js";import{m as C}from"./IconWarning-C9xwJqAl.js";import{C as w}from"./CopyButton-TbKo-80q.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7w-3Mi4.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./clsx-B-dksMZM.js";import"./index-CEuE-GZL.js";import"./ActionBatch-ChYSHCOJ.js";import"./context-I_ID-Cd_.js";import"./useStatic-ffXkYFOn.js";import"./browser-XpDtWA4a.js";import"./getActionGroupSlot-CHtGBuk8.js";import"./FieldDescription-C-093zKF.js";import"./Text-CUJOJiDD.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./Text-CyO0jXov.js";import"./utils-QtLN3P4K.js";import"./Tooltip-DSVxnjDe.js";import"./OverlayArrow-CRirkybg.js";import"./useFocus-AF-IcVAt.js";import"./ProgressBar-BLMl0tpz.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CkTRhQb0.js";import"./context-CAIZZp13.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CAJt6BJw.js";import"./useControlledState-N-j6hnQm.js";import"./useFocusable-H6SSWU_B.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./ContextualHelpTrigger-BexeYOf9.js";import"./Popover-Dc_4CAsZ.js";import"./useOverlayController-CICFPSY8.js";import"./OverlayContextProvider-e8rtjnFo.js";import"./Dialog-BZeO2Xjo.js";import"./Button-B_Zn8gpO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-yluX3X-J.js";import"./RSPContexts-Cjdg_leM.js";import"./Collection-Dh0U_T2u.js";import"./CollectionBuilder-DZvSqS6p.js";import"./SelectionIndicator-dYnAwztx.js";import"./Separator-D3qRtCTd.js";import"./SelectionManager-BhAKHVOw.js";import"./useEvent-Br9MlQ6p.js";import"./useCollator-qjE4hkog.js";import"./FocusScope-D_FLL8Ht.js";import"./VisuallyHidden-BPW-z4K2.js";import"./OverlayTrigger-DvKHyWhH.js";import"./Heading-C9JwdE7Y.js";import"./Heading-B7f00fHt.js";import"./useFieldComponent-Bahj-THY.js";import"./FieldError-431GXjJZ.js";import"./FieldError-BaqMj9An.js";import"./AlertText-CJjUY60n.js";import"./AlertIcon-BFPz9yZd.js";import"./useControlledHostValueProps-1O-1Ij3-.js";import"./TextField-1V9RulCp.js";import"./Form-Di40r5ck.js";import"./Group-C6Hde1Sd.js";import"./Input-Bo21dlHq.js";import"./useTextField-Bjw6L3s9.js";import"./useFormReset-C2bi11DR.js";import"./useFormValidation-BHp8DdfT.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CzIk11gH.js";import"./remote-fubbDoJI.js";import"./react-children-utilities-sEVC9Ldj.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
