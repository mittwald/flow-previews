import{r as h,j as r}from"./iframe-UtMdsYXa.js";import{L as u}from"./Label-CXp4zhoD.js";import{B as g}from"./Button-pSxy78IN.js";import"./IconChevronDown-DitnVNWB.js";import{I as C}from"./IconDanger-hxBcn6Cd.js";import{C as w}from"./CopyButton-CjyT6lXD.js";import{P as m}from"./PasswordCreationField-DL25oQ4Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CF2d_4jg.js";import"./index-CpvR74kY.js";import"./index-BrcrHHEG.js";import"./useLocalizedStringFormatter-BRizf_XS.js";import"./context-BpPaGDcf.js";import"./Label-GMp5wGdV.js";import"./utils-43m9YPYy.js";import"./Hidden-Bs3uTZuz.js";import"./IconX-DVdUYCtj.js";import"./IconCheck-Bw85iPm6.js";import"./Text-TG940Z8h.js";import"./browser-DFxdAZBn.js";import"./EmulatedBoldText-CWBgkHDb.js";import"./Text-3HTz8ZLb.js";import"./LoadingSpinner-AaC_xRXA.js";import"./ariaLive-K_SPQRtg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-YAokn8An.js";import"./Button-DZZrikYU.js";import"./ProgressBar-BxQgVB3L.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtsciHmS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NZb7prl9.js";import"./useFocus-BaPf3vXr.js";import"./useFocusRing-C5G5IFoS.js";import"./useFocusable-DoTzQtzG.js";import"./IconCopy-DYwF5s_9.js";import"./Tooltip-BNXz1GVg.js";import"./OverlayArrow-DHpPSdaa.js";import"./useControlledState-DYYNjqGW.js";import"./react-children-utilities-COmbV6o0.js";import"./Action-BA-MmHGl.js";import"./useStatic-CvZMYmSw.js";import"./getActionGroupSlot-COea1xII.js";import"./context-BLALRgjO.js";import"./dynamic-JAnuGjI7.js";import"./FieldDescription-CycxOvY5.js";import"./TranslationProvider-CRV2XbXl.js";import"./IconCircleCheck-BLmj5fCP.js";import"./ContextualHelpTrigger-Cf_ZKb7M.js";import"./Popover-ClMUWpbW.js";import"./OverlayContextProvider-WN6o_2cy.js";import"./Dialog-BGnO5-Kp.js";import"./RSPContexts-CAfmMSBB.js";import"./Collection-5zvqan3L.js";import"./CollectionBuilder-D_G3_Vuz.js";import"./SelectionIndicator-D63gvTNu.js";import"./Separator-BuVWMkAV.js";import"./SelectionManager-DB_XnTm4.js";import"./useEvent-CJ7SBUWT.js";import"./useCollator-BSunnwIT.js";import"./FocusScope-ZZQ9tzAD.js";import"./VisuallyHidden-DNcxVgpY.js";import"./useOverlayController-BCXLE78B.js";import"./OverlayTrigger-B8jlE4Hb.js";import"./IconInfo-B6FISfBK.js";import"./Heading-ChnKLzhF.js";import"./Heading-DjWdf4Ql.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CylG0yj1.js";import"./FieldError-BmlJMAuy.js";import"./FieldError-BkBhZCre.js";import"./useControlledHostValueProps-B7T2q5Ai.js";import"./TextField-S28yS2Ng.js";import"./Form-47Gl7tXu.js";import"./Group-DduxZHYS.js";import"./Input-CzvnxGbl.js";import"./useTextField-CdhqVKev.js";import"./useFormReset-ZjFHD53Q.js";import"./useFormValidation-BfzGcjKC.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
