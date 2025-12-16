import{r as h,j as r}from"./iframe-VGYf9uSR.js";import{P as m}from"./PasswordCreationField-CyuF9Xxg.js";import{L as u}from"./Label--ix077tG.js";import{B as g}from"./Button-C33JxfbF.js";import"./IconChevronDown-Dgoj3MhV.js";import{I as C}from"./IconDanger-B5Kx1O1H.js";import{C as w}from"./CopyButton-D_DVoH_A.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXsOFxWd.js";import"./PropsContextProvider-BJkjz94f.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./clsx-B-dksMZM.js";import"./TranslationProvider-Ck575ucT.js";import"./OverlayContextProvider-Tja93TmG.js";import"./context-DPoGZDoo.js";import"./Button-DHkv2oj9.js";import"./utils-BB4afhje.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CKMs_ua8.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./browser-BY7YAvyX.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./useStatic-DRLyxIeE.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Activity-CX_biUm5.js";import"./Text-CGbJaU4z.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Tooltip-B0KQrW8-.js";import"./Action-BU572vpz.js";import"./getActionGroupSlot-BnsqQCvq.js";import"./IconCircleCheck--RtJ5U3q.js";import"./ContextualHelpTrigger-FKO7SBSr.js";import"./Popover-eACQVYhK.js";import"./OverlayTrigger-Cn-zOQel.js";import"./IconInfo-poMXff9G.js";import"./Heading-D2Jr2YRs.js";import"./Heading-CvNhLKAf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DiUYLu0s.js";import"./FieldError-CLzXjLUN.js";import"./FieldError-AWx0XaHn.js";import"./useControlledHostValueProps-zg0QpAjj.js";import"./TextField-C4mpb9SM.js";import"./Form-CEBTvUmY.js";import"./Group-DDpm-w1G.js";import"./Input-DAGTqZv7.js";import"./useTextField-3t2wWbTv.js";import"./useFormReset-D2LFGRel.js";import"./useFormValidation-DNcRsa8m.js";import"./Label.module-lamhxTiw.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./remote-B1HlY5fu.js";import"./IconCopy-CQgTMz94.js";import"./react-children-utilities-DqGW3XUW.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const yr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,yr as __namedExportsOrder,qr as default};
