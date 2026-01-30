import{r as h,j as r}from"./iframe-DnKh_q8B.js";import{P as m}from"./PasswordCreationField-D2t0rkiB.js";import{L as u}from"./Label-_TjJj3W9.js";import{B as g}from"./Button-B6Zpw5yd.js";import{m as C}from"./IconWarning-C-jbuAIx.js";import{C as w}from"./CopyButton-DObkxuIz.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BE_n_a5m.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./clsx-B-dksMZM.js";import"./index-B5PweBHP.js";import"./Action-B5Uq12lQ.js";import"./context-CSnl0IXM.js";import"./useStatic-DlxvzgyM.js";import"./browser-BUa4T4SN.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./FieldDescription-73O0rUMk.js";import"./Text-Drd9GdLo.js";import"./EmulatedBoldText-C0uufS8q.js";import"./Text-DobXAK13.js";import"./utils-BZc8lNcd.js";import"./Tooltip-DIF5dyRC.js";import"./OverlayArrow-2vICfEm4.js";import"./useFocus-BUIY7lOc.js";import"./ProgressBar-q35gM_9d.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-jAJMJRpZ.js";import"./context-CXoyow8k.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CZAaR2ds.js";import"./useControlledState-Dx9tzWN_.js";import"./useFocusable-z3KWK7qq.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./ContextualHelpTrigger-Egg6mnzn.js";import"./Popover-BSQWc1mY.js";import"./useOverlayController-BFPbq2tX.js";import"./OverlayContextProvider-DSTl-nzt.js";import"./Dialog-CHY6jywx.js";import"./Button-CX9zCyN4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CFc3C1mq.js";import"./RSPContexts-wuQtf2CN.js";import"./Collection-BYEhy5Cw.js";import"./CollectionBuilder-3EWlmXpu.js";import"./SelectionIndicator-B7pzLsJc.js";import"./Separator-C3ZuVTcl.js";import"./SelectionManager-Bvw1Vhun.js";import"./useEvent-DMn0oMqB.js";import"./useCollator-DnWbXdif.js";import"./FocusScope-Ddw08eyC.js";import"./VisuallyHidden-DfZCukwF.js";import"./OverlayTrigger-jX4CJ8wH.js";import"./Heading-CB01boQE.js";import"./Heading-BwaoBSXr.js";import"./useFieldComponent-ClvUady3.js";import"./FieldError-CQ45DqtA.js";import"./FieldError-ChpD0sIl.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";import"./useControlledHostValueProps-Cbx4Pluy.js";import"./TextField-BOX8oND8.js";import"./Form-BQHEa3Zl.js";import"./Group-BODZXCjp.js";import"./Input-mgtZ57Ff.js";import"./useTextField-TkD79Fcw.js";import"./useFormReset-BbinXmMH.js";import"./useFormValidation-C9ppbdC-.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B--bUkFv.js";import"./remote-k0GnUd79.js";import"./react-children-utilities-BTaWxpI0.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
