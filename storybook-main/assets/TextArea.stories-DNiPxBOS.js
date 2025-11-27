import{j as r,r as F}from"./iframe-7BcSOkL1.js";import{b as p,u as d,F as l,t as j}from"./Form-XneFK107.js";import{L as o}from"./Label-1f6WodcS.js";import{R as h,S as x}from"./ResetButton-Ho5zA5gP.js";import{B as c}from"./Button-BCb61ouP.js";import{S as g,s as u}from"./Section-BM04QQ4S.js";import{A as b}from"./ActionGroup-FxuoPE1e.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-CijeBcVc.js";import"./index-nuYtCEEu.js";import"./dynamic-BRBd3S7h.js";import"./PropsContextProvider-T63dMOzs.js";import"./mergeRefs-O6Tz23YZ.js";import"./index-DFg9K6WW.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-mETPtdfy.js";import"./context-BxMgKMFE.js";import"./browser-DkuKIMCf.js";import"./utils-CnXd-itf.js";import"./ProgressBar-LVm02CMO.js";import"./Hidden-BaJxX0T2.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DFK7FPRm.js";import"./Text-sNy_JVUg.js";import"./EmulatedBoldText-KFps1Djg.js";import"./LoadingSpinner-CQRWUrve.js";import"./Button-BRvXO2c0.js";import"./useFocusRing-dBoRO-LN.js";import"./useFocusable-WK7F_Oar.js";import"./context-BY2qRpUu.js";import"./RSPContexts-VFAeT7fJ.js";import"./Collection-Nrq8gGX_.js";import"./CollectionBuilder-CIDh9Gu3.js";import"./SelectionIndicator-MGv3fhI5.js";import"./Separator-QlyzxrY4.js";import"./useStatic-DpF8IrGJ.js";import"./Accordion-BgHobUJE.js";import"./Alert-BQNPh5ec.js";import"./AlertIcon-sj9HDcTQ.js";import"./AlertBadge-BLLOUyvy.js";import"./Align-aNcJd3ZC.js";import"./Popover-BpKg5fzM.js";import"./OverlayTrigger-CbmE6C3-.js";import"./TableFooterRow-C9n4XIk3.js";import"./SkeletonText-Dy0ubcCb.js";import"./Avatar-BAV3j3y8.js";import"./AvatarStack-C6ZLwmar.js";import"./Badge-CnwbPEBD.js";import"./BigNumber-BcqybdoX.js";import"./Breadcrumb-ffW0rgiH.js";import"./Link-BKHlTtzt.js";import"./Heading-B3rrQZdA.js";import"./Legend-C9JtvmWd.js";import"./FileCardList-SRvmN5kn.js";import"./Image-hgYl8lpC.js";import"./Color-DwtLdQ8R.js";import"./Content-7kAZ-hbm.js";import"./ContextualHelpTrigger-BM0OhULK.js";import"./CounterBadge-D-e_4-L-.js";import"./DonutChart-C7Yxj0ZB.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEBLlaTe.js";import"./Header-C14rp7oJ.js";import"./Initials-DHljFpPT.js";import"./InlineCode-Cn06tSfu.js";import"./PopoverTrigger-CWou1-Xt.js";import"./Separator-BAEfiZhs.js";import"./Message-BYi7izf0.js";import"./MessageSeparator-l1p35Wzt.js";import"./NavigationGroup-C79N-DNU.js";import"./Notification-ClV3UBCJ.js";import"./NotificationProvider-CbODtqmP.js";import"./ProgressBar-BfuFFwrF.js";import"./Rating-BqxzbIze.js";import"./Skeleton-DuvA9UgZ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ur={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
