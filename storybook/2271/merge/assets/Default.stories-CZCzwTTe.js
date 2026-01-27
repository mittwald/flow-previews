import{r as h,j as r}from"./iframe-BEQP9uXD.js";import{P as m}from"./PasswordCreationField-BopA77o6.js";import{L as u}from"./Label-ULyyAOQY.js";import{B as g}from"./Button-C9UvHdV0.js";import{m as C}from"./IconWarning-BArZWwdB.js";import{C as w}from"./CopyButton-C0tzq3PW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BAr_-wMD.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./clsx-B-dksMZM.js";import"./index-COHhcPte.js";import"./Action-DdIVuJ0B.js";import"./context-DGvxxzOj.js";import"./useStatic-DVE9BYeG.js";import"./browser-D8S-En3T.js";import"./getActionGroupSlot-B63naLE5.js";import"./FieldDescription-rVRfuQA7.js";import"./Text-BQmA_ZwI.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./Text-Dh3KhDzI.js";import"./utils-CvsvUfaH.js";import"./Tooltip-MhQ92_Fv.js";import"./OverlayArrow-B0-Exi0z.js";import"./useFocus-DENBDZ81.js";import"./ProgressBar-CsmWPwQb.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BaFA04Xw.js";import"./context-DjvYmnOm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-IAFCDfDW.js";import"./useFocusable-WQftMZYd.js";import"./useFocusRing-QizZnVOy.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./ContextualHelpTrigger-CvgyxUEl.js";import"./Popover-D69etV5Q.js";import"./useOverlayController-DPkum4Dd.js";import"./OverlayContextProvider-DPAGiuqq.js";import"./Dialog-DQ54l-rN.js";import"./Button-BLAt4FO4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BjEuYOvC.js";import"./RSPContexts-22nxuYm5.js";import"./Collection-DrDb7tKr.js";import"./CollectionBuilder-DgIT4THq.js";import"./SelectionIndicator-Baqg4pYL.js";import"./Separator-CwdQYf1y.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./useCollator-Dxy4kckI.js";import"./FocusScope-D5mGJCBF.js";import"./VisuallyHidden-BLDMQ79k.js";import"./OverlayTrigger-DCrQupdb.js";import"./Heading-Cy1GdqFq.js";import"./Heading-KUn82X_l.js";import"./useFieldComponent-BKGW_bMF.js";import"./FieldError-DcwQV8mK.js";import"./FieldError-WngkcyXU.js";import"./AlertText-J3TBTDdf.js";import"./AlertIcon-aU-KTTvT.js";import"./useControlledHostValueProps-CCaFJO-n.js";import"./TextField-CNCmb0GP.js";import"./Form-BbvSEhBq.js";import"./Group-CxkWfpob.js";import"./Input-Cnu3k7gd.js";import"./useTextField-DjOri4ui.js";import"./useFormReset-QF_OYRwm.js";import"./useFormValidation-Kra5hQIO.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./remote-Ba3iobwA.js";import"./react-children-utilities-BVe_Bs8q.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
