import{r as h,j as r}from"./iframe-fd4MG1i8.js";import{P as m}from"./PasswordCreationField-CqIZYLwx.js";import{L as u}from"./Label-DcZaDq0J.js";import{B as g}from"./Button-VeSKQaWX.js";import{z as C}from"./IconWarning-9sqw3U7E.js";import{C as w}from"./CopyButton-DD0lgvAL.js";import"./index-nuYtCEEu.js";import"./dynamic-BVBQ4rgw.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./clsx-B-dksMZM.js";import"./index-DLSCOdFN.js";import"./useFieldComponent-CTpQ-XZg.js";import"./utils-Cwcb_ph1.js";import"./Text-Ct_tO_6D.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";import"./Group-DKzOXU5W.js";import"./useFocusRing-LifWKPgp.js";import"./useFocus-BWTUKGe5.js";import"./Input-CYK177a4.js";import"./Hidden-DL9_D-g9.js";import"./TextField-TKhuaeCg.js";import"./RSPContexts-GsdtxIJ1.js";import"./Form-DF5wN6HS.js";import"./useLabel-DjhpIeNr.js";import"./Label-Cas_0aCA.js";import"./useTextField-oiKwCWrD.js";import"./useFormReset-NfLpwngh.js";import"./useControlledState-oGGPnlEt.js";import"./useFocusable-9_bYGa78.js";import"./useFormValidation-C8R7XiMh.js";import"./Action-b6bvpWZ7.js";import"./context-BDEE0OGh.js";import"./useStatic-Dbv9nI-W.js";import"./browser-Dh_0Zrut.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./FieldDescription-BNSJSS3y.js";import"./Text-Dcd0JdvI.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Tooltip-CFFFMg3y.js";import"./ClearPropsContextView-DL6K5xjX.js";import"./OverlayArrow-CL_DkMYI.js";import"./ProgressBar-ClXxD8qd.js";import"./context-Dbob8nST.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./ReactAriaControlledValueFix-DAVtvYQ3.js";import"./ContextualHelpTrigger-DhV-3kE7.js";import"./Popover-8ITLePTm.js";import"./OverlayContextProvider-DW6y0HIP.js";import"./Dialog-CY6RGe7i.js";import"./Button-kSnC9Ww4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-P37V2JO8.js";import"./Collection-Di6dMgr3.js";import"./CollectionBuilder-BBm98ofW.js";import"./SelectionIndicator-CThd_G6x.js";import"./Separator-BBkfumaa.js";import"./SelectionManager--Q9mVMbg.js";import"./useEvent-5AoaQB1j.js";import"./useCollator-DNAEXkDs.js";import"./FocusScope-29AKamG2.js";import"./VisuallyHidden-CO0qVHJy.js";import"./OverlayTrigger-DGIX4Xyz.js";import"./ControlledNotification-C0H0ICA9.js";import"./Heading-FU4sLZaF.js";import"./Heading--2_wnKY5.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DC34vg_T.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BL8icCZR.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
