import{r as h,j as r}from"./iframe-D016uj-S.js";import{P as m}from"./PasswordCreationField-CctlUL5i.js";import{L as u}from"./Label-CPn02_Ye.js";import{B as g}from"./Button-DbVylex6.js";import{m as C}from"./IconWarning-BQBcHsun.js";import{C as w}from"./CopyButton-Cq7Pf1bI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7WCHGigE.js";import"./flowComponent-wtQiCPfr.js";import"./index-CfkcKJZT.js";import"./clsx-B-dksMZM.js";import"./index-BqMc4IgT.js";import"./Action-DF_37S4W.js";import"./context-BESBZ1Rk.js";import"./useStatic-Bbhetyj1.js";import"./browser-DLaO_aqG.js";import"./getActionGroupSlot-DwZ8TTEt.js";import"./FieldDescription-B9DziDuG.js";import"./Text-BZY8Sc_P.js";import"./EmulatedBoldText-CEIO41Nr.js";import"./Text-DsGfukAy.js";import"./utils-DQASSsuC.js";import"./Tooltip-B4KB5uDA.js";import"./OverlayArrow-BzkfNGFW.js";import"./useFocus-tZAxz16O.js";import"./ProgressBar-CXPYtOXa.js";import"./Label-LkWds508.js";import"./Hidden-DpSCwLxf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DeeX-PEx.js";import"./context-CQQzrfiw.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BdU2-3MK.js";import"./useControlledState-cpMkF7RC.js";import"./useFocusable-DeuIjFJe.js";import"./useLocalizedStringFormatter-CIw_JE4k.js";import"./ContextualHelpTrigger-LJJeKaz2.js";import"./Popover-CgttP64x.js";import"./useOverlayController-CJl6-XZL.js";import"./OverlayContextProvider-CUXBFq_J.js";import"./Dialog-ptAcXQW8.js";import"./Button-Cna7ldBx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVzN9kXH.js";import"./RSPContexts-CjK5iojx.js";import"./Collection-BcXzzjbm.js";import"./CollectionBuilder-BgjMiTt7.js";import"./SelectionIndicator-BhBccG1G.js";import"./Separator-ByOk2cbm.js";import"./SelectionManager--rP1hhHv.js";import"./useEvent-BgqC1tZY.js";import"./useCollator-JAzbZwM3.js";import"./FocusScope-DtVgD18c.js";import"./VisuallyHidden-D5-LZtaI.js";import"./OverlayTrigger-D4-Q-rZX.js";import"./Heading-DfZlNpH0.js";import"./Heading-CKF5Rm78.js";import"./useFieldComponent-OnEMgUvv.js";import"./FieldError-CW77VWgH.js";import"./FieldError-Db3WFp2b.js";import"./AlertText-0Z7TF0Nn.js";import"./AlertIcon-DUg_mU1Z.js";import"./useControlledHostValueProps-DmuvA75-.js";import"./TextField-BhttkRNn.js";import"./Form-BRCZloZz.js";import"./Group-As-Z9rJl.js";import"./Input-CMqHHcBD.js";import"./useTextField-DnmobBsh.js";import"./useFormReset-BG0U5_Pu.js";import"./useFormValidation-Cq6iPNGO.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Dcve79PX.js";import"./remote-CBH6kE0Y.js";import"./react-children-utilities-CFM5VdOd.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
