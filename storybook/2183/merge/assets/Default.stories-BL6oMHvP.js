import{r as h,j as r}from"./iframe-ChZoSAk9.js";import{L as u}from"./Label-BtQBKk3e.js";import{B as g}from"./Button-igkSssls.js";import"./IconApp-jg62nbZM.js";import{I as C}from"./IconDanger-bNuP_yaN.js";import{C as w}from"./CopyButton-CIXCPDZl.js";import{P as m}from"./PasswordCreationField-BhSXC0RC.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./Label-8-s2XGsR.js";import"./utils-3orXHcy8.js";import"./Hidden-BToicrtl.js";import"./IconX-DwN0CpwU.js";import"./IconCheck-Cb9yObnt.js";import"./Text-DeId_uwd.js";import"./browser-B8p5n3S3.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";import"./LoadingSpinner-hNvoN1cU.js";import"./ariaLive-BdEv9LdA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CMT6q-r_.js";import"./Button-BAWw_35t.js";import"./ProgressBar-Bd4jHgjB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwTIrFfL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEbKEOpz.js";import"./useFocus-BEqWk0b2.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocusable-BQrvJ6Oj.js";import"./IconCopy-CKw3JZ5D.js";import"./Tooltip-AmZe9SEA.js";import"./OverlayArrow-BwEdTwQI.js";import"./useControlledState-CXwLHBKW.js";import"./react-children-utilities-BlOWk7Cd.js";import"./Action-CVNqq51W.js";import"./useStatic-YkfQLHoK.js";import"./getActionGroupSlot-D9Q9Xlmq.js";import"./context-DK_eOJFA.js";import"./dynamic-D_MCnPMN.js";import"./FieldDescription-C8pMBaks.js";import"./TranslationProvider-CKNgrhg6.js";import"./IconCircleCheck-DyvU8reI.js";import"./ContextualHelpTrigger-BN-mU_uj.js";import"./Popover-DbbRxBDt.js";import"./OverlayContextProvider-CAospS2T.js";import"./Dialog-B1ggtFGC.js";import"./RSPContexts-BuIIeKa7.js";import"./Collection-CxsVz65g.js";import"./CollectionBuilder-Dc1RsPXG.js";import"./SelectionIndicator-BZmDBgq9.js";import"./Separator-h8DcfgTk.js";import"./SelectionManager-B2umJv1d.js";import"./useEvent-D5qx-uIw.js";import"./useCollator-DVwfKBY9.js";import"./FocusScope-DTg-yLmD.js";import"./VisuallyHidden-TRsVH-0B.js";import"./useOverlayController-Dp1HHV7H.js";import"./OverlayTrigger-Do-fZ53q.js";import"./IconInfo-DHgWbHqo.js";import"./Heading-BFoi8RIL.js";import"./Heading-zVGhBSeg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CTbZHLtq.js";import"./FieldError-D0FcbU4f.js";import"./FieldError-krJUZi9_.js";import"./useControlledHostValueProps-COJ6lWMZ.js";import"./TextField-B5JGrl3J.js";import"./Form-DiR4hcFZ.js";import"./Group-BO5rtvFF.js";import"./Input-C1UIQQj8.js";import"./useTextField-BJpggVQl.js";import"./useFormReset-DlW87ulD.js";import"./useFormValidation-DrPCugNK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
