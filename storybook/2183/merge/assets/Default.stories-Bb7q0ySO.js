import{r as h,j as r}from"./iframe-BoCc-iJU.js";import{L as u}from"./Label-DGwnCcrv.js";import{B as g}from"./Button-XooD-Xiy.js";import"./IconApp-C2RMdkv5.js";import{I as C}from"./IconDanger-CyJfzsCE.js";import{C as w}from"./CopyButton-BPUaykaF.js";import{P as m}from"./PasswordCreationField-6NFZXJ4d.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./index-CpJJlR3B.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./context-BrFrKL-P.js";import"./Label-E_BXoGJl.js";import"./utils-P0pc5_a9.js";import"./Hidden-7MHP_c1E.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./Text-CxsQklp2.js";import"./browser-BzlHG3zD.js";import"./EmulatedBoldText-CBFTpxXk.js";import"./Text-CwFr0z0b.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DSbtRD5R.js";import"./Button-D6UvikyC.js";import"./ProgressBar-2FpoVhjA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-msUyYt71.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./IconCopy-B6xWT1S-.js";import"./Tooltip-Bx14pN8e.js";import"./OverlayArrow-BflVffdz.js";import"./useControlledState-Bp_HlHxi.js";import"./react-children-utilities-YdobdVjq.js";import"./Action-CKhPUoRP.js";import"./useStatic-BIG45Iee.js";import"./getActionGroupSlot-B7nGnNh4.js";import"./context-xz8cKbOL.js";import"./dynamic-CBUiQ56u.js";import"./FieldDescription-DAwt_2_X.js";import"./TranslationProvider-DyeZaFCS.js";import"./IconCircleCheck-BMW89HOF.js";import"./ContextualHelpTrigger-Dz4BHHHd.js";import"./Popover-4GpCHo5o.js";import"./OverlayContextProvider-CAxGx9pi.js";import"./Dialog-CZPzdPg7.js";import"./RSPContexts-ZqX2hjEE.js";import"./Collection-CTIB5Yac.js";import"./CollectionBuilder-pq_KYGFA.js";import"./SelectionIndicator-DXYS_YB1.js";import"./Separator-MSKztmUd.js";import"./SelectionManager-gKDO3ABG.js";import"./useEvent-2MJ1vmf8.js";import"./useCollator-8xA0jmsd.js";import"./FocusScope-DAKoy3Tt.js";import"./VisuallyHidden-Dalv-eS5.js";import"./useOverlayController--iCs4C_D.js";import"./OverlayTrigger-BZeciITt.js";import"./IconInfo-Dl8EXL_5.js";import"./Heading-OdXvBm6_.js";import"./Heading-YPCfOeK8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BP-lIfvD.js";import"./FieldError-gHUqbDM9.js";import"./FieldError-Cv1yZmyj.js";import"./useControlledHostValueProps-Cdc0IVz3.js";import"./TextField-DZWBFePt.js";import"./Form-AyX8lm4h.js";import"./Group-DUY-xJc3.js";import"./Input-BVdlr_HZ.js";import"./useTextField-Zsr4se75.js";import"./useFormReset-Bkd1XrYX.js";import"./useFormValidation-DSNLWRBM.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
