import{r as h,j as r}from"./iframe-BYq2oLvG.js";import{P as m}from"./PasswordCreationField-DfjhYJYu.js";import{L as u}from"./Label-xDxAxXdC.js";import{B as g}from"./Button-DnTJdD84.js";import{m as C}from"./IconWarning-l8NPf1u4.js";import{C as w}from"./CopyButton-3BVHMG3x.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bmDFV0NR.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./clsx-B-dksMZM.js";import"./index-BCX3_YU5.js";import"./ActionBatch-Bd-ykVKX.js";import"./context-BgaPAiG2.js";import"./useStatic-CVBRAdvz.js";import"./browser-CRRI-wfh.js";import"./getActionGroupSlot-BbvszDVH.js";import"./FieldDescription-rCK7g6Ew.js";import"./Text-Df3o0vPg.js";import"./EmulatedBoldText-2hwPnQKV.js";import"./Text-BsD4qVoX.js";import"./utils-Da-bhZeG.js";import"./Tooltip-CL4u7bC1.js";import"./OverlayArrow-CfRyqpgH.js";import"./useFocus-BosBzJqA.js";import"./ProgressBar-BYjSEmea.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBF67Bfk.js";import"./context-WfyLsYOo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DoNt3T3i.js";import"./useControlledState-B-JkoIYX.js";import"./useFocusable-eOfLyRoH.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./ContextualHelpTrigger-uEGFVHVG.js";import"./Popover-BI0oaFz7.js";import"./useOverlayController-CI4A0ba3.js";import"./OverlayContextProvider-BMISrNul.js";import"./Dialog-DIAje18X.js";import"./Button-Bk2CF5qa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CABccGP2.js";import"./RSPContexts-DDzq82Ri.js";import"./Collection-DGuLDpP3.js";import"./CollectionBuilder-D5hV5BBU.js";import"./SelectionIndicator-DxCQPmpp.js";import"./Separator-D5y-ao9w.js";import"./SelectionManager-DNg-4UKk.js";import"./useEvent-BYfYEsDL.js";import"./useCollator-BntQ465Q.js";import"./FocusScope-CUVzpEcF.js";import"./VisuallyHidden-4k4K_3kv.js";import"./OverlayTrigger-Cf1aQvVs.js";import"./Heading-CpBZdPdX.js";import"./Heading-CuMsOcSF.js";import"./useFieldComponent-C42pk4aC.js";import"./FieldError-Cq2wz6X1.js";import"./FieldError-3pauqY5q.js";import"./AlertText-BLnni9j6.js";import"./AlertIcon-DHHmiMC7.js";import"./useControlledHostValueProps-Bfvj7P7T.js";import"./TextField-CTpVzkYd.js";import"./Form-BjhhXbaP.js";import"./Group-D2o0YYLE.js";import"./Input-2WqTMUAU.js";import"./useTextField-DkyrAVou.js";import"./useFormReset-COvJ3vzl.js";import"./useFormValidation-DIPf7gSr.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DIcYbI07.js";import"./remote-SGC31yDV.js";import"./react-children-utilities-Cmc3EC1f.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
