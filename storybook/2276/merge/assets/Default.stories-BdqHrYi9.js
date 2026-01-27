import{r as h,j as r}from"./iframe-BbrP11p-.js";import{P as m}from"./PasswordCreationField-DnkPsxva.js";import{L as u}from"./Label-DwqHoWx5.js";import{B as g}from"./Button-D_6ZCoU5.js";import{m as C}from"./IconWarning-BeRGE0lU.js";import{C as w}from"./CopyButton-C0qY4aMI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CazQQjW9.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./clsx-B-dksMZM.js";import"./index-CvmJvI2t.js";import"./Action-DGTK2X9F.js";import"./context-DfqDLyvd.js";import"./useStatic-DG6eeeN5.js";import"./browser-CKsvW9Gw.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./FieldDescription-BZIDgIPl.js";import"./Text-BLzGfhm5.js";import"./EmulatedBoldText-j9VeSllR.js";import"./Text-BmgQOLJ4.js";import"./utils-CfXF9mMB.js";import"./Tooltip-B1VuETNE.js";import"./OverlayArrow-C2TLtRQj.js";import"./useFocus-DdYA68cd.js";import"./ProgressBar-DY9U0Kry.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ChwTXcaC.js";import"./context-Cg0av1qu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D-e5pHmS.js";import"./useControlledState-CrzzGVbO.js";import"./useFocusable-ssdBLHPa.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./ContextualHelpTrigger-dF5mpJBM.js";import"./Popover-CH9SEcQK.js";import"./useOverlayController-BZ__G9XQ.js";import"./OverlayContextProvider-CX8G0M5v.js";import"./Dialog-BH0tiGTi.js";import"./Button-DQobJtX3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VHqnVNy0.js";import"./RSPContexts-D7TvdvVL.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./VisuallyHidden-BCVFUf4T.js";import"./OverlayTrigger-BZQRt9cD.js";import"./Heading-DRj7axTi.js";import"./Heading-qDkwaMZ2.js";import"./useFieldComponent-CnZp8uAU.js";import"./FieldError-i_FUROXt.js";import"./FieldError-C0mMT85u.js";import"./AlertText-7tARt4Et.js";import"./AlertIcon-B3ByzjK4.js";import"./useControlledHostValueProps-BXJu_wEe.js";import"./TextField-DD3L2ijb.js";import"./Form-Da-PMQ7G.js";import"./Group-CeCxvCTb.js";import"./Input-CrFs98bJ.js";import"./useTextField-Bxx5stu4.js";import"./useFormReset-VtyCL_TW.js";import"./useFormValidation-dfDtwXtG.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CoKKKOJW.js";import"./remote-BUE50-N_.js";import"./react-children-utilities-BE4AmibS.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
