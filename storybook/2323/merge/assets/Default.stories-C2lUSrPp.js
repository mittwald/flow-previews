import{r as h,j as r}from"./iframe-Bq_dTdDz.js";import{P as m}from"./PasswordCreationField-DBk609nj.js";import{L as u}from"./Label-DlbZYBs5.js";import{B as g}from"./Button-DwhPeKe2.js";import{m as C}from"./IconWarning-AvRveFf8.js";import{C as w}from"./CopyButton-CnDLZWR4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BU-d9n8a.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./clsx-B-dksMZM.js";import"./index-C2qM6Ecb.js";import"./ActionBatch-DTgx0kqH.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./browser-D_Oin-6N.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./FieldDescription-ByrQyhzl.js";import"./Text-3w39UNLL.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Text-RESw6iu2.js";import"./utils-Dc83Zc3S.js";import"./Tooltip-fPwJV1ep.js";import"./OverlayArrow-D8uV1uDe.js";import"./useFocus-zY2zj5L9.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BL_xrhrx.js";import"./context-DasT5rkr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C2_YEmjA.js";import"./useControlledState-DvV_L9jP.js";import"./useFocusable-B7WP4__g.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./ContextualHelpTrigger-CzZwUIm3.js";import"./Popover-DIyRcO8w.js";import"./OverlayContextProvider-CwxNfmUY.js";import"./Dialog-atW1yRI0.js";import"./Button-B82FCYrG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxmEVb--.js";import"./RSPContexts-BEGF6Rgy.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./VisuallyHidden-6gUpRQYP.js";import"./OverlayTrigger-CkrzYHRb.js";import"./Heading-C8DRlUq-.js";import"./Heading-Cv2K6T9Y.js";import"./useFieldComponent-C92nVZms.js";import"./FieldError-ClLnELEE.js";import"./FieldError-CB3_Y2qo.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";import"./useControlledHostValueProps-Byhklanl.js";import"./TextField-Bbc_VGXT.js";import"./Form-Bm3_NoD-.js";import"./Group-DFA2OkWU.js";import"./Input-b7EgChKn.js";import"./useTextField-BNdYQUXF.js";import"./useFormReset-BNYkLVEo.js";import"./useFormValidation-ofgJ0bTW.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-QnwB8HJT.js";import"./remote-BGgAcFUF.js";import"./react-children-utilities-BRhLEvhb.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
