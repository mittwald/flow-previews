import{r as h,j as r}from"./iframe-DGdLAJHm.js";import{P as m}from"./PasswordCreationField-75SYAdhU.js";import{L as u}from"./Label-TWVsUPc0.js";import{B as g}from"./Button-B6Mqr-fI.js";import{z as C}from"./IconWarning-BY1Q-g8P.js";import{C as w}from"./CopyButton-Caj5CeV_.js";import"./index-nuYtCEEu.js";import"./dynamic-DckDcmFh.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./clsx-B-dksMZM.js";import"./index-BZginMRh.js";import"./useFieldComponent-sq1ZsD9O.js";import"./utils-DMxNMt2r.js";import"./Text-C5DwW8tZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-bPIN5y_s.js";import"./ClearPropsContext-DfqGN335.js";import"./Group-DjNAC75P.js";import"./useFocusRing-Caix2y0_.js";import"./useFocus-Cj45nHC3.js";import"./Input-BpAc-meC.js";import"./Hidden-DDvTcAlv.js";import"./TextField-DapXRZOv.js";import"./RSPContexts-4eF2sDK2.js";import"./Form-CiLoCuZS.js";import"./useLabel-DLeCNjtK.js";import"./Label-DCzhvZl0.js";import"./useTextField-BmiF-DDN.js";import"./useFormReset-DwdExnfa.js";import"./useControlledState-C-kX1e6O.js";import"./useFocusable-DBd_8M_L.js";import"./useFormValidation-LOSvoqzJ.js";import"./Action-6ocxia9j.js";import"./context-B3SgFMfx.js";import"./useStatic-BT4grvBi.js";import"./browser-DtJMxQoE.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./FieldDescription-DQMN5C8v.js";import"./Text-DFxon6If.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Tooltip-B-vtu2id.js";import"./ClearPropsContextView-Dpaa2bCU.js";import"./OverlayArrow-DsaarUgr.js";import"./ProgressBar-NfwVy8TS.js";import"./context-CokKTPHD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./ReactAriaControlledValueFix-C438VEIS.js";import"./ContextualHelpTrigger-objaLspt.js";import"./Popover-BS8ngNUm.js";import"./OverlayContextProvider-BFOV3Eqf.js";import"./Dialog-CzLVI3sy.js";import"./Button-De2YyQVb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B2gRAimw.js";import"./Collection-BVDIRVc_.js";import"./CollectionBuilder--BI9tvyg.js";import"./SelectionIndicator-vtyMezuP.js";import"./Separator-C_iWvMGV.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./useCollator--gwTay33.js";import"./FocusScope-Bl39wWwG.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./OverlayTrigger-DmNswj_n.js";import"./ControlledNotification-CkQKgv8a.js";import"./Heading-CRDqmGt0.js";import"./Heading-DVxPUCYC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-X_yr0qfx.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cx_Ae53U.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
