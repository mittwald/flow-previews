import{r as h,j as r}from"./iframe-D8Xbwx9P.js";import{L as u}from"./Label-DAN_V0xJ.js";import{B as g}from"./Button-DnjfJoF3.js";import"./IconApp-Ch7b1vIu.js";import{I as C}from"./IconDanger-DO15Hi94.js";import{C as w}from"./CopyButton-V9rvkkkk.js";import{P as m}from"./PasswordCreationField-WDpgWj5k.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CigogB48.js";import"./index-CYTinXvO.js";import"./index-BkN34slO.js";import"./useLocalizedStringFormatter-CXsD6kYA.js";import"./context-CMvcEg-k.js";import"./Label-rFd_FIkn.js";import"./utils-C3Tuzz6i.js";import"./Hidden-zhCtJ-LB.js";import"./IconX-HMFf4w5l.js";import"./IconCheck-Djd4ZBy_.js";import"./Text-ZHIm2izM.js";import"./browser-BEcu8ny4.js";import"./EmulatedBoldText-Cd0UPmPK.js";import"./Text-C0Eqp9FN.js";import"./LoadingSpinner-CRZU7QZf.js";import"./ariaLive-CRfqyPSL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BpFUxGPl.js";import"./Button-WVOu4VhQ.js";import"./ProgressBar-CVumlVqB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DE67nUnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvIVggVb.js";import"./useFocus-D1eNONK1.js";import"./useFocusRing-kQK9kbZa.js";import"./useFocusable-CozNvSU7.js";import"./IconCopy-CeDNn8bf.js";import"./Tooltip-DdEVigem.js";import"./OverlayArrow-CaVIvu7y.js";import"./useControlledState-YZIEyxRh.js";import"./react-children-utilities-9Zl7IlBY.js";import"./Action-Dmcwzy-D.js";import"./useStatic-76h0-2Qu.js";import"./getActionGroupSlot-cjlWHciT.js";import"./context-DTPirBdX.js";import"./dynamic-C7V4-Zrv.js";import"./FieldDescription-DheAaCsD.js";import"./TranslationProvider-CAtOM_P5.js";import"./IconCircleCheck-BX2W763_.js";import"./ContextualHelpTrigger-1Urai1K_.js";import"./Popover-D00PjseW.js";import"./OverlayContextProvider-C9wat-C-.js";import"./Dialog-Du_kPH7o.js";import"./RSPContexts-CsOhl7yw.js";import"./Collection-CquzgsCv.js";import"./CollectionBuilder-Cl1VQ76h.js";import"./SelectionIndicator-DvsfeWbh.js";import"./Separator-0bv_QzU7.js";import"./SelectionManager-CxpfoWMp.js";import"./useEvent-BrS2p23g.js";import"./useCollator-CoCLyJRC.js";import"./FocusScope-_ezdgzai.js";import"./VisuallyHidden-0JTBVxma.js";import"./useOverlayController-DFfxBH9t.js";import"./OverlayTrigger-DipuCQF3.js";import"./IconInfo-DCSuWSbX.js";import"./Heading-YQCh4-8a.js";import"./Heading-B1sGhKQ8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BVJ72uhW.js";import"./FieldError-SqDTuGjU.js";import"./FieldError-BOU-ptKT.js";import"./useControlledHostValueProps-ZIMeorcT.js";import"./TextField-u4wll0pE.js";import"./Form-BSjJ02XH.js";import"./Group-K-eCqnjR.js";import"./Input-CwYJ6Hjz.js";import"./useTextField-DKCJiEJc.js";import"./useFormReset-7Q0iJ7bt.js";import"./useFormValidation-Bi2FjDm7.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
