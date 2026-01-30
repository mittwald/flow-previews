import{r as h,j as r}from"./iframe-1hZ9wzBW.js";import{P as m}from"./PasswordCreationField-BxjHNhTH.js";import{L as u}from"./Label-D0cGucr-.js";import{B as g}from"./Button-7Po4DI29.js";import{m as C}from"./IconWarning-Bq_05zLs.js";import{C as w}from"./CopyButton-tsT-rPse.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BsriuUgB.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./clsx-B-dksMZM.js";import"./index-dx0Fbu95.js";import"./Action-5-LJxdMW.js";import"./context-Ci4eovAp.js";import"./useStatic-BSOtV-Rw.js";import"./browser-jjcexMIs.js";import"./getActionGroupSlot-BJec6nln.js";import"./FieldDescription-BgHJgSRB.js";import"./Text-BF_GklVB.js";import"./EmulatedBoldText-D3kC_v2V.js";import"./Text-B1mgaTQV.js";import"./utils-CnJx27u5.js";import"./Tooltip-BVkqj3yP.js";import"./OverlayArrow-CJR0hx1K.js";import"./useFocus-iMNco4FL.js";import"./ProgressBar-fkOF9esE.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CrikywT0.js";import"./context-Dx8Lg4Ma.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DJmPDLK7.js";import"./useControlledState-DAXJPifs.js";import"./useFocusable-CvXOfqVX.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./ContextualHelpTrigger-DZ9PPE_m.js";import"./Popover-Bxp3aiNM.js";import"./useOverlayController-C-EZcKCT.js";import"./OverlayContextProvider-DZK4ly6O.js";import"./Dialog-DTOlRROi.js";import"./Button-XLqKqFxh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNGT1V3C.js";import"./RSPContexts-Da-kz4p_.js";import"./Collection-C5nhmh42.js";import"./CollectionBuilder-CdqbO1wf.js";import"./SelectionIndicator-22830iwM.js";import"./Separator-gCfZ79Ls.js";import"./SelectionManager-C1YqHNWY.js";import"./useEvent-CxVl1HjR.js";import"./useCollator-7JXdm9sI.js";import"./FocusScope-Dxs6Wric.js";import"./VisuallyHidden-UazS1TBU.js";import"./OverlayTrigger-DkAzLvEk.js";import"./Heading-CHsPWFD7.js";import"./Heading-BDZkQl9H.js";import"./useFieldComponent-B-hW6CDY.js";import"./FieldError-BLPNRQRQ.js";import"./FieldError-y4Ibnc6j.js";import"./AlertText-D19RpsJk.js";import"./AlertIcon-fApV2-nR.js";import"./useControlledHostValueProps-CUKmYRsD.js";import"./TextField-Dy2tPgEd.js";import"./Form-BqoDw02I.js";import"./Group-D37MkbfD.js";import"./Input-BD7vx0Sp.js";import"./useTextField-B8x37Qq1.js";import"./useFormReset-HcR3N4q2.js";import"./useFormValidation-yU8XYtwO.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CBIfE8tz.js";import"./remote-CnwnRZPi.js";import"./react-children-utilities-DJhm1sCI.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
