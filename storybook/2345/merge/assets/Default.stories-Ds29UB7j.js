import{r as h,j as r}from"./iframe-Bh3xJiHl.js";import{P as m}from"./PasswordCreationField-B1oCU33G.js";import{L as u}from"./Label-SNmrw9Fy.js";import{B as g}from"./Button-C1GDS2T5.js";import{m as C}from"./IconWarning-BO5-ThfV.js";import{C as w}from"./CopyButton-BKdwe7_9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cx5ap73z.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./clsx-B-dksMZM.js";import"./index-CTdhbmBU.js";import"./ActionBatch-i2QcTjWd.js";import"./useOverlayController-DT1eg7nU.js";import"./useStatic-BN6jI5KS.js";import"./browser-8DYgdl68.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./FieldDescription-DDUCZeUk.js";import"./Text-yap4nkEx.js";import"./EmulatedBoldText-jamwOsD6.js";import"./Text-CYmLgYN4.js";import"./utils-Dfx959rT.js";import"./Tooltip-DNbnI5fi.js";import"./OverlayArrow-D44cF5Xm.js";import"./useFocus-BHtMPlKM.js";import"./ProgressBar-f9Z69uXY.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXwac_uq.js";import"./context-BR0BeWgQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BHUB4uMx.js";import"./useControlledState-cRERDsL1.js";import"./useFocusable-BqTTqTxS.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./ContextualHelpTrigger-BV8_3T_q.js";import"./Popover-DZO-XDYX.js";import"./OverlayContextProvider-nbeISQDl.js";import"./Dialog-CdFvlhxh.js";import"./Button-BNrfYXOb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B8ZJpDXl.js";import"./RSPContexts-CiTjd_Cl.js";import"./Collection-DIBLnAHN.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./SelectionIndicator-CiZnwtLL.js";import"./Separator-C-kXScb9.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./useCollator-DwLdnUiO.js";import"./FocusScope-DSBEK_-_.js";import"./VisuallyHidden-CnocgGJn.js";import"./OverlayTrigger-xf6EpmWh.js";import"./Heading-OKG0Iw9H.js";import"./Heading-DtIx3EFz.js";import"./useFieldComponent-DixKAqTB.js";import"./FieldError-BT5CTe02.js";import"./FieldError-DSfA25Iv.js";import"./AlertText-29lF4HJO.js";import"./AlertIcon-BebRztpd.js";import"./useControlledHostValueProps-D11NzOUo.js";import"./TextField-CykpEZxz.js";import"./Form-BYhBcXhc.js";import"./Group-DF5FwY7U.js";import"./Input-DfQ8ZFmJ.js";import"./useTextField-CocvbY9q.js";import"./useFormReset-CbcSutFk.js";import"./useFormValidation-DFhVz88J.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./remote-Bp1RK0aJ.js";import"./react-children-utilities-Ci08SEfb.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
