import{r as h,j as r}from"./iframe-jaoHr1AV.js";import{P as m}from"./PasswordCreationField-Js3hNqRo.js";import{L as u}from"./Label-Kdaxftsp.js";import{B as g}from"./Button-DsyAZnvz.js";import{m as C}from"./IconWarning-DyIA4Uof.js";import{C as w}from"./CopyButton-B226n_I8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BZQIArQs.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./clsx-B-dksMZM.js";import"./index-BFCtAlHX.js";import"./ActionBatch-Dl5Fmp7w.js";import"./useOverlayController-CzdtfrCF.js";import"./useStatic-CMyMNZPZ.js";import"./browser-gEDtR-OK.js";import"./getActionGroupSlot-BJH_a8Yi.js";import"./FieldDescription-i3dtwlr1.js";import"./Text-Cs3EhNpG.js";import"./EmulatedBoldText-DDNOwYGP.js";import"./Text-DE-JOko8.js";import"./utils-CQw042JL.js";import"./Tooltip-CFAa3NDd.js";import"./OverlayArrow-BDs_imrE.js";import"./useFocus-GROhvItb.js";import"./ProgressBar-D0TA1OyO.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XwramTU6.js";import"./context-CW7DVTht.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CA-tHgfv.js";import"./useControlledState-H8E68uKK.js";import"./useFocusable-Bnc4O4Ay.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./ContextualHelpTrigger-C5hM45Eq.js";import"./Popover-BDgL-7Qp.js";import"./OverlayContextProvider-CEARkGE9.js";import"./Dialog-COvhX_CP.js";import"./Button-DhLHtzSw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-WaW8O6jQ.js";import"./RSPContexts-CUx4KoIL.js";import"./Collection-CODju4Fo.js";import"./CollectionBuilder-CN9LptsI.js";import"./SelectionIndicator-CFfIf2cB.js";import"./Separator-BHV6nvqI.js";import"./SelectionManager-C8TGpPIB.js";import"./useEvent-NPetVyFU.js";import"./useCollator-CCOGTm23.js";import"./FocusScope-B5Ctyl2K.js";import"./VisuallyHidden-DhIewZ3I.js";import"./OverlayTrigger-mWrXut7l.js";import"./Heading-BypYnbKw.js";import"./Heading-CGZUJUiQ.js";import"./useFieldComponent-D-iYVveA.js";import"./FieldError-SYu40l7i.js";import"./FieldError-D7CvISHf.js";import"./AlertText-C4ghe_z5.js";import"./AlertIcon-BkGbvGvC.js";import"./useControlledHostValueProps-Cis_Za3O.js";import"./TextField-AoRDnB9E.js";import"./Form-B8e0R8nB.js";import"./Group-7_zwoJgV.js";import"./Input-eh_683Iq.js";import"./useTextField-DeLc3kwF.js";import"./useFormReset-B3LvCMGn.js";import"./useFormValidation-B1svUyZM.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DQaYydFO.js";import"./remote-CF-AY8I2.js";import"./react-children-utilities-DoBcTMMB.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
