import{r as h,j as r}from"./iframe-BdeexEb8.js";import{P as m}from"./PasswordCreationField-B6XZfJw9.js";import{L as u}from"./Label-B8MQOgYT.js";import{B as g}from"./Button-8DtAEqjD.js";import{l as C}from"./IconWarning-CtsbdbUA.js";import{C as w}from"./CopyButton-CY0RVX7E.js";import"./index-nuYtCEEu.js";import"./dynamic-B5dXdtKW.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./clsx-B-dksMZM.js";import"./index-DrTgVdtP.js";import"./useFieldComponent-DdJyO0fC.js";import"./utils-BE4tcj7E.js";import"./Text-C7oFtPVp.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-jctua2LA.js";import"./ClearPropsContext-C8aFsCZA.js";import"./Group-B7cbcAm2.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocus-DOIh0B1Z.js";import"./Input-CoS8ao7l.js";import"./Hidden-CQyoiK8N.js";import"./TextField-CqO76lnK.js";import"./RSPContexts-BujZOMoI.js";import"./Form-Ck-IBHt9.js";import"./useLabel-_lz56ByA.js";import"./Label-0GucTR7O.js";import"./useTextField-D8W6t986.js";import"./useFormReset-BENrYz2J.js";import"./useControlledState-lwDPvcY9.js";import"./useFocusable-BJo0-JcZ.js";import"./useFormValidation-wqB4x0T2.js";import"./Action-RARPQ8v8.js";import"./context-BWmIRqAJ.js";import"./useStatic-DlCxFiK7.js";import"./browser-CYlNocNO.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./FieldDescription-D4HQC7nu.js";import"./Text-G8amV_-h.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./Tooltip-COG5OYCc.js";import"./ClearPropsContextView-CJZTyvnc.js";import"./OverlayArrow-CMWDkVkR.js";import"./ProgressBar-BoDGUte7.js";import"./context-D6yVr_mO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./ReactAriaControlledValueFix-CxrHijXl.js";import"./ContextualHelpTrigger-CeGwHoAE.js";import"./Popover-BdPM10kG.js";import"./useOverlayController-CJDaqlYR.js";import"./OverlayContextProvider-DyWsSbcY.js";import"./Dialog-D2DNdmLu.js";import"./Button-m7osfjr7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BF3KJpSX.js";import"./Collection-7t0tVRTb.js";import"./CollectionBuilder-DzfVoPOa.js";import"./SelectionIndicator-0lfezkYj.js";import"./Separator-DDMmaPKr.js";import"./SelectionManager-Y2mFlrlN.js";import"./useEvent-DWTDuj97.js";import"./useCollator-DH6O6X4x.js";import"./FocusScope-BYBHw4Pm.js";import"./VisuallyHidden-CRJbmMUG.js";import"./OverlayTrigger-BSJgZejS.js";import"./ControlledNotification-C6PtDURt.js";import"./Heading-CaWv9CDj.js";import"./Heading-CXwQx98o.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-F0tDupNw.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-f45dISc_.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
