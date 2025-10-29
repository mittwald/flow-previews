import{r as h,j as r}from"./iframe-BFuSR0CY.js";import{P as m}from"./PasswordCreationField-DEB8fSwh.js";import{L as u}from"./Label-Bzfu9tdI.js";import{B as g}from"./Button-B8_RMB4T.js";import{z as C}from"./IconWarning-BDLPxpKm.js";import{C as w}from"./CopyButton-nwvXegUu.js";import"./index-nuYtCEEu.js";import"./dynamic-BFfatATg.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./clsx-B-dksMZM.js";import"./index-D8dET2XL.js";import"./useFieldComponent-DvAk7ROg.js";import"./utils-CEuw8CkJ.js";import"./Text-CVe1O8QA.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-705z1kI6.js";import"./ClearPropsContext-DVOTNhZJ.js";import"./Group-ln6N3sDl.js";import"./useFocusRing-CdpePOyD.js";import"./useFocus-Dfi_0tQM.js";import"./Input-Dy1mfW1m.js";import"./Hidden-BoaT9a_j.js";import"./TextField-CuNLH0lz.js";import"./RSPContexts-Df5wrtNL.js";import"./Form-CopJ-XT2.js";import"./useLabel-DzVjSD7h.js";import"./Label-Dl8lfN0K.js";import"./useTextField-DzB7yg8E.js";import"./useFormReset-CMQHaKTN.js";import"./useControlledState-Y8_jrThy.js";import"./useFocusable-Or0L-1Mb.js";import"./useFormValidation-Dt4bKs4p.js";import"./Action-BBEtKGm4.js";import"./context-CFFRtyxF.js";import"./useStatic-BcQq_-tU.js";import"./browser-h3r-jBf1.js";import"./getActionGroupSlot-C1e95e1F.js";import"./FieldDescription-DReTe5UI.js";import"./Text-BXhKPUqX.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Tooltip-_6ZohaIC.js";import"./ClearPropsContextView-BzCLuTLO.js";import"./OverlayArrow-wdl515fE.js";import"./ProgressBar-D1Sp6uIf.js";import"./context-6pf_efel.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./ReactAriaControlledValueFix-CD5iZKpR.js";import"./ContextualHelpTrigger-C_PjFtWq.js";import"./Popover-DHySGxM6.js";import"./OverlayContextProvider-CfKGEq1m.js";import"./Dialog-D9CJ_WbB.js";import"./Button-CV2egPhG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYMimxLy.js";import"./Collection-C9ImqwdO.js";import"./CollectionBuilder-ZO6bxSPM.js";import"./SelectionIndicator-DEvuKTnp.js";import"./Separator-BLwDKZm_.js";import"./SelectionManager-DrJQTmKT.js";import"./useEvent-D6E-W8z_.js";import"./useCollator-D7Ttiyl_.js";import"./FocusScope-Dzg120-u.js";import"./VisuallyHidden-_YfAavcM.js";import"./OverlayTrigger-CApgQhCu.js";import"./ControlledNotification-4GKhJW90.js";import"./Heading-CGhPkmp1.js";import"./Heading-BHjkLbk1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DQtRhby5.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CF0vj0R_.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
