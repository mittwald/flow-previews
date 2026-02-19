import{r as h,j as r}from"./iframe-Bvl8-Rhq.js";import{P as m}from"./PasswordCreationField-BJoKX3bu.js";import{L as u}from"./Label-BVY1ryMc.js";import{B as g}from"./Button-_6nTdRI5.js";import{m as C}from"./IconWarning-_TKsX-mO.js";import{C as w}from"./CopyButton-CWw1h9Iu.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-hIR-PLzh.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./clsx-B-dksMZM.js";import"./index-uwiO8q01.js";import"./ActionBatch-TusZCIcz.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./browser-B1OJJ6Dj.js";import"./getActionGroupSlot-ConeELan.js";import"./FieldDescription-BZOs9e_4.js";import"./Text-CBdBop4j.js";import"./EmulatedBoldText-BoCe5muM.js";import"./Text-BaIKemC9.js";import"./utils-D7QihGpD.js";import"./Tooltip-DBIcQ75K.js";import"./OverlayArrow-IqXCmbe_.js";import"./useFocus-DXNpHz9A.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B5hAF-sV.js";import"./context--xVWQ6Ca.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-gQZwig4O.js";import"./useControlledState-B5E2fQyc.js";import"./useFocusable-CNuLnnFg.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./ContextualHelpTrigger-mLptDfhr.js";import"./Popover-lnpWKhcE.js";import"./OverlayContextProvider-Dyr3lJ1d.js";import"./Dialog-BAI9Op-m.js";import"./Button-DiDTVCSs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C7_C1qgD.js";import"./RSPContexts-B8aZy59D.js";import"./Collection-Ep3IaGeN.js";import"./CollectionBuilder-B8HmBXk8.js";import"./SelectionIndicator-i35HMeKk.js";import"./Separator-Depa_-5B.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./useCollator-1R1bRnUk.js";import"./FocusScope-DRyVjtRp.js";import"./VisuallyHidden-ScIHpAUT.js";import"./OverlayTrigger-DBaHgX3j.js";import"./Heading-CY0V-mNT.js";import"./Heading-1gB4U-P4.js";import"./useFieldComponent-D4BbqCv_.js";import"./FieldError-BkA2bgrH.js";import"./FieldError-Du4MQwEm.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";import"./useControlledHostValueProps-BVnBHhop.js";import"./TextField-Bw9AZxi0.js";import"./Form-D70wz7aV.js";import"./Group-CdqV-_AW.js";import"./Input-DnkGytYm.js";import"./useTextField-CDBuSrx8.js";import"./useFormReset-C0JkbMmh.js";import"./useFormValidation-Cl3HF3fr.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./remote-CTLFAioN.js";import"./react-children-utilities-rQzUtuYf.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
