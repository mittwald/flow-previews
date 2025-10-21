import{r as h,j as r}from"./iframe-Bju5tM19.js";import{P as m}from"./PasswordCreationField-BxNmZ_jr.js";import{L as u}from"./Label-CEBawMgO.js";import{B as g}from"./Button-D01G-2Tc.js";import{l as C}from"./IconWarning-EseH3oBy.js";import{C as w}from"./CopyButton-kj-pKC7r.js";import"./index-nuYtCEEu.js";import"./dynamic-KamcoLNc.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./clsx-B-dksMZM.js";import"./index-v7jxlCcy.js";import"./useFieldComponent-SvMgnfSt.js";import"./utils-CHaPYnRu.js";import"./Text-X0smrbMM.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-CV_3FZ2O.js";import"./ClearPropsContext-nVrOsFhk.js";import"./Group-CMnMCMaj.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocus-dnpNkUeL.js";import"./Input-Cn0b8SON.js";import"./Hidden-B3KlSyIs.js";import"./TextField-DqSp9-m6.js";import"./RSPContexts-CuZAMKB6.js";import"./Form-CawbhIR_.js";import"./useLabel-DxvdaVYE.js";import"./Label-C0LDEu9P.js";import"./useTextField-BXTJR5Zn.js";import"./useFormReset-CYS5QNbo.js";import"./useControlledState-BiPn7KDX.js";import"./useFocusable-S-EY4exA.js";import"./useFormValidation-Cc6rboKS.js";import"./Action-DGXz3yuy.js";import"./context-DoYyNt70.js";import"./useStatic-Dhn4vIeo.js";import"./browser-5LoYBPX6.js";import"./getActionGroupSlot-BFuFDZVU.js";import"./FieldDescription-BYoVcIgt.js";import"./Text-Ctwf1INQ.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Tooltip-D3ntzwjh.js";import"./ClearPropsContextView-D7P4GTdz.js";import"./OverlayArrow-CkGx3q47.js";import"./ProgressBar-Bd2c_dqs.js";import"./context-BCZfssJF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./ReactAriaControlledValueFix-BPXa8wTf.js";import"./ContextualHelpTrigger-CF-_eqWZ.js";import"./Popover-DlqNLSeP.js";import"./useOverlayController-rptj0Un2.js";import"./OverlayContextProvider-BSx-P-EI.js";import"./Dialog-BwAIy3cs.js";import"./Button-Dw5yhw5U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNUm2pP-.js";import"./Collection-CzETdAyj.js";import"./CollectionBuilder-C9Q_qjob.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./Separator-F1osFFu3.js";import"./SelectionManager-BWZTcbb9.js";import"./useEvent-B0Z9j7Hl.js";import"./useCollator-CPsP6oXT.js";import"./FocusScope-BvTlMNTx.js";import"./VisuallyHidden-muGwU-w1.js";import"./OverlayTrigger-845SWzvQ.js";import"./ControlledNotification-CjAjijX6.js";import"./Heading-BvGOAURU.js";import"./Heading-BJwwNeLw.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CmPPbGYh.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-OWtFn1Ti.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
