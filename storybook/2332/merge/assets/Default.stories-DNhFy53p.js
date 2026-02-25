import{r as h,j as r}from"./iframe-5GKEjLm3.js";import{P as m}from"./PasswordCreationField-BONzG908.js";import{L as u}from"./Label-BiEVFhkG.js";import{B as g}from"./Button-DbzE4WUt.js";import{m as C}from"./IconWarning-B10RUVd-.js";import{C as w}from"./CopyButton-B8kbtnHp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BSdZm6V5.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./clsx-B-dksMZM.js";import"./index-CxI-AdtT.js";import"./ActionBatch-C4EMIU3M.js";import"./useOverlayController-DTNq5pfb.js";import"./useStatic-BQSB_Jfu.js";import"./browser-DpyY6Jfh.js";import"./getActionGroupSlot-06aUfNYP.js";import"./FieldDescription-BBGoJLQx.js";import"./Text-4Jq61r3V.js";import"./EmulatedBoldText-Dw9vtGzr.js";import"./Text-jTefV10v.js";import"./utils-DZdTZXxi.js";import"./Tooltip-Cwix1t3Y.js";import"./OverlayArrow-C_Skf-4I.js";import"./useFocus-BEqaOfOz.js";import"./ProgressBar-CehyS7IW.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-sguPTXZB.js";import"./context-CYoVNjzy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CsUwZj84.js";import"./useControlledState-D9ovZV70.js";import"./useFocusable-BDWe4YTb.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./ContextualHelpTrigger-zGo8OGC5.js";import"./Popover-DZrgFB6y.js";import"./OverlayContextProvider-CsuZ0G7f.js";import"./Dialog-BTalxjOJ.js";import"./Button-CslHKHnR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CYa1OoRC.js";import"./RSPContexts-AhaMx3-_.js";import"./Collection-DOmJuy3e.js";import"./CollectionBuilder-DAbTUazM.js";import"./SelectionIndicator-C_xwSetB.js";import"./Separator-BxdVDEg-.js";import"./SelectionManager-rbmArbuf.js";import"./useEvent-_LgPAmJ5.js";import"./useCollator-COkB7H3x.js";import"./FocusScope-BteWf5AP.js";import"./VisuallyHidden-BfZLOvo3.js";import"./OverlayTrigger-DMEpenBq.js";import"./Heading-BfDqySHg.js";import"./Heading-kRLjhOcq.js";import"./useFieldComponent-B3twwSIL.js";import"./FieldError-qE1en1IM.js";import"./FieldError-DNER0k2B.js";import"./AlertText-BQlCz9t6.js";import"./AlertIcon-xcA2PG-d.js";import"./useControlledHostValueProps-CXgJdXNv.js";import"./TextField-CDcpx15D.js";import"./Form-CkcBXY70.js";import"./Group-Gic7CvlE.js";import"./Input-VyCJjbfE.js";import"./useTextField-ByXQXWS6.js";import"./useFormReset-Bzn3Tj6K.js";import"./useFormValidation-Dje-UJVy.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bp8vDBpW.js";import"./remote-DrqTcZe1.js";import"./react-children-utilities-mNvuquF3.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
