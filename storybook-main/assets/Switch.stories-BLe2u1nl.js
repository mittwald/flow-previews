import{j as r,r as F}from"./iframe-DN0fTWGV.js";import{b as n,u as p,F as a,t as S}from"./Form-Cd1EVhgg.js";import{R as u,S as l}from"./ResetButton-D9YSKTTf.js";import{B as d}from"./Button-uApu6GnY.js";import{S as x,s as c}from"./Section-Bae4yUtt.js";import{A as E}from"./ActionGroup-D2BuDihe.js";import{S as s,g as j}from"./TimeField-DXpzyGzy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bg-k1EYj.js";import"./PropsContextProvider-B4BWOGik.js";import"./mergeRefs-aFji3K89.js";import"./index-C-NDeTtD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-yteDxoWO.js";import"./context-_fNSffOv.js";import"./browser-BG2zS4gf.js";import"./utils-KHZtdcQs.js";import"./IconWarning-Cuf61xud.js";import"./Text-CLTzTYkM.js";import"./EmulatedBoldText-CdlTcGoA.js";import"./LoadingSpinner-CRqVu2d-.js";import"./Button-BqbeFKAl.js";import"./ProgressBar-CMyS42Dg.js";import"./Hidden-CpMgfJZp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bi-c5lNH.js";import"./useFocusable-DvSUTL0j.js";import"./context-DUBN3HgP.js";import"./RSPContexts-CXdzH5Rq.js";import"./Collection-DPICVRVL.js";import"./CollectionBuilder-7GVzVquf.js";import"./SelectionIndicator-ChEaB0zR.js";import"./Separator-CbRW2pX1.js";import"./useStatic-DA5kar0v.js";import"./Accordion-D7yLcWFC.js";import"./Alert-Cpd-iuOs.js";import"./AlertIcon-D_t13U1R.js";import"./AlertBadge-Hr_oCvhM.js";import"./Align-DuJPe5gd.js";import"./Popover-oDqr7Nfr.js";import"./OverlayTrigger-BxicfPZ1.js";import"./TableFooterRow-RSgQDu1E.js";import"./SkeletonText-Fk8yZXsj.js";import"./Avatar-CjhgWUJl.js";import"./AvatarStack-DiMUC231.js";import"./Badge-B4N4pUOv.js";import"./BigNumber-Yl5a57NA.js";import"./Breadcrumb-YEGx-rGQ.js";import"./Link-DbZd-iVz.js";import"./Heading-DYEbRjlj.js";import"./Legend-DiZllTBb.js";import"./FileCardList-CA73fY06.js";import"./Image-ncn48exK.js";import"./Color-Chwd73Rj.js";import"./Content-Dl1qh6D4.js";import"./Label-C802sjtx.js";import"./ContextualHelpTrigger-CRucrJit.js";import"./CounterBadge-D53nik_y.js";import"./DonutChart-BUm4qe-w.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-9SL9RU8e.js";import"./Header-DvHWDufz.js";import"./Initials-BnQ1LCtT.js";import"./InlineCode-ByOVybOd.js";import"./PopoverTrigger-DKN0Zj2F.js";import"./Separator-2AMI3M16.js";import"./Message-CpojsH-c.js";import"./MessageSeparator-B3ufFzYX.js";import"./NavigationGroup-CQIW4w3C.js";import"./Notification-Bk6cogWg.js";import"./NotificationProvider-Bs-kRf48.js";import"./ProgressBar-iA_T9LR7.js";import"./Rating-DCK456Gd.js";import"./Skeleton-g2Cf08Rc.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Mr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Nr as __namedExportsOrder,Mr as default};
