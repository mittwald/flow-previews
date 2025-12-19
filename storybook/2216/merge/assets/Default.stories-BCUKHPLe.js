import{r as h,j as r}from"./iframe-d8TPt7Dq.js";import{P as m}from"./PasswordCreationField-qRMPMhg3.js";import{L as u}from"./Label-DUZNK_N3.js";import{B as g}from"./Button-CG9B_DsC.js";import{n as C}from"./IconWarning-BBwUIuFu.js";import{C as w}from"./CopyButton-D6LPvLB1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-q6Z3lF5f.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./clsx-B-dksMZM.js";import"./index-hNZo4M03.js";import"./Action-BNptIGGg.js";import"./context-BnRBG3H-.js";import"./useStatic-C-4yNygp.js";import"./browser-Cq89yPle.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./FieldDescription-CQGlo9YG.js";import"./Text-B_83j2CJ.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./utils-CQWCrNEN.js";import"./Tooltip-yGszJ6IO.js";import"./OverlayArrow-DsjdeIno.js";import"./useFocus-Dzzsimxq.js";import"./ProgressBar-DbAphBhf.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CyX9DgZ-.js";import"./context-s9WFa2xd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Du7Hq4ap.js";import"./useFocusable-Blyv-8JB.js";import"./useFocusRing-Pl_83XSU.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./ContextualHelpTrigger-DGzxVomv.js";import"./Popover-2QFTEP9U.js";import"./useOverlayController-BtkV8MPK.js";import"./OverlayContextProvider-CEYLfIDU.js";import"./Dialog-DKAUR0i0.js";import"./Button-CiuUFhcg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DD6hZDmw.js";import"./RSPContexts-Bn3c_trp.js";import"./Collection-C_DIbhIS.js";import"./CollectionBuilder-DWjCGULS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./Separator-CfU7skaS.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./useCollator-BT1LDj3M.js";import"./FocusScope-TlUkqt74.js";import"./VisuallyHidden-_OGl7ay2.js";import"./OverlayTrigger-Ct0MwRjl.js";import"./Heading-DEdgyyg2.js";import"./Heading-DHpEgmIr.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-XccPD61N.js";import"./FieldError-Z630sQ-Y.js";import"./FieldError-D74Rm1AJ.js";import"./useControlledHostValueProps-CJz_h5pu.js";import"./TextField-DzbzMCaM.js";import"./Form-bB72J6qo.js";import"./Group-Bs1XJ8tf.js";import"./Input-Cp9jMkj6.js";import"./useTextField-BALSLGms.js";import"./useFormReset-AO5_sbxL.js";import"./useFormValidation-DzABwrGN.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CZkvTSmf.js";import"./remote-DqOJ-OtV.js";import"./react-children-utilities-CVM7s5Om.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
