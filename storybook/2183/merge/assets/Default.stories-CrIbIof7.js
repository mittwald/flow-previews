import{r as h,j as r}from"./iframe-Be6XOKZ5.js";import{L as u}from"./Label-BV6L8qwz.js";import{B as g}from"./Button-BryZpx7e.js";import"./IconApp-BnAy9RaD.js";import{I as C}from"./IconDanger-CuHxVEgS.js";import{C as w}from"./CopyButton-9WOWEtSk.js";import{P as m}from"./PasswordCreationField-CVLIlN3t.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-6mfYofmL.js";import"./index-BVQeIHXT.js";import"./index-Dwi0F_ix.js";import"./useLocalizedStringFormatter-D98CS6hT.js";import"./context-Y40TL0Hk.js";import"./Label-Da4d84kD.js";import"./utils-DTrZMB6V.js";import"./Hidden-B9nXAMyK.js";import"./IconX-IgnkgWW1.js";import"./IconCheck-BAgPnW-l.js";import"./Text-BB90vNXB.js";import"./browser-DsJM6Avf.js";import"./EmulatedBoldText-BA4PJkye.js";import"./Text-BTmMxR_a.js";import"./LoadingSpinner-CCyY2N1z.js";import"./ariaLive-BV9_iZAk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-D-Pq4nVM.js";import"./Button-CnLdg8UY.js";import"./ProgressBar-rm9lHQqR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMWHK1ZY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CK7mbUzy.js";import"./useFocus-DYvnwNR4.js";import"./useFocusRing-B31Et6wQ.js";import"./useFocusable-DlKb8H3E.js";import"./IconCopy-BuQiGqI-.js";import"./Tooltip-Bgn3JwWl.js";import"./OverlayArrow-C8LdGvT4.js";import"./useControlledState-D8v_kqVI.js";import"./react-children-utilities-WZv6Io69.js";import"./Action-DlMDZkrW.js";import"./useStatic-ChLd1gy1.js";import"./getActionGroupSlot-C22isMYd.js";import"./context-DNuic7EB.js";import"./dynamic-CbSjc9zn.js";import"./FieldDescription-C8t-LyGN.js";import"./TranslationProvider-UOZUSG_d.js";import"./IconCircleCheck-DAuQ3uMG.js";import"./ContextualHelpTrigger-DWj9tXjH.js";import"./Popover-CzhaJn3i.js";import"./OverlayContextProvider-DeIggxcx.js";import"./Dialog-D_uiNSw9.js";import"./RSPContexts-ukpjCqjI.js";import"./Collection-9Rz1Z382.js";import"./CollectionBuilder-TiwdMYff.js";import"./SelectionIndicator-CQaSWhBM.js";import"./Separator-B8NszCgW.js";import"./SelectionManager-BUAbzA69.js";import"./useEvent-B2MQOoAh.js";import"./useCollator-daqLYSV2.js";import"./FocusScope-BGhm_0o7.js";import"./VisuallyHidden-G45Y0eAf.js";import"./useOverlayController-DNoNJZ9S.js";import"./OverlayTrigger-CNEAyaNT.js";import"./IconInfo-MQJ-9pLD.js";import"./Heading-D4PNoCsz.js";import"./Heading-BaEEqHWo.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DyzWtSt-.js";import"./FieldError-nKJnRYyC.js";import"./FieldError-eVRm8xCS.js";import"./useControlledHostValueProps-BEPk0AyJ.js";import"./TextField-CBVRktTd.js";import"./Form-C9wSRzl5.js";import"./Group-CkZTiy9Q.js";import"./Input-B17NRXjc.js";import"./useTextField-Bgn9lXdm.js";import"./useFormReset-Bo-wy8NL.js";import"./useFormValidation-DMz_tWT4.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
