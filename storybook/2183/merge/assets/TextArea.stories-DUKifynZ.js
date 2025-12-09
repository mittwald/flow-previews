import{j as r,r as F}from"./iframe-CLIUsYfM.js";import{b as p,u as d,F as l,t as j}from"./Form-C6ooc4fa.js";import{L as o}from"./Label-BWOWtuZ4.js";import{R as h,S as x}from"./ResetButton-BwMe6ogN.js";import{B as c}from"./Button-C446Wk0s.js";import{S as g,s as u}from"./Section-Dkz1Z9Gc.js";import{A as b}from"./ActionGroup-CCnftHDn.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-CTW-J0Nw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTR_FaAn.js";import"./PropsContextProvider-BEk6n_vi.js";import"./mergeRefs-CJFCUUg6.js";import"./index-CJ3flHUa.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Aw7TOpbQ.js";import"./context-CpkmeH1J.js";import"./browser-D_3azSPf.js";import"./utils-Duab__sA.js";import"./ProgressBar-BbmNBh-t.js";import"./Hidden-BSEskgfC.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DzQ9tJI9.js";import"./Text-D2QQWQR9.js";import"./EmulatedBoldText-BUnoqqKP.js";import"./LoadingSpinner-CW57px9k.js";import"./Button-B2kdw2yg.js";import"./useFocusRing-D2OmgzqR.js";import"./useFocusable-C0n6CZKF.js";import"./context-C4TkkEyw.js";import"./RSPContexts-DWZje-yD.js";import"./Collection-B_Esl1Ys.js";import"./CollectionBuilder-szrRscFH.js";import"./SelectionIndicator-CU9wCljV.js";import"./Separator-BM0WI_Oi.js";import"./useStatic-BzUzXPh5.js";import"./Accordion-RPWmaaUv.js";import"./Alert-BpD9EZoZ.js";import"./AlertIcon-NB0p5Yms.js";import"./AlertBadge-BvA3n6JX.js";import"./Align-DgVh2Xmx.js";import"./Popover-CVmaaSmy.js";import"./OverlayTrigger-e2PcLUgP.js";import"./TableFooterRow-C-QuWcfV.js";import"./SkeletonText-CVzDSYQ1.js";import"./Avatar-h_Ki0CZ6.js";import"./AvatarStack-Gf9f-fzG.js";import"./Badge-wa7Q7exv.js";import"./BigNumber-2Pst3keg.js";import"./Breadcrumb-DyIGAk3l.js";import"./Link-D5lmNW05.js";import"./Heading-CKk-OBgv.js";import"./Legend-CZYYogSE.js";import"./FileCardList-Cv3K9cZ_.js";import"./Image-BPJGpCrO.js";import"./Color-BQDcjbxD.js";import"./Content-DCrZtXyx.js";import"./ContextualHelpTrigger-B6boF4gV.js";import"./CounterBadge-DHmpw-7k.js";import"./DonutChart-BpGWb-78.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGKrdI05.js";import"./Header-DwUPlhMJ.js";import"./Initials-Bx2ekm4G.js";import"./InlineCode-7D8-c4AY.js";import"./PopoverTrigger-pI4ezi-o.js";import"./Separator-BIDSmay0.js";import"./Message-DAsbqRnX.js";import"./MessageSeparator-BIyH-kjr.js";import"./NavigationGroup-BdpT5He2.js";import"./Notification-B6oOrQsf.js";import"./NotificationProvider-D7dh6xuQ.js";import"./ProgressBar-CpJVreoe.js";import"./Rating-cf68lLg4.js";import"./Skeleton-C6zvhWXN.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ur={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Yr as __namedExportsOrder,Ur as default};
