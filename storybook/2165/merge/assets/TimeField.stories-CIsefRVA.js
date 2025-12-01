import{j as r,r as f}from"./iframe-B7t5ja2b.js";import{b as a,u as p,F as d,t as j}from"./Form-C3pD7NJq.js";import{L as t}from"./Label-Db92ClKs.js";import{R as u,S as F}from"./ResetButton-Dw3e6HTx.js";import{B as l}from"./Button-BoOZwgfJ.js";import{S as b,s as c}from"./Section-oj7pNCYW.js";import{A as E}from"./ActionGroup-X0GeQX8f.js";import{as as S,ar as o,g as T}from"./TimeField-DU2gwGxd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DFqFR_25.js";import"./PropsContextProvider-DYQFvX9W.js";import"./mergeRefs-CZ0PXAOw.js";import"./index-0JV4jXfB.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BbtlMh8_.js";import"./context-DT7PsWv1.js";import"./browser-Dz7UytJe.js";import"./utils-DDfw_94E.js";import"./ProgressBar-CHM1Xifb.js";import"./Hidden-BQUVCBE1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DPxPg2Ca.js";import"./Text-CDnJtWF_.js";import"./EmulatedBoldText-56hmy21w.js";import"./LoadingSpinner-CmbUgNIV.js";import"./Button-B-5trTj2.js";import"./useFocusRing-6FEqbhUJ.js";import"./useFocusable-CX5magUq.js";import"./context-XJw--O2B.js";import"./RSPContexts-BRH8-qft.js";import"./Collection-DAazmHys.js";import"./CollectionBuilder-CJZxBA1k.js";import"./SelectionIndicator-BZI_ZwZN.js";import"./Separator-BYhTCqx2.js";import"./useStatic-BJbQzT7g.js";import"./Accordion-CTUgpZ-B.js";import"./Alert-BcLBdkq5.js";import"./AlertIcon-Ccz2YQls.js";import"./AlertBadge-DzfN4yVX.js";import"./Align-CqoAJI6M.js";import"./Popover-BzzsvlUu.js";import"./OverlayTrigger-CQXiz3lB.js";import"./TableFooterRow-BlQ2sKAu.js";import"./SkeletonText-EnN-tyvd.js";import"./Avatar-BoT--Swq.js";import"./AvatarStack-D7dF8Abq.js";import"./Badge-BODqGCzs.js";import"./BigNumber-CaOlSiXS.js";import"./Breadcrumb-kRVQ0P47.js";import"./Link-Cz7JnS5t.js";import"./Heading-DEtNPCJN.js";import"./Legend-Cg9gjTEr.js";import"./FileCardList-CvtUHugH.js";import"./Image-C1Z_Jrqw.js";import"./Color-QRfHlKIC.js";import"./Content-B7myGA-g.js";import"./ContextualHelpTrigger-DvoCzQUP.js";import"./CounterBadge-i2riKAFy.js";import"./DonutChart-B74BzGpv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-_D41FmY-.js";import"./Header-DRQSlscy.js";import"./Initials-BLqXYT9A.js";import"./InlineCode-DpgdCcoV.js";import"./PopoverTrigger-BZs4Q1Hp.js";import"./Separator-Yorp4CJm.js";import"./Message-DM93Jn4g.js";import"./MessageSeparator--4DDPHgg.js";import"./NavigationGroup-k0vE3zib.js";import"./Notification-DFIYUGUC.js";import"./NotificationProvider-BYTR-0ZM.js";import"./ProgressBar-BO_vS1l4.js";import"./Rating-CikA--0V.js";import"./Skeleton-CRxBQiHe.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),B(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
