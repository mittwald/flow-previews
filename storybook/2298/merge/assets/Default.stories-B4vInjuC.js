import{r as h,j as r}from"./iframe-Cs0JkT9Q.js";import{P as m}from"./PasswordCreationField-95bzo-L5.js";import{L as u}from"./Label-CHxievOH.js";import{B as g}from"./Button-BS2N-oft.js";import{m as C}from"./IconWarning-wVjX2Q6D.js";import{C as w}from"./CopyButton-CSIYkRBz.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DZ8udFFw.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./clsx-B-dksMZM.js";import"./index-BDmaB34G.js";import"./Action-8KnSiAHu.js";import"./context-DmALYfE_.js";import"./useStatic-BOH6EX5_.js";import"./browser-Cphwy2_f.js";import"./getActionGroupSlot-BG1YGDa-.js";import"./FieldDescription-DnGZgPAY.js";import"./Text-l9LtklMs.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./Text-Dd1xy9_M.js";import"./utils-BvIIGzqK.js";import"./Tooltip-Dgd936TX.js";import"./OverlayArrow-B2W5aB6f.js";import"./useFocus-DNqIDWYA.js";import"./ProgressBar-CG2kSUer.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfslMsP4.js";import"./context-CtFpEE6p.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Cldy4Slr.js";import"./useControlledState-DrKGwN1m.js";import"./useFocusable-Cn5DQ2tI.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./ContextualHelpTrigger-CO_aV6Bu.js";import"./Popover-CCN0hkVy.js";import"./useOverlayController-Dl_TlRS7.js";import"./OverlayContextProvider-zlrNbl-W.js";import"./Dialog-n12IRs92.js";import"./Button-CoGTRo7z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-y02TS-RC.js";import"./RSPContexts-BDhxiX2p.js";import"./Collection-BVBA565q.js";import"./CollectionBuilder-BDz0phXE.js";import"./SelectionIndicator-36GmvFRO.js";import"./Separator-BWqNxSAD.js";import"./SelectionManager-DK8tNpRO.js";import"./useEvent-DfZ5FDj0.js";import"./useCollator-JQWc_WGD.js";import"./FocusScope-BXTpAFiu.js";import"./VisuallyHidden-BGmnCuXu.js";import"./OverlayTrigger-zQW25Tpm.js";import"./Heading-BKu6e9hA.js";import"./Heading-eFVgN67f.js";import"./useFieldComponent-BGOnrhQA.js";import"./FieldError-BZN8rJUk.js";import"./FieldError-zGZXG0KM.js";import"./AlertText-BA7qstOH.js";import"./AlertIcon-Dko-1oCR.js";import"./useControlledHostValueProps-3OTJgyz7.js";import"./TextField-hrf8U4uc.js";import"./Form-D-8VlTBZ.js";import"./Group-BV5xd3-K.js";import"./Input-B1hEkaq5.js";import"./useTextField-BQp_mORd.js";import"./useFormReset-5IC1Q0ld.js";import"./useFormValidation-CaaIEsuY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-FnXgTY4T.js";import"./remote-bYaNzVPL.js";import"./react-children-utilities-DmDWpD1_.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
