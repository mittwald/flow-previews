import{r as h,j as r}from"./iframe--WfF81Kk.js";import{P as m}from"./PasswordCreationField-B88jWz-B.js";import{L as u}from"./Label-BrCJfTYV.js";import{B as g}from"./Button-Csb2zbZD.js";import{m as C}from"./IconWarning-BCj0akvL.js";import{C as w}from"./CopyButton-ClV-Zx3T.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-3udm1Ueo.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./clsx-B-dksMZM.js";import"./index-C06vQZsJ.js";import"./Action-B7MToOoF.js";import"./context-BQE_egpR.js";import"./useStatic-DJuRNbYT.js";import"./browser-DaXQhhrD.js";import"./getActionGroupSlot-DP_ddCf6.js";import"./FieldDescription-_8Z-eH9p.js";import"./Text-BQUBTPZI.js";import"./EmulatedBoldText-Bc2SrKM1.js";import"./Text-2H1diUJp.js";import"./utils-DjCd38Rb.js";import"./Tooltip-DjRL0eJd.js";import"./OverlayArrow-zU7WmGPw.js";import"./useFocus-BstfIGzX.js";import"./ProgressBar-CcHuDHhg.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-b3rJJe.js";import"./context-BGH-DtkU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-xiCVrDfg.js";import"./useControlledState-33z9BU53.js";import"./useFocusable-CYWdX1lX.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./ContextualHelpTrigger-BYizjjsr.js";import"./Popover-B5ewr3nw.js";import"./useOverlayController-CPgvQG2b.js";import"./OverlayContextProvider-HfoRPLvl.js";import"./Dialog-C_VjyLol.js";import"./Button-cdObnXIw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CuA8A2Wl.js";import"./RSPContexts-D6CGk5en.js";import"./Collection-WxHe4g5S.js";import"./CollectionBuilder-D8350JFC.js";import"./SelectionIndicator-BGWzSObI.js";import"./Separator-C9zEzG3T.js";import"./SelectionManager-D0POi5wt.js";import"./useEvent-CGxaeV4J.js";import"./useCollator-lImoFu1C.js";import"./FocusScope-D57rWz_c.js";import"./VisuallyHidden-BWpEL0hX.js";import"./OverlayTrigger-CvMg_PBm.js";import"./Heading-CQM1gGXf.js";import"./Heading-DpPfmaJp.js";import"./useFieldComponent-DtaSYFu8.js";import"./FieldError-DwJ8vXTD.js";import"./FieldError-8xlfKJ8p.js";import"./AlertText-4irfy3TS.js";import"./AlertIcon-Bc0kQsAW.js";import"./useControlledHostValueProps-Bw-7xkTM.js";import"./TextField-AxNmW3iT.js";import"./Form-fKP9Mvs-.js";import"./Group-BfXMsi0-.js";import"./Input-DN6feiEe.js";import"./useTextField-BSgmlJ8f.js";import"./useFormReset-B7XwhHp1.js";import"./useFormValidation-CPuMB1ok.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BoJLilDa.js";import"./remote-BYVMC2eP.js";import"./react-children-utilities-vHAgxir-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
