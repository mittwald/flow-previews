import{r as h,j as r}from"./iframe-BECefjM4.js";import{P as m}from"./PasswordCreationField-Bvx9DEU2.js";import{L as u}from"./Label-CVvbUjW4.js";import{B as g}from"./Button-DAjxqCNq.js";import{m as C}from"./IconWarning-CvVn1QxU.js";import{C as w}from"./CopyButton-DlERDM35.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DJ76M0aZ.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./clsx-B-dksMZM.js";import"./index-BGQ8HYEh.js";import"./ActionBatch-DZRJQ0Jr.js";import"./context-mnhTcWwX.js";import"./useStatic-Bcu2QKMg.js";import"./browser-C9O3Z26r.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./FieldDescription-BgERXXFv.js";import"./Text-lZ2PbEqF.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./Text-IrzRAzMs.js";import"./utils-bqUpXLHN.js";import"./Tooltip-DNSKtrw5.js";import"./OverlayArrow-C6gZr2kK.js";import"./useFocus-CIRpkrn7.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d0BVjP-J.js";import"./context-iJTSqlsV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DIpVtkGc.js";import"./useControlledState-2Tdfwl5E.js";import"./useFocusable-DTBBh1VF.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./ContextualHelpTrigger-uSPRjr5o.js";import"./Popover-BRqnQ0aL.js";import"./useOverlayController-7vnF_84u.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./Dialog-BvIZXNXz.js";import"./Button-CUoWVSdf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-427CihAL.js";import"./RSPContexts-C61Ijawi.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./SelectionIndicator-B2vofSgQ.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./useCollator-r-PMcESO.js";import"./FocusScope-CjCXh94P.js";import"./VisuallyHidden-GWiC-wFe.js";import"./OverlayTrigger-Cg8XmR5v.js";import"./Heading-CqTYuCig.js";import"./Heading-Brz3JFJA.js";import"./useFieldComponent-B5iNz-5m.js";import"./FieldError-B21MiKyw.js";import"./FieldError-8R1qsZQS.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";import"./useControlledHostValueProps-Del_bpsM.js";import"./TextField-Bz70SPLT.js";import"./Form-FdseNRzi.js";import"./Group-BHV0qvDi.js";import"./Input-BXsG1hsf.js";import"./useTextField-CmkUv5OG.js";import"./useFormReset-CDquwT_C.js";import"./useFormValidation-I8j-SbQp.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DXxHNnrx.js";import"./remote-CqI4D0us.js";import"./react-children-utilities-C1152UKo.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
