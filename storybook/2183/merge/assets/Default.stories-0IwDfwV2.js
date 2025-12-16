import{r as h,j as r}from"./iframe-jqgUclr4.js";import{L as u}from"./Label-B_zOvN70.js";import{B as g}from"./Button-Df2EGOwf.js";import"./IconApp-B0Y2ZEG7.js";import{I as C}from"./IconDanger-BMQW6rjZ.js";import{C as w}from"./CopyButton-BqgDUN-c.js";import{P as m}from"./PasswordCreationField-6G74IFQq.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DyY94Eac.js";import"./index-BGlwBVxd.js";import"./index-KptOOerd.js";import"./useLocalizedStringFormatter-BczlrwGV.js";import"./context-BwRvgyRH.js";import"./Label-BRPoLfQP.js";import"./utils-5IALZqjS.js";import"./Hidden-DkAwJJ8c.js";import"./IconX-BapyfuEN.js";import"./IconCheck-BSwcfujb.js";import"./Text-B-prTEID.js";import"./browser-EX5vhkWE.js";import"./EmulatedBoldText-B9oQd6gk.js";import"./Text-tTF8cKGK.js";import"./LoadingSpinner-CE8K3mv7.js";import"./ariaLive-DpfDdvhx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-7w2FpeEf.js";import"./Button-BXhO4gzH.js";import"./ProgressBar-BcVh39-H.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cr6qu-mQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYHfZHyQ.js";import"./useFocus-FM6ro1uR.js";import"./useFocusRing-C1ZjOk7y.js";import"./useFocusable-Zu3bG2Sq.js";import"./IconCopy-CvIxnCPE.js";import"./Tooltip-DtIndd4E.js";import"./OverlayArrow-ERqZtQI-.js";import"./useControlledState-Cu6J25_e.js";import"./react-children-utilities-DZpfbknt.js";import"./Action-DzpPHaH9.js";import"./useStatic-Hn0frKun.js";import"./getActionGroupSlot-C1ZLvjFs.js";import"./context-BZOmdfdu.js";import"./dynamic-CApc5zUm.js";import"./FieldDescription-BpCIxkVt.js";import"./TranslationProvider-ByjfP9RK.js";import"./IconCircleCheck-Dl3MgLAm.js";import"./ContextualHelpTrigger-BZva7YNv.js";import"./Popover-DoC5dA8I.js";import"./OverlayContextProvider-Couwo4Zm.js";import"./Dialog-MLUvkWk2.js";import"./RSPContexts-BB1SZI7P.js";import"./Collection-Com2yYnM.js";import"./CollectionBuilder-GNx_dNeS.js";import"./SelectionIndicator-BFlPMkh7.js";import"./Separator-BmEyAoWP.js";import"./SelectionManager-Bd2Xd50m.js";import"./useEvent-DIea5lRE.js";import"./useCollator-B9XYqGj0.js";import"./FocusScope-CJmxo3uG.js";import"./VisuallyHidden-CdTYKgUx.js";import"./useOverlayController-BJtvb9v-.js";import"./OverlayTrigger-DYf82eWt.js";import"./IconInfo-Fmslxo20.js";import"./Heading-BlxvO5L5.js";import"./Heading-BCZhlYP-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-C0Pt2yH0.js";import"./FieldError-C5F3bfgz.js";import"./FieldError-DSvmLOVG.js";import"./useControlledHostValueProps-BbYne8gB.js";import"./TextField-2lpdlEdv.js";import"./Form-BMNY4Kb2.js";import"./Group-N_eJQU5l.js";import"./Input-Dn37EEpO.js";import"./useTextField-BDtQfqtc.js";import"./useFormReset-BuHZrSbJ.js";import"./useFormValidation-BWQF9tl0.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
