import{r as h,j as r}from"./iframe-CFLRrV9_.js";import{P as m}from"./PasswordCreationField-DUCsbjRS.js";import{L as u}from"./Label-DDweLn-B.js";import{B as g}from"./Button-C6DtPvCF.js";import{m as C}from"./IconWarning-DnD-gw4t.js";import{C as w}from"./CopyButton-BkNCZEOw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfUvB6Rc.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./clsx-B-dksMZM.js";import"./index-24zjo-Kb.js";import"./Action--cE17EXA.js";import"./context-CslVSGqZ.js";import"./useStatic-Bo06Q_Yy.js";import"./browser-6ZyX-izP.js";import"./getActionGroupSlot-DBTwflYW.js";import"./FieldDescription-B2DMaMC5.js";import"./Text-DEmvrg4f.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./Text-DCjLwlBM.js";import"./utils-9RAZgTTl.js";import"./Tooltip-CAFfIsZ1.js";import"./OverlayArrow-67PBRhfH.js";import"./useFocus-DD1T6bJ4.js";import"./ProgressBar-CAwZsQPk.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C42gu-3e.js";import"./context-bb3yZDI9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DRVonXEI.js";import"./useControlledState-BS0DqA_d.js";import"./useFocusable-CQU1ZNCF.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./ContextualHelpTrigger-CI86bqxB.js";import"./Popover-Dnnhcr9k.js";import"./useOverlayController-yVCc_ngp.js";import"./OverlayContextProvider-0OCnXaQU.js";import"./Dialog-CsaxLO_h.js";import"./Button-CQ9x5Ymh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-LdOf-GEu.js";import"./RSPContexts-CrNZITQd.js";import"./Collection-CpUB07wh.js";import"./CollectionBuilder-CcY1vtmm.js";import"./SelectionIndicator-DLBwj5hd.js";import"./Separator-Brhc3eje.js";import"./SelectionManager-rBQZeyz7.js";import"./useEvent-C2NY4fdQ.js";import"./useCollator-BuvCZz5o.js";import"./FocusScope-To3K9I_L.js";import"./VisuallyHidden-DH38u7VP.js";import"./OverlayTrigger-C2fP4BlG.js";import"./Heading-1o2wH2IP.js";import"./Heading-CD-g7ugM.js";import"./useFieldComponent-CywuRKF5.js";import"./FieldError-BY_h0DzJ.js";import"./FieldError-D073kW89.js";import"./AlertText-BwXe_CUh.js";import"./AlertIcon-Dk-GLzZT.js";import"./useControlledHostValueProps-BmnwSt4u.js";import"./TextField-CFizmnK8.js";import"./Form-HxVpGshA.js";import"./Group-Cb05qa-m.js";import"./Input-QBFM7ItQ.js";import"./useTextField-DIM1ridr.js";import"./useFormReset-BcY6_uyQ.js";import"./useFormValidation-Cm_zD3mV.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D6sn6dKn.js";import"./remote-BB1QWzBE.js";import"./react-children-utilities-DoEVTAP3.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
