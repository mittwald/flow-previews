import{j as r,r as h}from"./iframe-DGNlk_vV.js";import{a as p,u as a,F as d,t as F}from"./Form-BLozTJeu.js";import{L as s}from"./Label-C-LvYOEv.js";import{B as m}from"./Button-DhezJY1m.js";import{S as x}from"./Section-oB0UkYgk.js";import{A as E}from"./ActionGroup-B5jvEoxw.js";import{s as l}from"./Action-rOePJQYP.js";import{m as n,F as j}from"./Modal-Dqy40C9s.js";import"./index-nuYtCEEu.js";import"./dynamic-CKWjdq05.js";import"./flowComponent-DBkzNBu-.js";import"./index-C66SR6go.js";import"./clsx-B-dksMZM.js";import"./index-Bbt_YQGl.js";import"./useLocalizedStringFormatter-B2N1wxuv.js";import"./context-BQuOJgUT.js";import"./browser-ec9CZx7q.js";import"./utils-DL8q1so0.js";import"./ProgressBar-BoB3EqYI.js";import"./Hidden-HIIwl8Mf.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C6wJTaOd.js";import"./Text-DsxTDDTq.js";import"./EmulatedBoldText-Bby43l11.js";import"./LoadingSpinner-Vfx511Qq.js";import"./Button-DpZIFY9G.js";import"./useFocusRing-DxF43p1t.js";import"./useFocusable-CXOlwDl1.js";import"./Dialog-btvz5H9Q.js";import"./RSPContexts-ClaGjYhr.js";import"./OverlayArrow-DNNRAYvS.js";import"./useControlledState-UWLM0vlv.js";import"./Collection-ChtRuM1d.js";import"./CollectionBuilder-BJ_Sw59I.js";import"./SelectionIndicator-B0PsrhoI.js";import"./Separator-BOOd5uBZ.js";import"./getActionGroupSlot-DqNd_pBE.js";import"./useStatic-D_bMrpdM.js";import"./context-CfZGyFhp.js";import"./Popover-C8jQUmvs.js";import"./OverlayTrigger-Uz8qZ1np.js";import"./ControlledNotification-CLuRI8eV.js";import"./ClearPropsContextView-NN4EGP09.js";import"./LayoutCard-Bi4mSr74.js";import"./Accordion-ral1YniH.js";import"./Alert-XjfM08Aq.js";import"./AlertIcon-DkXhyzKN.js";import"./AlertBadge-CBXPV5eK.js";import"./Align-D4P59A8y.js";import"./TableFooterRow-BpMW61H4.js";import"./SkeletonText-J_7Ni8Mk.js";import"./Avatar-Dw_c7mqj.js";import"./AvatarStack-33IzluzG.js";import"./Badge-Dv-EenjR.js";import"./BigNumber-vSkzSwe6.js";import"./Breadcrumb-DzZ7GAz2.js";import"./Link-B-YmT7AY.js";import"./Heading-L3PTpp92.js";import"./Legend-CZSR-8sq.js";import"./FileCardList-CPC5o29W.js";import"./Image-ueWl-811.js";import"./CodeBlock-D4ETgOxi.js";import"./CopyButton-Bm9lbUjF.js";import"./Tooltip-MnuGQmV-.js";import"./react-children-utilities-C0bzJkZ7.js";import"./Color-DqV6qNlZ.js";import"./Content-ol93GJzs.js";import"./ContextualHelpTrigger-BP63Y_WB.js";import"./CounterBadge-hqs-zUxV.js";import"./DonutChart-BvfT4frN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BF1clYx1.js";import"./Header-Ch__bQKy.js";import"./Initials-C7j3L0wD.js";import"./InlineCode-C_cjRttB.js";import"./LabeledValue-C3kPJ1aU.js";import"./PopoverTrigger-DTI8QbE9.js";import"./Markdown-BMPTuZdO.js";import"./Separator-CJaXs9en.js";import"./Message-_Z1AL0qW.js";import"./MessageSeparator-CF43wMDs.js";import"./NavigationGroup-BUYtw5-B.js";import"./Notification-B4EHDdCQ.js";import"./NotificationProvider-DahzwZut.js";import"./ProgressBar-a361S-qP.js";import"./Rating-D2kSNe99.js";import"./Skeleton-BrrKNlRW.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const to=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,to as __namedExportsOrder,oo as default};
