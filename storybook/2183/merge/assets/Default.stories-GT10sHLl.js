import{r as h,j as r}from"./iframe-Eg8-wFCR.js";import{L as u}from"./Label-1lc8IvKU.js";import{B as g}from"./Button-bx6caw1c.js";import"./IconChevronDown-CB7etEhV.js";import{I as C}from"./IconDanger-Djal8A6_.js";import{C as w}from"./CopyButton-DunDvtCW.js";import{P as m}from"./PasswordCreationField-B7CXO3f2.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./index-7P9p2RDg.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./context-D30M243T.js";import"./Label-ayphvmky.js";import"./utils-DpUmHG9o.js";import"./Hidden-CPM5AGUb.js";import"./IconX-chnQqdsu.js";import"./IconCheck-CfWObqtZ.js";import"./Text-cFe2oWr9.js";import"./browser-CGaD3WbY.js";import"./EmulatedBoldText-BvL31EIC.js";import"./Text-CVQZ1Ff_.js";import"./LoadingSpinner-l0sJlHn4.js";import"./ariaLive-JHqpu2fU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DyWsWGYm.js";import"./Button-DrB4xT8J.js";import"./ProgressBar-BDU9deru.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiQu3Cp5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eXiMCUEC.js";import"./useFocus-BombNWQr.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocusable-CMi9d24v.js";import"./IconCopy-BzjNOemf.js";import"./Tooltip-D2kBO4vp.js";import"./OverlayArrow-CDko6Bkl.js";import"./useControlledState-B4vwiKN6.js";import"./react-children-utilities-Dkx4H6nz.js";import"./Action-DV4LdD_S.js";import"./useStatic-BFryEnnL.js";import"./getActionGroupSlot-Dz1zi_Ez.js";import"./context-W5o617c2.js";import"./dynamic-DS6EBQ3r.js";import"./FieldDescription-CAHlR0jD.js";import"./TranslationProvider-q7fxS_y3.js";import"./IconCircleCheck-DXRrdAfT.js";import"./ContextualHelpTrigger-_TnWLgmE.js";import"./Popover-k3YNshBd.js";import"./OverlayContextProvider-BxKFxtc4.js";import"./Dialog-BIruH5Sw.js";import"./RSPContexts-ajqDrbBU.js";import"./Collection-DZl0ZzX8.js";import"./CollectionBuilder-B_QcNnrf.js";import"./SelectionIndicator-LygQ_MIk.js";import"./Separator-DQMCvS0x.js";import"./SelectionManager-CFu8e8go.js";import"./useEvent-Cv81pFWJ.js";import"./useCollator-C-69fnSd.js";import"./FocusScope-BFrkZdE_.js";import"./VisuallyHidden-B_EYeIgM.js";import"./useOverlayController-D2lpnQmk.js";import"./OverlayTrigger-BlFtNgbQ.js";import"./IconInfo-M4KFZ-Cm.js";import"./Heading-B3sOltah.js";import"./Heading-BYMbJv2p.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CePCnb_B.js";import"./FieldError-D_RdlzA4.js";import"./FieldError-BwCFTN-W.js";import"./useControlledHostValueProps-CMYSf_Mb.js";import"./TextField-D11bwwwF.js";import"./Form-DkJGoq-X.js";import"./Group-BHVgCnMY.js";import"./Input-q1ZC5BdI.js";import"./useTextField-BX8mCjCv.js";import"./useFormReset-BOxw_xUS.js";import"./useFormValidation-D_eOv9kq.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
