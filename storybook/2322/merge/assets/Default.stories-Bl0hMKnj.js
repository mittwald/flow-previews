import{r as h,j as r}from"./iframe-DeaTJDua.js";import{P as m}from"./PasswordCreationField-DqaABAOw.js";import{L as u}from"./Label-DJdPs_mv.js";import{B as g}from"./Button-Cbxy7DVV.js";import{m as C}from"./IconWarning-Bnohnd1u.js";import{C as w}from"./CopyButton-p384BHtI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-_cZQrmBt.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./clsx-B-dksMZM.js";import"./index-BmNXFkrE.js";import"./ActionBatch-RbyKfuct.js";import"./useOverlayController-DRqv1s8t.js";import"./useStatic-Die7f9lk.js";import"./browser-DgW11PhP.js";import"./getActionGroupSlot-DiYPO2W1.js";import"./FieldDescription-B8HCsyh4.js";import"./Text-DmX-Z1ax.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./Text-D55T9z4A.js";import"./utils-DAn_19Le.js";import"./Tooltip-C4DC67uQ.js";import"./OverlayArrow-seoLwAns.js";import"./useFocus-DwX8c8hl.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C4fGorSC.js";import"./context-DpHy2B7Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CR3AbbfB.js";import"./useControlledState-CvKG4MPs.js";import"./useFocusable-DXFTvAH_.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./ContextualHelpTrigger-DspXXwca.js";import"./Popover-Bx3CBkxo.js";import"./OverlayContextProvider-BQrHrXvy.js";import"./Dialog-BDRpw9MJ.js";import"./Button-CkcG2vDz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGs6tBRd.js";import"./RSPContexts-n2YtmRLP.js";import"./Collection-BBtX_wi9.js";import"./CollectionBuilder-B2bzNwzm.js";import"./SelectionIndicator-C0I4_uDy.js";import"./Separator-D-1V8FhN.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./useCollator-DPWjVVbc.js";import"./FocusScope-CpKBh6MC.js";import"./VisuallyHidden-BMpCP5yc.js";import"./OverlayTrigger-Cd2hfWuE.js";import"./Heading-DNOFGRof.js";import"./Heading-Bb4nX13J.js";import"./useFieldComponent-Bk8CgTUl.js";import"./FieldError-1N6EvFt7.js";import"./FieldError-BF0ggQ3i.js";import"./AlertText-CNiFry47.js";import"./AlertIcon-KKj1r8Dh.js";import"./useControlledHostValueProps-BF8eq0rO.js";import"./TextField-Xn26TGA2.js";import"./Form-BdU1booJ.js";import"./Group-Dy6AvEDN.js";import"./Input-B9L4_sDl.js";import"./useTextField-DQvvweX9.js";import"./useFormReset-UTIDwNo9.js";import"./useFormValidation-Ca3G17wV.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-tY2JT6X0.js";import"./remote-4WWdz0S_.js";import"./react-children-utilities-COpQjBYN.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
