import{r as h,j as r}from"./iframe-B9O3ZODG.js";import{P as m}from"./PasswordCreationField-Ce52ErkR.js";import{L as u}from"./Label-B_yUo08w.js";import{B as g}from"./Button-_bqaGPGi.js";import"./IconApp-Bd3S2boz.js";import{I as C}from"./IconDanger-Aj7LdC1h.js";import{C as w}from"./CopyButton-Brv0rgPS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-18R3GcKE.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./clsx-B-dksMZM.js";import"./index-CtGMuppQ.js";import"./FieldDescription-Ch5HP30p.js";import"./Text-BRHICk1_.js";import"./browser-B4_YLigQ.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./Text-Bex48AEt.js";import"./utils-B6bG5pl_.js";import"./Tooltip-3bjlFUB4.js";import"./OverlayArrow-Bv80aGiZ.js";import"./useFocus-CgajmM1R.js";import"./ProgressBar-TB1EdJrk.js";import"./Label-CUW7vXaw.js";import"./Hidden-1Y6zqjHd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXmDULV_.js";import"./context-Dx2UXtP2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C-iuwE9o.js";import"./useFocusable-x8wHKSzm.js";import"./useFocusRing-DApHxXgU.js";import"./Action-BQuW1ndX.js";import"./useStatic-q7_HxIxT.js";import"./getActionGroupSlot-Cp-CJTrn.js";import"./context-DoFxq3ih.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./TranslationProvider-B0VWVLlF.js";import"./IconCircleCheck-DUTQyL60.js";import"./ContextualHelpTrigger-DvRegCrJ.js";import"./Popover-BskHErZc.js";import"./OverlayContextProvider-BV_cY-H_.js";import"./Dialog-DJkxmbot.js";import"./Button-DakXwMZU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CefnHgfW.js";import"./RSPContexts-_UgIwAnW.js";import"./Collection-DF4Xj_TY.js";import"./CollectionBuilder-CNg30nDc.js";import"./SelectionIndicator-DTYkM1Yz.js";import"./Separator-BaiOIBBy.js";import"./SelectionManager-DYOtVSu9.js";import"./useEvent-BwQwG_n8.js";import"./useCollator-KSJVzoQQ.js";import"./FocusScope-kRkt8xnH.js";import"./VisuallyHidden-C9d_MZuH.js";import"./useOverlayController-DTwtMihR.js";import"./OverlayTrigger-Ctfup0YM.js";import"./IconInfo-CP1DE9vh.js";import"./Heading-BQ_vmWxW.js";import"./Heading-BjnD-4Wn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CRvrWckq.js";import"./FieldError-Kcym6Pi9.js";import"./FieldError-BrC6eHcT.js";import"./useControlledHostValueProps--c5a68bC.js";import"./TextField-DEuIFKut.js";import"./Form-BpuzTWI4.js";import"./Group-Ds4785A_.js";import"./Input-DL2ocd8r.js";import"./useTextField-_A1P15Z-.js";import"./useFormReset-Cc2EXXxK.js";import"./useFormValidation-Dlo1bwd1.js";import"./Label.module-CUYTf9Jc.js";import"./IconX-Bnf6ky8_.js";import"./IconCheck-DJGWCBoR.js";import"./LoadingSpinner-PN97giik.js";import"./ariaLive-CzzNeS0z.js";import"./remote-BreErbqH.js";import"./IconCopy-BTPCgaOM.js";import"./react-children-utilities-By8tK--a.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
