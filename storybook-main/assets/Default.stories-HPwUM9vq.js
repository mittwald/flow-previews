import{r as h,j as r}from"./iframe-agbTJ2rk.js";import{P as m}from"./PasswordCreationField-BLDw2q4a.js";import{L as u}from"./Label-BNNjDH32.js";import{B as g}from"./Button-Br9Yc6cY.js";import{m as C}from"./IconWarning-DBJeVzaP.js";import{C as w}from"./CopyButton-BZdIkRmX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-9PkN5S4U.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./clsx-B-dksMZM.js";import"./index-DPEh44cd.js";import"./Action-KXOin-yd.js";import"./context-Dm2xLzXZ.js";import"./useStatic-C0pFV-a-.js";import"./browser-DcYn1DNE.js";import"./getActionGroupSlot-_GbbmTSO.js";import"./FieldDescription-D95nHT9i.js";import"./Text-DmtEYLwi.js";import"./EmulatedBoldText-_6M-JboB.js";import"./Text-B3pB98UM.js";import"./utils-Cg5Rmuuc.js";import"./Tooltip-pUvSylH9.js";import"./OverlayArrow-CJVRO-c0.js";import"./useFocus-BFA9Y66r.js";import"./ProgressBar-Dtf2TWy6.js";import"./Label-Da0PgXCv.js";import"./Hidden-DehNc1Kw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-COQ7NCDT.js";import"./context-DNnfn7OO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Df3re3NP.js";import"./useControlledState-JGLxFfPu.js";import"./useFocusable-Dcrl6Kh-.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./ContextualHelpTrigger-D_Qgy3Sj.js";import"./Popover-T-SqMr4y.js";import"./useOverlayController-CpxxUC1a.js";import"./OverlayContextProvider-CL8tIiF7.js";import"./Dialog-A1OcXUz0.js";import"./Button-KwBkKB1A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DrXmkjxU.js";import"./RSPContexts-H7hhohAE.js";import"./Collection-BaJavd6-.js";import"./CollectionBuilder-DOQcLAsT.js";import"./SelectionIndicator-DWRc_aAr.js";import"./Separator-CPdY11g5.js";import"./SelectionManager-CzUgCcIX.js";import"./useEvent-CRzL3U9d.js";import"./useCollator-CQ6xU2WO.js";import"./FocusScope-COCAXuyM.js";import"./VisuallyHidden-C-SP4JvM.js";import"./OverlayTrigger-BiKcN0tL.js";import"./Heading-CGG9RSyu.js";import"./Heading-Clp5RNdF.js";import"./useFieldComponent-Bdg-2oVH.js";import"./FieldError-BH2blnd1.js";import"./FieldError-D6XTyUhB.js";import"./AlertText-CYEytDO3.js";import"./AlertIcon-DN21MApN.js";import"./useControlledHostValueProps-CvCo8od1.js";import"./TextField-DH-V9wPM.js";import"./Form-6HUwn4n1.js";import"./Group-9r9Au7aQ.js";import"./Input-CfRC_Eeo.js";import"./useTextField-BFy3VEIw.js";import"./useFormReset-DoFpeMzh.js";import"./useFormValidation-DxAxZRFR.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CHOtYrBZ.js";import"./remote-zpHok2y4.js";import"./react-children-utilities-CWv48Mmp.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
