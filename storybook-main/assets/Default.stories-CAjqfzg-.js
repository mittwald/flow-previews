import{r as h,j as r}from"./iframe-VTkEMv55.js";import{P as m}from"./PasswordCreationField-CftKHtN_.js";import{L as u}from"./Label-DwQEy05E.js";import{B as g}from"./Button-B9lvy9yg.js";import{n as C}from"./IconWarning-D408DR62.js";import{C as w}from"./CopyButton-DWD4l6k8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BSd9oB0r.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./clsx-B-dksMZM.js";import"./index-D_xlAiD1.js";import"./Action-DV-QBt8x.js";import"./context-CeKSAP77.js";import"./useStatic-OVy-y77u.js";import"./browser-_Qir5MkB.js";import"./getActionGroupSlot-Bve5nwK1.js";import"./FieldDescription-Ly1-BQrw.js";import"./Text-DlbRcSah.js";import"./EmulatedBoldText-BYZc_oy6.js";import"./Text-DB2BTtqM.js";import"./utils-DPKXOmt2.js";import"./Tooltip-DiAmgknq.js";import"./OverlayArrow-CyTNZBgT.js";import"./useFocus-JgmAf8eL.js";import"./ProgressBar-6h4xV7_x.js";import"./Label-BRaJlgoE.js";import"./Hidden-d-f11Ccs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C-geoXZs.js";import"./context-BVezW8pN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CxodNXny.js";import"./useFocusable-CzgiUJAu.js";import"./useFocusRing-BeV8_2Yg.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./ContextualHelpTrigger-Cbk0GKJc.js";import"./Popover-DMia4ia0.js";import"./useOverlayController-BPG62MgI.js";import"./OverlayContextProvider-CbIHT6gb.js";import"./Dialog-Qb8RaXBy.js";import"./Button-BKfoJr1S.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cb2XrqKT.js";import"./RSPContexts-wdKGWz4J.js";import"./Collection-xr8-TVrR.js";import"./CollectionBuilder-DhJAnH_i.js";import"./SelectionIndicator-CYSMLMH7.js";import"./Separator-BE0n3_oB.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./useCollator-BSc2XrT4.js";import"./FocusScope-CTtHroqL.js";import"./VisuallyHidden-DjbItwE4.js";import"./OverlayTrigger-DkpyXFVa.js";import"./Heading-DR27KtWq.js";import"./Heading-DNyZLCgr.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CicShoBh.js";import"./FieldError-B1IV40_q.js";import"./FieldError-CFdAmcbB.js";import"./useControlledHostValueProps-Bk08TKui.js";import"./TextField-4uISm1ZZ.js";import"./Form-BAg9n-JE.js";import"./Group-CdGLrnc5.js";import"./Input-B9tYQbF3.js";import"./useTextField-DjgRalQs.js";import"./useFormReset-DRm0nHwN.js";import"./useFormValidation-CNiU2G-p.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BWeGH-7c.js";import"./remote-pRnbNSGs.js";import"./react-children-utilities-39ckWr-3.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
