import{j as r,r as F}from"./iframe-DOEJXvGk.js";import{b as p,u as d,F as l,t as j}from"./Form-UjzAV8c2.js";import{L as o}from"./Label-CHbDmU_0.js";import{R as h,S as x}from"./ResetButton-BFU_0WFQ.js";import{B as c}from"./Button-BYGUtkd2.js";import{S as g,s as u}from"./Section-BqMXvD2Y.js";import{A as b}from"./ActionGroup-ZPTq9sUD.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-DzkbFTLr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-yU3-i23D.js";import"./PropsContextProvider-Ccrn_JGz.js";import"./mergeRefs-BUxfbHrI.js";import"./index-cXd2_Nql.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-sTlF3R26.js";import"./context-fI8vs3af.js";import"./browser-DH30uIAM.js";import"./utils-DdqmmzJ9.js";import"./ProgressBar-DdcYoj3j.js";import"./Hidden-BmzTuRrq.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Ci_z427u.js";import"./Text-D2s12SBY.js";import"./EmulatedBoldText-8EHop2RJ.js";import"./LoadingSpinner-C3IBuXDG.js";import"./Button-DlVwZwD1.js";import"./useFocusRing-8zbAs-ap.js";import"./useFocusable-DGnKZu4u.js";import"./context-ClAoL54q.js";import"./RSPContexts-bWk5q8vU.js";import"./Collection-Dx7U-2xV.js";import"./CollectionBuilder-CplTTDmS.js";import"./SelectionIndicator-D1mCVvRy.js";import"./Separator-vJb5vpxT.js";import"./useStatic-DU36eiHs.js";import"./Accordion-DrpzS9Tu.js";import"./Alert-Dz6Txycm.js";import"./AlertIcon-DeM3Y1y8.js";import"./AlertBadge-F2NWY7KX.js";import"./Align-Wr8YCtA6.js";import"./Popover-DVCzA5rA.js";import"./OverlayTrigger-DmCvlVUl.js";import"./TableFooterRow-BqdPD20e.js";import"./SkeletonText-DM-BrczZ.js";import"./Avatar-AfEQ8aJ7.js";import"./AvatarStack-PbGcOMzO.js";import"./Badge-CoMRyfRW.js";import"./BigNumber-BuS1c3m1.js";import"./Breadcrumb-CGjUpZnK.js";import"./Link-BnTqUE_d.js";import"./Heading-B55jlt0S.js";import"./Legend-BR0OJkN5.js";import"./FileCardList-BfoXr3eL.js";import"./Image-Bzob2sy0.js";import"./Color-C7W8ONo_.js";import"./Content-BvjUUUqh.js";import"./ContextualHelpTrigger-SA4yZZHq.js";import"./CounterBadge-Bq8ZiO3w.js";import"./DonutChart-D4hkpW0U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGYJy9GV.js";import"./Header-DpcvefSw.js";import"./Initials-Bo59F16W.js";import"./InlineCode-D_4JxDia.js";import"./PopoverTrigger-BL7IIJoh.js";import"./Separator-BKXlt3AK.js";import"./Message-DDZrbHos.js";import"./MessageSeparator-BlAKvn2O.js";import"./NavigationGroup-b6mYgSHm.js";import"./Notification-Btu7hZt1.js";import"./NotificationProvider-QjMkPqGI.js";import"./ProgressBar-BZO70kmk.js";import"./Rating-CzHquKAT.js";import"./Skeleton-DpeTzzxW.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ur={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
