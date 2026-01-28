import{r as h,j as r}from"./iframe-BbsOAs33.js";import{P as m}from"./PasswordCreationField-CsH04a48.js";import{L as u}from"./Label-DjvR0JzL.js";import{B as g}from"./Button-CAGXh9YY.js";import{m as C}from"./IconWarning-BG17vbyg.js";import{C as w}from"./CopyButton-e92laucG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CoVYgUcD.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./clsx-B-dksMZM.js";import"./index-32jMpZgo.js";import"./Action-BXhMVvh_.js";import"./context-_vxrJXzy.js";import"./useStatic-PZIJlmDl.js";import"./browser-6_CJeJSO.js";import"./getActionGroupSlot-DqvhX6L8.js";import"./FieldDescription-CI9EcbbK.js";import"./Text-BYxWYBBY.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";import"./utils-d4vW56Wr.js";import"./Tooltip-B55B9T_Y.js";import"./OverlayArrow-N6t0bVoH.js";import"./useFocus-8sJeBC00.js";import"./ProgressBar-GthXoJbW.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./context-DDHwgpv7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B8FmEpoX.js";import"./useControlledState-QxMMjnNS.js";import"./useFocusable-CRykt1O9.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./ContextualHelpTrigger-BV_PFwcb.js";import"./Popover-BeKDLuBK.js";import"./useOverlayController-DeIZdXjQ.js";import"./OverlayContextProvider-Byu7izWK.js";import"./Dialog-Ch_CeJ5E.js";import"./Button-tZHGwxXU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CuEkD-Mt.js";import"./RSPContexts-DfamIfkg.js";import"./Collection-Bp73NzW5.js";import"./CollectionBuilder-BFwWw2AW.js";import"./SelectionIndicator-Da0zjLKe.js";import"./Separator-Qwz2H95Y.js";import"./SelectionManager-BdWPcNcZ.js";import"./useEvent-kpAjV35P.js";import"./useCollator-Ac8UQMZt.js";import"./FocusScope-tc_BWGmQ.js";import"./VisuallyHidden-D-GMXsu-.js";import"./OverlayTrigger-C8Sbeft1.js";import"./Heading-BC6iu52J.js";import"./Heading-Delp_XvT.js";import"./useFieldComponent-c0I5eEtM.js";import"./FieldError-DSzt6ekN.js";import"./FieldError-3tWBh0vH.js";import"./AlertText-xz7LDcmS.js";import"./AlertIcon-B34gK9Vj.js";import"./useControlledHostValueProps-DsfhA03o.js";import"./TextField-DS2qFl1_.js";import"./Form-BubIOB2-.js";import"./Group-PAKgl2U5.js";import"./Input-47UPOEwv.js";import"./useTextField-DCPrMHRH.js";import"./useFormReset-eAh5gylf.js";import"./useFormValidation-DyJaMlWv.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CNcanuZc.js";import"./remote-DIEpRnMd.js";import"./react-children-utilities-D6ScvZHr.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
