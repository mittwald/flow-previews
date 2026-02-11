import{r as h,j as r}from"./iframe-D8EpHgnQ.js";import{P as m}from"./PasswordCreationField-DtoyQVsz.js";import{L as u}from"./Label-cX-SxkfN.js";import{B as g}from"./Button-v3XDTDQm.js";import{m as C}from"./IconWarning-lLcAh7ID.js";import{C as w}from"./CopyButton-Db7CIstX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DBeHUKte.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./clsx-B-dksMZM.js";import"./index-CTAMatFU.js";import"./Action-Bqe5nSI1.js";import"./context-CfNS10y1.js";import"./useStatic-BaYU_ZGV.js";import"./browser-CYlhW0g_.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./FieldDescription-BFq5HzSZ.js";import"./Text-Dkvkf5JK.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./Text-BH6HQaIi.js";import"./utils-DUD9ssEU.js";import"./Tooltip-DbjqaO-9.js";import"./OverlayArrow-Dy1GJrBM.js";import"./useFocus-BoCERcfz.js";import"./ProgressBar-CUBLGiqw.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oxfSZqnP.js";import"./context-XjBPUYFu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DyG-PWur.js";import"./useControlledState-XjABDLiW.js";import"./useFocusable-BTi6De5a.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./ContextualHelpTrigger-BB0HOUxG.js";import"./Popover-BAHX_8HU.js";import"./useOverlayController-0DhE6nST.js";import"./OverlayContextProvider-BwUSFJyo.js";import"./Dialog-CkEWxlO6.js";import"./Button-Kox0tnC0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CilZkf8w.js";import"./RSPContexts-D9_YYEmh.js";import"./Collection-tHQuiu82.js";import"./CollectionBuilder-DEptz4hs.js";import"./SelectionIndicator-DYxlXw3H.js";import"./Separator-HrrYEwzP.js";import"./SelectionManager-DHCb6qwA.js";import"./useEvent-BJb2xoQw.js";import"./useCollator-BLLhI1Uc.js";import"./FocusScope-2M3u1eHn.js";import"./VisuallyHidden-maxPxeqi.js";import"./OverlayTrigger-Df6W5haQ.js";import"./Heading-DbO5EpaN.js";import"./Heading-sCjlRmAM.js";import"./useFieldComponent-gPWDO_C1.js";import"./FieldError-WVs7H0vD.js";import"./FieldError-EP30ks0X.js";import"./AlertText-CV2tVP-G.js";import"./AlertIcon-Dtjl7KDj.js";import"./useControlledHostValueProps-DBcqjnuC.js";import"./TextField-I2S-tRWd.js";import"./Form-C9f2RCk6.js";import"./Group-DDKIXJlU.js";import"./Input-DK3Av_oy.js";import"./useTextField-hZLlS4Zz.js";import"./useFormReset-DtPxpP1_.js";import"./useFormValidation-CthS1N1f.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BgyqdyMI.js";import"./remote-DkgoZmNz.js";import"./react-children-utilities-BAjpIu1N.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
