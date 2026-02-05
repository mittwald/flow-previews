import{r as h,j as r}from"./iframe-DJlgDtsR.js";import{P as m}from"./PasswordCreationField-4C5Tqzug.js";import{L as u}from"./Label-B-hN2Lzv.js";import{B as g}from"./Button-B5mEMvcP.js";import{m as C}from"./IconWarning-Cyya3L9S.js";import{C as w}from"./CopyButton-TsRxz3wc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BhViPMj5.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./clsx-B-dksMZM.js";import"./index-Ds6_MS6L.js";import"./Action-BHdfveoT.js";import"./context-TnNtslmb.js";import"./useStatic-kKtkdJS1.js";import"./browser-C6YBs1UC.js";import"./getActionGroupSlot-Clzrx9gl.js";import"./FieldDescription-DFEkRW3-.js";import"./Text-B6SLv6do.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Text-DD0-81CT.js";import"./utils-xFKhKznh.js";import"./Tooltip-CXcOBqa0.js";import"./OverlayArrow-BjaGoVRT.js";import"./useFocus-oMd_AJz-.js";import"./ProgressBar-Cf6O9vZh.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-KImy5Ex-.js";import"./context-XFPr5nuV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BhR5IplG.js";import"./useControlledState-C0KUsyk2.js";import"./useFocusable-CsEyjS4C.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./ContextualHelpTrigger-Bfa8ZhR4.js";import"./Popover-Cjed0IxS.js";import"./useOverlayController-BccrWtDH.js";import"./OverlayContextProvider-CVHBadgO.js";import"./Dialog-BOJlWGO4.js";import"./Button-DjTNcQDc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CWKDBuw6.js";import"./RSPContexts-CxGwKclm.js";import"./Collection-Cl6v0tCD.js";import"./CollectionBuilder-D_QdfbH9.js";import"./SelectionIndicator-DnAH24RP.js";import"./Separator-BojWZdSH.js";import"./SelectionManager-ESuaU6yM.js";import"./useEvent-CxJg3RaJ.js";import"./useCollator-Bm61inwz.js";import"./FocusScope-C9j0_60-.js";import"./VisuallyHidden-BJ_y0FNA.js";import"./OverlayTrigger-02q3wf6R.js";import"./Heading-CCdNJUMi.js";import"./Heading-CTyW73LR.js";import"./useFieldComponent-Bmr1JhS0.js";import"./FieldError-CeTb8jEt.js";import"./FieldError-Cpk3ITKU.js";import"./AlertText-DmRH4lNK.js";import"./AlertIcon-nCFQHvgi.js";import"./useControlledHostValueProps-D_As0Zui.js";import"./TextField-CzoLjm41.js";import"./Form-BUDe3usU.js";import"./Group-CUxw3L8E.js";import"./Input-C2mY4pOV.js";import"./useTextField-BsWAQyLD.js";import"./useFormReset-yK5dVmLs.js";import"./useFormValidation-Dup-Fz52.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DvQzlWjD.js";import"./remote-CayAs8X4.js";import"./react-children-utilities-mzm1pmo-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
