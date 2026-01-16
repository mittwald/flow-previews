import{r as h,j as r}from"./iframe-DZ4teeW0.js";import{P as m}from"./PasswordCreationField-BSEOeawF.js";import{L as u}from"./Label-DoWn6F4v.js";import{B as g}from"./Button-DKoFnNBZ.js";import{m as C}from"./IconWarning-BMXzPSbA.js";import{C as w}from"./CopyButton-DN_HW3zP.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DLpaDBxN.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./clsx-B-dksMZM.js";import"./index-hJtfnrYv.js";import"./Action-IUgUGwCY.js";import"./context-CSe622gL.js";import"./useStatic-C2g0a5Fu.js";import"./browser-BOIGtlkn.js";import"./getActionGroupSlot-H_zTh0GS.js";import"./FieldDescription-wBHtE-uB.js";import"./Text-C4YBtGrU.js";import"./EmulatedBoldText-D386c9ln.js";import"./Text-BkVlga5W.js";import"./utils-CmR_RyV0.js";import"./Tooltip-BF9uKYtJ.js";import"./OverlayArrow-DMnQ82Lw.js";import"./useFocus-DPzONbd_.js";import"./ProgressBar-qebYfenN.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CN_YQU3T.js";import"./context-CZC3VL3b.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CE05dG3o.js";import"./useFocusable-V-w09cqm.js";import"./useFocusRing-Bi_KX66p.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./ContextualHelpTrigger-ymVarl2_.js";import"./Popover-O3EK8S3M.js";import"./useOverlayController-CclcYwrc.js";import"./OverlayContextProvider-Bp1oUVk4.js";import"./Dialog-mp_BsC5B.js";import"./Button-BNevv18m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DM-2A3ZD.js";import"./RSPContexts-BvqxEhTE.js";import"./Collection-w_out5sE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./SelectionIndicator-C2FrsSd1.js";import"./Separator-Dh-vjBlE.js";import"./SelectionManager-W-Kl84XM.js";import"./useEvent-Rvr_SgMv.js";import"./useCollator-DxlaTcxe.js";import"./FocusScope-BJdWB0PZ.js";import"./VisuallyHidden-DG5gzPUr.js";import"./OverlayTrigger-DrQSWpcn.js";import"./Heading-DmKF-kzC.js";import"./Heading-OLDiOTzf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-D07Wu5hH.js";import"./FieldError-AZ-rkViQ.js";import"./FieldError-DkoCPEDN.js";import"./AlertText-Dur7DX9B.js";import"./AlertIcon-Dng1V2P2.js";import"./useControlledHostValueProps-uUZrCOOz.js";import"./TextField-DVn_L58j.js";import"./Form-DzpbW5Q4.js";import"./Group-CcFwVgnp.js";import"./Input-D0qY3wir.js";import"./useTextField-BGWNueLQ.js";import"./useFormReset-CHb94_Ie.js";import"./useFormValidation-DQHMrpfA.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DJRFuNH9.js";import"./remote-C7mA51oY.js";import"./react-children-utilities-BZnXtb18.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
