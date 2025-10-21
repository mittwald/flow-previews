import{r as h,j as r}from"./iframe-CCgutS5t.js";import{P as m}from"./PasswordCreationField-BLMQhQL-.js";import{L as u}from"./Label-CNIOR_Eh.js";import{B as g}from"./Button-CB_SQlxf.js";import{l as C}from"./IconWarning-BIjPfZ_7.js";import{C as w}from"./CopyButton-CVvh0b1R.js";import"./index-nuYtCEEu.js";import"./dynamic-CnlMxg6J.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./clsx-B-dksMZM.js";import"./index-Bp2d_id4.js";import"./useFieldComponent-B36i382k.js";import"./utils-N6USVjPQ.js";import"./Text-DSftVrdI.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-DK8cwA_F.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./Group-nu6L2uF2.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocus-qWLnYmls.js";import"./Input-zWUUR8ko.js";import"./Hidden-BtuehT5t.js";import"./TextField-DQbAWnp4.js";import"./RSPContexts-D8ixlOLf.js";import"./Form-DylZ4hmS.js";import"./useLabel-C2LzTSEt.js";import"./Label-B2_Qc07C.js";import"./useTextField-Dj-O8CqK.js";import"./useFormReset-C2ixUAq4.js";import"./useControlledState-C-pLTCEb.js";import"./useFocusable-C1wexJX5.js";import"./useFormValidation-DXrwvkVu.js";import"./Action-BELw5_ca.js";import"./context-_S3VUPKr.js";import"./useStatic-MsaSckAb.js";import"./browser-Cx9TdPw4.js";import"./getActionGroupSlot-DHM8pkUy.js";import"./FieldDescription-BMzB73VC.js";import"./Text-C-3mWHEt.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./Tooltip-xQpiwWtd.js";import"./ClearPropsContextView-CYIHyMV-.js";import"./OverlayArrow-D_Aj7zmL.js";import"./ProgressBar-Pqb-SOG6.js";import"./context-3TjxBBiZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./ReactAriaControlledValueFix-B6glQD59.js";import"./ContextualHelpTrigger-B1_LgguR.js";import"./Popover-CYSy3wGz.js";import"./useOverlayController-DW7fwhRo.js";import"./OverlayContextProvider-zefoD_gg.js";import"./Dialog-BFfcJUiM.js";import"./Button-DxAPDldv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C_WBS1_H.js";import"./Collection-DHibalOY.js";import"./CollectionBuilder-BmvqiF6i.js";import"./SelectionIndicator-BSAaVuJo.js";import"./Separator-CdSBB1Je.js";import"./SelectionManager-CyYCav6z.js";import"./useEvent-rTmmTfmz.js";import"./useCollator-Cks0Ndw_.js";import"./FocusScope-1cqgO8JZ.js";import"./VisuallyHidden-upAad0zi.js";import"./OverlayTrigger-2i5uyzps.js";import"./ControlledNotification-C8Yc-FwQ.js";import"./Heading-C0cuqA4W.js";import"./Heading--qvH0N7j.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-BWFYeZ1Y.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CbAXLLLD.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
