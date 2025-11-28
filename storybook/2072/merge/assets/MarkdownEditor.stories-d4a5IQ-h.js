import{j as r,r as x}from"./iframe-DOEJXvGk.js";import{b as m,u as a,F as p,t as E}from"./Form-UjzAV8c2.js";import{L as s}from"./Label-CHbDmU_0.js";import{R as u,S as c}from"./ResetButton-BFU_0WFQ.js";import{B as l}from"./Button-BYGUtkd2.js";import{S as j,s as d}from"./Section-BqMXvD2Y.js";import{A as b}from"./ActionGroup-ZPTq9sUD.js";import{r as n,g}from"./TimeField-DzkbFTLr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-yU3-i23D.js";import"./PropsContextProvider-Ccrn_JGz.js";import"./mergeRefs-BUxfbHrI.js";import"./index-cXd2_Nql.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-sTlF3R26.js";import"./context-fI8vs3af.js";import"./browser-DH30uIAM.js";import"./utils-DdqmmzJ9.js";import"./ProgressBar-DdcYoj3j.js";import"./Hidden-BmzTuRrq.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Ci_z427u.js";import"./Text-D2s12SBY.js";import"./EmulatedBoldText-8EHop2RJ.js";import"./LoadingSpinner-C3IBuXDG.js";import"./Button-DlVwZwD1.js";import"./useFocusRing-8zbAs-ap.js";import"./useFocusable-DGnKZu4u.js";import"./context-ClAoL54q.js";import"./RSPContexts-bWk5q8vU.js";import"./Collection-Dx7U-2xV.js";import"./CollectionBuilder-CplTTDmS.js";import"./SelectionIndicator-D1mCVvRy.js";import"./Separator-vJb5vpxT.js";import"./useStatic-DU36eiHs.js";import"./Accordion-DrpzS9Tu.js";import"./Alert-Dz6Txycm.js";import"./AlertIcon-DeM3Y1y8.js";import"./AlertBadge-F2NWY7KX.js";import"./Align-Wr8YCtA6.js";import"./Popover-DVCzA5rA.js";import"./OverlayTrigger-DmCvlVUl.js";import"./TableFooterRow-BqdPD20e.js";import"./SkeletonText-DM-BrczZ.js";import"./Avatar-AfEQ8aJ7.js";import"./AvatarStack-PbGcOMzO.js";import"./Badge-CoMRyfRW.js";import"./BigNumber-BuS1c3m1.js";import"./Breadcrumb-CGjUpZnK.js";import"./Link-BnTqUE_d.js";import"./Heading-B55jlt0S.js";import"./Legend-BR0OJkN5.js";import"./FileCardList-BfoXr3eL.js";import"./Image-Bzob2sy0.js";import"./Color-C7W8ONo_.js";import"./Content-BvjUUUqh.js";import"./ContextualHelpTrigger-SA4yZZHq.js";import"./CounterBadge-Bq8ZiO3w.js";import"./DonutChart-D4hkpW0U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGYJy9GV.js";import"./Header-DpcvefSw.js";import"./Initials-Bo59F16W.js";import"./InlineCode-D_4JxDia.js";import"./PopoverTrigger-BL7IIJoh.js";import"./Separator-BKXlt3AK.js";import"./Message-DDZrbHos.js";import"./MessageSeparator-BlAKvn2O.js";import"./NavigationGroup-b6mYgSHm.js";import"./Notification-Btu7hZt1.js";import"./NotificationProvider-QjMkPqGI.js";import"./ProgressBar-BZO70kmk.js";import"./Rating-CzHquKAT.js";import"./Skeleton-DpeTzzxW.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Nr as __namedExportsOrder,Kr as default};
