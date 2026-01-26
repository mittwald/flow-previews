import{r as h,j as r}from"./iframe-BZLAsPNC.js";import{P as m}from"./PasswordCreationField-CxMx8RY3.js";import{L as u}from"./Label-DKRPZs6o.js";import{B as g}from"./Button-CSRJ_rM3.js";import{m as C}from"./IconWarning-BRgKnpuG.js";import{C as w}from"./CopyButton-D6k4RbuM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DRBl70hS.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./clsx-B-dksMZM.js";import"./index-CYjhUmDO.js";import"./Action-mWe4s719.js";import"./context-Wd_RxxmY.js";import"./useStatic-CJRmLxnl.js";import"./browser-D75BLayN.js";import"./getActionGroupSlot-SLjFrrTu.js";import"./FieldDescription-Dh69MaGI.js";import"./Text-oqqebshB.js";import"./EmulatedBoldText-i2HM1out.js";import"./Text-C0MYo1gI.js";import"./utils-GBJhPEt0.js";import"./Tooltip-6SDKyh7G.js";import"./OverlayArrow-D53qTIEL.js";import"./useFocus-BAbXgSuO.js";import"./ProgressBar-DjUlq4Bp.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DAhF5fA-.js";import"./context-B1QKiSyt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BdOl-nfx.js";import"./useFocusable-CJlLttAU.js";import"./useFocusRing-DUiko_nB.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./ContextualHelpTrigger-LgV73S23.js";import"./Popover-aQEA2L0G.js";import"./useOverlayController-C7H6e68I.js";import"./OverlayContextProvider-BlSJPydV.js";import"./Dialog-BHTl5ZpY.js";import"./Button-YUsFH9mL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3AJe8l0.js";import"./RSPContexts-DRyX1L5k.js";import"./Collection-oaJ1OlFu.js";import"./CollectionBuilder-DNc7feWH.js";import"./SelectionIndicator--Gts2DGf.js";import"./Separator-kzi7KXEN.js";import"./SelectionManager-SkouX_in.js";import"./useEvent-BRYkpDGi.js";import"./useCollator-CueQXTCK.js";import"./FocusScope-BleEWu6g.js";import"./VisuallyHidden-B55KrhOv.js";import"./OverlayTrigger-CosWzk9C.js";import"./Heading-CmA86V_y.js";import"./Heading-Bg25gZBW.js";import"./useFieldComponent-C5gewvzz.js";import"./FieldError-D2O_dT2D.js";import"./FieldError-B9G53mk8.js";import"./AlertText-DgwQ_4kg.js";import"./AlertIcon-wpFTQr76.js";import"./useControlledHostValueProps-D32lW-Mj.js";import"./TextField-BKV_Y9qx.js";import"./Form-CDvikIHs.js";import"./Group-D7D0OI93.js";import"./Input-av1t-akK.js";import"./useTextField-BnHH6rYj.js";import"./useFormReset-B4usOE4z.js";import"./useFormValidation-BLPWS9Vb.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./remote-DD9qKW4I.js";import"./react-children-utilities-bjomvCBp.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
