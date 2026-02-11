import{r as h,j as r}from"./iframe-DN5oj4yX.js";import{P as m}from"./PasswordCreationField-l9YP1RbT.js";import{L as u}from"./Label-DdsftIej.js";import{B as g}from"./Button-CF7BcIrS.js";import{m as C}from"./IconWarning-C1DuEctF.js";import{C as w}from"./CopyButton-3gj35_un.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D_PfG4t1.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./clsx-B-dksMZM.js";import"./index-DUndj3nA.js";import"./Action-GYKv85ul.js";import"./context-BOqeUKEn.js";import"./useStatic-D8kDoy_M.js";import"./browser-t02O3gv-.js";import"./getActionGroupSlot-B3lnxGbD.js";import"./FieldDescription-BcPtYng1.js";import"./Text-B6wg_w_v.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./Text-mAHBNKmk.js";import"./utils-u73lU7bl.js";import"./Tooltip-DNVOFtuj.js";import"./OverlayArrow-BufWJWwU.js";import"./useFocus-CanfFAPv.js";import"./ProgressBar-ChQMk24B.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-52-JVqkW.js";import"./context-BQuP-QJJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Cbnk9x9v.js";import"./useControlledState-Dl4qb5FM.js";import"./useFocusable-6yyx7e1u.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./ContextualHelpTrigger-Cvn8fTOe.js";import"./Popover-BkLmPzXt.js";import"./useOverlayController-B28PiJc5.js";import"./OverlayContextProvider-BWiZzEmK.js";import"./Dialog-CpK4NMTe.js";import"./Button-BQ5wMWnN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-dDK8KT2l.js";import"./RSPContexts-CT4Rd2GX.js";import"./Collection-DN16OmDe.js";import"./CollectionBuilder-CE82C-kz.js";import"./SelectionIndicator-BsSExIou.js";import"./Separator-CB9FghXV.js";import"./SelectionManager-upRYqEYI.js";import"./useEvent-CkPyHfFN.js";import"./useCollator-DUmbl0t5.js";import"./FocusScope-BtxR-tB9.js";import"./VisuallyHidden-BipIpOcd.js";import"./OverlayTrigger-DmhzA4cb.js";import"./Heading-CAunjdNa.js";import"./Heading-sKqg2l7g.js";import"./useFieldComponent-DVOrWc0y.js";import"./FieldError-CqFPhrQB.js";import"./FieldError-lE_N68JV.js";import"./AlertText-CB1nkD4I.js";import"./AlertIcon-DDaSQZAJ.js";import"./useControlledHostValueProps-DrvZABOc.js";import"./TextField-B_zC3cwd.js";import"./Form-Cz7a81_t.js";import"./Group-DgbPGgBI.js";import"./Input-Bwk10Fre.js";import"./useTextField-BGRKNtcz.js";import"./useFormReset-B44cc5VH.js";import"./useFormValidation-pAg62KPr.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-IkyiKoyX.js";import"./remote-CDfMg8I2.js";import"./react-children-utilities-qHZ2vBh-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
