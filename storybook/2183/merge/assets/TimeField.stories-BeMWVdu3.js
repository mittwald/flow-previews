import{j as r,r as f}from"./iframe-CLIUsYfM.js";import{b as a,u as p,F as d,t as j}from"./Form-C6ooc4fa.js";import{L as t}from"./Label-BWOWtuZ4.js";import{R as u,S as F}from"./ResetButton-BwMe6ogN.js";import{B as l}from"./Button-C446Wk0s.js";import{S as b,s as c}from"./Section-Dkz1Z9Gc.js";import{A as E}from"./ActionGroup-CCnftHDn.js";import{as as S,ar as o,g as T}from"./TimeField-CTW-J0Nw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTR_FaAn.js";import"./PropsContextProvider-BEk6n_vi.js";import"./mergeRefs-CJFCUUg6.js";import"./index-CJ3flHUa.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Aw7TOpbQ.js";import"./context-CpkmeH1J.js";import"./browser-D_3azSPf.js";import"./utils-Duab__sA.js";import"./ProgressBar-BbmNBh-t.js";import"./Hidden-BSEskgfC.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DzQ9tJI9.js";import"./Text-D2QQWQR9.js";import"./EmulatedBoldText-BUnoqqKP.js";import"./LoadingSpinner-CW57px9k.js";import"./Button-B2kdw2yg.js";import"./useFocusRing-D2OmgzqR.js";import"./useFocusable-C0n6CZKF.js";import"./context-C4TkkEyw.js";import"./RSPContexts-DWZje-yD.js";import"./Collection-B_Esl1Ys.js";import"./CollectionBuilder-szrRscFH.js";import"./SelectionIndicator-CU9wCljV.js";import"./Separator-BM0WI_Oi.js";import"./useStatic-BzUzXPh5.js";import"./Accordion-RPWmaaUv.js";import"./Alert-BpD9EZoZ.js";import"./AlertIcon-NB0p5Yms.js";import"./AlertBadge-BvA3n6JX.js";import"./Align-DgVh2Xmx.js";import"./Popover-CVmaaSmy.js";import"./OverlayTrigger-e2PcLUgP.js";import"./TableFooterRow-C-QuWcfV.js";import"./SkeletonText-CVzDSYQ1.js";import"./Avatar-h_Ki0CZ6.js";import"./AvatarStack-Gf9f-fzG.js";import"./Badge-wa7Q7exv.js";import"./BigNumber-2Pst3keg.js";import"./Breadcrumb-DyIGAk3l.js";import"./Link-D5lmNW05.js";import"./Heading-CKk-OBgv.js";import"./Legend-CZYYogSE.js";import"./FileCardList-Cv3K9cZ_.js";import"./Image-BPJGpCrO.js";import"./Color-BQDcjbxD.js";import"./Content-DCrZtXyx.js";import"./ContextualHelpTrigger-B6boF4gV.js";import"./CounterBadge-DHmpw-7k.js";import"./DonutChart-BpGWb-78.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGKrdI05.js";import"./Header-DwUPlhMJ.js";import"./Initials-Bx2ekm4G.js";import"./InlineCode-7D8-c4AY.js";import"./PopoverTrigger-pI4ezi-o.js";import"./Separator-BIDSmay0.js";import"./Message-DAsbqRnX.js";import"./MessageSeparator-BIyH-kjr.js";import"./NavigationGroup-BdpT5He2.js";import"./Notification-B6oOrQsf.js";import"./NotificationProvider-D7dh6xuQ.js";import"./ProgressBar-CpJVreoe.js";import"./Rating-cf68lLg4.js";import"./Skeleton-C6zvhWXN.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),B(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
