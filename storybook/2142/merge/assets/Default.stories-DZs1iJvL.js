import{r as h,j as r}from"./iframe-D3NxpU8u.js";import{P as m}from"./PasswordCreationField-CoVo0_fG.js";import{L as u}from"./Label-DxphAsDG.js";import{B as g}from"./Button-edx4tjlA.js";import{n as C}from"./IconWarning-CbcK8G8M.js";import{C as w}from"./CopyButton-qKMyZfNt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cp5s9Mjb.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./clsx-B-dksMZM.js";import"./index-A0HM7_1k.js";import"./Action-CgjRBsSL.js";import"./context-BviD8e-k.js";import"./useStatic-Cxgn0lDK.js";import"./browser-_fqBbauj.js";import"./getActionGroupSlot-BO1T8GeY.js";import"./FieldDescription-BhgQYay2.js";import"./Text-D1hVvtRE.js";import"./EmulatedBoldText-BTtwXUtX.js";import"./Text-ChwArYoy.js";import"./utils-C5WN15Gt.js";import"./Tooltip-CTQ3734b.js";import"./OverlayArrow-B3oUpodu.js";import"./useFocus-C0SaCLF4.js";import"./ProgressBar-COGAiyei.js";import"./Label-Dn1Y_s7S.js";import"./Hidden-CJU5gFpe.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DrWOXoHd.js";import"./context-CgVi_M53.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CQ4qwdX_.js";import"./useFocusable-C5GnurYQ.js";import"./useFocusRing-EPMGJgfm.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./ContextualHelpTrigger-DwUPaa_K.js";import"./Popover-QtpEgILn.js";import"./useOverlayController-lbjW1yTF.js";import"./OverlayContextProvider-Dq_iYQ8p.js";import"./Dialog-CvwxtaFW.js";import"./Button-BOXTMksI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Byc6DAfn.js";import"./RSPContexts-ClgHsKPZ.js";import"./Collection-PnM2Ucj1.js";import"./CollectionBuilder-Dx8JAACx.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./Separator-Br82JzEe.js";import"./SelectionManager-x8dLLgK6.js";import"./useEvent-C375hDTh.js";import"./useCollator-CIF19XO1.js";import"./FocusScope-0a8lKbDZ.js";import"./VisuallyHidden-CbY3TGrn.js";import"./OverlayTrigger-BzsNNahf.js";import"./Heading-BTvslLGP.js";import"./Heading-apCDmXp5.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BWjf97vE.js";import"./FieldError-CpaS6eds.js";import"./FieldError-C5ECIufL.js";import"./useControlledHostValueProps-BKvGiPad.js";import"./TextField-B_lRYNK_.js";import"./Form-CjVHpqWM.js";import"./Group-Bt94AlX-.js";import"./Input-DsjyUW1i.js";import"./useTextField-DqUndp1N.js";import"./useFormReset-LpCZRAmu.js";import"./useFormValidation-sS7ClLRw.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D_HEbJEf.js";import"./remote-Cz3kT78_.js";import"./react-children-utilities-ahiNCIr2.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
