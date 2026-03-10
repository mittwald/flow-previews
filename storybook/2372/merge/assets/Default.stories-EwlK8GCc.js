import{r as h,j as r}from"./iframe-C1IdntWq.js";import{P as m}from"./PasswordCreationField-CGdkwct9.js";import{L as u}from"./Label-Be-SvMDa.js";import{B as g}from"./Button-mSWnhOmK.js";import{m as C}from"./IconWarning-BY-3yqWN.js";import{C as w}from"./CopyButton-1xEHTNHg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CUpn0zgH.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./clsx-B-dksMZM.js";import"./index-Coy6T-Pa.js";import"./ActionBatch-VQdQXkn7.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./browser-WXx3m9ky.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./FieldDescription-CN54GY3S.js";import"./Text-W7h8_LNr.js";import"./EmulatedBoldText-COIRRGWk.js";import"./Text-CkLpWhuM.js";import"./utils-CNo0qaX0.js";import"./Tooltip-CumOZdzd.js";import"./OverlayArrow-DbaAbVnX.js";import"./useFocus-HLQCbRtK.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CAzlzskU.js";import"./context-CuxmdylV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DQuA22ZQ.js";import"./useControlledState-FuYpKfPj.js";import"./useFocusable-Z0Y9nSjp.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./ContextualHelpTrigger-Bwl1TLoX.js";import"./Popover-BzNCFXu7.js";import"./OverlayContextProvider-Car-oabl.js";import"./Dialog-DaGSiRkj.js";import"./Button-C7cBjDhV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIzz4kJt.js";import"./RSPContexts-DcVP09I4.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./SelectionIndicator-DffOr8wA.js";import"./Separator-B7Oy5oGV.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./useCollator-BHhXYjcX.js";import"./FocusScope-C2GkFJYp.js";import"./VisuallyHidden-709t6SxP.js";import"./OverlayTrigger-B9t-MDtI.js";import"./Heading-CLkS-w3U.js";import"./Heading-BVXFLwsq.js";import"./useFieldComponent-o_u9PYdj.js";import"./FieldError-DsJ8c-ZE.js";import"./FieldError-DgBT4dcF.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";import"./useControlledHostValueProps-B0HcYsZy.js";import"./TextField-f8CG66Mv.js";import"./Form-CijQ_R7m.js";import"./Group-DCbRkIJ9.js";import"./Input-Des9E_um.js";import"./useTextField-DDX9uSSl.js";import"./useFormReset-CaX1fgpZ.js";import"./useFormValidation-CloSy7V5.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C4dBxxC2.js";import"./remote-DdxKfasm.js";import"./react-children-utilities-BeKjhuis.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
