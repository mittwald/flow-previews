import{r as h,j as r}from"./iframe-m11uA8ph.js";import{L as u}from"./Label-C80bgPDj.js";import{B as g}from"./Button-Dypt8iw9.js";import"./IconApp-DUFlag-8.js";import{I as C}from"./IconDanger-BFD4weFl.js";import{C as w}from"./CopyButton-CWoULOzq.js";import{P as m}from"./PasswordCreationField-BTPWs8yF.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./context-CT-J1WHN.js";import"./Label-BUyu-zI1.js";import"./utils-B2Atf1IZ.js";import"./Hidden-BdAfB0qw.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./Text-C8eG2T-4.js";import"./browser-BsJUI2_B.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-D5wxRFjH.js";import"./Button-Hg1-qkLa.js";import"./ProgressBar-C1zZy1Lx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0Bh9t0W.js";import"./useFocus-DtmXh1uW.js";import"./useFocusRing-faXrGzgs.js";import"./useFocusable-BsiT1idP.js";import"./IconCopy-P-jWjBT-.js";import"./Tooltip-CMijZotm.js";import"./OverlayArrow-DhFl9stJ.js";import"./useControlledState-CQIt1v1r.js";import"./react-children-utilities-DtYi8XG6.js";import"./Action-DQyOyJ_Y.js";import"./useStatic-BIf93y4q.js";import"./getActionGroupSlot-C8INwjTD.js";import"./context-BDVCp3x_.js";import"./dynamic-x9dWH5I2.js";import"./FieldDescription-CZNBqhnU.js";import"./TranslationProvider-wIhqSVHd.js";import"./IconCircleCheck-DtVkr2LX.js";import"./ContextualHelpTrigger-Dt7v5TkY.js";import"./Popover-DAWJqysh.js";import"./OverlayContextProvider-CUWJ5C28.js";import"./Dialog-Dzvm1uhq.js";import"./RSPContexts-CBB4rOO8.js";import"./Collection-DuF4MxNY.js";import"./CollectionBuilder-SD0NxqFv.js";import"./SelectionIndicator-DxPJbj4p.js";import"./Separator-IY7J1-ik.js";import"./SelectionManager-mPOWfQXK.js";import"./useEvent-DarMwBx2.js";import"./useCollator-DrH01YYh.js";import"./FocusScope-DjZtu4PZ.js";import"./VisuallyHidden-BQh9j932.js";import"./useOverlayController-ChyiSk8n.js";import"./OverlayTrigger-DKPQhf9L.js";import"./IconInfo-B54pVzu5.js";import"./Heading-B1gnURmx.js";import"./Heading-C-dZ-n10.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BhKi7qXb.js";import"./FieldError-DSWXJfK8.js";import"./FieldError-BiQycVeh.js";import"./useControlledHostValueProps-BPdzbdZO.js";import"./TextField-DWxwO3V5.js";import"./Form-CFmmdLEh.js";import"./Group-CiFhizhu.js";import"./Input-ChfHUhhf.js";import"./useTextField-BUjD2wuQ.js";import"./useFormReset-CdvwVVbr.js";import"./useFormValidation-dI-EyrI5.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
