import{r as h,j as r}from"./iframe-Pk_Kk4JL.js";import{P as m}from"./PasswordCreationField-ruAvEeNT.js";import{L as u}from"./Label-pFLu8ztF.js";import{B as g}from"./Button-D9QX6l1e.js";import{m as C}from"./IconWarning-BZbEOivs.js";import{C as w}from"./CopyButton-DS8D74q_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-I4mA0X6x.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./clsx-B-dksMZM.js";import"./index-BO3AnCjb.js";import"./Action-C8SSnKxx.js";import"./context-DgSiNkYd.js";import"./useStatic-i-ZCX3ob.js";import"./browser-DxGxcnNA.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./FieldDescription-BvDLT_Hd.js";import"./Text-yAUoHBmv.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./Text-cuBcImQE.js";import"./utils-CLxMEgR2.js";import"./Tooltip-rqrIKaj0.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./useFocus-CG8bKOp6.js";import"./ProgressBar-R9Q052Y1.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C5txBCfY.js";import"./context-CrHSUJ76.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-48Ld73MP.js";import"./useFocusable-6mL9jMN5.js";import"./useFocusRing-Cf40KqTj.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./ContextualHelpTrigger-B-J2Vgpr.js";import"./Popover-CNf49oKt.js";import"./useOverlayController-C-ffow-t.js";import"./OverlayContextProvider-FOEyue6v.js";import"./Dialog-hqEaC_v2.js";import"./Button-CmNC7e_S.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BhJiygMU.js";import"./RSPContexts-DW-Mep96.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./OverlayTrigger-C6V65Cj9.js";import"./Heading-wNCcNm7o.js";import"./Heading-CHcXaZb2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-T3_INYSJ.js";import"./FieldError-2o2dfDUN.js";import"./FieldError-Cm-TOrp1.js";import"./AlertText-B5n-OsOE.js";import"./AlertIcon-BQAdHRLg.js";import"./useControlledHostValueProps-Df86iKH2.js";import"./TextField-DdW_yhS8.js";import"./Form-kujN0LYD.js";import"./Group-vGwN-WPg.js";import"./Input-DA7G6uHH.js";import"./useTextField-B9WpeGti.js";import"./useFormReset-bAhSNWNb.js";import"./useFormValidation-BDoYoAKM.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DPjJtv8A.js";import"./remote-jZTk_Znj.js";import"./react-children-utilities-BUDAS9Qh.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
