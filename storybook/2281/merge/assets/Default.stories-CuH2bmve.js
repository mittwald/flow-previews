import{r as h,j as r}from"./iframe-B-26223i.js";import{P as m}from"./PasswordCreationField-DmoAU8Lb.js";import{L as u}from"./Label-htHf1MZ3.js";import{B as g}from"./Button-B60fo84_.js";import{m as C}from"./IconWarning-CfZm6euj.js";import{C as w}from"./CopyButton-BefNHywL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DWm47R25.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./clsx-B-dksMZM.js";import"./index-CMj-JRml.js";import"./Action-CKtvTujB.js";import"./context-JKAIHclB.js";import"./useStatic-DyURBROl.js";import"./browser-DNWQphaZ.js";import"./getActionGroupSlot-BO_i0UUK.js";import"./FieldDescription-DQk95Kge.js";import"./Text-C25EED6m.js";import"./EmulatedBoldText-Co4v7GV8.js";import"./Text-CrdzXlCc.js";import"./utils-CprJ_klo.js";import"./Tooltip-Da73itgb.js";import"./OverlayArrow-Cnkc5XCY.js";import"./useFocus-DYSsUR82.js";import"./ProgressBar-DwD1l90a.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUREvcwl.js";import"./context-B9n95xcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DATGHg9y.js";import"./useControlledState-CCY4nzRh.js";import"./useFocusable-CRgLtiVg.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./ContextualHelpTrigger-DYImvMVH.js";import"./Popover-iofx4eop.js";import"./useOverlayController-Bd-vbTeq.js";import"./OverlayContextProvider-DL8WNCgz.js";import"./Dialog-COoPEj_z.js";import"./Button-C9Zg0tM0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlwAXRn7.js";import"./RSPContexts-Braq8AdO.js";import"./Collection-DFxwbH7P.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./SelectionIndicator-DrGDjKtL.js";import"./Separator-Bc4LdP2j.js";import"./SelectionManager-BbjsNIkI.js";import"./useEvent-C1z2hzAA.js";import"./useCollator-cEvXopFB.js";import"./FocusScope-BG92zKg5.js";import"./VisuallyHidden-DpBOnOEH.js";import"./OverlayTrigger-DHG4FXf-.js";import"./Heading-BATksAHi.js";import"./Heading-BVbzfdRb.js";import"./useFieldComponent-eul3OsXk.js";import"./FieldError-DKJxt2u7.js";import"./FieldError-B1RwUwkr.js";import"./AlertText-SDytihrL.js";import"./AlertIcon-Bi7YC7dH.js";import"./useControlledHostValueProps-mi_fea-8.js";import"./TextField-BadStk_u.js";import"./Form-Vtk-UJSV.js";import"./Group-DQX_CbI0.js";import"./Input-C02u9QAf.js";import"./useTextField-CNHOwRrb.js";import"./useFormReset-BQreYCpE.js";import"./useFormValidation-CodwuA9r.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CNdw31t2.js";import"./remote-CUr3PG4h.js";import"./react-children-utilities-CKCxoaTL.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
