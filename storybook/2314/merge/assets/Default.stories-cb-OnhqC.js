import{r as h,j as r}from"./iframe-DM7qDJWN.js";import{P as m}from"./PasswordCreationField-C1hojMA2.js";import{L as u}from"./Label-BIhRdzJz.js";import{B as g}from"./Button-Dc6TEAeS.js";import{m as C}from"./IconWarning-Ck-PBl-h.js";import{C as w}from"./CopyButton-CTAsMuQK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bo6M-mWb.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./clsx-B-dksMZM.js";import"./index-Zik4_3jH.js";import"./Action-SkKzNvM1.js";import"./context-CLl5kDsk.js";import"./useStatic-Dwurevey.js";import"./browser-GV4Evxlh.js";import"./getActionGroupSlot-ChSghX-d.js";import"./FieldDescription-BnJyB75w.js";import"./Text-DFbMev3D.js";import"./EmulatedBoldText-DY5AV1Fo.js";import"./Text-CqLEY5m0.js";import"./utils-DCh3KcEQ.js";import"./Tooltip-C6ILP02l.js";import"./OverlayArrow--T1zjZBI.js";import"./useFocus-V4g9fXxO.js";import"./ProgressBar-XdjtveJ3.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d_6Xjsvm.js";import"./context-Bdkwq7qF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DKHg-pYg.js";import"./useControlledState-CGBhCpgz.js";import"./useFocusable-jnMsXBmm.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./ContextualHelpTrigger-DWWzFWqF.js";import"./Popover-C6WGT-mG.js";import"./useOverlayController-BWbKAOxQ.js";import"./OverlayContextProvider-CHeMGzMk.js";import"./Dialog-CtXs4QP0.js";import"./Button-Cle7Q0jH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DcE1V40F.js";import"./RSPContexts-DtHHiQqe.js";import"./Collection-B3op_wkO.js";import"./CollectionBuilder-CUYn1Myb.js";import"./SelectionIndicator-DhuP4hb9.js";import"./Separator-duSL34B8.js";import"./SelectionManager-B15RSxH7.js";import"./useEvent-h15Gin5m.js";import"./useCollator-BSJypaQj.js";import"./FocusScope-DcmRl2I0.js";import"./VisuallyHidden-Djcrj7d_.js";import"./OverlayTrigger-DjZ_tJ2j.js";import"./Heading-C1qjB_Q-.js";import"./Heading-DA3hIkQr.js";import"./useFieldComponent-DWfL7CEw.js";import"./FieldError-yptSAddh.js";import"./FieldError-CDF7zCEW.js";import"./AlertText-DuUjVJKd.js";import"./AlertIcon-B0QkWIB4.js";import"./useControlledHostValueProps-CKa29mBp.js";import"./TextField-BvD23rCg.js";import"./Form-DD0plB0K.js";import"./Group-V_zeLWI4.js";import"./Input-SfHIWI_P.js";import"./useTextField-BQE_0n2Q.js";import"./useFormReset-DEHhMcAF.js";import"./useFormValidation-BjtvC6sH.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BB2_lVH8.js";import"./remote-CkIQ4maL.js";import"./react-children-utilities-CxD6zGyG.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
