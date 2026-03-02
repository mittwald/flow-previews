import{r as h,j as r}from"./iframe-uf-MKLgq.js";import{P as m}from"./PasswordCreationField-CBAz6DaA.js";import{L as u}from"./Label-CnhLMz3J.js";import{B as g}from"./Button-mfbo0dyR.js";import{m as C}from"./IconWarning-BGOvrRAj.js";import{C as w}from"./CopyButton-Bgx1zliJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fPlHFb8V.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./clsx-B-dksMZM.js";import"./index-CTOYeHPx.js";import"./ActionBatch-zb8alXiJ.js";import"./useOverlayController-CR9kocR-.js";import"./useStatic-CS2X9Zkf.js";import"./browser-CS6yJLU7.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./FieldDescription-Xe8FFH5r.js";import"./Text-CwTgn3ty.js";import"./EmulatedBoldText-BnnwN73K.js";import"./Text-DCWOF5Yr.js";import"./utils-DZ6AixXo.js";import"./Tooltip-D2a_Ki3F.js";import"./OverlayArrow-Cm4mIARd.js";import"./useFocus-BMvnG0Qw.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./context-DqOu6PGu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-190z59Bo.js";import"./useControlledState-BuF4aZkb.js";import"./useFocusable-C3B5EmJ3.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./ContextualHelpTrigger-vXQQKuOy.js";import"./Popover-C0XtAWTr.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./Dialog-CWJBmICf.js";import"./Button-Dm2G6Gzh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqiHW2G.js";import"./RSPContexts-nECt4NUH.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./FocusScope-1QvypY2n.js";import"./VisuallyHidden-CibrapRB.js";import"./OverlayTrigger-CMeRMZHt.js";import"./Heading-8mXYZ3pK.js";import"./Heading-C369PV89.js";import"./useFieldComponent-oiltg6td.js";import"./FieldError-DuL8_ys6.js";import"./FieldError-hMdCLiLA.js";import"./AlertText-CTyPJTrr.js";import"./AlertIcon-C9HYB2oh.js";import"./useControlledHostValueProps-CVNKjYkZ.js";import"./TextField-C1YIqqpg.js";import"./Form-Clq2RMYH.js";import"./Group-DfUk4kcb.js";import"./Input-Da_fVGjz.js";import"./useTextField--0uHRALa.js";import"./useFormReset-D43--mAD.js";import"./useFormValidation-DWm9SC-U.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CRqWvqjj.js";import"./remote-7esdTMhw.js";import"./react-children-utilities-CDjzYgVb.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
