import{r as h,j as r}from"./iframe-DQCyQvTg.js";import{P as m}from"./PasswordCreationField-iU8gpg7z.js";import{L as u}from"./Label-Bpn5fam4.js";import{B as g}from"./Button-BuvZu5FH.js";import{m as C}from"./IconWarning-BsBEN2i7.js";import{C as w}from"./CopyButton-5g2e6-6_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLdLSboA.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./clsx-B-dksMZM.js";import"./index-vqo-_XTj.js";import"./Action-BFqm9nZf.js";import"./context-CMTFLv9Z.js";import"./useStatic-XhnoWRRg.js";import"./browser-NLzega1a.js";import"./getActionGroupSlot--rri3fdD.js";import"./FieldDescription-6JasakGe.js";import"./Text-Dy3rf6Sf.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./Text-dCr4PfuU.js";import"./utils-B-47qEzM.js";import"./Tooltip-giG-A0OH.js";import"./OverlayArrow-BRUQmdEx.js";import"./useFocus-MHK9Bgmz.js";import"./ProgressBar-CvxDZlN2.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CgNKGrTG.js";import"./context-BVR1xsiE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-H28TAT4s.js";import"./useControlledState-CSGe32xq.js";import"./useFocusable-Bi17AcBv.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./ContextualHelpTrigger-CTpx_p4K.js";import"./Popover-lpt7nTNE.js";import"./useOverlayController-DoCudRwR.js";import"./OverlayContextProvider-CVH0IpO2.js";import"./Dialog-l1ZI7Q43.js";import"./Button-BqVXXUXM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BDNCZxcv.js";import"./RSPContexts-CbSXEXlJ.js";import"./Collection-Dvx0GJ5C.js";import"./CollectionBuilder-G7sQB9cg.js";import"./SelectionIndicator-BqvLdNe9.js";import"./Separator-CkdPEWsl.js";import"./SelectionManager-C7NRhxAL.js";import"./useEvent-BSjlxpLx.js";import"./useCollator-Dr7oYRVM.js";import"./FocusScope-DgjO-P_8.js";import"./VisuallyHidden-DTZCmZoD.js";import"./OverlayTrigger-nB7PjmO3.js";import"./Heading-BJYyanRr.js";import"./Heading-CbA3ZoPp.js";import"./useFieldComponent-BQB8jFXR.js";import"./FieldError-Db3KB_ND.js";import"./FieldError-BsUvM9FZ.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";import"./useControlledHostValueProps-CVxN_pM4.js";import"./TextField-DalX-Kg2.js";import"./Form-Ca14id66.js";import"./Group-_bvz-aPU.js";import"./Input-kTwoopyR.js";import"./useTextField-D5bi8loT.js";import"./useFormReset-3qpl4kR-.js";import"./useFormValidation-DWTcfSBl.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C2L8sUPo.js";import"./remote-DwYKdEj8.js";import"./react-children-utilities-5YX2fAUP.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
