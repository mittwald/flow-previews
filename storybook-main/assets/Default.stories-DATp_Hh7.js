import{r as h,j as r}from"./iframe-DwsGXJVG.js";import{P as m}from"./PasswordCreationField-CwSLlZ4J.js";import{L as u}from"./Label-DOR8D5QK.js";import{B as g}from"./Button-CqL_vLUu.js";import{m as C}from"./IconWarning-Ci9l-8b2.js";import{C as w}from"./CopyButton-DyinE2tt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CY6fGUGp.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./clsx-B-dksMZM.js";import"./index-Z94wDe_B.js";import"./ActionBatch-CjTnBW9C.js";import"./useOverlayController-Bn3a-KRG.js";import"./useStatic-BwWlrMEh.js";import"./browser-Cz_VorJk.js";import"./getActionGroupSlot-BRP57hZk.js";import"./FieldDescription-x5frt87g.js";import"./Text-BV6qM8pO.js";import"./EmulatedBoldText-C-itzyky.js";import"./Text-_i5SHi6c.js";import"./utils-DRn9wprx.js";import"./Tooltip-Cub7lHnt.js";import"./OverlayArrow-DURPAUST.js";import"./useFocus-DIaiJ-NX.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DGPoQV-x.js";import"./context-aVGfmL8k.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DdmspiUG.js";import"./useControlledState-CRB4bW25.js";import"./useFocusable-s83SGTZ-.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./ContextualHelpTrigger-DrTGsnuE.js";import"./Popover-Cvxhvr4i.js";import"./OverlayContextProvider-CCF5PYOf.js";import"./Dialog-M15I_L87.js";import"./Button-m4IzIabh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CckbZpi5.js";import"./RSPContexts-CFeGdYTg.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./SelectionIndicator-BqSVIa4a.js";import"./Separator-BaZLZFLd.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./useCollator-GdkhHcGA.js";import"./FocusScope-4Fd3tZfM.js";import"./VisuallyHidden-Fvx90J8z.js";import"./OverlayTrigger-t2QYWnlS.js";import"./Heading-BKffDfDn.js";import"./Heading-CsVZ9AEI.js";import"./useFieldComponent-BobnjoTA.js";import"./FieldError-BPT_klMb.js";import"./FieldError-BZQRredP.js";import"./AlertText-D-LhYLA_.js";import"./AlertIcon-BhWII3Mz.js";import"./useControlledHostValueProps-C3jOEGxF.js";import"./TextField-BWD78ciL.js";import"./Form-BVLfeGH7.js";import"./Group-KZBGY4kR.js";import"./Input-B80smJAQ.js";import"./useTextField-DebOgYA2.js";import"./useFormReset-hk4HwqV2.js";import"./useFormValidation-Bdpbh0WL.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./remote-Co6v5gQ1.js";import"./react-children-utilities-BTlq88l4.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
