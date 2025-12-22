import{r as h,j as r}from"./iframe-ChVCZzSM.js";import{P as m}from"./PasswordCreationField-SdE6VFtV.js";import{L as u}from"./Label-CXZGfNo-.js";import{B as g}from"./Button-DDsnJhyb.js";import{n as C}from"./IconWarning-DiIA_Kv4.js";import{C as w}from"./CopyButton-DX_XGSiM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-M4vO8Oa6.js";import"./flowComponent-CzVJsrSl.js";import"./index-AQkY3hEg.js";import"./clsx-B-dksMZM.js";import"./index-B17aiXwm.js";import"./Action-BtwaxeJT.js";import"./context-5fKqnWzS.js";import"./useStatic-DfTrwEFp.js";import"./browser-Drl1pS0o.js";import"./getActionGroupSlot-Bdjbco6c.js";import"./FieldDescription-DePBiqKu.js";import"./Text-CDV1KOVg.js";import"./EmulatedBoldText-DJ1rAIrZ.js";import"./Text-JkP9a4Kb.js";import"./utils-D2Dbeo4Y.js";import"./Tooltip-B2vTmcAw.js";import"./OverlayArrow-CfPd7gS0.js";import"./useFocus-D0NBuExq.js";import"./ProgressBar-Cxzv2Khu.js";import"./Label-B7WWEN6i.js";import"./Hidden-CmNYW2sS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DQfYHHHP.js";import"./context-DJbicbqJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BqHrqPJL.js";import"./useFocusable-DqNAAmsp.js";import"./useFocusRing-BKxozeV4.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./ContextualHelpTrigger-BLzN2PB5.js";import"./Popover-ClCmnZ4N.js";import"./useOverlayController-DK3_Ky4D.js";import"./OverlayContextProvider-r_uJzIjb.js";import"./Dialog-BaNJO3_y.js";import"./Button-DQvyXKNx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJQIPi1Q.js";import"./RSPContexts-DU6h72_u.js";import"./Collection-BAX2Qk0i.js";import"./CollectionBuilder-BBxJk1-3.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./Separator-CHS7wGgu.js";import"./SelectionManager-CbtLPV9G.js";import"./useEvent-DKVYVBpY.js";import"./useCollator-iud0owJE.js";import"./FocusScope-BLCDYAIb.js";import"./VisuallyHidden-DGYqp_5z.js";import"./OverlayTrigger-v4LHk93w.js";import"./Heading-DGiEIOEA.js";import"./Heading-DVvsLghH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent--rNpfgQ4.js";import"./FieldError-DeqqVmMl.js";import"./FieldError-CO11AzDW.js";import"./useControlledHostValueProps-DIZPcOR7.js";import"./TextField-CaRnaij7.js";import"./Form-6QLzzpDB.js";import"./Group-DqiN5z8N.js";import"./Input-D2FpdmSE.js";import"./useTextField-Czjr-TtM.js";import"./useFormReset-BrkbasLl.js";import"./useFormValidation-BwLvk9We.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CIFEKnPX.js";import"./remote-B9ld2KSn.js";import"./react-children-utilities-DByR8PkK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
