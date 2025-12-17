import{r as h,j as r}from"./iframe-CuoLN6Ak.js";import{L as u}from"./Label-CaF-n4li.js";import{B as g}from"./Button-Cfn_KBZi.js";import"./IconApp-BDJ8KTSO.js";import{I as C}from"./IconDanger-CxUQbc1u.js";import{C as w}from"./CopyButton-BbqsPy-G.js";import{P as m}from"./PasswordCreationField-BnYudCn3.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-YDIBuGER.js";import"./index-BqbRGCsY.js";import"./index-BaIyL5kt.js";import"./useLocalizedStringFormatter-K1ERg2wQ.js";import"./context-DM2sT4iG.js";import"./Label-D3KIvHQC.js";import"./utils-C2NHa3pd.js";import"./Hidden-DgR9vk0-.js";import"./IconX-K8aTyunn.js";import"./IconCheck-BanT3gYA.js";import"./Text-DdChUKUI.js";import"./browser-t1e5k5Lt.js";import"./EmulatedBoldText-BNHG0Gfg.js";import"./Text-C8IviCt6.js";import"./LoadingSpinner-Brt5LhyU.js";import"./ariaLive-oD__tGeT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-JKpMdsKf.js";import"./Button-D6bHbdkl.js";import"./ProgressBar-DQXQN5uc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BM4FNoAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIMCLJey.js";import"./useFocus-unZl_nfX.js";import"./useFocusRing-DRMfEjpH.js";import"./useFocusable-DB5_4vgf.js";import"./IconCopy-D_2P4SJ8.js";import"./Tooltip-IwBGo9E-.js";import"./OverlayArrow-C99iKRaY.js";import"./useControlledState-ItXXMvHS.js";import"./react-children-utilities-Cioxl0Xu.js";import"./Action-BkuSI1AI.js";import"./useStatic-DF3kEdZS.js";import"./getActionGroupSlot-w80GylpO.js";import"./context-Cxg_dyF2.js";import"./dynamic-8E81vrw4.js";import"./FieldDescription-B83QXWUS.js";import"./TranslationProvider-BnJHpUgr.js";import"./IconCircleCheck-CbiZvSof.js";import"./ContextualHelpTrigger-rUevOoil.js";import"./Popover-DXwzYIUP.js";import"./OverlayContextProvider-DODbX18A.js";import"./Dialog-B3wLnKHY.js";import"./RSPContexts-B8ycOlyZ.js";import"./Collection-But3F955.js";import"./CollectionBuilder-C3oybePu.js";import"./SelectionIndicator-BHxJDckt.js";import"./Separator-DgdmOsv7.js";import"./SelectionManager-DmuXrxNs.js";import"./useEvent-CGtQDWm6.js";import"./useCollator-C-FMw8vz.js";import"./FocusScope-Bhi-HXNo.js";import"./VisuallyHidden-CBSg7tA6.js";import"./useOverlayController-BQNvHxuF.js";import"./OverlayTrigger-BBfxPtJK.js";import"./IconInfo-D2rw_1io.js";import"./Heading-CfRZsy__.js";import"./Heading-D1DEAOPr.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CpAAuxDf.js";import"./FieldError-BXdT0ENq.js";import"./FieldError-zdBOb0_m.js";import"./useControlledHostValueProps-BqZEo0r9.js";import"./TextField-auQk3RGt.js";import"./Form-BoKLrbzS.js";import"./Group-y2y6-45-.js";import"./Input-CSQeI68y.js";import"./useTextField-DuTAd_dm.js";import"./useFormReset-Cj_2aRsw.js";import"./useFormValidation-BeXwm1Ez.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
