import{r as h,j as r}from"./iframe-BBX1MRm7.js";import{P as m}from"./PasswordCreationField-D9FRZQpM.js";import{L as u}from"./Label-rzq6PBW8.js";import{B as g}from"./Button-BqkPfHUM.js";import{m as C}from"./IconWarning-D1rdipwB.js";import{C as w}from"./CopyButton-B0yXoxxq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CGdtYp29.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./clsx-B-dksMZM.js";import"./index-CaVys9ny.js";import"./Action-NfMU4pZQ.js";import"./context-CbNZJEnz.js";import"./useStatic-eT6_SwdI.js";import"./browser-94--rh0I.js";import"./getActionGroupSlot-Cs4GvwwL.js";import"./FieldDescription-D0h9kvob.js";import"./Text-bZjB6G95.js";import"./EmulatedBoldText-B_ZrZeLf.js";import"./Text-Dx1GcOD_.js";import"./utils-BavrKavc.js";import"./Tooltip-BFeo_gBW.js";import"./OverlayArrow-CEy0Lp_c.js";import"./useFocus-CEW7w8cP.js";import"./ProgressBar-BlLvdox5.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CwE3wslu.js";import"./context-CZSumH6g.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bm9tRP_O.js";import"./useControlledState-hVcOsExM.js";import"./useFocusable-DP1OjJqD.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./ContextualHelpTrigger-DtsneTo-.js";import"./Popover-DfKYmgoY.js";import"./useOverlayController-UE1-I0TE.js";import"./OverlayContextProvider-CeB4MDIB.js";import"./Dialog-DxFT1h3e.js";import"./Button-BJia7Ggt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C19iJYYn.js";import"./RSPContexts-Bzvj4RyS.js";import"./Collection-KvAmq1BM.js";import"./CollectionBuilder-CT5wpjPQ.js";import"./SelectionIndicator-BhUr7H-C.js";import"./Separator-CBat6_46.js";import"./SelectionManager-BqxHDxhn.js";import"./useEvent-9YiOq-bW.js";import"./useCollator-BBRvdoV2.js";import"./FocusScope-geYyY5OG.js";import"./VisuallyHidden-B0NnPUX1.js";import"./OverlayTrigger-D5NXWXDN.js";import"./Heading-DWMQjpKC.js";import"./Heading-L9MMZJmE.js";import"./useFieldComponent-B_qWTKJx.js";import"./FieldError-DhG2ZYTr.js";import"./FieldError-C_UdMObt.js";import"./AlertText-BesKIlLk.js";import"./AlertIcon-Bzw_XkQ4.js";import"./useControlledHostValueProps-DKX7miYN.js";import"./TextField-B6jqJ0Dq.js";import"./Form-CFIny17O.js";import"./Group-C1xuy7HP.js";import"./Input-DVyLg-xr.js";import"./useTextField-Bwh7GfLW.js";import"./useFormReset--Sx8IrxJ.js";import"./useFormValidation-CjGCqCfM.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D7vBft_f.js";import"./remote-DQSNjr8v.js";import"./react-children-utilities-DZWshuLL.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
