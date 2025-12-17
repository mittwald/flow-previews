import{r as h,j as r}from"./iframe-8dFSbqJz.js";import{L as u}from"./Label-B3-xaZya.js";import{B as g}from"./Button-Bp8IuIoY.js";import"./IconChevronDown-BoB9X9Lx.js";import{I as C}from"./IconDanger-D2WM-UH7.js";import{C as w}from"./CopyButton-BzDSOg5C.js";import{P as m}from"./PasswordCreationField-WgQ8BP-A.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./index-QKd42-im.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./context-81xqWZ8H.js";import"./Label-BbJ0t0io.js";import"./utils-CatxVoKl.js";import"./Hidden-YN9d6EVo.js";import"./IconX-Dl75Mnu2.js";import"./IconCheck-ClCsyRZ4.js";import"./Text-Bc5PmX1I.js";import"./browser-TJej2Zh2.js";import"./EmulatedBoldText-C5iTwKQF.js";import"./Text-BVGarVrb.js";import"./LoadingSpinner-qRqEZFCl.js";import"./ariaLive-DqXsnKMw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-D1_oWH-e.js";import"./Button-BKsEcO3C.js";import"./ProgressBar-D99M34jy.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKOrsKHI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOmL6f1-.js";import"./useFocus-BOo9d3Bd.js";import"./useFocusRing-D1LOVY8w.js";import"./useFocusable-Bm2s2zNQ.js";import"./IconCopy-DWMPTxRS.js";import"./Tooltip-B_tRSJH2.js";import"./OverlayArrow-CuoDJSSc.js";import"./useControlledState-DYZXiDwW.js";import"./react-children-utilities-Ctb9g8Q2.js";import"./Action-1KJHzV_0.js";import"./useStatic-BgApplVo.js";import"./getActionGroupSlot-5XNUJgam.js";import"./context-Hd2oMXi6.js";import"./dynamic-DrPvW6ki.js";import"./FieldDescription-DQzesUeO.js";import"./TranslationProvider-C2Eok7Ey.js";import"./IconCircleCheck-CcXE8MCq.js";import"./ContextualHelpTrigger-CkBjArsJ.js";import"./Popover-BDUzC1mt.js";import"./OverlayContextProvider-B1nyJ9fy.js";import"./Dialog-BFHdNGes.js";import"./RSPContexts-CBm4dMuh.js";import"./Collection-qqIe35E-.js";import"./CollectionBuilder-CM8I1Is1.js";import"./SelectionIndicator-BcqL5ZP5.js";import"./Separator-zU8KIdJB.js";import"./SelectionManager-Cew3fhRb.js";import"./useEvent-gpwnJALn.js";import"./useCollator-B3xP_FE7.js";import"./FocusScope-KuXCUz--.js";import"./VisuallyHidden-PBFdwu-V.js";import"./useOverlayController-DaWbouZp.js";import"./OverlayTrigger-Bg9bfH4M.js";import"./IconInfo-DGcA2CWR.js";import"./Heading-Dc4Eo12K.js";import"./Heading-CqTr37PS.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-Ch2X8LGy.js";import"./FieldError-olPwxTHW.js";import"./FieldError-CAnV5-By.js";import"./useControlledHostValueProps-PdtZ6vfj.js";import"./TextField-CZ_wzUuB.js";import"./Form-DGUlclkV.js";import"./Group-B7CCMhC-.js";import"./Input-C3vnVfPY.js";import"./useTextField-BQJ-1xWF.js";import"./useFormReset-D0pwxFN1.js";import"./useFormValidation-BLhEH38g.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
