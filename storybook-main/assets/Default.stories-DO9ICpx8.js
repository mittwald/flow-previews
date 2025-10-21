import{r as h,j as r}from"./iframe-BJcrhiyS.js";import{P as m}from"./PasswordCreationField-B9VD4RKy.js";import{L as u}from"./Label-DlBkeFJ8.js";import{B as g}from"./Button-DDexK_tB.js";import{l as C}from"./IconWarning-DHKN92dZ.js";import{C as w}from"./CopyButton-CvF-gRTt.js";import"./index-nuYtCEEu.js";import"./dynamic-D98kNBqL.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./clsx-B-dksMZM.js";import"./index-Clh-7_IP.js";import"./useFieldComponent-BTSjCSDH.js";import"./utils-MMz0RNDK.js";import"./Text-BpL6_bME.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-DZ5iFmYj.js";import"./ClearPropsContext-Bddw_Fzg.js";import"./Group-q2LAtsMk.js";import"./useFocusRing-Cs9uIsYW.js";import"./useFocus-B02RLksg.js";import"./Input-BVWAA476.js";import"./Hidden-BPKHXv4N.js";import"./TextField-XJ38yjmm.js";import"./RSPContexts-C2e5xu0T.js";import"./Form--RrJpAdD.js";import"./useLabel-_fpNspWn.js";import"./Label-BomZPPry.js";import"./useTextField-CFlBnLNm.js";import"./useFormReset-B4UK9p8r.js";import"./useControlledState-CmFRf9bT.js";import"./useFocusable-o2EAaEwJ.js";import"./useFormValidation-ofRqxeQo.js";import"./Action-Cl9B75AE.js";import"./context-OYcKy-iK.js";import"./useStatic-DD6IIAig.js";import"./browser-CleZYiuo.js";import"./getActionGroupSlot-i3rgbr5j.js";import"./FieldDescription-BPGABGxO.js";import"./Text-CzGb6jtw.js";import"./EmulatedBoldText-BXLeVkdu.js";import"./Tooltip-BTWW-9bb.js";import"./ClearPropsContextView-Bpe56eb-.js";import"./OverlayArrow-DSSzOs3h.js";import"./ProgressBar-BnMTPpQD.js";import"./context-C9wRNNkX.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./ReactAriaControlledValueFix-DNuVWwQA.js";import"./ContextualHelpTrigger-B1qVlkg1.js";import"./Popover-BdgkNI5W.js";import"./useOverlayController-Dw6LvLP7.js";import"./OverlayContextProvider-DM6mTtug.js";import"./Dialog-BQ_EXD94.js";import"./Button-DLFIfSVU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D-MZIwgU.js";import"./Collection-_lGiyPCh.js";import"./CollectionBuilder-B7Z337h2.js";import"./SelectionIndicator-lJ8kUAUa.js";import"./Separator-B85zM0Ob.js";import"./SelectionManager-CQyc1rjw.js";import"./useEvent-hhr9af5x.js";import"./useCollator-DUTRWdjd.js";import"./FocusScope-DZerhXt6.js";import"./VisuallyHidden-DT9WK7BB.js";import"./OverlayTrigger-D4TYFed6.js";import"./ControlledNotification-BDMyAvnK.js";import"./Heading-CUXx9jgP.js";import"./Heading-DJUV0n03.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-D5cUnfZ2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DIhYtINq.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
