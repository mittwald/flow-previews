import{r as h,j as r}from"./iframe-DOYRhvKw.js";import{P as m}from"./PasswordCreationField-CntQg9-J.js";import{L as u}from"./Label-D1jneSDA.js";import{B as g}from"./Button-C2r2j3I4.js";import{l as C}from"./IconWarning-CT2mn3WV.js";import{C as w}from"./CopyButton-91QL9_KQ.js";import"./index-nuYtCEEu.js";import"./dynamic-nHNYFzn9.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./clsx-B-dksMZM.js";import"./index-CsHgCCkK.js";import"./useFieldComponent-CVvykpK2.js";import"./utils-Bgpcx055.js";import"./Text-ChShlFeN.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BC28ceB8.js";import"./ClearPropsContext-BqcXprie.js";import"./Group-HF6ucXVn.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocus-19H2kxNT.js";import"./Input-OSTDVC9B.js";import"./Hidden-vFw0yyvc.js";import"./TextField-zZoLVZYC.js";import"./RSPContexts-D64TVg0j.js";import"./Form-iQ1p0tBu.js";import"./useLabel-CzwTtnKl.js";import"./Label-DPl4piTh.js";import"./useTextField-B558uymh.js";import"./useFormReset-BHPIYNcK.js";import"./useControlledState-BpyUCkTO.js";import"./useFocusable-DT2cLKuD.js";import"./useFormValidation-37foNTGu.js";import"./Action-BNkegqWa.js";import"./context-CjasfPnd.js";import"./useStatic-kDWe5hml.js";import"./browser-BfmJHaZX.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./FieldDescription-Blyf9m0W.js";import"./Text-uG3ng9U4.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./Tooltip-CfJ3nkrW.js";import"./ClearPropsContextView-HZAP9uO_.js";import"./OverlayArrow-C0WVRV0f.js";import"./ProgressBar-DECQ-pQm.js";import"./context-NzKNm45Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./ReactAriaControlledValueFix-BeGVeEzJ.js";import"./ContextualHelpTrigger-BQC-j1CJ.js";import"./Popover-C_Lqylf0.js";import"./useOverlayController-7tlEbJro.js";import"./OverlayContextProvider-_T8uFS1c.js";import"./Dialog-QPXJS7lu.js";import"./Button-DqQnue56.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-GLnS58A3.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./VisuallyHidden-DLTCEUwm.js";import"./OverlayTrigger-BlX_Ocgn.js";import"./ControlledNotification-DTnIJfc-.js";import"./Heading-BcQRRFfC.js";import"./Heading-BiqQ-WE6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CTsotaDH.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-x8jgjTbZ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
