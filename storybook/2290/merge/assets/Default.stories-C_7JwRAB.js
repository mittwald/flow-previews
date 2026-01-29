import{r as h,j as r}from"./iframe-CV15FJMl.js";import{P as m}from"./PasswordCreationField-BXu3dqSV.js";import{L as u}from"./Label-BYiN1vfD.js";import{B as g}from"./Button-CPmcSz1K.js";import{m as C}from"./IconWarning-CS7d0V5Y.js";import{C as w}from"./CopyButton-CxOUaNV7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-83TxHgtq.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./clsx-B-dksMZM.js";import"./index-DgyS9CYh.js";import"./Action-k7eAd4lv.js";import"./context-z7OXrsOp.js";import"./useStatic-CaY36sW2.js";import"./browser-8BNXX35r.js";import"./getActionGroupSlot-CEtNZ_Ue.js";import"./FieldDescription-BbUtqeWX.js";import"./Text-DO3jYkuR.js";import"./EmulatedBoldText-CKJb5Byw.js";import"./Text-Bk0CAvR5.js";import"./utils-B45PgFGd.js";import"./Tooltip-BaYTER9k.js";import"./OverlayArrow-BtUNb3SD.js";import"./useFocus-C3kMSW21.js";import"./ProgressBar-DYhZqT6M.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DgTpLYXb.js";import"./context-Is67_JkX.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CoS5ESqQ.js";import"./useControlledState-Br5i43rk.js";import"./useFocusable-DenRoGzb.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./ContextualHelpTrigger-DFCO2fJv.js";import"./Popover-Bhj9zixw.js";import"./useOverlayController-10mwaIn0.js";import"./OverlayContextProvider-B4MrJ_Vf.js";import"./Dialog-CvkIF4vR.js";import"./Button-Deu1Fo5o.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C9ebI84m.js";import"./RSPContexts-09abhkzW.js";import"./Collection-BDyrlbfU.js";import"./CollectionBuilder-DPEpUwFF.js";import"./SelectionIndicator-C649Jmr0.js";import"./Separator-BUXgDBus.js";import"./SelectionManager-DjElDtGz.js";import"./useEvent-CGsPBawQ.js";import"./useCollator-C223TjTn.js";import"./FocusScope-Da56m84L.js";import"./VisuallyHidden-DJ3SqDe0.js";import"./OverlayTrigger--ZhGhozj.js";import"./Heading-DwSdW-0K.js";import"./Heading-BvCB2pW7.js";import"./useFieldComponent-4syZJMEs.js";import"./FieldError-e14SOUTJ.js";import"./FieldError-CDBleeuN.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";import"./useControlledHostValueProps-CzUjaEYd.js";import"./TextField-C5RLv0sl.js";import"./Form-B5_Ftb3l.js";import"./Group-Oc33WXVS.js";import"./Input-Wuyb26cC.js";import"./useTextField-DH39Jsbq.js";import"./useFormReset-DQt01LcM.js";import"./useFormValidation-rdndu8q5.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C2UghIT7.js";import"./remote-BYNvJzFU.js";import"./react-children-utilities-Cg2jtRRQ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
