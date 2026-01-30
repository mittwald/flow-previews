import{r as h,j as r}from"./iframe-BipmDVic.js";import{P as m}from"./PasswordCreationField-CcB-rmvg.js";import{L as u}from"./Label-D7pFsU69.js";import{B as g}from"./Button-BuQAY4x2.js";import{m as C}from"./IconWarning-CGnZi41_.js";import{C as w}from"./CopyButton-CLbhqaLJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-5Me7t2_P.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./clsx-B-dksMZM.js";import"./index-DhRV0L_D.js";import"./Action-B2seXdE0.js";import"./context-DDKbSZpU.js";import"./useStatic-DNvp4EKT.js";import"./browser-CR-oUB3P.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./FieldDescription-BEUHW4qH.js";import"./Text-D0LSWbFT.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./Text-Bx_sJIF1.js";import"./utils-BmvAbY6y.js";import"./Tooltip-D_Iulqg7.js";import"./OverlayArrow-Crdn15eZ.js";import"./useFocus-1VXHi-Mn.js";import"./ProgressBar-WDsF0b96.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DZFs0BX7.js";import"./context-Br1o_Gsv.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B8DUU0zm.js";import"./useControlledState-CTBxctZq.js";import"./useFocusable-CoJ_GBdx.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./ContextualHelpTrigger-d5G31gDf.js";import"./Popover-D6v11uuT.js";import"./useOverlayController-D0DRt1MZ.js";import"./OverlayContextProvider-DZ1Omm1z.js";import"./Dialog-BXIha8hU.js";import"./Button-JOtZZNa7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGUPUAq5.js";import"./RSPContexts-EgPs8m3a.js";import"./Collection-DZXXzgBW.js";import"./CollectionBuilder-BRXbMuqB.js";import"./SelectionIndicator-DQakRxMT.js";import"./Separator-DJ26kkKw.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./useCollator-BmSf6CmH.js";import"./FocusScope-BUuvBHJx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./OverlayTrigger-DqBZOFmj.js";import"./Heading-BRGw-waJ.js";import"./Heading-uHa7bb0l.js";import"./useFieldComponent-VycST_vs.js";import"./FieldError-CHo9rwLP.js";import"./FieldError-BYM5jSaa.js";import"./AlertText-BpI_nGHQ.js";import"./AlertIcon-Cy_cDr6j.js";import"./useControlledHostValueProps-CGQBpUAS.js";import"./TextField-f4qsvs-p.js";import"./Form-BQ1NzRsL.js";import"./Group-C_4RVHie.js";import"./Input-CWeCnXba.js";import"./useTextField-D6dFMuMP.js";import"./useFormReset-Bn-cpXjq.js";import"./useFormValidation-DUx2L2VN.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-4_K5lSJw.js";import"./remote-Bx5-otuG.js";import"./react-children-utilities-B8QTrmWQ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
