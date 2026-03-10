import{r as h,j as r}from"./iframe-DAdEF_a9.js";import{P as m}from"./PasswordCreationField-Dvl4CI_f.js";import{L as u}from"./Label-D1h8c298.js";import{B as g}from"./Button-BL7hv3yg.js";import{m as C}from"./IconWarning-B_QPuDoh.js";import{C as w}from"./CopyButton-CGBAK-Mt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-pIUCZeo6.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./clsx-B-dksMZM.js";import"./index-DqNUQeP9.js";import"./ActionBatch-BtBHZwy0.js";import"./useOverlayController-BdzCJ-ub.js";import"./useStatic-CKtHP4uD.js";import"./browser-DTw6e149.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./FieldDescription-CFQCjYVN.js";import"./Text-BlXexclX.js";import"./EmulatedBoldText-DRN0x44S.js";import"./Text-ConA-l-E.js";import"./utils-B1o5BDIk.js";import"./Tooltip-4ooVrAkl.js";import"./OverlayArrow-DM34mO9f.js";import"./useFocus-BHQGBA4R.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CcpSY4Um.js";import"./context-DrtV74MG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-5n4vvaIx.js";import"./useControlledState-D1JeUT3E.js";import"./useFocusable-vdr5CzJ0.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./ContextualHelpTrigger-DNw1KY9Z.js";import"./Popover-CBYvjYoJ.js";import"./OverlayContextProvider-DG82vmF2.js";import"./Dialog-CWk-zVbe.js";import"./Button-DZLmAbDI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-AnOXMqB9.js";import"./RSPContexts-BAZVNF9B.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./Separator-DdtELOBz.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./VisuallyHidden-DtDztoAI.js";import"./OverlayTrigger-DC0b_r1T.js";import"./Heading-CRr1Ukpo.js";import"./Heading-B0L1HgOG.js";import"./useFieldComponent-CLfspKSt.js";import"./FieldError-DAuD7Eqr.js";import"./FieldError-Be27Lv36.js";import"./AlertText-kiIxGYqF.js";import"./AlertIcon-DxXhtuAo.js";import"./useControlledHostValueProps-J23MCm-A.js";import"./TextField-4ha8Auah.js";import"./Form-B4U7K7S8.js";import"./Group-D1kJtVaR.js";import"./Input-Cd2NpESg.js";import"./useTextField-BhMqFMtB.js";import"./useFormReset-BoqlzNfE.js";import"./useFormValidation-CWgfw6QX.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BzYwrllt.js";import"./remote-BQ_isGLI.js";import"./react-children-utilities-BqhHYIWj.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
