import{r as h,j as r}from"./iframe-DCel2PhG.js";import{P as m}from"./PasswordCreationField-BfCfrTdH.js";import{L as u}from"./Label-DVkF56bm.js";import{B as g}from"./Button-CjhaH8vt.js";import{m as C}from"./IconWarning-CNMqfC0c.js";import{C as w}from"./CopyButton-DoEFF_y-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CoRoJ1gY.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./clsx-B-dksMZM.js";import"./index-DcvCSlSd.js";import"./ActionBatch-BNnkW8Wa.js";import"./useOverlayController-BAgKybrq.js";import"./useStatic-Gj7JsFzP.js";import"./browser-ChoxEgkm.js";import"./getActionGroupSlot-BM5R5I3-.js";import"./FieldDescription-ChM1MP2a.js";import"./Text-CfcNN3C1.js";import"./EmulatedBoldText-6uMsyrU3.js";import"./Text-H5k4jR7L.js";import"./utils-jFfJrK0I.js";import"./Tooltip-C2shJgFN.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./useFocus-BSXyJlKK.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-V0mABmwM.js";import"./context-ChvTJ1gc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D6latAqm.js";import"./useControlledState-uXSCouXp.js";import"./useFocusable-CF_X-2Wu.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./ContextualHelpTrigger-bHjB4hdv.js";import"./Popover-C8zyal55.js";import"./OverlayContextProvider-BfHmVY35.js";import"./Dialog-BnrJ3EGg.js";import"./Button-Dbr1_oBf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-l6QeQysM.js";import"./RSPContexts-BWRH8UQz.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./SelectionIndicator-DYHfPyq2.js";import"./Separator-BB0Sm4E2.js";import"./SelectionManager-CIJEtr4-.js";import"./useEvent-CN9vdLun.js";import"./useCollator-qJfX3fiN.js";import"./FocusScope-BrLtMtFa.js";import"./VisuallyHidden-giqV-lwH.js";import"./OverlayTrigger-BYr1biz5.js";import"./Heading-DPAdBgTw.js";import"./Heading-Cs7GlIOt.js";import"./useFieldComponent-CWMmv0d5.js";import"./FieldError-DI0hFked.js";import"./FieldError-QICB5hyW.js";import"./AlertText-CGICoaW7.js";import"./AlertIcon-C6GnHejw.js";import"./useControlledHostValueProps-DRZV2yGu.js";import"./TextField-CrSgtVMY.js";import"./Form-BsISnRaP.js";import"./Group-yuR7pI6G.js";import"./Input-D8WhG3Nd.js";import"./useTextField-C88_NvvV.js";import"./useFormReset-DvzBERJE.js";import"./useFormValidation-CVEw0jVb.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./remote-MfAOzJwE.js";import"./react-children-utilities-BnAAVcQi.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
