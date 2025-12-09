import{j as r,r as j}from"./iframe-CLIUsYfM.js";import{b as a,u as d,F as p,t as b}from"./Form-C6ooc4fa.js";import{L as t}from"./Label-BWOWtuZ4.js";import{R as f,S as h}from"./ResetButton-BwMe6ogN.js";import{B as u}from"./Button-C446Wk0s.js";import{S as E,s as c}from"./Section-Dkz1Z9Gc.js";import{A as S}from"./ActionGroup-CCnftHDn.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-CTW-J0Nw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTR_FaAn.js";import"./PropsContextProvider-BEk6n_vi.js";import"./mergeRefs-CJFCUUg6.js";import"./index-CJ3flHUa.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Aw7TOpbQ.js";import"./context-CpkmeH1J.js";import"./browser-D_3azSPf.js";import"./utils-Duab__sA.js";import"./ProgressBar-BbmNBh-t.js";import"./Hidden-BSEskgfC.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DzQ9tJI9.js";import"./Text-D2QQWQR9.js";import"./EmulatedBoldText-BUnoqqKP.js";import"./LoadingSpinner-CW57px9k.js";import"./Button-B2kdw2yg.js";import"./useFocusRing-D2OmgzqR.js";import"./useFocusable-C0n6CZKF.js";import"./context-C4TkkEyw.js";import"./RSPContexts-DWZje-yD.js";import"./Collection-B_Esl1Ys.js";import"./CollectionBuilder-szrRscFH.js";import"./SelectionIndicator-CU9wCljV.js";import"./Separator-BM0WI_Oi.js";import"./useStatic-BzUzXPh5.js";import"./Accordion-RPWmaaUv.js";import"./Alert-BpD9EZoZ.js";import"./AlertIcon-NB0p5Yms.js";import"./AlertBadge-BvA3n6JX.js";import"./Align-DgVh2Xmx.js";import"./Popover-CVmaaSmy.js";import"./OverlayTrigger-e2PcLUgP.js";import"./TableFooterRow-C-QuWcfV.js";import"./SkeletonText-CVzDSYQ1.js";import"./Avatar-h_Ki0CZ6.js";import"./AvatarStack-Gf9f-fzG.js";import"./Badge-wa7Q7exv.js";import"./BigNumber-2Pst3keg.js";import"./Breadcrumb-DyIGAk3l.js";import"./Link-D5lmNW05.js";import"./Heading-CKk-OBgv.js";import"./Legend-CZYYogSE.js";import"./FileCardList-Cv3K9cZ_.js";import"./Image-BPJGpCrO.js";import"./Color-BQDcjbxD.js";import"./Content-DCrZtXyx.js";import"./ContextualHelpTrigger-B6boF4gV.js";import"./CounterBadge-DHmpw-7k.js";import"./DonutChart-BpGWb-78.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGKrdI05.js";import"./Header-DwUPlhMJ.js";import"./Initials-Bx2ekm4G.js";import"./InlineCode-7D8-c4AY.js";import"./PopoverTrigger-pI4ezi-o.js";import"./Separator-BIDSmay0.js";import"./Message-DAsbqRnX.js";import"./MessageSeparator-BIyH-kjr.js";import"./NavigationGroup-BdpT5He2.js";import"./Notification-B6oOrQsf.js";import"./NotificationProvider-D7dh6xuQ.js";import"./ProgressBar-CpJVreoe.js";import"./Rating-cf68lLg4.js";import"./Skeleton-C6zvhWXN.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Ur as default};
