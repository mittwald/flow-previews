import{r as h,j as r}from"./iframe-B8r8XrPb.js";import{P as m}from"./PasswordCreationField-ByMSZqrW.js";import{L as u}from"./Label-PmVCxAho.js";import{B as g}from"./Button-x8S8uZ_3.js";import{z as C}from"./IconWarning-BnpSGPSL.js";import{C as w}from"./CopyButton-CJY88v6t.js";import"./index-nuYtCEEu.js";import"./dynamic-Bnt25vOJ.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./clsx-B-dksMZM.js";import"./index-ChMccDi0.js";import"./Action-DHR-Mkls.js";import"./context-tqHfsDuk.js";import"./useStatic-Qi3p0Ena.js";import"./browser-5JWtNQpe.js";import"./getActionGroupSlot-BOj_bO4_.js";import"./FieldDescription-B6QY2e39.js";import"./Text-CxxNxEUo.js";import"./EmulatedBoldText-DH8-rljC.js";import"./Text-DsIbOJYe.js";import"./utils-B2sHMxfy.js";import"./Tooltip-CS_vn47s.js";import"./ClearPropsContextView-CH1TrHU5.js";import"./ClearPropsContext-BX2g1WFh.js";import"./OverlayArrow-Cf4VI4sB.js";import"./useFocus-Co_XlsN_.js";import"./ProgressBar-9fERUQ0g.js";import"./Label-DhvUjtv7.js";import"./Hidden-C0uurl-T.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn_yI2FK.js";import"./context-d7knuPTA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dhb_P5xS.js";import"./useFocusable-USAcjdfT.js";import"./useFocusRing-DGaivw0f.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./ReactAriaControlledValueFix-PV676lWb.js";import"./ContextualHelpTrigger-0Jdr5s5r.js";import"./Popover-CHTa2a8I.js";import"./OverlayContextProvider-C-xiKcZu.js";import"./Dialog-DJ22CsqV.js";import"./Button-DOtSsu3o.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BPC_OlSs.js";import"./RSPContexts-Do_0M-hc.js";import"./Collection-Dst8UlSd.js";import"./CollectionBuilder-C1D-HmCC.js";import"./SelectionIndicator-BHwOxkNR.js";import"./Separator-BqgRmmFG.js";import"./SelectionManager-kzjy3-H4.js";import"./useEvent-BY3XUUFC.js";import"./useCollator-CG3LD3jQ.js";import"./FocusScope-DHLNAyY7.js";import"./VisuallyHidden-DvNHrLSk.js";import"./OverlayTrigger-e3uC-u8g.js";import"./ControlledNotification-DGY7ssQ6.js";import"./Heading-1GMm3hB8.js";import"./Heading-BM099qXJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-BwqNFsAX.js";import"./useFieldComponent-DByhNd_z.js";import"./FieldError-Cr-OeICt.js";import"./TextField-DYkOEqpl.js";import"./Form-C0W2Agsa.js";import"./Group-DkjxT4kZ.js";import"./Input-Cyh52Hgt.js";import"./useTextField-BBBf5j1Z.js";import"./useFormReset-Cpg0SQow.js";import"./useFormValidation-DuuScCCl.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-bZO-WOXG.js";import"./react-children-utilities-J_GxmSqg.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
