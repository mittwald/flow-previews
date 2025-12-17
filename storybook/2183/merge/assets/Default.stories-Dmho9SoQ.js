import{r as h,j as r}from"./iframe-nUnY8CpM.js";import{L as u}from"./Label-CarGuai1.js";import{B as g}from"./Button-Drav3_ks.js";import"./IconChevronDown-C6KAqmcJ.js";import{I as C}from"./IconDanger-BtbJ86A5.js";import{C as w}from"./CopyButton-BppYwzle.js";import{P as m}from"./PasswordCreationField-CJ7dM34-.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./index-D5rarCk0.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./Label-B7kFjMQQ.js";import"./utils-DtyHAF7C.js";import"./Hidden-DuLhuFUb.js";import"./IconX-CEHyWrnq.js";import"./IconCheck-CMQi8hKM.js";import"./Text-CKSRxaE3.js";import"./browser-vyiLhVPE.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./Text-4n54moM_.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./ariaLive-BFPjGELJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-Bcop36Tp.js";import"./Button-BQlojcF-.js";import"./ProgressBar-BfYlkvzs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./IconCopy-XIRkXsOw.js";import"./Tooltip-DIiRbZq4.js";import"./OverlayArrow-CHkAkv_A.js";import"./useControlledState-CaC4m18c.js";import"./react-children-utilities-CTm4HEtF.js";import"./Action-Akn1uW1v.js";import"./useStatic-D4OCIKv7.js";import"./getActionGroupSlot-CsQGMPlH.js";import"./context-CUJwrxJk.js";import"./dynamic-BZsQ8DvG.js";import"./FieldDescription-CiRWpG91.js";import"./TranslationProvider-B34SHO_y.js";import"./IconCircleCheck-Cp0XlozD.js";import"./ContextualHelpTrigger-Bw2VGBGE.js";import"./Popover-DAIMajuO.js";import"./OverlayContextProvider-QZV7xJtt.js";import"./Dialog-x6GsWu_T.js";import"./RSPContexts-CWBH7SuF.js";import"./Collection-DKxVpLoc.js";import"./CollectionBuilder-UHR0HG3W.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./Separator-DDl87Ima.js";import"./SelectionManager-f8KTi6JZ.js";import"./useEvent-DGx-2GiN.js";import"./useCollator-BNnpPJUs.js";import"./FocusScope-CB6t9Dkj.js";import"./VisuallyHidden-DJajrHPg.js";import"./useOverlayController-D3ZcYAE3.js";import"./OverlayTrigger-CW0LF_M5.js";import"./IconInfo-BRSoGua_.js";import"./Heading-wRPk5wst.js";import"./Heading-BKnaj6R8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CwsJxGlb.js";import"./FieldError-Dl4XoXDz.js";import"./FieldError-CG7ulvH_.js";import"./useControlledHostValueProps-DFslcMmj.js";import"./TextField-DC8Uy_by.js";import"./Form-DX8kqEOp.js";import"./Group-BykXvQmq.js";import"./Input-B5TNmDN2.js";import"./useTextField-BpK1hl2r.js";import"./useFormReset-B9MhH15U.js";import"./useFormValidation-BmCGlg1a.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
