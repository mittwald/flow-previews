import{r as h,j as r}from"./iframe-CQakcPxy.js";import{L as u}from"./Label-Bciz4GF2.js";import{B as g}from"./Button-BgdUtfaQ.js";import"./IconChevronDown-DRX1rHio.js";import{I as C}from"./IconDanger-BPWM_X_l.js";import{C as w}from"./CopyButton-9T3dRf3B.js";import{P as m}from"./PasswordCreationField-upbXBZ7N.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./index-Cea8xGLH.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./context-CTwP8X6y.js";import"./Label-CTPlNXVy.js";import"./utils-kpK_hrRV.js";import"./Hidden-BPFiveoH.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./Text-BtxvTgzr.js";import"./browser-n5THB09p.js";import"./EmulatedBoldText-BugEiGRa.js";import"./Text-C-10tsQv.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DEFV7i-V.js";import"./Button-CodSfk9S.js";import"./ProgressBar-Dp4X-EbZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";import"./IconCopy-BH_Dimaq.js";import"./Tooltip-bMT8uXEw.js";import"./OverlayArrow-C79QRDx0.js";import"./useControlledState-BdjUlaE2.js";import"./react-children-utilities-BNzhhK55.js";import"./Action-DugCc7r9.js";import"./useStatic-BotBIdFp.js";import"./getActionGroupSlot-roYHWcsR.js";import"./context-BwdTo_HZ.js";import"./dynamic-smSIHOJr.js";import"./FieldDescription-DGqoCi4X.js";import"./TranslationProvider-Dktg2C_Q.js";import"./IconCircleCheck-D-3tUwVE.js";import"./ContextualHelpTrigger-CnTt6gpW.js";import"./Popover-BybQ1H5j.js";import"./OverlayContextProvider-CGlhX4oZ.js";import"./Dialog-B0kzP3Mz.js";import"./RSPContexts-BrDe4Bm2.js";import"./Collection-Ci9d0blp.js";import"./CollectionBuilder-BUmJa08T.js";import"./SelectionIndicator-vLsFNsIa.js";import"./Separator-D8Y3LrcI.js";import"./SelectionManager-1KeHygA_.js";import"./useEvent-Des4UomZ.js";import"./useCollator-INJOKvYJ.js";import"./FocusScope-Bt02kxJY.js";import"./VisuallyHidden-B_I1UO8l.js";import"./useOverlayController-DnqhdB7Q.js";import"./OverlayTrigger-ewIDRAFx.js";import"./IconInfo-BWnzaeUk.js";import"./Heading-Dcbcxbjg.js";import"./Heading-BFz_o3go.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-7TLC4lNV.js";import"./FieldError-8S-oU2Os.js";import"./FieldError-CB5plbtQ.js";import"./useControlledHostValueProps-BZjTuBfL.js";import"./TextField-069ZYtiG.js";import"./Form-Cw0lrebL.js";import"./Group-EK03D1ng.js";import"./Input-BcEHoXQP.js";import"./useTextField-ChzRdWGu.js";import"./useFormReset-DCX2Qfen.js";import"./useFormValidation-8JnUx94A.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
