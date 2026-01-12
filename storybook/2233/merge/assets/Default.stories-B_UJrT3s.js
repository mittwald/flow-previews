import{r as h,j as r}from"./iframe-Ca6Y6Qbd.js";import{P as m}from"./PasswordCreationField-7ZJpR7fc.js";import{L as u}from"./Label-BiOSulbp.js";import{B as g}from"./Button-Cmpvhu71.js";import{m as C}from"./IconWarning-DE1Emhrq.js";import{C as w}from"./CopyButton-2yvuXCsL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CaH7ifbO.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./clsx-B-dksMZM.js";import"./index-dqS1_mS3.js";import"./Action-BHbL3yoQ.js";import"./context-BIxaIE9W.js";import"./useStatic-CLFM6Rz8.js";import"./browser-CbMIui3y.js";import"./getActionGroupSlot-DZQMPipw.js";import"./FieldDescription-CPhIvjGD.js";import"./Text-BEUemzSa.js";import"./EmulatedBoldText-B497YwdM.js";import"./Text-XI5tIYL5.js";import"./utils-CgPiupY7.js";import"./Tooltip-DErBWCpz.js";import"./OverlayArrow-BonLfIYe.js";import"./useFocus-YlOppDM-.js";import"./ProgressBar-CbWR67C5.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./context-BSVjMcq9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CsFJYMR6.js";import"./useFocusable-DsA9Nlin.js";import"./useFocusRing-DB26dgIQ.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./ContextualHelpTrigger-C-tpRNIq.js";import"./Popover-DUAQfyPS.js";import"./useOverlayController-D-zjYsKH.js";import"./OverlayContextProvider-Bf0QUNhT.js";import"./Dialog-B1e_uHMT.js";import"./Button-BwNAbkAI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-7njUzVdk.js";import"./RSPContexts-CuMU_eQB.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./VisuallyHidden-DA0DNDbd.js";import"./OverlayTrigger-ONQN5d76.js";import"./Heading-CiyOEL28.js";import"./Heading-CtfKFM99.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-Drxg4ucu.js";import"./FieldError-Btuc_7Om.js";import"./FieldError-DTh-affr.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";import"./useControlledHostValueProps-DPBYxvo9.js";import"./TextField-Dn0ILkoc.js";import"./Form-DvyEl8-X.js";import"./Group-DMrJjXdW.js";import"./Input-zU6xkduX.js";import"./useTextField-DJ9r6KnP.js";import"./useFormReset-QXLzcWbc.js";import"./useFormValidation-CFRjiWi1.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./remote-B__m5VQE.js";import"./react-children-utilities-CEtYI3ik.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
