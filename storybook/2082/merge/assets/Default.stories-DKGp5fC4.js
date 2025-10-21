import{r as h,j as r}from"./iframe-EtTbRQoM.js";import{P as m}from"./PasswordCreationField-DDXVH0P6.js";import{L as u}from"./Label-BHPxSoWd.js";import{B as g}from"./Button-DxuCaQyR.js";import{l as C}from"./IconWarning-CO-lUcxm.js";import{C as w}from"./CopyButton-DJ0FVRXt.js";import"./index-nuYtCEEu.js";import"./dynamic-Cv7GHFn6.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./Group-DeuTwRQ_.js";import"./useFocusRing-hCmULEnE.js";import"./useFocus-9RWBE5qv.js";import"./Input-TlPGvJ5n.js";import"./Hidden-BhWY_xu3.js";import"./TextField-D5UL4yco.js";import"./RSPContexts-Cv7znJuu.js";import"./Form-CyJo_kk3.js";import"./Label-FPs7V2cE.js";import"./useTextField-Ec9tFhY1.js";import"./useFormReset-B1BZ1rNK.js";import"./useControlledState-DmCe06Ai.js";import"./useFocusable-Do_2l7DI.js";import"./useFormValidation-CisZkPpg.js";import"./FormField.module-CqWyJNQI.js";import"./Action-CL-CoYGw.js";import"./context-C1SllNhn.js";import"./useStatic-DxnBGf3l.js";import"./browser-Cob99Do9.js";import"./getActionGroupSlot-CxKatSQe.js";import"./FieldError-Bx65Dx0T.js";import"./FieldDescription-RyyHlj0A.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./Tooltip-Bd-mtq7X.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./OverlayArrow-CczkULsk.js";import"./ProgressBar-C-f1QmIl.js";import"./context-HEbrZrvP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./ReactAriaControlledValueFix-CYrgQbLH.js";import"./ContextualHelpTrigger-DpLJnDqv.js";import"./Popover-ByVAPhqX.js";import"./useOverlayController-BhlWBiph.js";import"./OverlayContextProvider-6Zh7EMbz.js";import"./Dialog-D4gVf8vR.js";import"./Button-qX7xBgDX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-sAonsHdy.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./OverlayTrigger-fEmiW_c4.js";import"./ControlledNotification-DztR7-dO.js";import"./Heading-YEToWG6x.js";import"./Heading-DTQh2nx3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DOWOMeeY.js";import"./LoadingSpinner-QwVO93wM.js";import"./react-children-utilities-DmQ8-YOo.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
