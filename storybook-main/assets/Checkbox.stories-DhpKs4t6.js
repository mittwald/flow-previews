import{j as r,r as x}from"./iframe-DN0fTWGV.js";import{b as p,u as c,F as a,t as F}from"./Form-Cd1EVhgg.js";import{R as l,S as h}from"./ResetButton-D9YSKTTf.js";import{B as d}from"./Button-uApu6GnY.js";import{S as j,s as u}from"./Section-Bae4yUtt.js";import{A as b}from"./ActionGroup-D2BuDihe.js";import{s as t,g as E}from"./TimeField-DXpzyGzy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bg-k1EYj.js";import"./PropsContextProvider-B4BWOGik.js";import"./mergeRefs-aFji3K89.js";import"./index-C-NDeTtD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-yteDxoWO.js";import"./context-_fNSffOv.js";import"./browser-BG2zS4gf.js";import"./utils-KHZtdcQs.js";import"./IconWarning-Cuf61xud.js";import"./Text-CLTzTYkM.js";import"./EmulatedBoldText-CdlTcGoA.js";import"./LoadingSpinner-CRqVu2d-.js";import"./Button-BqbeFKAl.js";import"./ProgressBar-CMyS42Dg.js";import"./Hidden-CpMgfJZp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bi-c5lNH.js";import"./useFocusable-DvSUTL0j.js";import"./context-DUBN3HgP.js";import"./RSPContexts-CXdzH5Rq.js";import"./Collection-DPICVRVL.js";import"./CollectionBuilder-7GVzVquf.js";import"./SelectionIndicator-ChEaB0zR.js";import"./Separator-CbRW2pX1.js";import"./useStatic-DA5kar0v.js";import"./Accordion-D7yLcWFC.js";import"./Alert-Cpd-iuOs.js";import"./AlertIcon-D_t13U1R.js";import"./AlertBadge-Hr_oCvhM.js";import"./Align-DuJPe5gd.js";import"./Popover-oDqr7Nfr.js";import"./OverlayTrigger-BxicfPZ1.js";import"./TableFooterRow-RSgQDu1E.js";import"./SkeletonText-Fk8yZXsj.js";import"./Avatar-CjhgWUJl.js";import"./AvatarStack-DiMUC231.js";import"./Badge-B4N4pUOv.js";import"./BigNumber-Yl5a57NA.js";import"./Breadcrumb-YEGx-rGQ.js";import"./Link-DbZd-iVz.js";import"./Heading-DYEbRjlj.js";import"./Legend-DiZllTBb.js";import"./FileCardList-CA73fY06.js";import"./Image-ncn48exK.js";import"./Color-Chwd73Rj.js";import"./Content-Dl1qh6D4.js";import"./Label-C802sjtx.js";import"./ContextualHelpTrigger-CRucrJit.js";import"./CounterBadge-D53nik_y.js";import"./DonutChart-BUm4qe-w.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-9SL9RU8e.js";import"./Header-DvHWDufz.js";import"./Initials-BnQ1LCtT.js";import"./InlineCode-ByOVybOd.js";import"./PopoverTrigger-DKN0Zj2F.js";import"./Separator-2AMI3M16.js";import"./Message-CpojsH-c.js";import"./MessageSeparator-B3ufFzYX.js";import"./NavigationGroup-CQIW4w3C.js";import"./Notification-Bk6cogWg.js";import"./NotificationProvider-Bs-kRf48.js";import"./ProgressBar-iA_T9LR7.js";import"./Rating-DCK456Gd.js";import"./Skeleton-g2Cf08Rc.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
