import{j as r,r as x}from"./iframe-Ce1y9mDa.js";import{c as m,u as a,F as d,t as E}from"./Form-CFvLKARQ.js";import{L as s}from"./Label-CYdyGifL.js";import{R as u,S as c}from"./ResetButton-BJASPMGl.js";import{B as l}from"./Button-7HXgfRQm.js";import{S as j,s as p}from"./Section-BnpA4R0K.js";import{A as b}from"./ActionGroup-GiQVcnjT.js";import{t as n,F as g}from"./Modal-B5SDnM4C.js";import"./index-nuYtCEEu.js";import"./dynamic-BLMgMZQd.js";import"./flowComponent-BBC2SOgI.js";import"./index-Dg18p-Ek.js";import"./clsx-B-dksMZM.js";import"./index-CQi4P5Ty.js";import"./useLocalizedStringFormatter-DJ1gfdUx.js";import"./context-Ds3IsYji.js";import"./browser-Cq8oxhIL.js";import"./utils-DDvzCibx.js";import"./ProgressBar-CB9towVx.js";import"./Hidden-C6qb3gI3.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cq_LhkIy.js";import"./Text-gkToWDQ-.js";import"./EmulatedBoldText-Dp9LuwQf.js";import"./LoadingSpinner-B-DDCCI1.js";import"./Button-CHIFuycL.js";import"./useFocusRing-DXrCjRvx.js";import"./useFocusable-7LnlwHoJ.js";import"./context-BS3tg5wC.js";import"./RSPContexts-Co0_PY2S.js";import"./Collection-Dzn6S5_i.js";import"./CollectionBuilder-DHKZo2jO.js";import"./SelectionIndicator-CEqK1ZkE.js";import"./Separator-DV4y1vPf.js";import"./useStatic-BHJIQiQW.js";import"./FileCardList-BlMAlev1.js";import"./Avatar-CBVDeneG.js";import"./AlertIcon-Dp0ZIISG.js";import"./Image-MnCK3KxN.js";import"./Link-D-pziWbs.js";import"./ControlledNotification-DXpIZWHx.js";import"./Flex-W6EMBjqA.js";import"./Accordion-CLOM0Ma4.js";import"./Alert-Cxybhncd.js";import"./AlertBadge-DOQyDmfm.js";import"./Align-BHiq55io.js";import"./AvatarStack-C1f-7D-W.js";import"./BigNumber-BuA-3GnB.js";import"./Breadcrumb-C2jdHzme.js";import"./Heading-CTEdnBPn.js";import"./Legend-D1sg630U.js";import"./Color-CF3eJFYM.js";import"./TableFooterRow-DSk7Viak.js";import"./SkeletonText-B6gTj_U8.js";import"./Content-DDAGDb2q.js";import"./CounterBadge-CvXy5Oz3.js";import"./DonutChart-DSfM5bil.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DNO1mdVn.js";import"./Header-B5pcUp1F.js";import"./Initials-DltL2xg8.js";import"./InlineCode-HVHT7k08.js";import"./LayoutCard-DG1Z6Pl5.js";import"./Separator-DXJX0Nok.js";import"./MessageSeparator-Byy5sV6o.js";import"./NavigationGroup-Cvtmebaj.js";import"./Notification-BfU9Xz2u.js";import"./NotificationProvider-CPeFG8LD.js";import"./ProgressBar-BH1las8m.js";import"./Rating-CFZ218Cx.js";import"./Skeleton-BBPWZ02g.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Cr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await p(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(d,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
