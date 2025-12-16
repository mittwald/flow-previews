import{r as h,j as r}from"./iframe-V6WnBfM7.js";import{L as u}from"./Label-DEwwG9Jt.js";import{B as g}from"./Button-RYsAGsBp.js";import"./IconApp-Dy8CvIso.js";import{I as C}from"./IconDanger-XFGdJtLf.js";import{C as w}from"./CopyButton-71Rh5kxG.js";import{P as m}from"./PasswordCreationField-IpRVesEO.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFUX8R2_.js";import"./index-BKCF-LL0.js";import"./index-WvfsijJu.js";import"./useLocalizedStringFormatter-DNkPXAX_.js";import"./context-LYg4mQF7.js";import"./Label-CXxg3a67.js";import"./utils-XXCohoWw.js";import"./Hidden-CdYZU9wP.js";import"./IconX-DudELXV7.js";import"./IconCheck-C4i47zDQ.js";import"./Text-BOvroeJC.js";import"./browser-DYYNnrYB.js";import"./EmulatedBoldText-C80B2tZx.js";import"./Text-D3RRQUEj.js";import"./LoadingSpinner-B8i510y1.js";import"./ariaLive-IMmTuqYB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BEdoHpvj.js";import"./Button-X5JzQY6M.js";import"./ProgressBar-DGuSqhT6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-EvuRJYDK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8kRQmXV.js";import"./useFocus-CBAz-6m6.js";import"./useFocusRing-ffR2xJu-.js";import"./useFocusable-Cu8jcZF4.js";import"./IconCopy-yqo6yu3X.js";import"./Tooltip-BOAyoGyi.js";import"./OverlayArrow-Cit__A6Y.js";import"./useControlledState-CthGvIJy.js";import"./react-children-utilities-D4MYZq6G.js";import"./Action-B-oQDmqe.js";import"./useStatic-BS6-BQsW.js";import"./getActionGroupSlot-BOc6vLFR.js";import"./context-D5s5gcMw.js";import"./dynamic-DY2czHtX.js";import"./FieldDescription-DbMEQ_lR.js";import"./TranslationProvider-BPtL7JBb.js";import"./IconCircleCheck-DYx5SqZ8.js";import"./ContextualHelpTrigger-dpE3ZOvl.js";import"./Popover-j1dEi1Qt.js";import"./OverlayContextProvider-ClHtugeD.js";import"./Dialog-C89akVID.js";import"./RSPContexts-Bt_iJ6go.js";import"./Collection-z9VX5kUn.js";import"./CollectionBuilder-DFDOtDir.js";import"./SelectionIndicator-D4v-q-K9.js";import"./Separator-BqbnfN10.js";import"./SelectionManager-BQeEKp2X.js";import"./useEvent-DIPTDlyA.js";import"./useCollator-Dg7pOOpD.js";import"./FocusScope-CBJcWxYD.js";import"./VisuallyHidden-Cv44kzCG.js";import"./useOverlayController-Bh-DL5d8.js";import"./OverlayTrigger-Cs6dPJwC.js";import"./IconInfo-B85-CzvO.js";import"./Heading-DJVQUmSI.js";import"./Heading-ozYplv84.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-0Fzy9Tw8.js";import"./FieldError-CMIqd9eM.js";import"./FieldError-D586kEZH.js";import"./useControlledHostValueProps-CymCepBD.js";import"./TextField-DbVUhP9e.js";import"./Form-hCONeUH-.js";import"./Group-Lwbt_jXO.js";import"./Input-CgTEN6Lm.js";import"./useTextField-HlhgWqTU.js";import"./useFormReset-C3fVW2xK.js";import"./useFormValidation-sHnlqGhj.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
