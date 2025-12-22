import{r as h,j as r}from"./iframe-CYPvHnuu.js";import{P as m}from"./PasswordCreationField-DLuimbCo.js";import{L as u}from"./Label-BTRY4Fha.js";import{B as g}from"./Button-DytH811E.js";import{n as C}from"./IconWarning-CxTd4Ejc.js";import{C as w}from"./CopyButton-DEj0t3lF.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLG3Xjqu.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./clsx-B-dksMZM.js";import"./index-CuYxJU0p.js";import"./Action-Db_hw0Ue.js";import"./context-BIqaEuJx.js";import"./useStatic-Clnm1k9a.js";import"./browser-DHkGBw9W.js";import"./getActionGroupSlot-D8XZvD04.js";import"./FieldDescription-RtGqf3oZ.js";import"./Text-B7HPZf5X.js";import"./EmulatedBoldText-BplpewOf.js";import"./Text-CELcxyth.js";import"./utils---ZBHqUT.js";import"./Tooltip-B8RjySuy.js";import"./OverlayArrow-c0UAwNBy.js";import"./useFocus-Besr2u9O.js";import"./ProgressBar-Ds4kKwS2.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DsmrWctO.js";import"./context-Dv0AyQUz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CzL0wnxp.js";import"./useFocusable-DNqkvuS2.js";import"./useFocusRing-CwF8Yxqy.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./ContextualHelpTrigger-Bykr48e8.js";import"./Popover-DqKpgaaL.js";import"./useOverlayController-Dk-2lmPH.js";import"./OverlayContextProvider-B5UEEssH.js";import"./Dialog-DVySTr_M.js";import"./Button-BM3lF2Ud.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAll9lzw.js";import"./RSPContexts-B-l9PBN7.js";import"./Collection-CC7kOuB5.js";import"./CollectionBuilder-CcAo9kg0.js";import"./SelectionIndicator-CQjOYyqW.js";import"./Separator-B0yS3gpc.js";import"./SelectionManager-D6v8Hpa5.js";import"./useEvent-ZUbDwjtd.js";import"./useCollator-D2xCK0iS.js";import"./FocusScope-CPpTYY10.js";import"./VisuallyHidden-DQ4VZa68.js";import"./OverlayTrigger-D4_TWVNj.js";import"./Heading-CueoHU19.js";import"./Heading-CWDYWjnj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-K4osF3of.js";import"./FieldError-BvWeuB1p.js";import"./FieldError-DKbYNsKn.js";import"./useControlledHostValueProps-Di6e6qke.js";import"./TextField-Bmcb-2F7.js";import"./Form-Bjo4WKP7.js";import"./Group-B-UmyINm.js";import"./Input-C71-o0Ak.js";import"./useTextField-310WTtjr.js";import"./useFormReset-DMfMEm_f.js";import"./useFormValidation-BOj1NNIZ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-If-eK7wE.js";import"./remote-jfB-IGaC.js";import"./react-children-utilities-B44bb4Mz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
