import{r as h,j as r}from"./iframe-BfVXcSwu.js";import{P as m}from"./PasswordCreationField-BZyRXfij.js";import{L as u}from"./Label-Bd8l-oGM.js";import{B as g}from"./Button-BWaSf0b-.js";import{m as C}from"./IconWarning-DP3Jd3bc.js";import{C as w}from"./CopyButton-P99QqhmA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BmLDKJfM.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./clsx-B-dksMZM.js";import"./index-CeMFBQ52.js";import"./ActionBatch-CJiux6Y0.js";import"./context-C_1OFCCp.js";import"./useStatic-DbJ3Jck6.js";import"./browser-6PMbihrp.js";import"./getActionGroupSlot-DFXtDzme.js";import"./FieldDescription-og_Z8NeP.js";import"./Text-DuT5OHtj.js";import"./EmulatedBoldText-D7Dqf59X.js";import"./Text-DLMHe2l_.js";import"./utils-fXq1spu5.js";import"./Tooltip-mGAVaY8q.js";import"./OverlayArrow-DmRhraF5.js";import"./useFocus-YiRiyJqJ.js";import"./ProgressBar-CsSv4sp0.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_iuRLI1y.js";import"./context-BIORzbvt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-2MdBuBce.js";import"./useControlledState-DrmC-rK0.js";import"./useFocusable-Ct-dNppG.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./ContextualHelpTrigger-CswBwdyx.js";import"./Popover-CcjFjnE9.js";import"./useOverlayController-DUljrIWa.js";import"./OverlayContextProvider-BGRrPnlE.js";import"./Dialog-DclKvE_W.js";import"./Button-DmoQnqed.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CZJvw_K-.js";import"./RSPContexts-BvooXi_W.js";import"./Collection-BIYmOT8q.js";import"./CollectionBuilder-B88Jj6se.js";import"./SelectionIndicator-DdESkGsw.js";import"./Separator-C-w1woXG.js";import"./SelectionManager-DDxW4Xvy.js";import"./useEvent-N7DHQy5M.js";import"./useCollator-BH_ZCLE4.js";import"./FocusScope-DYj4AULV.js";import"./VisuallyHidden-CW_0epyS.js";import"./OverlayTrigger-DRzwAl-J.js";import"./Heading-gqF52g1x.js";import"./Heading-OAdJfP_j.js";import"./useFieldComponent-CiLN9FTD.js";import"./FieldError-DHMqnFf9.js";import"./FieldError-DwfvyaXU.js";import"./AlertText-DCHQhIzQ.js";import"./AlertIcon-DMbcP_TF.js";import"./useControlledHostValueProps-B6Bq0gpz.js";import"./TextField-C3JOoQFK.js";import"./Form-BvL7gPGk.js";import"./Group-Cv9HErv5.js";import"./Input-B7Gmgprj.js";import"./useTextField-CN12hJJf.js";import"./useFormReset-bqmCiwf6.js";import"./useFormValidation-BRgTVkeU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-uBvx8mS0.js";import"./remote-cx7SRDrO.js";import"./react-children-utilities-DbhKojHm.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
