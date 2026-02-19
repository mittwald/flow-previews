import{r as h,j as r}from"./iframe-B2CTi6cm.js";import{P as m}from"./PasswordCreationField-DQZH2j_3.js";import{L as u}from"./Label-DccH0oyj.js";import{B as g}from"./Button-_yLWek3e.js";import{m as C}from"./IconWarning-hrUSNLB1.js";import{C as w}from"./CopyButton-CmorkDKb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQSnLDrl.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./clsx-B-dksMZM.js";import"./index-DqADrqmd.js";import"./ActionBatch-BYvDqB3T.js";import"./useOverlayController-D1PufBkN.js";import"./useStatic-gDNiy6Z_.js";import"./browser-Cn-sjrEd.js";import"./getActionGroupSlot-BeGUIl6W.js";import"./FieldDescription-Cp3TAr2a.js";import"./Text-4QTNuVgz.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./utils-CFhs-kxq.js";import"./Tooltip-BGjaG0Kl.js";import"./OverlayArrow-8rub2gpn.js";import"./useFocus-iUa6wpVM.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DatykuNG.js";import"./context-DlyTwf6g.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-G6UDZPL7.js";import"./useControlledState-D4tpAkeT.js";import"./useFocusable-DeW7JE_I.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./ContextualHelpTrigger-CRT_X5Ja.js";import"./Popover-Dz64XD_e.js";import"./OverlayContextProvider-BUaDJxSi.js";import"./Dialog-D2pl7IFn.js";import"./Button-0k2tyOZn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CXOW9Qje.js";import"./RSPContexts-BnlNRtVT.js";import"./Collection-T1sKmHBq.js";import"./CollectionBuilder-2L-4enMQ.js";import"./SelectionIndicator-BHeVA0_4.js";import"./Separator-Dt0DKQRS.js";import"./SelectionManager-DmcDvJFk.js";import"./useEvent-Ccc4zbbb.js";import"./useCollator-DfexieBx.js";import"./FocusScope-DAIUMiFj.js";import"./VisuallyHidden-D844FGjJ.js";import"./OverlayTrigger-C18xY8mJ.js";import"./Heading-DlmM6Hn_.js";import"./Heading-C9cKQsqE.js";import"./useFieldComponent-DO-gEAYc.js";import"./FieldError-Cpb_w0Fh.js";import"./FieldError-Cj-zQd3o.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";import"./useControlledHostValueProps-ClUMTGdq.js";import"./TextField-DfcZqbUi.js";import"./Form-Cx6Bm7Pi.js";import"./Group-Dv7pzL4P.js";import"./Input-KDCOY3Ar.js";import"./useTextField-BalQ2GqF.js";import"./useFormReset-BMX0RNLQ.js";import"./useFormValidation-BDHhHN4L.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DnfUZyUE.js";import"./remote-C6QTRNf9.js";import"./react-children-utilities-cUpceFeE.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
