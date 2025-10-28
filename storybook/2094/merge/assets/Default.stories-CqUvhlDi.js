import{r as h,j as r}from"./iframe-GtWYOLNc.js";import{P as m}from"./PasswordCreationField-DaTVor__.js";import{L as u}from"./Label-rRCJof1T.js";import{B as g}from"./Button-DAMH2RQe.js";import{l as C}from"./IconWarning-D3qu7dXh.js";import{C as w}from"./CopyButton-C8yLqHre.js";import"./index-nuYtCEEu.js";import"./dynamic-D_-LYO4W.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./clsx-B-dksMZM.js";import"./index-Do7K3gX4.js";import"./useFieldComponent-CFSDwBJf.js";import"./utils-DD5Sc9KY.js";import"./Text-CjcFKgn5.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BE-u8eGk.js";import"./ClearPropsContext-DAA0VQnf.js";import"./Group-CA7dPhnC.js";import"./useFocusRing-DOaM9YXN.js";import"./useFocus-DFp-sRZK.js";import"./Input-BPP_cYwL.js";import"./Hidden-BU9Lcw6n.js";import"./TextField-DX8eTu1K.js";import"./RSPContexts-prl6X50T.js";import"./Form-CKR5JFnD.js";import"./useLabel-DTE1dj4A.js";import"./Label-CQFAMqNH.js";import"./useTextField-CjuQjVvL.js";import"./useFormReset-C8pOBnDM.js";import"./useControlledState-DlI3gMwx.js";import"./useFocusable-jI0DLtpW.js";import"./useFormValidation-BcoBpGbt.js";import"./Action-DgPdZSGQ.js";import"./context-B79p2l6c.js";import"./useStatic-BUau0uD4.js";import"./browser-Dfdmz1Vs.js";import"./getActionGroupSlot-DVt_1gUF.js";import"./FieldDescription-H7Ygmbn3.js";import"./Text-Bh_VtmGj.js";import"./EmulatedBoldText-CB08elGP.js";import"./Tooltip-DJZxW_5C.js";import"./ClearPropsContextView-C2nQoxxe.js";import"./OverlayArrow-DIM14olf.js";import"./ProgressBar-CdTHAJ2Y.js";import"./context-D40YBGtd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./ReactAriaControlledValueFix-BuCvRdUH.js";import"./ContextualHelpTrigger-CQaiI0b-.js";import"./Popover-BloSQfLN.js";import"./useOverlayController-Cm_PeV9X.js";import"./OverlayContextProvider-C3tl0ORG.js";import"./Dialog-E17SkaPF.js";import"./Button-DAFfpCNE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B3Z_0YqL.js";import"./Collection-Ce3y52jr.js";import"./CollectionBuilder-Dp0_4f88.js";import"./SelectionIndicator-PIsyHCAq.js";import"./Separator-BLTRkzm5.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./useCollator-CosXWie8.js";import"./FocusScope-CmjH0BfW.js";import"./VisuallyHidden-CMXGnTyG.js";import"./OverlayTrigger-C3VeFBdc.js";import"./ControlledNotification-YDt7-Pno.js";import"./Heading-D17rAsKb.js";import"./Heading-D0R31Oqj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CpjecO7V.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BgxzSWV-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
