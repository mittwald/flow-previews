import{j as r,r as j}from"./iframe-C__sNFq5.js";import{u as d,F as u,t as g,a as h}from"./Form-D-74H8Ei.js";import{B as i}from"./Button-BDJI0X8N.js";import{S as b}from"./Section-DnBUHG3h.js";import{A as E}from"./ActionGroup-BWUqf9tM.js";import{s as f}from"./Action-Df161gDF.js";import{A as m,T as l,F as S,O as T}from"./Modal-CVYufIfq.js";import{L as a}from"./Label-DR9idq0T.js";import"./index-nuYtCEEu.js";import"./dynamic-Bb5SDKXs.js";import"./flowComponent-0GXkR_Ju.js";import"./index-DiaLXgZW.js";import"./clsx-B-dksMZM.js";import"./index-BmGDZeJ3.js";import"./useLocalizedStringFormatter-BUptx6fZ.js";import"./context-CMi9l8Yg.js";import"./browser-iGgi6T92.js";import"./utils-Dqy6LFYQ.js";import"./IconWarning-BuzGzrbs.js";import"./Text--GxX46L7.js";import"./EmulatedBoldText-Bh8SXQjk.js";import"./LoadingSpinner-B1HBgs-9.js";import"./Button-B_7NxfoI.js";import"./ProgressBar-DtGgBXAS.js";import"./Hidden-BiQxXG9U.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BuunXMoE.js";import"./useFocusable-Dse99QZ8.js";import"./Dialog-CzLU07Qv.js";import"./RSPContexts-BMxPkdv6.js";import"./OverlayArrow-DhgMASFr.js";import"./useControlledState-2e7yt8gr.js";import"./Collection-Dh0ESm_f.js";import"./CollectionBuilder-ukVkSTyS.js";import"./SelectionIndicator-Cki_l3jq.js";import"./Separator-D0XClCWV.js";import"./getActionGroupSlot-BDjKjWbN.js";import"./useStatic-DMsmAY9f.js";import"./context-BsIjwuj0.js";import"./Popover-CT_v-Oh-.js";import"./OverlayTrigger-AiOoKC_G.js";import"./ControlledNotification-BlGPMSZv.js";import"./ClearPropsContextView-COiHjqok.js";import"./LayoutCard-B7t6mB7x.js";import"./Accordion-DR_OJ6pu.js";import"./Alert-CJasCYlq.js";import"./AlertIcon-w10mi-p6.js";import"./AlertBadge-D7vd76yD.js";import"./Align-DvvbrgAg.js";import"./TableFooterRow-Cam8SBFP.js";import"./SkeletonText-1eA6SUsS.js";import"./Avatar-BkbL9sxv.js";import"./AvatarStack-DBHsyjKm.js";import"./Badge-B6qVV2lP.js";import"./BigNumber-BInmMnEz.js";import"./Breadcrumb-BxuxEs4j.js";import"./Link-cdZD4X3X.js";import"./Heading-Cn6OX0c5.js";import"./Legend-DMNYYUF7.js";import"./FileCardList-v2rqfv4w.js";import"./Image-DmU9vLsf.js";import"./CodeBlock-CbuVyytm.js";import"./CopyButton-w1aIFwyN.js";import"./Tooltip-QyrtVdEX.js";import"./react-children-utilities-k_yO7uGU.js";import"./Color-D1Dr3OHg.js";import"./Content-DpPWD-Cp.js";import"./ContextualHelpTrigger-vUCASUlH.js";import"./CounterBadge-XDXXDWA7.js";import"./DonutChart-DiBE5F-C.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CZRqwcLx.js";import"./Header-BPnKGcIM.js";import"./Initials-BXM7Ff8o.js";import"./InlineCode-lIDroPmY.js";import"./LabeledValue-C0ZDjUhX.js";import"./PopoverTrigger-COcD_xjf.js";import"./Markdown-BbO5I6sS.js";import"./Separator-BbWjorNE.js";import"./Message-DpVEFVCo.js";import"./MessageSeparator-RW6cIBlZ.js";import"./NavigationGroup-yfAk-3tQ.js";import"./Notification-CZmN3Sfg.js";import"./NotificationProvider-DH0treXt.js";import"./ProgressBar-DI6Na1m9.js";import"./Rating-B5RSuqz4.js";import"./Skeleton-UTn3OGNP.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...p.parameters?.docs?.source}}};const se=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,se as __namedExportsOrder,me as default};
