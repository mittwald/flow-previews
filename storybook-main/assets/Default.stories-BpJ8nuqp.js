import{r as h,j as r}from"./iframe-DzjGvN4s.js";import{P as m}from"./PasswordCreationField-B_nrvAzW.js";import{L as u}from"./Label-B3AoafTb.js";import{B as g}from"./Button-BJ_Dg9g5.js";import{m as C}from"./IconWarning-s7NSVc-U.js";import{C as w}from"./CopyButton-xh9xaTaS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8j0vgwF.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./clsx-B-dksMZM.js";import"./index-CvRHkpxf.js";import"./Action-y81vuNMi.js";import"./context-_PoIYhJG.js";import"./useStatic-CvNWVJY5.js";import"./browser-DnRnaS9W.js";import"./getActionGroupSlot-BxJKXkIY.js";import"./FieldDescription-Bk9-3UzX.js";import"./Text--QhKw61r.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./Text-CsTzsUsp.js";import"./utils-CaY6-C_T.js";import"./Tooltip-IWqKa58f.js";import"./OverlayArrow-k_B_Hrky.js";import"./useFocus-DFbK7vZ5.js";import"./ProgressBar-BHFfTD-E.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-7qQt_FP7.js";import"./context-kL1uqGsw.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-wMvVuuCP.js";import"./useControlledState-DSekeTPZ.js";import"./useFocusable-CvI9gOnC.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./ContextualHelpTrigger-8U9VJqOx.js";import"./Popover-nOmKsxoq.js";import"./useOverlayController-DZrr6Qr9.js";import"./OverlayContextProvider-kVoSIEPW.js";import"./Dialog-BxRkHkZu.js";import"./Button-BzmY1str.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D3so-j8A.js";import"./RSPContexts-D4WEG-B8.js";import"./Collection-BYckC4CV.js";import"./CollectionBuilder-60Hh4eJv.js";import"./SelectionIndicator-BO4ZIlru.js";import"./Separator-w2v2LtVY.js";import"./SelectionManager-DC2ExAk3.js";import"./useEvent-DrzTQfG9.js";import"./useCollator-BxOUjI0N.js";import"./FocusScope-D_QyZTFZ.js";import"./VisuallyHidden-SzhNhvGP.js";import"./OverlayTrigger-tWzhZuXD.js";import"./Heading-J6woGLR_.js";import"./Heading-DMPfqJKh.js";import"./useFieldComponent-BsZ1NoTf.js";import"./FieldError-wOx9kOaR.js";import"./FieldError-Cm2eS0Qx.js";import"./AlertText-cLdL_XpT.js";import"./AlertIcon-C0w0dGgz.js";import"./useControlledHostValueProps-B88rGyy5.js";import"./TextField-CxS1QcE8.js";import"./Form-C7-6k5t9.js";import"./Group-BEToeHeW.js";import"./Input-BbhuOsE_.js";import"./useTextField-Cth1_8nw.js";import"./useFormReset-lQZuuaDU.js";import"./useFormValidation-CCaCqHBd.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./remote-cWDQ0h3n.js";import"./react-children-utilities-CFqG3uxz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
