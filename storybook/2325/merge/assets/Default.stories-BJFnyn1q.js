import{r as h,j as r}from"./iframe-H3UGI_HB.js";import{P as m}from"./PasswordCreationField-D-6EPf2P.js";import{L as u}from"./Label-BgH6R3x8.js";import{B as g}from"./Button-fzixWt9q.js";import{m as C}from"./IconWarning-D9BgjB6B.js";import{C as w}from"./CopyButton-Bo1dlF6_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DBkJoO-a.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./clsx-B-dksMZM.js";import"./index-BJWFQYe5.js";import"./ActionBatch-TsHiTfcO.js";import"./useOverlayController-3aktaPy5.js";import"./useStatic-CxHSWaOd.js";import"./browser-xqq3Xy_w.js";import"./getActionGroupSlot-B9ZNFQ5y.js";import"./FieldDescription-Br0Af-ga.js";import"./Text-B0lwY8q7.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./Text-UIHj6j-v.js";import"./utils-DSogMYdc.js";import"./Tooltip-GMOt2NX1.js";import"./OverlayArrow-C-E8ydRe.js";import"./useFocus-DQ3i5Klp.js";import"./ProgressBar-Diyn8Lqp.js";import"./Label-CZuC8vWV.js";import"./Hidden-DoBcQ2Eg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtoVShGG.js";import"./context-BGVDv2KD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DrWQa_14.js";import"./useControlledState-DkMic-Ic.js";import"./useFocusable-BYwgOLI_.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./ContextualHelpTrigger-_lQalcBH.js";import"./Popover-gha9Pxgv.js";import"./OverlayContextProvider-BiL0j1tu.js";import"./Dialog-DKMSACkI.js";import"./Button-5W_fyVDJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CSCW4wCL.js";import"./RSPContexts-BrswSFX-.js";import"./Collection-WGKH_Dnj.js";import"./CollectionBuilder-Ba2_Q0LP.js";import"./SelectionIndicator-BgUtvt2H.js";import"./Separator-Q9pbsAsV.js";import"./SelectionManager-Bqz8XsWW.js";import"./useEvent-ChUOYfSF.js";import"./useCollator--V7CwpxI.js";import"./FocusScope-DjcW1lzL.js";import"./VisuallyHidden-BGP1Ifbj.js";import"./OverlayTrigger-D9X0XEF5.js";import"./Heading-F7Cj8meE.js";import"./Heading-CBpf9z-K.js";import"./useFieldComponent-Bj80Ne3v.js";import"./FieldError-wcTb1U2C.js";import"./FieldError-Be1mQ-cQ.js";import"./AlertText-CQfakUvk.js";import"./AlertIcon-Cb5scZh6.js";import"./useControlledHostValueProps-bka0t134.js";import"./TextField-D5DqXkzO.js";import"./Form-BGaHvL5t.js";import"./Group-DdJ_b0gx.js";import"./Input-CefV5Kvm.js";import"./useTextField-BGov_n0p.js";import"./useFormReset-CtKq0dbr.js";import"./useFormValidation-DekRXblw.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-r6z_bU0O.js";import"./remote-uffOWPGy.js";import"./react-children-utilities-BmQAsSAT.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
