import{r as h,j as r}from"./iframe-Bt_Ape3b.js";import{P as m}from"./PasswordCreationField-BY7IG30n.js";import{L as u}from"./Label-LBQHmcU0.js";import{B as g}from"./Button-Bm5EggmV.js";import{n as C}from"./IconWarning-BQjeLTWb.js";import{C as w}from"./CopyButton-CG_VZ4y8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3ysZU61.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./clsx-B-dksMZM.js";import"./index-gN6AAF3-.js";import"./Action-B2h50d-b.js";import"./context-CGPA3PGo.js";import"./useStatic-DpZVpe0y.js";import"./browser-BI8hAkYP.js";import"./getActionGroupSlot-Cx8mj5km.js";import"./FieldDescription-BVGH4033.js";import"./Text-Bs2hbxJA.js";import"./EmulatedBoldText-213nH2nf.js";import"./Text-DwU1R_Cs.js";import"./utils-DGGum7sG.js";import"./Tooltip-90xC8mRq.js";import"./OverlayArrow-CVhGLAoZ.js";import"./useFocus-C-togmBu.js";import"./ProgressBar-DgNpOae2.js";import"./Label-Bfb_thp3.js";import"./Hidden-CJIrU941.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BAWBHbvC.js";import"./context-BGqy3a6E.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bw01eRXu.js";import"./useFocusable-BX_sV3cU.js";import"./useFocusRing-Ba6s95SH.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./ContextualHelpTrigger-B6JshDaM.js";import"./Popover-BlR2GZVE.js";import"./useOverlayController-GBUtTLO-.js";import"./OverlayContextProvider-BwOUPmKM.js";import"./Dialog-3KThjjZh.js";import"./Button-pXrc8KX9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DErVZDbk.js";import"./RSPContexts-CtPg4mPr.js";import"./Collection-CZkVMDHw.js";import"./CollectionBuilder-D9hZnXF0.js";import"./SelectionIndicator-7G59x11l.js";import"./Separator-fa_nI6Bk.js";import"./SelectionManager-BSKqz5jy.js";import"./useEvent-B7_y21W_.js";import"./useCollator-CvPTpoia.js";import"./FocusScope-BOag0uW3.js";import"./VisuallyHidden-CM2m0J8e.js";import"./OverlayTrigger-BxvpYE5H.js";import"./Heading-C3-uF7Fn.js";import"./Heading-CF5bGxey.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-QpDNRghi.js";import"./FieldError-DvZju2Cm.js";import"./FieldError-Cd4omKy3.js";import"./useControlledHostValueProps-D-YKizXP.js";import"./TextField-BJdO3hjf.js";import"./Form-E_SZdIUl.js";import"./Group-MbSsCM3Y.js";import"./Input-DtIcDeFz.js";import"./useTextField-DKaBY6Vl.js";import"./useFormReset-BU_Yh1RY.js";import"./useFormValidation-Gf9yhQ7S.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CXrerpwy.js";import"./remote-C9NcRL_b.js";import"./react-children-utilities-D9rd2J34.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
