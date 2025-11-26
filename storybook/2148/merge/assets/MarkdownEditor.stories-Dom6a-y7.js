import{j as r,r as x}from"./iframe-BbaYMYQ1.js";import{c as m,u as a,F as d,t as E}from"./Form-BCkj35Nx.js";import{L as s}from"./Label-BraeMjNZ.js";import{R as u,S as c}from"./ResetButton-9YX4PzGE.js";import{B as l}from"./Button-KIO5b-Hc.js";import{S as j,s as p}from"./Section-Bklfm26f.js";import{A as b}from"./ActionGroup-QM-x3f8J.js";import{t as n,F as g}from"./Modal-DVvIdT0R.js";import"./index-nuYtCEEu.js";import"./dynamic-CvfiG9eK.js";import"./flowComponent-C662J8_x.js";import"./index-BgowJb9k.js";import"./clsx-B-dksMZM.js";import"./index-DF7s3pP8.js";import"./useLocalizedStringFormatter-CVO0oqQf.js";import"./context-DxIVJg5X.js";import"./browser-CF0_O6rk.js";import"./utils-C-StNnVz.js";import"./ProgressBar-Bb19OYa8.js";import"./Hidden-S-Rgpp-0.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CkjtEKGs.js";import"./Text-8_g1DnjB.js";import"./EmulatedBoldText-_shc_-go.js";import"./LoadingSpinner-Cwm6VlGh.js";import"./Button-B8_E6hAa.js";import"./useFocusRing-BzYkSJhL.js";import"./useFocusable-B3SCcOBQ.js";import"./context-CTAVigQn.js";import"./RSPContexts-vimGF_ZT.js";import"./Collection-CCUE8FQE.js";import"./CollectionBuilder-3YuRca9q.js";import"./SelectionIndicator-BTGWwJK9.js";import"./Separator-xUWU1DOd.js";import"./useStatic-CvDTMdvn.js";import"./FileCardList-BjZ9NUbt.js";import"./Avatar-CVLM7H3M.js";import"./AlertIcon-CRnyQnM7.js";import"./Image-CJ6kjDK0.js";import"./Link-rPNj3DYm.js";import"./ControlledNotification-BmRpUxJg.js";import"./Flex-pi8iCwQc.js";import"./Accordion-D8fzz0-b.js";import"./Alert-5Lfb6dl8.js";import"./AlertBadge-muxF3U8a.js";import"./Align-CHGtq9jk.js";import"./AvatarStack-j0GVx9dq.js";import"./BigNumber-B8_Z7Vks.js";import"./Breadcrumb-B6ecpmjh.js";import"./Heading-lbjZQMyr.js";import"./Legend-_0bhhOvJ.js";import"./Color-C-Cz2kw_.js";import"./TableFooterRow-r87NN87D.js";import"./SkeletonText-enZo4G0m.js";import"./Content-eRMHFgpO.js";import"./CounterBadge-dtasO-Oy.js";import"./DonutChart-Gb7C9vCW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-dqDgvxC5.js";import"./Header-BvDja-IR.js";import"./Initials-_1ADzBrq.js";import"./InlineCode-Cz0k_lz5.js";import"./LayoutCard-DHZQzmf9.js";import"./Separator-DCsOFsY1.js";import"./MessageSeparator-VDKEbj1t.js";import"./NavigationGroup-C2WRYrg4.js";import"./Notification-Dm5qCZlZ.js";import"./NotificationProvider-C4XAijkx.js";import"./ProgressBar-CrfBQbOk.js";import"./Rating-FkhIC6fL.js";import"./Skeleton-pQXVpVZ0.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Cr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await p(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(d,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
