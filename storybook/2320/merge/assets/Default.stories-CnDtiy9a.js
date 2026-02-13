import{r as h,j as r}from"./iframe-DYxqCFL4.js";import{P as m}from"./PasswordCreationField-DkpYqNFs.js";import{L as u}from"./Label-DuKZtpj_.js";import{B as g}from"./Button-DGbEpLIN.js";import{m as C}from"./IconWarning-BGRYHRhg.js";import{C as w}from"./CopyButton-Dyl9bhQc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8CcPw_G.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./clsx-B-dksMZM.js";import"./index-DJ6wSCwd.js";import"./ActionBatch-BfjBVLTQ.js";import"./useOverlayController-BZwKG1Aj.js";import"./useStatic-BMoi980u.js";import"./browser-CmbZy-PD.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./FieldDescription-VqAwMf5J.js";import"./Text-BnII0mKt.js";import"./EmulatedBoldText-D6xSemQT.js";import"./Text-B3xsuc84.js";import"./utils-C1fpOvwY.js";import"./Tooltip-DFED3kQe.js";import"./OverlayArrow-R2NHUYtB.js";import"./useFocus-C6GqelOx.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-mobDYg92.js";import"./context-CfMfa2C9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Byzp35A7.js";import"./useControlledState-Co5SihOL.js";import"./useFocusable-8bvqGkWP.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./ContextualHelpTrigger-CDJkcvvy.js";import"./Popover-DlFp-eS3.js";import"./OverlayContextProvider-tFRc17qj.js";import"./Dialog-CiGSJFZ7.js";import"./Button-BPYpcxnx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DMR80VPZ.js";import"./RSPContexts-DXUT3Wo8.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./SelectionIndicator-D_wBgdeg.js";import"./Separator-3N5Q9dE4.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./FocusScope-BC21MQ9n.js";import"./VisuallyHidden-CZrO0U0i.js";import"./OverlayTrigger-B4TdY9D0.js";import"./Heading-HOIK8yqY.js";import"./Heading-DbYjHDJK.js";import"./useFieldComponent-DjSvrfgm.js";import"./FieldError-sWm_iZNp.js";import"./FieldError-B9AV5Ok7.js";import"./AlertText-D5ZV5CrS.js";import"./AlertIcon-B9fJ359s.js";import"./useControlledHostValueProps-D7TiKCSb.js";import"./TextField-Do-EZwdB.js";import"./Form-C4EYd143.js";import"./Group-BZLlrAEU.js";import"./Input-DB_F_n6I.js";import"./useTextField-BwDQcndi.js";import"./useFormReset-VwcIZGsw.js";import"./useFormValidation-FkHTzTfc.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./remote-WwxW7fyl.js";import"./react-children-utilities-BS9JfYXY.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
