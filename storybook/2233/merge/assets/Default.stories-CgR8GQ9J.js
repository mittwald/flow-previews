import{r as h,j as r}from"./iframe-BUX4ZqHF.js";import{P as m}from"./PasswordCreationField-B2_X7jKN.js";import{L as u}from"./Label-kgnV-RXM.js";import{B as g}from"./Button-BQks1Fwk.js";import{m as C}from"./IconWarning-CQ3vdTUk.js";import{C as w}from"./CopyButton-C4gWRz4x.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C-JL21_Y.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./clsx-B-dksMZM.js";import"./index-BP0Kc6JB.js";import"./Action-BoSxlb-x.js";import"./context-DLe4PJj-.js";import"./useStatic-HiZWtrs6.js";import"./browser-D0x3Xdqp.js";import"./getActionGroupSlot-BiFvGjQj.js";import"./FieldDescription-DA8sVKuh.js";import"./Text-CCD2jWDE.js";import"./EmulatedBoldText-B3B0n9A6.js";import"./Text-BG7MORzn.js";import"./utils-D9iTInv6.js";import"./Tooltip-D3oHsFSE.js";import"./OverlayArrow-BDz2U1dX.js";import"./useFocus-CJRF0W0a.js";import"./ProgressBar-D_H4fWP7.js";import"./Label-I8DqILoy.js";import"./Hidden-CmsGFsNY.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVc7LJa4.js";import"./context-DdyqVFXP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CgyNYXn6.js";import"./useFocusable-CNxG1VTZ.js";import"./useFocusRing-LYLGckDp.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./ContextualHelpTrigger-CRL1lMTN.js";import"./Popover-Cjs7ZgFB.js";import"./useOverlayController-Di9xJg3a.js";import"./OverlayContextProvider-DK3zJnZ3.js";import"./Dialog-Ds9eM6L5.js";import"./Button-C7cH5OT2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqXzXpsh.js";import"./RSPContexts-CCyvn2fa.js";import"./Collection-J1EtBqZM.js";import"./CollectionBuilder-CBbbBxBU.js";import"./SelectionIndicator-C49t11ym.js";import"./Separator-DMMpEXgu.js";import"./SelectionManager-CFGiEO44.js";import"./useEvent-CCX_Td5o.js";import"./useCollator-j_WBsrii.js";import"./FocusScope-CKMlMtX2.js";import"./VisuallyHidden-CEZo4IbP.js";import"./OverlayTrigger-DrYjWhwY.js";import"./Heading-CZDnCkj5.js";import"./Heading-Dcla-H3e.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-L2xw4dQD.js";import"./FieldError-BcNphJCj.js";import"./FieldError-DwISghd1.js";import"./AlertText-C1IAOcr2.js";import"./AlertIcon-B17jmh6q.js";import"./useControlledHostValueProps-BQgkkibT.js";import"./TextField-nAzC6DdA.js";import"./Form-Dyklbi3v.js";import"./Group-DB1vfutX.js";import"./Input-Dt9-alkO.js";import"./useTextField-DrmwD8Vx.js";import"./useFormReset-DwYjTvSA.js";import"./useFormValidation-CdmTUY1H.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DAzOOzOm.js";import"./remote-CM65cF_Q.js";import"./react-children-utilities-CeybMn12.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
